// Worker de lopeteguisgarage.com.
// Las páginas salen de public/ (assets); este código solo atiende lo que no es un archivo:
// POST /api/avisame guarda el correo de quien quiere enterarse de la apertura.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/avisame") return env.ASSETS.fetch(request);
    if (request.method !== "POST") {
      return new Response("Método no permitido", { status: 405, headers: { Allow: "POST" } });
    }

    // La página usa fetch y pide JSON; sin JavaScript el formulario se envía normal y regresa a la página.
    const wantsJson = (request.headers.get("Accept") || "").includes("application/json");
    const reply = (status, code) => wantsJson
      ? Response.json({ ok: status < 300, code }, { status })
      : Response.redirect(new URL(`/?aviso=${code}#contacto`, url).href, 303);

    // Solo se aceptan envíos desde las páginas de este mismo sitio.
    const origin = request.headers.get("Origin");
    if (origin && origin !== url.origin) return reply(403, "error");

    let form;
    try {
      form = await request.formData();
    } catch {
      return reply(400, "invalido");
    }

    // Campo trampa: la gente no lo ve, los bots lo llenan. Se les responde "ok" sin guardar nada.
    if (form.get("website")) return reply(200, "ok");

    const email = String(form.get("email") || "").trim().toLowerCase();
    if (email.length > 254 || !EMAIL.test(email)) return reply(400, "invalido");

    try {
      const { meta } = await env.DB
        .prepare("INSERT OR IGNORE INTO avisos (email) VALUES (?)")
        .bind(email)
        .run();
      return reply(200, meta.changes ? "ok" : "repetido");
    } catch (err) {
      console.error("No se pudo guardar el aviso", err);
      return reply(500, "error");
    }
  },
};
