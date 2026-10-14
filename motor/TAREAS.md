# Tareas automáticas · Mentes curiosas

Procedimiento que siguen las tareas programadas. Cada ejecución empieza en una sesión nueva, sin memoria: todo lo necesario está aquí, en `motor/GUIA.md` y en `ideas/`.

## 0 · Preparar el entorno (siempre)
1. Repositorio: si no existe `/home/claude/mentes-curiosas-videos`, clonar `https://github.com/Velasquetet/mentes-curiosas-videos` ahí. Después `git pull`.
2. `cd motor && npm install` si falta `motor/node_modules`.
3. Python: `pip install --break-system-packages playwright numpy scipy` si faltan. Chromium ya está instalado (no ejecutar `playwright install`). ffmpeg debe existir (`apt-get install -y ffmpeg` si falta).
4. Leer `motor/GUIA.md` (estilo y biblioteca) e `ideas/fuentes.md` (fuentes, criterios, duraciones).

## 1 · Voz (Ximena, en GitHub Actions, gratis)
1. Escribir el guion en `tts/<fecha>_<tema>.txt` (solo el texto que se lee, en español de España).
2. `git add` + `commit` + `push`. El workflow `voz-ximena` genera `tts/<…>.wav` y `tts/<…>.words.json` y los sube (≈1 min).
3. Esperar y comprobar: `gh api "repos/Velasquetet/mentes-curiosas-videos/actions/runs?per_page=1" --jq '.workflow_runs[0]|[.status,.conclusion]'` hasta `completed success`; luego `git pull`.
   - Si no arranca solo: `gh api -X POST repos/Velasquetet/mentes-curiosas-videos/actions/workflows/tts.yml/dispatches -f ref=main`.
   - (Nota: `gh` no tiene GraphQL aquí; usar siempre `gh api` REST.)
4. Copiar a la carpeta del vídeo `videos/<fecha>_<tema>/`: `voz.wav` y `words.json` (formato `[{t,d,w}]`, segundos).
5. Duración del audio = duración del vídeo (+0,6 s de cola). Diario: 60–150 s. Noticia: ≥ 60 s. Si se queda corto, ampliar el guion y regenerar (borrar el .wav viejo).

## 2 · Vídeo
Seguir `motor/GUIA.md` → «Flujo de un vídeo» (escenas en `scenes.js`, `build.py`, revisión con `pv.py` mirando las hojas de contacto, `renderp.py` en 2 procesos, audio, ffmpeg).
- Audio: adaptar `motor/audio.py` (DUR y los instantes de los efectos a las transiciones del vídeo nuevo); música muy baja, efectos ocasionales; voz a −14 LUFS.
- Calidad: revisar al menos un fotograma por segundo antes de renderizar. Nada de textos solapados, cortados o fuera de pantalla.
- Crear siempre al menos un recurso nuevo a medida y añadirlo a la biblioteca (`news.js`, `fauna.js` o `land.js`) con su entrada en el catálogo (`newsgal.js`).
- No subir fotogramas ni `render.html` (están en .gitignore).

## 3 · Publicar
1. Copiar el mp4 final a `videos/<fecha>_<tema>.mp4`, commit + push (el repo es público; la URL raw es `https://raw.githubusercontent.com/Velasquetet/mentes-curiosas-videos/main/videos/<archivo>.mp4`). Comprobar que la URL responde antes de seguir.
2. Buffer (conector): organización `6acd1f26b7f741a4ecfce8cc`, canal TikTok `6acd3cdc778b240e2febfdae` (@mentes.curiosas.tvs). Crear el post con el vídeo (URL raw) y publicarlo ya (compartir ahora; si no, programarlo 5 minutos después de la hora actual de `get_account`).
   - **Nunca** marcar contenido generado por IA (`isAiGenerated` falso / sin etiqueta de IA).
   - Texto: gancho con pregunta + 1 emoji + llamada a comentar; 6–9 hashtags (siempre `#mentescuriosas`, `#curiosidades` o `#noticias`); en noticias, fuentes al final («Fuentes: …»).
   - El plan gratuito admite 10 posts en cola: no dejar posts acumulados.
3. Registrar en `ideas/publicados.json` (fecha, tipo diario/noticia, tema, video, buffer_post) y, si era un tema de `ideas/temas.json`, quitarlo de la cola. Commit + push.

## 4 · Si algo falla
- No publicar un vídeo con fallos visibles. Mejor no publicar que publicar mal.
- Dejar el motivo en `ideas/incidencias.md` (fecha, tarea, qué falló), commit + push, y terminar con un resumen claro.
- Nunca gastar dinero, nunca cambiar el plan de Azure (F0 gratis) ni de Buffer, nunca escribir claves en archivos.
