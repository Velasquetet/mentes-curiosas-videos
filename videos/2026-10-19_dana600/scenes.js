/* ===== NOTICIA (actualización) · Dana Adam: más de 600 l/m² en un día · 19/10/2026 ===== */
/* Hay dos víctimas mortales: tono sobrio, sin bromas ni caras graciosas. */
DUR=90.6;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function rainBg(t,a=1,n=26){let s='';for(let i=0;i<n;i++){const q=((t*1.4)+hs(i*1.9))%1,x=10+hs(i+5)*520,y=-40+q*1000;s+=P(`M${f1(x)} ${f1(y)} l-6 20`,ST('#7d8fb0',3,`opacity:${f2(.5*(1-q)*a)}`));}return s;}
const MAPX=270, MAPY=520;

/* 1 · la columna de lluvia ya está subiendo en el fotograma 0 → más de 600 l/m² */
function s1(t){let s=rainBg(t,1,30);
  const mm=lerp(380,640,EZ.out(sg(t,0,2.4)));
  s+=G(250,690,1.25,0,NX.raincolumn({mm,max:700,p:1},t+2));
  s+=G(270,330,1,0,Rc(-120,-40,240,80,'#fff',14,OL(2.4))+Tn(0,14,(mm>600?'+':'')+Math.round(Math.min(mm,600))+' l/m²',36,800,{fill:mm>599?K.red:K.ink}));
  s+=pillA(270,400,'en 24 horas',sg(t,2.6,2.85),{fill:K.ink,sz:15,w:800});
  s+=pillA(270,780,'sur de Valencia · norte de Alicante',sg(t,5.6,5.85),{fill:'url(#gRP)',sz:15,w:800});
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Dana Adam',y:0},t+.4));
  return s;}
/* 2 · hace unas horas: alerta roja → esta madrugada, más lluvia */
function s2(t){let s='';
  if(t<12.45){s+=G(270,530,1.05,0,NX.esalert({buzz:.5},t-8.1));
    s+=pillA(270,260,'hace unas horas',sg(t,8.3,8.55),{sz:16,w:800});}
  else{const dk=ao(t,12.45,.6);s+=Rc(0,0,540,960,'#2b3350',0,`opacity:${f2(.55*dk)}`)+rainBg(t,1.2,34);
    s+=G(270,560,2.0,0,NX.storm({},t-12.45));
    s+=G(130,330,.85,0,NX.clock({h:4,m:0,spin:.4},t-12.6),ao(t,12.6,.3));
    s+=pillA(330,330,'esta madrugada',sg(t,12.8,13.05),{fill:K.ink,sz:16,w:800});
    s+=pillA(270,720,'todavía más lluvia',sg(t,14.4,14.65),{fill:K.red,sz:16,w:800});}
  return s;}
/* 3 · Pego y Forna en el mapa → comparación con un año de lluvia (recurso nuevo yearrain) */
function s3(t){let s='';
  if(t<24.3){const z=1+0*EZ.io(sg(t,17.2,18.4)),pp=window.GEOJ.espt.Pego,fx=MAPX+(pp[0]-230)*430/460,fy=MAPY+(pp[1]-190)*430/460;
    s+=G(fx,fy,z,0,G(-fx,-fy,1,0,G(MAPX,MAPY,1,0,NX.spainalert({w:430,red:['Valencia','Alicante'],orange:['Balears'],pins:[['Pego',''],['Forna','']],at:.1},t-15.9))));
    s+=pillA(270,180,'estaciones de Avamet',sg(t,16.3,16.55),{sz:14,w:800});
    if(t>18.1)s+=G(270,255,1,0,Rc(-150,-44,300,88,'#fff',14,OL(2.4))+Tn(0,-12,'Pego',15,800)+Tn(0,26,'638 l/m²',30,800,{fill:K.red}),ao(t,18.1,.3)*dis(t,22.2));
    if(t>22.3)s+=G(270,255,1,0,Rc(-150,-44,300,88,'#fff',14,OL(2.4))+Tn(0,-12,'Forna',15,800)+Tn(0,26,'635 l/m²',30,800,{fill:K.red}),ao(t,22.3,.3));}
  else{s+=groundLine(1,700);
    s+=G(270,700,1,0,NX.yearrain({bars:[{lab:'1 día en Pego',v:638,c:'#e0283a',txt:'638 l/m²'},{lab:'1 año en Madrid',v:420},{lab:'1 año en Valencia',v:455}],max:700,H:330,gap:160,at:.2,step:2.0,line:0},t-24.3));
    s+=pillA(270,250,'más que en un año entero',sg(t,26.2,26.45),{fill:'url(#gRP)',sz:16,w:800});}
  return s;}
