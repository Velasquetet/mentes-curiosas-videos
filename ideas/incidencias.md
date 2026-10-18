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

## 2026-10-17 10:15 · Tarea de noticias (revisión de las 10:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía euronews.com/just-in, AP News in Brief y buscador.
- Sin noticias que cumplan los criterios: huracán Trudy (cat. 1 según AP) aún no ha tocado tierra; acercamiento máximo previsto el 18/10 → vigilar. Derrumbe del techo de una escuela en Peshawar (34 niños y una maestra) ocurrió el 15-16/10, suceso local con más de 24 h; naufragio frente a Baja California (16 rescatados, ~11 desaparecidos) e incendio Norte en San Clemente (~100 ha, sin víctimas): impacto local.
- Diario de hoy (malvasía cabeciblanca) confirmado en Buffer para las 18:30; no hace falta recuperación.

## 2026-10-17 12:15 · Tarea de noticias (revisión de las 12:00)
- es.euronews.com/noticias/internacional respondió, pero mostraba contenido desactualizado (lo más reciente del 12/10); Reuters no se probó (bloqueado). Revisado vía boletín de mediodía de Euronews (17/10), buscador y medios en inglés.
- Sin noticias que cumplan los criterios: superpetrolero en llamas tras chocar con una mina en Ormuz (solo lo afirma la Guardia Revolucionaria; crisis en curso, ya descartada a las 08:00); torpedo «con IA» de Corea del Norte (solo afirmación estatal); Trump suspende sanciones a Rusia y escenario político francés (política, sin explicación en el estilo del canal); huracán Trudy aún no ha tocado tierra → vigilar.
- Diario de hoy (malvasía cabeciblanca) ya programado para las 18:30 en publicados.json; no hace falta recuperación.

## 2026-10-17 14:20 · Tarea de noticias (revisión de las 14:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía boletines de Euronews (mañana y mediodía, 17/10), portada de Al Jazeera, AP (vía ABC News) y buscador.
- Sin noticias que cumplan los criterios: incidentes con buques en Ormuz (crisis en curso, ya descartada a las 08:00 y 12:00; sin dato nuevo de gran impacto); torpedo «con IA» de Corea del Norte (solo afirmación estatal); política UE/EE. UU. (sin explicación en el estilo del canal); huracán Trudy (cat. 1 según AP, sin daños) aún no ha tocado tierra, acercamiento previsto entre sábado y domingo → vigilar; tifón Champi se dirige a Guam → vigilar.
- Diario de hoy (malvasía cabeciblanca) confirmado en Buffer como programado para las 18:30; no hace falta recuperación.

## 2026-10-17 17:10 · Tarea de noticias (revisión de las 16:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía boletines y euronews.com/just-in, buscador y medios en inglés.
- Publicada la noticia del fin del segundo intercalar (votación de la CGPM en Versalles el 15/10, se aplica desde el 20/05/2027; vídeo de 1:27, publicado a las 17:05). No se había detectado en revisiones anteriores. Fuentes: Euronews, Scientific American (vía Nature World News), CNN, Geo News.
- Descartado por ahora: aviso rojo por lluvias torrenciales en 7 comarcas de Barcelona con ES-Alert (previsión, sin daños confirmados; Meteocat lo describe como menos extenso que el de hace dos semanas) → vigilar en la próxima revisión. Huracán Trudy sigue sin tocar tierra → vigilar.
- Recursos nuevos en news2.js: `leapclock`, `atomclock`, `drift` (con entrada en el catálogo).
- Diario de hoy (malvasía cabeciblanca) confirmado en Buffer, programado para las 18:30; no hace falta recuperación.

## 2026-10-17 18:10 · Tarea de noticias (revisión de las 18:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía boletín de mediodía de Euronews, temas de EFE Internacional (12:00 GMT) y buscador.
- Publicada la noticia del alta del Papa León XIV en el Gemelli, 4 días después de que le extirparan el lóbulo inferior del pulmón derecho por un adenocarcinoma (vídeo de 1:40, publicado a las 19:00). Fuentes: Vatican News (Santa Sede), EFE, CNN, NBC News, NPR, InfoVaticana. Tono neutral; sin cifras de pronóstico (el Vaticano no ha dado estadio ni tratamiento posterior).
- Descartado por ahora: aviso rojo por lluvias en Barcelona/Girona (previsión, sin daños confirmados al revisar); huracán Trudy aún sin tocar tierra → vigilar.
- Recursos nuevos en news2.js: `lungs`, `hospital` (con catálogo) y famoso `leon14` en cast.js.
- Diario de hoy (malvasía cabeciblanca) publicado por Buffer a las 18:32; no hacía falta recuperación.

