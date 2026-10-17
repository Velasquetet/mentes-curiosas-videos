/* ===== NOTICIA · El Papa León XIV recibe el alta tras su operación de pulmón (Gemelli, Roma, 17/10/2026) ===== */
/* Tono: neutral y respetuoso (noticia de salud). Sin bromas ni caras graciosas. */
DUR=100.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const POPE=(T,x={})=>figure(famoso('leon14',Object.assign({T,name:undefined},x)));
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* casilla de lista que se marca */
function checkRow(x,y,txt,q){if(q<=0)return '';const k=EZ.out(cl(q*2));return G(x,y,EZ.back(cl(q)),0,Rc(-150,-22,300,44,'#fff',22,OL(2))+Ci(-124,0,13,k>.5?K.green:'#e6e6e6',OL(1.6))+(k>.5?P('M-131 0 l5 6 l10 -12',ST('#fff',3)):'')+Tn(-100,5,txt,15,700,{a:'start'}));}

/* ---------- 1 · gancho: el Papa sale del hospital ---------- */
function s1(t){let s=raysBg(270,470,t*8,22,'#d3d3d3',ao(t,.1,.4))+groundLine(1);
  s+=G(270,GY-82,.95,0,NX.hospital({name:'POLICLÍNICO GEMELLI',door:.5},t));
  const wx=lerp(270,120,EZ.io(sg(t,1.0,2.3)));
  if(t>.9)s+=G(wx,GY+4,.85,0,POPE(t,{walk:t<2.3,emo:'happy'}),ao(t,.9,.2));
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',y:0},t),1);
  return s;}
