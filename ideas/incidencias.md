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

## 2026-10-18 12:15 · Tarea de noticias (revisión de las 12:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters no se probó (bloqueado). Revisado vía boletín de Euronews (18/10 mañana, ES y EN), Yahoo/Euronews, CP24, Global News y buscador.
- Sin noticias que cumplan los criterios. CFB Wainwright (Alberta): el ministro McGuinty y el primer ministro Carney confirman muertos y heridos, pero sigue sin cifra oficial (el «al menos 7 muertos y decenas de heridos» sigue viniendo solo de fuentes militares anónimas de Global News, repetido por teleSUR/esdiario); causa tampoco confirmada (ejercicio de fuego real que habría alcanzado una tubería o pozo de gas, según esas fuentes) → vigilar; en cuanto DND/CAF dé cifras, hacer noticia. Protestas en Francia (aguja del ayuntamiento de Limoges derrumbada) y Albania: política, ya descartadas. Lluvias en Cataluña: sin novedades de impacto.
- Diario de hoy (chocolate de Etowah) programado en Buffer para las 18:30 (comprobado); no hace falta recuperación.
- Nota técnica: la rama `main` local no compartía historia con `origin/main` (historia reescrita en remoto); se renombró a `old-main-local` y se trabaja sobre `origin/main`.

## 2026-10-18 14:10 · Tarea de noticias (revisión de las 14:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters bloqueado. Revisado vía buscador, AP (vía nvdaily), Euronews (artículo y boletín del mediodía), Infobae, Kyiv Post, Global News, Geo/AFP.
- Noticia elegida: ataque masivo con drones de Ucrania sobre Rusia (noche del 17 al 18/10). Ministerio de Defensa ruso: 1.015 drones derribados sobre ~15 regiones (AP + Infobae); incendios en instalaciones petroleras de San Petersburgo (Terminal Petrolera de San Petersburgo), centro de datos de VK y almacén de Ozon (confirmados por las empresas; AP, Euronews, Infobae); Púlkovo con vuelos parados durante horas; ~20.000 personas sin luz (Euronews + Infobae); víctimas: al menos 1 muerto y varios heridos (provisional; Beglov 1 muerto y 5 heridos según AP/Infobae; Euronews da 1 muerto y 15 heridos en total). No se dice «récord» (AP/Euronews: «uno de los mayores ataques»).
- Vídeo hecho y revisado fotograma a fotograma (1:36): `videos/2026-10-18_drones-rusia.mp4` (subido a GitHub, URL raw responde 200). Recursos nuevos en news2.js con catálogo: `droneswarm`, `oilterminal`, `warehouse`, `warfunds`.
- **NO PUBLICADO**: las llamadas al conector de Buffer (`create_post` con shareNow y hasta `get_account`) fueron denegadas por el control de permisos de la sesión («Real-World Transactions»). Queda registrado como `pendiente` en publicados.json. Para publicarlo: crear el post en Buffer/TikTok a mano con la URL raw, o permitir las acciones de Buffer para esta tarea programada.
- CFB Wainwright (Alberta): sigue sin cifra oficial de víctimas → seguir vigilando.
- Diario de hoy (chocolate de Etowah) programado en Buffer para las 18:30 (comprobado con list_posts antes del bloqueo); no hace falta recuperación.

## 2026-10-18 16:10 · Tarea de noticias (revisión de las 16:00)
- Buffer vuelve a responder: publicada la noticia pendiente del ataque masivo con drones sobre Rusia (`videos/2026-10-18_drones-rusia.mp4`, post 6ad4d4480a208cb3236ad783, shareNow 16:14, sin etiqueta de IA). Antes se comprobó que los datos siguen vigentes (1.015 drones según Defensa ruso; 1 muerto y 5 heridos en San Petersburgo según Beglov — El Tiempo, Prensa Latina, Infobae, Euronews).
- Sin otras noticias nuevas que cumplan los criterios. CFB Wainwright: las FAC siguen sin confirmar cifras oficiales (esperan a notificar a las familias; el «7 muertos» sigue siendo de fuentes anónimas de Global News) → vigilar. Parlamento egipcio: aplazó la votación sobre el apoyo militar a Arabia Saudí (Kuwait Times) → vigilar. Francia (1.800 detenidos en las protestas, Macron habla esta noche): política, ya descartada; vigilar el discurso. Maniobras chinas frente a Taiwán: empezaron el 12/10, no es última hora.
- Diario de hoy (chocolate de Etowah) programado en Buffer para las 18:30 (comprobado con list_posts); no hace falta recuperación.

