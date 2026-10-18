/* ===== NOTICIA · Dana Adam: alerta roja en Valencia, Alicante y Baleares · 18/10/2026 ===== */
/* Hay una víctima mortal: tono sobrio, sin bromas ni caras graciosas. */
DUR=89.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function rainBg(t,a=1,n=26){let s='';for(let i=0;i<n;i++){const q=((t*1.4)+hs(i*1.9))%1,x=10+hs(i+5)*520,y=-40+q*1000;s+=P(`M${f1(x)} ${f1(y)} l-6 20`,ST('#7d8fb0',3,`opacity:${f2(.5*(1-q)*a)}`));}return s;}
const MAPK=430/460, MAPX=270, MAPY=520;
/* punto del mapa de España (GEOJ.espt) → pantalla, para el mapa colocado en (MAPX,MAPY) */
const mpt=k=>{const p=window.GEOJ.espt[k];return [MAPX+(p[0]-230)*MAPK,MAPY+(p[1]-190)*MAPK];};

/* 1 · el móvil suena: ALERTA ROJA (impacto desde el fotograma 0) */
function s1(t){let s=rainBg(t,1);
  /* móviles alrededor a partir de «muchos móviles» */
  [[72,400,-12,4.6],[468,420,10,4.8],[70,660,8,5.0],[470,680,-9,5.15]].forEach(([x,y,r,a])=>{
    s+=G(x,y,.42,r,NX.esalert({},t-a));});
  s+=G(270,540,1.25,0,NX.esalert({},t+1.5));
  s+=pillA(270,246,'Valencia · Alicante · Baleares',sg(t,2.3,2.55),{fill:K.red,sz:16,w:800});
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'España',y:0},t+.4));
  return s;}
/* 2 · nivel máximo de la Aemet → 300 litros por m² (y hasta 400) */
function s2(t){let s='';
  if(t<11.95){s+=G(300,520,1.1,0,NX.alertlevels({level:3,at:.1,dur:1.1},t-9.8));
    s+=pillA(270,250,'el nivel máximo de la Aemet',sg(t,10.4,10.65),{sz:15,w:800});}
  else{const mm=lerp(300,400,EZ.io(sg(t,18.5,19.4)));
    s+=G(250,700,1.15,0,NX.raincolumn({mm,max:400},t-11.75));
    s+=pillA(270,350,'en menos de 24 horas',sg(t,15.7,15.95),{sz:15,w:800});
    s+=pillA(270,300,mm>301?'en algunos puntos: 400 l/m²':'más de 300 l/m²',sg(t,13.7,13.95),{fill:mm>301?K.red:K.ink,sz:16,w:800});}
  return s;}
/* 3 · como la lluvia de varios meses en unas horas */
function s3(t){let s=rainBg(t,1,20)+groundLine(1);
  s+=G(150,GY,1.1,0,NX.raingauge({p:1,label:'unas horas',over:sg(t,24.0,24.4)},t-20.15));
  s+=G(270,520,1,0,Ts(0,0,'=',60),ao(t,23.6,.3));
  [0,1,2].forEach(i=>{s+=G(370+i*30,580-i*30,.85,(i-1)*6,calS(String(i+1),'MES',{w:110,h:120,sz:48}),ap(t,24.2+i*.25,.3));});
  s+=pillA(400,680,'la lluvia de varios meses',sg(t,24.7,24.95),{fill:'url(#gRP)',sz:14,w:800});
  return s;}
/* 4 · dónde: mapa de avisos · la Safor, más de 200 litros */
function s4(t){let s='';
  s+=G(MAPX,MAPY,1,0,NX.spainalert({w:430,red:['Valencia','Alicante','Balears'],orange:['Murcia','Almería'],pins:[['Gandia','la Safor']],lx:-60,at:.2},t-26.0));
  s+=pillA(270,250,'avisos de este domingo',sg(t,26.3,26.55)*dis(t,28.9),{sz:15,w:800});
  if(t>29.0){s+=G(270,232,1,0,Rc(-150,-44,300,88,'#fff',14,OL(2.4))+Tn(0,-12,'Rafelcofer · Real de Gandia',14,800)+Tn(0,26,'+200 l/m²',30,800,{fill:K.red}),ao(t,29.2,.3));}
  return s;}
