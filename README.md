# Lopetegui's Garage

Landing de pre-lanzamiento de [lopeteguisgarage.com](https://lopeteguisgarage.com): persiana del garage, hero "Built different.", manifiesto, muestras con frente/espalda y lista para el primer drop 2027.

## Estructura

| Ruta | Qué es |
|---|---|
| `public/index.html` | La página completa (estilos y código). Todo lo editable está en el bloque `CONFIG` del script: redes, formulario y prendas. |
| `public/img/` | Logo gótico (`lockup.webp`), monograma (`mono.webp`) y wordmark (`garage.webp`). |
| `public/og.jpg` | Imagen de vista previa al compartir el link (1200×630). |
| `public/apple-touch-icon.png` | Ícono para la pantalla de inicio del iPhone. |
| `src/worker.js` | Worker de Cloudflare: sirve `public/` y guarda los correos de "Avísame" (`POST /api/avisame`). |
| `migrations/` | Tabla `avisos` de la base D1 `lopeteguisgarage-avisos`. |
| `wrangler.jsonc` | Configuración del Worker: carpeta pública y base de datos. |
| `PRODUCT.md` | Qué es la marca, a quién le habla y qué no se puede prometer todavía. |
| `DESIGN.md` | Sistema visual: colores, tipografía, componentes y reglas de la marca. |

Solo se publica `public/`; los documentos de la raíz se quedan en el repo.

## Publicación (Cloudflare Workers)

El Worker `lopeteguisgarage` está conectado a este repo con Workers Builds: cada cambio en `main` se publica solo en un minuto.

## Ver los correos de "Avísame"

En Cloudflare: **Storage & Databases → D1 → lopeteguisgarage-avisos → Console**, y ejecuta:

```sql
SELECT email, created_at FROM avisos ORDER BY created_at;
```

O desde la terminal, con sesión de Cloudflare iniciada:

```sh
npx wrangler d1 execute lopeteguisgarage-avisos --remote --command "SELECT email, created_at FROM avisos ORDER BY created_at"
```

## Ver en local

```sh
npx wrangler d1 migrations apply lopeteguisgarage-avisos --local
npx wrangler dev
```

Abre http://localhost:8787. El formulario guarda en una base local, no en la real.