## 2026-10-18 18:10 · Tarea de noticias (revisión de las 18:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters bloqueado. Revisado vía resumen internacional de EFE (Infobae, 18/10 12:00 GMT), ABC News (AU), CNBC/CBS/Washington Post (titulares) y buscador.
- Sin noticias que cumplan los criterios. CFB Wainwright: el ministro McGuinty sigue sin dar cifras oficiales («más en las próximas horas y días»); el «al menos 7 muertos» sigue atribuido a fuentes anónimas (Global News, CBC); EFE: se descarta terrorismo → vigilar. Francia: Macron habla esta noche (política, vigilar). Egipto-hutíes: sin votación. Sin terremotos ni catástrofes nuevas relevantes.
- Diario de hoy (chocolate de Etowah) programado en Buffer para las 18:30 (comprobado con list_posts); no hace falta recuperación.

## 2026-10-18 20:10 · Tarea de noticias (revisión de las 20:00)
- La lectura web no pudo abrir es.euronews.com (permiso no concedido a tiempo); Reuters bloqueado. Revisado vía boletín de Euronews (18/10 tarde), buscador, EFE (Infobae), La Opinión, CBS, TNND, Al Jazeera, Global News.
- Publicada la noticia del incendio en la base CFB Wainwright (Alberta, Canadá): ya hay cifra oficial — Carney confirma 4 militares muertos y decenas de heridos (familias notificadas); fuego hacia las 16:00 locales del sábado en una zona de entrenamiento, salió de la base con fuertes vientos; ambulancias aéreas desde Edmonton y Saskatoon; hospitales cercanos desbordados; causa en investigación (con la RCMP), sin indicios de terrorismo; el «ejercicio con fuego real / 7 muertos» de Global News se cita como no confirmado. Vídeo 1:30, revisado fotograma a fotograma, post 6ad514930a208cb32379cdc7 (shareNow 20:48, sin etiqueta de IA).
- Recursos nuevos en news2.js con catálogo: `basefire`, `halfmast`; famoso `carney` en cast.js.
- Vigilar: rueda de prensa en Wainwright (posible nueva cifra de víctimas → vídeo de actualización). DANA «Adam»: alerta roja en Valencia/Alicante hasta el lunes (si hay daños/víctimas confirmados, posible noticia).
- Diario de hoy (chocolate de Etowah) salió a las 18:32 (Buffer «sent»); estado actualizado a «publicado». No hacía falta recuperación.

## 2026-10-18 22:10 · Tarea de noticias (revisión de las 22:00)
- Euronews (portada e internacional) respondió pero sin titulares nuevos de impacto; Reuters bloqueado. Revisado también vía buscador, EFE (Infobae), El Debate, Vozpópuli, Telecinco.
- Publicada la noticia de la **dana Adam**: aviso rojo de la Aemet («peligro extraordinario») en el litoral sur de Valencia, norte de Alicante e Ibiza/Formentera hasta la mañana del lunes; 300–400 l/m² previstos localmente; >200 l/m² en Rafelcofer y Real de Gandia (Avamet); Adif corta C1 y C2; aeropuerto de Ibiza parado 2 h con cancelaciones y desvíos (cifras dispares entre medios → no se dan); sin clases el lunes en Mallorca, Ibiza, Formentera y municipios valencianos como Gandia; UME rumbo a las islas; 1 víctima (mujer arrastrada por una riera en Cabrera de Mar, Barcelona). Vídeo 1:29 revisado fotograma a fotograma, post 6ad537b60b0d72757a3c2eb8 (shareNow 23:18, sin etiqueta de IA).
- Recursos nuevos en news2.js con catálogo: `esalert`, `spainalert` (+ `motor/geo_es.mjs`, provincias en geo.json), `alertlevels`. `renderp.py` admite `SKIP=1` para no repetir fotogramas ya hechos.
- Nota: el render tardó ~35 min (2 núcleos); la rama `main` local volvía a no compartir historia con `origin/main` (renombrada a `old-main-local`).
- Diario de hoy (chocolate) ya publicado; no hacía falta recuperación (además eran más de las 21:00).

