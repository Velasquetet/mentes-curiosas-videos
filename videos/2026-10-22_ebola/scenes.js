/* ===== NOTICIA · El ébola llega a Nigeria · 22/10/2026 ===== */
/* Epidemia con miles de víctimas: tono sobrio, sin bromas ni caras graciosas. */
DUR=89.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const ABUJA=[7.49,9.06],KAMPALA=[32.58,0.35],NAIROBI=[36.82,-1.29],RDC=[23.6,-2.9];
const AFR={center:[20,4],zoom:2.55,zoomAt:-5};
const RDCN='Congo (República Democrática del)';
function card(x,y,top,big,col,lt,sub){return G(x,y,EZ.back(sg(lt,0,.3)),0,Rc(-120,-50,240,100,'#fff',14,OL(2.4))+Tn(0,-18,top,14,800,{fill:'#555'})+Tn(0,22,big,32,800,{fill:col||K.ink})+(sub?Tn(0,42,sub,11,600,{fill:'#777'}):''),cl(lt*4));}

/* 1 · fotograma 0: mapa de África con Nigeria resaltada + virus del ébola enorme ya retorciéndose */
function s1(t){let s='';
  s+=G(270,545,1,0,NX.map(Object.assign({},AFR,{highlight:['Nigeria'],pins:[[ABUJA[0],ABUJA[1],'Abuya']],w:480,h:420}),t+1.0));
  s+=G(392,670,.6,0,NX.ebolavirus({},t+1.2));
  s+=pillA(270,300,'el país más poblado de África',sg(t,1.9,2.15),{fill:'url(#gRP)',sz:16,w:800});
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Ébola',y:0},t+.4));
  return s;}
/* 2 · cuarto país de África con casos · la OMS: «más complejo» */
function s2(t){let s='';
  if(t<7.3){const order=[[RDCN,RDC,'1 · RD Congo',4.15],['Uganda',KAMPALA,'2 · Uganda',4.6],['Kenia',NAIROBI,'3 · Kenia',5.05],['Nigeria',ABUJA,'4 · Nigeria',5.5]];
    const hl=order.filter(o=>t>o[3]).map(o=>o[0]);
    s+=G(270,520,1,0,NX.map(Object.assign({},AFR,{highlight:hl,w:480,h:470,over:(pr,k,lt)=>{let m='';order.forEach(([n,ll,lab,a],i)=>{if(t<a)return;const [x,y]=pr(ll[0],ll[1]);m+=G(x,y,ap(t,a,.3)/k,0,Ci(0,0,15,K.red,OL(2,'#fff'))+Tn(0,5,String(i+1),14,800,{fill:'#fff'}));});return m;}}),t+1.0));
    s+=pillA(270,250,'4.º país de África con casos de este brote',sg(t,4.3,4.55),{fill:K.ink,sz:15,w:800});}
  else{s+=G(270,470,1,0,NX.quote({text:'Nos enfrentamos a un panorama más complejo.',who:'Mohamed Janabi, OMS África'},t-7.4));
    s+=G(270,250,.6,0,NX.ebolavirus({},t-7.0));
    if(t>9.9)s+=G(270,650,1,0,NX.stamp({type:'oficial',text:'OMS · ALERTA'},t-10.2));}
  return s;}
/* 3 · la paciente: de Uganda a Abuya (3 de octubre) */
function s3(t){let s='';
  s+=G(270,520,1,0,NX.map({center:[20,5],zoom:3.0,zoomAt:-5,highlight:['Nigeria','Uganda'],arcs:[[KAMPALA,ABUJA]],pins:[[ABUJA[0],ABUJA[1],'Abuya (capital)'],[KAMPALA[0],KAMPALA[1],'Uganda']],w:480,h:420},t-12.35+0.1));
  const q=EZ.io(sg(t,13.75,14.75));
  s+=G(150,215,.8,0,NX.calendar({from:3,to:3,month:'OCT'},t-15.95),ao(t,15.95,.3));
  s+=pillA(350,215,'vuelve a Nigeria',sg(t,16.1,16.35),{fill:K.ink,sz:15,w:800});
  s+=pillA(270,285,'del 16 de septiembre al 3 de octubre en Uganda',sg(t,17.3,17.55),{fill:'url(#gRP)',sz:14,w:800});
  return s;}
