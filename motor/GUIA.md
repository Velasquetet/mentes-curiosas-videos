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
6b. **Revisión fotograma a fotograma (obligatoria, indicación del usuario 17/10)**: después de renderizar y ANTES de codificar, `python3 motor/review.py videos/<carpeta>` y mirar TODAS las hojas de `revision/` (todos los fotogramas, uno a uno). Si algo está descuadrado, cortado, solapado o fuera de pantalla: corregir `scenes.js`, volver a renderizar ese tramo (`renderp.py K N inicio fin`) y repetir la revisión de ese tramo.
7. **Audio**: voz (loudnorm −14 LUFS) + música **que se perciba** (≈ −28 LUFS, unos 14 dB bajo la voz, con ducking suave) + efectos ocasionales (`motor/audio.py` como plantilla). Mezcla de referencia:
   `ffmpeg -i voz.wav -i musica.wav -i sfx.wav -filter_complex "[0:a]aresample=48000,loudnorm=I=-14:TP=-1.5:LRA=11,apad=whole_dur=DUR[v];[1:a]loudnorm=I=-28:TP=-9[m];[v][m][2:a]amix=inputs=3:normalize=0:duration=longest,atrim=0:DUR,alimiter=limit=0.95[a]" -map "[a]" -ar 48000 -ac 2 mezcla.wav`
   (Nota del usuario, 14/10: en el vídeo del esturión la música a −46 LUFS casi no se oía. Escuchar la mezcla antes de publicar: la música debe notarse en las pausas.)
8. **Codificar**: H.264 crf 18, 1080×1920, 30 fps, AAC 192k, `-movflags +faststart`.
9. **Publicar**: subir el mp4 a `videos/` en GitHub y crear el post en Buffer (canal @mentes.curiosas.tvs) con la URL raw. Sin etiqueta de IA.

## Ritmo (indicaciones del usuario, 14/10)
El vídeo del esturión se hizo lento: hay que darle más ritmo **sin acortar los vídeos**. Pero sin pasarse («no exageres tanto»): que sea ágil, no frenético.
- **Pausas de la voz**: recortar los silencios largos entre frases (Azure deja ~0,8 s) a unos 0,35–0,45 s, que siga sonando natural (`trim.py` del vídeo de los reptiles como plantilla).
- **Guion**: empezar directamente con el gancho y quitar frases de relleno.
- **Escenas**: que cada frase tenga algo que pase en pantalla; evitar planos quietos largos. No hace falta cortar cada 2 s.
- Música y efectos como en el punto 7, sin saturar.

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

### Ampliación (17/10/2026) · `motor/news2.js` (+115 entradas en el catálogo)
| Grupo | Componentes |
|---|---|
| Desastres/clima/emergencias | `tsunami`, `tornado`, `drought`, `blizzard`, `landslide`, `heatcity`, `smoke` (calidad del aire), `collapse`, `blackout`, `evacuation`, `helicopter`, `ambulance`, `firetruck`, `sandbags`, `magscale` (comparar magnitudes), `hail`, `oilspill`, `glacier`, `forecast` (previsión 4 días), `wind` |
| Política/sociedad/justicia/conflicto | `gavel`, `justice`, `handcuffs`, `signing`, `summit` (banderas por colores), `border`, `passport`, `tents`, `strike`, `sanctions`, `dove` (alto el fuego), `drone`, `warship`, `armored`, `intercept`, `resign`, `poll`, `debate`, `megaphone`, `briefcase`, `lawbook`, `tape`, `police` |
| Economía/energía | `oil`, `gaspump`, `cart` (IPC), `housing`, `bank`, `card`, `crypto`, `factory`, `port`, `tariff`, `queue` (paro), `plug` (precio de la luz), `solar`, `windturbine`, `nuclear`, `battery`, `charger` |
| Ciencia/espacio/salud/tecnología | `telescope`, `asteroid`, `satellite`, `lander`, `mars`, `eclipse`, `comet`, `microscope`, `flask`, `vaccine`, `pills`, `ecg`, `brain`, `robot`, `chatai`, `cyber`, `servers`, `antenna` |
| Rótulos/datos/mapas | `ticker` (teletipo, pantalla completa), `headcard`, `tv`, `factcheck`, `ranking`, `compare` («×N veces más»), `heights`, `globe`, `split`, `pie`, `stack`, `distance`, `search`, `notifs`, `email`, `leak`, `bigq` |
| Transporte | `departures` (panel de vuelos), `traffic`, `metro`, `bike`, `cruise`, `roadblock` |
| Deporte/cultura | `goal`, `trophy`, `scoreboard`, `stadium`, `hoop`, `racecar`, `finish`, `award`, `concert`, `clapper`, `gamepad`, `book`, `painting`, `music` |
Recursos añadidos después: `leapclock`, `atomclock`, `drift` (segundo intercalar); `lungs` (pulmones con sus 5 lóbulos, numerar/resaltar/quitar uno) y `hospital` (fachada con cruz y puerta que se abre) — noticia del alta del Papa; famoso `leon14` (León XIV) en `FAMOSOS`.
Las opciones de cada uno están en el comentario encima de su definición en `news2.js`. Los recursos nuevos de cada vídeo pueden ir en `news.js` o en `news2.js` (con su `n2cat(...)`).