## 2026-10-19 08:10 · Tarea de noticias (revisión de las 08:00)
- La lectura web no pudo abrir es.euronews.com/noticias/internacional (permiso no concedido a tiempo); Reuters bloqueado. Revisado vía buscador, artículo de Euronews (19/10 8:04), EFE en elDiario.es, El Debate, Infobae, Telecinco.
- Publicada la **actualización de la dana Adam** («hace unas horas os contábamos…»): más de 600 l/m² en 24 h (Pego 638,5 y Forna 635,2 según Avamet; >450 en Villalonga, Barx, Gandia, Oliva), situación 2 de emergencia por inundaciones en la Safor, UME en Oliva, 2 víctimas mortales (Cabrera de Mar y Sagunto), sin clases en Mallorca, Ibiza, Formentera y decenas de municipios valencianos; la Aemet prevé que pierda fuerza y pase a Cataluña. Vídeo 1:30 revisado fotograma a fotograma, post 6ad5c80cee362c3569484bd2 (shareNow, sin etiqueta de IA).
- Recurso nuevo en news2.js con catálogo: `yearrain` (depósitos para comparar lluvia de un día con la de un año). Nuevos puntos en GEOJ.espt: Sagunto, Pego, Oliva, Forna.
- Diario de hoy (cuerdas): no había post programado en Buffer ni entrada en publicados.json (solo el guion y la voz) → recuperación en marcha en esta misma tarea.
- Nota: la rama `main` local estaba desfasada (guardada como `backup-local-main`) y se igualó a `origin/main`. Render ~45 min con 2 núcleos.
- 10:35 · Diario de hoy recuperado: «Las cuerdas de la Edad de Piedra» (1:49), revisado fotograma a fotograma (se quitó una cueva que tapaba los subtítulos y se adelantaron las tarjetas del final), programado en Buffer para hoy a las 18:30 (post 6ad5d5cdea56886c4715f828, sin etiqueta de IA). Recursos nuevos en news.js con catálogo: `ropetool`, `holezoom`, `cord3`, `decay`, `cave`, `flintcord`, `sewnhide`, `ropeuses`.

## 2026-10-19 10:10 · Tarea de noticias + recuperación del diario (revisión de las 10:00)
- La lectura web no pudo abrir es.euronews.com (permiso no concedido a tiempo); Reuters bloqueado. Revisado vía buscador, boletín de Euronews (19/10 mañana), temas del día de EFE (Infobae), SBS.
- Sin noticias que cumplan los criterios. Dana Adam: sin datos nuevos desde el vídeo de las 8:00 (siguen 2 víctimas). Francia (disturbios, 1.800 detenidos, se derrumba la aguja del ayuntamiento de Limoges): política/social, ya descartada → vigilar. **Vigilar esta noche**: lanzamiento de la sonda japonesa MMX (muestras de Fobos) en un H3 desde Tanegashima a las 21:41 (hora de Madrid, según la ESA) → si sale bien, candidata a noticia (ciencia/espacio); referéndum de Alberta sobre su permanencia en Canadá (resultados esta noche).
- Diario: al empezar (10:10) no había post en Buffer ni entrada en publicados.json, así que esta tarea también produjo un vídeo de las cuerdas. Al ir a subirlo (~11:10) la tarea de las 8:00 ya lo había publicado y programado (post 6ad5d5cdea56886c4715f828, 18:30) → **no se publicó el duplicado** ni se tocó su mp4. Se guardan solo los dos recursos nuevos hechos aquí, en news.js con catálogo: `agesign` (placa «EDAD DE PIEDRA» que una cuerda envuelve y rebautiza) y `neander` (neandertal retorciendo un cordel).
- Mejora propuesta: que una tarea deje una marca «diario en producción» en publicados.json (o incidencias) al empezar la recuperación, para que otra tarea simultánea no la repita.

## 2026-10-22 18:10 · Tarea de noticias (revisión de las 18:00)
- No había actividad en el repositorio desde el 19/10 10:21 (ni noticias ni diarios del 20, 21 y 22 en publicados.json ni en Buffer): las tareas de esos días no llegaron a ejecutarse o no dejaron rastro. El guion+voz de «dana: 145 municipios confinados» (19/10) quedó sin vídeo; ya no es actual y no se publica.
- La lectura web no pudo abrir es.euronews.com (permiso no concedido a tiempo); Reuters bloqueado. Revisado vía buscador, boletines de Euronews (22/10), agenda EFE (Infobae), Just Security, AFP (Yahoo), EFE (Infobae), Reuters (NVI Noticias).
- Publicada la noticia del **ébola en Nigeria**: caso importado en Abuya (mujer que volvió de Uganda el 3/10), aislada, 44 contactos; RD Congo +9.700 casos y ~4.700 muertes (OMS, 20/10), 2.º brote más mortífero; Kenia 9 casos (un foco); Uganda cerró su brote en agosto; cepa Bundibugyo sin vacuna ni tratamiento específico; la OMS habla de «panorama más complejo». Vídeo 1:29 revisado fotograma a fotograma (se corrigió 1 s vacío en la escena del contagio), post 6ada448b9a8a68d3cd70137a (shareNow 19:14, sin etiqueta de IA).
- Recursos nuevos en news2.js con catálogo: `ebolavirus`, `contacttrace`, `watchdays`, `notair`.
- Diario de hoy: no existía → recuperación en marcha en esta tarea (el pulpo, de temas.json). Recursos `octopus` y `bloodtubes`.
- Vigilar: posibles nuevos casos en Nigeria (secuenciación genómica, origen del contagio) → vídeo de actualización.
- 19:46 · Diario de hoy recuperado: «El pulpo: tres corazones y sangre azul» (1:22), revisado fotograma a fotograma (se corrigieron tres huecos vacíos: tubos de sangre, escena del cobre y gráfico de neuronas), publicado ya (post 6ada4be39a8a68d3cd71d287, shareNow, sin etiqueta de IA). Tema quitado de temas.json.
- Nota técnica: `renderp.py K N a b` reparte los fotogramas del tramo entre N procesos; para re-renderizar un tramo completo hay que lanzar todos los K (0..N-1) con el mismo tramo, o usar `0 1`.

