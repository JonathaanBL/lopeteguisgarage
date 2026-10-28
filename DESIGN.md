---
name: Lopetegui's Garage
description: Taller cerrado de noche bajo un solo foco; la persiana sube y adentro cuelga el merch.
colors:
  night-void: "#020205"
  workshop-dark: "#030307"
  steel-highlight: "#26242f"
  steel-face: "#1c1b25"
  steel-shade: "#13121b"
  steel-deep: "#0c0b12"
  slat-groove: "#050409"
  garage-pink: "#e94bd8"
  pink-chalk: "#db83e4"
  neon-core: "#f6c9f0"
  garage-violet: "#8b3fe0"
  glitch-blue: "#006dff"
  glitch-magenta: "#ff18b2"
  chrome-light: "#e9eaf0"
  chrome-mid: "#9b9daa"
  paper-white: "#f4f4f7"
  bone-stencil: "#ecebe4"
  pink-wash: "rgba(233,75,216,0.13)"
  pink-wash-strong: "rgba(233,75,216,0.26)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(34px, 4.6vw, 68px)"
    fontWeight: 800
    lineHeight: 0.92
  title:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(22px, 2.6vw, 36px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "0.1em"
  body:
    fontFamily: "Barlow, Arial, sans-serif"
    fontSize: "clamp(17px, 1.3vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.24em"
  neon:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(13px, 1.35vw, 18px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.5em"
  stencil:
    fontFamily: "Barlow Semi Condensed, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(13px, 1.35vw, 20px)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.3em"
rounded:
  none: "0px"
  grip: "6px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "28px"
  page: "clamp(16px, 4vw, 56px)"
components:
  button-follow:
    backgroundColor: "{colors.pink-wash}"
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 26px"
    height: "52px"
  button-follow-hover:
    backgroundColor: "{colors.pink-wash-strong}"
    textColor: "{colors.paper-white}"
  toggle-segment:
    textColor: "{colors.paper-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  toggle-segment-active:
    backgroundColor: "rgba(233,75,216,0.16)"
    textColor: "{colors.paper-white}"
  field-email:
    backgroundColor: "rgba(244,244,247,0.045)"
    textColor: "{colors.paper-white}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "52px"
  field-email-focus:
    backgroundColor: "rgba(244,244,247,0.07)"
    textColor: "{colors.paper-white}"
---

# Design System: Lopetegui's Garage

## Overview

**Creative North Star: "La persiana del taller"**

Lopetegui's Garage es un taller que todavía no abre, visto de noche bajo un solo foco. La página entera es ese lugar. Una persiana de lámina corrugada, con el logo gótico pintado encima, ocupa la primera pantalla y sube con el scroll. Adentro hay una pared oscura, un riel cromado con el merch colgado, los lemas pintados en esténcil y un piso. El mundo se arma con materiales reales: acero, cromo, pintura, tela y neón. Nada de capas decorativas.

El color viene de la identidad del dueño: negro casi absoluto, rayas de glitch azul, violeta y rosa en los bordes, y un único tubo de neón rosa. El rosa de la marca hace de rotulación (esquinas, divisores, subrayados) y solo el neón brilla. La densidad es baja: mucho negro, pocas piezas, cada una con peso.

El movimiento es escaso y siempre físico: la persiana que sube, la prenda que gira en el riel, la etiqueta que se mece y el destello de glitch de la marca de vez en cuando. Fuera de eso, la página está quieta.

**Key Characteristics:**
- Fondo noche (#020205) con una luz cenital fría y un piso marcado.
- Logo gótico real (imagen de la marca), nunca sustituido por una fuente.
- Rosa de marca plano para rotular; un solo elemento con brillo de neón.
- Controles marcados con cuatro esquinas rosas, como el marco del monograma LG.
- Tipografía Barlow en tres anchos: condensada para títulos, semicondensada espaciada para rótulos y normal para el texto corrido.

## Colors

Noche y acero con un rosa de marca que rotula y un neón que es la única luz de color.

### Primary
- **Rosa Garage** (garage-pink): esquinas de los controles, subrayado de EST. 2026, divisores entre lemas, segmento activo del interruptor y marca de foco en el riel. Siempre plano.
- **Núcleo de neón** (neon-core): el texto y las líneas del tubo PRÓXIMAMENTE. Es el único color con resplandor.

### Secondary
- **Rosa tiza** (pink-chalk): textos secundarios rosados, como la línea de "diseños de muestra" y el contador del detalle.
- **Violeta Garage** (garage-violet): solo como color de prenda y en la paleta de las rayas de glitch.

### Tertiary
- **Azul y magenta de glitch** (glitch-blue, glitch-magenta): las barras del destello de glitch heredadas del sitio original. Nunca se usan en controles ni en texto.

### Neutral
- **Noche** (night-void): fondo de la página.
- **Taller oscuro** (workshop-dark): pared del interior y del cierre, bajo la luz cenital.
- **Acero** (steel-highlight → steel-deep, slat-groove): las lamas de la persiana, de la cara iluminada a la ranura.
- **Cromo** (chrome-light, chrome-mid): riel, gancho, jaladera y cerradura.
- **Blanco papel** (paper-white): texto principal y botones.
- **Hueso de esténcil** (bone-stencil): los lemas pintados en la pared.

### Named Rules
**The One Neon Rule.** Solo PRÓXIMAMENTE brilla. Todo lo demás en rosa es plano: sin resplandores ni sombras de color.

**The Material Gradient Rule.** Los degradados solo dibujan materia física: lamas de acero, cromo, volumen de las prendas y la luz del foco. Nunca rellenan fondos decorativos ni texto.

## Typography

**Display Font:** Barlow Condensed (con Arial Narrow)
**Body Font:** Barlow (con Arial)
**Label Font:** Barlow Semi Condensed (con Arial Narrow)

**Character:** Una familia de rotulación industrial en tres anchos. La gótica del logo es la voz de la marca y vive solo en la imagen del logo y en los estampados de las prendas.

### Hierarchy
- **Display** (800, clamp 34–68px, 0.92): rótulos de sección pintados en mayúsculas, como "Merch en camino" y "Síguenos para la apertura".
- **Title** (700, clamp 22–36px, 1.05, 0.1em): nombre de la prenda en el detalle.
- **Body** (400, clamp 17–19px, 1.6): texto corrido, máximo 44ch.
- **Label** (600, 13px, 0.24em, mayúsculas): botones, interruptores, cerrar y pie de página.
- **Neon** (600, clamp 13–18px, 0.5em, mayúsculas): solo el tubo PRÓXIMAMENTE.
- **Stencil** (600, clamp 13–20px, 0.3em, mayúsculas, con desgaste): los lemas en la pared.

### Named Rules
**The Real Lettering Rule.** El logo LOPETEGUI'S / GARAGE y el monograma LG son la imagen de la marca. Nunca se reescriben con una fuente gótica parecida.

**The No Kicker Rule.** Ningún título lleva una etiqueta pequeña encima. Las aclaraciones, como "Diseño de muestra", van debajo del contenido al que se refieren.

## Layout

Una sola columna centrada. La primera parte es un escenario fijo de 100svh dentro de un recorrido de 200svh: la persiana sube a medida que se hace scroll y el interior queda debajo. Después viene un cierre centrado con la misma luz y el mismo piso. Márgenes laterales con clamp(16px, 4vw, 56px).

En el celular (700px o menos), el rack pasa a ser un riel deslizable con scroll-snap. Cada espacio mide 50vw, las prendas ocupan alrededor del 40% de la altura de la pantalla y la del centro queda de frente. Los botones de seguir se apilan a lo ancho completo. Con movimiento reducido, la persiana y el interior son dos secciones normales, una tras otra.

## Elevation & Depth

La profundidad viene de la luz y de los materiales, no de tarjetas elevadas. Un foco cenital frío ilumina la pared y un piso más oscuro cierra la escena. Solo proyectan sombra los objetos físicos: la persiana al subir, las prendas colgadas, el cromo y la propia luz del neón.

### Shadow Vocabulary
- **Persiana en movimiento** (`box-shadow: 0 26px 40px rgba(0,0,0,.85)`): el borde inferior de la persiana sobre el interior.
- **Prenda colgada** (`filter: drop-shadow(0 14px 22px rgba(0,0,0,.6))`; en el detalle, `0 28px 40px rgba(0,0,0,.65)`).
- **Cromo** (`box-shadow: 0 4px 8px rgba(0,0,0,.7)`): jaladera y cerradura.
- **Neón** (`text-shadow: 0 0 4px rgba(233,75,216,.95), 0 0 14px rgba(233,75,216,.75), 0 0 30px rgba(233,75,216,.45)`): solo el tubo PRÓXIMAMENTE.

### Named Rules
**The Single Lamp Rule.** Una sola fuente de luz desde arriba. Si un elemento necesita destacarse, se ilumina con el foco o se acerca, no se eleva con una sombra de tarjeta.

## Shapes

Esquinas rectas en todo lo que es interfaz: botones, interruptor y paneles (0px). Lo redondeado se reserva para objetos de metal: la jaladera (6px), el riel y la cerradura. Los controles no llevan un borde completo, sino cuatro esquinas rosas que crecen al pasar el cursor.

## Components

### Buttons
- **Character:** placas rotuladas en el riel del taller.
- **Shape:** rectángulo sin redondeo (0px), 52px de alto.
- **Primary (seguir):** fondo de rosa velado, texto blanco papel en Label e ícono SVG de 20px. El texto nombra la acción completa: "Síguenos · Instagram".
- **Hover / Focus:** las esquinas crecen de 10px a 20px y el fondo sube a rosa velado fuerte en 0.3s, con ease-out. El foco del teclado se marca con un contorno rosa de 2px, separado 3px.

### Corner Frame (marco LG)
- **Style:** cuatro esquinas rosas de 1.5px dibujadas en un pseudo-elemento. Enmarcan el monograma LG, los botones y las flechas.
- **State:** el largo de las esquinas (`--s`) crece al pasar el cursor o al enfocar.

### Field (correo de "Avísame")
- **Character:** una ranura de la pared junto a la placa de "Avísame", del mismo alto (52px).
- **Style:** superficie apenas aclarada, sin contorno, con el marco de esquinas en acero (blanco papel al 42%). Texto en Body de 16px (para que iOS no haga zoom), cursor rosa y placeholder al 56%.
- **State:** al pasar el cursor, las esquinas suben al 64%. Al escribir, se vuelven rosas, crecen a 20px y engrosan a 2px; esa es la señal de foco, sin contorno extra. Con un error, las esquinas se ponen rosa tiza y el mensaje aparece debajo, en rosa tiza.
- **Copy:** el botón dice "Avísame". Los mensajes nombran el problema y la salida: "Revisa el correo: debe verse como nombre@correo.com."

### Toggle (Frente / Espalda)
- **Style:** superficie rellena y tenue, sin contorno, con dos segmentos en Label.
- **State:** el segmento activo lleva fondo rosa al 16% y un borde interior rosa de 1px.

### Hang Tags (colores)
- **Style:** etiquetas de cartón del color de la tela, con perforación, cordel de 1px y nombre del color en vertical.
- **State:** la seleccionada baja 6px y brilla en su propio color. Al pasar el cursor se mece 5°.

### Rack (componente propio)
Un riel cromado del que cuelgan las prendas. En reposo se ven de lado (rotateY ±72°, escala 0.86). La prenda activa gira de frente en 600ms con ease-out y abre espacio en el riel. El foco del teclado pinta de rosa el tramo del riel sobre la prenda. En el celular, el riel se desliza y la prenda del centro queda de frente.

### Shutter (componente propio)
Persiana de lamas de acero con ranuras que atraviesan el logo pintado. Tiene guías laterales fijas, un cajón superior y un riel inferior más grueso con la jaladera, la cerradura y los botones de seguir. Sube atada al scroll con un transform translate3d; no tiene animación propia.

## Do's and Don'ts

### Do:
- **Do** usar el logo de la marca como imagen, a 56vw en la persiana de escritorio y a 84vw en el celular.
- **Do** marcar los controles con las cuatro esquinas rosas y fondo de rosa velado.
- **Do** mantener el movimiento en cinco gestos: la persiana atada al scroll, el giro del rack (600ms), el detalle (250–300ms), el destello de glitch cada 6–12s y la inclinación del monograma LG en el cierre (hasta 16°, 700ms con ease-out, solo con mouse). Respetar prefers-reduced-motion.
- **Do** iluminar con el foco cenital y cerrar las escenas con el piso.

### Don't:
- **Don't** añadir resplandores de color fuera del neón de PRÓXIMAMENTE.
- **Don't** usar pastillas redondeadas, cajas con contorno de 1px ni sombras de tarjeta en la interfaz.
- **Don't** poner etiquetas pequeñas encima de los títulos ni numerar secciones de forma decorativa.
- **Don't** usar degradados en texto o como relleno decorativo.
- **Don't** sustituir el logo gótico por una fuente parecida.
