/* ===== DIARIO · El pulpo: tres corazones, sangre azul y brazos que casi piensan · 22/10/2026 ===== */
DUR=82.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function sea(t,a=1){let s=Rc(-20,-20,580,1000,'#2c5d9e',0,`opacity:${f2(.55*a)}`)+Rc(-20,-20,580,400,'#6fa3e0',0,`opacity:${f2(.25*a)}`);
  for(let i=0;i<14;i++){const q=((t*.25)+hs(i*3.1))%1,x=20+hs(i+9)*500,y=900-q*950;s+=Ci(x+Math.sin(t*2+i)*8,y,3+hs(i)*7,'none',`stroke:#dcecff;stroke-width:2;opacity:${f2(.6*a*(1-q))}`);}
  return s;}
function seabed(y=760){return P(`M-20 ${y} Q120 ${y-14} 270 ${y} T560 ${y} L560 980 L-20 980Z`,'fill:#d9c48f;'+OL(2.4))+G(70,y-4,1,0,P('M0 0 q-6 -30 4 -60 q8 -20 -2 -40',ST('#3f9b4f',6)))+G(470,y-2,1,0,P('M0 0 q8 -24 -2 -50',ST('#2b7a3e',6)));}

/* 1 · fotograma 0: el pulpo sale disparado en el mar, rayos X, y su corazón grande se PARA */
function s1(t){let s=sea(t);
  const y=lerp(600,470,EZ.out(sg(t,0,4.3)));
  s+=G(270,y,1.45,0,NX.octopus({swim:1,jet:1,xray:1,blood:'blue',beat:[1,1,t<3.35?1:0],emo:t<3.35?'wow':'tired'},t+1));
  s+=pillA(270,250,'nadando a toda velocidad',sg(t,-1,0)*dis(t,2.4),{fill:K.ink,sz:16,w:800});
  if(t>3.3)s+=G(270,y-80,1,0,stampA(0,0,t-3.35,'¡SE PARA!',{c:K.red,sz:26,r:-6}));
  return s;}
/* 2 · ¿uno de ellos? → tiene TRES corazones */
function s2(t){let s=groundLine(1);
  if(t<6.3){s+=actor('pipa',{t0:4.45,path:[[4.45,150]],emo:[[4.45,7,0]],s:.95,y:()=>GY,face:()=>1,look:()=>1},t);
    s+=actor('garbanzo',{t0:4.6,path:[[4.6,400]],emo:[[4.6,9,0]],s:.95,y:()=>GY,face:()=>-1,look:()=>-1},t);
    s+=G(270,380,1,0,NX.bigq({},t-5.0),ao(t,5.0,.3));}
  else{s+=NX.punch({a:'Tiene',b:'tres.'},t-6.35);
    [-1,0,1].forEach((k,i)=>{const a=6.96+i*.12;if(t>a)s+=G(270+k*120,640,ap(t,a,.3)*(1+.1*Math.max(0,Math.sin(t*9+i))),0,P('M0 30 C-50 -6 -70 -46 -36 -66 C-16 -78 0 -60 0 -48 C0 -60 16 -78 36 -66 C70 -46 50 -6 0 30Z',`fill:#ff2e63;${OL(3,'#fff')}`));});}
  return s;}
/* 3 · rayos X: dos corazones branquiales + el sistémico (el grande) */
function s3(t){let s=sea(t,.5);
  s+=G(270,440,1.5,0,NX.octopus({xray:ao(t,8.4,.4),blood:t>12.6?'blue':'none',beat:[1,1,1]},t));
  const gl=ap(t,8.6,.3),sy=ap(t,14.4,.3);
  if(t>8.6&&t<19.9){s+=pillA(105,300,'corazón branquial',gl,{fill:K.ink,sz:13,w:800})+pillA(435,300,'corazón branquial',gl,{fill:K.ink,sz:13,w:800});
    s+=DR('M105 315 L180 400',ST(K.ink,2.4),sg(t,8.8,9.2))+DR('M435 315 L360 400',ST(K.ink,2.4),sg(t,8.8,9.2));}
  s+=pillA(270,215,'empujan la sangre a las branquias',sg(t,11.6,11.85)*dis(t,14.2),{fill:'url(#gRP)',sz:15,w:800});
  if(t>14.3){s+=pillA(270,215,'corazón sistémico: el grande',sy,{fill:K.red,sz:16,w:800});
    s+=pillA(270,800,'reparte la sangre por todo el cuerpo',sg(t,16.2,16.45),{fill:K.ink,sz:14,w:800});}
  return s;}