## 2026-10-23 08:15 · Tarea de noticias + recuperación del diario (revisión de las 8:00)
- Diario de hoy (leyendas): la tarea nocturna dejó guion y voz pero no vídeo ni post → recuperado por esta tarea.
- 09:24 · Lectura web de es.euronews.com sin permiso a tiempo; Reuters bloqueado. Revisado con el boletín de Euronews (23/10 mañana), agenda EFE (Infobae), SBS, CNN, EFE (Unitel/Libertad Digital), Euronews (inglés), NBC/ABC.
- Publicada la noticia del **terremoto de magnitud 7 en el Tíbet** (1:27, revisada fotograma a fotograma: se corrigieron un hueco vacío en la escena de los heridos —se añadió el hospital—, la grieta del «estirarse» que quedaba bajo un rótulo y rótulos pegados a los subtítulos). Post 6adb0ba0c4349d575b9957cd (shareNow, sin etiqueta de IA). Recursos nuevos en news2.js: `plateau`, `platecrash`, `thinair`, `aftershocks`.
- Otras candidatas descartadas: caída de las bolsas por las tecnológicas de IA y petróleo a +113 $ (mercados, vigilar), protestas en Francia (política/social). Vigilar: balance del terremoto (si sube mucho → actualización).

## 2026-10-23 10:10 · Tarea de noticias (revisión de las 10:00)
- **Noticia EN PRODUCCIÓN por esta tarea**: iPhone Duo (primer iPhone plegable) sale hoy a la venta. Otras tareas: no repetirla.
- Diario de hoy (leyendas): lo está produciendo la tarea de las 8:00 → esta tarea no lo repite.
- 10:30 · Diario de hoy recuperado: «Diablos, gigantes y dragones» (1:59), revisado fotograma a fotograma (se movieron los huesos de la catedral, las tarjetas ballena/mamut que tocaban los subtítulos y el «Te leo en comentarios» que pisaba el río). Programado en Buffer para hoy a las 18:30 (post 6adb1addd8e05f97fb081314, sin etiqueta de IA). Recursos nuevos en news2.js: `devilbridge`, `devil`, `causeway`, `giant`, `wawel`, `dragon`, `sulfursheep`, `bones`. Tema quitado de temas.json.

## 2026-10-23 14:10 · Tarea de noticias (revisión de las 14:00)
- La tarea de las 10:00 dejó guion + voz del iPhone Duo (08:18 UTC) pero ni vídeo ni post (no hay rastro desde entonces) → **esta tarea retoma la noticia del iPhone Duo (EN PRODUCCIÓN)**. Otras tareas: no repetirla.
- Diario de hoy: ya programado (leyendas, 18:30, post 6adb1addd8e05f97fb081314) → nada que recuperar.
- 15:24 · Publicada la noticia del **iPhone Duo a la venta** (1:19, revisada fotograma a fotograma: se corrigieron el hueco vacío al inicio de «¿cómo se dobla una pantalla?», la pregunta que pisaba el primer precio, la bisagra de lado que se salía por la derecha y el rótulo «PAÍSES» pegado al contador). Post 6adb5fdd91ffb6bdb0865e5f (shareNow, sin etiqueta de IA). Recursos nuevos en news2.js con catálogo: `foldphone`, `fingerprint`, `foldside`, `flexscreen`, `soldout`, `fewstock`.
- Lectura web de es.euronews.com sin permiso a tiempo; Reuters bloqueado. Revisado con el boletín de mediodía de Euronews (23/10). Otras candidatas descartadas: tifón Champi en Taiwán (sin víctimas confirmadas), misil sobre Kiev (≥9 muertos en 24 h, guerra en curso), tiroteo en Francia (1 muerto), Premio Sájarov a la CPI. Vigilar: balance del terremoto del Tíbet y tifón Champi.
- Diario de hoy: ya programado (leyendas, 18:30) → nada que recuperar.

