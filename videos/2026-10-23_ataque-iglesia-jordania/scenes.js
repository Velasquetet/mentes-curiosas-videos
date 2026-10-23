/* ===== NOTICIA · Ataque armado en una iglesia de Jordania durante un funeral (Hamud, Karak) · 23/10/2026 ===== */
/* Hay víctimas mortales: tono sobrio, sin bromas ni caras graciosas. Sin violencia explícita. */
DUR=85.4;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const KARAK=[35.70,31.18],AMMAN=[35.93,31.95];
const bigCard=(t,t0,top,inner,y,w=340)=>t>t0?G(270,y,1,0,Rc(-w/2,-62,w,124,'#fff',16,OL(2.6))+Tn(0,-22,top,14,800,{fill:'#555',ls:.06})+inner,ap(t,t0,.35)):'';
const carD=()=>El(0,4,120,10,'rgba(20,18,18,.18)')+P('M-120 -10 L-110 -46 Q-100 -60 -66 -62 L-38 -92 L46 -92 L76 -62 L112 -54 Q126 -48 124 -10Z','fill:#2a2a30;'+OL(2.4))+P('M-28 -86 L40 -86 L64 -62 L-50 -62Z','fill:#56607a;'+OL(1.6))+Ci(-70,-8,20,K.ink)+Ci(-70,-8,8,'#888')+Ci(74,-8,20,K.ink)+Ci(74,-8,8,'#888');
const dark=(a)=>a>0?Rc(0,0,540,960,'#0d0f18',0,`opacity:${f2(a)}`):'';

/* 1 · fotograma 0: iglesia de noche con luces de policía y cinta (recurso nuevo orthochurch) + ÚLTIMA HORA */
function s1(t){let s='';
  s+=G(300,760,.95,0,NX.orthochurch({tape:1,tapeAt:-.6},t+.5));
  s+=G(105,772,.5,0,NX.police({},t+.5));
  s+=G(270,760,1,0,NX.siren({color:K.blue},t),.55);
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Ataque en una iglesia de Jordania',y:0},t+.4));
  s+=pillA(270,330,'en pleno funeral',sg(t,4.0,4.25),{fill:K.red,sz:18,w:800,o:1-ao(t,5.0,.3)});
  const dk=ao(t,5.0,.5);s+=dark(dk*.62);
  if(t>5.3)s+=G(270,420,1,0,Rc(-170,-62,340,124,'#fff',16,OL(2.6))+Tn(0,-18,'AL MENOS',15,800,{fill:'#555',ls:.08})+Tn(0,30,'7 muertos',40,800,{fill:K.ink}),ap(t,5.35,.35));
  return s;}
/* 2 · viernes · iglesia ortodoxa griega · Hamud (Karak) · sur de Jordania */
function s2(t){let s='';
  s+=G(270,480,1,0,NX.map({center:[36.4,31.2],zoom:9,zoomAt:-.2,highlight:['Jordania'],pins:[[KARAK[0],KARAK[1],'Hamud (Karak)']],w:480,h:440,
    over:(pr,k)=>{if(t<10.9)return '';const [x,y]=pr(KARAK[0],KARAK[1]);return G(x,y,1/k,0,_pulse(t-10.9,34,K.red,3,1.1));}},t-7.2+.2));
  s+=pillA(270,205,'viernes 23 de octubre',sg(t,7.8,8.05),{fill:K.ink,sz:17,w:800});
  s+=pillA(270,262,'iglesia ortodoxa griega',sg(t,9.3,9.55),{fill:'url(#gRP)',sz:16,w:800});
  s+=pillA(270,760,'sur de Jordania',sg(t,13.2,13.45),{fill:K.ink,sz:16,w:800});
  return s;}
/* 3 · dentro, decenas de personas despedían a un vecino (iglesia de día con gente de luto) */
function s3(t){let s='';
  s+=G(270,760,1,0,NX.orthochurch({open:sg(t,14.8,15.6),mourn:sg(t,15.2,16.4),bell:1},t-14.5+.4));
  s+=pillA(270,250,'un funeral',sg(t,15.0,15.25),{fill:K.ink,sz:20,w:800});
  s+=pillA(270,310,'decenas de personas',sg(t,15.7,15.95),{fill:'#555',sz:15,w:800});
  return s;}
/* 4 · imágenes de la televisión estatal: llegaron en coche y abrieron fuego varios minutos */
function s4(t){let s='';
  if(t<21.0){s+=G(270,450,1.05,0,NX.tv({label:'TELEVISIÓN ESTATAL · JORDANIA',inner:G(0,-10,.42,0,NX.orthochurch({},3))},t-17.9));}
  else{s+=groundLine(1,700);
    s+=G(370,700,.65,0,NX.orthochurch({},3));
    const x=lerp(-120,160,EZ.out(sg(t,21.1,22.4)));s+=G(x,700,.7,0,carD());
    s+=pillA(270,200,'llegaron en un coche',sg(t,21.3,21.55),{fill:K.ink,sz:17,w:800});
    if(t>23.2)s+=G(270,270,1,0,Rc(-160,-30,320,60,K.red,14)+Tn(0,9,'abrieron fuego',22,800,{fill:'#fff'}),ap(t,23.2,.35));
    if(t>25.1)s+=G(270,345,1,0,Rc(-120,-24,240,48,'#fff',12,OL(2.2))+Tn(0,7,'varios minutos',18,800,{fill:K.ink}),ap(t,25.1,.35));
    s+=dark(ao(t,23.2,.4)*.25);}
  return s;}
