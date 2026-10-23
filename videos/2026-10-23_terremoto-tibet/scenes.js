/* ===== NOTICIA · Terremoto de magnitud 7 en el Tíbet (Baqing, Nagqu) · 23/10/2026 ===== */
/* Hay víctimas mortales: tono sobrio, sin bromas ni caras graciosas. */
DUR=86.6;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const BAQING=[94.1,31.9],NAGQU=[92.05,31.48],DINGRI=[87.6,28.6];
function card(x,y,top,big,col,lt,sub,w=240){return G(x,y,EZ.back(sg(lt,0,.3)),0,Rc(-w/2,-50,w,100,'#fff',14,OL(2.4))+Tn(0,-18,top,14,800,{fill:'#555'})+Tn(0,22,big,30,800,{fill:col||K.ink})+(sub?Tn(0,42,sub,11,600,{fill:'#777'}):''),cl(lt*4));}

/* 1 · fotograma 0: el altiplano tiembla de noche, se agrieta y caen casas (recurso nuevo plateau) + sismógrafo magnitud 7 */
function s1(t){let s='';
  const shake=t<5.6?1-.5*sg(t,4.5,5.6):.25*(1-sg(t,5.6,6.6));
  s+=G(270,860,1,0,NX.plateau({shake,crack:EZ.out(sg(t,-.2,1.6)),fall:sg(t,.4,1.8),night:1},t+.4));
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Terremoto en el Tíbet',y:0},t+.4));
  if(t<5.6)s+=G(270,288,.72,0,NX.quake({mag:7},t+.7),1-ao(t,5.3,.3));
  s+=pillA(400,500,'casi 5.000 m de altura',sg(t,3.5,3.75),{fill:K.blue,sz:15,w:800,o:1-ao(t,5.3,.3)});
  /* momento sobrio: se oscurece y aparece la cifra */
  const dk=ao(t,5.5,.5);
  if(dk>0)s+=Rc(0,0,540,960,'#0d0f18',0,`opacity:${f2(dk*.62)}`);
  if(t>6.6)s+=G(270,420,1,0,Rc(-170,-62,340,124,'#fff',16,OL(2.6))+Tn(0,-18,'AL MENOS',15,800,{fill:'#555',ls:.08})+Tn(0,30,'16 muertos',40,800,{fill:K.ink}),ap(t,6.65,.35));
  return s;}
/* 2 · jueves por la noche, 22:33 hora local */
function s2(t){let s='';
  s+=G(170,450,1.25,0,NX.clock({h:10,m:33},t-8.1));
  if(t>8.5)s+=G(390,450,1,0,NX.calendar({from:22,to:22,month:'OCT'},t-8.5));
  s+=pillA(390,545,'jueves',sg(t,8.6,8.85),{fill:'url(#gRP)',sz:15,w:800});
  s+=pillA(170,575,'22:33 hora local',sg(t,10.0,10.25),{fill:K.ink,sz:17,w:800});
  s+=pillA(270,660,'14:33 GMT · 16:33 en España',sg(t,10.9,11.15),{fill:'#555',sz:13,w:700});
  return s;}
/* 3 · condado de Baqing, ciudad de Nagqu, altiplano tibetano, China */
function s3(t){let s='';
  s+=G(270,470,1,0,NX.map({center:[91,31.5],zoom:4.2,zoomAt:-.2,highlight:['China'],pins:[[BAQING[0],BAQING[1],'Baqing (Nagqu)']],w:480,h:440,
    over:(pr,k)=>{if(t<12.6)return '';const [x,y]=pr(BAQING[0],BAQING[1]);return G(x,y,1/k,0,_pulse(t-12.6,34,K.red,3,1.1));}},t-11.7+.2));
  s+=pillA(270,215,'Tíbet · China',sg(t,14.4,14.65),{fill:K.ink,sz:17,w:800});
  s+=pillA(270,745,'altiplano tibetano',sg(t,15.0,15.25),{fill:'url(#gRP)',sz:16,w:800});
  return s;}