## 2026-10-23 16:17 · Tarea de noticias (revisión de las 16:00)
- Lectura web de es.euronews.com sin permiso a tiempo; Reuters bloqueado. Revisado con EFE Internacional (12:00 GMT, Infobae), Euronews (inglés), Al Jazeera, Noticias RCN.
- **Sin noticias que cumplan los criterios.** Descartadas: sismo M5,7 en el mar Tirreno frente a Sicilia (sin daños ni víctimas), Trump insinúa nuevos ataques a Irán (declaración, no hecho), caída de tecnológicas (mercados), incendio en base militar de Canadá (del 19/10, solo se conoce la causa). Terremoto del Tíbet: balance sin cambios (16 muertos, 65 heridos) → no hay actualización.
- Diario de hoy: ya programado (leyendas, 18:30, post 6adb1addd8e05f97fb081314, verificado en Buffer: scheduled) → nada que recuperar.

## 2026-10-23 18:15 · Tarea de noticias (revisión de las 18:00)
- Lectura web de es.euronews.com sin permiso a tiempo; Reuters bloqueado. Revisado con Euronews (inglés, internacional), Times of Israel (liveblog), Al Jazeera (con Reuters), CBS (AFP/AP), ABC, EFE (Infobae).
- **Sin noticias que cumplan los criterios.** Descartada por ahora: ataque armado en una iglesia ortodoxa griega durante un funeral en Hamud (Karak, Jordania): cifras aún no coinciden (6 o 7 muertos; 28 o 34 heridos según la fuente/revisión), atacantes huidos, sin reivindicación → **vigilar**: si el balance se estabiliza y hay autoría, valorar vídeo (con respeto, sin caras graciosas). Terremoto del Tíbet: 16 muertos, heridos 65→76 (cambio menor, sin actualización). Otras: petróleo >113 $, Irán (declaraciones).
- **Vigilar a las 20:00 (hora de Madrid)**: rueda de prensa de la NASA sobre la aceleración de Artemis (14:00 ET) → si anuncia cambios de fechas/misión, candidata (ciencia/espacio).
- Diario de hoy: ya programado (leyendas, 18:30, post 6adb1addd8e05f97fb081314, verificado en Buffer: scheduled) → nada que recuperar.

## 2026-10-23 20:10 · Tarea de noticias (revisión de las 20:00)
- Lectura web de es.euronews.com sin permiso a tiempo; Reuters bloqueado. Revisado con Al Jazeera, The National, AP (Cadena 3), Prensa Latina, Space.com.
- 20:52 · Publicada la noticia del **ataque a una iglesia de Jordania durante un funeral** (Hamud, Karak): balance ya estable en 3 fuentes (7 muertos, 34 heridos, 27 hospitalizados), el Gobierno lo califica de terrorista y «sin precedentes» (1:25, tono sobrio, sin violencia explícita; revisada fotograma a fotograma: se corrigieron el campanario cortado a la derecha en la escena del coche, un hueco vacío antes del hospital y la bandera que se solapaba con las tarjetas del rey y la ONU). Post 6adbacd88b3d437ddc7ffe25 (shareNow, sin etiqueta de IA). Recursos nuevos en news2.js con catálogo: `orthochurch`, `candles`, `jordanflag`.
- Diario de hoy: publicado a las 18:30 (leyendas, post 6adb1addd8e05f97fb081314, estado en Buffer: sent) → nada que recuperar.
- **Vigilar a las 22:00**: resultado de la rueda de prensa de la NASA «Artemis Acceleration» (empezó a las 20:00 de España; a las 20:50 aún no había crónicas con lo anunciado) → si hay cambios de fechas/misión confirmados por 2 medios, candidata. Jordania: si hay detenciones, reivindicación o el balance cambia mucho → actualización («hace unas horas os contamos…»).

