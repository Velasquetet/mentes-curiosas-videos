/* ===== DIARIO · Lugares de Europa que, según la leyenda, construyeron diablos, gigantes y dragones · 23/10/2026 ===== */
DUR=119.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=760;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const MARTORELL=[1.93,41.47],CAUSEWAY=[-6.51,55.24],STAFFA=[-6.34,56.43],KRAKOW=[19.94,50.05];
function card(x,y,top,big,col,lt,w=240){return G(x,y,EZ.back(sg(lt,0,.3)),0,Rc(-w/2,-46,w,92,'#fff',14,OL(2.4))+Tn(0,-16,top,13,800,{fill:'#555'})+Tn(0,22,big,30,800,{fill:col||K.ink}),cl(lt*4));}
function soul(lt){const b=_osc(lt,.7,6);return G(0,b,1,0,P('M-26 30 Q-30 -20 0 -34 Q30 -20 26 30 L16 20 L8 30 L0 20 L-8 30 L-16 20Z','fill:#fff;'+OL(2.2))+Ci(-9,-8,4,K.ink)+Ci(9,-8,4,K.ink)+El(0,6,5,6,K.ink));}
function night(t,a=1){return Rc(0,0,540,960,'#1b2340',0,`opacity:${f2(a)}`)+[...Array(30)].map((_,i)=>Ci(hs(i)*540,hs(i+9)*520,1.4,'#fff',`opacity:${f2(a*(.5+.5*Math.sin(t*3+i)))}`)).join('')+G(440,140,1,0,Ci(0,0,34,'#fff7d6')+Ci(12,-8,30,'#1b2340'),a);}

/* 1 · fotograma 0: de noche, el puente se levanta solo piedra a piedra y el diablo mira (recursos nuevos devilbridge y devil) */
function s1(t){let s=night(t);
  s+=G(270,800,1.05,0,NX.devilbridge({build:EZ.out(sg(t,-.4,2.4)),night:1},t+3));
  for(let i=0;i<6;i++){const q=((t*1.3)+i/6)%1;if(t<2.4)s+=G(lerp(60+i*80,270,q),lerp(900,520,q),1,q*200,Rc(-10,-8,20,16,'#6f6650',2,OL(1.4)),1-q*.3);}
  s+=G(95,790,1.1,0,NX.devil({emo:'smug'},t-1.2));
  s+=G(270,170,1,0,Ts(0,0,'lo construyó',36,{fill:'#fff',stroke:'#fff'}),ao(t,-.5,.3))+G(270,232,1,0,Ts(0,0,'el diablo',60,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,-.4,.3));
  if(t>3.4){s+=G(400,420,1,0,soul(t),ap(t,3.5,.35));s+=pillA(400,500,'a cambio: 1 alma',sg(t,4.5,4.75),{fill:K.red,sz:15,w:800});}
  return s;}
/* 2 · Puente del Diablo, Martorell (Barcelona) */
function s2(t){let s='';
  s+=G(270,480,1,0,NX.map({focus:'España',zoom:9,zoomAt:-.3,highlight:['España'],pins:[[MARTORELL[0],MARTORELL[1],'Martorell']],w:480,h:420},t-5.5+.2));
  s+=pillA(270,230,'Puente del Diablo',sg(t,6.0,6.25),{fill:'url(#gRP)',sz:18,w:800});
  s+=pillA(270,730,'Barcelona',sg(t,7.8,8.05),{fill:K.ink,sz:16,w:800});
  return s;}
/* 3 · el trato: levantarlo antes del amanecer a cambio del alma del primero que lo cruzara */
function s3(t){let s=night(t,1-.35*sg(t,11.8,13));
  s+=G(270,800,1.05,0,NX.devilbridge({night:1-.35*sg(t,11.8,13)},t));
  s+=G(110,790,1.1,0,NX.devil({emo:'smug'},t-8.8));
  if(t>11.8){const q=EZ.out(sg(t,11.9,13.2));s+=G(440,lerp(560,470,q),1,0,sunS(30),q*.9);}
  s+=pillA(270,250,'antes del amanecer',sg(t,11.9,12.15),{fill:K.orange,sz:17,w:800});
  if(t>13.3){s+=G(270,350,.8,0,soul(t),ap(t,13.3,.35));s+=pillA(270,425,'el alma del primero que lo cruce',sg(t,13.8,14.05),{fill:K.ink,sz:14,w:800});}
  return s;}
