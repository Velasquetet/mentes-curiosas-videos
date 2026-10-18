/* ===== NOTICIA · Estampida en el Durga Puja de Calcuta (sábado 17/10/2026) ===== */
DUR=95.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* tachado rojo animado sobre una pastilla */
const strike=(x,y,w,p)=>p>0?P(`M${x-w/2} ${y+4} L${f1(x-w/2+w*EZ.out(cl(p)))} ${y-4}`,ST(K.red,5)):'';

/* ---------- 1 · Calcuta: mapa y pandal con gente esperando ---------- */
function s1(t){let s='';
  if(t<1.75){s+=G(270,470,1,0,NX.map({focus:'India',zoom:3.2,zoomAt:.1,pins:[[88.36,22.57,'Calcuta']],highlight:['India'],w:480,h:430},t));}
  else{s+=G(270,600,1,0,NX.pandal({},t-1.75))+G(270,GY+4,1,0,blobCrowd({n:9,rows:2,w:500,T:t,seed:3,emo:'neutral'}),ao(t,2.2,.4))+groundLine(1);
    s+=pillA(130,300,'Durga Puja',sg(t,6.6,6.85),{fill:'url(#gRP)',sz:16,w:800});
    s+=pillA(410,300,'templo temporal',sg(t,4.4,4.65),{sz:13,w:800});}
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Calcuta (India)',y:0},t));
  return s;}
/* ---------- 2 · empieza a llover ---------- */
function s2(t){let s=G(270,600,1,0,NX.pandal({rain:ao(t,8.6,.6)},t-7.0))+G(270,GY+4,1,0,blobCrowd({n:9,rows:2,w:500,T:t,seed:3,emo:t>8.9?'worried':'neutral'}))+groundLine(1);
  if(t>8.7)s+=G(430,300,.75,0,NX.storm({},t-8.7));
  return s;}
/* ---------- 3 · sábado, hacia las 19:00, Chorebagan ---------- */
function s3(t){let s='';
  if(t<13.25){s+=groundLine(1);
    s+=G(150,460,1.15,0,NX.calendar({from:17,month:'OCT'},t-10.9));
    s+=pillA(150,560,'sábado',sg(t,11.35,11.6),{fill:'url(#gRP)',sz:16,w:800});
    s+=G(390,450,1,0,NX.clock({h:7,m:0},t-11.8));
    s+=pillA(390,560,'hacia las 19:00',sg(t,12.3,12.55),{sz:14,w:800});}
  else{s+=G(270,500,1,0,NX.map({focus:'India',zoom:9,zoomAt:.1,pins:[[88.36,22.59,'Chorebagan']],highlight:['India'],w:480,h:430},t-13.25));
    s+=pillA(270,250,'norte de Calcuta',sg(t,14.8,15.05),{fill:'url(#gRP)',sz:15,w:800});}
  return s;}
/* ---------- 4 · tormenta: unos a cubierto, otros a la salida; el anuncio ---------- */
function s4(t){let s=groundLine(1);
  if(t<20.75){const sp=EZ.io(sg(t,17.4,18.6)),ru=EZ.io(sg(t,19.0,20.2));
    s+=rainAllC(t,.9);
    s+=G(130,GY,1,0,P('M-110 -170 L110 -170 L90 -130 L-90 -130Z','fill:#2a37d7;'+OL(2.2))+Rc(-86,-130,8,130,'#c9a46a',2,OL(1.4))+Rc(78,-130,8,130,'#c9a46a',2,OL(1.4)));
    for(let i=0;i<4;i++)s+=blobS({x:lerp(200+i*34,75+i*36,sp),y:GY,s:.55,T:t,ph:i*7,emo:'worried'});
    for(let i=0;i<4;i++)s+=blobS({x:lerp(345+i*34,370+i*28,ru),y:GY,s:.55,T:t,ph:i*5+3,emo:'worried'});
    if(ru>0)s+=G(490,GY-150,1,0,Rc(-36,0,72,150,'#3a2414',3,OL(2))+Tn(0,-14,'SALIDA',12,800),ao(t,18.9,.3));
    s+=pillA(130,330,'refugio',sg(t,17.9,18.15),{sz:14,w:800});
    s+=pillA(420,330,'salida',sg(t,19.8,20.05),{fill:'url(#gRP)',sz:14,w:800});}
  else{s+=G(270,420,1,0,NX.megaphone({},t-20.75));
    s+=pillA(270,250,'según la policía',sg(t,20.9,21.15)*dis(t,23.0),{sz:14,w:800});
    s+=pillA(270,250,'confusión',sg(t,23.55,23.8),{fill:'url(#gRP)',sz:17,w:800});
    s+=G(270,GY+4,1,0,blobCrowd({n:8,rows:2,w:480,T:t,seed:9,emo:t>23.3?'surprised':'neutral'}));
    s+=qDeco(t,ao(t,23.4,.4),5,5);}
  return s;}