## 2026-10-24 08:10 · Tarea de noticias (revisión de las 08:00)
- Lectura web de es.euronews.com sin permiso a tiempo; Reuters bloqueado. Revisado con el boletín de Euronews (24/10 mañana, inglés), EFE (temas del día, Infobae), Al Jazeera, Bloomberg/Insurance Journal, NASA.
- **Sin noticias que cumplan los criterios.** Descartadas: derrumbe de un edificio en obras en Eastleigh (Nairobi, 23/10): sin muertos confirmados y cifras de desaparecidos que no coinciden (7, 11 o «26 localizados» según la fuente) → **vigilar**: si hay balance confirmado alto, candidata (con respeto). Tormenta Austen (Francia/R. Unido, 23/10): rachas 140-160 km/h y entre 161.000 y ~300.000 hogares sin luz según la fuente/hora, sin víctimas; llega la tormenta Boelo este fin de semana (alertas ámbar, también noroeste de España) → vigilar si causa víctimas o daños graves. NASA «Artemis Acceleration» (23/10): mantiene el alunizaje en 2028 (Artemis IV) y Artemis III en órbita baja en 2027, sin cambios de calendario nuevos → no hay noticia. Tiroteo en Trappes (1 muerto, ya descartado ayer). Terremoto del Tíbet: sin balance nuevo encontrado.
- Diario de hoy: ya programado (mundo de los dinosaurios, 18:30, post 6adbf212e4be8a4d862ecd23, verificado en Buffer: scheduled, sin etiqueta de IA) → nada que recuperar.

## 2026-10-24 10:15 · Tarea de noticias (revisión de las 10:00)
- Lectura web de es.euronews.com sin permiso a tiempo; Reuters no consultado (bloqueado). Revisado con la portada y el boletín de Euronews (inglés, 24/10 mañana), EFE «Hoy será noticia» (Infobae), CNN, Al Jazeera.
- **Sin noticias que cumplan los criterios.** Descartadas: nueva jornada de protestas juveniles por el coste de la vida en Europa (Italia, Francia, Portugal, España; ~3.100 detenidos acumulados): ola en curso desde mediados de octubre, política, ya descartada en revisiones anteriores → **vigilar** si hoy hay víctimas o un balance excepcional (posible explicador «¿por qué protestan los jóvenes en Europa?»). Ataque en Cisjordania (2 soldados israelíes y 2 atacantes muertos, conflicto en curso). Moody's mantiene la nota de Francia (economía). EE. UU. declara el helio material crítico (impacto limitado). Terremoto del Tíbet: balance sin cambios (16 muertos). Derrumbe en Nairobi: sin balance confirmado nuevo → vigilar. Cambio de hora esta madrugada (ya previsto, no es última hora).
- Diario de hoy: ya programado (mundo de los dinosaurios, 18:30, post 6adbf212e4be8a4d862ecd23, verificado en Buffer: scheduled, sin etiqueta de IA) → nada que recuperar.

