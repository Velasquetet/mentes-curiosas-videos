/* ===== NOTICIA · Tesla presenta el Roadster que salta (16/10/2026) ===== */
DUR=82.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function leader(x1,y1,x2,y2,p,c=K.ink,bend=-24){if(p<=0)return '';const mx=(x1+x2)/2,my=(y1+y2)/2+bend;
  return DR(`M${f1(x1)} ${f1(y1)} Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}`,ST(c,1.8),EZ.out(p))+(p>.9?Ci(x2,y2,3.2,c):'');}
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* desierto de Texas: sol, mesetas, suelo de arena */
function desert(T,gy=720,o={}){let s=G(o.sx||410,o.sy||430,1,0,sunS(80));
  s+=G(120+T*4,300,1,0,cloudS(90))+G(440+T*2,262,.7,0,cloudS(60));
  s+=G(90,gy-40,1,0,mesaS(260,150))+G(330,gy-40,1,0,mesaS(300,110))+G(520,gy-40,1,0,mesaS(220,170));
  s+=Rc(-40,gy-40,620,40,'#e9a75a')+P(`M-40 ${gy-40} L580 ${gy-40}`,ST(K.ink,1.6));
  s+=Rc(-40,gy,620,400,'#2f3036')+P(`M-40 ${gy} L580 ${gy}`,ST(K.ink,2.4));
  for(let i=0;i<8;i++){const x=((i*90-T*260)%720+720)%720-90;s+=Rc(x,gy+46,46,6,'#f4eee2',2);}
  s+=Rc(-40,gy+110,620,300,'#d99a52')+P(`M-40 ${gy+110} L580 ${gy+110}`,ST(K.ink,1.6));
  return s;}
function dust(x,y,lt,n=8){if(lt<0||lt>1.2)return '';let s='';for(let i=0;i<n;i++){const a=Math.PI*(1+i/(n-1)),q=EZ.out(sg(lt,0,1.2));s+=Ci(x+Math.cos(a)*90*q,y+Math.sin(a)*24*q-4,(6+hs(i)*8)*(1-q*.6),'#e7d3b5',`opacity:${f2(1-q)}`);}return s;}
/* coche que salta un obstáculo: q 0-1 del salto */
function jumpCar(x0,x1,y,h,q,T,k=.8,spin=0){const x=lerp(x0,x1,q),yy=y-Math.sin(Math.PI*q)*h,r=spin?-360*EZ.io(q)*spin:Math.sin(Math.PI*q*2)*-10;
  return G(x,yy,k,r,hypercarS({T,jets:q>0&&q<1?1-q*.6:0}));}

/* ---------- 1 · gancho: salta por encima de otros coches ---------- */
function s1(t){const T=t;let s=desert(T);
  s+=G(230,720,.42,0,hypercarS({c:'#2a37d7'}))+G(390,720,.55,0,semiTruckS({c:K.red}));
  const q=sg(t,1.6,3.6);
  s+=jumpCar(60,600,720,300,q,T,.62,0)+dust(560,730,t-3.6)+(t<1.6?G(lerp(-90,60,EZ.out(sg(t,0,1.6))),720,.62,0,hypercarS({T})):'');
  if(t>1.6&&t<3.6)s+=sparkA(330,500,t-2.4,12,K.pink,.8);
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',y:0},t),1);
  const push=1+.04*EZ.sine(sg(t,0,4.2));return G(270,640,push,0,G(-270,-640,1,0,s));}