/* 4 · no es un punto aislado: ranking de estaciones */
function s4(t){let s=rainBg(t,.6,16);
  s+=G(300,380,1.05,0,NX.ranking({title:'24 horas · l/m²',items:[['Villalonga',559],['Barx',506],['Gandia',487],['Oliva',457]],unit:''},t-31.6));
  s+=pillA(270,700,'más de 450 litros',sg(t,35.0,35.25),{fill:K.red,sz:16,w:800});
  s+=pillA(270,750,'datos de Avamet · provisionales',sg(t,35.6,35.85),{sz:13,w:700});
  return s;}
/* 5 · situación 2 de emergencia en la Safor · la UME en Oliva */
function s5(t){let s='';
  s+=G(270,600,1.2,0,NX.flood({level:.55},t-36.8));
  if(t<41.8){s+=G(270,330,1.1,0,NX.stamp({type:'urgente',text:'SITUACIÓN 2'},t-38.6));
    s+=pillA(270,240,'Generalitat Valenciana',sg(t,37.2,37.45),{sz:15,w:800});
    s+=pillA(270,430,'inundaciones · la Safor',sg(t,40.3,40.55),{fill:'url(#gRP)',sz:15,w:800});}
  else{s+=pillA(270,280,'Unidad Militar de Emergencias',sg(t,42.2,42.45),{fill:K.ink,sz:16,w:800});
    s+=pillA(270,330,'desplegada en Oliva',sg(t,44.3,44.55),{fill:K.red,sz:16,w:800});
    s+=G(270,770,.9,0,NX.sandbags({},t-42.6),ao(t,42.6,.3));}
  return s;}
/* 6 · dos víctimas mortales (sobrio) */
function s6(t){let s='';
  s+=G(MAPX,MAPY,1,0,NX.spainalert({w:430,red:['Valencia','Alicante'],pins:[['Cabrera de Mar','Cabrera de Mar'],['Sagunto','Sagunto']],lx:-40,at:0},t-46.4+3.0));
  s+=pillA(270,245,'dos víctimas mortales',sg(t,47.1,47.35),{fill:K.ink,sz:17,w:800});
  s+=pillA(270,770,'arrastrada por una riera',sg(t,49.1,49.35)*dis(t,52.3),{sz:14,w:800});
  if(t>52.4)s+=pillA(270,770,'desaparecida en el mar · hallada sin vida',sg(t,53.1,53.35),{sz:14,w:800});
  return s;}
/* 7 · sin clases hoy */
function s7(t){let s='';
  s+=G(270,330,1,0,NX.keyPoints({title:'Hoy, sin clases',items:['Mallorca','Ibiza y Formentera','Decenas de municipios de Valencia y Alicante'],step:1.2,w:440},t-56.9));
  s+=G(270,720,1.1,0,NX.storm({},t-56.3));
  return s;}