/* 4 · heridos · graves */
function s4(t){let s=groundLine(1,730);
  s+=G(270,670,.7,0,NX.hospital({},t-17.3));
  if(t>17.3)s+=G(270,220,1,0,NX.stamp({type:'oficial',text:'AUTORIDADES CHINAS',r:-4,sz:20},t-17.4));
  if(t>19.1)s+=G(270,330,1,0,Rc(-180,-62,360,124,'#fff',16,OL(2.6))+Tn(0,-18,'HERIDOS',15,800,{fill:'#555',ls:.08})+G(0,34,1,0,NX.counter({value:65,sz:54,dur:.8},t-19.1)),ap(t,19.1,.35));
  if(t>20.6)s+=G(270,435,1,0,Rc(-110,-26,220,52,K.red,14)+Tn(0,8,'11 graves',22,800,{fill:'#fff'}),ap(t,20.6,.35));
  return s;}
/* 5 · más de 300 casas derrumbadas o dañadas (de día) */
function s5(t){let s='';
  s+=G(270,860,1,0,NX.plateau({fall:1,crack:1},t));
  if(t>22.7)s+=G(270,350,1,0,Rc(-190,-62,380,124,'#fff',16,OL(2.6))+Tn(0,-22,'CASAS DERRUMBADAS O DAÑADAS',13,800,{fill:'#555',ls:.04})+G(0,30,1,0,NX.counter({value:300,prefix:'+',sz:50,dur:.8},t-22.7)),ap(t,22.7,.35));
  return s;}
/* 6 · más de 12.000 personas han tenido que salir de sus casas */
function s6(t){let s=groundLine(1,700);
  s+=G(270,700,1,0,NX.tents({n:6},t-26.2));
  s+=G(270,520,.8,0,NX.evacuation({n:6},t-26.3),ao(t,26.3,.3));
  if(t>26.6)s+=G(270,280,1,0,Rc(-170,-62,340,124,'#fff',16,OL(2.6))+Tn(0,-22,'EVACUADOS',14,800,{fill:'#555',ls:.08})+G(0,30,1,0,NX.counter({value:12489,sz:50,dur:1.2},t-26.6)),ap(t,26.6,.35));
  return s;}
/* 7 · rescate difícil: mucho frío */
function s7(t){let s='';
  s+=G(270,860,1,0,NX.plateau({fall:1,crack:1,snow:sg(t,32.3,33)},t));
  s+=pillA(270,300,'rescate muy difícil',sg(t,30.3,30.55),{fill:K.ink,sz:19,w:800});
  if(t>32.3)s+=G(270,420,1,0,Rc(-80,-30,160,60,'#2f6fe0',14,OL(2.2,'#fff'))+G(-50,0,1,t*30,P('M-12 0 L12 0 M0 -12 L0 12 M-8 -8 L8 8 M8 -8 L-8 8',ST('#fff',3)))+Tn(14,9,'frío',24,800,{fill:'#fff'}),ap(t,32.3,.35));
  return s;}
/* 8 · menos oxígeno a esa altura (recurso nuevo thinair) */
function s8(t){let s='';
  s+=G(270,470,1.15,0,NX.thinair({alt:'4.800 m',at:.15},t-33.4));
  return s;}
/* 9 · nieve prevista los próximos días */
function s9(t){let s='';
  s+=G(270,520,1.1,0,NX.blizzard({label:'nieve prevista · próximos días'},t-35.8));
  return s;}
/* 10 · carretera nacional cortada por desprendimientos */
function s10(t){let s='';
  s+=G(270,470,1,0,NX.landslide({},t-38.2));
  s+=G(270,700,.8,0,NX.roadblock({},t-39.4),ao(t,39.4,.3));
  s+=pillA(270,230,'carretera nacional G317',sg(t,38.9,39.15),{fill:K.ink,sz:17,w:800});
  s+=pillA(270,290,'cortada por desprendimientos',sg(t,40.4,40.65),{fill:K.red,sz:15,w:800});
  return s;}
