/* ===== NOTICIA · Serbia: la Lista Estudiantil gana las elecciones y Vučić reconoce la derrota (26/10/2026) ===== */
DUR=100.9;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const FAM=(k,T,x={})=>figure(famoso(k,Object.assign({T,name:undefined},x)));
const box=(x,y,top,big,lt,o={})=>G(x,y,EZ.back(sg(lt,0,.3))*(1+.025*Math.sin(lt*2.4)),0,Rc(-(o.w||170),-62,2*(o.w||170),124,'#fff',16,OL(2.6))+Tn(0,-20,top,14,800,{fill:'#555',ls:.06})+Tn(0,30,big,o.sz||42,800,{fill:o.c||K.ink}),cl(lt*4));
const CEST=K.pink, CVUC=K.blue;

/* 1 · fotograma 0: fiesta de noche + ÚLTIMA HORA + marcha de estudiantes; Vučić reconoce la derrota */
function s1(t){let s=G(270,GY+30,1.12,0,NX.fireworks({n:7,seed:3,h:820},t+1.2));
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Elecciones en Serbia',y:0},t+.4));
  s+=G(150,300,.62,0,NX.serbiaflag({},t+.6),1-ao(t,1.8,.3));
  if(t>1.9)s+=G(400,560,1.05,0,FAM('vucic',t,{emo:'neutral'}),ap(t,1.9,.3));
  if(t>2.1)s+=pillA(400,595,'Aleksandar Vučić',sg(t,2.1,2.35),{fill:CVUC,sz:15,w:800});
  if(t>4.3)s+=G(330,330,1,0,NX.stamp({type:'urgente',text:'RECONOCE LA DERROTA',r:-7,sz:20},t-4.3));
  s+=G(270,GY+14,1,0,NX.studentmarch({banner:'LISTA ESTUDIANTIL',hands:1,whistle:true,march:22},t+.8));
  if(t>6.6)s+=G(150,420,1,-6,Rc(-110,-26,220,52,'url(#gRP)',14,OL(2.4))+Tn(0,9,'¡ganan los estudiantes!',17,800,{fill:'#fff'}),ap(t,6.6,.3));
  return s;}
