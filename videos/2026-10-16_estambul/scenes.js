/* ===== NOTICIA · Las peores inundaciones de Estambul en más de 80 años (16/10/2026) ===== */
DUR=88.4;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* lluvia a pantalla completa */
function rainAll(t,a=1,n=40){let s='';for(let i=0;i<n;i++){const q=((t*1.7)+hs(i*1.3))%1,x=hs(i+5)*560-10,y=200+q*620;s+=P(`M${f1(x)} ${f1(y)} l-4 16`,ST('#5d7fb8',2.6,`opacity:${f2(a*(1-q)*.8)}`));}return s;}
/* skyline genérico de gran ciudad junto al mar (sin monumentos reconocibles) */
function cityS(T){let s='';const B=[[-260,110],[-215,170],[-170,120],[-130,210],[-82,150],[-40,240],[6,160],[48,200],[92,130],[136,220],[182,160],[226,120]];
  B.forEach(([x,h],i)=>{const w=40,c=['#e9e4f5','#d9d2ee','#f4eee2'][i%3];let b=Rc(x,-h,w,h,c,2,OL(2));for(let r=0;r<Math.floor(h/26);r++)for(let k=0;k<2;k++){const on=hs(i*13+r*3+k)>.5;b+=Rc(x+7+k*16,-h+12+r*26,10,12,on?'#ffd23f':'#9aa0b8',1.5);}s+=b;});
  return s;}
function waterRise(t,lv,y0=GY){if(lv<=0)return '';const wy=y0-lv;let d=`M-20 ${f1(wy)}`;for(let x=-20;x<=560;x+=20)d+=` L${x} ${f1(wy+Math.sin(x*.05+t*3)*5)}`;d+=` L560 ${y0+60} L-20 ${y0+60}Z`;
  return P(d,'fill:#8a6a43;opacity:.75')+P(d.split(` L560 ${y0+60}`)[0],ST('#e9d6b5',2.4));}

/* ---------- 1 · gancho: Estambul, 16 millones, peor inundación en 80 años ---------- */
function s1(t){let s=G(270,GY,1,0,cityS(t))+waterRise(t,70*EZ.io(sg(t,.3,3.2)))+rainAll(t,1)+groundLine(1);
  if(t>1.0&&t<3.5)s+=G(270,420,1,0,NX.counter({value:16,suffix:'millones',sz:70,dur:1.0,label:'de habitantes'},t-1.4));
  if(t>3.5){s+=G(270,430,1,0,NX.storm({},t-3.5));}
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Estambul (Turquía)',y:0},t));
  return s;}
/* ---------- 2 · ministro: el mayor desastre desde 1942 ---------- */
function s2(t){let s=groundLine(1);
  s+=G(270,520,1.05,0,NX.podium({label:'Ministro del Interior de Turquía'},t-7.2));
  if(t>10.0){const q=ap(t,10.05,.4);s+=G(270,280,q,0,Rc(-170,-46,340,92,'#fff',16,OL(2.4))+Tn(-96,18,'1942',44,800)+P('M-32 0 L32 0 M20 -12 L32 0 L20 12',ST(K.ink,4))+Tn(98,18,'2026',44,800,{fill:K.red}));}
  s+=stampA(270,370,t-11.9,'EL MAYOR DESDE 1942',{r:-5,sz:20,c:K.red});
  return s;}
/* ---------- 3 · víctimas (con respeto) ---------- */
function s3(t){let s=groundLine(1);
  s+=G(270,400,1.05,0,NX.keyPoints({items:['4 muertos','3 desaparecidos'],step:.9,w:340},t-13.9));
  s+=G(270,600,1,0,NX.stamp({type:'desarrollo',text:'CIFRAS PROVISIONALES'},t-15.3));
  return s;}
/* ---------- 4 · la noche del miércoles ---------- */
function s4(t){let s=groundLine(1);
  s+=G(150,460,1.15,0,NX.calendar({from:14,month:'OCT'},t-17.7));
  s+=pillA(150,560,'miércoles',sg(t,18.9,19.15),{fill:'url(#gRP)',sz:16,w:800});
  s+=G(380,420,1.1,0,NX.storm({},t-18.3));
  return s;}