/* 11 · el tren Qinghai–Tíbet vuelve a circular, más despacio */
function s11(t){let s=groundLine(1,560);
  const lt=t-41.6,x=lerp(-60,330,EZ.out(sg(t,41.8,46.2)));
  s+=G(x,560,.75,0,bulletTrainS({c:K.red}));
  s+=pillA(270,250,'tren Qinghai – Tíbet',sg(t,42.4,42.65),{fill:K.ink,sz:17,w:800});
  if(t>43.6)s+=G(270,380,1,0,Rc(-110,-30,220,60,K.green2,14)+Tn(0,9,'vuelve a circular',20,800,{fill:'#fff'}),ap(t,43.6,.35));
  if(t>44.8)s+=G(270,690,1,0,Rc(-120,-30,240,60,'#fff',14,OL(2.4))+Tn(0,9,'velocidad limitada',20,800,{fill:K.orange}),ap(t,44.8,.35));
  return s;}
/* 12 · más de 400 réplicas (recurso nuevo aftershocks) */
function s12(t){let s='';
  s+=G(270,430,1,0,NX.aftershocks({n:400,dur:2.2,label:'réplicas'},t-46.1));
  s+=pillA(270,250,'la mayor, de magnitud 4,3',sg(t,49.0,49.25),{fill:'#555',sz:13,w:700});
  return s;}
/* 13 · más de 1.600 personas trabajan en la zona */
function s13(t){let s=groundLine(1,700);
  s+=G(150,690,.9,0,NX.ambulance({},t-50.0));
  s+=G(390,420,.8,0,NX.helicopter({},t-50.2));
  if(t>50.5)s+=G(270,260,1,0,Rc(-170,-62,340,124,'#fff',16,OL(2.6))+Tn(0,-22,'EQUIPOS DE RESCATE',14,800,{fill:'#555',ls:.06})+G(0,30,1,0,NX.counter({value:1600,prefix:'+',sz:50,dur:1},t-50.5)),ap(t,50.5,.35));
  return s;}
/* 14 · ¿por qué tiembla tanto? India empuja contra Asia, se levantan el Himalaya y el Tíbet (recurso nuevo platecrash) */
function s14(t){let s='';
  s+=G(270,540,1,0,NX.platecrash({push:EZ.io(sg(t,55.6,61.6)),tension:sg(t,62.4,63.0)},t-53.5));
  if(t>55.8)s+=pillA(270,725,'millones de años de empuje',sg(t,56.5,56.75),{fill:K.ink,sz:15,w:800});
  if(t>62.4)s+=G(270,250,1,0,Rc(-140,-28,280,56,K.red,14)+Tn(0,8,'tensión acumulada',20,800,{fill:'#fff'}),ap(t,62.4,.35));
  return s;}
/* 15 · esta vez la corteza se rompió al estirarse */
function s15(t){let s='';
  s+=G(270,540,1,0,NX.platecrash({push:1,stretch:EZ.out(sg(t,67.8,68.9))},t-64.8+5));
  s+=pillA(270,250,'sismólogos chinos',sg(t,65.7,65.95),{fill:K.ink,sz:16,w:800});
  if(t>68.4)s+=G(270,725,1,0,Rc(-150,-28,300,56,'#fff',14,OL(2.4))+Tn(0,8,'se rompió al estirarse',19,800,{fill:K.red}),ap(t,68.4,.35));
  return s;}