/* 4 · aislada · 44 contactos (recurso nuevo contacttrace) · ¿dónde se contagió? */
function s4(t){let s='';
  s+=G(270,470,.95,0,NX.contacttrace({n:44,at:.1,R:200},t-20.0));
  s+=pillA(270,180,'aislada y en tratamiento',sg(t,20.5,20.75),{fill:K.red,sz:16,w:800});
  if(t>22.85)s+=G(270,250,1,0,Rc(-110,-34,220,68,'#fff',14,OL(2.4))+Tn(0,12,'44 contactos',30,800),ao(t,22.85,.3));
  s+=pillA(270,760,'sanitarios · pacientes · viajeros',sg(t,25.6,25.85),{fill:K.ink,sz:15,w:800});
  if(t>27.2)s+=G(270,470,1,0,stampA(0,0,t-27.6,'ORIGEN: EN INVESTIGACIÓN',{c:K.orange,sz:20,r:-5}));
  return s;}
/* 5 · RD Congo desde mayo: más de 9.700 casos y casi 4.700 muertes (OMS) */
function s5(t){let s='';
  s+=G(270,420,1,0,NX.map({focus:RDCN,zoom:6.5,zoomAt:.1,highlight:[RDCN],w:480,h:360},t-29.55));
  if(t>30.4)s+=G(400,250,.75,0,NX.calendar({from:15,to:15,month:'MAY'},t-30.4));
  s+=pillA(200,250,'desde mayo',sg(t,30.55,30.8),{fill:K.ink,sz:16,w:800});
  if(t>35.9)s+=G(0,0,1,0,'')+card(140,680,'CASOS CONFIRMADOS','+9.700',K.ink,t-35.9);
  if(t>37.9)s+=card(400,680,'FALLECIDOS','≈4.700',K.red,t-37.9);
  if(t>40.1)s+=G(270,595,1,0,NX.stamp({type:'oficial',text:'OMS · datos a 20/10',sz:15,r:-4},t-40.2));
  return s;}
/* 6 · el segundo más mortífero de la historia */
function s6(t){let s=groundLine(1,620);
  s+=G(270,620,1,0,NX.columns({items:[['',11325,K.ink],['',4687,'url(#gRP)']],h:300},t-42.1));
  s+=G(216,648,1,0,Tn(0,0,'África occ.',14,700)+Tn(0,20,'2014-2016',13,600,{fill:'#555'}),ao(t,45.6,.3));
  s+=G(324,648,1,0,Tn(0,0,'RD Congo',14,700)+Tn(0,20,'2026',13,600,{fill:'#555'}),ao(t,42.3,.3));
  s+=pillA(270,250,'muertes por brote de ébola',sg(t,42.3,42.55),{fill:K.ink,sz:15,w:800});
  s+=pillA(270,740,'2.º brote más mortífero de la historia',sg(t,44.5,44.75),{fill:K.red,sz:15,w:800});
  return s;}
/* 7 · Kenia 9 casos (un mismo foco) · Uganda: 20 casos, brote terminado en agosto */
function s7(t){let s='';
  const kq=t<52.5;
  s+=G(270,430,1,0,NX.map({center:kq?[37.5,0.2]:[32.4,1.4],zoom:9,zoomAt:-5,highlight:[kq?'Kenia':'Uganda'],pins:kq?[[NAIROBI[0],NAIROBI[1],'Nairobi']]:[],w:480,h:380},kq?t-49.05:t-52.5));
  if(kq){s+=card(270,690,'KENIA','9 casos',K.red,t-49.4);s+=pillA(270,200,'todos de un mismo foco',sg(t,50.85,51.1),{fill:K.ink,sz:16,w:800});}
  else{s+=card(270,690,'UGANDA','20 casos',K.ink,t-52.7);
    if(t>54.4)s+=G(270,430,1,0,stampA(0,0,t-54.6,'BROTE TERMINADO',{c:K.green2,sz:24,r:-6}));
    s+=pillA(270,200,'agosto de 2026',sg(t,55.8,56.05),{fill:K.ink,sz:16,w:800});}
  return s;}