## 2026-10-17 20:15 · Tarea de noticias (revisión de las 20:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía boletín de tarde de Euronews (17/10), buscador y medios mexicanos/españoles.
- Sin noticias que cumplan los criterios: protestas por el coste de la vida en Francia (París, Marsella, Lyon) y en Albania (disturbios políticos, sin explicación en el estilo del canal); sismo M5,1 en Chiapas sin daños; huracán Trudy (cat. 1) no se espera que toque tierra, se alejará el domingo; aviso por lluvias torrenciales en Barcelona (solo previsión y medidas preventivas, sin daños confirmados; punto álgido previsto la noche del sábado al domingo) → vigilar en la próxima revisión.
- Diario de hoy (malvasía cabeciblanca) ya publicado (18:32); no hace falta recuperación.

## 2026-10-17 22:10 · Tarea de noticias (revisión de las 22:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía boletín de tarde de Euronews (17/10, 18:00), buscador y medios.
- Publicada la noticia de la orden ejecutiva de Trump (viernes 16/10) que pone en pausa las sanciones de la ley Lindsey Graham contra Rusia (vídeo de 1:17, publicado a las 22:49). Fuentes: AP (vía ABC News), ABC News, CNBC, The Washington Post, The Moscow Times, Euronews. Solo datos confirmados en 2+ fuentes (aranceles de hasta el 100 % a los 5 mayores compradores; no se usan el 500 % ni el resultado exacto de la votación, que solo daba una fuente). Tono neutral.
- Descartado: lluvias torrenciales en Cataluña (un desaparecido en Cabrera de Mar, cortes de tren y carreteras, sin incidencias graves al revisar; situación en curso) → vigilar en la próxima revisión.
- Recursos nuevos en news2.js: `pausedlaw`, `oiltoll`, `whitehouse` (con catálogo) y famoso `graham` en cast.js.
- Diario de hoy (malvasía cabeciblanca) ya publicado (18:32); además ya son más de las 21:00: no hace falta recuperación.

## 2026-10-18 08:15 · Tarea de noticias (revisión de las 08:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional, su portada ni Reuters (permiso no concedido a tiempo). Revisado vía euronews.com/just-in, boletín de Euronews (18/10 mañana), resumen internacional de EFE (18/10, 02:00 GMT) y buscador.
- Sin noticias que cumplan los criterios: protestas en Francia/Bélgica/Albania (ya descartadas a las 20:00, política sin explicación en el estilo del canal); lluvias en Cataluña (225 incidentes, búsqueda activa de una mujer en Cabrera de Mar; impacto local, episodio hasta el domingo por la mañana) → vigilar; sesión extraordinaria del Parlamento egipcio sobre posible intervención frente a los hutíes (aún no celebrada) → vigilar.
- Diario de hoy (chocolate de Etowah) confirmado en Buffer, programado para las 18:30; no hace falta recuperación.

## 2026-10-18 10:10 · Tarea de noticias (revisión de las 10:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía boletín de Euronews (18/10 mañana), resumen internacional de EFE (18/10, 02:00 GMT) y buscador.
- Publicada la noticia de la estampida en el Durga Puja de Calcuta (sábado 17/10, ~19:00 hora local, pandal de Chorebagan): al menos 19 muertos y unos 25 heridos (cifras provisionales), detenidos de la organización y de la seguridad privada (7 según EFE, 10 según AFP → se dice «varias personas»), otros recintos cerrados, Modi lo califica de «trágico». Más la explicación de por qué una multitud es peligrosa (5–6 personas/m², asfixia por compresión más que pisotones, consejos). Fuentes: Reuters (vía Infobae), AFP (vía SBS), EFE, Al Jazeera, Bloomberg; explicación: Scientific American, Scroll.in, G. Keith Still (AP). Vídeo de 1:35, publicado a las 11:17 (Buffer, «sending» al registrar).
- Vigilar: explosión e incendio en la base militar CFB Wainwright (Alberta, Canadá; sábado 17/10). Ministro de Defensa confirma muertos y heridos, pero sin cifra oficial (el «al menos 7» viene solo de fuentes militares anónimas de Global News). Si se confirma la cifra oficial → posible noticia.
- Recursos nuevos en news2.js (con catálogo): `pandal`, `density`, `funnel`, `chestpress`.
- Diario de hoy (chocolate de Etowah) programado en Buffer para las 18:30 (comprobado); no hace falta recuperación.
