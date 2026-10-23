/* ===== NOTICIA · El iPhone Duo, primer iPhone plegable, sale a la venta (23/10/2026) ===== */
DUR=79.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const box=(x,y,top,big,lt,o={})=>G(x,y,EZ.back(sg(lt,0,.3))*(1+.025*Math.sin(lt*2.4)),0,Rc(-(o.w||170),-62,2*(o.w||170),124,'#fff',16,OL(2.6))+Tn(0,-20,top,14,800,{fill:'#555',ls:.06})+Tn(0,30,big,o.sz||42,800,{fill:o.c||K.ink}),cl(lt*4));

/* 1 · fotograma 0: el móvil gigante se abre y se cierra + ÚLTIMA HORA; luego «AGOTADO» (casi nadie podrá llevárselo) */
function s1(t){let s='';
  const op=t<2.6?EZ.io(sg(t,-.4,1.2)):1-EZ.io(sg(t,2.6,3.4));
  s+=G(270,520,1.25,-4+2*Math.sin(t*2),NX.foldphone({open:op,crease:1},t+.6));
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'A la venta desde hoy',y:0},t+.4));
  if(t>3.3)s+=G(270,560,1,0,NX.stamp({type:'falso',text:'AGOTADO',r:-10,sz:38},t-3.3));
  if(t>4.3)s+=pillA(270,700,'casi nadie se lo lleva hoy',sg(t,4.3,4.55),{fill:K.ink,sz:17,w:800});
  return s;}