/* ---------- 2 · solo cuatro días ---------- */
function s2(t){let s=groundLine(1);
  s+=G(270,440,1.15,0,NX.calendar({from:13,to:17,month:'OCT',dur:1.2},t-2.45));
  s+=pillA(270,590,'4 días después de la operación',sg(t,3.3,3.55),{fill:'url(#gRP)',sz:16,w:800});
  s+=actor('lenteja',{t0:2.5,path:[[2.5,460]],emo:[[2.5,1,0]],s:.55,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 3 · León XIV, 71 años ---------- */
function s3(t){let s=G(270,480,1,0,NX.spot({who:'leon14'},t-6.9));
  s+=pillA(270,592,'71 años',sg(t,9.15,9.4),{sz:16,w:800});
  return s;}
/* ---------- 4 · del Gemelli al Vaticano ---------- */
function s4(t){let s='';
  s+=G(270,480,1,0,NX.map({focus:'Italia',zoom:5,zoomAt:.1,pins:[[12.48,41.90,'Roma']],highlight:['Italia'],w:480,h:430},t-10.35));
  s+=pillA(270,232,'Policlínico Gemelli',sg(t,10.9,11.15)*dis(t,12.6),{sz:15,w:800});
  s+=pillA(270,232,'→ Vaticano',sg(t,12.75,13.0),{fill:'url(#gRP)',sz:17,w:800});
  return s;}
/* ---------- 5 · antes de lo previsto ---------- */
function s5(t){let s=groundLine(1);
  const bw=(d,q)=>d*46*q;
  const q1=EZ.out(sg(t,15.9,16.7)),q2=EZ.out(sg(t,14.3,14.9));
  s+=G(0,0,1,0,Tn(80,405,'previsto',15,700,{a:'start'}),ao(t,15.8,.25));
  s+=Rc(80,420,bw(7,q1),40,'#9aa0b4',10,OL(2))+(q1>.9?Tn(80+bw(7,1)-12,447,'~7 días',15,800,{a:'end',fill:'#fff'}):'');
  s+=G(0,0,1,0,Tn(80,505,'real',15,700,{a:'start'}),ao(t,14.2,.25));
  s+=Rc(80,520,bw(4,q2),40,'url(#gRP)',10,OL(2))+(q2>.9?Tn(80+bw(4,1)-12,547,'4 días',15,800,{a:'end',fill:'#fff'}):'');
  s+=stampA(270,320,t-14.6,'ANTES DE LO PREVISTO',{r:-5,sz:20,c:K.green});
  s+=actor('grano',{t0:14.1,path:[[14.1,440]],emo:[[14.1,1,0]],s:.55,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 6 · ¿qué le ha pasado? ---------- */
function s6(t){let s=qDeco(t,ao(t,18.4,.4),3,6)+groundLine(1);
  s+=actor('lenteja',{t0:18.4,path:[[18.4,270]],emo:[[18.4,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 7 · domingo 11: un nódulo ---------- */
function s7(t){let s=groundLine(1);
  if(t<23.7){s+=G(150,430,.9,0,NX.calendar({from:11,to:11,month:'OCT'},t-19.8));
    s+=pillA(150,540,'domingo',sg(t,20.1,20.35),{sz:14,w:800});
    s+=G(370,GY,.85,0,POPE(t-19.8,{emo:'neutral'}),ap(t,21.6,.35));
    s+=pillA(370,500,'lo contó él mismo',sg(t,22.2,22.45),{fill:'url(#gRP)',sz:13,w:800});}
  else{s+=G(270,470,1,0,NX.lungs({},t-23.75));
    const p=ap(t,24.0,.35);if(p>0)s+=G(180,540,p*(1+.12*Math.sin(t*7)),0,Ci(0,0,16,'#f6a81a',OL(2))+Ci(0,0,30,'none','stroke:#f6a81a;stroke-width:2;opacity:.6'),1);
    s+=pillA(160,690,'fase muy inicial',sg(t,25.6,25.85),{sz:14,w:800});
    s+=pillA(380,690,'bien localizado',sg(t,26.8,27.05),{fill:'url(#gRP)',sz:14,w:800});}
  return s;}
/* ---------- 8 · el martes le operaron ---------- */
function s8(t){let s=groundLine(1);
  s+=G(270,350,1.05,0,NX.calendar({from:13,to:13,month:'OCT'},t-28.1));
  s+=pillA(270,465,'martes',sg(t,28.35,28.6),{fill:'url(#gRP)',sz:16,w:800});
  s+=G(270,GY-60,.55,0,NX.medical({},t-28.8));
  return s;}
/* ---------- 9 · lóbulo inferior del pulmón derecho ---------- */
function s9(t){let s=groundLine(1);
  s+=G(270,470,1,0,NX.lungs({hl:'RL',hlAt:1.6},t-29.85));
  s+=pillA(270,215,'lóbulo inferior',sg(t,31.5,31.75),{fill:'url(#gRP)',sz:16,w:800});
  s+=pillA(330,680,'pulmón derecho',sg(t,32.5,32.75),{sz:15,w:800});
  if(t>32.5){const q=ao(t,32.6,.4);s+=P('M280 668 Q200 650 180 590',ST(K.ink,2,'stroke-dasharray:5 5'),q);}
  return s;}
/* ---------- 10 · los pulmones tienen cinco lóbulos ---------- */
function s10(t){let s=groundLine(1);
  s+=G(270,470,1,0,NX.lungs({count:true,countAt:2.6,hl:'RL',hlAt:6.0,remove:true,removeAt:6.8,labels:true},t-33.8));
  if(t>40.5){s+=G(0,0,1,0,Rc(170,662,200,60,'#141212',14)+Tn(270,703,'1 de 5',32,800,{fill:'#fff'}),ap(t,41.3,.3));}
  s+=actor('lenteja',{t0:33.9,path:[[33.9,470]],emo:[[33.9,2,0],[36.5,16,0]],s:.5,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 11 · con una cámara, pequeñas incisiones ---------- */
function camS(t){return Rc(-70,-40,110,80,'#2a2f45',14,OL(2.4))+Ci(-15,0,26,'#141212',OL(2))+Ci(-15,0,14,'#4a7bd7')+Ci(-20,-5,4,'#fff')+Rc(40,-10,150,20,'#9aa0a8',6,OL(2))+Ci(190,0,6,'#f6c443')+Ci(-50,-28,5,hs(Math.floor(t*3))<.5?K.red:'#5a2020');}
function s11(t){let s=groundLine(1);
  s+=G(220,360,1,-8,camS(t),ap(t,42.55,.35));
  s+=pillA(270,250,'una cámara',sg(t,43.45,43.7),{fill:'url(#gRP)',sz:16,w:800});
  s+=G(0,0,1,0,Rc(140,470,260,110,'#f3d2b8',40,OL(2.4))+P('M270 480 L270 570',ST('rgba(20,18,18,.15)',2)),ao(t,44.4,.3));
  for(let i=0;i<3;i++){const q=ao(t,44.8+i*.25,.25);if(q>0)s+=G(190+i*80,525,1,0,P(`M${f1(-22*q)} 0 L${f1(22*q)} 0`,ST(K.red,5)));}
  s+=pillA(270,640,'pequeñas incisiones',sg(t,45.2,45.45),{sz:15,w:800});
  s+=pillA(270,690,'sin una gran herida',sg(t,46.4,46.65),{sz:14,w:800});
  return s;}
/* ---------- 12 · 90 minutos, sin complicaciones ---------- */
function s12(t){let s=groundLine(1);
  s+=G(270,420,1,0,NX.counter({value:90,sz:120,dur:.9},t-48.75));
  s+=pillA(270,520,'minutos de operación',sg(t,49.3,49.55),{fill:'url(#gRP)',sz:16,w:800});
  s+=stampA(270,640,t-50.3,'SIN COMPLICACIONES',{r:-5,sz:22,c:K.green});
  return s;}
/* ---------- 13 · el análisis: adenocarcinoma ---------- */
function s13(t){let s=groundLine(1);
  if(t<55.8){s+=G(150,GY-70,.7,0,NX.microscope({},t-51.7));
    s+=pillA(370,380,'lo que se sospechaba',sg(t,53.3,53.55),{sz:14,w:800});
    s+=pillA(370,450,'adenocarcinoma',sg(t,54.3,54.55),{fill:'url(#gRP)',sz:20,w:800});
    s+=pillA(370,500,'de pulmón',sg(t,55.1,55.35),{sz:14,w:800});}
  else{if(t<59.4)s+=G(270,480,.7,0,NX.lungs({},t-55.85),dis(t,59.0,.3));
    s+=pillA(270,260,'uno de los tipos más frecuentes',sg(t,55.9,56.15),{fill:'url(#gRP)',sz:15,w:800});
    s+=G(170,GY,1,0,blobS({T:t,ph:3,c:'#8005f0',emo:'neutral',s:1.2}),ap(t,59.9,.35));
    s+=G(370,GY,1,0,blobS({T:t,ph:7,c:'#2a37d7',emo:'neutral',s:1.2}),ap(t,60.8,.35));
    s+=pillA(170,600,'fumadores',sg(t,60.1,60.35),{sz:14,w:800});
    s+=pillA(370,600,'no fumadores',sg(t,61.1,61.35),{sz:14,w:800});
    s+=stampA(270,420,t-59.2,'PUEDE APARECER EN AMBOS',{r:-4,sz:17,c:K.blue});}
  return s;}
/* ---------- 14 · estos días ---------- */
function s14(t){let s=groundLine(1);
  s+=G(95,GY,.75,0,POPE(t,{walk:t<64,emo:'happy'}));
  s+=checkRow(330,330,'caminaba',sg(t,63.2,63.6));
  s+=checkRow(330,390,'comía con normalidad',sg(t,64.0,64.4));
  s+=checkRow(330,450,'fisioterapia respiratoria',sg(t,65.9,66.3));
  s+=checkRow(330,510,'celebraba misa',sg(t,67.6,68.0));
  return s;}
/* ---------- 15 · análisis, radiografía, alta ---------- */
function xrayS(){return Rc(-80,-100,160,200,'#141a24',10,OL(2.4))+P('M-10 -70 L-10 60 M10 -70 L10 60',ST('#cfd8e6',4))+P('M-14 -60 Q-70 -50 -62 40 Q-40 70 -14 50Z M14 -60 Q70 -50 62 40 Q40 70 14 50Z','fill:rgba(207,216,230,.35);stroke:#cfd8e6;stroke-width:2')+[0,1,2,3].map(i=>P(`M-12 ${-40+i*24} Q-50 ${-34+i*24} -58 ${-20+i*24} M12 ${-40+i*24} Q50 ${-34+i*24} 58 ${-20+i*24}`,ST('#cfd8e6',2))).join('');}
function s15(t){let s=groundLine(1);
  s+=pillA(270,250,'esta mañana',sg(t,69.7,69.95)*dis(t,73.6),{sz:15,w:800});
  s+=G(150,430,1,0,P('M0 -60 Q40 -10 40 20 A40 40 0 0 1 -40 20 Q-40 -10 0 -60Z','fill:#e2264a;'+OL(2.4))+P('M-16 10 A18 18 0 0 0 0 34',ST('#fff',4)),ap(t,70.0,.35));
  s+=pillA(150,520,'análisis de sangre',sg(t,70.9,71.15),{sz:13,w:800});
  s+=G(390,420,1,0,xrayS(),ap(t,71.6,.35));
  s+=pillA(390,550,'radiografía de tórax',sg(t,72.6,72.85),{sz:13,w:800});
  s+=stampA(270,640,t-74.9,'ALTA MÉDICA',{r:-5,sz:28,c:K.green});
  return s;}
/* ---------- 16 · ¿y ahora qué? ---------- */
function s16(t){let s=qDeco(t,ao(t,75.8,.4),9,6)+groundLine(1);
  s+=actor('garbanzo',{t0:75.8,path:[[75.8,270]],emo:[[75.8,9,0]],s:.95,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* ---------- 17 · el Ángelus desde la ventana ---------- */
function s17(t){let s='';const q=ao(t,77.1,.4);
  s+=Rc(60,240,420,330,'#e9dcc3',4,OL(2.6))+Rc(40,226,460,22,'#d8c7a6',3,OL(2));
  for(let r=0;r<2;r++)for(let c=0;c<5;c++){const x=90+c*78,y=280+r*130;if(r===0&&c===2)continue;s+=Rc(x,y,50,84,'#6f5a3e',24,OL(1.6));}
  s+=Rc(236,272,68,100,'#f4ead2',30,OL(2))+Rc(226,366,88,10,'#b49a72',2,OL(1.6))+P('M236 372 L304 372 L304 392 L236 392Z','fill:#e2264a;'+OL(1.4));
  s+=G(270,400,.42,0,POPE(t,{emo:'happy'}),ap(t,79.5,.4));
  s+=G(270,GY+30,1,0,blobCrowd({n:9,rows:2,w:500,T:t,seed:4}),q);
  s+=groundLine(1);
  s+=pillA(270,180,'domingo · Ángelus',sg(t,77.4,77.65),{fill:'url(#gRP)',sz:16,w:800});
  s+=pillA(270,620,'desde la ventana de su estudio',sg(t,79.9,80.15),{sz:13,w:800});
  return s;}
/* ---------- 18 · audiencias suspendidas hasta el 20 ---------- */
function s18(t){let s=groundLine(1);
  s+=G(270,420,1.1,0,NX.calendar({from:20,to:20,month:'OCT'},t-81.6));
  s+=pillA(270,560,'audiencias suspendidas hasta el',sg(t,82.0,82.25),{sz:14,w:800});
  s+=stampA(270,280,t-83.0,'SUSPENDIDAS',{r:-5,sz:22,c:K.red});
  return s;}
/* ---------- 19 · viaje a Uruguay, Argentina y Perú ---------- */
function s19(t){let s='';
  s+=G(270,500,1,0,NX.map({center:[-64,-22],zoom:2.6,zoomAt:.1,highlight:['Uruguay','Argentina','Perú'],pins:[[-56.0,-32.6,'Uruguay'],[-65.0,-35.0,'Argentina'],[-75.0,-10.0,'Perú']],w:480,h:470},t-85.2));
  s+=pillA(270,230,'viaje en noviembre',sg(t,88.9,89.15),{fill:'url(#gRP)',sz:16,w:800});
  s+=stampA(270,690,t-85.8,'SE MANTIENE',{r:-4,sz:20,c:K.green});
  return s;}
/* ---------- 20 · ¿más tratamiento? sin confirmar ---------- */
function s20(t){let s=qDeco(t,ao(t,90.0,.4),5,5)+groundLine(1);
  s+=G(270,430,.9,0,NX.bigq({},t-90.05));
  s+=pillA(270,620,'¿más tratamiento?',sg(t,91.4,91.65),{fill:'url(#gRP)',sz:16,w:800});
  s+=pillA(270,670,'el Vaticano no lo ha dicho',sg(t,92.0,92.25),{sz:13,w:800});
  return s;}
/* ---------- 21 · pregunta ---------- */
function s21(t){let s='';
  s+=G(270,365,.58,0,NX.lungs({count:true,countAt:.6},t-93.5));
  const opts=[['A','Sí, cinco'],['B','Creía que dos'],['C','Ni idea']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,94.9+i*.12,.3),sel=i===0?EZ.out(sg(t,95.9,96.1)):0;if(q>0)s+=G(270,500+i*50,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  const cq=ap(t,96.5,.3);if(cq>0){const typed='¡No lo sabía!'.slice(0,Math.floor(13*sg(t,96.6,97.3)));s+=G(270,660,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:93.5,path:[[93.5,70]],emo:[[93.5,1,0]],s:.6,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:93.6,path:[[93.6,470]],emo:[[93.6,1,0]],s:.6,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,98.1,98.8)));
  s+=G(0,0,1,0,Ts(270,352,'El Papa',30),ao(t,98.2,.3))+G(0,0,1,0,Ts(270,398,'recibe el alta',40,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,98.3,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Vatican News · EFE · CNN · NBC News · NPR',10,600)+Tn(270,474,'Oficina de Prensa de la Santa Sede · 17/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,98.4,.3));
  s+=G(270,GY,.5,0,POPE(t,{emo:'happy'}),ao(t,98.5,.3));
  s+=groundLine(1);
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:2.35,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:6.8,draw:s3,in:{type:'iris',dur:.4,fx:270,fy:480,r0:10}},
  {id:'4',a:10.25,draw:s4,in:{type:'whipU',dur:.32}},
  {id:'5',a:13.95,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:18.3,draw:s6,in:{type:'whipD',dur:.32}},
  {id:'7',a:19.65,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:28.0,draw:s8,in:{type:'whipU',dur:.32}},
  {id:'9',a:29.75,draw:s9,in:{type:'zoom',dur:.45,fx:270,fy:430,z:8}},
  {id:'10',a:33.7,draw:s10,in:{type:'whipL',dur:.32}},
  {id:'11',a:42.4,draw:s11,in:{type:'whipD',dur:.32}},
  {id:'12',a:47.4,draw:s12,in:{type:'whipU',dur:.32}},
  {id:'13',a:51.55,draw:s13,in:{type:'iris',dur:.4,fx:270,fy:430,r0:10}},
  {id:'14',a:62.25,draw:s14,in:{type:'whipL',dur:.32}},
  {id:'15',a:69.45,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'16',a:75.7,draw:s16,in:{type:'whipD',dur:.32}},
  {id:'17',a:76.95,draw:s17,in:{type:'iris',dur:.4,fx:270,fy:330,r0:10}},
  {id:'18',a:81.5,draw:s18,in:{type:'whipL',dur:.32}},
  {id:'19',a:85.1,draw:s19,in:{type:'whipU',dur:.32}},
  {id:'20',a:89.9,draw:s20,in:{type:'whipD',dur:.32}},
  {id:'21',a:93.35,draw:s21,in:{type:'whipL',dur:.32}},
  {id:'END',a:97.9,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:2.3,y:170,lines:[{txt:'el Papa ya ha',sz:32,t:[.05,.33,.62,.79]},{txt:'salido del *hospital*',sz:42,t:[.85,1.26,1.41],gap:1.15}]},
 {t0:2.4,t1:6.8,y:170,lines:[{txt:'solo *cuatro días*',sz:46,t:[2.40,2.77,3.11]},{txt:'después',sz:30,t:[3.44],gap:1.15}]},
 {t0:10.4,t1:12.4,y:160,lines:[{txt:'dejó el *Gemelli*',sz:44,t:[10.40,10.72,11.50]}]},
 {t0:14.01,t1:15.7,y:170,lines:[{txt:'salió *antes*',sz:48,t:[14.19,14.53]}]},
 {t0:18.38,t1:19.65,lines:[{txt:'¿qué le ha',sz:34,t:[18.38,18.59,18.71]},{txt:'*pasado*?',sz:54,t:[18.77]}]},
 {t0:23.84,t1:25.2,y:170,lines:[{txt:'un *nódulo*',sz:50,t:[23.84,23.95]},{txt:'en el pulmón',sz:30,t:[24.34,24.44,24.56],gap:1.1}]},
 {t0:28.86,t1:29.75,y:570,lines:[{txt:'le *operaron*',sz:46,t:[28.74,28.86]}]},
 {t0:29.86,t1:31.3,y:170,lines:[{txt:'los *cirujanos*',sz:44,t:[29.86,30.18]},{txt:'le quitaron',sz:30,t:[30.80,30.94],gap:1.1}]},
 {t0:33.79,t1:36.5,y:170,lines:[{txt:'los *pulmones*',sz:44,t:[34.27,34.45]},{txt:'están divididos',sz:30,t:[34.99,35.31],gap:1.1}]},
 {t0:37.73,t1:40.5,y:170,lines:[{txt:'derecho *tres*',sz:44,t:[37.91,38.56]},{txt:'izquierdo *dos*',sz:44,t:[39.09,39.79],gap:1.1}]},
 {t0:47.48,t1:48.7,y:170,lines:[{txt:'la *operación*',sz:46,t:[47.48,47.75]}]},
 {t0:51.66,t1:53.2,y:170,lines:[{txt:'el *análisis*',sz:48,t:[51.66,51.92]},{txt:'confirmó',sz:30,t:[52.45],gap:1.1}]},
 {t0:58.77,t1:59.9,y:170,lines:[{txt:'puede *aparecer*',sz:46,t:[58.90,59.14]}]},
 {t0:62.34,t1:63.1,y:170,lines:[{txt:'estos *días*',sz:48,t:[62.34,62.80]}]},
 {t0:73.67,t1:75.7,y:170,lines:[{txt:'le dieron',sz:32,t:[74.38,74.50]},{txt:'el *alta*',sz:58,t:[74.83,74.94]}]},
 {t0:75.79,t1:76.95,lines:[{txt:'¿y ahora',sz:36,t:[75.79,76.03]},{txt:'*qué*?',sz:60,t:[76.33]}]},
 {t0:85.2,t1:86.8,y:170,lines:[{txt:'*mantiene*',sz:50,t:[85.78]},{txt:'su viaje',sz:30,t:[86.25,86.40],gap:1.1}]},
 {t0:93.44,t1:96.4,y:140,lines:[{txt:'¿sabías que tus',sz:30,t:[93.44,94.00,94.11]},{txt:'pulmones tienen *cinco*?',sz:38,t:[94.30,94.83,95.16],gap:1.15}]},
 {t0:96.46,t1:97.9,y:140,lines:[{txt:'te leo en',sz:30,t:[96.46,96.66,96.94]},{txt:'*comentarios*',sz:48,t:[97.05]}]}
];