/* 4 · al nadar a propulsión el grande se para → agotado → prefiere caminar */
function s4(t){let s='';
  if(t<27.9){s+=sea(t);
    const y=lerp(620,420,EZ.io(sg(t,20.0,26.0)));
    s+=G(270,y,1.15,0,NX.octopus({swim:1,jet:t>23.5?1:.4,xray:1,blood:'blue',beat:[1,1,t<22.3?1:0],emo:t>26.6?'tired':'ok'},t));
    s+=pillA(270,180,'chorros de agua = propulsión',sg(t,24.4,24.65),{fill:K.ink,sz:15,w:800});
    if(t>26.6)s+=pillA(270,240,'¡agotador!',sg(t,26.7,26.95),{fill:K.red,sz:18,w:800});}
  else{s+=sea(t,.7)+seabed(760);
    const x=lerp(560,230,EZ.io(sg(t,27.9,30.5)));
    s+=G(x,560,.95,0,NX.octopus({walk:1,emo:'ok'},t));
    s+=pillA(270,200,'mejor caminando por el fondo',sg(t,28.3,28.55),{fill:'url(#gRP)',sz:16,w:800});}
  return s;}
/* 5 · sangre azul: hemoglobina (hierro) frente a hemocianina (cobre) */
function s5(t){let s=groundLine(1,700);
  if(t<33.0){s+=G(270,520,1.2,0,NX.octopus({xray:1,blood:'blue',beat:[1,1,1],emo:'wow'},t));}
  else{s+=G(270,700,1.15,0,NX.bloodtubes({at:.1,gap:6.7},t-33.0));
    if(t>41.9){const q=ap(t,42.1,.35);s+=G(270,250,q,0,Rc(-150,-30,300,60,'#fff',14,OL(2.4))+Tn(0,10,'+ oxígeno = azul',24,800,{fill:'#2f6fe0'}));}}
  return s;}