/* 2 · se llama iPhone Duo, el primer plegable de Apple */
function s2(t){let s=groundLine(1);
  s+=G(270,440,.95,0,NX.foldphone({open:EZ.io(sg(t,6.4,7.6)),dims:0},t-6));
  s+=pillA(270,235,'iPhone Duo',sg(t,6.6,6.85),{fill:'url(#gRP)',sz:26,w:800});
  if(t>7.8)s+=G(290,610,1,0,Rc(-150,-28,300,56,K.ink,14)+Tn(0,9,'1.er plegable de Apple',20,800,{fill:'#fff'}),ap(t,7.8,.35));
  s+=actor('pipa',{t0:6.2,path:[[6.2,80]],emo:[[6.2,7,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* 3 · llega este viernes a más de 70 países, entre ellos España */
function s3(t){let s='';
  s+=G(150,380,1,0,NX.calendar({from:23,to:23,month:'OCT'},t-9.6));
  s+=pillA(150,480,'viernes',sg(t,10.1,10.35),{fill:K.ink,sz:16,w:800});
  if(t>10.8)s+=G(390,400,.85,0,NX.globe({},t-10.8));
  if(t>11.6)s+=G(390,560,1,0,Rc(-110,-36,220,72,'#fff',14,OL(2.4))+G(0,24,1,0,NX.counter({value:70,prefix:'+',sz:34,dur:.6},t-11.6))+Tn(0,-20,'PAÍSES',12,800,{fill:'#555',ls:.08}),ap(t,11.6,.3));
  if(t>13.3)s+=G(270,700,1,0,Rc(-120,-30,240,60,'#fff',14,OL(2.4))+Rc(-104,-16,44,32,'#c60b1e',3)+Rc(-104,-8,44,16,'#ffc400')+Tn(16,9,'España',22,800),ap(t,13.3,.35));
  return s;}
/* 4 · cerrado 5,4″ → abierto 7,6″, casi una tableta pequeña */
function s4(t){let s='';
  const op=EZ.io(sg(t,19.3,20.4));
  s+=G(270,470,1.15,0,NX.foldphone({open:op,dims:t<19.2?sg(t,16.6,17.6):sg(t,20.6,21.4),clock:'10:00'},t-14.3));
  s+=pillA(270,175,op<.5?'cerrado':'abierto',op<.5?sg(t,14.5,14.75):sg(t,19.6,19.85),{fill:K.ink,sz:20,w:800});
  if(t>22.9)s+=G(270,700,1,0,Rc(-150,-28,300,56,'#fff',14,OL(2.4))+Tn(0,9,'casi una tableta',22,800,{fill:K.orange}),ap(t,22.9,.35));
  return s;}
/* 5 · el precio: EE. UU. 1.999 $, España 2.339 €, 2 TB 3.839 € */
function s5(t){let s='';
  if(t<26.4)s+=G(270,470,1,0,NX.bigq({},t-24.9),1-ao(t,26.15,.25));
  if(t>26.9&&t<30.4)s+=G(270,520,.8,0,NX.coins({},t-26.9),1-ao(t,30.0,.3));
  if(t>26.1)s+=box(270,250,'ESTADOS UNIDOS · DESDE','1.999 $',t-26.15);
  if(t>30.3)s+=box(270,420,'ESPAÑA · DESDE','2.339 €',t-30.4,{c:'url(#gRP)'});
  if(t>34.2)s+=box(270,590,'VERSIÓN DE 2 TB','3.839 €',t-34.3,{c:K.red});
  if(t>35.4)s+=actor('garbanzo',{t0:35.4,path:[[35.4,270]],emo:[[35.4,0,0],[36.0,15,1]],s:.6,y:()=>GY+20,face:()=>-1,look:()=>-1},t);
  return s;}
/* 6 · reservas agotadas en minutos; entrega en enero de 2027 */
function s6(t){let s='';
  s+=G(270,470,1.1,0,NX.soldout({at:1.7,mins:5,date:'enero de 2027'},t-38.3));
  s+=pillA(270,175,'reservas',sg(t,39.2,39.45),{fill:K.ink,sz:20,w:800});
  return s;}
/* 7 · pocas unidades en las tiendas */
function s7(t){let s='';
  s+=G(230,700,1.1,0,NX.fewstock({left:2,n:4,empty:EZ.io(sg(t,45.6,47.3))},t-45.2));
  s+=pillA(270,175,'Apple avisa',sg(t,45.4,45.65),{fill:K.ink,sz:18,w:800});
  return s;}
/* 8 · ¿cómo se dobla una pantalla? cristal rígido vs lámina flexible */
function s8(t){let s='';
  const b=t<52.0?0:t<53.4?EZ.io(sg(t,52.0,53.2))*.5:.5+EZ.io(sg(t,54.0,55.0))*.5;
  if(t>48.7)s+=G(270,560,1.15,0,NX.flexscreen({bend:b,labels:t>50.6},t-(t>50.6?50.6:48.7)),ap(t,48.7,.35));
  if(t>50.9)s+=pillA(270,700,'píxeles',sg(t,51.1,51.35),{fill:'#555',sz:14,w:800});
  return s;}
/* 9 · una bisagra muy precisa: se dobla siempre por el mismo sitio */
function s9(t){let s='';
  const f=t<58.6?EZ.io(sg(t,56.4,58.2)):1-EZ.io(sg(t,58.8,60.2));
  s+=G(270,480,1.1,0,NX.foldside({fold:f,loop:t>57.6&&t<59.2},t-55.5));
  s+=pillA(270,250,'bisagra',sg(t,56.0,56.25),{fill:'url(#gRP)',sz:20,w:800});
  if(t>58.3)s+=G(270,700,1,0,Rc(-140,-28,280,56,'#fff',14,OL(2.4))+Tn(0,9,'siempre por el mismo sitio',17,800),ap(t,58.3,.35));
  return s;}
/* 10 · dos baterías, una en cada mitad (rayos X) */
function s10(t){let s='';
  s+=G(270,480,1.15,0,NX.foldphone({open:1,xray:sg(t,60.8,61.2)},t-61.0));
  s+=pillA(270,175,'2 baterías',sg(t,61.0,61.25),{fill:K.green2,sz:22,w:800});
  return s;}
/* 11 · 254 gramos y, cerrado, 11 mm */
function s11(t){let s='';
  s+=G(270,300,1,0,Rc(-150,-62,300,124,'#fff',16,OL(2.6))+Tn(0,-20,'PESO',14,800,{fill:'#555',ls:.08})+G(0,32,1,0,NX.counter({value:254,suffix:' g',sz:46,dur:.8},t-63.4)),ap(t,63.3,.35));
  s+=G(320,600,.95,0,NX.foldside({fold:EZ.io(sg(t,65.3,66.4)),thick:'11 mm'},t-63.0),ao(t,64.8,.3));
  return s;}
/* 12 · huella en el botón lateral en vez de Face ID */
function s12(t){let s='';
  s+=G(200,500,1.1,0,NX.foldphone({open:0,touch:sg(t,70.4,70.9),clock:'10:00'},t-68.6));
  s+=pillA(400,320,'Face ID',sg(t,69.6,69.85),{fill:'#8e8e8e',sz:24,w:800});
  if(t>70.1)s+=G(400,320,1,0,DR('M-75 0 L75 0',ST(K.red,6),EZ.out(sg(t,70.1,70.4))));
  if(t>70.5)s+=G(400,470,1.1,0,NX.fingerprint({glow:1},t-70.5));
  if(t>71.3)s+=pillA(400,560,'botón lateral',sg(t,71.3,71.55),{fill:'url(#gRP)',sz:16,w:800});
  return s;}
/* 13 · pregunta */
function s13(t){let s=groundLine(1);
  s+=actor('pipa',{t0:72.7,path:[[72.7,120]],emo:[[72.7,14,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:72.9,path:[[72.9,420]],emo:[[72.9,9,1]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=G(270,470,.75,0,NX.foldphone({open:.5+.5*Math.sin((t-72.7)*2.2)},t-72.7));
  s+=pillA(270,640,'Te leo en comentarios',sg(t,75.2,75.45),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,76.3,76.9)));
  s+=G(0,0,1,0,Ts(270,352,'El primer iPhone',30),ao(t,76.35,.3))+G(0,0,1,0,Ts(270,398,'plegable',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,76.45,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Apple (ficha técnica) · Xataka Móvil · Vozpópuli',9.5,600)+Tn(270,474,'Digital Trends · iDrop News · The Mac Observer · 23/10/2026',9.5,600),ao(t,76.8,.3));
  s+=G(270,640,.8,0,NX.foldphone({open:1},t-76.3),ao(t,76.8,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:5.9,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:9.5,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:14.3,draw:s4,in:{type:'zoom',dur:.45,fx:270,fy:470,z:6}},
  {id:'5',a:24.85,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:38.3,draw:s6,in:{type:'whipD',dur:.32}},
  {id:'7',a:45.2,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:48.5,draw:s8,in:{type:'glitch',dur:.3}},
  {id:'9',a:55.5,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:60.6,draw:s10,in:{type:'iris',dur:.4,fx:270,fy:480,r0:10}},
  {id:'11',a:63.0,draw:s11,in:{type:'whipL',dur:.32}},
  {id:'12',a:68.6,draw:s12,in:{type:'whipD',dur:.32}},
  {id:'13',a:72.6,draw:s13,in:{type:'whipL',dur:.32}},
  {id:'END',a:76.3,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:0,t1:3.2,y:175,lines:[{txt:'el iPhone que',sz:36,t:[-.5,-.4,-.3]},{txt:'se *dobla*',sz:58,t:[-.2,-.1],gap:1.15}]},
 {t0:48.6,t1:50.7,y:330,lines:[{txt:'¿cómo se dobla',sz:36,t:[48.8,49.1,49.2]},{txt:'una *pantalla*?',sz:52,t:[49.5,49.7],gap:1.15}]},
 {t0:72.7,t1:76.2,y:190,lines:[{txt:'¿te comprarías',sz:34,t:[72.9,73.0]},{txt:'uno *plegable*?',sz:46,t:[73.6,73.9],gap:1.15}]}
];