/* ---------- 5 · 272 litros por metro cuadrado ---------- */
function s5(t){let s=rainAll(t,.9)+groundLine(1);
  if(t>19.9)s+=G(270,430,1,0,NX.counter({value:272,sz:96,dur:2.2},t-20.1));
  s+=pillA(270,520,'litros por metro cuadrado',sg(t,23.6,23.85),{fill:'url(#gRP)',sz:16,w:800});
  s+=pillA(270,570,'en algunas zonas',sg(t,20.3,20.55),{sz:13});
  return s;}
/* ---------- 6 · columna de 27 cm sobre cada metro ---------- */
function s6(t){let s=groundLine(1,700);
  s+=G(250,700,1.05,0,NX.raincolumn({mm:272},t-25.6));
  if(t>30.6)s+=G(420,340,1,0,pill('27 cm',{sz:22,w:800,fill:'url(#gRP)'}),ao(t,30.66,.3));
  s+=actor('lenteja',{t0:25.6,path:[[25.6,470]],emo:[[25.6,2,0]],s:.72,y:()=>700,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 7 · 48 h > media de septiembre y octubre ---------- */
function s7(t){let s=groundLine(1,700);
  s+=pillA(270,250,'Agencia Anadolu',sg(t,32.6,32.85)*dis(t,38.9),{sz:13,w:800});
  s+=G(170,680,1,0,NX.raingauge({p:1,over:sg(t,37.0,37.5),label:'48 horas',fill:'url(#gRP)'},t-32.7));
  s+=G(380,680,1,0,NX.raingauge({p:.82,label:'sept. + oct. (media)'},t-37.6));
  s+=pillA(270,330,'más lluvia en 2 días',sg(t,38.9,39.1),{fill:K.red,sz:15,w:800});
  return s;}
/* ---------- 8 · mapa: Sariyer, Ayazaga ---------- */
function s8(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Turquía',zoom:5,zoomAt:.1,pins:[[29.0,41.11,'Ayazaga · Sariyer']],highlight:['Turquía'],w:480,h:430},t-40.0));
  s+=pillA(270,250,'la zona más castigada',sg(t,40.5,40.75),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* ---------- 9 · riada que arrastra coches ---------- */
function s9(t){let s='';
  s+=G(270,560,1,0,NX.streetflood({},t-44.7));
  s+=pillA(270,250,'arroyo desbordado',sg(t,45.6,45.85)*dis(t,46.4),{sz:14,w:800});
  s+=pillA(270,250,'riada repentina',sg(t,46.55,46.8)*dis(t,49.3),{sz:14,w:800});
  s+=pillA(270,300,'coches amontonados',sg(t,49.6,49.85),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* ---------- 10 · ¿por qué tan rápido? ---------- */
function s10(t){let s=qDeco(t,ao(t,52.0,.4),3,6)+groundLine(1);
  s+=actor('lenteja',{t0:52.0,path:[[52.0,270]],emo:[[52.0,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);
  return s;}
/* ---------- 11 · suelo frente a asfalto ---------- */
function s11(t){let s='';
  s+=G(270,470,1.05,0,NX.runoff({},t-54.6));
  if(t>59.0){const q=ap(t,59.2,.35);s+=G(270,720,q,0,pill('los cauces se llenan de golpe',{sz:15,w:800,fill:'url(#gRP)'}));}
  return s;}
/* ---------- 12 · ministro de Urbanismo: construcciones junto a los arroyos ---------- */
function s12(t){let s=groundLine(1);
  s+=G(270,520,1.05,0,NX.podium({label:'Ministro de Urbanismo y Clima'},t-61.6));
  s+=pillA(270,300,'es «esencial» resolverlo',sg(t,63.7,63.95),{fill:'url(#gRP)',sz:15,w:800});
  s+=pillA(270,350,'construcciones junto a los arroyos',sg(t,65.5,65.75),{sz:13,w:800});
  return s;}
/* ---------- 13 · rescate: 46.000 personas, evacuados, clases ---------- */
function s13(t){let s=groundLine(1);
  if(t<71.9){s+=G(270,330,1,0,NX.counter({value:46000,sz:70,dur:1.2,prefix:'+'},t-68.0));s+=G(270,GY,1,0,NX.crowd({n:22,w:500},t-69.2));
    s+=pillA(270,420,'personas en el rescate',sg(t,69.3,69.55),{fill:'url(#gRP)',sz:15,w:800});}
  if(t>71.9&&t<74.3){s+=G(270,420,1,0,NX.flood({level:.5},t-71.9));s+=pillA(270,560,'miles de evacuados',sg(t,72.1,72.35),{fill:'url(#gRP)',sz:16,w:800});}
  if(t>74.3){s+=G(270,540,1,0,NX.building({label:'colegios',flag:['#2a37d7','#2a37d7','#2a37d7']},t-74.3));s+=stampA(270,500,t-75.0,'SIN CLASES · 2 DÍAS',{r:-6,sz:20,c:K.orange});}
  return s;}
/* ---------- 14 · más lluvia el sábado ---------- */
function s14(t){let s=groundLine(1);
  s+=G(150,460,1.15,0,NX.calendar({from:17,month:'OCT'},t-76.8));
  s+=pillA(150,560,'sábado',sg(t,79.7,79.95),{fill:'url(#gRP)',sz:16,w:800});
  s+=G(380,400,1.1,0,NX.storm({},t-77.2));
  s+=G(380,610,.8,0,NX.alert({label:'AVISO'},t-77.9));
  return s;}
/* ---------- 15 · pregunta ---------- */
function s15(t){let s=qDeco(t,ao(t,80.6,.5),7,6);
  const opts=[['A','Sí, a menudo'],['B','Alguna vez'],['C','Nunca'],['D','Cuéntamelo abajo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,80.8+i*.1,.3),sel=i===1?EZ.out(sg(t,82.3,82.5)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,80.8+i*.1,81.1+i*.1)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  const cq=ap(t,84.0,.3);if(cq>0){const typed='En mi calle, cada otoño…'.slice(0,Math.floor(24*sg(t,84.1,85.4)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:80.6,path:[[80.6,86]],emo:[[80.6,0,0],[81.2,10,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:80.7,path:[[80.7,458]],emo:[[80.7,0,0],[81.3,2,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,85.9,86.6)));
  s+=G(0,0,1,0,Ts(270,352,'Estambul, bajo el agua',30),ao(t,86.0,.3))+G(0,0,1,0,Ts(270,398,'la peor inundación en 80 años',32,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,86.1,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'AP · Xinhua · Anadolu (Daily Sabah) · Euronews',10.5,600)+Tn(270,474,'16/10/2026 · cifras provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,86.2,.3));
  s+=G(270,640,.55,0,NX.raingauge({p:1,label:'272 l/m²'},t-86.3),ao(t,86.3,.3));
  s+=groundLine(1);
  [['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]].forEach(([k,sc],i)=>{const x=600-((t-85.6)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:7.1,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:13.5,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:17.45,draw:s4,in:{type:'whipD',dur:.32}},
  {id:'5',a:19.85,draw:s5,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'6',a:25.35,draw:s6,in:{type:'whipL',dur:.32}},
  {id:'7',a:32.4,draw:s7,in:{type:'whipU',dur:.32}},
  {id:'8',a:39.8,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:44.4,draw:s9,in:{type:'zoom',dur:.45,fx:270,fy:500,z:8}},
  {id:'10',a:51.85,draw:s10,in:{type:'whipD',dur:.32}},
  {id:'11',a:54.4,draw:s11,in:{type:'whipU',dur:.32}},
  {id:'12',a:61.4,draw:s12,in:{type:'whipL',dur:.32}},
  {id:'13',a:67.8,draw:s13,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'14',a:76.6,draw:s14,in:{type:'whipD',dur:.32}},
  {id:'15',a:80.45,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'END',a:85.6,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:2.5,y:170,lines:[{txt:'*Estambul*',sz:58,t:[.05]}]},
 {t0:3.51,t1:6.9,y:170,lines:[{txt:'su peor *inundación*',sz:42,t:[4.44,4.60,4.88]},{txt:'en más de 80 años',sz:30,t:[5.50,5.60,5.81,5.91,6.34],gap:1.15}]},
 {t0:7.25,t1:9.4,lines:[{txt:'según el',sz:30,t:[7.25,7.70]},{txt:'*ministro*',sz:54,t:[7.80]}]},
 {t0:9.45,t1:13.4,y:170,lines:[{txt:'el mayor *desastre*',sz:44,t:[9.45,9.60,9.71,10.05]},{txt:'por inundación',sz:30,t:[10.53,10.69],gap:1.15}]},
 {t0:13.65,t1:17.4,y:200,lines:[{txt:'por ahora',sz:30,t:[13.65,13.88]}]},
 {t0:17.6,t1:19.8,y:200,lines:[{txt:'la noche del',sz:30,t:[18.32,18.45,18.74]},{txt:'*miércoles*',sz:52,t:[18.90]}]},
 {t0:20.01,t1:22.0,y:200,lines:[{txt:'cayeron *hasta*',sz:46,t:[21.61,22.05]}]},
 {t0:25.49,t1:27.1,y:180,lines:[{txt:'para que te hagas',sz:30,t:[25.49,25.76,25.88,26.01]},{txt:'una *idea*',sz:50,t:[26.30,26.51]}]},
 {t0:27.15,t1:29.7,y:180,lines:[{txt:'sobre *cada metro*',sz:44,t:[27.77,28.04,28.26]},{txt:'de suelo',sz:30,t:[28.56,28.68],gap:1.15}]},
 {t0:29.75,t1:32.3,y:180,lines:[{txt:'una *columna*',sz:50,t:[29.52,29.75]},{txt:'de agua',sz:30,t:[30.20,30.34],gap:1.1}]},
 {t0:34.76,t1:36.3,y:170,lines:[{txt:'en solo *48 horas*',sz:44,t:[34.76,35.04,35.29,36.06]}]},
 {t0:36.31,t1:39.7,y:170,lines:[{txt:'más que *septiembre*',sz:40,t:[36.61,37.85]},{txt:'y octubre juntos',sz:30,t:[38.41,38.54,38.95],gap:1.15}]},
 {t0:41.48,t1:44.3,y:170,lines:[{txt:'barrio de *Ayazaga*',sz:42,t:[41.58,41.94,42.02]},{txt:'distrito de Sariyer',sz:30,t:[42.99,43.46,43.58],gap:1.15}]},
 {t0:44.54,t1:47.3,y:170,lines:[{txt:'un arroyo se',sz:30,t:[44.91,45.04,45.42]},{txt:'*desbordó*',sz:52,t:[45.58]}]},
 {t0:47.4,t1:51.8,y:170,lines:[{txt:'*arrastró* coches',sz:46,t:[47.40,47.86]},{txt:'calle abajo',sz:30,t:[48.24,48.50],gap:1.15}]},
 {t0:51.98,t1:54.3,lines:[{txt:'¿por qué se inunda',sz:32,t:[51.98,52.23,52.94,53.08]},{txt:'tan *rápido*?',sz:52,t:[53.42,53.60],gap:1.15}]},
 {t0:54.55,t1:57.2,y:170,lines:[{txt:'el *asfalto*',sz:52,t:[54.55,54.80]},{txt:'no absorbe el agua',sz:30,t:[55.92,56.06,56.59,56.71],gap:1.15}]},
 {t0:57.25,t1:61.3,y:170,lines:[{txt:'corre por la',sz:30,t:[57.25,57.55,57.71]},{txt:'*superficie*',sz:52,t:[57.81]}]},
 {t0:61.56,t1:63.6,lines:[{txt:'el ministro de',sz:30,t:[61.56,61.83,62.29]},{txt:'*Urbanismo*',sz:52,t:[62.40]}]},
 {t0:69.79,t1:71.9,y:200,lines:[{txt:'*trabajan*',sz:50,t:[69.79]}]},
 {t0:72.01,t1:74.2,y:200,lines:[{txt:'*miles*',sz:56,t:[72.01]},{txt:'de vecinos',sz:30,t:[72.50,72.59],gap:1.1}]},
 {t0:74.4,t1:76.5,y:200,lines:[{txt:'las *clases*',sz:52,t:[74.21,74.40]},{txt:'suspendidas',sz:30,t:[74.97],gap:1.1}]},
 {t0:76.74,t1:79.3,y:170,lines:[{txt:'más lluvias',sz:30,t:[78.35,78.54]},{txt:'*fuertes*',sz:54,t:[78.95]}]},
 {t0:80.59,t1:83.9,lines:[{txt:'¿en tu ciudad',sz:32,t:[80.59,80.88,80.99]},{txt:'se *inunda* alguna calle?',sz:38,t:[81.36,81.51,81.91,82.28],gap:1.15}]},
 {t0:84.04,t1:85.5,lines:[{txt:'te leo en',sz:30,t:[84.04,84.24,84.51]},{txt:'*comentarios*',sz:48,t:[84.62]}]}
];
