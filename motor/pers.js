/* ---------- personalidades ---------- */
const PERS={
 grano:{tempo:1,amp:1,rotK:1,role:'Narrador',traits:['Optimista','Seguro','Cercano'],
  move:'Ritmo normal, gestos claros y rebotes medios. Es la referencia: los demás se miden contra él.',
  scenes:['Gancho','Mecanismo','Al grano'],topics:'Todos los temas. Es la cara del canal y quien cuenta la historia.',quote:'Te lo cuento al grano.',m:[3,3,3]},
 pipa:{tempo:1.28,amp:1.3,rotK:1.25,role:'La curiosa',traits:['Impulsiva','Nerviosa','Exagerada'],
  move:'Un 28 % más rápida, saltos un 30 % más altos y un ojo aún más grande. Reacciona antes de pensar.',
  scenes:['Gancho','Giro'],topics:'Sorpresas, dramas, cosas absurdas. Pone voz a lo que piensa el espectador.',quote:'¿¡Perdona!?',m:[5,5,5]},
 lenteja:{tempo:.82,amp:.75,rotK:.55,role:'La experta',traits:['Tranquila','Precisa','Empollona'],
  move:'Lenta y contenida, casi no se inclina. Le brillan las gafas cuando va a soltar un dato.',
  scenes:['Contexto','Mecanismo'],topics:'Ciencia, datos, historia y explicaciones técnicas.',quote:'Técnicamente…',m:[2,2,2]},
 garbanzo:{tempo:.7,amp:.55,rotK:.45,role:'El escéptico',traits:['Seco','Irónico','Desconfiado'],
  move:'El más lento: gestos mínimos, párpados a media asta y sonrisas a medias. Nada le impresiona del todo.',
  scenes:['Giro','Pregunta'],topics:'Desmentir bulos, poner pegas, dudar de cifras y promesas.',quote:'Ya, claro.',m:[1,1,2]}
};
function stylize(k,p,T){
  const s=PERS[k];
  p.ty*=s.amp;p.tx*=s.amp;if(Math.abs(p.rot)<60)p.rot*=s.rotK;
  p.sx=1+(p.sx-1)*s.amp;p.sy=1+(p.sy-1)*s.amp;
  const open=p.eye.t==='open'||p.eye.t==='wide';
  if(k==='pipa'){if(open)p.eye.s=(p.eye.s||1)*1.08;p.acc*=1.6;}
  if(k==='lenteja'){const u=T%3.4;if(u<.45)p.fx.push({k:'star',x:-27+p.tx*0,y:-72*p.sy,s:.55*bell(u,0,.45),r:u*200});if(Math.abs(p.rot)<60)p.rot*=1;}
  if(k==='garbanzo'){if(open&&(p.eye.s||1)<1.1)p.eye.lid=Math.max(p.eye.lid,.3);if(p.mouth.t==='grin')p.mouth.h=(p.mouth.h||1)*.72;p.blush*=.5;}
}