/* 4 · pero los vecinos hicieron cruzar primero… a un gato */
function s4(t){let s='';
  s+=G(270,800,1.05,0,NX.devilbridge({cat:t>18.2?EZ.io(sg(t,18.3,20.4)):null},t));
  s+=G(100,790,1.1,0,NX.devil({emo:t>20.6?'angry':'smug'},t-15.3));
  s+=actor('pipa',{t0:16.9,path:[[16.9,470]],emo:[[16.9,2,0],[20.5,4,0]],s:.6,y:()=>790,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,250,'los vecinos…',sg(t,17.3,17.55),{fill:K.ink,sz:17,w:800});
  if(t>21.6)s+=G(270,340,1,0,Rc(-140,-30,280,60,'#fff',14,OL(2.4))+Tn(0,9,'1 alma… de gato',22,800,{fill:K.red}),ap(t,21.7,.35));
  return s;}
/* 5 · ¿la verdad? puente romano de la Vía Augusta + arco gótico de 1283 */
function s5(t){let s='';
  const reb=t>28.8?EZ.out(sg(t,28.9,30.6)):1;
  s+=G(270,800,1.05,0,NX.devilbridge({roman:t>24.0&&t<28.8?ao(t,24.1,.4):0,build:reb},t));
  if(t<24.1)s+=G(270,300,1,0,stampA(0,0,t-23.0,'¿LA VERDAD?',{c:K.blue,sz:30,r:-5}));
  s+=pillA(270,250,'puente romano · hace +2.000 años',sg(t,25.4,25.65),{fill:K.red,sz:15,w:800,o:t<28.8?1:1-ao(t,28.8,.3)});
  s+=pillA(270,305,'Vía Augusta',sg(t,27.5,27.75),{fill:K.ink,sz:15,w:800,o:t<28.8?1:1-ao(t,28.8,.3)});
  if(t>30.6)s+=G(270,250,1,0,NX.bigyear({value:1283},t-30.6));
  s+=pillA(270,372,'arco gótico',sg(t,29.4,29.65),{fill:'url(#gRP)',sz:16,w:800});
  return s;}
/* 6 · tan alto y tan fino que parecía imposible… cosa del diablo */
function s6(t){let s='';
  s+=G(270,800,1.05,0,NX.devilbridge({},t));
  if(t>33.0){const q=EZ.out(sg(t,33.0,33.6));s+=G(470,0,1,0,P(`M0 790 L0 ${f1(790-q*365)}`,ST(K.red,3))+P('M-10 790 L10 790 M-10 425 L10 425',ST(K.red,3),q)+G(0,600,1,0,pill('muy alto',{sz:12,w:800,fill:K.red})),q);}
  s+=pillA(270,250,'parecía imposible',sg(t,34.5,34.75),{fill:K.ink,sz:17,w:800});
  s+=actor('grano',{t0:33.0,path:[[33.0,100]],emo:[[33.0,7,0],[35.8,2,0]],s:.6,y:()=>790,face:()=>1,look:()=>1},t);
  if(t>37.6)s+=G(270,470,.75,0,NX.devil({emo:'smug'},t-37.7));
  return s;}
/* 7 · no es el único · Irlanda del Norte · 40.000 columnas · Calzada del Gigante (recurso nuevo causeway) */
function s7(t){let s='';
  if(t<41.9){s+=G(270,470,1,0,NX.map({focus:'Reino Unido',zoom:9,zoomAt:-.3,highlight:['Reino Unido','Irlanda'],pins:[[CAUSEWAY[0],CAUSEWAY[1],'Irlanda del Norte']],w:480,h:460},t-40.2+.2));
    if(t<40.4)s+=G(0,0,1,0,Rc(0,0,540,960,'#141212',0,`opacity:${f2(1-ao(t,40.2,.25))}`)+Ts(270,500,'no es el único',46,{it:true,fill:'#fff',stroke:'#fff'}),1-ao(t,40.2,.25));}
  else{s+=G(270,760,1,0,NX.causeway({rise:sg(t,42.0,43.6)},t));
    if(t>42.3)s+=G(270,300,1,0,Rc(-150,-58,300,116,'#fff',16,OL(2.6))+Tn(0,-20,'COLUMNAS DE PIEDRA',13,800,{fill:'#555',ls:.06})+G(0,28,1,0,NX.counter({value:40000,sz:46,dur:1},t-42.3)),ap(t,42.3,.35));
    s+=pillA(270,420,'Calzada del Gigante',sg(t,45.0,45.25),{fill:'url(#gRP)',sz:18,w:800});}
  return s;}
/* 8 · la leyenda: el gigante Finn MacCool la construyó para ir a pelearse a Escocia (recurso nuevo giant) */
function s8(t){let s='';
  s+=G(330,760,.9,0,NX.causeway({rise:EZ.io(sg(t,46.5,48.5))},t));
  s+=G(120,760,.85,0,NX.giant({},t-46.4));
  s+=pillA(130,390,'Finn MacCool',sg(t,49.0,49.25),{fill:K.green,sz:16,w:800});
  if(t>51.5){s+=G(420,340,1,0,P('M-50 0 L40 0 M24 -16 L42 0 L24 16',ST(K.ink,6))+G(0,-36,1,0,pill('Escocia',{sz:15,w:800,fill:K.blue})),ap(t,51.6,.35));}
  return s;}
/* 9 · el escocés era enorme · su mujer lo disfrazó de bebé */
function s9(t){let s='';
  s+=G(400,780,1.15,0,NX.giant({c:'#2a37d7',beard:'#5a3119'},t-52.7));
  s+=pillA(400,290,'el escocés: ¡enorme!',sg(t,54.2,54.45),{fill:K.blue,sz:15,w:800});
  s+=G(130,780,.7,0,NX.giant({baby:t>55.5,emo:t<55.5?'scared':'ok'},t-52.8));
  if(t>55.3&&t<56.0)s+=G(130,600,1,0,Ci(0,0,90*(1-sg(t,55.3,56.0))+20,'#fff',`opacity:${f2(1-sg(t,55.3,56.0))}`));
  s+=pillA(130,480,'disfrazado de bebé',sg(t,56.0,56.25),{fill:'url(#gRP)',sz:14,w:800});
  return s;}
/* 10 · «si el bebé es así de grande… ¿cómo será el padre?» · huye y rompe la calzada */
function s10(t){let s='';
  s+=G(270,760,1,0,NX.causeway({break:EZ.in2(sg(t,61.6,63.6))},t));
  if(t<61.4){s+=G(400,600,.8,0,NX.giant({c:'#2a37d7',beard:'#5a3119',emo:t>59.8?'scared':'ok'},t-58.0));
    s+=G(110,640,.45,0,NX.giant({baby:true},t-58.1));
    if(t>58.1)s+=G(300,230,1,0,Rc(-180,-50,360,100,'#fff',30,OL(2.4))+Ci(80,62,10,'#fff',OL(2))+Ci(100,84,6,'#fff',OL(2))+Tn(0,-10,'si el bebé es así…',18,700)+Tn(0,22,'¿cómo será el padre?',20,800,{fill:K.red}),ap(t,58.1,.35));}
  else{const q=EZ.in2(sg(t,61.4,63.0));s+=G(lerp(400,620,q),600,.8,0,NX.giant({c:'#2a37d7',beard:'#5a3119',emo:'scared'},t-58.0));
    s+=pillA(270,300,'¡huye y rompe la calzada!',sg(t,62.0,62.25),{fill:K.ink,sz:16,w:800});}
  return s;}
/* 11 · ¿la verdad? lava: hace 50-60 millones de años se enfrió, se encogió y se agrietó en columnas de seis lados */
function s11(t){let s='';
  const cool=sg(t,69.5,71.4);
  s+=G(270,520,1.05,0,NX.causeway({top:true,rise:t<69.6?0:EZ.out(sg(t,69.6,71.4))},t));
  s+=G(270,520,1,0,Rc(-250,-230,500,330,mixc('#ff6a1f','#c6c6c6',cool),20,`opacity:${f2(1-cool*.95)}`)+[...Array(8)].map((_,i)=>Ci(-200+hs(i)*400,-180+hs(i+3)*250,10+hs(i)*18,'#ffd23f',`opacity:${f2((1-cool)*(.4+.4*Math.sin(t*3+i)))}`)).join(''));
  if(t<65.4)s+=G(270,380,1,0,stampA(0,0,t-64.3,'¿LA VERDAD?',{c:K.blue,sz:30,r:-5}));
  if(t>65.3&&t<69.4)s+=G(270,380,1,0,Ts(0,0,'lava',80,{it:true,fill:'#fff',stroke:'#fff'}),ap(t,65.4,.35)*(1-ao(t,69.1,.3)));
  s+=pillA(270,200,'hace 50-60 millones de años',sg(t,67.0,67.25),{fill:K.ink,sz:15,w:800});
  s+=pillA(130,780,'se enfrió',sg(t,69.7,69.95),{fill:K.blue,sz:14,w:800});
  s+=pillA(270,780,'se encogió',sg(t,70.4,70.65),{fill:K.blue,sz:14,w:800});
  s+=pillA(410,780,'se agrietó',sg(t,71.1,71.35),{fill:K.blue,sz:14,w:800});
  if(t>72.4){let d='';for(let k=0;k<6;k++){const a=Math.PI/3*k;d+=(k?'L':'M')+f1(Math.cos(a)*30)+' '+f1(Math.sin(a)*30);}s+=G(270,520,1+.05*Math.sin(t*5),0,P(d+'Z',ST(K.red,5)),ao(t,72.4,.3));
    s+=pillA(270,650,'casi todas de 6 lados',sg(t,72.8,73.05),{fill:K.red,sz:15,w:800});}
  return s;}
/* 12 · en la isla escocesa de Staffa hay columnas iguales */
function s12(t){let s='';
  s+=G(270,480,1,0,NX.map({center:[-6.4,55.8],zoom:22,zoomAt:-.3,highlight:['Reino Unido','Irlanda'],pins:[[CAUSEWAY[0],CAUSEWAY[1],'Calzada del Gigante'],[STAFFA[0],STAFFA[1],'Staffa']],arcs:[[CAUSEWAY,STAFFA]],w:480,h:440},t-74.4+.2));
  s+=pillA(270,230,'curiosamente…',sg(t,74.7,74.95),{fill:K.ink,sz:16,w:800});
  s+=pillA(270,740,'columnas iguales',sg(t,77.5,77.75),{fill:'url(#gRP)',sz:17,w:800});
  return s;}
/* 13 · Cracovia, Polonia · bajo el castillo de Wawel, la cueva del dragón (recurso nuevo wawel) */
function s13(t){let s='';
  if(t<80.8){s+=G(270,480,1,0,NX.map({focus:'Polonia',zoom:9,zoomAt:-.3,highlight:['Polonia'],pins:[[KRAKOW[0],KRAKOW[1],'Cracovia']],w:480,h:420},t-78.9+.2));}
  else{s+=G(270,760,1,0,NX.wawel({},t-80.8));
    s+=pillA(270,250,'castillo de Wawel',sg(t,81.1,81.35),{fill:K.ink,sz:17,w:800});
    if(t>82.6){s+=G(420,720,1,0,_pulse(t-82.6,30,K.red,3,1.1));s+=pillA(420,640,'cueva del dragón',sg(t,82.7,82.95),{fill:K.red,sz:14,w:800});}}
  return s;}
/* 14 · un zapatero le dejó una oveja rellena de azufre (recurso nuevo sulfursheep) */
function s14(t){let s=groundLine(1,720);
  s+=G(430,720,1,0,P('M-70 0 L-70 -110 Q0 -190 70 -110 L70 0Z','fill:#1a1410;'+OL(2.4)));
  s+=G(250,720,1.3,0,NX.sulfursheep({},t-85.9));
  s+=G(100,720,.75,0,blobS({T:t,c:'#9a4a2f',ph:3}),ap(t,85.2,.35));
  s+=pillA(100,560,'un zapatero',sg(t,85.3,85.55),{fill:K.ink,sz:14,w:800});
  s+=pillA(270,420,'rellena de azufre',sg(t,87.3,87.55),{fill:'#c9a200',sz:16,w:800,tc:K.ink});
  return s;}
/* 15 · le ardía la tripa, bebió del Vístula… y reventó (recurso nuevo dragon) */
function s15(t){let s=Rc(0,720,540,240,'#7fb0e0')+groundLine(1,720);
  if(t<92.1)s+=G(200,720,.9,0,NX.dragon({emo:'hot',bloat:EZ.io(sg(t,88.8,92.0)),drink:t>90.0},t));
  else s+=G(200,720,.9,0,NX.dragon({burst:sg(t,92.1,93.0)},t));
  s+=pillA(200,330,'le ardía la tripa',sg(t,88.9,89.15),{fill:K.orange,sz:15,w:800});
  s+=pillA(430,690,'río Vístula',sg(t,91.0,91.25),{fill:K.blue,sz:14,w:800});
  return s;}
/* 16 · hoy, en la entrada de la cueva, un dragón de bronce que echa fuego de verdad (con gas) */
function s16(t){let s=groundLine(1,760);
  s+=G(100,760,.8,0,NX.dragon({bronze:true,fire:sg(t,96.2,96.6)},t));
  s+=pillA(200,300,'dragón de bronce',sg(t,95.4,95.65),{fill:'#8a6a3a',sz:16,w:800});
  s+=pillA(400,520,'¡fuego de verdad!',sg(t,96.5,96.75),{fill:K.red,sz:15,w:800});
  s+=pillA(400,580,'con gas',sg(t,97.7,97.95),{fill:K.ink,sz:15,w:800});
  return s;}
/* 17 · en la puerta de la catedral cuelgan sus huesos… seguramente de ballena o de mamut (recurso nuevo bones) */
function s17(t){let s='';
  s+=G(270,0,1,0,P('M-160 960 L-160 300 Q0 160 160 300 L160 960',`fill:#e9ddc4;${OL(2.6)}`)+P('M-110 960 L-110 330 Q0 230 110 330 L110 960','fill:#5a3a22;'+OL(2.4)));
  s+=G(270,330,1.1,0,NX.bones({q:t>101.3},t-99.8));
  s+=pillA(270,180,'catedral de Wawel',sg(t,99.3,99.55),{fill:K.ink,sz:15,w:800});
  s+=actor('garbanzo',{t0:101.2,path:[[101.2,450]],emo:[[101.2,9,0]],s:.7,y:()=>860,face:()=>-1,look:()=>-1},t);
  if(t>102.6)s+=card(140,620,'¿DE...?','ballena',K.blue,t-102.7,170);
  if(t>103.2)s+=card(140,730,'¿O DE...?','mamut',K.brown,t-103.3,170);
  return s;}
/* 18 · gigantes, diablos y dragones: cuando algo parecía imposible, le buscaban un autor imposible */
function s18(t){let s=groundLine(1);
  s+=G(90,GY,.5,0,NX.giant({},t-104.2));
  s+=G(250,GY,1.0,0,NX.devil({emo:'smug'},t-105.0));
  if(t>105.6)s+=G(385,GY,.42,0,NX.dragon({},t-105.6),ap(t,105.6,.35));
  if(t>106.7)s+=G(270,300,1,0,Rc(-190,-60,380,120,'#fff',16,OL(2.6))+Tn(0,-18,'algo parecía imposible…',17,700)+Tn(0,22,'→ un autor imposible',22,800,{fill:K.red}),ap(t,106.8,.35));
  return s;}
/* 19 · pregunta */
function s19(t){let s=groundLine(1);
  s+=G(270,600,.7,0,NX.devilbridge({},t));
  s+=actor('pipa',{t0:111.0,path:[[111.0,100]],emo:[[111.0,2,0],[113.6,3,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('lenteja',{t0:111.1,path:[[111.1,440]],emo:[[111.1,10,0],[113.8,3,0]],s:.75,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,700,'Te leo en comentarios',sg(t,114.7,114.95),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,116.0,116.6)));
  s+=G(0,0,1,0,Ts(270,352,'Diablos, gigantes',30),ao(t,116.05,.3))+G(0,0,1,0,Ts(270,398,'y dragones',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,116.15,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Smithsonian Magazine · Wikipedia · Enciclopèdia Catalana',9.5,600)+Tn(270,474,'Kraków In Your Pocket · Diputació de Barcelona',9.5,600),ao(t,116.5,.3));
  s+=G(270,800,.7,0,NX.devilbridge({},t),ao(t,116.5,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:5.5,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:8.8,draw:s3,in:{type:'zoom',dur:.45,fx:270,fy:480,z:6}},
  {id:'4',a:15.3,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'5',a:22.9,draw:s5,in:{type:'glitch',dur:.3}},
  {id:'6',a:32.7,draw:s6,in:{type:'whipU',dur:.32}},
  {id:'7',a:38.7,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:46.4,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:52.6,draw:s9,in:{type:'whipD',dur:.32}},
  {id:'10',a:58.0,draw:s10,in:{type:'whipU',dur:.32}},
  {id:'11',a:64.2,draw:s11,in:{type:'glitch',dur:.3}},
  {id:'12',a:74.3,draw:s12,in:{type:'zoom',dur:.45,fx:270,fy:480,z:6}},
  {id:'13',a:78.9,draw:s13,in:{type:'whipL',dur:.32}},
  {id:'14',a:84.0,draw:s14,in:{type:'whipU',dur:.32}},
  {id:'15',a:88.1,draw:s15,in:{type:'whipL',dur:.32}},
  {id:'16',a:93.0,draw:s16,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'17',a:98.3,draw:s17,in:{type:'whipD',dur:.32}},
  {id:'18',a:104.1,draw:s18,in:{type:'whipL',dur:.32}},
  {id:'19',a:110.9,draw:s19,in:{type:'whipU',dur:.32}},
  {id:'END',a:116.0,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:46.45,t1:48.9,y:200,lines:[{txt:'según la',sz:34,t:[46.5,47.0]},{txt:'*leyenda*',sz:56,t:[47.1],gap:1.15}]},
 {t0:110.95,t1:115.9,y:190,lines:[{txt:'¿conoces algún',sz:34,t:[111.1,111.7]},{txt:'*lugar* así?',sz:52,t:[112.0,113.0],gap:1.15}]}
];
