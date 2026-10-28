# Lopetegui's Garage

Página de prelanzamiento de [lopeteguisgarage.com](https://lopeteguisgarage.com): la persiana del taller sube con el scroll y deja ver el rack de merch (diseños de muestra). La única acción es seguir la marca en Instagram y TikTok.

## Estructura

| Ruta | Qué es |
|---|---|
| `public/index.html` | La página completa en un solo archivo (estilos, código e imágenes incluidos). Es lo único que se publica. |
| `PRODUCT.md` | Qué es la marca, a quién le habla y qué no se puede prometer todavía. |
| `DESIGN.md` | Sistema visual: colores, tipografía, componentes y reglas de la marca. |
| `.impeccable/` | Archivos de apoyo del diseño (tokens en `design.json` y el brief de la página). |

## Publicación (Cloudflare Pages)

Conecta este repo en Cloudflare (Workers & Pages → Create → Pages → Connect to Git) con esta configuración; después cada cambio en `main` se publica solo.

- Framework preset: **None**
- Build command: *(vacío)*
- Build output directory: **`public`**

Para cambiar la página, edita `public/index.html` y súbelo a `main`; Cloudflare la publica en un minuto.

## Ver en local

```sh
npx serve public
```

o simplemente abre `public/index.html` en el navegador.