Regla (indicación del usuario): **no escatimar en recursos nuevos**. En cada noticia y cada vídeo diario se crean siempre que sea posible recursos nuevos hechos a medida (objetos, lugares, animales, gráficos, escenas) y **se añaden a la biblioteca** (`news.js` o `fauna.js`/`land.js`) con su entrada en el catálogo, para que la galería crezca con cada vídeo.

## Lo aprendido de 5 vídeos de referencia más (17/10/2026)
Analizados fotograma a fotograma (Luis XIV y la fístula, fraude electoral, el gato de Schrödinger, acuerdos electorales, acampada). Qué copiar:
- **Reparto (decisión del usuario, 17/10)**:
  - **Protagonistas**: siempre Grano, Pipa, Lenteja y Garbanzo.
  - **Secundarios** (público, gente, extras, «un cirujano», «un votante»…): bolas y formas geométricas de color con cara simple → `blobS()`, `blobCrowd()`, `NX.extras`, `NX.lineup`, `NX.pyramid`.
  - **Protagonistas invitados** (personas reales de la noticia o de la historia: Napoleón, Pedro Sánchez, Donald Trump…): estilo `figure()` pero **parecidos a la persona real** (peinado, color de pelo, barba, ropa típica, sombrero) → `FAMOSOS` y `famoso('clave')` en `cast.js`, `NX.cast(famoso('trump'),lt)`. Si sale alguien que no está, se crea su entrada en `FAMOSOS` copiando sus rasgos reconocibles y se añade al catálogo.
  - Reglas con personas reales: aspecto reconocible y respetuoso (sin burlarse del físico), el mismo trato para todos los políticos y **nunca** ponerles frases que no hayan dicho (solo citas reales, con fuente).
- **Un animal recurrente** con gracia (el gato): `catS()` / `NX.cat` (feliz, dormido, «muerto» con aureola).
- **Escenarios dibujados a línea** fina negra sobre gris (palacios con ventanas en arco, estanterías, oficinas, calles) con líneas de suelo en perspectiva: `roomS()` / `NX.room`.
- **Cámara dentro del mismo escenario**: en vez de muchas escenas sueltas, la cámara se acerca y se aleja dentro de un mismo «set» (del palacio a la peluca, de la peluca al armario) y solo cambia de escenario con barridos, zoom o **corte con interferencia** (`in:{type:'glitch'}`).
- **Recursos de explicación**: rejilla de tarjetas que se rellena («había:» → `NX.cardgrid`), suma de tarjetas = resultado (`NX.cardsum`), tarjetas tachadas sobre negro («no es esto, no es aquello» → `NX.negate`), expedientes con sellos (`NX.dossier`), pizarra con recuento (`NX.tally`), plano técnico azul con cotas (`NX.blueprint`, `dimS()`), telón que se abre con cartel (`NX.curtain`), año gigante con rayas (`NX.bigyear`), columnas que crecen hasta el cielo para comparar (`NX.pillar`), cotas para comparar tamaños (`dimS`), bocadillos con texto que se escribe (`NX.bubble`, `NX.chatter`), cita tachada (`NX.strikequote`), piezas de puzle (`NX.puzzle`), reloj de arena, ovillo, nube de pensamiento, manos gigantes.
- **Golpes de efecto**: pantalla negra con «Y *no.*» en grande (`NX.punch`) y foco sobre negro para presentar a alguien (`NX.spot`). Úsalos 1–2 veces por vídeo, en los giros.
- **Fondo de rayas grises** (`stripesBg`) y de cuadrícula (`gridBg`) para las escenas de explicación.
- **Tono**: frases cortas, humor, se habla al espectador («Tú verás», «Tranquilos», «¿Veis el problema?»), un giro cada pocos segundos. La referencia usa tacos; nosotros no (salvo que el usuario lo pida).
- **Gancho**: empiezan con una pregunta provocadora o una afirmación rotunda («¿Quieres hacer fraude electoral?», «El experimento más famoso de la física…») y en 2–3 s ya hay un personaje haciendo algo.