function rainAllC(t,a=1,n=36){let s='';for(let i=0;i<n;i++){const q=((t*1.7)+hs(i*1.3))%1,x=hs(i+5)*560-10,y=200+q*560;s+=P(`M${f1(x)} ${f1(y)} l-4 16`,ST('#5d7fb8',2.6,`opacity:${f2(a*(1-q)*.8)}`));}return s;}
/* ---------- 5 · la multitud empuja; en la entrada mucha gente cae ---------- */
function s5(t){let s='';
  s+=G(270,480,1,0,NX.funnel({jam:.9,fall:ao(t,28.1,.5)},t-24.73));
  s+=pillA(270,215,'empuje hacia delante',sg(t,25.5,25.75)*dis(t,27.0),{sz:14,w:800});
  s+=pillA(270,215,'caídas en la entrada',sg(t,27.1,27.35),{fill:K.red,sz:15,w:800});
  return s;}
/* ---------- 6 · víctimas (con respeto) ---------- */
function s6(t){let s=groundLine(1);
  s+=G(270,420,1.05,0,NX.keyPoints({items:['al menos 19 muertos','unos 25 heridos'],step:2.6,w:360},t-29.2));
  s+=G(270,620,1,0,NX.stamp({type:'desarrollo',text:'CIFRAS PROVISIONALES'},t-31.0));
  return s;}
/* ---------- 7 · detenidos ---------- */
function s7(t){let s=groundLine(1);
  s+=G(270,620,1,0,NX.police({},t-33.9));
  s+=G(270,380,1,0,NX.handcuffs({},t-34.6));
  s+=pillA(160,475,'organización',sg(t,36.2,36.45),{sz:14,w:800});
  s+=pillA(390,475,'seguridad privada',sg(t,37.3,37.55),{fill:'url(#gRP)',sz:14,w:800});
  return s;}
/* ---------- 8 · investigación y cierre de otros recintos ---------- */
function s8(t){let s=groundLine(1);
  if(t<41.8){s+=G(270,420,1,0,NX.search({q:'investigación · Bengala Occidental'},t-38.8));
    s+=pillA(270,255,'Gobierno de Bengala Occidental',sg(t,39.4,39.65),{sz:13,w:800});}
  else{[[145,.44],[395,.44]].forEach(([x,k],i)=>{s+=G(x,GY-28,k,0,NX.pandal({},t-41.85-i*.2));});
    s+=G(270,610,.8,0,NX.tape({text:'CERRADO'},t-42.3));
    s+=pillA(270,300,'otros recintos cerrados',sg(t,42.4,42.65),{fill:'url(#gRP)',sz:15,w:800});}
  return s;}
/* ---------- 9 · Modi: «trágico» ---------- */
function s9(t){let s=groundLine(1);
  s+=G(270,560,1.05+.08*EZ.io(sg(t,44.5,48.6)),0,NX.podium({label:'Narendra Modi · primer ministro'},t-44.55));
  s+=pillA(270,300,'primer ministro de la India',sg(t,45.1,45.35)*dis(t,47.5),{sz:14,w:800});
  s+=pillA(270,300,'«trágico»',sg(t,47.75,48.0),{fill:'url(#gRP)',sz:22,w:800});
  return s;}
