# Motor de vídeo · Mentes curiosas

Guía para fabricar cada vídeo con la misma calidad (y mejorarla). La deben seguir todas las tareas automáticas.

## Flujo de un vídeo
1. **Tema y guion** (`ideas/temas.json` para diarios; Euronews para noticias). Contrastar cada dato en ≥2 fuentes.
   - Duración: diario 1:00–2:30 · noticias ≥1:00 (requisito de monetización: más de 1 minuto).
2. **Voz** de Ximena (es-ES-XimenaNeural, ajustes por defecto). Guardar `voz.wav` y `words.json` (tiempo por palabra) en `videos/<fecha>_<tema>/`.
3. **Escenas**: escribir `scenes.js` en esa carpeta (ver `ejemplos/flamencos/scenes.js`).
4. **Construir**: `python3 motor/build.py videos/<carpeta>`.
5. **Revisar** con `DIR=videos/<carpeta> python3 motor/pv.py render.html t1,t2,… hoja.png` (una imagen por segundo como mínimo). Corregir solapes de texto, personajes cortados y elementos fuera de pantalla ANTES de renderizar.
6. **Renderizar** (2 procesos en paralelo): `DIR=videos/<carpeta> python3 motor/renderp.py 0 2 &` y `… 1 2 &`.
7. **Audio**: voz (loudnorm −14 LUFS) + música **que se perciba** (≈ −28 LUFS, unos 14 dB bajo la voz, con ducking suave) + efectos ocasionales (`motor/audio.py` como plantilla). Mezcla de referencia:
   `ffmpeg -i voz.wav -i musica.wav -i sfx.wav -filter_complex "[0:a]aresample=48000,loudnorm=I=-14:TP=-1.5:LRA=11,apad=whole_dur=DUR[v];[1:a]loudnorm=I=-28:TP=-9[m];[v][m][2:a]amix=inputs=3:normalize=0:duration=longest,atrim=0:DUR,alimiter=limit=0.95[a]" -map "[a]" -ar 48000 -ac 2 mezcla.wav`
   (Nota del usuario, 14/10: en el vídeo del esturión la música a −46 LUFS casi no se oía. Escuchar la mezcla antes de publicar: la música debe notarse en las pausas.)
8. **Codificar**: H.264 crf 18, 1080×1920, 30 fps, AAC 192k, `-movflags +faststart`.
9. **Publicar**: subir el mp4 a `videos/` en GitHub y crear el post en Buffer (canal @mentes.curiosas.tvs) con la URL raw. Sin etiqueta de IA.

## Ritmo (indicación del usuario, 14/10)
El vídeo del esturión se hizo lento. La gente tiene poca paciencia: **no se trata de acortar los vídeos, sino de darles más ritmo**.
- **Pausas de la voz**: Azure deja ~0,8 s entre frases. Recortar los silencios entre frases a ≈0,25–0,3 s (y ajustar `words.json` en consecuencia) antes de montar.
- **Guion**: frases cortas y con gancho; nada de introducciones. Abrir con el dato más sorprendente en los 2 primeros segundos y meter un «giro» o pregunta cada ~15 s.
- **Cortes**: cambio de escena o de plano cada 2–3 s como máximo (una escena larga se parte en varios planos: zoom, cambio de encuadre, elemento nuevo).
- **Movimiento constante**: la cámara siempre se mueve un poco (empuje/zoom lento); cada palabra clave tiene un golpe visual (pop, sello, sacudida) y su efecto de sonido.
- **Nada estático**: ningún plano quieto ni vacío más de ~1 s (en el esturión hubo huecos de 1–1,5 s sin nada nuevo en pantalla).
- Revisar en las hojas de contacto con 2 fotogramas por segundo y buscar huecos sin acción.

## Guía de estilo (copiada de los vídeos de referencia)
- **Fondo** gris #c6c6c6 con viñeteado suave; bordes ligeramente rugosos (filtro `rough`), grano fino.
- **Intercalar** escenas de *paisaje ilustrado* (sol con halo blanco, colinas violeta→magenta, nubes con contorno, bandas de vegetación, hojas en primer plano) con escenas de *motion graphics* sobre gris con línea de suelo negra.
- **Titulares**: serif (Instrument Serif) palabra a palabra con desenfoque+rebote; la palabra clave en *cursiva con degradado naranja→rosa* (`*palabra*` en `HL`). Números en sans (Inter).
- **Subtítulos**: caja negra pequeña abajo; palabra dicha blanca, actual rosa, futuras grises (automático desde `words.json`).
- **Etiquetas**: pastillas negras (`pill`) con línea guía; sellos que caen (`stampA`).
- **Transiciones**: barridos con desenfoque (`whipL/whipU/whipD`), zoom que atraviesa un objeto (`zoom`), apertura circular (`iris`). Nunca cortes secos.
- **Cada frase de la voz tiene un gesto visual** (algo aparece, se mueve o cambia). Nada estático >1,5 s.
- **Personajes**: Grano (narrador), Pipa (curiosa), Lenteja (experta), Garbanzo (escéptico). Interactúan con lo que pasa (señalan, reaccionan, usan objetos). En tragedias: sin bromas ni caras graciosas.
- **Cierre**: pregunta a la audiencia + «Te leo en comentarios» + logo + fuentes.

## Biblioteca de noticias (`news.js`, prefijo `NX.`)
Cada función `NX.nombre(opciones, lt)` devuelve SVG; `lt` = segundos desde que aparece. Colocar con `G(x, y, escala, rotación, …)`.
Muestrario completo: `motor/newsgal.js` (vídeo `catalogo_noticias.mp4`).

| Grupo | Componentes |
|---|---|
| Rótulos | `breaking` (franja ÚLTIMA HORA, pantalla completa), `live`, `source`, `lowerThird`, `keyPoints`, `quote`, `newspaper`, `phone`, `post`, `versus`, `stamp` (confirmado/desarrollo/falso/oficial/urgente), `timeline`, `calendar`, `clock`, `countdown` |
| Datos | `counter`, `bars`, `columns`, `line`, `donut`, `pctBar`, `gauge`, `iconArray`, `trend` |
| Mapas | `map` (zoom a cualquier país por nombre en español, resaltados, chinchetas lon/lat, rutas), `radar`, `pulse` |
| Catástrofes/clima | `hurricane`, `quake`, `fire`, `flood`, `storm`, `thermo`, `volcano` |
| Política/sociedad | `parliament`, `vote`, `ballot`, `podium`, `building`, `crowd`, `deal`, `flag` |
| Economía | `coins`, `price`, `market` |
| Ciencia/salud/tec | `rocket`, `orbit`, `virus`, `medical`, `chip` |
| Transporte/alertas | `vehicle` (plane/ship/train/car), `siren`, `alert`, `arrows` |

Regla (indicación del usuario): **no escatimar en recursos nuevos**. En cada noticia y cada vídeo diario se crean siempre que sea posible recursos nuevos hechos a medida (objetos, lugares, animales, gráficos, escenas) y **se añaden a la biblioteca** (`news.js` o `fauna.js`/`land.js`) con su entrada en el catálogo, para que la galería crezca con cada vídeo.