/* 2 · recuento: 96 % escrutado · 52,5 % frente a 39,3 % · provisional */
function s2(t){let s='';const z=1+.04*EZ.sine(sg(t,8.9,24.8));let c='';
  c+=G(275,250,1.05,0,NX.countrace({a:'Estud.',b:'Vučić',ca:CEST,cb:CVUC,p:EZ.io(sg(t,9.2,11.3)),keys:[[0,0,0],[96,52.54,39.29]],win:sg(t,15.1,15.4)},t-9.0));
  if(t>12.2)c+=pillA(270,92,'Comisión Electoral (RIK)',sg(t,12.2,12.45),{fill:K.ink,sz:16,w:800});
  if(t>14.0)c+=box(142,450,'Lista Estudiantil',_fmt(52.54*EZ.out(sg(t,14.2,15.6)),1).replace('.',',')+' %',t-14.0,{c:CEST,sz:40,w:118});
  if(t>18.7)c+=box(398,450,'Coalición de Vučić',_fmt(39.29*EZ.out(sg(t,18.8,20.2)),1).replace('.',',')+' %',t-18.7,{c:CVUC,sz:40,w:118});
  for(let k=0;k<7;k++){const t0=15.7+k*.45;if(t>t0&&t<t0+.6)s+=sparkA(142+(hs(k)-.5)*230,450+(hs(k+9)-.5)*150,t-t0,10+hs(k+3)*6,[K.pink,K.yellow,K.orange][k%3],.6);}
  if(t>23.0)c+=G(270,560,1,0,NX.stamp({type:'desarrollo',text:'DATOS PROVISIONALES',r:-5,sz:24},t-23.0));
  c+=groundLine(1);
  c+=actor('grano',{t0:15.0,path:[[15.0,110]],emo:[[15.0,16,0],[18.5,3,0],[22.8,9,0]],s:.72,y:()=>GY,face:()=>1,look:()=>1},t);
  c+=actor('pipa',{t0:18.6,path:[[18.6,430]],emo:[[18.6,7,0],[21.0,1,0]],s:.72,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s+G(270,480,z,0,G(-270,-480,1,0,c));}
/* 3 · escaños: 135-140 de 250; mayoría 126 */
function s3(t){let c='';const z=1+.025*EZ.sine(sg(t,24.8,35.2));
  c+=G(270,470,1.25,0,NX.parliament({groups:[[138,CEST,'Estudiantes'],[104,CVUC,'Vučić'],[8,'#9b9b9b','Otros']]},t-25.0));
  if(t>25.2)c+=G(270,200,1,0,Ts(0,0,'Escaños',40)+Tn(0,30,'proyección (CeSID-Ipsos)',13,600,{fill:'#555'}),ao(t,25.2,.3));
  if(t>27.0)c+=G(140,600,1+.03*Math.sin(t*3),-4,Rc(-110,-30,220,60,'#fff',14,OL(2.4))+Tn(0,10,'135 – 140',28,800,{fill:CEST}),ap(t,27.0,.3));
  if(t>30.2)c+=G(400,600,1+.03*Math.sin(t*3+1),4,Rc(-80,-30,160,60,'#fff',14,OL(2.4))+Tn(0,10,'de 250',26,800,{fill:K.ink}),ap(t,30.2,.3));
  if(t>32.1)c+=G(270,470,1,0,DR('M0 -78 L0 -240',ST(K.ink,2.6,'stroke-dasharray:6 6'),sg(t,32.1,32.6)));
  if(t>33.8)c+=pillA(270,700,'126 = mayoría absoluta',sg(t,33.8,34.05),{fill:'url(#gRP)',sz:17,w:800});
  for(let k=0;k<5;k++){const t0=28.0+k*.9;if(t>t0&&t<t0+.6)c+=sparkA(130+hs(k*2)*130,330+hs(k*5)*120,t-t0,9,K.pink,.6);}
  return G(270,470,z,0,G(-270,-470,1,0,c));}
/* 4 · participación ~69 %, la más alta desde 1992 (ruptura de Yugoslavia) */
function s4(t){let s='';
  s+=G(270,230,1,0,Ts(0,0,'Participación',40),ao(t,35.4,.3));
  s+=G(270,330,1.15,0,NX.pctBar({pct:68.78,dec:1,color:'url(#gRP)'},t-35.6));
  if(t>37.9)s+=pillA(270,410,'la más alta desde la ruptura de Yugoslavia',sg(t,37.9,38.15),{fill:K.ink,sz:15,w:800});
  if(t>36.4)s+=G(270,590,1,0,NX.map({focus:'Serbia',zoom:5,zoomAt:.2,highlight:['Serbia'],w:440,h:260},t-36.4),ao(t,36.4,.3));
  if(t>41.2)s+=G(400,665,1,-4,Rc(-100,-44,200,88,'#fff',16,OL(2.6))+Ts(0,24,'1992',62,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,41.2,.35));
  return s;}
/* 5 · Vučić: su partido gobierna desde 2012; PM o presidente desde 2014; en septiembre deja la presidencia */
function s5(t){let s=groundLine(1);
  s+=G(270,300,1.15,0,NX.timeline({items:[['2012','gobierna su partido'],['2014','primer ministro o presidente'],['sept. 2026','deja la presidencia']],step:2.45,w:300},t-44.8));
  s+=G(395,GY-6,.62,0,NX.building({flag:['#c6363c','#0c4076','#ffffff']},t-44.3));
  s+=G(130,GY,1.05,0,FAM('vucic',t),ap(t,43.5,.3));
  if(t>43.7)s+=pillA(130,515,'Vučić',sg(t,43.7,43.95),{fill:CVUC,sz:16,w:800});
  if(t>51.6)s+=G(380,440,1,0,Rc(-130,-30,260,60,'#fff',14,OL(2.4))+Tn(0,-4,'se presenta a',13,700,{fill:'#555'})+Tn(0,18,'primer ministro',20,800,{fill:K.ink}),ap(t,51.6,.3));
  return s;}
/* 6 · no esperó al recuento: discurso en televisión y cita real */
function s6(t){let s='';
  s+=G(270,290,1.05,0,NX.tvspeech({who:'vucic',label:'Aleksandar Vučić',sub:'Belgrado · 25/10, por la noche'},t-53.9));
  if(t>54.3&&t<58.2)s+=pillA(270,520,'sin esperar al recuento',sg(t,54.3,54.55),{fill:K.ink,sz:15,w:800});
  if(t>58.2)s+=G(270,620,.95,0,NX.quote({text:'Está claro que hemos perdido estas elecciones',who:'Vučić, en televisión (Reuters, AP)'},t-58.2));
  return s;}
/* 7a · ¿de dónde sale esta lista? */
function s7a(t){let s=groundLine(1);
  s+=actor('pipa',{t0:61.2,path:[[61.2,150]],emo:[[61.2,9,1]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:61.4,path:[[61.4,400]],emo:[[61.4,9,1]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* 7 · Novi Sad, noviembre de 2024: la marquesina de la estación se vino abajo; 16 muertos (tono serio) */
function s7(t){let s='';
  s+=G(270,620,.94+.1*EZ.sine(sg(t,63.2,71.8)),0,NX.stationcanopy({name:'NOVI SAD',fall:sg(t,68.9,70.0),flowers:sg(t,70.5,71.0),flAt:70.5-63.2,n:8},t-63.2));
  if(t>64.1)s+=pillA(270,170,'Novi Sad · noviembre de 2024',sg(t,64.1,64.35),{fill:K.ink,sz:17,w:800});
  if(t>70.3)s+=G(270,250,1,0,Rc(-150,-30,300,60,'#fff',14,OL(2.4))+Tn(0,10,'16 personas murieron',22,800,{fill:K.ink}),ao(t,70.3,.4));
  return s;}
/* 8 · los estudiantes salen a la calle: casi dos años de protestas */
function s8(t){let s=groundLine(1);
  s+=G(270,GY,1,0,NX.studentmarch({banner:'ESTUDIANTES',hands:sg(t,72.8,73.4),whistle:t>73.4,march:26,n:8},t-72.0));
  s+=G(400,215,.55,0,NX.serbiaflag({},t-72.1));
  if(t>72.4)s+=G(140,200,.8,-10+_osc(t,1.2,6),NX.megaphone({},t-72.4));
  if(t>74.2)s+=pillA(270,330,'piden responsabilidades',sg(t,74.2,74.45),{fill:K.ink,sz:18,w:800});
  if(t>75.8)s+=G(270,460,1,0,Rc(-170,-44,340,88,'#fff',16,OL(2.6))+Tn(0,-12,'PROTESTAS',13,800,{fill:'#555',ls:.08})+Tn(0,24,'casi 2 años',32,800,{fill:CEST}),ap(t,75.8,.3));
  return s;}
/* 9 · la lista: un cardiólogo al frente y candidatos casi desconocidos; ¿quién será primer ministro? */
function s9(t){let s=groundLine(1);
  s+=G(270,250,.62,0,NX.ecg({},t-78.4),1-ao(t,86.4,.3));
  if(t>79.6&&t<86.6)s+=pillA(270,350,'encabeza la lista: un cardiólogo',sg(t,79.6,79.85),{fill:K.ink,sz:15,w:800});
  if(t>80.4&&t<86.6)s+=pillA(270,392,'Ilija Srdanović',sg(t,80.4,80.65),{fill:CEST,sz:17,w:800});
  [[110,83.6,'profesores',['glasses'],'#2a37d7'],[270,84.4,'actores',['bow'],'#e73568'],[430,85.2,'agricultores',['hat'],'#3f9b4f']].forEach(([x,t0,lab,acc,c],i)=>{if(t<t0-.2)return;
    s+=G(x,GY,1.1,0,blobS({T:t,ph:i*2+1,c,acc,shape:['capsule','ball','square'][i],emo:'happy'}),ap(t,t0-.2,.3));
    s+=pillA(x,GY-120,lab,sg(t,t0,t0+.25),{fill:K.ink,sz:14,w:800});});
  if(t>78.3&&t<83.6){const q=ap(t,78.3,.35)*(1-ao(t,83.1,.3));let p=Rc(-150,-120,300,250,'#fff',10,OL(2.4))+Rc(-150,-120,300,40,CEST,10)+Rc(-150,-92,300,12,CEST)+Tn(0,-94,'LISTA ESTUDIANTIL',16,800,{fill:'#fff',ls:.08});
    for(let i=0;i<7;i++){const y=-50+i*26,on=sg(t,78.6+i*.12,78.9+i*.12);p+=Tn(-128,y+5,(i+1)+'.',12,800,{a:'start',fill:'#777'});if(i===0&&t>80.4)p+=Rc(-110,y-10,236,22,'rgba(255,46,99,.15)',6)+Tn(-104,y+5,'Ilija Srdanović · cardiólogo',13,800,{a:'start',fill:CEST});else p+=Rc(-104,y-4,(150+hs(i)*70)*on,8,'#d6d6d6',4);}
    p+=Tn(0,118,'250 candidatos',12,700,{fill:'#555'});s+=G(270,590,q,-2+_osc(t,.4,1.5),p);}
  if(t>86.7)s+=G(270,330,.8,0,NX.bigq({},t-86.7));
  if(t>87.6)s+=pillA(270,470,'¿primer ministro?',sg(t,87.6,87.85),{fill:'url(#gRP)',sz:18,w:800});
  return s;}
/* 10 · fuegos artificiales y miles de personas en Belgrado y Novi Sad */
function s10(t){let s=G(270,GY+30,1.12,0,NX.fireworks({n:8,seed:9,h:820},t-89.4));
  s+=G(270,GY+4,.95,0,NX.crowd({n:22,w:560},t-89.6));
  if(t>93.1)s+=pillA(160,250,'Belgrado',sg(t,93.1,93.35),{fill:K.ink,sz:18,w:800});
  if(t>93.8)s+=pillA(380,300,'Novi Sad',sg(t,93.8,94.05),{fill:K.ink,sz:18,w:800});
  return s;}
/* 11 · pregunta */
function s11(t){let s=groundLine(1);
  s+=G(270,430,.8,0,NX.serbiaflag({},t-94.8));
  s+=actor('pipa',{t0:94.9,path:[[94.9,100]],emo:[[94.9,9,1]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('lenteja',{t0:95.1,path:[[95.1,440]],emo:[[95.1,9,1]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  if(t>98.0)s+=pillA(270,660,'Te leo en comentarios',sg(t,98.0,98.25),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,99.1,99.7)));
  s+=G(0,0,1,0,Ts(270,352,'Los estudiantes',30),ao(t,99.15,.3))+G(0,0,1,0,Ts(270,398,'ganan en Serbia',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,99.25,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Comisión Electoral (RIK) vía N1 y Telegraf · Reuters · AP',9.5,600)+Tn(270,474,'Al Jazeera · Euronews · ABC News · 25-26/10/2026',9.5,600),ao(t,99.5,.3));
  s+=G(270,640,.6,0,NX.serbiaflag({},t-99.1),ao(t,99.5,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:8.85,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:24.75,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:35.15,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'5',a:43.25,draw:s5,in:{type:'whipD',dur:.32}},
  {id:'6',a:53.75,draw:s6,in:{type:'glitch',dur:.3}},
  {id:'7a',a:61.05,draw:s7a,in:{type:'whipL',dur:.32}},
  {id:'7',a:63.15,draw:s7,in:{type:'iris',dur:.4,fx:270,fy:520,r0:10}},
  {id:'8',a:71.8,draw:s8,in:{type:'whipU',dur:.32}},
  {id:'9',a:78.1,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'10',a:89.4,draw:s10,in:{type:'zoom',dur:.45,fx:270,fy:400,z:6}},
  {id:'11',a:94.65,draw:s11,in:{type:'whipL',dur:.32}},
  {id:'END',a:98.95,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:61.2,t1:63.0,y:300,lines:[{txt:'¿de dónde sale',sz:36,t:[61.25,61.45,61.6]},{txt:'esta *lista*?',sz:52,t:[62.2,62.4],gap:1.15}]},
 {t0:94.8,t1:98.8,y:175,lines:[{txt:'¿pueden cambiar',sz:36,t:[96.3,96.6]},{txt:'un *país*?',sz:56,t:[97.0,97.15],gap:1.15}]}
];
