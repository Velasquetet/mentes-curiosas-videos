/* ===== NOTICIA · El mundo elimina el segundo intercalar (CGPM, Versalles, 15/10/2026) ===== */
DUR=87.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}

/* ---------- 1 · gancho: un minuto con un segundo de más ---------- */
function s1(t){let s=raysBg(270,480,t*10,22,'#d3d3d3',ao(t,.1,.4))+groundLine(1);
  s+=G(270,470,1,0,NX.leapclock({seq:['23:59:58','23:59:59','23:59:60'],step:1.4,hl:2},t-.05));
  s+=actor('garbanzo',{t0:.4,path:[[.4,96]],emo:[[.4,1,0],[3.2,7,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('pipa',{t0:.6,path:[[.6,448]],emo:[[.6,1,0],[3.3,7,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',y:0},t),1);
  return s;}
/* ---------- 2a · se acabó (golpe) ---------- */
function s2a(t){return NX.punch({a:'Se',b:'acabó.'},t-4.45);}
/* ---------- 2b · el mundo decide quitarlo ---------- */
function s2b(t){let s=groundLine(1);
  s+=G(270,470,1,0,NX.globe({},t-5.75));
  s+=G(270,470,.55,0,NX.leapclock({seq:['23:59:60'],hl:0,badge:'−1 s',badgeC:K.ink},t-6.5),ao(t,6.5,.3)*dis(t,7.25,.2));
  s+=stampA(270,650,t-7.25,'ELIMINADO',{r:-6,sz:28,c:K.red});
  return s;}
/* ---------- 3 · Versalles, cerca de París ---------- */
function s3(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Francia',zoom:5,zoomAt:.1,pins:[[2.13,48.80,'Versalles (junto a París)']],highlight:['Francia'],w:480,h:430},t-8.15));
  s+=G(105,252,.42,0,NX.calendar({from:15,to:15,month:'OCT'},t-8.55));
  s+=pillA(310,252,'15 de octubre de 2026',sg(t,8.8,9.05),{fill:'url(#gRP)',sz:14,w:800});
  return s;}
/* ---------- 4 · la Conferencia General de Pesas y Medidas vota ---------- */
function s4(t){let s=groundLine(1);
  s+=G(270,500,.9,0,NX.summit({label:'28.ª Conferencia General'},t-11.6));
  s+=pillA(270,315,'Conferencia General de Pesas y Medidas',sg(t,12.6,12.85),{sz:13,w:800});
  s+=pillA(270,357,'69 Estados miembros',sg(t,13.4,13.65),{fill:'url(#gRP)',sz:14,w:800});
  s+=stampA(270,708,t-15.15,'VOTAN ELIMINARLO',{r:-5,sz:22,c:K.red});
  return s;}
/* ---------- 5 · ¿y eso qué es? ---------- */
function s5(t){let s=qDeco(t,ao(t,17.1,.4),3,6)+groundLine(1);
  s+=actor('lenteja',{t0:17.1,path:[[17.1,270]],emo:[[17.1,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);
  return s;}
/* ---------- 6 · relojes atómicos ---------- */
function s6(t){let s=groundLine(1);
  s+=G(270,470,1,0,NX.atomclock({label:'hora oficial del mundo'},t-18.55));
  s+=stampA(270,690,t-21.85,'NO FALLAN',{r:-6,sz:24,c:K.green});
  return s;}
/* ---------- 7 · la Tierra no gira siempre igual ---------- */
function s7(t){let s=groundLine(1);
  const sp=t<25.8?1:t<26.8?.4:3;
  s+=G(270,440,1.15,0,NX.globe({},(t-22.9)*sp));
  s+=pillA(170,600,'más lenta',sg(t,25.9,26.15),{sz:15,w:800});
  s+=pillA(400,600,'más rápida',sg(t,27.3,27.55),{fill:'url(#gRP)',sz:15,w:800});
  s+=actor('grano',{t0:23.0,path:[[23.0,70]],emo:[[23.0,2,0],[25.9,9,0],[27.4,7,0]],s:.55,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* ---------- 8 · 27 segundos desde 1972 ---------- */
function s8(t){let s=groundLine(1);
  s+=G(270,400,1,0,NX.drift({fix:[2.6,3.4,4.2,5.0]},t-28.5),dis(t,33.9,.3));
  s+=pillA(270,540,'desde 1972',sg(t,31.45,31.7)*dis(t,33.9),{fill:'url(#gRP)',sz:16,w:800});
  if(t>33.9){s+=G(270,430,1,0,NX.counter({value:27,sz:110,dur:.9},t-34.0));s+=pillA(270,520,'segundos extra',sg(t,34.7,34.95),{fill:'url(#gRP)',sz:16,w:800});}
  s+=actor('pipa',{t0:28.6,path:[[28.6,450]],emo:[[28.6,1,0],[34.1,7,0]],s:.6,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 9 · el último: 23:59:60 ---------- */
function s9(t){let s=groundLine(1);
  if(t<39.3)s+=G(270,370,1,0,NX.bigyear({value:2016},t-36.1),dis(t,39.0,.3));
  s+=pillA(270,500,'31 de diciembre de 2016',sg(t,37.1,37.35)*dis(t,39.0),{fill:'url(#gRP)',sz:15,w:800});
  if(t>39.0){s+=G(270,430,1.05,0,NX.leapclock({seq:['23:59:59','23:59:60'],step:3.35,hl:1},t-39.05));
    s+=pillA(270,560,'UTC',sg(t,39.2,39.45),{sz:13,w:800});}
  return s;}
/* ---------- 10 · a los ordenadores no les gusta ---------- */
function s10(t){let s=groundLine(1);
  s+=G(270,GY-104,.8,0,NX.servers({},t-43.8));
  s+=pillA(270,300,'ese segundo «raro»',sg(t,46.8,47.05),{fill:'url(#gRP)',sz:16,w:800});
  if(t>46.9)s+=G(270,400,1,0,Rc(-56,-30,112,60,'#141212',10)+Tn(0,10,':60',28,800,{fill:'#ff4f7b'}),ap(t,47.0,.3));
  s+=actor('lenteja',{t0:44.0,path:[[44.0,470]],emo:[[44.0,9,0]],s:.55,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 11 · 2012: Reddit, LinkedIn, Qantas ---------- */
function s11(t){let s=groundLine(1);
  s+=G(270,290,.8,0,NX.bigyear({value:2012},t-48.1));
  [['Reddit',49.75,-12],['LinkedIn',50.2,10]].forEach(([n,t0,r],i)=>{const q=ap(t,t0,.3);if(q>0){s+=G(150+i*240,500,q,r,Rc(-90,-60,180,120,'#fff',12,OL(2.4))+Rc(-90,-60,180,26,'#2a2f45',12)+Rc(-90,-46,180,12,'#2a2f45')+Tn(0,10,n,20,800)+Tn(0,40,'Error 503',12,700,{fill:K.red}));}});
  if(t>50.7)s+=G(270,640,1,0,NX.vehicle({type:'plane',dur:2.2},t-50.7));
  s+=pillA(270,700,'vuelos de Qantas retrasados',sg(t,51.2,51.45),{sz:13,w:800});
  return s;}
/* ---------- 12 · Año Nuevo 2017: Cloudflare ---------- */
function s12(t){let s=groundLine(1);
  s+=G(150,430,.8,0,NX.calendar({from:1,to:1,month:'ENE'},t-52.65));
  s+=pillA(150,540,'Año Nuevo 2017',sg(t,53.3,53.55),{fill:'url(#gRP)',sz:14,w:800});
  if(t>54.5)s+=G(390,520,.62,0,NX.cyber({},t-54.55));
  s+=stampA(390,330,t-55.55,'CLOUDFLARE: FALLO',{r:6,sz:16,c:K.red});
  return s;}
/* ---------- 13 · la Tierra gira más deprisa ---------- */
function s13(t){let s=groundLine(1);
  s+=G(270,450,1.1,0,NX.globe({},(t-56.6)*(1+2*sg(t,58.5,59.5))));
  for(let i=0;i<5;i++){const y=380+i*30,q=ao(t,58.6+i*.05,.25);if(q>0)s+=P(`M${f1(440+i%2*10)} ${y} l${f1(60*q)} 0`,ST(K.ink,3));}
  s+=pillA(270,250,'últimamente',sg(t,57.4,57.65)*dis(t,59.3),{sz:14,w:800});
  s+=pillA(270,660,'gira algo más deprisa',sg(t,59.2,59.45),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* ---------- 14 · restar un segundo: nunca se ha hecho ---------- */
function s14(t){let s=groundLine(1);
  s+=G(270,440,1,0,NX.leapclock({seq:['23:59:57','23:59:58','00:00:00'],step:.9,hl:2,badge:'−1 s',badgeC:K.blue},t-60.4));
  s+=pillA(270,300,'algo que nunca se ha hecho',sg(t,61.9,62.15),{fill:'url(#gRP)',sz:15,w:800});
  s+=stampA(270,600,t-63.0,'RESTAR UN SEGUNDO',{r:-5,sz:20,c:K.blue});
  return s;}
/* ---------- 15 · nadie sabe cómo reaccionarían ---------- */
function s15(t){let s=qDeco(t,ao(t,64.5,.4),9,6)+groundLine(1);
  s+=G(340,GY-78,.6,0,NX.servers({},t-64.5));
  s+=actor('garbanzo',{t0:64.5,path:[[64.5,110]],emo:[[64.5,9,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=pillA(270,300,'¿cómo reaccionarían los sistemas?',sg(t,65.5,65.75),{sz:14,w:800});
  return s;}
/* ---------- 16 · desde el 20 de mayo de 2027 ---------- */
function s16(t){let s=groundLine(1);
  s+=G(270,430,1.2,0,NX.calendar({from:20,to:20,month:'MAY'},t-68.4));
  s+=pillA(270,580,'2027',sg(t,69.6,69.85),{fill:'url(#gRP)',sz:22,w:800});
  s+=stampA(270,300,t-71.0,'SIN SALTOS',{r:-5,sz:20,c:K.green});
  return s;}
/* ---------- 17 · hasta una hora ---------- */
function s17(t){let s=groundLine(1);
  s+=G(270,400,1,0,NX.drift({gap:200},(t-72.6)*1.6));
  s+=G(0,0,1,0,Tn(270,560,'hasta',22,600),ao(t,74.6,.25));
  s+=pillA(270,610,'1 hora',sg(t,74.85,75.1),{fill:'url(#gRP)',sz:26,w:800});
  s+=pillA(270,250,'antes de corregir nada',sg(t,75.4,75.65),{sz:14,w:800});
  return s;}
/* ---------- 18 · tardaría siglos ---------- */
function s18(t){let s=groundLine(1);
  s+=G(270,420,1.2,0,NX.clock({h:12,m:0,spin:.4},t-77.0));
  s+=pillA(270,600,'según los expertos',sg(t,77.8,78.05),{sz:14,w:800});
  s+=actor('lenteja',{t0:77.1,path:[[77.1,460]],emo:[[77.1,2,0]],s:.6,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 19 · pregunta ---------- */
function s19(t){let s=qDeco(t,ao(t,80.5,.5),7,6);
  const opts=[['A','Ni me enteré'],['B','Mi móvil se lió'],['C','Ni sabía que existía'],['D','¿Otra? Cuéntamela']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,80.7+i*.1,.3),sel=i===2?EZ.out(sg(t,82.2,82.4)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,80.7+i*.1,81.0+i*.1)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  const cq=ap(t,82.6,.3);if(cq>0){const typed='¡Un segundo gratis!'.slice(0,Math.floor(19*sg(t,82.7,83.6)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:80.5,path:[[80.5,86]],emo:[[80.5,0,0],[81.1,3,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:80.6,path:[[80.6,458]],emo:[[80.6,0,0],[81.2,2,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,84.8,85.5)));
  s+=G(0,0,1,0,Ts(270,352,'Adiós al',30),ao(t,84.9,.3))+G(0,0,1,0,Ts(270,398,'segundo intercalar',40,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,85.0,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Euronews · Scientific American · CNN · Geo News',10,600)+Tn(270,474,'CGPM, Versalles · 15/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,85.1,.3));
  s+=G(270,560,.42,0,NX.leapclock({seq:['23:59:60'],hl:0},t-85.2),ao(t,85.2,.3));
  s+=groundLine(1);
  [['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]].forEach(([k,sc],i)=>{const x=600-((t-84.5)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2a',a:4.4,draw:s2a,in:{type:'glitch',dur:.3}},
  {id:'2b',a:5.65,draw:s2b,in:{type:'whipL',dur:.32}},
  {id:'3',a:8.1,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:11.5,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'5',a:17.05,draw:s5,in:{type:'whipD',dur:.32}},
  {id:'6',a:18.45,draw:s6,in:{type:'zoom',dur:.45,fx:270,fy:470,z:8}},
  {id:'7',a:22.8,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:28.35,draw:s8,in:{type:'whipU',dur:.32}},
  {id:'9',a:35.95,draw:s9,in:{type:'iris',dur:.4,fx:270,fy:430,r0:10}},
  {id:'10',a:43.65,draw:s10,in:{type:'glitch',dur:.3}},
  {id:'11',a:47.9,draw:s11,in:{type:'whipL',dur:.32}},
  {id:'12',a:52.5,draw:s12,in:{type:'whipD',dur:.32}},
  {id:'13',a:56.5,draw:s13,in:{type:'whipU',dur:.32}},
  {id:'14',a:60.2,draw:s14,in:{type:'zoom',dur:.45,fx:270,fy:450,z:8}},
  {id:'15',a:64.35,draw:s15,in:{type:'whipL',dur:.32}},
  {id:'16',a:67.55,draw:s16,in:{type:'iris',dur:.4,fx:270,fy:430,r0:10}},
  {id:'17',a:72.4,draw:s17,in:{type:'whipU',dur:.32}},
  {id:'18',a:76.95,draw:s18,in:{type:'whipD',dur:.32}},
  {id:'19',a:80.4,draw:s19,in:{type:'whipL',dur:.32}},
  {id:'END',a:84.5,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:1.95,y:170,lines:[{txt:'¿sabías que',sz:34,t:[.05,.66]},{txt:'de *vez en cuando*',sz:44,t:[1.0,1.1,1.32,1.45],gap:1.15}]},
 {t0:1.99,t1:4.35,y:170,lines:[{txt:'a un minuto le ponen',sz:30,t:[1.99,2.08,2.20,2.59,2.71]},{txt:'un segundo *de más*?',sz:44,t:[3.06,3.19,3.58,3.67],gap:1.15}]},
 {t0:5.74,t1:8.1,y:170,lines:[{txt:'el mundo',sz:30,t:[5.74,6.01]},{txt:'decide *quitarlo*',sz:48,t:[6.80,7.25]}]},
 {t0:8.25,t1:11.5,y:150,lines:[{txt:'en *Versalles*',sz:50,t:[9.40,9.55]}]},
 {t0:14.71,t1:17.0,y:170,lines:[{txt:'votaron eliminar el',sz:30,t:[14.71,15.12,15.56]},{txt:'segundo *intercalar*',sz:44,t:[15.66,16.10],gap:1.15}]},
 {t0:17.19,t1:18.4,lines:[{txt:'¿y eso',sz:34,t:[17.19,17.45]},{txt:'qué *es*?',sz:54,t:[17.68,17.86]}]},
 {t0:18.55,t1:22.75,y:150,lines:[{txt:'relojes *atómicos*',sz:44,t:[20.48,20.91]}]},
 {t0:22.93,t1:25.0,y:170,lines:[{txt:'la *Tierra*',sz:52,t:[23.19,23.30]},{txt:'no gira siempre igual',sz:30,t:[23.64,23.79,24.09,24.48],gap:1.15}]},
 {t0:28.45,t1:31.35,y:180,lines:[{txt:'para que los relojes',sz:30,t:[28.45,28.73,28.84,29.00]},{txt:'no se *separaran*',sz:44,t:[29.46,29.60,29.73],gap:1.15}]},
 {t0:31.41,t1:33.9,y:180,lines:[{txt:'se han añadido',sz:30,t:[33.34,33.51,33.62]}]},
 {t0:34.06,t1:35.9,y:180,lines:[{txt:'*veintisiete*',sz:50,t:[34.06]},{txt:'segundos extra',sz:30,t:[34.69,35.20],gap:1.1}]},
 {t0:36.11,t1:39.0,y:140,lines:[{txt:'el *último*',sz:50,t:[36.11,36.40]}]},
 {t0:39.12,t1:43.6,y:170,lines:[{txt:'el reloj',sz:32,t:[39.98,40.15]},{txt:'*marcó*',sz:54,t:[40.49]}]},
 {t0:44.01,t1:46.5,y:170,lines:[{txt:'a los *ordenadores*',sz:42,t:[44.70,44.74,44.91]},{txt:'no les gusta nada',sz:30,t:[45.59,45.74,45.94,46.26],gap:1.15}]},
 {t0:48.06,t1:52.5,y:150,lines:[{txt:'ayudó a *tumbar*',sz:44,t:[49.02,49.36,49.44]}]},
 {t0:52.6,t1:56.45,y:170,lines:[{txt:'provocó un',sz:30,t:[54.54,54.96]},{txt:'*fallo*',sz:56,t:[55.11]}]},
 {t0:56.65,t1:60.2,y:150,lines:[{txt:'la Tierra gira',sz:30,t:[58.09,58.23,58.56]},{txt:'*más deprisa*',sz:50,t:[59.17,59.38]}]},
 {t0:62.96,t1:64.35,y:170,lines:[{txt:'*restar*',sz:56,t:[62.96]},{txt:'un segundo',sz:32,t:[63.36,63.49],gap:1.1}]},
 {t0:64.44,t1:67.5,y:180,lines:[{txt:'*nadie*',sz:54,t:[64.60]},{txt:'sabe bien cómo',sz:30,t:[64.92,65.20,65.45],gap:1.1}]},
 {t0:68.40,t1:70.8,y:170,lines:[{txt:'desde el',sz:30,t:[68.40,68.67]},{txt:'*20 de mayo*',sz:52,t:[68.76,69.09,69.19]}]},
 {t0:70.83,t1:72.4,y:150,lines:[{txt:'se acabaron los *saltos*',sz:40,t:[70.83,70.96,71.42,71.58]}]},
 {t0:72.53,t1:74.5,y:150,lines:[{txt:'el reloj y la Tierra',sz:30,t:[72.53,72.81,73.16,73.21,73.34]},{txt:'podrán *separarse*',sz:44,t:[73.66,74.00],gap:1.15}]},
 {t0:77.08,t1:80.4,y:150,lines:[{txt:'tardaría',sz:32,t:[79.09]},{txt:'*siglos*',sz:58,t:[79.58]}]},
 {t0:80.56,t1:83.0,lines:[{txt:'¿tú habrías notado',sz:32,t:[80.56,80.79,81.17]},{txt:'ese *segundo*?',sz:46,t:[81.62,81.84],gap:1.15}]},
 {t0:83.11,t1:84.5,lines:[{txt:'te leo en',sz:30,t:[83.11,83.31,83.59]},{txt:'*comentarios*',sz:48,t:[83.70]}]}
];