/* ---------- 10 · ¿por qué es tan peligrosa una multitud? ---------- */
function s10(t){let s=qDeco(t,ao(t,48.9,.4),3,6)+groundLine(1);
  s+=actor('lenteja',{t0:48.85,path:[[48.85,270]],emo:[[48.85,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);
  return s;}
/* ---------- 11 · 5–6 personas por m² · se mueve como un fluido ---------- */
function s11(t){let s='';
  s+=G(270,470,1.1,0,NX.density({steps:[1,2,4,6],every:.62,wave:ao(t,59.6,.6)},t-53.9));
  s+=pillA(270,205,'5 o 6 por m²',sg(t,56.5,56.75)*dis(t,57.2),{fill:K.red,sz:16,w:800});
  s+=pillA(270,205,'ya no decides',sg(t,57.4,57.65)*dis(t,59.4),{sz:15,w:800});
  s+=pillA(270,205,'como un fluido',sg(t,60.95,61.2),{fill:'url(#gRP)',sz:16,w:800});
  s+=actor('lenteja',{t0:52.15,t1:53.85,path:[[52.15,270]],emo:[[52.15,2,0]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  if(t<53.9)s+=groundLine(1);
  return s;}
/* ---------- 12 · no suele ser que te pisen: asfixia por presión ---------- */
function s12(t){let s='';
  if(t<65.4){s+=G(270,430,1,0,pill('pisotones',{sz:26,w:800,fill:'#fff',tc:'#141212',s:'stroke:#141212;stroke-width:2'}),ap(t,63.3,.35));
    s+=strike(270,430,190,sg(t,64.4,64.75));
    s+=pillA(270,520,'no es lo más grave',sg(t,63.8,64.05),{sz:14,w:800});}
  else{s+=G(270,470,1,0,NX.chestpress({press:1.8,label:'no deja respirar'},t-65.4));
    s+=pillA(270,215,'asfixia',sg(t,67.2,67.45),{fill:K.red,sz:18,w:800});}
  return s;}
/* ---------- 13 · consejos ---------- */
function s13(t){let s='';
  if(t<79.0){s+=pillA(270,250,'si ya no puedes salir',sg(t,73.3,73.55),{sz:14,w:800});
    s+=G(270,430,1.05,0,NX.keyPoints({items:['no te agaches ni te pares','sigue el movimiento','busca los bordes'],step:1.4,w:390},t-74.5));
    s+=groundLine(1);
    s+=actor('lenteja',{t0:72.0,path:[[72.0,270],[74.0,270],[74.6,445]],emo:[[72.0,2,1]],s:lerp(.9,.62,EZ.io(sg(t,74.0,74.6))),y:()=>GY,face:()=>-1,look:()=>-1},t);}
  else{s+=G(270,470,1,0,NX.chestpress({press:99,guard:.6,label:'brazos delante del pecho'},t-79.05));}
  return s;}
/* ---------- 14 · lo que evita estas tragedias ---------- */
function s14(t){let s=groundLine(1);
  s+=G(270,620,1+.05*EZ.io(sg(t,81.7,87.5)),0,NX.pandal({narrow:1-EZ.io(sg(t,84.6,85.6))},t-81.7));
  s+=pillA(110,300,'espacio',sg(t,85.0,85.25),{fill:'url(#gRP)',sz:15,w:800});
  s+=pillA(270,300,'entradas',sg(t,85.9,86.15),{fill:'url(#gRP)',sz:15,w:800});
  s+=pillA(430,300,'salidas',sg(t,86.7,86.95),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* ---------- 15 · pregunta ---------- */
function s15(t){let s='';
  const opts=[['A','Sí, más de una vez'],['B','Alguna vez'],['C','Nunca'],['D','Cuéntamelo abajo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,87.9+i*.1,.3);if(q>0)s+=G(270+(1-EZ.out(sg(t,87.9+i*.1,88.2+i*.1)))*120,330+i*54,1,0,optionRow(340,l,txt,0),cl(q*2));});
  const cq=ap(t,90.6,.3);if(cq>0){const typed='En un concierto, una vez…'.slice(0,Math.floor(25*sg(t,90.7,92.0)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:87.7,path:[[87.7,86]],emo:[[87.7,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:87.8,path:[[87.8,458]],emo:[[87.8,1,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,92.3,93.0)));
  s+=G(0,0,1,0,Ts(270,352,'Estampida en Calcuta',30),ao(t,92.4,.3))+G(0,0,1,0,Ts(270,398,'por qué una multitud es peligrosa',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,92.5,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Reuters · AFP · EFE · Al Jazeera · Scientific American',10.5,600)+Tn(270,474,'17–18/10/2026 · cifras provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,92.6,.3));
  s+=G(270,640,.5,0,NX.density({steps:[6]},t-92.7),ao(t,92.7,.3));
  s+=groundLine(1);
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:7.0,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:10.8,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:16.15,draw:s4,in:{type:'whipD',dur:.32}},
  {id:'5',a:24.6,draw:s5,in:{type:'zoom',dur:.45,fx:270,fy:500,z:8}},
  {id:'6',a:28.9,draw:s6,in:{type:'whipU',dur:.32}},
  {id:'7',a:33.75,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:38.65,draw:s8,in:{type:'whipD',dur:.32}},
  {id:'9',a:44.4,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'10',a:48.7,draw:s10,in:{type:'glitch',dur:.3}},
  {id:'11',a:52.0,draw:s11,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'12',a:62.7,draw:s12,in:{type:'whipU',dur:.32}},
  {id:'13',a:71.9,draw:s13,in:{type:'whipL',dur:.32}},
  {id:'14',a:81.55,draw:s14,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'15',a:87.55,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'END',a:92.1,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:1.7,y:170,lines:[{txt:'*Calcuta*',sz:58,t:[.05]}]},
 {t0:1.75,t1:6.9,y:170,lines:[{txt:'miles de *personas*',sz:42,t:[1.73,2.20,2.30]},{txt:'esperan para entrar',sz:30,t:[2.88,3.29,3.48],gap:1.15}]},
 {t0:7.86,t1:10.7,y:170,lines:[{txt:'y de repente',sz:30,t:[7.86,8.05,8.18]},{txt:'*llueve*',sz:56,t:[9.40]}]},
 {t0:16.25,t1:20.7,y:180,lines:[{txt:'con la *tormenta*',sz:44,t:[16.25,16.50,16.61]}]},
 {t0:29.0,t1:33.7,y:200,lines:[{txt:'al menos',sz:30,t:[29.0,29.25]},{txt:'*19* muertos',sz:50,t:[29.57,30.62]}]},
 {t0:33.84,t1:38.6,y:170,lines:[{txt:'varias personas',sz:30,t:[35.17,35.52]},{txt:'*detenidas*',sz:52,t:[34.62]}]},
 {t0:48.79,t1:51.9,y:180,lines:[{txt:'¿por qué es tan',sz:30,t:[49.30,49.50,50.65,50.88]},{txt:'*peligrosa*',sz:56,t:[51.05]},{txt:'una multitud?',sz:30,t:[49.65,49.83],gap:1.2}]},
 {t0:52.12,t1:53.85,y:170,lines:[{txt:'según los',sz:30,t:[52.12,52.12]},{txt:'*expertos*',sz:54,t:[52.44]}]},
 {t0:62.79,t1:65.3,y:180,lines:[{txt:'lo más *grave*',sz:46,t:[62.98,63.12,63.31]}]},
 {t0:72.0,t1:73.2,y:170,lines:[{txt:'*consejos*',sz:56,t:[72.45]}]},
 {t0:81.67,t1:84.9,y:180,lines:[{txt:'lo que de verdad',sz:30,t:[82.06,82.16,82.28,82.38]},{txt:'*evita* tragedias',sz:46,t:[82.75,83.40],gap:1.15}]},
 {t0:87.69,t1:92.0,y:200,lines:[{txt:'¿te has sentido',sz:30,t:[88.35,88.46,88.58]},{txt:'*atrapado*?',sz:52,t:[89.05]}]}
];
