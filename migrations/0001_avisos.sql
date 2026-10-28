-- Correos de quienes pidieron aviso de la apertura. Un correo por persona.
CREATE TABLE IF NOT EXISTS avisos (
  email TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now'))
);