/* 6 · ¿por qué cobre? aguas frías y con poco oxígeno · el precio: sangre espesa → más bombas */
function s6(t){let s='';
  if(t<53.4){s+=sea(t,1)+Rc(-20,-20,580,1000,'#13284a',0,'opacity:.35');
    for(let i=0;i<10;i++)s+=G(40+hs(i*5)*460,200+hs(i*2)*500,.7,0,spark4(9,'#e8f4ff'),.6+.4*Math.sin(t*3+i));
    s+=G(130,520,1,0,NX.thermo({temp:4,max:40},t-48.6),ao(t,48.6,.3));
    s+=pillA(130,700,'agua fría',sg(t,49.3,49.55),{fill:'#2f6fe0',sz:15,w:800});
    s+=G(390,520,.9,0,NX.octopus({emo:'ok'},t),ao(t,45.9,.4));
    s+=pillA(390,690,'sus antepasados',sg(t,52.1,52.35),{fill:K.ink,sz:15,w:800});
    s+=pillA(270,250,'poco oxígeno',sg(t,50.0,50.25),{fill:K.ink,sz:15,w:800});}
  else{s+=groundLine(1);
    s+=G(270,300,1,0,Ts(0,0,'el precio',46,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,53.6,.3));
    s+=pillA(160,400,'sangre más espesa',sg(t,55.0,55.25),{fill:K.ink,sz:15,w:800});
    s+=pillA(380,450,'menos oxígeno',sg(t,56.3,56.55),{fill:K.red,sz:15,w:800});
    [-1,0,1].forEach((k,i)=>{const a=58.4+i*.25;if(t>a)s+=G(270+k*120,600,ap(t,a,.3)*(1+.12*Math.max(0,Math.sin(t*9+i*2))),0,P('M0 30 C-50 -6 -70 -46 -36 -66 C-16 -78 0 -60 0 -48 C0 -60 16 -78 36 -66 C70 -46 50 -6 0 30Z',`fill:#ff2e63;${OL(3)}`));});
    s+=actor('garbanzo',{t0:53.5,path:[[53.5,470]],emo:[[53.5,9,0],[57.8,7,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);}
  return s;}
/* 7 · dos tercios de las neuronas en los brazos → cada brazo casi piensa solo */
function s7(t){let s='';
  if(t<64.6){s+=G(270,500,1,0,NX.pie({items:[['brazos',67,'#f6a81a'],['cabeza',33,'#8005f0']]},t-60.4));
    s+=pillA(270,250,'neuronas del pulpo',sg(t,62.3,62.55),{fill:K.ink,sz:16,w:800});
    s+=pillA(270,700,'2/3 en los brazos',sg(t,63.6,63.85),{fill:'url(#gRP)',sz:17,w:800});}
  else{s+=sea(t,.6)+seabed(780);
    s+=G(270,470,1.35,0,NX.octopus({arms:ao(t,64.8,.5),emo:t>67?'wow':'ok'},t));
    s+=pillA(270,180,'cada brazo reacciona casi por su cuenta',sg(t,66.0,66.25),{fill:K.ink,sz:14,w:800});
    if(t>68.4)s+=G(420,300,ap(t,68.5,.35),0,cloudS(120)+Tn(0,-14,'¿y si…?',16,800));}
  return s;}
/* 8 · resumen + pregunta */
function s8(t){let s=groundLine(1);
  const items=[[70.2,'3 corazones','#ff2e63'],[71.3,'sangre azul','#2f6fe0'],[72.1,'brazos que piensan','#f6a81a']];
  items.forEach(([a,l,c],i)=>{s+=pillA(270,290+i*58,l,sg(t,a,a+.25),{fill:c,sz:18,w:800});});
  s+=actor('pipa',{t0:70.5,path:[[70.5,90]],emo:[[70.5,1,0],[73.8,9,0],[76.5,3,0]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:70.6,path:[[70.6,450]],emo:[[70.6,1,0],[73.9,2,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=G(270,620,.5,0,NX.octopus({emo:'wow',xray:1,blood:'blue',arms:1},t),ao(t,70.4,.3));
  s+=pillA(270,480,'Te leo en comentarios',sg(t,77.9,78.15),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,79.6,80.3)));
  s+=G(0,0,1,0,Ts(270,352,'El pulpo:',30),ao(t,79.7,.3))+G(0,0,1,0,Ts(270,398,'tres corazones',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,79.8,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Smithsonian Magazine · Science ABC · OIST',9.5,600),ao(t,79.9,.3));
  s+=G(270,620,.6,0,NX.octopus({xray:1,blood:'blue',beat:[1,1,1]},t),ao(t,79.9,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:4.4,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:8.25,draw:s3,in:{type:'zoom',dur:.45,fx:270,fy:420,z:8}},
  {id:'4',a:19.85,draw:s4,in:{type:'whipU',dur:.32}},
  {id:'5',a:30.55,draw:s5,in:{type:'glitch',dur:.3}},
  {id:'6',a:45.6,draw:s6,in:{type:'whipL',dur:.32}},
  {id:'7',a:60.2,draw:s7,in:{type:'iris',dur:.4,fx:270,fy:480,r0:10}},
  {id:'8',a:70.05,draw:s8,in:{type:'whipD',dur:.32}},
  {id:'END',a:79.4,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:4.3,y:150,lines:[{txt:'su corazón',sz:34,t:[2.56,2.76]},{txt:'*se para*',sz:56,t:[3.35,3.71],gap:1.15}]},
 {t0:30.6,t1:33.0,y:200,lines:[{txt:'sangre',sz:40,t:[31.69]},{txt:'*azul*',sz:66,t:[32.21],gap:1.15}]},
 {t0:45.7,t1:48.5,y:200,lines:[{txt:'¿por qué',sz:36,t:[45.89,46.06]},{txt:'*cobre*?',sz:60,t:[46.2],gap:1.15}]},
 {t0:73.9,t1:77.8,y:180,lines:[{txt:'¿con cuál',sz:36,t:[75.05,75.24]},{txt:'te *quedas*?',sz:50,t:[74.65,74.65],gap:1.15}]}
];