/* 8 · qué piden las autoridades */
function s8(t){let s=groundLine(1);
  s+=G(270,330,1,0,NX.keyPoints({title:'Qué piden',items:['No salir de casa (Safor y Marina Alta)','Lejos de ríos y barrancos','Nada de garajes ni sótanos'],step:2.4,w:450},t-63.0));
  s+=actor('lenteja',{t0:62.6,path:[[62.6,270]],emo:[[62.6,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* 9 · hoy pierde fuerza y se va hacia Cataluña · cifras provisionales */
function s9(t){let s='';
  const toCat=sg(t,74.6,75.8);
  s+=G(MAPX,MAPY,1,0,NX.spainalert({w:430,red:['Valencia','Alicante'],orange:toCat>0?['Barcelona','Tarragona','Girona','Lleida','Balears']:['Balears'],at:0,
    over:(pt,lt)=>{const a=pt.Valencia,b=pt.Barcelona;return DR(`M${a[0]+10} ${a[1]-10} Q${a[0]+40} ${(a[1]+b[1])/2} ${b[0]-6} ${b[1]+14}`,ST(K.ink,5,'stroke-dasharray:10 7'),EZ.io(toCat))+G(b[0]-6,b[1]+14,1,-60,P('M-12 -10 L6 0 L-12 10Z','fill:'+K.ink),toCat>.9?1:0);}},t-70.6+3));
  s+=pillA(270,195,'hoy pierde fuerza en Valencia y Baleares',sg(t,72.4,72.65),{sz:14,w:800});
  s+=pillA(270,240,'chubascos fuertes en Cataluña',sg(t,76.4,76.65),{fill:K.orange,sz:14,w:800});
  if(t>78.0)s+=G(270,292,1,0,NX.stamp({type:'desarrollo',text:'CIFRAS PROVISIONALES',sz:15},t-78.2));
  return s;}
/* 10 · pregunta (sobria) */
function s10(t){let s=groundLine(1);
  s+=G(270,470,.6,0,NX.esalert({buzz:.4},t-80.6));
  s+=actor('pipa',{t0:80.5,path:[[80.5,110]],emo:[[80.5,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:80.6,path:[[80.6,430]],emo:[[80.6,1,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,612,'sigue las indicaciones de Protección Civil',sg(t,85.4,85.65),{fill:K.ink,sz:13,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,87.8,88.5)));
  s+=G(0,0,1,0,Ts(270,352,'Dana Adam:',30),ao(t,87.9,.3))+G(0,0,1,0,Ts(270,398,'más de 600 litros',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,88.0,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Euronews · EFE (elDiario.es) · El Debate · Infobae · Telecinco · Avamet · Aemet',9.5,600)+Tn(270,474,'19/10/2026 · datos provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,88.1,.3));
  s+=G(270,700,.5,0,NX.yearrain({bars:[{lab:'1 día',v:638,c:'#e0283a'},{lab:'1 año',v:430}],max:700,H:260,gap:140,at:0,step:.2},t-88.0),ao(t,88.1,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:7.95,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:15.8,draw:s3,in:{type:'zoom',dur:.45,fx:270,fy:500,z:8}},
  {id:'4',a:29.8,draw:s4,in:{type:'whipU',dur:.32}},
  {id:'5',a:36.75,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:45.5,draw:s6,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'7',a:56.2,draw:s7,in:{type:'whipD',dur:.32}},
  {id:'8',a:62.3,draw:s8,in:{type:'whipU',dur:.32}},
  {id:'9',a:70.5,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'10',a:80.35,draw:s10,in:{type:'whipU',dur:.32}},
  {id:'END',a:87.6,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:3.75,y:180,lines:[{txt:'*600* litros',sz:54,t:[.05,1.15]},{txt:'en un solo día',sz:30,t:[2.51,2.62,2.76,3.02],gap:1.15}]},
 {t0:30.0,t1:31.5,y:200,lines:[{txt:'no es un punto',sz:34,t:[30.2,30.39,30.54,30.66]},{txt:'*aislado*',sz:50,t:[30.99],gap:1.15}]},
 {t0:80.6,t1:87.4,y:200,lines:[{txt:'¿estás en',sz:32,t:[80.59,81.05]},{txt:'la *zona*?',sz:50,t:[81.6,81.91],gap:1.15}]}
];
