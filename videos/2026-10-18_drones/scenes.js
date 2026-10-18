/* ===== NOTICIA · Ataque masivo con drones sobre Rusia: San Petersburgo (17–18/10/2026) ===== */
DUR=96.2;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const FAM=(k,T,x={})=>figure(famoso(k,Object.assign({T,name:undefined},x)));
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
const UA=[31,49],MSK=[37.62,55.75],SPB=[30.31,59.94];

/* ---------- 1 · más de mil drones en una noche (impacto desde el fotograma 0) ---------- */
function s1(t){let s='';
  s+=G(270,720+_osc(t,.5,2),1.08,0,NX.droneswarm({n:60,count:1015,grow:2.4,h:420},t+.6));
  s+=pillA(270,755,'según Rusia',sg(t,2.9,3.15)*dis(t,4.3),{sz:15,w:800});
  s+=pillA(270,755,'del sábado al domingo',sg(t,4.45,4.7),{fill:'url(#gRP)',sz:15,w:800});
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Rusia · Ucrania',y:0},t+.4));
  return s;}
/* ---------- 2 · uno de los mayores ataques de Ucrania ---------- */
function s2(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Ucrania',zoom:2.2,zoomAt:.05,highlight:['Ucrania','Rusia'],arcs:[[UA,MSK],[UA,SPB],[UA,[39.7,47.2]],[UA,[45,51.5]]],w:480,h:470},t-5.0));
  s+=pillA(270,660,'uno de los mayores ataques',sg(t,6.85,7.1),{fill:K.red,sz:15,w:800});
  s+=pillA(270,705,'desde que empezó la guerra',sg(t,8.3,8.55),{sz:13,w:800});
  return s;}
/* ---------- 3 · Ministerio de Defensa ruso: 1.015 drones, ~15 regiones, Moscú ---------- */
function s3(t){let s='';
  if(t<13.75){s+=groundLine(1);
    s+=G(270,530,1,0,NX.building({flag:['#ffffff','#2a37d7','#e2264a']},t-10.0));
    s+=pillA(270,620,'Ministerio de Defensa ruso',sg(t,10.5,10.75),{sz:14,w:800});s+=G(270,700,ap(t,12.3,.35),0,Tn(0,0,'1.015',76,800,{fill:K.red}));
    s+=pillA(270,745,'drones derribados',sg(t,13.0,13.25),{sz:14,w:800});}
  else{s+=G(270,500,1,0,NX.map({focus:'Rusia',center:[50,57],zoom:3.2,zoomAt:.05,highlight:['Rusia'],pins:[[MSK[0],MSK[1],'Moscú']],w:480,h:440},t-13.0));
    s+=pillA(270,250,'unas 15 regiones',sg(t,14.4,14.65),{fill:'url(#gRP)',sz:16,w:800});}
  return s;}
/* ---------- 4 · San Petersburgo, segunda ciudad de Rusia ---------- */
function s4(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Rusia',center:SPB,zoom:14,zoomAt:.05,highlight:['Rusia'],pins:[[SPB[0],SPB[1],'San Petersburgo']],w:480,h:440},t-16.7));
  s+=pillA(270,740,'2.ª ciudad de Rusia',sg(t,20.3,20.55),{fill:'url(#gRP)',sz:16,w:800});
  return s;}
/* ---------- 5 · arden dos instalaciones petroleras ---------- */
function s5(t){let s=groundLine(1,GY+40);
  s+=G(305,560,1.0+.05*EZ.io(sg(t,22.1,28.3)),0,NX.oilterminal({burn:2,fireAt:.5,tanks:5},t-22.15));
  s+=pillA(270,300,'2 instalaciones petroleras',sg(t,23.4,23.65),{fill:K.red,sz:15,w:800});
  s+=pillA(270,700,'Terminal Petrolera de San Petersburgo',sg(t,26.0,26.25),{sz:13,w:800});
  return s;}
/* ---------- 6 · centro de datos de VK y almacén de Ozon ---------- */
function s6(t){let s='';
  if(t<32.2){s+=G(270,560,1,0,NX.servers({},t-28.45));
    s+=pillA(270,330,'centro de datos',sg(t,30.1,30.35),{sz:15,w:800});
    s+=pillA(270,380,'red social VK',sg(t,31.6,31.85),{fill:'url(#gRP)',sz:15,w:800});
    s+=groundLine(1,690);}
  else{s+=groundLine(1);
    s+=G(270,GY,1,0,NX.warehouse({fire:1.3,brand:'OZON',brandC:'#2a37d7'},t-31.95));
    s+=pillA(270,300,'compras por internet',sg(t,34.6,34.85)*dis(t,36.3),{sz:15,w:800});
    s+=G(270,300,1,0,NX.stamp({type:'confirmado',text:'LO CONFIRMAN VK Y OZON'},t-36.5));}
  return s;}