/* 5 · trenes cortados y aeropuerto de Ibiza parado */
function s5(t){let s='';
  if(t<40.6){s+=G(270,560,1,0,NX.metro({},Math.min(t-33.6,1.6)));
    s+=G(270,420,1,0,NX.stamp({type:'urgente',text:'SUSPENDIDO'},t-34.4));
    s+=pillA(270,250,'Cercanías · Adif',sg(t,34.0,34.25),{sz:16,w:800});
    s+=pillA(270,300,'C1 · Valencia – Gandia',sg(t,36.1,36.35),{fill:K.red,sz:15,w:800});
    s+=pillA(270,345,'C2 · Valencia – Moixent',sg(t,37.8,38.05),{fill:K.red,sz:15,w:800});
    s+=pillA(270,735,'hasta nuevo aviso',sg(t,39.3,39.55),{sz:14,w:800});}
  else{s+=rainBg(t,.8,16);
    s+=G(270,470,1.15,0,NX.vehicle({type:'plane',dur:6.5},t-40.6+1.6));
    s+=pillA(270,300,'aeropuerto de Ibiza',sg(t,41.0,41.25),{fill:'url(#gRP)',sz:16,w:800});
    s+=G(150,660,.9,0,NX.clock({h:10,m:0,spin:.25},t-42.5),ao(t,42.5,.3));
    s+=pillA(150,750,'2 horas parado',sg(t,42.9,43.15),{sz:14,w:800});
    s+=pillA(390,640,'cancelados',sg(t,44.1,44.35),{fill:K.red,sz:15,w:800});
    s+=pillA(390,690,'desviados',sg(t,44.85,45.1),{fill:K.orange,sz:15,w:800});}
  return s;}
/* 6 · sin clases el lunes · la UME rumbo a las islas */
function s6(t){let s='';
  if(t<53.0){s+=G(270,340,1,0,NX.keyPoints({title:'Sin clases el lunes',items:['Mallorca','Ibiza y Formentera','Gandia y otros municipios'],step:1.9,w:380},t-46.6));
    s+=G(270,720,1.1,0,NX.storm({},t-46.0));}
  else{s+=G(270,560,1.1,0,NX.vehicle({type:'ship',dur:5.2},t-53.0+1.4));
    s+=G(270,620,1,0,Rc(-300,0,600,400,'url(#gWA)'));
    s+=pillA(270,330,'Unidad Militar de Emergencias',sg(t,53.5,53.75),{fill:K.ink,sz:15,w:800});
    s+=pillA(270,380,'rumbo a Mallorca e Ibiza',sg(t,55.2,55.45),{fill:'url(#gRP)',sz:15,w:800});}
  return s;}
/* 7 · una víctima mortal (sobrio) */
function s7(t){let s='';
  s+=G(MAPX,MAPY,1,0,NX.spainalert({w:430,red:['Valencia','Alicante','Balears'],pins:[['Cabrera de Mar','Cabrera de Mar']],lx:-40,at:0},t-57.0));
  s+=pillA(270,245,'una víctima mortal',sg(t,59.3,59.55),{fill:K.ink,sz:17,w:800});
  s+=pillA(270,290,'arrastrada por el agua de una riera',sg(t,60.6,60.85),{sz:14,w:800});
  return s;}
