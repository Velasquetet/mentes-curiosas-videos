/* ===== NOTICIA · Trump pone en pausa las sanciones de la ley Graham contra Rusia (orden ejecutiva, 16/10/2026) ===== */
/* Tono: neutral, sin opinión. Mismo trato a todos los políticos; solo citas reales con fuente. */
DUR=76.8;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const FAM=(k,T,x={})=>figure(famoso(k,Object.assign({T,name:undefined},x)));
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* fila de bolas de un color (congresistas) */
function bloc(x,t,t0,c,emo,seed){let s='';for(let i=0;i<4;i++){const q=ap(t,t0+i*.08,.3);if(q>0)s+=G(x-75+i*50,GY-(i%2)*6,q,0,blobS({T:t,ph:seed+i*5,c,emo,s:.9}));}return s;}

/* ---------- 1 · gancho: EE. UU. frena las sanciones ---------- */
function s1(t){let s=raysBg(270,470,t*8,22,'#d3d3d3',ao(t,.1,.4))+groundLine(1);
  s+=G(270,470,1,0,NX.pausedlaw({title:'SANCIONES',at:1.1,label:'EN PAUSA'},t-.15));
  s+=G(80,GY,.55,0,FAM('trump',t),ap(t,2.6,.3));
  s+=pillA(400,650,'contra Rusia',sg(t,5.0,5.25),{sz:15,w:800});
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',y:0},t),1);
  return s;}