/* ---------- 7 · Púlkovo sin vuelos · 20.000 personas sin luz ---------- */
function s7(t){let s='';
  if(t<42.35){s+=G(270,480,1,0,NX.departures({rows:[['10:15','MOSCÚ','SUSPENDIDO'],['10:40','KALININGRADO','SUSPENDIDO'],['11:05','SOCHI','SUSPENDIDO'],['11:30','EKATERIMBURGO','SUSPENDIDO'],['12:00','KAZÁN','SUSPENDIDO']]},t-40.4));
    s+=pillA(270,250,'aeropuerto de Púlkovo',sg(t,39.6,39.85),{fill:'url(#gRP)',sz:15,w:800});
    s+=pillA(270,710,'horas sin vuelos',sg(t,41.4,41.65),{sz:15,w:800});}
  else{s+=G(270,620,1,0,NX.blackout({},t-42.15));
    s+=pillA(270,300,'≈ 20.000 personas sin luz',sg(t,43.3,43.55),{fill:K.red,sz:16,w:800});}
  return s;}
/* ---------- 8 · víctimas (con respeto) ---------- */
function s8(t){let s=groundLine(1);
  s+=G(270,430,1.05,0,NX.keyPoints({items:['al menos 1 muerto','varios heridos'],step:1.9,w:360},t-45.6));
  s+=pillA(270,300,'según las autoridades rusas',sg(t,45.5,45.75),{sz:14,w:800});
  s+=G(270,620,1,0,NX.stamp({type:'desarrollo',text:'CIFRAS PROVISIONALES'},t-49.6));
  return s;}
