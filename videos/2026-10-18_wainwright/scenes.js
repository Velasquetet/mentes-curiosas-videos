/* ===== NOTICIA · Incendio en la base militar de Wainwright (Alberta, Canadá) · 17–18/10/2026 ===== */
/* Tragedia: tono sobrio, sin bromas ni caras graciosas. */
DUR=89.8;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const FAM=(k,T,x={})=>figure(famoso(k,Object.assign({T,name:undefined},x)));
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
const WW=[-110.83,52.83],EDM=[-113.49,53.55],SAS=[-106.67,52.13];

/* 1 · cuatro muertos y decenas de heridos (impacto desde el fotograma 0) */
function s1(t){let s='';
  s+=G(270,620+_osc(t,.4,2),1.05,0,NX.basefire({spread:3,wind:true},t+3.2));
  s+=pillA(270,720,'4 militares muertos',1,{fill:K.red,sz:18,w:800});
  s+=pillA(270,770,'decenas de heridos',sg(t,1.5,1.75),{sz:16,w:800});
  s+=pillA(270,300,'ejército de Canadá',sg(t,7.4,7.65),{fill:'url(#gRP)',sz:16,w:800});
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Canadá',y:0},t+.4));
  return s;}
/* 2 · Carney lo confirma: «una de las peores tragedias» */
function s2(t){let s=groundLine(1);
  s+=G(270,GY,1.15,0,FAM('carney',t),ap(t,9.0,.35));
  s+=pillA(270,GY+40,'Mark Carney · primer ministro',sg(t,11.7,11.95),{sz:13,w:800});
  s+=pillA(270,300,'confirmado este domingo',sg(t,9.3,9.55)*dis(t,13.0),{fill:'url(#gRP)',sz:15,w:800});
  s+=pillA(270,300,'Fuerzas Armadas, en su territorio',sg(t,15.1,15.35),{sz:14,w:800});
  return s;}
/* 3 · dónde: Wainwright, Alberta */
function s3(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Canadá',center:[-112,54],zoom:3.2,zoomAt:.05,highlight:['Canadá'],pins:[[WW[0],WW[1],'Wainwright']],w:480,h:470},t-18.3));
  s+=pillA(270,250,'sábado 17 de octubre',sg(t,18.9,19.15),{fill:'url(#gRP)',sz:15,w:800});
  s+=pillA(270,760,'Alberta · oeste de Canadá',sg(t,22.0,22.25),{sz:15,w:800});
  return s;}
/* 4 · hacia las 16:00 · fuego en la zona de entrenamiento, viento, sale de la base */
function s4(t){let s='';
  if(t<26.0){s+=G(270,480,1.4,0,NX.clock({h:4,m:0},t-24.3));s+=pillA(270,660,'16:00 hora local',sg(t,25.3,25.55),{sz:16,w:800});}
  else{s+=G(270,620,1.05,0,NX.basefire({spread:6.4,label:'zona de entrenamiento'},t-26.1));
    s+=pillA(270,300,'se propagó muy rápido',sg(t,29.3,29.55)*dis(t,30.6),{fill:K.red,sz:15,w:800});
    s+=pillA(270,300,'fuertes rachas de viento',sg(t,30.75,31.0)*dis(t,32.2),{sz:15,w:800});
    s+=pillA(270,300,'salió de la base',sg(t,32.3,32.55),{fill:K.red,sz:16,w:800});}
  return s;}
/* 5 · ambulancias aéreas y hospitales desbordados */
function s5(t){let s='';
  if(t<37.6){s+=G(270,420+_osc(t,.3,6),1.1,0,NX.helicopter({rope:false,c:K.red},t-34.3));
    s+=pillA(270,610,'ambulancias aéreas',sg(t,34.8,35.05),{sz:15,w:800});
    s+=pillA(160,670,'Edmonton',sg(t,36.1,36.35),{fill:'url(#gRP)',sz:15,w:800});
    s+=pillA(380,670,'Saskatoon',sg(t,36.7,36.95),{fill:'url(#gRP)',sz:15,w:800});}
  else{s+=groundLine(1);s+=G(270,GY-10,.95,0,NX.hospital({},t-37.6));
    s+=pillA(270,300,'hospitales de varias ciudades',sg(t,39.3,39.55)*dis(t,41.1),{sz:15,w:800});
    s+=pillA(270,300,'los más cercanos, desbordados',sg(t,41.3,41.55),{fill:K.red,sz:15,w:800});}
  return s;}