/* ---------- 2 · a unos días de entrar en vigor ---------- */
function s2(t){let s=groundLine(1);
  s+=G(270,430,1.15,0,NX.calendar({from:16,to:18,month:'OCT',dur:1.0},t-6.1));
  s+=pillA(270,570,'a unos días de entrar en vigor',sg(t,7.8,8.05),{fill:'url(#gRP)',sz:15,w:800});
  s+=actor('garbanzo',{t0:6.3,path:[[6.3,450]],emo:[[6.3,7,0]],s:.5,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 3 · el viernes, Trump firma una orden ejecutiva ---------- */
function s3(t){let s=groundLine(1);
  if(t<10.2){s+=G(270,430,1.1,0,NX.calendar({from:16,to:16,month:'OCT'},t-9.25));
    s+=pillA(270,560,'viernes',sg(t,9.5,9.75),{fill:'url(#gRP)',sz:16,w:800});}
  else{s+=G(130,GY,.8,0,FAM('trump',t),ap(t,10.2,.3));
    s+=pillA(130,480,'Donald Trump',sg(t,10.7,10.95),{sz:14,w:800});
    s+=G(370,460,.75,0,NX.signing({title:'ORDEN EJECUTIVA'},t-11.0));}
  return s;}
/* ---------- 4 · deja en pausa una ley del Congreso ---------- */
function s4(t){let s=groundLine(1);
  s+=G(270,330,.68,0,NX.pausedlaw({title:'LEY',at:.5},t-12.6));
  s+=pillA(270,500,'aprobada por amplia mayoría',sg(t,15.3,15.55),{sz:14,w:800});
  s+=bloc(150,t,16.6,'#2a37d7','happy',3)+bloc(390,t,17.3,'#e2264a','happy',7);
  s+=pillA(150,600,'demócratas',sg(t,16.8,17.05),{sz:13,w:800});
  s+=pillA(390,600,'republicanos',sg(t,17.5,17.75),{sz:13,w:800});
  s+=stampA(270,415,t-19.6,'FIRMADA EN SEPTIEMBRE',{r:-5,sz:18,c:K.blue});
  return s;}
/* ---------- 5 · Ley Lindsey Graham ---------- */
function s5(t){let s=G(270,480,1,0,NX.spot({who:'graham'},t-20.85));
  s+=pillA(270,250,'Ley Lindsey Graham',sg(t,22.6,22.85),{fill:'url(#gRP)',sz:17,w:800});
  s+=pillA(270,748,'senador · murió en julio',sg(t,23.7,23.95),{sz:13,w:800});
  return s;}
/* ---------- 6 · ¿qué decía esa ley? ---------- */
function s6(t){let s=qDeco(t,ao(t,25.0,.4),3,6)+groundLine(1);
  s+=actor('lenteja',{t0:25.0,path:[[25.0,270]],emo:[[25.0,10,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 7 · castigar a quien haga negocios con Rusia ---------- */
function s7(t){let s='';
  s+=G(270,470,1,0,NX.map({focus:'Rusia',zoom:1.6,zoomAt:.1,highlight:['Rusia'],w:500,h:420},t-26.6));
  s+=pillA(270,250,'negocios con Rusia',sg(t,29.4,29.65),{sz:16,w:800});
  s+=stampA(270,640,t-27.7,'CASTIGO',{r:-6,sz:24,c:K.red});
  return s;}
/* ---------- 8 · aranceles de hasta el 100 % a los 5 mayores compradores ---------- */
function barrelS(n){return El(0,-26,20,6,'#1b1b22',OL(1.6))+Rc(-20,-26,40,52,'#2a2a33',0,OL(1.6))+El(0,26,20,6,'#2a2a33',OL(1.6))+Ci(0,0,13,'#f6a81a')+Tn(0,5,String(n),13,800,{fill:'#141212'});}
function s8(t){let s=groundLine(1);
  s+=G(270,360,1,0,NX.tariff({pct:'hasta 100 %'},t-31.3));
  for(let i=0;i<5;i++){const q=ap(t,34.0+i*.12,.3);if(q>0)s+=G(110+i*80,GY-34,q,0,barrelS(i+1));}
  s+=pillA(270,590,'los 5 que más petróleo y gas ruso compran',sg(t,34.3,34.55),{fill:'url(#gRP)',sz:13,w:800});
  return s;}
/* ---------- 9 · es decir: puede costar el doble ---------- */
function s9(t){let s=groundLine(1);
  s+=pillA(270,250,'si compras petróleo a Rusia',sg(t,38.0,38.25),{sz:15,w:800});
  s+=G(270,470,.95,0,NX.oiltoll({from:'RUSIA',to:'TÚ',mid:'EE. UU.',pct:'+100 %'},t-38.9));
  s+=stampA(270,640,t-42.1,'EL DOBLE',{r:-5,sz:26,c:K.red});
  return s;}
/* ---------- 10 · dejar a Rusia sin dinero para la guerra ---------- */
function s10(t){let s=groundLine(1);
  if(t<45.8){s+=G(250,520,1-.3*sg(t,45.5,45.8),0,NX.coins({dir:'down',label:'ingresos de Rusia'},t-43.1),dis(t,45.5,.3));}
  else{s+=G(270,470,1,0,NX.map({focus:'Ucrania',zoom:3,zoomAt:.1,highlight:['Ucrania'],w:480,h:420},t-45.85));
    s+=pillA(270,250,'guerra en Ucrania',sg(t,46.0,46.25),{fill:'url(#gRP)',sz:16,w:800});}
  return s;}
/* ---------- 11 · «interés nacional» ---------- */
function s11(t){let s=groundLine(1);
  s+=G(110,GY,.75,0,FAM('trump',t),ap(t,47.45,.3));
  s+=G(360,430,.8,0,NX.email({},t-47.9));
  s+=pillA(360,280,'al Congreso',sg(t,48.6,48.85),{sz:14,w:800});
  s+=pillA(330,600,'«interés nacional»',sg(t,50.1,50.35),{fill:'url(#gRP)',sz:18,w:800});
  return s;}
/* ---------- 12 · hasta que la Casa Blanca decida ---------- */
function s12(t){let s=groundLine(1);
  s+=G(270,540,.95,0,NX.whitehouse({label:'CASA BLANCA'},t-51.55));
  s+=G(270,230,.45,0,NX.pausedlaw({title:'LEY',at:.2},t-51.7),dis(t,54.9));
  s+=stampA(270,700,t-53.4,'SIN FECHA DE FIN',{r:-4,sz:20,c:K.orange});
  return s;}
/* ---------- 13 · Zelenski: «solo ayuda a los rusos» ---------- */
function s13(t){let s=groundLine(1);
  s+=pillA(270,180,'reacciones',sg(t,55.4,55.65),{sz:15,w:800});
  s+=G(110,GY,.75,0,FAM('zelenski',t),ap(t,55.7,.3));
  s+=pillA(110,480,'Zelenski',sg(t,57.7,57.95),{sz:14,w:800});
  s+=G(330,360,.72,0,NX.quote({text:'Solo ayuda a los rusos',who:'Volodímir Zelenski'},t-58.3));
  return s;}
/* ---------- 14 · críticas en Washington + el diésel ---------- */
function s14(t){let s=groundLine(1);
  if(t<64.6){s+=G(270,300,.55,0,NX.building({flag:['#e2264a','#fff','#e2264a','#fff','#e2264a'],label:'WASHINGTON'},t-61.2));
    s+=bloc(150,t,62.8,'#2a37d7','worried',11)+bloc(390,t,63.6,'#e2264a','worried',17);
    s+=pillA(150,600,'demócratas',sg(t,62.9,63.15),{sz:13,w:800});
    s+=pillA(390,600,'republicanos',sg(t,63.7,63.95),{sz:13,w:800});
    s+=stampA(270,470,t-62.2,'CRÍTICAS',{r:-6,sz:24,c:K.red});}
  else{s+=stampA(270,260,t-65.0,'HACE UNA SEMANA',{r:-4,sz:20,c:K.blue});
    s+=G(270,420,.9,0,NX.deal({label:'otro acuerdo con Rusia'},t-66.6));
    s+=G(250,GY-40,1.4,0,barrelS('D'),ap(t,68.2,.3));
    s+=pillA(400,640,'diésel',sg(t,68.7,68.95),{fill:'url(#gRP)',sz:16,w:800});}
  return s;}
/* ---------- 15 · pregunta ---------- */
function s15(t){let s='';
  s+=G(270,340,.6,0,NX.sanctions({label:'SANCIONES'},t-69.7));
  const opts=[['A','Sí, funcionan'],['B','No mucho'],['C','Depende']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,71.0+i*.12,.3);if(q>0)s+=G(270,500+i*50,1,0,optionRow(340,l,txt,0),cl(q*2));});
  const cq=ap(t,73.0,.3);if(cq>0){const typed='Yo creo que…'.slice(0,Math.floor(12*sg(t,73.1,73.9)));s+=G(270,660,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:69.7,path:[[69.7,70]],emo:[[69.7,9,0]],s:.6,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:69.8,path:[[69.8,470]],emo:[[69.8,10,0]],s:.6,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,74.8,75.5)));
  s+=G(0,0,1,0,Ts(270,352,'EE. UU. pausa',30),ao(t,74.9,.3))+G(0,0,1,0,Ts(270,398,'las sanciones a Rusia',36,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,75.0,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'AP · ABC News · CNBC · The Washington Post',10,600)+Tn(270,474,'The Moscow Times · Euronews · 16-17/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,75.1,.3));
  s+=G(270,GY,.5,0,FAM('trump',t),ao(t,75.2,.3));
  s+=groundLine(1);
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:5.95,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:9.15,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:12.45,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'5',a:20.7,draw:s5,in:{type:'iris',dur:.4,fx:270,fy:480,r0:10}},
  {id:'6',a:24.9,draw:s6,in:{type:'whipD',dur:.32}},
  {id:'7',a:26.45,draw:s7,in:{type:'zoom',dur:.45,fx:270,fy:430,z:8}},
  {id:'8',a:30.95,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:37.1,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:42.9,draw:s10,in:{type:'whipL',dur:.32}},
  {id:'11',a:47.25,draw:s11,in:{type:'whipD',dur:.32}},
  {id:'12',a:51.4,draw:s12,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'13',a:55.15,draw:s13,in:{type:'glitch',dur:.35}},
  {id:'14',a:60.95,draw:s14,in:{type:'whipL',dur:.32}},
  {id:'15',a:69.55,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'END',a:74.6,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:2.5,y:170,lines:[{txt:'EE. UU. ha',sz:32,t:[.05,1.04]},{txt:'*frenado*',sz:52,t:[1.11],gap:1.15}]},
 {t0:2.62,t1:5.0,y:170,lines:[{txt:'las sanciones',sz:32,t:[2.62,2.79]},{txt:'más *duras*',sz:46,t:[3.35,3.55],gap:1.15}]},
 {t0:6.03,t1:7.7,y:170,lines:[{txt:'a solo unos *días*',sz:42,t:[6.72,6.80,7.09,7.35]}]},
 {t0:11.38,t1:12.45,y:170,lines:[{txt:'orden *ejecutiva*',sz:42,t:[11.62,11.95]}]},
 {t0:12.57,t1:15.2,y:150,lines:[{txt:'deja en *pausa*',sz:44,t:[12.57,12.70,13.15]},{txt:'una ley',sz:30,t:[13.53,13.76],gap:1.1}]},
 {t0:25.02,t1:26.45,lines:[{txt:'¿qué decía',sz:34,t:[25.02,25.23]},{txt:'esa *ley*?',sz:54,t:[25.65,25.86]}]},
 {t0:31.05,t1:33.9,y:170,lines:[{txt:'*aranceles*',sz:52,t:[32.05]},{txt:'de hasta el 100 %',sz:30,t:[32.60,32.69,32.92,33.06,33.3],gap:1.1}]},
 {t0:37.25,t1:38.0,y:170,lines:[{txt:'es *decir*',sz:50,t:[37.25,37.54]}]},
 {t0:43.04,t1:45.7,y:170,lines:[{txt:'dejar a Rusia',sz:32,t:[43.79,44.10,44.16]},{txt:'sin *dinero*',sz:48,t:[44.55,44.86],gap:1.15}]},
 {t0:47.41,t1:49.9,y:170,lines:[{txt:'Trump ha',sz:32,t:[47.41,47.83]},{txt:'*comunicado*',sz:48,t:[47.91],gap:1.15}]},
 {t0:51.79,t1:53.3,y:150,lines:[{txt:'la pausa *durará*',sz:42,t:[51.64,51.79,52.14]}]},
 {t0:69.71,t1:73.0,y:140,lines:[{txt:'¿crees que las',sz:30,t:[69.71,70.16,70.26]},{txt:'*sanciones* sirven?',sz:40,t:[70.42,70.97],gap:1.15}]},
 {t0:73.11,t1:74.6,y:140,lines:[{txt:'te leo en',sz:30,t:[73.11,73.31,73.59]},{txt:'*comentarios*',sz:48,t:[73.70]}]}
];
