# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Comunidad hispanohablante de car culture, motos y pista que llega a lopeteguisgarage.com desde los perfiles de @lopeteguisgarage en Instagram y TikTok, casi siempre desde el celular. Su tarea: entender qué es Lopetegui's Garage, ver hacia dónde va la ropa y entrar a la lista del primer drop.

## Product Purpose

Landing de pre-lanzamiento de Lopetegui's Garage, una marca de ropa lifestyle nacida de la cultura de taller/garage y pista. Funciona si el visitante deja su correo para el primer drop (2027) y, en segundo lugar, si sigue a la marca en redes.

## Positioning

No es merch genérico: es identidad de marca. Primero se fabrican prendas para el equipo fundador; el primer drop público es limitado y por pre-order, y abre en 2027. Referencia de energía (no de forma): marcas que convierten el motorsport en lifestyle, con drops con nombre, gráfica de dorsales y damero, y comunidad primero.

## Capabilities and Constraints

- Sitio estático en `public/` servido por un Worker de Cloudflare (`src/worker.js`); el formulario guarda correos en la base D1 `lopeteguisgarage-avisos` vía `POST /api/avisame`.
- No es e-commerce: las prendas son diseños de muestra y se rotulan "Diseños de muestra · Todavía no a la venta".
- Sin fotos reales todavía: las muestras son bocetos técnicos SVG, reemplazables por fotos desde `CONFIG.garments[].img`.
- No inventar precios, fechas exactas, handles, cifras ni testimonios.

## Brand Commitments

- Nombre: Lopetegui's Garage. Monograma: LG. Motivo gráfico: 07. EST. 2026 · apertura y primer drop 2027 (sin día ni mes).
- Valores sagrados, en inglés y en este orden: Built different · Made to last · Quality over quantity · Passion drives us.
- Logo: "LOPETEGUI'S / GARAGE" en letra gótica desgastada (`public/img/lockup.webp`); se usa en la persiana.
- Redes: https://instagram.com/lopeteguisgarage y https://tiktok.com/@lopeteguisgarage (del sitio original del dueño; pendientes de reconfirmar).
- Interfaz en español; los slogans de marca se quedan en inglés.
- Muestras definidas por el dueño: Hoodie "Garage 07" (oversized, 450 GSM, bordado en pecho + serigrafía en espalda), Tee "Full Send" (boxy, 240 GSM, serigrafía a 2 tintas), Work Jacket "Crew" (lona 12 oz, parches bordados).

## Product Principles

1. Pre-lanzamiento honesto: nada da a entender que ya se vende.
2. Todo camino termina en la lista del primer drop.
3. Mobile-first: el tráfico llega desde Instagram y TikTok.
4. Comunidad primero: la lista entra antes y con precio de fundador.
