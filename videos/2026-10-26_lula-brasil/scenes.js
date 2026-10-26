/* ===== NOTICIA · Lula gana la segunda vuelta en Brasil y Flávio Bolsonaro no reconoce el resultado (26/10/2026) ===== */
DUR=80.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const FAM=(k,T,x={})=>figure(famoso(k,Object.assign({T,name:undefined},x)));
const box=(x,y,top,big,lt,o={})=>G(x,y,EZ.back(sg(lt,0,.3))*(1+.025*Math.sin(lt*2.4)),0,Rc(-(o.w||170),-62,2*(o.w||170),124,'#fff',16,OL(2.6))+Tn(0,-20,top,14,800,{fill:'#555',ls:.06})+Tn(0,30,big,o.sz||42,800,{fill:o.c||K.ink}),cl(lt*4));
const CL=K.red, CF=K.blue;

/* 1 · fotograma 0: recuento en marcha + ÚLTIMA HORA; gana Lula; su rival no lo reconoce */
function s1(t){let s=groundLine(1);
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Elecciones en Brasil',y:0},t+.4));
  if(t<2.2)s+=G(270,580,.9,0,NX.brazilflag({},t+.6),1-ao(t,1.7,.4));
  s+=G(285,300,1.15,0,NX.countrace({a:'Lula',b:'Flávio',ca:CL,cb:CF,p:EZ.io(sg(t,0,1.7)),keys:[[0,48.6,51.4],[40,49.2,50.8],[75,50.6,49.4],[100,51.8,48.2]],win:sg(t,1.8,2.1)},t+.4));
  if(t>1.8)s+=G(150,GY,1.2,0,FAM('lula',t,{emo:'happy'}),ap(t,1.8,.3));
  if(t>1.9)s+=pillA(150,470,'Lula da Silva',sg(t,1.9,2.15),{fill:CL,sz:15,w:800});
  if(t>3.9)s+=G(390,GY,1.2,0,FAM('flavio',t,{emo:'neutral'}),ap(t,3.9,.3));
  if(t>4.0)s+=pillA(390,470,'Flávio Bolsonaro',sg(t,4.0,4.25),{fill:CF,sz:15,w:800});
  if(t>4.9)s+=G(390,410,1,0,NX.stamp({type:'falso',text:'NO LO RECONOCE',r:-8,sz:24},t-4.9));
  return s;}
/* 2 · 100 % contado: Lula 51,8 % · Flávio 48,2 % */
function s2(t){let s='';
  s+=G(270,250,1.2,0,NX.urnabr({press:sg(t,6.7,7.3),confirm:sg(t,7.4,7.7),fimAt:1.1},t-6.6));
  if(t>8.0)s+=pillA(270,400,'100 % escrutado',sg(t,8.0,8.25),{fill:K.ink,sz:18,w:800});
  if(t>9.15)s+=box(270,500,'LULA DA SILVA',_fmt(51.79*EZ.out(sg(t,9.3,10.6)),1)+' %',t-9.15,{c:CL,sz:46});
  if(t>12.3)s+=box(270,660,'FLÁVIO BOLSONARO',_fmt(48.21*EZ.out(sg(t,12.4,13.7)),1)+' %',t-12.3,{c:CF,sz:46});
  return s;}
/* 3 · más de 4.400.000 votos de diferencia */
function s3(t){let s='';
  s+=G(270,320,1,0,Rc(-200,-80,400,160,'#fff',18,OL(2.8))+Tn(0,-36,'DIFERENCIA',14,800,{fill:'#555',ls:.08})+G(0,36,1,0,NX.counter({value:4400000,prefix:'+',sz:50,dur:1.4},t-16.2))+Tn(0,62,'votos',14,700,{fill:'#555'}),ap(t,15.9,.35));
  s+=G(150,620,.9,0,NX.ballot({},t-16.4));
  s+=G(390,620,.9,0,NX.ballot({},t-17.0));
  return s;}