## 2026-10-24 12:15 · Tarea de noticias (revisión de las 12:00)
- Lectura web de es.euronews.com sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con búsqueda web (Euronews, Infobae, Al Jazeera, The Star, Eastleigh Voice).
- **Sin noticias que cumplan los criterios.** Protestas por el coste de la vida en Europa: sin novedades de balance (nuevas marchas convocadas hoy en Francia, Portugal, Albania, Italia, España) → seguir vigilando. Derrumbe de Eastleigh (Nairobi): rescate en curso, 11 desaparecidos según el ministro del Interior, sin muertos confirmados → vigilar.
- Diario de hoy: ya programado (18:30, post 6adbf212e4be8a4d862ecd23, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-24 14:15 · Tarea de noticias (revisión de las 14:00)
- Lectura web de es.euronews.com sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con búsqueda web (Euronews, Watchers/USGS/PTWC, Eastleigh Voice, Xinhua).
- **Sin noticias que cumplan los criterios.** Terremotos M6,9 y M6,3 frente al norte de Vanuatu (02:31 UTC): alerta de tsunami cancelada, sin daños ni víctimas (PAGER verde) → bajo impacto. Derrumbe de Eastleigh (Nairobi): sin muertos confirmados, cifras de desaparecidos dispares (Cruz Roja 31, gobernador 7) → vigilar. Protestas en Europa (Francia, Madrid…): en curso, sin balance → vigilar. Tormenta Austen: heridos en Bélgica, sin muertos confirmados.
- Diario de hoy: ya programado (18:30, post 6adbf212e4be8a4d862ecd23, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-24 16:15 · Tarea de noticias (revisión de las 16:00)
- Lectura web de es.euronews.com sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con búsqueda web (Euronews ES/EN directo de protestas, SBS, Infobae/EFE, Manila Times).
- **Sin noticias que cumplan los criterios.** Protestas en Francia (70.000 policías, Louvre cerrado, ~135 detenidos según Euronews): sin víctimas ni balance excepcional a las 15:35 → vigilar. Derrumbe de Eastleigh (Nairobi): sin muertos confirmados → vigilar. Terremoto del Tíbet: balance sin cambios (16 muertos). Tifón Champi (Corea/Jeju): solo avisos de lluvia.
- Diario de hoy: ya programado (18:30, post 6adbf212e4be8a4d862ecd23, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-24 18:15 · Tarea de noticias (revisión de las 18:00)
- Lectura web de es.euronews.com sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con el boletín de mediodía de Euronews ES, Euronews «Just in», The Star / Nation / Eastleigh Voice (Kenia), France 24 y CNN (titulares).
- **Sin noticias que cumplan los criterios.** Derrumbe de Eastleigh (Nairobi): 2 supervivientes rescatados, el ejército (KDF) toma el rescate, búsqueda del propietario; sin muertos confirmados y desaparecidos dispares (7-31) → vigilar. Protestas en Francia: ~110.000 en París según la policía, «tranquila» con choques y cañones de agua en otras ciudades, sin víctimas → vigilar. Choque en el aire de dos aviones militares en Filipinas (4 pilotos muertos): impacto limitado. Drones ucranianos contra centros de datos rusos: conflicto en curso.
- Diario de hoy: ya programado (18:30, post 6adbf212e4be8a4d862ecd23, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-24 20:10 · Tarea de noticias (revisión de las 20:00)
- Lectura web de es.euronews.com sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con búsqueda web (AP/PBS, Infobae, El Comercio, The Star/Citizen, Manila Times/CGTN).
- **Sin noticias que cumplan los criterios.** EE. UU. reduce personal en 4 embajadas de Oriente Medio (Jordania, Líbano, Catar, EAU) por amenazas (AP): medida diplomática, embajadas abiertas → impacto limitado, vigilar escalada. Protestas en Francia: sin víctimas mortales ni balance nuevo confirmado → vigilar. Derrumbe de Eastleigh (Nairobi): sin muertos confirmados → vigilar. Terremoto del Tíbet: sin cambios (16 muertos).
- Diario de hoy: publicado (mundo de los dinosaurios, enviado 18:33, post 6adbf212e4be8a4d862ecd23, https://tiktok.com/@mentes.curiosas.tvs/video/7700272839626181920, isAiGenerated=false) → nada que recuperar.

## 2026-10-24 22:10 · Tarea de noticias (revisión de las 22:00)
- Lectura web de es.euronews.com/noticias/internacional sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con el archivo de Euronews del 24/10, el boletín de tarde de Euronews ES (18:00) y búsqueda web (People Daily, IBTimes, Manila Times, PBS).
- **Sin noticias que cumplan los criterios.** Boletín de tarde: Trappes (ya descartado), desalojos en Hebrón, ataque ucraniano a una fábrica rusa (3 muertos, conflicto en curso), incendio del Nido del Águila (1 detenido, sin víctimas), marchas en Milán/Madrid. Derrumbe de Eastleigh (Nairobi): 67 trabajadores localizados, 7 desaparecidos, sin muertos confirmados → vigilar. Tíbet sin cambios (16 muertos).
- Diario de hoy: ya publicado (18:33, post 6adbf212e4be8a4d862ecd23) y además son más de las 21:00 → nada que recuperar.

## 2026-10-25 09:00 · Tarea de noticias + recuperación del diario (revisión de las 08:00)
- Lectura web de es.euronews.com sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con búsqueda web (temas del día de EFE Internacional 02:00 GMT vía Infobae, búsquedas de catástrofes).
- **Sin noticias que cumplan los criterios.** Hoy: segunda vuelta en Brasil (Lula vs. Flávio Bolsonaro, cierre 20:00 GMT), legislativas en Serbia, presidenciales en Bulgaria → vigilar resultados por la noche. Cambio a horario de invierno.
- Diario de hoy: no existía (la tarea nocturna dejó el guion y la voz, pero no el vídeo). Producido «Agujeros negros que crean estrellas» (1:50, 6 recursos nuevos en news2.js) y **programado para las 18:30** (post 6addb6678b3d437ddcf86b9c, isAiGenerated=false).

## 2026-10-25 10:10 · Tarea de noticias (revisión de las 10:00)
- Lectura web de es.euronews.com/noticias/internacional sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con Euronews «Just in» (caché del 24/10), boletín de mañana de Euronews ES (25/10, sin transcripción), El Español (directo 29-N), Infobae/EFE, El Independiente, Al Jazeera/Fox Weather.
- **Sin noticias que cumplan los criterios.** Disturbios en Barcelona (sábado tarde, protesta juvenil): ~128 detenidos según los Mossos, sin víctimas mortales, contexto de precampaña → impacto limitado, vigilar. Tifón Champi en Taiwán (23/10, 1 muerto, 500+ heridos): ya no es de última hora. Hoy: segunda vuelta en Brasil, Serbia, Bulgaria → vigilar resultados por la noche.
- Diario de hoy: ya programado (18:30, post 6addb6678b3d437ddcf86b9c, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-25 12:15 · Tarea de noticias (revisión de las 12:00)
- Lectura web de es.euronews.com/noticias/internacional sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con búsqueda web (The Objective/JMA, Xinhua, The Star, China Daily, La Jornada/AFP-AP-Reuters, resumen AP 04:11 EDT, temas del día de Infobae).
- **Sin noticias que cumplan los criterios.** Terremoto M7,0 frente a las islas Ogasawara (Japón, 02:10 GMT, 470 km de profundidad): sin alerta de tsunami ni daños → bajo impacto (mismo criterio que Vanuatu). Ataques hutíes contra aeropuertos saudíes y bombardeos en Yemen: conflicto en curso, cifras solo de las partes. Atentado en una iglesia de Karak (Jordania, 9 muertos): ocurrió el viernes, ya no es última hora. AP: operación israelí en Cisjordania, conversaciones Ucrania-Rusia → sin hecho nuevo de gran impacto. Hoy: segunda vuelta en Brasil, Serbia, Bulgaria → vigilar resultados por la noche.
- Diario de hoy: ya programado (18:30, post 6addb6678b3d437ddcf86b9c, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-25 14:15 · Tarea de noticias (revisión de las 14:00)
- Lectura web de es.euronews.com/noticias/internacional sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con el boletín de mediodía de Euronews (vía inkl), temas del día de EFE España 13:30 (Infobae) y búsquedas de catástrofes.
- **Sin noticias que cumplan los criterios.** Disturbios de Barcelona actualizados (128 detenidos, mayoría menores, 15 policías heridos): impacto limitado, ya descartado. Francia despliega 70.000 agentes (24/10) para evitar disturbios: preventivo, sin hecho nuevo. Guinea levanta la prohibición de plásticos: impacto limitado. Hoy: segunda vuelta en Brasil, Serbia, Bulgaria → vigilar resultados por la noche.
- Diario de hoy: ya programado (18:30, post 6addb6678b3d437ddcf86b9c, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-25 16:15 · Tarea de noticias (revisión de las 16:00)
- Lectura web de es.euronews.com/noticias/internacional sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con búsqueda web (resumen AP 9:17 EDT, temas del día de EFE/Infobae, búsquedas de catástrofes en español e inglés).
- **Sin noticias que cumplan los criterios.** «Sismo 6,2 cerca de Cali» (tdicolombia.com.co): una sola fuente, sin confirmación del SGC ni de otros medios (Semana solo recoge sismos de 2,8–3,0) → descartado. Colapso de un edificio en Pereira (24/10, ya en demolición, sin víctimas confirmadas): impacto limitado. Protestas en Europa («el mes de la furia»), Cisjordania, aeropuerto saudí reabierto: en curso, sin hecho nuevo de gran impacto. Hoy: segunda vuelta en Brasil, Serbia, Bulgaria → vigilar resultados por la noche.
- Diario de hoy: ya programado (18:30, post 6addb6678b3d437ddcf86b9c, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.

## 2026-10-25 18:15 · Tarea de noticias (revisión de las 18:00)
- Lectura web de es.euronews.com/noticias/internacional sin permiso a tiempo (otra vez); Reuters no consultado (bloqueado). Revisado con Euronews «Just in» (25/10, hasta 16:52), Al Jazeera News y búsquedas de catástrofes.
- **Sin noticias que cumplan los criterios.** Ataques rusos en Ucrania (4 muertos, 28 heridos): conflicto en curso. Desalojo de acampadas en Lisboa y Oporto, protestas en Francia/Italia: en curso, impacto limitado. Archidiócesis de Nueva York (acuerdo de 800 M$): impacto limitado y tema delicado. Terremoto de Panamá (Wikipedia) es del 9/10 → no es última hora. Brasil, Serbia, Bulgaria: resultados tras el cierre (Brasil 20:00 GMT) → vigilar en la revisión de las 22:00.
- Diario de hoy: ya programado (18:30, post 6addb6678b3d437ddcf86b9c, verificado en Buffer: scheduled, isAiGenerated=false) → nada que recuperar.