/* 8 · ¿por qué preocupa? cepa Bundibugyo, sin vacuna ni tratamiento */
function s8(t){let s=groundLine(1);
  s+=G(300,430,1.05,0,NX.ebolavirus({},t-56.7));
  s+=pillA(300,580,'cepa Bundibugyo',sg(t,60.1,60.35),{fill:'url(#gRP)',sz:18,w:800});
  s+=actor('lenteja',{t0:57.0,path:[[57.0,95]],emo:[[57.0,1,0],[58.5,2,0],[61.0,1,0]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  if(t>61.0){s+=G(330,680,.62,0,NX.vaccine({},t-61.0));s+=G(330,680,1,0,DR('M-90 -40 L90 40',ST(K.red,8),sg(t,61.6,61.9)));}
  if(t>62.0)s+=G(300,232,1,0,stampA(0,0,t-62.0,'SIN VACUNA',{c:K.red,sz:22,r:-5}));
  if(t>62.6)s+=G(300,290,1,0,stampA(0,0,t-62.6,'NI TRATAMIENTO ESPECÍFICO',{c:K.red,sz:16,r:3}));
  return s;}
/* 9 · no se contagia por el aire: contacto directo con sangre o fluidos (recurso nuevo notair) */
function s9(t){let s='';
  s+=G(270,480,1,0,NX.notair({at:.15},t-64.3));
  s+=pillA(270,700,'sangre o fluidos de una persona enferma',sg(t,68.6,68.85),{fill:K.ink,sz:15,w:800});
  return s;}
/* 10 · rastrear cada contacto y vigilarlo 21 días (recursos nuevos watchdays + contacttrace) · Nigeria 2014 */
function s10(t){let s='';
  if(t<74.9){s+=G(270,470,.95,0,NX.contacttrace({n:44,at:-5,R:200,check:72.6-71.9},t-71.9));
    s+=pillA(270,770,'encontrar a cada contacto',sg(t,73.3,73.55),{fill:K.ink,sz:16,w:800});}
  else{s+=G(270,440,1.1,0,NX.watchdays({at:.3,dur:1.6,done:'21 DÍAS'},t-74.9));
    s+=pillA(270,640,'periodo máximo de incubación',sg(t,75.8,76.05),{fill:K.ink,sz:14,w:800});
    if(t>77.0)s+=G(270,740,1,0,Rc(-150,-36,300,72,'#fff',14,OL(2.4))+Tn(0,-6,'NIGERIA · 2014',15,800,{fill:'#555'})+Tn(0,20,'brote frenado',20,800,{fill:K.green2}),ao(t,77.0,.3));}
  return s;}
/* 11 · pregunta (sobria) */
function s11(t){let s=groundLine(1);
  s+=G(270,450,.55,0,NX.globe({},t-80.9));
  s+=actor('pipa',{t0:81.0,path:[[81.0,100]],emo:[[81.0,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:81.1,path:[[81.1,440]],emo:[[81.1,1,0],[84.4,2,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,620,'Te leo en comentarios',sg(t,84.5,84.75),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,86.3,87.0)));
  s+=G(0,0,1,0,Ts(270,352,'El ébola',30),ao(t,86.4,.3))+G(0,0,1,0,Ts(270,398,'llega a Nigeria',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,86.5,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'OMS · AFP · EFE (Infobae) · Reuters (NVI Noticias)',9.5,600)+Tn(270,474,'22/10/2026 · cifras provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,86.6,.3));
  s+=G(270,640,.6,0,NX.contacttrace({n:24,at:-5,R:170,check:-5},t-86.1),ao(t,86.6,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:3.95,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:12.35,draw:s3,in:{type:'zoom',dur:.45,fx:150,fy:470,z:8}},
  {id:'4',a:19.95,draw:s4,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'5',a:29.55,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:41.8,draw:s6,in:{type:'whipU',dur:.32}},
  {id:'7',a:49.05,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:56.6,draw:s8,in:{type:'glitch',dur:.3}},
  {id:'9',a:64.25,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:71.9,draw:s10,in:{type:'whipL',dur:.32}},
  {id:'11',a:80.85,draw:s11,in:{type:'whipD',dur:.32}},
  {id:'END',a:86.1,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:3.85,y:175,lines:[{txt:'*Ébola*',sz:60,t:[.34]},{txt:'en Nigeria',sz:34,t:[1.14,1.19],gap:1.15}]},
 {t0:56.75,t1:58.4,y:190,lines:[{txt:'¿por qué',sz:34,t:[56.77,57.02]},{txt:'*preocupa*?',sz:52,t:[57.17],gap:1.15}]},
 {t0:64.4,t1:67.3,y:190,lines:[{txt:'no se contagia',sz:32,t:[65.56,65.7,65.84]},{txt:'por el *aire*',sz:48,t:[66.35,66.53,66.62],gap:1.15}]},
 {t0:81.0,t1:84.4,y:190,lines:[{txt:'¿mejor',sz:34,t:[82.44]},{txt:'*preparados*?',sz:50,t:[82.76],gap:1.15}]}
];
