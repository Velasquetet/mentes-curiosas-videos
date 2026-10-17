# Incidencias · Mentes curiosas

## 2026-10-16 12:15 · Tarea de noticias (revisión del mediodía)
- La herramienta de lectura web no pudo abrir es.euronews.com/noticias/internacional, la portada ni Reuters (permiso no concedido a tiempo). Se revisó Euronews a través del buscador y de sus páginas /just-in y de boletines.
- Noticia de Peshawar (15/10): guion y voz generados (`tts/2026-10-15_peshawar.*`), pero el vídeo nunca se montó ni se publicó (no está en Buffer ni en publicados.json). A las ~30 h ya no se considera de última hora; no se publica.
- Lo mismo ocurrió con la noticia del naufragio (14/10): solo guion y voz. Posible causa: la sesión se queda sin uso antes de terminar el montaje.
- Sin noticias nuevas que cumplan todos los criterios hoy a mediodía (tiroteo en Bend, Oregón: suceso local en desarrollo; Ormuz: incidente más de un conflicto en curso; Mont Blanc 4.807,47 m: noticia del 14/10).

## 2026-10-16 14:20 · Tarea de noticias (revisión de las 14:00)
- De nuevo la lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); revisado vía buscador, euronews.com/just-in y boletines (EFE/Infobae).
- Sin noticias que cumplan todos los criterios: tiroteo en Bend (Oregón) ya confirmado por NBC/CNN/CBS/AP (3 niños y 1 docente), pero sigue siendo suceso local de hace ~9 h; huracán Trudy (cat. 3) aún sin tocar tierra en México → candidato para la próxima revisión si toca tierra; «Roadster volador» de Tesla: solo anuncio, sin presentación.
- Diario de hoy (reptiles) confirmado en Buffer para las 18:30.

## 2026-10-16 16:15 · Tarea de noticias (revisión de las 16:00)
- La lectura web siguió sin poder abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía buscador, euronews.com/just-in y temas de EFE (12:00 GMT).
- Sin noticias que cumplan todos los criterios: huracán Trudy (cat. 3, ~385 km al SO de Acapulco) sigue sin tocar tierra y el pronóstico no prevé que el ojo llegue a la costa; resto de temas son políticos/en curso (cumbre UE, Brasil, Albania).
- Diario de hoy (reptiles) ya programado para las 18:30 (registrado en publicados.json); no se necesita recuperación.

## 2026-10-16 17:15 · Noticia del Tesla Roadster (pedida por el usuario)
- La revisión de las 14:00 descartó el Roadster como «solo anuncio, sin presentación», pero la presentación ya había ocurrido (15/10 por la noche en Texas, madrugada del 16 en España). Error de comprobación: hay que buscar también la noticia en inglés (Reuters vía otros medios, TechCrunch) y comprobar si el evento ya se celebró antes de descartar.
- Publicada a las 17:14 (vídeo de 1:22). Fuentes: Reuters (vía The Korea Times), TechCrunch, Yahoo Finance.

## 2026-10-16 18:50 · Tarea de noticias (revisión de las 18:00)
- La lectura web siguió sin poder abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); revisado vía buscador, euronews.com/just-in y otros medios.
- Publicada la noticia de la falsa alerta de terremoto M9,9 en Japón (vídeo de 1:20, publicado a las 18:50). Fuentes: NHK, Kyodo, BNO News, SBS, USGS. Huracán Trudy sigue sin tocar tierra.
- Diario de hoy (reptiles) salió a las 18:32 (estado actualizado a «publicado»).
- Nota técnica: `audio.py` (filtro svf_sweep en Python puro) tarda varios minutos si se ejecuta a la vez que el render; lanzarlo en segundo plano.

## 2026-10-16 20:55 · Tarea de noticias (revisión de las 20:00)
- La lectura web siguió sin poder abrir es.euronews.com (permiso no concedido a tiempo); revisado vía buscador, boletines de Euronews (tarde/noche) y euronews.com/just-in.
- Publicada la noticia de las inundaciones de Estambul, las peores en más de 80 años (vídeo de 1:28, publicado a las 20:54). Fuentes: AP, Xinhua, Anadolu (Daily Sabah), Euronews. Cifras de víctimas marcadas como provisionales.
- Diario de hoy (reptiles) ya publicado a las 18:32; no hacía falta recuperación.
- Nota: el render (2 procesos) tardó ~30 min para 88 s; conviene lanzarlo en cuanto la revisión de fotogramas esté hecha.

## 2026-10-17 08:15 · Tarea de noticias (revisión de las 08:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); revisado vía euronews.com/news/international, temas de EFE Internacional (02:00 GMT) y buscador.
- Sin noticias que cumplan los criterios: superpetrolero que habría chocado con una mina en Ormuz (solo lo afirma la Guardia Revolucionaria iraní, sin nombre del buque ni confirmación independiente; parte de una crisis en curso con ataques casi diarios); huracán Trudy (cat. 3, previsión de cat. 4) aún no ha tocado tierra en Jalisco/Colima, vigilar en próximas revisiones.
- Diario de hoy (malvasía cabeciblanca) programado en Buffer para las 18:30; no hace falta recuperación.
