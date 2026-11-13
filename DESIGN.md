---
name: Lopetegui's Garage — 07
colors:
  asphalt: "#0B0B0C"
  carbon: "#161618"
  carbon-2: "#1E1E21"
  bone: "#F2EFE9"
  bone-2: "rgba(242,239,233,0.74)"
  bone-3: "rgba(242,239,233,0.6)"
  line: "rgba(242,239,233,0.12)"
  racing-red: "#E10600"
  red-press: "#B80500"
typography:
  display:
    fontFamily: "Anton"
    fontSize: "clamp(72px, 15vw, 232px)"
    lineHeight: "0.86"
    textTransform: "uppercase"
  body:
    fontFamily: "Space Grotesk"
    fontSize: "16px"
    lineHeight: "1.6"
  label:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: "500"
    letterSpacing: "0.18em"
    textTransform: "uppercase"
rounded:
  none: "0px"
spacing:
  page: "clamp(16px, 4vw, 48px)"
  section: "clamp(80px, 12vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.racing-red}"
    textColor: "#FFFFFF"
    rounded: "{rounded.none}"
    height: "52px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    height: "52px"
---

# Design System: Lopetegui's Garage — 07

## Overview

Póster de carreras en asfalto. Fondo casi negro, texto hueso, un único acento rojo de pista y el número 07 como motivo. La gráfica viene del mundo del motorsport: dorsales grandes, damero, fichas técnicas en monoespaciada. Densidad baja, tipografía enorme, nada de adornos que no vengan de ese mundo.

## Colors

- **Asphalt** (#0B0B0C): fondo de la página.
- **Carbon** (#161618 / #1E1E21): paneles, la sección de muestras, campos de formulario.
- **Bone** (#F2EFE9): texto y trazo de los bocetos; variantes al 74% y 60% para texto secundario.
- **Racing red** (#E10600): acento único. Botones primarios (texto blanco, contraste ≥4.5:1), punto final de los titulares, índices, dorsales. En texto pequeño solo como marca gráfica, nunca como único portador de información.

## Typography

- **Display — Anton:** titulares en mayúsculas, interlineado 0.86–0.92. El 07 del hero en contorno (stroke hueso al 11%).
- **Cuerpo — Space Grotesk:** 16–20px, 1.55–1.6.
- **Etiquetas técnicas — JetBrains Mono:** 12px, mayúsculas, tracking 0.18em (spec tags, índices 01–04, notas).

## Components

- **Persiana:** overlay a pantalla completa con lamas de acero, logo gótico, "EST. 2026 · Apertura 2027" y el botón rojo "Sube la persiana". Bloquea el scroll e inertiza el sitio hasta abrir; sube en 1.1s con easing (0.7, 0, 0.2, 1). Si intentan hacer scroll, se levanta 14px como pista. Se activa solo desde JavaScript.
- **Nav fijo:** "LG■07" (cuadro rojo), "EST. 2026" en mono, botón "Avísame".
- **Botones:** rectángulos sin redondeo de 52px; primario rojo con texto blanco, fantasma con contorno hueso. La flecha se desplaza 3px al pasar el cursor.
- **Marquee:** los cuatro valores en Anton separados por "07" rojo en mono, 38s lineal; quieto con movimiento reducido.
- **Manifiesto:** grid 2×2 (1 columna en celular) con líneas de 1px; índice mono 01–04 con barra roja.
- **Tarjeta de muestra:** panel asfalto con borde de 1px, cabecera mono, vista 5:6 con boceto SVG o foto, toggle Frente/Espalda (aria-pressed), nombre en Anton, ficha técnica en `dl` mono.
- **Damero:** franja de 16px (cuadros de 8px) como separador entre secciones y en el footer.
- **Footer:** enlaces enormes a Instagram y TikTok en Anton con flecha diagonal.

## Motion

Micro-interacciones sobrias: aparición al hacer scroll (0.7s, 22px), marquee, persiana, flechas de botones. Todo se desactiva con `prefers-reduced-motion`.

## Do's and Don'ts

- **Do** mantener el rojo como único color de acento.
- **Do** usar el 07, el damero y las fichas técnicas como gráfica de marca.
- **Don't** usar degradados de color, brillos, vidrio ni esquinas redondeadas.
- **Don't** inventar precios, fechas, handles ni cifras.
- **Don't** copiar logos, gráficos, nombres de colección ni textos de marcas de referencia.