/* 4 · no era lo que se esperaba: 1.ª vuelta, Flávio 47 % · Lula 45 % */
function s4(t){let s='';
  s+=G(120,380,1.1,0,NX.calendar({from:4,to:4,month:'OCT'},t-21.6));
  if(t>22.0)s+=pillA(120,500,'1.ª vuelta',sg(t,22.0,22.25),{fill:K.ink,sz:16,w:800});
  if(t>24.3)s+=G(370,330,.8,0,Rc(-170,-70,340,140,'#fff',16,OL(2.6))+Tn(0,-26,'FLÁVIO',16,800,{fill:'#555',ls:.06})+Tn(0,40,'47 %',58,800,{fill:CF}),ap(t,24.3,.3));
  if(t>27.6)s+=G(370,490,.8,0,Rc(-170,-70,340,140,'#fff',16,OL(2.6))+Tn(0,-26,'LULA',16,800,{fill:'#555',ls:.06})+Tn(0,40,'45 %',58,800,{fill:CL}),ap(t,27.6,.3));
  if(t>24.9)s+=G(235,380,1,0,P('M0 -12 L18 0 L0 12Z','fill:'+K.ink),ao(t,24.9,.3));
  s+=groundLine(1);
  if(t>20.0)s+=actor('garbanzo',{t0:20.0,path:[[20.0,270]],emo:[[20.0,15,1]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* 5 · las encuestas: empate técnico */
function s5(t){let s='';
  s+=G(0,0,1,0,Ts(270,250,'Encuestas',40)+Tn(270,282,'antes de la 2.ª vuelta',14,600,{fill:'#555'}),ao(t,29.7,.3));
  s+=G(270,440,1.25,0,NX.countrace({a:'Flávio',b:'Lula',ca:CF,cb:CL,head:false,dec:0,p:EZ.io(sg(t,29.8,30.8)),keys:[[0,0,0],[100,51,49]]},t-29.7));
  if(t>31.6)s+=G(270,600,1,0,NX.stamp({type:'desarrollo',text:'EMPATE TÉCNICO',r:-6,sz:30},t-31.6));
  return s;}
/* 6 · Lula, 80 años, cuarto mandato (2003-2010, 2023…) */
function s6(t){let s=groundLine(1);
  s+=G(110,GY,1,0,FAM('lula',t,{emo:'happy'}),ap(t,33.0,.3));
  if(t>33.7)s+=G(110,440,1,0,Ci(0,0,52,'#fff',OL(2.6))+G(0,14,1,0,NX.counter({value:80,sz:40,dur:.6},t-33.7))+Tn(0,34,'años',11,700,{fill:'#555'}),ap(t,33.7,.3));
  const cards=[['2003','2006',36.9],['2007','2010',38.4],['2023','2026',40.4],['2027','…',35.3]];
  cards.forEach(([a,b,t0],i)=>{if(t<t0)return;const y=200+i*125,hi=i===3;
    s+=G(370,y,1,0,Rc(-120,-48,240,96,hi?'url(#gRP)':'#fff',14,OL(2.6))+Tn(-86,10,(i+1)+'.º',28,800,{fill:hi?'#fff':K.ink})+Tn(30,10,a+'–'+b,22,800,{fill:hi?'#fff':K.ink}),ap(t,t0,.3));});
  if(t>35.4)s+=pillA(370,138,'cuarto mandato',sg(t,35.4,35.65),{fill:K.ink,sz:16,w:800});
  return s;}
/* 7 · Flávio, senador e hijo de Jair Bolsonaro, en prisión por intentar un golpe */
function s7(t){let s=groundLine(1);
  s+=G(150,GY,1,0,FAM('flavio',t),ap(t,42.0,.3));
  if(t>44.1)s+=pillA(150,470,'senador',sg(t,44.1,44.35),{fill:CF,sz:16,w:800});
  if(t>44.6)s+=G(270,600,1,0,P('M-60 0 L60 0',ST(K.ink,3,'stroke-dasharray:6 6'))+pill('hijo de',{sz:12,w:800}),ao(t,44.6,.3));
  if(t>45.7)s+=G(390,GY,1,0,FAM('jair',t),ap(t,45.7,.3));
  if(t>45.8)s+=pillA(390,470,'Jair Bolsonaro',sg(t,45.8,46.05),{fill:K.ink,sz:15,w:800});
  if(t>47.4)s+=G(390,330,.7,0,NX.gavel({label:'en prisión'},t-47.4));
  if(t>48.4)s+=pillA(390,210,'intento de golpe de Estado',sg(t,48.4,48.65),{fill:K.red,sz:14,w:800});
  return s;}
/* 8 · ¿por qué no reconoce la derrota? un juez del Supremo alarga la votación 2 h */
function s8(t){let s='';
  if(t>52.2)s+=G(270,430,1.1,0,NX.extendclock({from:17,to:19,p:EZ.io(sg(t,54.2,55.6)),at:3.5,label:'votación'},t-52.2));
  if(t>53.2)s+=pillA(270,215,'un juez del Supremo',sg(t,53.2,53.45),{fill:K.ink,sz:16,w:800});
  if(t>56.9)s+=G(270,650,1,0,Rc(-190,-26,380,52,'#fff',14,OL(2.4))+Tn(0,8,'a petición de la campaña de Lula',17,800,{fill:CL}),ap(t,56.9,.3));
  if(t>58.9)s+=pillA(270,712,'problemas de transporte',sg(t,58.9,59.15),{fill:K.ink,sz:15,w:800});
  return s;}
/* 9 · Flávio: no se reabrieron las urnas en todas partes; pedirá anular; sin pruebas por ahora */
function s9(t){let s='';
  s+=G(150,300,.62,0,NX.urnabr({press:0,confirm:0,fim:true,fimAt:-1},t-60.7));
  s+=G(390,300,.62,0,NX.urnabr({press:0,confirm:0,fim:true,fimAt:-1},t-60.9));
  if(t>61.7)s+=G(390,300,1,-8,Rc(-110,-20,220,40,K.red,6,OL(2))+Tn(0,8,'¿REABIERTA?',18,800,{fill:'#fff'}),ap(t,61.7,.3));
  if(t>62.4)s+=pillA(270,420,'según Flávio, no en todas partes',sg(t,62.4,62.65),{fill:K.ink,sz:14,w:800});
  if(t>64.2)s+=G(270,540,1,0,NX.stamp({type:'urgente',text:'PIDE ANULAR',r:-6,sz:32},t-64.2));
  if(t>66.4)s+=G(270,680,1,0,Rc(-170,-28,340,56,'#fff',14,OL(2.4))+Tn(0,9,'sin pruebas, por ahora',20,800,{fill:K.ink}),ap(t,66.4,.3));
  return s;}
/* 10 · más de 158 millones llamados a votar */
function s10(t){let s='';
  s+=G(270,380,1,0,NX.map({focus:'Brasil',zoom:3.2,zoomAt:.1,highlight:['Brasil'],w:480,h:430},t-68.7));
  if(t>69.6)s+=G(270,680,1,0,Rc(-190,-56,380,112,'#fff',16,OL(2.6))+Tn(0,-20,'LLAMADOS A VOTAR',13,800,{fill:'#555',ls:.08})+G(0,30,1,0,NX.counter({value:158,prefix:'+',suffix:' millones',sz:38,dur:.9},t-69.6)),ap(t,69.6,.3));
  return s;}
/* 11 · pregunta */
function s11(t){let s=groundLine(1);
  s+=G(270,420,.85,0,NX.brazilflag({},t-73.4));
  s+=actor('pipa',{t0:73.5,path:[[73.5,100]],emo:[[73.5,9,1]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('lenteja',{t0:73.7,path:[[73.7,440]],emo:[[73.7,9,1]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  if(t>76.0)s+=pillA(270,640,'Te leo en comentarios',sg(t,76.0,76.25),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,77.5,78.1)));
  s+=G(0,0,1,0,Ts(270,352,'Lula gana',30),ao(t,77.55,.3))+G(0,0,1,0,Ts(270,398,'en Brasil',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,77.65,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'TSE · AP (La Opinión) · Gazeta do Povo · InfoMoney',9.5,600)+Tn(270,474,'El Financiero · Primicias/AFP · 25-26/10/2026',9.5,600),ao(t,78.0,.3));
  s+=G(270,640,.6,0,NX.brazilflag({},t-77.5),ao(t,78.0,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:6.55,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:15.75,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:19.6,draw:s4,in:{type:'glitch',dur:.3}},
  {id:'5',a:29.6,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:32.85,draw:s6,in:{type:'whipD',dur:.32}},
  {id:'7',a:41.85,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:50.0,draw:s8,in:{type:'iris',dur:.4,fx:270,fy:430,r0:10}},
  {id:'9',a:60.5,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:68.6,draw:s10,in:{type:'zoom',dur:.45,fx:270,fy:380,z:6}},
  {id:'11',a:73.3,draw:s11,in:{type:'whipL',dur:.32}},
  {id:'END',a:77.4,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:19.7,t1:21.5,y:250,lines:[{txt:'no era lo que',sz:36,t:[19.8,19.95,20.1]},{txt:'se *esperaba*',sz:52,t:[20.4,20.6],gap:1.15}]},
 {t0:50.1,t1:52.1,y:330,lines:[{txt:'¿por qué no',sz:36,t:[50.2,50.4,50.6]},{txt:'*reconoce*?',sz:56,t:[50.8],gap:1.15}]},
 {t0:73.4,t1:77.3,y:175,lines:[{txt:'¿cambiará',sz:36,t:[73.6]},{txt:'*algo*?',sz:56,t:[74.8],gap:1.15}]}
];