/* ---------- 9 · ¿por qué petróleo y centros de datos? ---------- */
function s9(t){let s=qDeco(t,ao(t,51.5,.4),3,6)+groundLine(1);
  s+=actor('lenteja',{t0:51.5,path:[[51.5,270]],emo:[[51.5,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);
  return s;}
/* ---------- 10 · el petróleo paga la guerra; si arde, se retrasa ---------- */
function s10(t){let s=groundLine(1);
  s+=G(270,470,1,0,NX.warfunds({step:1.1,cut:EZ.out(sg(t,61.2,61.6))},t-55.15));
  s+=pillA(270,640,'exportaciones retrasadas',sg(t,62.6,62.85),{fill:K.red,sz:15,w:800});
  s+=pillA(270,690,'todo más caro',sg(t,64.4,64.65),{sz:15,w:800});
  return s;}
/* ---------- 11 · centros de datos: el cerebro de internet ---------- */
function s11(t){let s='';
  if(t<68.3){s+=G(270,520,1.1,0,NX.brain({},t-65.6));}
  else{s+=G(270,600,1,0,NX.servers({},t-68.35));s+=groundLine(1,730);
    s+=pillA(130,300,'apps',sg(t,69.4,69.65),{fill:'url(#gRP)',sz:15,w:800});
    s+=pillA(270,300,'pagos',sg(t,70.7,70.95),{fill:'url(#gRP)',sz:15,w:800});
    s+=pillA(410,300,'servicios',sg(t,71.3,71.55),{fill:'url(#gRP)',sz:15,w:800});}
  return s;}
/* ---------- 12 · Ucrania ya lo había anunciado: refinerías ---------- */
function s12(t){let s=groundLine(1);
  s+=G(285,GY-100,.95,0,NX.factory({smoke:1},t-73.3));
  s+=pillA(270,330,'Ucrania lo había anunciado',sg(t,74.3,74.55),{sz:15,w:800});
  s+=pillA(270,380,'refinerías rusas',sg(t,76.2,76.45),{fill:K.red,sz:15,w:800});
  return s;}
/* ---------- 13 · Trump pausó las sanciones (ayer) ---------- */
function s13(t){let s=groundLine(1);
  s+=G(330,470,.8,0,NX.pausedlaw({title:'SANCIONES',at:2.3,label:'EN PAUSA'},t-77.8));
  s+=G(110,GY,.75,0,FAM('trump',t),ap(t,79.1,.3));
  s+=pillA(330,680,'como os contamos ayer',sg(t,82.4,82.65),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* ---------- 14 · Rusia ataca la red eléctrica de Ucrania ---------- */
function s14(t){let s='';
  if(t<86.1){s+=G(270,500,1,0,NX.map({focus:'Ucrania',zoom:4,zoomAt:.05,highlight:['Ucrania'],w:480,h:440},t-83.0));}
  else{s+=G(270,620,1,0,NX.blackout({},t-85.95));
    s+=pillA(270,300,'red eléctrica de Ucrania',sg(t,86.9,87.15),{fill:K.red,sz:15,w:800});}
  return s;}
/* ---------- 15 · pregunta ---------- */
function s15(t){let s='';
  const opts=[['A','Sí, en la energía'],['B','No, en el frente'],['C','Un poco de todo'],['D','Cuéntamelo abajo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,89.0+i*.1,.3);if(q>0)s+=G(270+(1-EZ.out(sg(t,89.0+i*.1,89.3+i*.1)))*120,330+i*54,1,0,optionRow(340,l,txt,0),cl(q*2));});
  const cq=ap(t,91.6,.3);if(cq>0){const typed='Yo creo que…'.slice(0,Math.floor(12*sg(t,91.7,92.6)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:88.8,path:[[88.8,86]],emo:[[88.8,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:88.9,path:[[88.9,458]],emo:[[88.9,1,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,93.7,94.4)));
  s+=G(0,0,1,0,Ts(270,352,'Más de mil drones',30),ao(t,93.8,.3))+G(0,0,1,0,Ts(270,398,'sobre San Petersburgo',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,93.9,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'AP · Euronews · Reuters · AFP · Infobae',10.5,600)+Tn(270,474,'18/10/2026 · cifras provisionales',9.5,500,{fill:'#7a7a7a'}),ao(t,94.0,.3));
  s+=G(270,700,.45,0,NX.oilterminal({burn:2,fireAt:0,ship:false},t-94.0),ao(t,94.1,.3));
  s+=groundLine(1);
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:5.9,draw:s2,in:{type:'zoom',dur:.45,fx:270,fy:500,z:8}},
  {id:'3',a:9.85,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:17.45,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'5',a:22.0,draw:s5,in:{type:'zoom',dur:.45,fx:270,fy:500,z:8}},
  {id:'6',a:28.3,draw:s6,in:{type:'whipD',dur:.32}},
  {id:'7',a:38.6,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:45.15,draw:s8,in:{type:'whipU',dur:.32}},
  {id:'9',a:51.35,draw:s9,in:{type:'glitch',dur:.3}},
  {id:'10',a:55.0,draw:s10,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'11',a:65.45,draw:s11,in:{type:'whipU',dur:.32}},
  {id:'12',a:73.25,draw:s12,in:{type:'whipL',dur:.32}},
  {id:'13',a:77.6,draw:s13,in:{type:'whipD',dur:.32}},
  {id:'14',a:84.0,draw:s14,in:{type:'whipL',dur:.32}},
  {id:'15',a:88.6,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'END',a:93.5,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:2.45,y:170,lines:[{txt:'más de *mil* drones',sz:46,t:[.05,.41,.50,.69]},{txt:'en una sola noche',sz:30,t:[1.10,1.23,1.41,1.69],gap:1.15}]},
 {t0:6.14,t1:9.8,y:160,lines:[{txt:'*Ucrania*',sz:54,t:[7.80]},{txt:'contra Rusia',sz:30,t:[7.80,7.80],gap:1.15}]},
 {t0:10.0,t1:13.7,y:170,lines:[{txt:'según el Ministerio',sz:30,t:[10.01,10.46,10.56]},{txt:'de *Defensa* ruso',sz:42,t:[11.14,11.24,11.71],gap:1.15}]},
 {t0:14.0,t1:17.4,y:160,lines:[{txt:'incluida *Moscú*',sz:46,t:[16.06,16.74]}]},
 {t0:17.6,t1:21.9,y:160,lines:[{txt:'*San Petersburgo*',sz:50,t:[19.19,19.38]}]},
 {t0:22.18,t1:25.2,y:170,lines:[{txt:'se *incendiaron*',sz:46,t:[22.55,22.69]}]},
 {t0:38.81,t1:42.3,y:160,lines:[{txt:'parar los *vuelos*',sz:46,t:[40.62,40.94,41.11]}]},
 {t0:51.51,t1:54.95,y:170,lines:[{txt:'¿por qué',sz:30,t:[52.01,52.21]},{txt:'*petróleo*',sz:56,t:[53.06]},{txt:'y centros de datos?',sz:30,t:[53.59,53.66,54.09,54.17],gap:1.2}]},
 {t0:58.3,t1:60.85,y:170,lines:[{txt:'el *dinero*',sz:52,t:[58.48,58.56]},{txt:'para pagar la guerra',sz:30,t:[59.41,59.62,59.95,60.06],gap:1.15}]},
 {t0:61.0,t1:65.4,y:170,lines:[{txt:'si arde una *terminal*',sz:40,t:[60.91,61.21,61.48,61.66]}]},
 {t0:66.9,t1:68.3,y:170,lines:[{txt:'el *cerebro*',sz:54,t:[67.01,67.14]},{txt:'de internet',sz:30,t:[67.53,67.62],gap:1.15}]},
 {t0:77.75,t1:81.4,y:170,lines:[{txt:'sanciones en *pausa*',sz:42,t:[80.91,80.91,80.05]}]},
 {t0:84.15,t1:86.0,y:170,lines:[{txt:'mientras, *Rusia*',sz:46,t:[84.15,84.88]}]},
 {t0:88.78,t1:93.4,y:200,lines:[{txt:'¿se decide en la',sz:30,t:[90.08,90.33,90.91,91.00]},{txt:'*energía*?',sz:54,t:[91.11]}]}
];