/* 8 · qué piden las autoridades */
function s8(t){let s=groundLine(1);
  s+=G(270,340,1,0,NX.keyPoints({items:['No cruces barrancos ni zonas inundadas','No bajes a garajes ni sótanos','Sube a plantas altas','Evita desplazarte'],step:2.4,w:440},t-66.3));
  s+=actor('lenteja',{t0:64.7,path:[[64.7,270]],emo:[[64.7,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* 9 · el aviso sigue hasta el lunes; luego hacia Cataluña */
function s9(t){let s='';
  const toCat=sg(t,79.4,80.6);
  s+=G(MAPX,MAPY,1,0,NX.spainalert({w:430,red:['Valencia','Alicante'],orange:['Balears','Murcia','Almería'],yellow:toCat>0?['Barcelona','Tarragona','Girona','Lleida']:[],at:0,
    over:(pt,lt)=>{const a=pt.Valencia,b=pt.Barcelona;return DR(`M${a[0]+10} ${a[1]-10} Q${a[0]+40} ${(a[1]+b[1])/2} ${b[0]-6} ${b[1]+14}`,ST(K.ink,5,'stroke-dasharray:10 7'),EZ.io(toCat))+G(b[0]-6,b[1]+14,1,-60,P('M-12 -10 L6 0 L-12 10Z','fill:'+K.ink),toCat>.9?1:0);}},t-75.6));
  s+=pillA(270,250,'aviso rojo hasta el lunes por la mañana',sg(t,76.2,76.45),{fill:K.red,sz:14,w:800});
  s+=pillA(270,292,'después, hacia Cataluña',sg(t,80.2,80.45),{sz:15,w:800});
  return s;}
/* 10 · pregunta (sobria) */
function s10(t){let s=groundLine(1);
  s+=G(270,470,.6,0,NX.esalert({buzz:.6},t-82.3));
  s+=actor('pipa',{t0:82.3,path:[[82.3,110]],emo:[[82.3,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:82.4,path:[[82.4,430]],emo:[[82.4,1,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,86.5,87.2)));
  s+=G(0,0,1,0,Ts(270,352,'Alerta roja por',30),ao(t,86.6,.3))+G(0,0,1,0,Ts(270,398,'la dana Adam',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,86.7,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Aemet · EFE · Infobae · El Debate · Vozpópuli · Telecinco',10,600)+Tn(270,474,'18/10/2026 · datos provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,86.8,.3));
  s+=G(270,640,.55,0,NX.alertlevels({level:3,at:0,dur:.6},t-86.8),ao(t,86.9,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:9.7,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:19.95,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:25.9,draw:s4,in:{type:'zoom',dur:.45,fx:270,fy:500,z:8}},
  {id:'5',a:33.6,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:45.8,draw:s6,in:{type:'whipD',dur:.32}},
  {id:'7',a:56.8,draw:s7,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'8',a:64.45,draw:s8,in:{type:'whipU',dur:.32}},
  {id:'9',a:75.5,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'10',a:82.15,draw:s10,in:{type:'whipU',dur:.32}},
  {id:'END',a:86.35,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:4.4,y:180,lines:[{txt:'*Alerta* roja',sz:54,t:[.05,.54]},{txt:'por la dana Adam',sz:30,t:[.88,1.06,1.16,1.43],gap:1.15}]},
 {t0:12.0,t1:16.9,y:180,lines:[{txt:'*300* litros',sz:52,t:[13.71,14.34]},{txt:'por metro cuadrado',sz:28,t:[14.72,14.90,15.21],gap:1.15}]},
 {t0:20.1,t1:25.8,y:190,lines:[{txt:'en unas',sz:30,t:[22.51,22.64]},{txt:'*pocas horas*',sz:50,t:[22.90,23.26],gap:1.15}]},
 {t0:64.6,t1:66.2,y:200,lines:[{txt:'¿qué *hacer*?',sz:52,t:[64.60,64.80]}]},
 {t0:82.35,t1:86.2,y:200,lines:[{txt:'¿te ha llegado',sz:32,t:[82.34,82.55,82.61]},{txt:'la *alerta*?',sz:50,t:[82.99,83.11],gap:1.15}]}
];