/* 6 · ¿qué lo provocó? investigación abierta, sin indicios de terrorismo */
function s6(t){let s='';
  if(t<47.1){s+=qDeco(t,ao(t,44.0,.4),3,6)+groundLine(1);
    s+=actor('lenteja',{t0:44.0,path:[[44.0,270]],emo:[[44.0,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);
    s+=pillA(270,380,'todavía no se sabe',sg(t,45.5,45.75),{sz:16,w:800});}
  else{s+=groundLine(1);s+=G(270,GY-10,1,0,NX.police({},t-47.1));
    s+=pillA(270,300,'investigación abierta',sg(t,47.5,47.75),{sz:15,w:800});
    s+=pillA(270,350,'con la policía federal',sg(t,49.2,49.45),{fill:'url(#gRP)',sz:14,w:800});
    s+=G(270,480,1,0,NX.stamp({type:'oficial',text:'SIN INDICIOS DE TERRORISMO'},t-51.9));}
  return s;}
/* 7 · ¿ejercicio con fuego real? sin confirmar · 7 → 4 */
function s7(t){let s='';
  if(t<61.3){s+=G(270,470,.95,0,NX.newspaper({paper:'Prensa canadiense',headline:'¿Ejercicio con fuego real?'},t-53.6));
    s+=pillA(270,700,'citando fuentes militares',sg(t,55.5,55.75),{sz:14,w:800});
    s+=G(270,760,1,0,NX.stamp({type:'desarrollo',text:'SIN CONFIRMAR'},t-59.7));}
  else{const x7=ap(t,63.7,.35),x4=ap(t,67.2,.35);
    s+=pillA(270,300,'primeras informaciones',sg(t,61.6,61.85),{sz:14,w:800});
    s+=G(270,430,x7,0,Tn(0,0,'7',120,800,{fill:'#6f6f6f'}));
    s+=DR('M200 360 L340 470',ST(K.red,10),sg(t,65.1,65.5));
    s+=pillA(270,560,'cifra oficial, por ahora',sg(t,65.6,65.85),{fill:K.ink,sz:14,w:800});
    s+=G(270,700,x4,0,Tn(0,0,'4',140,800,{fill:K.red}));}
  return s;}
/* 8 · base enorme: entrenan como en un campo de batalla real */
function s8(t){let s=groundLine(1);
  s+=G(270,GY,.9,0,NX.armored({},t-68.2));
  s+=pillA(270,300,'base de Wainwright',sg(t,68.4,68.65),{fill:'url(#gRP)',sz:16,w:800});
  s+=pillA(270,400,'como en un campo de batalla',sg(t,72.0,72.25),{sz:15,w:800});
  return s;}
/* 9 · fuego contenido, sin evacuaciones */
function s9(t){let s=groundLine(1);
  s+=G(270,GY,1,0,NX.firetruck({},t-74.6));
  s+=G(270,430,1,0,NX.stamp({type:'confirmado',text:'FUEGO CONTENIDO'},t-78.0));
  s+=pillA(270,560,'sin evacuar a los vecinos',sg(t,79.8,80.05),{sz:15,w:800});
  return s;}
/* 10 · banderas a media asta */
function s10(t){let s='';
  s+=G(270,640,1.05,0,NX.halfmast({at:0,label:'banderas a media asta'},t-81.6));
  return s;}
/* 11 · pregunta (sobria) */
function s11(t){let s=groundLine(1);
  s+=actor('pipa',{t0:84.5,path:[[84.5,110]],emo:[[84.5,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:84.6,path:[[84.6,430]],emo:[[84.6,1,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,87.7,88.4)));
  s+=G(0,0,1,0,Ts(270,352,'Incendio en la base',30),ao(t,87.8,.3))+G(0,0,1,0,Ts(270,398,'de Wainwright',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,87.9,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'CBC · EFE · CBS News · CNN · Global News',10.5,600)+Tn(270,474,'18/10/2026 · cifras provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,88.0,.3));
  s+=G(270,700,.6,0,NX.halfmast({at:0},t-88.0),ao(t,88.1,.3));
  s+=groundLine(1);
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:8.75,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:18.15,draw:s3,in:{type:'zoom',dur:.45,fx:270,fy:500,z:8}},
  {id:'4',a:24.1,draw:s4,in:{type:'whipU',dur:.32}},
  {id:'5',a:34.1,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:43.85,draw:s6,in:{type:'glitch',dur:.3}},
  {id:'7',a:53.4,draw:s7,in:{type:'whipD',dur:.32}},
  {id:'8',a:68.0,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:74.4,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:81.4,draw:s10,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'11',a:84.3,draw:s11,in:{type:'whipU',dur:.32}},
  {id:'END',a:87.6,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:3.0,y:170,lines:[{txt:'*4* militares',sz:50,t:[.05,.42]},{txt:'muertos',sz:34,t:[.99],gap:1.15}]},
 {t0:3.05,t1:7.2,y:170,lines:[{txt:'una de las bases',sz:30,t:[4.81,4.99,5.09,5.26]},{txt:'*más importantes*',sz:44,t:[6.42,6.65],gap:1.15}]},
 {t0:13.4,t1:18.0,y:200,lines:[{txt:'«una de las',sz:30,t:[13.43,13.62]},{txt:'peores *tragedias*»',sz:44,t:[13.91,14.31],gap:1.15}]},
 {t0:20.1,t1:23.9,y:160,lines:[{txt:'*Wainwright*',sz:54,t:[20.54]}]},
 {t0:44.0,t1:47.0,y:170,lines:[{txt:'¿qué lo',sz:30,t:[44.26,44.39]},{txt:'*provocó*?',sz:56,t:[44.50],gap:1.2}]},
 {t0:57.8,t1:61.2,y:170,lines:[{txt:'¿fuego *real*?',sz:50,t:[58.71,59.00]}]},
 {t0:68.3,t1:71.9,y:170,lines:[{txt:'una base',sz:30,t:[69.11,69.29]},{txt:'*enorme*',sz:58,t:[69.60],gap:1.2}]},
 {t0:84.6,t1:87.5,y:200,lines:[{txt:'¿habías oído hablar',sz:30,t:[84.58,85.10,85.39]},{txt:'de esta *base*?',sz:46,t:[85.69,85.81,86.03],gap:1.15}]}
];