/* 5 · Seguridad Pública: 34 heridos, 27 siguen en el hospital */
function s5(t){let s=groundLine(1,730);
  s+=G(270,670,.7,0,NX.hospital({},t-26.9));
  if(t>27.0)s+=G(270,200,1,0,NX.stamp({type:'oficial',text:'SEGURIDAD PÚBLICA',r:-4,sz:20},t-27.1));
  s+=bigCard(t,29.8,'HERIDOS',G(0,34,1,0,NX.counter({value:34,sz:54,dur:.8},t-29.8)),320);
  if(t>31.5)s+=G(270,425,1,0,Rc(-150,-26,300,52,K.red,14)+Tn(0,8,'27 siguen en el hospital',19,800,{fill:'#fff'}),ap(t,31.5,.35));
  return s;}
/* 6 · los atacantes huyeron, la policía los busca · nadie lo ha reivindicado */
function s6(t){let s=groundLine(1,690);
  const x=lerp(-160,270,EZ.out(sg(t,34.4,35.8)));
  s+=G(x,690,.9,0,NX.police({},t-34.3));
  s+=pillA(270,260,'los atacantes huyeron',sg(t,34.6,34.85),{fill:K.ink,sz:17,w:800});
  if(t>36.3)s+=G(270,350,1,0,Rc(-140,-28,280,56,'#fff',14,OL(2.4))+Tn(0,8,'búsqueda en marcha',19,800,{fill:K.blue}),ap(t,36.3,.35));
  if(t>38.6)s+=G(270,500,1,0,NX.stamp({type:'desarrollo',text:'NADIE LO HA REIVINDICADO',r:-5,sz:21},t-38.7));
  return s;}
/* 7 · ministro del Interior: «terrorista» y «sin precedentes» */
function s7(t){let s='';
  s+=G(270,770,.5,0,NX.orthochurch({},t-40.6+.4));
  s+=pillA(270,250,'ministro del Interior de Jordania',sg(t,41.0,41.25),{fill:K.ink,sz:16,w:800});
  if(t>42.7)s+=G(270,400,1,0,Rc(-170,-40,340,80,'#fff',16,OL(2.6))+Ts(0,14,'«terrorista»',40,{it:true}),ap(t,42.7,.35));
  if(t>43.7)s+=G(270,520,1,0,Rc(-190,-40,380,80,'#fff',16,OL(2.6))+Ts(0,14,'«sin precedentes»',40,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,43.7,.35));
  return s;}
/* 8 · el rey Abdalá II · la ONU (bandera de Jordania, recurso nuevo jordanflag) */
function s8(t){let s=groundLine(1,715);
  s+=G(190,715,.8,0,NX.jordanflag({},t-45.1));
  if(t>45.5)s+=G(270,215,1,0,Rc(-150,-70,300,140,'#fff',14,OL(2.4))+Tn(0,-34,'REY ABDALÁ II',14,800,{fill:'#555',ls:.06})+Ts(0,6,'«las penas',26,{it:true})+Ts(0,38,'más duras»',26,{it:true}),ap(t,45.5,.35));
  if(t>48.6)s+=G(270,365,1,0,Rc(-150,-56,300,112,'#2f6fb8',14,OL(2.4))+Tn(0,-20,'ONU · ANTÓNIO GUTERRES',13,800,{fill:'#fff',ls:.04})+Tn(0,22,'lo condena',26,800,{fill:'#fff'}),ap(t,48.6,.35));
  return s;}
/* 9 · ¿por qué impacta tanto? estos ataques son muy raros */
function s9(t){let s='';
  s+=G(270,760,.8,0,NX.orthochurch({},3));
  if(t>55.0)s+=G(270,350,1,0,Rc(-120,-30,240,60,K.ink,14)+Tn(0,9,'muy raros',24,800,{fill:'#fff'}),ap(t,55.0,.35));
  return s;}
/* 10 · unos 300.000 cristianos en un país de 11,5 millones */
function s10(t){let s='';
  s+=G(270,370,1,0,NX.iconArray({total:40,n:1,cols:8,sz:34},t-57.4));
  s+=bigCard(t,58.4,'CRISTIANOS EN JORDANIA',Tn(0,30,'≈ 300.000',40,800,{fill:K.ink}),220);
  if(t>60.4)s+=G(270,670,1,0,Rc(-170,-44,340,88,'#fff',14,OL(2.4))+Tn(0,-12,'HABITANTES',13,800,{fill:'#555',ls:.06})+Tn(0,24,'≈ 11,5 millones',26,800,{fill:K.ink}),ap(t,60.4,.35));
  return s;}