/* ---------- 2 · no es un truco de cine ---------- */
function s2(t){const T=t;let s='';
  const inner=G(0,40,.45,Math.sin(T*3)*4,hypercarS({T,jets:1}));
  s+=G(270,470,ap(t,4.25,.35),0,cineS(inner,360,240,T));
  const x=EZ.out(sg(t,5.1,5.35));if(x>0)s+=G(270,470,1,0,P('M-150 -110 L150 110 M150 -110 L-150 110',ST(K.red,16,'opacity:.9')),x);
  s+=stampA(270,640,t-5.41,'ES REAL',{r:-6,sz:28,c:K.green});
  s+=actor('pipa',{t0:4.6,path:[[4.6,470]],emo:[[4.6,7,0]],s:.7,y:()=>GY+30,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 3 · el nuevo Roadster ---------- */
function s3(t){const T=t;let s=raysBg(270,520,t*16,22,'#d3d3d3',ao(t,6.2,.3));
  s+=Ci(270,640,170*ao(t,6.3,.5),'#ffffff','opacity:.5')+groundLine(1,640);
  s+=G(lerp(700,270,EZ.out(sg(t,6.3,7.0))),640,1.25,0,hypercarS({T:t<7?T:0}));
  s+=pillA(270,420,'Roadster · 2.ª generación',sg(t,7.29,7.55),{fill:'url(#gRP)',sz:15,w:700});
  s+=sparkA(130,560,t-7.4,12,K.pink,.8)+sparkA(420,540,t-7.5,10,K.yellow,.8);
  return s;}
/* ---------- 4 · Texas ---------- */
function s4(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Estados Unidos',zoom:6,zoomAt:.1,pins:[[-97.15,31.55,'Texas']],highlight:['Estados Unidos'],w:480,h:420},t-8.3));
  s+=pillA(270,760,'anoche · hora española',sg(t,9.18,9.45),{sz:12});
  return s;}
/* ---------- 5 · 9 años después ---------- */
function s5(t){let s=groundLine(1);
  s+=G(270,520,1,0,NX.timeline({items:[['2017','primer anuncio'],['2026','presentación']],step:1.0,w:380},t-10.4));
  if(t>10.9)s+=G(270,360,1,0,NX.counter({value:9,suffix:'años',sz:80,dur:.8},t-10.9));
  s+=actor('garbanzo',{t0:10.5,path:[[10.5,460]],emo:[[10.5,0,0],[11.2,9,1]],s:.75,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 6 · rampa boca abajo ---------- */
function s6(t){let s=groundLine(1,760);
  s+=G(270,760,.95,0,NX.invramp({dur:4.2},t-14.2));
  s+=pillA(270,820,'boca abajo',sg(t,16.25,16.5),{fill:'url(#gRP)',sz:14});
  s+=pillA(400,330,'succión',sg(t,18.55,18.8),{sz:14})+leader(380,345,300,500,sg(t,18.6,18.9));
  return s;}
/* ---------- 7 · gira en el aire y aterriza ---------- */
function s7(t){const T=t;let s=desert(T*.3);
  const q=sg(t,19.4,21.3),x=lerp(120,330,q),y=720-Math.sin(Math.PI*q)*260,r=-360*EZ.io(q);
  s+=G(x,y,.62,r,hypercarS({T,jets:q<1?1:0}));
  s+=dust(330,724,t-21.3,10);
  if(t>21.3&&t<21.7)s=G(Math.sin(t*90)*4,0,1,0,s);
  s+=pillA(130,440,'giro de 360°',sg(t,19.6,19.85)*dis(t,21.9),{sz:13});
  return s;}
/* ---------- 8 · salta camión y coches ---------- */
function s8(t){const T=t;let s=desert(T*.5);
  s+=G(250,720,.5,0,semiTruckS({c:'#2a37d7'}))+G(400,720,.42,0,semiTruckS({c:K.red}));
  [[110,'#ffffff'],[160,'#2a37d7']].forEach(([x,c])=>s+=G(x,720,.32,0,hypercarS({c})));
  const q=sg(t,22.6,26.2);
  s+=jumpCar(-120,640,720,330,q,T,.6,0);
  s+=sparkA(270,420,t-24.0,12,K.pink,.8);
  s+=pillA(260,620,'camión',sg(t,24.09,24.35)*dis(t,27.9),{sz:13})+pillA(135,650,'otros coches',sg(t,24.98,25.2)*dis(t,27.9),{sz:13});
  s+=pillA(270,860,'en pleno vuelo',sg(t,27.0,27.25),{fill:'url(#gRP)',sz:14});
  return s;}
/* ---------- 9 · ¿cómo lo hace? ---------- */
function s9(t){let s=qDeco(t,ao(t,28.1,.4),3,6)+groundLine(1);
  s+=G(270,480,.9,0,hypercarS({T:t}));
  s+=actor('garbanzo',{t0:28.2,path:[[28.2,96]],emo:[[28.2,0,0],[28.7,9,1]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('pipa',{t0:28.4,path:[[28.4,450]],emo:[[28.4,0,0],[28.9,9,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 10 · propulsores de gas frío · SpaceX ---------- */
function s10(t){const T=t;let s=groundLine(1);
  const zoom=EZ.io(sg(t,29.4,30.4));
  s+=G(lerp(270,330,zoom),lerp(560,520,zoom),lerp(1,1.6,zoom),0,hypercarS({T,jets:t>29.6?1:0}));
  s+=pillA(160,330,'propulsores',sg(t,29.66,29.9)*dis(t,32.0),{fill:'url(#gRP)',sz:14})+pillA(160,370,'gas frío',sg(t,30.38,30.6)*dis(t,32.0),{sz:13});
  if(t>31.9){s+=G(420,620,1,0,NX.rocket({label:''},t-31.9),dis(t,35.3));s+=pillA(420,330,'SpaceX',sg(t,32.23,32.5),{sz:15,w:800});s+=pillA(420,370,'empresa de cohetes',sg(t,33.27,33.5),{sz:12});}
  return s;}
/* ---------- 11 · aire comprimido en tanques ---------- */
function s11(t){const T=t;let s=groundLine(1);
  const xr=EZ.io(sg(t,37.7,38.3));
  s+=G(270,560,1.4,0,hypercarS({T,c:mixc('#f4f6f8','#dfe9f2',xr)}),1-.55*xr);
  [[-110,-34],[-60,-36],[-10,-38],[40,-38],[90,-34]].forEach(([dx,dy],i)=>{const q=ap(t,37.9+i*.08,.3);if(q>0)s+=G(270+dx*1.4,560+dy*1.4,.26*q,90,copvS({p:sg(t,38.2,39.2)}));});
  s+=G(120,360,1,0,NX.copv({},t-35.6),dis(t,37.7));
  s+=pillA(130,480,'aire comprimido',sg(t,36.56,36.8),{fill:'url(#gRP)',sz:14})+pillA(400,420,'escondidos por todo el coche',sg(t,38.16,38.4),{sz:12});
  return s;}
/* ---------- 12 · 0 a casi 100 en menos de 1 s ---------- */
function s12(t){let s=groundLine(1);
  s+=G(150,460,1,0,NX.stopwatch({txt:'< 1 s',p:.15},t-40.4));
  s+=stampA(380,330,t-41.58,'SEGÚN TESLA',{r:-6,sz:20,c:K.orange});
  s+=G(lerp(-200,700,EZ.in(sg(t,44.3,45.4))),GY,.5,0,hypercarS({T:t,jets:t>44.3?1:0}));
  s+=pillA(390,470,'0 → ~100 km/h',sg(t,42.9,43.15),{sz:16,w:800,fill:'url(#gRP)'});
  return s;}
/* ---------- 13 · más de 370 km/h ---------- */
function s13(t){let s='';
  s+=G(270,500,1.25,0,NX.gauge({val:370,max:400,label:'velocidad punta',unit:' km/h'},t-45.7));
  for(let i=0;i<6;i++){const q=((t*1.8)+i/6)%1;s+=P(`M${f1(560-q*700)} ${f1(300+i*90)} l-80 0`,ST('#fff',3,`opacity:${f2(.6*(1-q))}`));}
  s+=pillA(270,700,'más de 370 km/h',sg(t,46.65,46.9),{sz:16,w:800,fill:'url(#gRP)'});
  return s;}
/* ---------- 14 · 480 km de autonomía ---------- */
function s14(t){const T=t;let s=desert(T*.8,700,{sx:90,sy:330});
  s+=G(270,700,.55,0,hypercarS({T}));
  if(t>49.3)s+=G(300,420,1,0,NX.counter({value:480,suffix:'km',sz:76,dur:1.2},t-49.7));
  s+=pillA(270,470,'de autonomía',sg(t,51.7,51.95),{sz:13});
  return s;}
/* ---------- 15 · tres versiones · 50.000 $ ---------- */
const VERS=[['Performance','2 plazas'],['Thrust','propulsores'],['Rocket','1 plaza · vuela']];
function versionCard(i,sel,lt){const [n,sub]=VERS[i];const w=150,h=170;let s=Rc(-w/2+4,-h/2+5,w,h,K.ink,12)+Rc(-w/2,-h/2,w,h,sel?'#fff':'#f4f4f4',12,OL(2.2));
  s+=G(0,-20,.38,0,hypercarS({T:lt,jets:i>0?.6:0}))+Tn(0,30,n,16,800)+Tn(0,52,sub,11.5,600,{fill:'#666'});return s;}
function s15(t){let s=groundLine(1);
  for(let i=0;i<3;i++){const q=ap(t,53.25+i*.12,.35);if(q>0)s+=G(100+i*170,400,q*(i===0&&t>54.6?1.06:1),0,versionCard(i,i===0&&t>54.6,t));}
  if(t>54.9)s+=G(100,600,1,0,NX.pricetag({txt:'50.000 $',sub:'para reservar'},t-55.0));
  s+=actor('grano',{t0:55.4,path:[[55.4,640],[56.0,420]],emo:[[55.4,1,0],[56.0,2,0]],s:.7,pop:false,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 16 · 250.000 $ ---------- */
function s16(t){let s=groundLine(1);
  s+=G(270,430,1.1,0,versionCard(1,true,t));
  if(t>59.3)s+=G(270,640,1.2,0,NX.pricetag({txt:'250.000 $',sub:'para reservar'},t-59.4));
  s+=G(270,420,1,0,jetPuffS(-60,-10,180,1,t)+jetPuffS(60,-10,0,1,t),ao(t,58.5,.3));
  s+=actor('pipa',{t0:59.9,path:[[59.9,460]],emo:[[59.9,7,1]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- 17 · solo por invitación ---------- */
function envelopeS(o={}){const w=280,h=180;let s=Rc(-w/2,-h/2,w,h,'#fbf8f2',10,OL(2.4))+P(`M${-w/2} ${-h/2} L0 10 L${w/2} ${-h/2}`,ST(K.ink,2.2))+Ci(0,10,24,K.red,OL(2))+Tn(0,16,'R',18,800,{fill:'#fff'});
  if(o.p>0)s=G(0,-o.p*90,1,0,Rc(-110,-70,220,120,'#fff',6,OL(2))+Tn(0,-30,'INVITACIÓN',16,800,{ls:.12})+Tn(0,-6,'Roadster «Rocket»',14,600,{fill:'#555'}))+s;
  return s;}
function s17(t){const T=t;let s='';
  const fq=sg(t,61.6,64.8),fx=lerp(-80,620,fq),fy=520-Math.sin(Math.PI*fq)*160;
  s+=G(fx,fy,.55,-8,hypercarS({T,jets:1}));
  s+=pillA(160,330,'1 plaza',sg(t,62.85,63.1),{sz:14})+pillA(380,330,'sistema de vuelo',sg(t,64.04,64.3),{sz:14,fill:'url(#gRP)'});
  const eq=ap(t,65.0,.35);if(eq>0)s+=G(270,690,eq,0,envelopeS({p:EZ.out(sg(t,65.4,66.0))}));
  s+=stampA(380,600,t-65.79,'SOLO INVITACIÓN',{r:-8,sz:18,c:K.purple});
  return s;}
/* ---------- 18 · sin precio · 2028 ---------- */
function s18(t){let s=groundLine(1);
  s+=G(140,420,1.1,0,NX.pricetag({txt:'¿ ? $',sub:'precio final'},t-67.6));
  if(t>69.6)s+=G(390,420,1,0,NX.calendar({from:2026,to:2028,month:'FABRICACIÓN',dur:1.0},t-69.7));
  s+=actor('lenteja',{t0:67.0,path:[[67.0,-60],[67.6,96]],emo:[[67.0,1,0],[67.6,2,0]],s:.75,pop:false,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* ---------- 19 · retrasos ---------- */
function s19(t){let s=groundLine(1);
  s+=G(270,470,1,0,NX.timeline({items:[['2017','anuncio'],['2020','retraso'],['2021','retraso'],['2023','retraso'],['2024','retraso'],['2028','¿fabricación?']],step:.35,w:460},t-71.95));
  [1,2,3,4].forEach(i=>{const q=sg(t,73.1+i*.35,73.3+i*.35);const x=270-230+i*92;if(q>0)s+=G(x,470,1,0,P('M-12 -12 L12 12 M12 -12 L-12 12',ST(K.red,4)),q);});
  s+=stampA(270,640,t-73.8,'RETRASADO',{r:-6,sz:24,c:K.red});
  s+=actor('garbanzo',{t0:72.0,path:[[72.0,86]],emo:[[72.0,9,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* ---------- 20 · pregunta ---------- */
function s20(t){let s=qDeco(t,ao(t,76.9,.5),7,6);
  const opts=[['A','Sí, sin dudarlo'],['B','Solo si vuela de verdad'],['C','Prefiero mi bici'],['D','¿Otra? Dímela']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,77.1+i*.1,.3),sel=i===1?EZ.out(sg(t,78.3,78.5)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,77.1+i*.1,77.4+i*.1)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  const cq=ap(t,78.6,.3);if(cq>0){const typed='¡Que vuele!'.slice(0,Math.floor(11*sg(t,78.7,79.3)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:76.9,path:[[76.9,86]],emo:[[76.9,0,0],[77.5,9,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:77.0,path:[[77.0,458]],emo:[[77.0,0,0],[77.6,11,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* ---------- FIN ---------- */
function sEND(t){const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,80.5,81.2)));
  s+=G(0,0,1,0,Ts(270,352,'El Tesla que',30),ao(t,80.6,.3))+G(0,0,1,0,Ts(270,398,'salta coches',44,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,80.7,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Reuters · TechCrunch · Yahoo Finance',10.5,600)+Tn(270,474,'16/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,80.8,.3));
  s+=G(lerp(-200,700,sg(t,80.2,82)),600-Math.sin(Math.PI*sg(t,80.2,82))*80,.5,0,hypercarS({T,jets:1}));
  s+=groundLine(1);
  [['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]].forEach(([k,sc],i)=>{const x=600-((t-80.2)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:4.2,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:6.1,draw:s3,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'4',a:8.2,draw:s4,in:{type:'whipU',dur:.32}},
  {id:'5',a:10.25,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:13.4,draw:s6,in:{type:'whipU',dur:.32}},
  {id:'7',a:19.3,draw:s7,in:{type:'whipD',dur:.32}},
  {id:'8',a:22.25,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:28.0,draw:s9,in:{type:'whipU',dur:.3}},
  {id:'10',a:29.3,draw:s10,in:{type:'zoom',dur:.45,fx:270,fy:480,z:8}},
  {id:'11',a:35.4,draw:s11,in:{type:'whipL',dur:.32}},
  {id:'12',a:40.1,draw:s12,in:{type:'whipU',dur:.32}},
  {id:'13',a:45.5,draw:s13,in:{type:'whipL',dur:.32}},
  {id:'14',a:49.2,draw:s14,in:{type:'whipD',dur:.32}},
  {id:'15',a:52.7,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'16',a:58.0,draw:s16,in:{type:'zoom',dur:.45,fx:270,fy:400,z:8}},
  {id:'17',a:61.1,draw:s17,in:{type:'whipL',dur:.32}},
  {id:'18',a:66.7,draw:s18,in:{type:'whipU',dur:.32}},
  {id:'19',a:71.8,draw:s19,in:{type:'whipL',dur:.32}},
  {id:'20',a:76.75,draw:s20,in:{type:'whipD',dur:.32}},
  {id:'END',a:80.2,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:1.85,y:170,lines:[{txt:'Tesla acaba de',sz:30,t:[.05,.49,.81]},{txt:'enseñar un *coche*',sz:42,t:[.93,1.39,1.52]}]},
 {t0:1.86,t1:4.1,y:170,lines:[{txt:'que *salta*',sz:56,t:[1.86,1.98],spark:true},{txt:'por encima de otros coches',sz:28,t:[2.31,2.49,2.90,3.04,3.35],gap:1.2}]},
 {t0:4.31,t1:6.0,lines:[{txt:'y no es un',sz:30,t:[4.31,4.50,4.69,4.85]},{txt:'truco de *cine*',sz:48,t:[4.99,5.29,5.41]}]},
 {t0:6.25,t1:8.1,lines:[{txt:'el nuevo',sz:30,t:[6.25,6.64]},{txt:'Tesla *Roadster*',sz:52,t:[6.92,7.29]}]},
 {t0:8.32,t1:10.2,lines:[{txt:'presentado anoche',sz:30,t:[8.56,9.18]},{txt:'en *Texas*',sz:58,t:[9.55,9.69]}]},
 {t0:10.32,t1:13.3,lines:[{txt:'casi nueve años',sz:30,t:[10.32,10.60,10.91]},{txt:'*después*',sz:52,t:[11.19]}]},
 {t0:13.55,t1:15.5,lines:[{txt:'en la *demostración*',sz:42,t:[13.55,13.78,13.88]}]},
 {t0:15.56,t1:17.1,lines:[{txt:'una rampa',sz:30,t:[15.74,15.91]},{txt:'*boca abajo*',sz:54,t:[16.25,16.55]}]},
 {t0:17.15,t1:19.2,lines:[{txt:'pegado con un',sz:30,t:[17.15,17.91,17.98]},{txt:'sistema de *succión*',sz:42,t:[18.14,18.55,18.65]}]},
 {t0:19.44,t1:22.2,lines:[{txt:'giró en el *aire*',sz:44,t:[19.44,19.82,19.94,20.05]},{txt:'y *aterrizó*',sz:40,t:[20.34,20.44],gap:1.15}]},
 {t0:22.38,t1:25.3,lines:[{txt:'*saltó* por encima',sz:46,t:[22.91,23.25,23.41]},{txt:'de un *camión*',sz:36,t:[23.82,23.96,24.09],gap:1.15}]},
 {t0:26.1,t1:27.9,lines:[{txt:'*retorciéndose*',sz:50,t:[26.10]},{txt:'en pleno vuelo',sz:30,t:[26.93,27.05,27.34],gap:1.0}]},
 {t0:28.14,t1:29.3,lines:[{txt:'¿*cómo* lo hace?',sz:52,t:[28.14,28.48,28.62]}]},
 {t0:29.4,t1:31.0,lines:[{txt:'con *propulsores*',sz:46,t:[29.40,29.66]},{txt:'de gas frío',sz:32,t:[30.29,30.38,30.62],gap:1.1}]},
 {t0:31.11,t1:35.3,lines:[{txt:'desarrollados con',sz:30,t:[31.11,31.86]},{txt:'*SpaceX*',sz:60,t:[32.23],spark:true}]},
 {t0:35.51,t1:37.6,lines:[{txt:'funcionan con',sz:30,t:[35.51,36.16]},{txt:'*aire comprimido*',sz:46,t:[36.34,36.56]}]},
 {t0:37.65,t1:40.0,lines:[{txt:'en *tanques*',sz:50,t:[37.65,37.77]},{txt:'escondidos por todo el coche',sz:26,t:[38.16,38.81,39.00,39.26,39.36],gap:1.2}]},
 {t0:40.23,t1:42.1,lines:[{txt:'las *cifras*',sz:50,t:[40.23,40.60]},{txt:'según Tesla',sz:30,t:[41.20,41.58]}]},
 {t0:42.14,t1:45.5,lines:[{txt:'de 0 a casi 100',sz:40,t:[42.14,42.25,42.55,42.61,42.90]},{txt:'en *menos de 1 s*',sz:44,t:[44.17,44.29,44.62,44.74,44.89],spark:true,gap:1.15}]},
 {t0:45.67,t1:49.2,lines:[{txt:'velocidad *punta*',sz:46,t:[48.11,48.65]}]},
 {t0:49.39,t1:52.6,lines:[{txt:'y unos',sz:30,t:[49.39,49.62]},{txt:'*autonomía*',sz:44,t:[51.70],gap:2.4}]},
 {t0:52.85,t1:54.5,lines:[{txt:'*tres* versiones',sz:48,t:[52.85,53.25,53.48]}]},
 {t0:54.62,t1:57.9,lines:[{txt:'para reservar',sz:30,t:[54.62,54.90]},{txt:'la *normal*',sz:50,t:[55.39,55.49]}]},
 {t0:58.15,t1:61.0,lines:[{txt:'la de *propulsores*',sz:44,t:[58.15,58.41,58.52]}]},
 {t0:61.27,t1:64.9,lines:[{txt:'y la *tercera*',sz:50,t:[61.27,61.46,61.61]},{txt:'con sistema de vuelo',sz:28,t:[63.30,63.51,63.94,64.04],gap:1.2}]},
 {t0:65.04,t1:66.6,lines:[{txt:'solo por *invitación*',sz:42,t:[65.04,65.34,65.61,65.79]}]},
 {t0:67.67,t1:69.3,lines:[{txt:'aún sin *precio*',sz:48,t:[67.67,68.11,68.49]}]},
 {t0:69.54,t1:71.8,lines:[{txt:'no se fabricará',sz:30,t:[69.36,69.54,69.67]},{txt:'hasta *2028*',sz:52,t:[70.21,70.46]}]},
 {t0:71.97,t1:76.7,lines:[{txt:'*ojo*',sz:60,t:[71.97],speed:true},{txt:'ya se ha retrasado varias veces',sz:26,t:[73.42,73.59,73.75,73.80,74.38,74.72],gap:1.4}]},
 {t0:76.89,t1:79.0,lines:[{txt:'¿te comprarías',sz:32,t:[76.89,77.08]},{txt:'un coche que *salta*?',sz:42,t:[77.67,77.80,78.10,78.21],gap:1.15}]},
 {t0:79.12,t1:80.2,lines:[{txt:'te leo en',sz:30,t:[79.12,79.33,79.60]},{txt:'*comentarios*',sz:48,t:[79.71]}]}
];