/* 16 · no es la primera vez: enero de 2025, Dingri, al menos 126 muertos */
function s16(t){let s='';
  s+=G(270,480,1,0,NX.map({center:[90,30.5],zoom:3.8,zoomAt:-5,highlight:['China'],pins:[[DINGRI[0],DINGRI[1],'Dingri · 2025'],[BAQING[0],BAQING[1],'Baqing · 2026']],w:480,h:420},t-69.6+.0));
  if(t>70.9)s+=G(270,220,1,0,Rc(-110,-36,220,72,'#fff',14,OL(2.4))+Tn(0,-8,'ENERO',13,800,{fill:'#555'})+Tn(0,22,'2025',26,800),ap(t,70.9,.35));
  if(t>74.6)s+=G(270,740,1,0,Rc(-150,-30,300,60,K.ink,14)+Tn(0,9,'al menos 126 muertos',21,800,{fill:'#fff'}),ap(t,74.6,.35));
  return s;}
/* 17 · cifras provisionales */
function s17(t){let s='';
  s+=G(270,860,1,0,NX.plateau({fall:1,crack:1,snow:.6},t),.55);
  if(t>77.3)s+=G(270,420,1,0,NX.stamp({type:'desarrollo',text:'CIFRAS PROVISIONALES',r:-5,sz:24},t-77.4));
  return s;}
/* 18 · pregunta (sobria) */
function s18(t){let s=groundLine(1);
  s+=actor('pipa',{t0:79.7,path:[[79.7,130]],emo:[[79.7,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:79.8,path:[[79.8,410]],emo:[[79.8,1,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=G(270,430,.9,0,NX.quake({mag:7},t-79.7),.9);
  s+=pillA(270,620,'Te leo en comentarios',sg(t,82.5,82.75),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,83.6,84.2)));
  s+=G(0,0,1,0,Ts(270,352,'Terremoto en el Tíbet',30),ao(t,83.65,.3))+G(0,0,1,0,Ts(270,398,'magnitud 7',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,83.75,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Centro de Redes Sismológicas de China · USGS · Xinhua',9.5,600)+Tn(270,474,'EFE · Euronews · CNN · ABC · 23/10/2026',9.5,600)+Tn(270,490,'cifras provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,84.1,.3));
  s+=G(270,1010,1,0,NX.plateau({},t),ao(t,84.1,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:8.1,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:11.7,draw:s3,in:{type:'zoom',dur:.45,fx:270,fy:470,z:6}},
  {id:'4',a:17.2,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'5',a:22.2,draw:s5,in:{type:'whipU',dur:.32}},
  {id:'6',a:26.2,draw:s6,in:{type:'whipL',dur:.32}},
  {id:'7',a:30.0,draw:s7,in:{type:'whipD',dur:.32}},
  {id:'8',a:33.4,draw:s8,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'9',a:35.8,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'10',a:38.2,draw:s10,in:{type:'whipU',dur:.32}},
  {id:'11',a:41.6,draw:s11,in:{type:'whipL',dur:.32}},
  {id:'12',a:46.1,draw:s12,in:{type:'glitch',dur:.3}},
  {id:'13',a:50.0,draw:s13,in:{type:'whipL',dur:.32}},
  {id:'14',a:53.5,draw:s14,in:{type:'zoom',dur:.45,fx:270,fy:500,z:6}},
  {id:'15',a:64.8,draw:s15,in:{type:'whipD',dur:.32}},
  {id:'16',a:69.6,draw:s16,in:{type:'whipL',dur:.32}},
  {id:'17',a:76.9,draw:s17,in:{type:'whipU',dur:.32}},
  {id:'18',a:79.6,draw:s18,in:{type:'whipD',dur:.32}},
  {id:'END',a:83.6,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:0,t1:5.3,y:175,lines:[{txt:'magnitud *7*',sz:52,t:[-.5,-.4]},{txt:'en el Tíbet',sz:34,t:[-.3,-.25,-.2],gap:1.15}]},
 {t0:53.55,t1:55.3,y:200,lines:[{txt:'¿por qué',sz:34,t:[53.71,53.89]},{txt:'*tiembla*?',sz:56,t:[54.01],gap:1.15}]},
 {t0:79.7,t1:83.5,y:190,lines:[{txt:'¿sabrías',sz:34,t:[79.7]},{txt:'qué *hacer*?',sz:48,t:[80.33,80.44],gap:1.15}]}
];