/* 11 · una de las comunidades cristianas más antiguas del mundo */
function s11(t){let s='';
  s+=G(270,760,.8,0,NX.orthochurch({},t-63.0+.4));
  s+=pillA(270,250,'una de las comunidades cristianas',sg(t,63.6,63.85),{fill:K.ink,sz:16,w:800});
  if(t>65.3)s+=G(270,320,1,0,Rc(-150,-30,300,60,'url(#gRP)',14)+Tn(0,9,'más antiguas del mundo',20,800,{fill:'#fff'}),ap(t,65.3,.35));
  return s;}
/* 12 · Karak, 2016: ataque contra la policía y un castillo cruzado, 10 muertos */
function s12(t){let s='';
  s+=G(270,330,1,0,NX.bigyear({value:2016},t-66.9));
  if(t>69.6)s+=G(270,520,1,0,Rc(-150,-26,300,52,'#fff',12,OL(2.2))+Tn(0,7,'contra la policía',19,800,{fill:K.ink}),ap(t,69.6,.35));
  if(t>70.8)s+=G(270,590,1,0,Rc(-170,-26,340,52,'#fff',12,OL(2.2))+Tn(0,7,'y un castillo de los cruzados',18,800,{fill:K.ink}),ap(t,70.8,.35));
  if(t>73.0)s+=G(270,690,1,0,Rc(-110,-30,220,60,K.ink,14)+Tn(0,9,'10 muertos',24,800,{fill:'#fff'}),ap(t,73.0,.35));
  return s;}
/* 13 · cifras provisionales */
function s13(t){let s='';
  s+=G(270,760,.6,0,NX.orthochurch({},t),.55);
  if(t>75.2)s+=G(270,360,1,0,NX.stamp({type:'desarrollo',text:'CIFRAS PROVISIONALES',r:-5,sz:24},t-75.3));
  if(t>77.6)s+=pillA(270,470,'os contaremos lo que se sepa',sg(t,77.6,77.85),{fill:K.ink,sz:15,w:800});
  return s;}
/* 14 · recuerdo para las víctimas (velas, recurso nuevo candles) · personajes serios */
function s14(t){let s=groundLine(1);
  s+=G(270,520,1,0,NX.candles({n:7,gap:56,at:.25},t-79.3));
  s+=actor('pipa',{t0:79.3,path:[[79.3,110]],emo:[[79.3,1,0]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:79.4,path:[[79.4,430]],emo:[[79.4,1,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,250,'en recuerdo de las víctimas',sg(t,80.2,80.45),{fill:K.ink,sz:16,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,82.3,82.9)));
  s+=G(0,0,1,0,Ts(270,352,'Ataque en una iglesia',30),ao(t,82.35,.3))+G(0,0,1,0,Ts(270,398,'de Jordania',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,82.45,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Dirección de Seguridad Pública de Jordania · AP',9.5,600)+Tn(270,474,'Al Jazeera · The National · Prensa Latina · 23/10/2026',9.5,600)+Tn(270,490,'cifras provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,82.8,.3));
  s+=G(270,930,.7,0,NX.candles({n:5,at:0},t),ao(t,82.8,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:7.2,draw:s2,in:{type:'zoom',dur:.45,fx:270,fy:480,z:6}},
  {id:'3',a:14.5,draw:s3,in:{type:'whipL',dur:.32}},
  {id:'4',a:17.9,draw:s4,in:{type:'whipU',dur:.32}},
  {id:'5',a:26.8,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:34.2,draw:s6,in:{type:'whipD',dur:.32}},
  {id:'7',a:40.6,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:45.0,draw:s8,in:{type:'whipU',dur:.32}},
  {id:'9',a:52.8,draw:s9,in:{type:'glitch',dur:.3}},
  {id:'10',a:57.4,draw:s10,in:{type:'whipL',dur:.32}},
  {id:'11',a:63.0,draw:s11,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'12',a:66.9,draw:s12,in:{type:'whipD',dur:.32}},
  {id:'13',a:74.8,draw:s13,in:{type:'whipU',dur:.32}},
  {id:'14',a:79.2,draw:s14,in:{type:'whipL',dur:.32}},
  {id:'END',a:82.3,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:0,t1:4.9,y:175,lines:[{txt:'ataque en una',sz:34,t:[-.5,-.4,-.3]},{txt:'*iglesia*',sz:56,t:[-.2],gap:1.15}]},
 {t0:52.9,t1:54.9,y:220,lines:[{txt:'¿por qué',sz:34,t:[52.92,53.19]},{txt:'*impacta* tanto?',sz:48,t:[53.34,53.77],gap:1.15}]}
];
