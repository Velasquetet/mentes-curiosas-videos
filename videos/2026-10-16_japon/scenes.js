/* ===== NOTICIA · Japón lanza por error una alerta de terremoto de magnitud 9,9 (16/10/2026) ===== */
DUR=80.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function leader(x1,y1,x2,y2,p,c=K.ink,bend=-24){if(p<=0)return '';const mx=(x1+x2)/2,my=(y1+y2)/2+bend;
  return DR(`M${f1(x1)} ${f1(y1)} Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}`,ST(c,1.8),EZ.out(p))+(p>.9?Ci(x2,y2,3.2,c):'');}
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* skyline genérico de ciudad (Tokio) */
function cityS(T,shake=0){let s='';const B=[[-250,120],[-205,190],[-160,140],[-120,230],[-70,160],[-28,260],[20,180],[62,210],[108,150],[150,240],[196,170],[236,130]];
  B.forEach(([x,h],i)=>{const w=40,c=['#e9e4f5','#d9d2ee','#f4eee2'][i%3];let b=Rc(x,-h,w,h,c,2,OL(2));for(let r=0;r<Math.floor(h/26);r++)for(let k=0;k<2;k++){const on=hs(i*13+r*3+k)>.45;b+=Rc(x+7+k*16,-h+12+r*26,10,12,on?'#ffd23f':'#9aa0b8',1.5);}
    s+=G(Math.sin(T*60+i)*shake*3,0,1,Math.sin(T*50+i*2)*shake*1.2,b);});
  /* torre de celosía roja genérica */
  s+=G(-100+Math.sin(T*55)*shake*3,0,1,0,P('M-26 0 L-4 -300 L4 -300 L26 0Z','fill:none;'+OL(3,K.red))+P('M-20 -60 L20 -60 M-14 -130 L14 -130 M-9 -200 L9 -200',ST(K.red,3))+Rc(-14,-170,28,14,'#fff',3,OL(2,K.red))+P('M0 -300 L0 -340',ST(K.red,3)));
  return s;}
function tvS(T,on=1){let s=Rc(-120,-80,240,160,K.ink,16)+Rc(-108,-68,216,136,'#e0283a',8);
  if(on){s+=Rc(-108,-68,216,30,'#fff',0)+Tn(0,-47,'ALERTA DE TERREMOTO',14,800,{fill:'#e0283a',ls:.04})+Tn(0,0,'Ponte a cubierto',18,700,{fill:'#fff'})+Tn(0,30,'Magnitud estimada 9,9',13,600,{fill:'#ffe1e4'});
    if(Math.floor(T*4)%2)s+=Rc(-108,-68,216,136,'#fff',8,'opacity:.12');}
  s+=P('M-40 80 L-60 110 M40 80 L60 110',ST(K.ink,6));return s;}

/* ---------- 1 · gancho: móviles sonando ---------- */
function s1(t){const T=t;let s=G(270,GY,1,0,cityS(T,0),.9)+groundLine(1);
  const big=ap(t,.15,.4);
  if(t>2.77){[[100,470,.42,-10],[440,480,.42,9],[90,640,.34,6],[455,650,.34,-7]].forEach(([x,y,k,r],i)=>{const q=ap(t,2.9+i*.22,.3);if(q>0)s+=G(x,y,k*q,r,eewPhoneS({T:T+i,mag:'9,9'}));});}
  s+=G(270,520,.95*big,0,eewPhoneS({T,mag:t>6.29?'9,9':'—'}));
  s+=pillA(270,800,'magnitud 9,9',sg(t,6.3,6.55),{fill:'url(#gRP)',sz:16,w:800});
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',y:0},t),1);
  return s;}
/* ---------- 2 · habría sido el mayor jamás registrado ---------- */
function s2(t){let s=raysBg(270,500,t*14,22,'#d3d3d3',ao(t,7.6,.3))+groundLine(1);
  s+=G(270,450,ap(t,7.75,.4)*1.4,0,medalS({txt:'9,9'},t));
  s+=pillA(270,600,'sería el mayor registrado',sg(t,8.55,8.8),{fill:'url(#gRP)',sz:14,w:800});
  s+=actor('garbanzo',{t0:7.8,path:[[7.8,96]],emo:[[7.8,7,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* ---------- 3 · nunca llegó ---------- */
function s3(t){let s=groundLine(1);
  const sl=1-ao(t,11.3,.4);s+=G(270,470,.8,0,eewPhoneS({T:t,mag:'9,9',buzz:sl}));
  s+=stampA(270,520,t-11.74,'FALSA ALARMA',{r:-8,sz:30,c:K.red});
  s+=actor('pipa',{t0:10.5,path:[[10.5,450]],emo:[[10.5,9,0]],s:.72,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 4 · hora ---------- */
function s4(t){let s=groundLine(1);
  s+=G(270,470,1.3,0,NX.clock({h:12,m:40},t-12.6));
  s+=pillA(270,640,'hora de Japón',sg(t,15.15,15.4),{fill:'url(#gRP)',sz:15,w:800});
  s+=pillA(270,690,'5:40 en la España peninsular',sg(t,15.5,15.75),{sz:12});
  return s;}
/* ---------- 5 · alerta para el norte y el centro, incluida Tokio ---------- */
function s5(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Japón',zoom:6,zoomAt:.1,pins:[[141.35,43.06,'Sapporo'],[139.69,35.69,'Tokio']],highlight:['Japón'],w:480,h:430},t-16.35));
  s+=pillA(270,250,'Agencia Meteorológica de Japón',sg(t,16.6,16.85)*dis(t,19.3),{sz:13,w:800});
  s+=pillA(270,268,'norte y centro del país',sg(t,19.75,20.0)*dis(t,21.2),{fill:'url(#gRP)',sz:14,w:800});
  for(let i=0;i<3;i++){const q=((t*1.1)+i/3)%1;if(t>18.4)s+=Ci(330,430,40+q*170,'none',`stroke:${K.red};stroke-width:3;opacity:${f2((1-q)*.6)}`);}
  return s;}
/* ---------- 6 · alarmas de los teléfonos y la tele ---------- */
function s6(t){const T=t;let s=groundLine(1);
  for(let r=0;r<2;r++)for(let c=0;c<4;c++){const i=r*4+c,q=ap(t,22.85+i*.06,.25);if(q>0&&t<25.0)s+=G(90+c*120,400+r*200,.38*q,0,eewPhoneS({T:T+i,mag:'9,9'}));}
  if(t>24.8){const q=ap(t,24.9,.4);s+=G(270,480,1.3*q,0,tvS(T,t>26.06?1:0));if(t<26.06)s+=G(270,480,1.3*q,0,Rc(-108,-68,216,136,'#2a37d7',8)+Tn(0,6,'Programación habitual',14,700,{fill:'#fff'}));}
  s+=pillA(270,680,'televisión pública',sg(t,25.1,25.35)*(t>24.8?1:0),{sz:13,w:800});
  if(t>26.06)s+=stampA(400,370,t-26.06,'INTERRUMPIDA',{r:8,sz:18,c:K.red});
  return s;}
/* ---------- 7 · ¿qué había pasado? ---------- */
function s7(t){let s=qDeco(t,ao(t,28.0,.4),3,6)+groundLine(1);
  s+=actor('lenteja',{t0:28.0,path:[[28.0,270]],emo:[[28.0,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);
  return s;}
/* ---------- 8 · terremoto real 6,9 ---------- */
function s8(t){let s=groundLine(1);
  s+=G(270,450,1.1,0,NX.quake({mag:6.9},t-30.3));
  s+=stampA(270,300,t-30.85,'REAL',{r:-6,sz:26,c:K.green});
  return s;}
/* ---------- 9 · Kamchatka ---------- */
function s9(t){let s='';
  s+=G(270,500,1,0,NX.map({center:[148,45],zoom:3.2,zoomAt:.0,pins:[[156.5,51.9,'Epicentro · Kamchatka'],[139.69,35.69,'Tokio']],highlight:['Japón'],w:480,h:440},t-33.4));
  return s;}
/* ---------- 10 · más de 100 km de profundidad ---------- */
function s10(t){let s=groundLine(1,760);
  s+=G(270,470,1.05,0,NX.depth({depth:140,label:'más de 100 km'},t-35.95));
  if(t>38.5){/* nada */}
  return s;}
/* ---------- 11 · en Japón apenas se notó ---------- */
function s11(t){let s=G(270,GY,1,0,cityS(t,0))+groundLine(1);
  s+=G(270,300,ap(t,38.6,.35),0,Rc(-150,-60,300,120,'#fff',12,OL(2.2))+P('M-140 0 '+[...Array(56)].map((_,i)=>'L'+f1(-140+i*5)+' '+f1(Math.sin(i*1.9+t*20)*(i>24&&i<34?5:1.5))).join(' '),ST(K.red,2.4)));
  s+=pillA(270,420,'apenas se notó',sg(t,39.2,39.45),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* ---------- 12 · calculó mal el epicentro ---------- */
function s12(t){let s='';
  const over=(wp,k,lt)=>{const [x1,y1]=wp(156.5,51.9),[x2,y2]=wp(146.5,43.6);return DR(`M${f1(x1)} ${f1(y1)} L${f1(x2)} ${f1(y2)}`,ST(K.red,4/k,`stroke-dasharray:${f2(8/k)} ${f2(6/k)}`),EZ.io(sg(lt,1.6,2.4)));};
  s+=G(270,490,1,0,NX.map({center:[150,46],zoom:3.6,zoomAt:0,over,pins:[[156.5,51.9,'real'],[146.5,43.6,'calculado (aprox.)']],highlight:['Japón'],w:480,h:420},t-40.5));
  s+=pillA(270,250,'sistema automático',sg(t,41.0,41.25)*dis(t,43.8),{sz:14,w:800});
  if(t>43.9){const q=ap(t,44.0,.35);s+=G(270,232,q,0,Rc(-150,-40,300,80,'#fff',16,OL(2.4))+Tn(-70,16,'6,9',40,800)+P('M-26 0 L26 0 M14 -12 L26 0 L14 12',ST(K.ink,4))+Tn(78,16,'9,9',40,800,{fill:K.red}));}
  return s;}
/* ---------- 13 · ocho minutos después, cancelada ---------- */
function s13(t){let s=groundLine(1);
  s+=G(140,470,1,0,NX.stopwatch({txt:'~8 min',p:.15},t-45.8));
  s+=G(380,480,.85*ap(t,46.0,.4),0,eewPhoneS({T:t,mag:'9,9',buzz:1-sg(t,47.9,48.2),cancel:sg(t,48.1,48.5)}));
  return s;}
/* ---------- 14 · 32.000 veces más energía ---------- */
function s14(t){let s=groundLine(1,700);
  s+=G(240,700,.85,0,NX.energy({a:'6,9',b:'9,9',ratio:32000},t-51.0));
  if(t>52.8)s+=G(270,300,1,0,NX.counter({value:32000,sz:62,dur:1.0},t-52.9));
  s+=pillA(270,360,'veces más energía',sg(t,54.3,54.55),{fill:'url(#gRP)',sz:14,w:800});
  s+=actor('grano',{t0:49.1,path:[[49.1,58]],emo:[[49.1,2,0],[52.0,7,0]],s:.55,y:()=>700,face:()=>1,look:()=>1},t);
  return s;}
/* ---------- 15 · récord: Chile 1960, 9,5 ---------- */
function s15(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Chile',zoom:4,zoomAt:.1,pins:[[-73.05,-39.5,'Valdivia']],highlight:['Chile'],w:440,h:400},t-56.5));
  if(t>58.4)s+=G(95,285,.7*ap(t,58.5,.4),0,medalS({txt:'9,5'},t));
  s+=pillA(420,290,'1960',sg(t,58.6,58.85),{fill:'url(#gRP)',sz:18,w:800});
  return s;}
/* ---------- 16 · sin tsunami, heridos ni daños ---------- */
function s16(t){let s=groundLine(1);
  s+=G(270,400,1.05,0,NX.keyPoints({items:['Sin tsunami','Sin heridos','Sin daños'],step:.78,w:340},t-61.7));
  s+=stampA(270,660,t-63.9,'SIN VÍCTIMAS',{r:-5,sz:22,c:K.green});
  return s;}
/* ---------- 17 · tren bala parado ---------- */
function s17(t){let s=groundLine(1,620);
  s+=G(270,620,1,0,NX.bullettrain({stop:1},t-64.5));
  s+=pillA(130,700,'Shin-Yokohama',sg(t,66.6,66.85),{sz:13,w:700})+pillA(410,700,'Toyohashi',sg(t,67.46,67.7),{sz:13,w:700});
  s+=P('M190 700 L350 700',ST(K.ink,2,`stroke-dasharray:4 6;opacity:${f2(ao(t,67.5,.3))}`));
  s+=stampA(270,420,t-65.1,'PARADA BREVE',{r:-6,sz:22,c:K.orange});
  return s;}
/* ---------- 18 · disculpas, sin ciberataque, investigación ---------- */
function s18(t){let s=groundLine(1);
  if(t<70.3)s+=G(270,520,1.1,0,NX.podium({label:'Agencia Meteorológica de Japón'},t-68.6));
  s+=pillA(270,330,'pide disculpas',sg(t,69.3,69.55)*dis(t,70.3),{fill:'url(#gRP)',sz:15,w:800});
  if(t>70.3&&t<71.75){s+=G(270,480,1,0,NX.shield({},t-70.3));s+=stampA(270,500,t-70.95,'NO FUE UN CIBERATAQUE',{r:-6,sz:20,c:K.green});}
  if(t>71.7){s+=G(270,470,1,0,NX.stamp({type:'desarrollo',text:'EN INVESTIGACIÓN'},t-72.0));
    s+=actor('lenteja',{t0:71.75,path:[[71.75,430]],emo:[[71.75,10,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);}
  return s;}
/* ---------- 19 · pregunta ---------- */
function s19(t){let s=qDeco(t,ao(t,73.7,.5),7,6);
  const opts=[['A','Me pongo a cubierto'],['B','Miro las noticias'],['C','Pienso que es un error'],['D','¿Otra? Cuéntamela']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,73.9+i*.1,.3),sel=i===0?EZ.out(sg(t,75.3,75.5)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,73.9+i*.1,74.2+i*.1)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  const cq=ap(t,75.6,.3);if(cq>0){const typed='¡Debajo de la mesa!'.slice(0,Math.floor(19*sg(t,75.7,76.6)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:73.7,path:[[73.7,86]],emo:[[73.7,0,0],[74.3,9,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:73.8,path:[[73.8,458]],emo:[[73.8,0,0],[74.4,2,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,77.9,78.6)));
  s+=G(0,0,1,0,Ts(270,352,'La alerta de',30),ao(t,78.0,.3))+G(0,0,1,0,Ts(270,398,'un terremoto fantasma',38,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,78.1,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'NHK · Kyodo · BNO News · SBS · USGS',10.5,600)+Tn(270,474,'16/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,78.2,.3));
  s+=G(270,555,.36,0,eewPhoneS({T,mag:'9,9',buzz:0,cancel:1}),ao(t,78.3,.3));
  s+=groundLine(1);
  [['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]].forEach(([k,sc],i)=>{const x=600-((t-77.6)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:7.55,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:10.3,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:12.45,draw:s4,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'5',a:16.2,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:22.7,draw:s6,in:{type:'whipU',dur:.32}},
  {id:'7',a:27.9,draw:s7,in:{type:'whipD',dur:.32}},
  {id:'8',a:29.75,draw:s8,in:{type:'zoom',dur:.45,fx:270,fy:470,z:8}},
  {id:'9',a:33.5,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'10',a:35.9,draw:s10,in:{type:'whipU',dur:.32}},
  {id:'11',a:38.45,draw:s11,in:{type:'whipD',dur:.32}},
  {id:'12',a:40.4,draw:s12,in:{type:'whipL',dur:.32}},
  {id:'13',a:45.65,draw:s13,in:{type:'whipU',dur:.32}},
  {id:'14',a:48.95,draw:s14,in:{type:'whipL',dur:.32}},
  {id:'15',a:56.4,draw:s15,in:{type:'whipD',dur:.32}},
  {id:'16',a:61.35,draw:s16,in:{type:'whipU',dur:.32}},
  {id:'17',a:64.4,draw:s17,in:{type:'whipL',dur:.32}},
  {id:'18',a:68.45,draw:s18,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'19',a:73.55,draw:s19,in:{type:'whipD',dur:.32}},
  {id:'END',a:77.6,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:2.7,y:170,lines:[{txt:'hace unas horas',sz:30,t:[.05,.39,.69]},{txt:'en *Japón*',sz:52,t:[1.12,2.12]}]},
 {t0:2.77,t1:5.1,y:170,lines:[{txt:'los *móviles*',sz:50,t:[2.77,3.10]},{txt:'sonaron a la vez',sz:30,t:[3.55,3.99,4.04,4.15],gap:1.15}]},
 {t0:5.16,t1:7.5,y:170,lines:[{txt:'un terremoto de',sz:30,t:[5.01,5.16,5.67]},{txt:'magnitud *9,9*',sz:50,t:[5.78,6.29],spark:true}]},
 {t0:7.64,t1:10.2,lines:[{txt:'el *mayor*',sz:52,t:[8.45,8.55]},{txt:'jamás registrado',sz:30,t:[8.89,9.22],gap:1.1}]},
 {t0:10.38,t1:12.4,lines:[{txt:'pero *nunca*',sz:52,t:[10.38,11.43]},{txt:'llegó',sz:34,t:[11.74],gap:1.1}]},
 {t0:12.55,t1:16.1,lines:[{txt:'sobre las',sz:30,t:[12.90,13.19]},{txt:'*12:40*',sz:58,t:[13.38],num:true}]},
 {t0:16.32,t1:19.3,lines:[{txt:'lanzó una',sz:30,t:[17.82,18.21]},{txt:'*alerta*',sz:56,t:[18.43]}]},
 {t0:19.43,t1:22.6,lines:[{txt:'incluida',sz:30,t:[21.34]},{txt:'*Tokio*',sz:58,t:[21.93]}],y:200},
 {t0:22.8,t1:24.8,lines:[{txt:'sonaron las',sz:30,t:[22.80,23.31]},{txt:'*alarmas*',sz:56,t:[23.50]}]},
 {t0:24.89,t1:27.8,lines:[{txt:'la tele',sz:30,t:[24.89,25.01]},{txt:'*interrumpió*',sz:50,t:[26.06]}]},
 {t0:28.01,t1:29.7,lines:[{txt:'¿qué había pasado',sz:34,t:[28.01,28.21,28.48]},{txt:'de *verdad*?',sz:52,t:[28.88,28.98]}]},
 {t0:29.84,t1:33.4,lines:[{txt:'un terremoto *real*',sz:44,t:[30.19,30.34,30.85]},{txt:'de magnitud 6,9',sz:30,t:[32.04,32.14,32.64],gap:1.15}]},
 {t0:33.64,t1:35.85,lines:[{txt:'cerca de',sz:30,t:[33.64,33.96]},{txt:'*Kamchatka*',sz:52,t:[35.14]}]},
 {t0:36.02,t1:38.4,lines:[{txt:'a *más de 100 km*',sz:44,t:[36.02,36.17,36.38,36.49,36.74]},{txt:'de profundidad',sz:30,t:[37.33,37.42],gap:1.15}]},
 {t0:38.56,t1:40.35,lines:[{txt:'apenas',sz:30,t:[39.20]},{txt:'se *notó*',sz:54,t:[39.59,39.69]}]},
 {t0:40.51,t1:43.9,lines:[{txt:'calculó *mal*',sz:50,t:[41.88,42.34]},{txt:'dónde estaba el epicentro',sz:28,t:[42.59,42.86,43.26,43.36],gap:1.2}]},
 {t0:43.96,t1:45.6,y:150,lines:[{txt:'y *sobreestimó*',sz:46,t:[43.96,44.04]}]},
 {t0:45.76,t1:48.9,lines:[{txt:'unos 8 minutos',sz:30,t:[45.76,46.17,46.40]},{txt:'*cancelada*',sz:52,t:[48.11]}]},
 {t0:49.06,t1:51.0,lines:[{txt:'la diferencia',sz:30,t:[49.24,49.38]},{txt:'*no es pequeña*',sz:46,t:[50.01,50.17,50.30]}]},
 {t0:51.09,t1:54.0,lines:[{txt:'un *9,9*',sz:52,t:[51.09,51.31]},{txt:'liberaría',sz:30,t:[52.11],gap:1.1}]},
 {t0:54.14,t1:56.35,lines:[{txt:'más energía que',sz:30,t:[54.14,54.35,54.89]},{txt:'un *6,9*',sz:52,t:[55.04,55.19]}]},
 {t0:56.49,t1:59.9,lines:[{txt:'el *récord*',sz:52,t:[56.49,56.77]},{txt:'es de Chile',sz:30,t:[57.52,57.80,57.92],gap:1.1}]},
 {t0:60.0,t1:61.3,lines:[{txt:'*9,5*',sz:60,t:[60.0],spark:true}]},
 {t0:61.48,t1:64.4,y:150,lines:[{txt:'no hubo',sz:30,t:[61.48,61.77]},{txt:'*tsunami*',sz:52,t:[61.99]}]},
 {t0:64.54,t1:68.4,lines:[{txt:'se paró el',sz:30,t:[64.94,65.08,65.72]},{txt:'*tren bala*',sz:52,t:[65.84,66.06]}]},
 {t0:68.58,t1:70.3,lines:[{txt:'pidió *disculpas*',sz:46,t:[69.25,69.54]}]},
 {t0:70.39,t1:71.7,lines:[{txt:'sin *ciberataque*',sz:44,t:[70.39,71.04]}]},
 {t0:71.79,t1:73.5,lines:[{txt:'*investigando*',sz:50,t:[72.05]},{txt:'el fallo',sz:30,t:[72.75,72.86],gap:1.1}]},
 {t0:73.69,t1:76.3,lines:[{txt:'¿y tú qué',sz:32,t:[73.69,73.69,73.88]},{txt:'*habrías hecho*?',sz:46,t:[74.01,74.40],gap:1.15}]},
 {t0:76.39,t1:77.6,lines:[{txt:'te leo en',sz:30,t:[76.39,76.59,76.86]},{txt:'*comentarios*',sz:48,t:[76.97]}]}
];
