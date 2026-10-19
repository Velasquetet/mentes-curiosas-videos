/* ===== DIARIO · Las cuerdas de la Edad de Piedra · 19/10/2026 ===== */
DUR=109.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const push=(s,t,a,b,k0=1,k1=1.06,fx=270,fy=520)=>G(fx,fy,lerp(k0,k1,EZ.sine(sg(t,a,b))),0,G(-fx,-fy,1,0,s));
const shake=(s,t,t0,amp=6,d=.4)=>{if(t<t0||t>t0+d)return s;const q=1-(t-t0)/d;return G(Math.sin(t*90)*amp*q,Math.cos(t*77)*amp*q*.6,1,0,s);};
const xMark=(p,r=80,c=K.red,w=12)=>DR(`M${-r} ${-r} L${r} ${r}`,ST(c,w),sg(p,0,.5))+DR(`M${r} ${-r} L${-r} ${r}`,ST(c,w),sg(p,.4,1));
function rays(t,a=1){let s='';for(let i=0;i<12;i++){const an=i*30+t*8;s+=G(270,560,1,an,P('M0 0 L-30 -520 L30 -520Z','fill:#ffffff;opacity:'+f2(.18*a)));}return s;}
const crownS=()=>P('M-40 20 L-46 -22 L-22 0 L0 -30 L22 0 L46 -22 L40 20Z','fill:#f6c443;'+OL(2.4))+Ci(0,-30,5,K.red)+Ci(-46,-22,4,K.red)+Ci(46,-22,4,K.red);
const wheelS=(T=0)=>G(0,0,1,T*90,Ci(0,0,46,'none',ST('#7a4f28',10))+[0,60,120].map(a=>G(0,0,1,a,P('M-44 0 L44 0',ST('#9a6a2a',7)))).join('')+Ci(0,0,10,'#5a3a20'));

/* 1 · el objeto, en grande desde el fotograma 0 → era una máquina de hacer cuerdas */
function s1(t){let s=rays(t,1);
  const fib=sg(t,5.9,7.4);
  s+=G(270,560-fib*90,1.35-fib*.25,-8+Math.sin(t*1.2)*3,NX.ropetool({asm:1,glow:1-fib,fib},t+1));
  s+=pillA(130,730,'marfil de mamut',sg(t,.9,1.15),{sz:15,w:800,r2:-4});
  if(t>3.7&&t<5.6)s+=G(400,330,1,10,crownS(),ap(t,3.75,.3)*dis(t,5.2));
  s+=pillA(400,730,'¿un adorno?',sg(t,3.9,4.15)*dis(t,5.4),{sz:15,w:800,fill:K.ink});
  s+=pillA(390,730,'una máquina de cuerdas',sg(t,6.0,6.25),{sz:15,w:800,fill:'url(#gRP)'});
  return s;}
/* 2 · Edad de Piedra: la piedra aguanta, lo demás se pudre */
function s2(t){let s=groundLine(1,700);
  s+=G(270,700,1,0,NX.decay({rot:sg(t,12.6,16.2)},t-7.7));
  s+=actor('garbanzo',{t0:15.0,path:[[15.0,470]],emo:[[15.0,0,0],[15.5,7,0],[17.2,9,0]],s:.6,y:()=>860,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,600,'casi nada ha llegado hasta hoy',sg(t,19.6,19.85),{sz:15,w:800,fill:K.red});
  return s;}
/* 3 · Hohle Fels (Alemania), 2015 → 15 trozos → 20 cm y 4 agujeros */
function s3(t){let s='';
  if(t<27.45){s+=G(270,520,1,0,NX.map({focus:'Alemania',pins:[[9.75,48.38,'Hohle Fels']],w:500,h:440},t-23.1));
    s+=pillA(270,250,'2015',sg(t,24.1,24.35),{sz:22,w:800,fill:'url(#gRP)'});
  }
  else{s+=groundLine(1,760);
    const asm=EZ.io(sg(t,29.4,30.4));
    s+=G(270,520,1.25,0,NX.ropetool({asm:Math.max(.02,asm)},t-27.45));
    s+=pillA(270,300,asm<.5?'15 trozos':'montada',sg(t,27.8,28.05),{sz:18,w:800,fill:asm<.5?K.red:K.ink});
    s+=G(0,0,1,0,dimS(58,630,482,630,'unos 20 cm',sg(t,30.6,31.4)));
    if(t>32.3)[-96,-32,32,96].forEach((x,i)=>{s+=G(270+x*1.25,520,1,0,Ci(0,0,30,'none',ST(K.red,4)),ap(t,32.4+i*.12,.25));});
    s+=pillA(270,720,'4 agujeros',sg(t,32.6,32.85),{sz:16,w:800,fill:K.red});
    s+=actor('lenteja',{t0:28.0,path:[[28.0,460]],emo:[[28.0,0,0],[28.5,2,0]],s:.55,y:()=>900,face:()=>-1,look:()=>-1,prop:()=>PROP.regla},t);}
  return s;}
/* 4 · durante años: ¿símbolo de poder? ¿prestigio? */
function s4(t){let s=groundLine(1);
  s+=G(270,380,.9,0,NX.ropetool({asm:1},t-33.8));
  s+=G(150,560,1,-8,crownS(),ap(t,36.8,.3))+pillA(150,620,'¿poder?',sg(t,36.9,37.15),{sz:16,w:800});
  s+=G(390,560,1,8,Tn(0,10,'★',64,800,{fill:'#f6c443'}),ap(t,37.9,.3))+pillA(390,620,'¿prestigio?',sg(t,38.0,38.25),{sz:16,w:800});
  s+=actor('garbanzo',{t0:34.0,path:[[34.0,270]],emo:[[34.0,0,0],[34.5,9,0]],s:.7,y:()=>GY,face:()=>1,look:()=>-1},t);
  return s;}
/* 5 · dentro de cada agujero: ranuras en espiral → ¿para qué? → réplicas con fibras */
function s5(t){let s='';
  if(t<44.1){s+=G(270,520,1.2,0,NX.holezoom({fib:0},t-38.9));
    s+=pillA(270,250,'ranuras en espiral',sg(t,41.3,41.55),{sz:18,w:800,fill:K.orange});
    s+=actor('lenteja',{t0:42.6,path:[[42.6,430]],emo:[[42.6,0,0],[43.0,10,0]],s:.6,y:()=>900,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);}
  else{s+=groundLine(1,820);
    s+=G(270,330,1,0,NX.ropetool({asm:1,fib:sg(t,46.4,49.2)},t-44.1));
    s+=pillA(270,180,'réplicas',sg(t,45.6,45.85),{sz:18,w:800});
    s+=pillA(270,800,'fibras de plantas',sg(t,46.9,47.15),{sz:15,w:800,fill:'#2b7a3e'});}
  return s;}
/* 6 · funcionó: 4-5 personas, 5 metros de cuerda fuerte en 10 minutos */
function s6(t){let s=groundLine(1,762);
  s+=G(270,640,1,0,NX.lineup({n:5,acc:[]},t-50.0));
  const m=5*EZ.out(sg(t,51.9,54.6));
  s+=G(0,0,1,0,P(`M40 712 L${f1(40+460*m/5)} 712`,ST('#b8863a',12,'stroke-linecap:round'))+P(`M40 712 L${f1(40+460*m/5)} 712`,ST('#e0bb70',5,'stroke-dasharray:10 8')),ao(t,51.7,.2));
  s+=G(270,330,1,0,Rc(-120,-44,240,88,'#fff',14,OL(2.4))+Tn(0,16,m.toFixed(1).replace('.',',')+' m',40,800,{fill:K.ink}),ao(t,51.8,.3));
  s+=G(420,480,.8,0,NX.clock({h:12,m:0,spin:.5},t-54.0),ao(t,54.0,.3));
  s+=pillA(420,560,'10 minutos',sg(t,54.4,54.65),{sz:15,w:800,fill:K.red});
  s+=pillA(270,700,'cuerda fuerte',sg(t,53.3,53.55),{sz:15,w:800});
  return s;}
/* 7 · la cuerda más antigua: 6 mm, en un sílex de Abri du Maras (Francia), 50.000 años, tres cabos, corteza, neandertales */
function s7(t){let s='';
  if(t<62.7){s+=groundLine(1);
    s+=G(230,600,1.1,0,NX.flintcord({mag:sg(t,58.3,58.9),cord:1},t-55.8));
    s+=pillA(270,280,'la más antigua',sg(t,56.3,56.55),{sz:18,w:800,fill:'url(#gRP)'});
    s+=pillA(160,700,'herramienta de sílex',sg(t,61.4,61.65),{sz:15,w:800});}
  else if(t<67.3){s+=G(270,520,1,0,NX.map({focus:'Francia',pins:[[4.60,44.35,'Abri du Maras']],w:500,h:440},t-62.7));
    s+=G(270,250,1,0,Rc(-130,-40,260,80,'#fff',14,OL(2.4))+Tn(0,14,'50.000 años',30,800,{fill:K.red}),ao(t,65.6,.3));}
  else{s+=G(270,450,1,0,NX.cord3({len:420,w:22,split:EZ.io(sg(t,67.6,68.4))},t-67.3));
    s+=pillA(270,300,'3 cabos',sg(t,67.8,68.05),{sz:18,w:800});
    s+=G(110,700,.9,0,treeS(1.2),ap(t,68.7,.3))+pillA(110,730,'corteza interior',sg(t,69.0,69.25),{sz:13,w:800,fill:'#2b7a3e'});
    s+=pillA(340,610,'¿quién la hizo?',sg(t,71.2,71.45)*dis(t,72.8),{sz:15,w:800});
    s+=pillA(340,610,'neandertales',sg(t,73.0,73.25),{sz:18,w:800,fill:'url(#gRP)'});
    s+=actor('pipa',{t0:70.6,path:[[70.6,420]],emo:[[70.6,0,0],[71.0,10,0],[73.0,7,0]],s:.6,y:()=>860,face:()=>-1,look:()=>-1},t);}
  return s;}
/* 8 · retorcer hacia un lado y unir hacia el otro · planificar · antes, el récord era de 19.000 años */
function s8(t){let s='';
  if(t<82.2){s+=G(270,440,1,0,NX.cord3({len:420,w:22,split:1-EZ.io(sg(t,76.4,77.9)),arrows:sg(t,75.4,75.8)},t-74.4));
    s+=pillA(270,250,'no es tan fácil',sg(t,78.3,78.55),{sz:16,w:800,fill:K.red});
    s+=G(270,720,.6,0,NX.tally({n:12,label:'pasos'},t-79.4),ao(t,79.4,.3));}
  else{s+=G(270,500,1,0,NX.timeline({items:[['50.000','Abri du Maras'],['19.000','récord anterior'],['hoy','']],step:.9,w:440},t-82.4));
    s+=pillA(270,330,'antes de este hallazgo',sg(t,82.5,82.75),{sz:15,w:800});}
  return s;}
/* 9 · redes, bolsas, cestas y trampas · también se cose: piel de alce en Oregón, hace 12.000 años */
function s9(t){let s='';
  if(t<91.0){s+=G(270,540,1,0,NX.ropeuses({at:[1.0,1.6,2.25,2.75]},t-87.35));s+=pillA(270,300,'con cuerdas se hacen…',sg(t,87.45,87.7),{sz:16,w:800,fill:'url(#gRP)'});}
  else if(t<94.1){s+=G(270,520,1,0,NX.map({focus:'Estados Unidos',pins:[[-121.0,43.4,'Oregón']],w:500,h:440},t-91.0));
    s+=pillA(270,250,'también se cose',sg(t,91.3,91.55),{sz:18,w:800,fill:'url(#gRP)'});}
  else{s+=G(270,500,1.2,0,NX.sewnhide({},t-94.1));
    s+=pillA(270,300,'piel de alce + cordel',sg(t,94.6,94.85),{sz:16,w:800});
    s+=G(270,720,1,0,Rc(-130,-40,260,80,'#fff',14,OL(2.4))+Tn(0,14,'12.000 años',30,800,{fill:K.red}),ao(t,96.4,.3));}
  return s;}
/* 10 · ¿la Edad de la Cuerda? */
function s10(t){let s=rays(t,.8);
  s+=G(270,430,1,-3,Rc(-200,-60,400,120,'#9a9a94',14,OL(3))+Ts(0,18,'Edad de Piedra',44),ap(t,98.2,.35));
  s+=G(270,430,1,0,xMark(sg(t,99.4,100.0),150,K.red,12));
  s+=G(270,640,1,3,Rc(-210,-60,420,120,'#e0bb70',14,OL(3))+Ts(0,18,'Edad de la Cuerda',40,{it:true}),ap(t,100.6,.35));
  s+=G(270,740,1,0,NX.cord3({len:380,w:14},t-100.6),ao(t,100.8,.3));
  return shake(s,t,100.6,5,.3);}
/* 11 · ¿fuego, rueda o cuerda? */
function s11(t){let s=groundLine(1);
  const card=(x,lab,g,a)=>G(x,430,ap(t,a,.35),0,Rc(-75,-90,150,180,'#fff',16,OL(2.4))+g+G(0,64,1,0,pill(lab,{sz:13,w:800})));
  s+=card(105,'fuego',G(0,10,.45,0,NX.fire({n:4,w:160},t)),102.4);
  s+=card(270,'rueda',G(0,-10,1,0,wheelS(t)),102.9);
  s+=card(435,'cuerda',G(0,-10,1,0,cord3S({len:110,w:12,T:t})),103.4);
  s+=actor('pipa',{t0:102.0,path:[[102.0,120]],emo:[[102.0,0,0],[102.5,10,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:102.1,path:[[102.1,420]],emo:[[102.1,0,0],[102.6,9,0],[106.2,17,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,107.0,107.7)));
  s+=G(0,0,1,0,Ts(270,352,'La Edad de',30),ao(t,107.1,.3))+G(0,0,1,0,Ts(270,398,'la Cuerda',34,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,107.2,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Smithsonian Magazine · Science Advances (Conard y Rots, 2024) · Scientific Reports (Hardy et al., 2020)',8.5,600)+Tn(270,474,'Science News · Universidad de Tubinga',8.5,600),ao(t,107.3,.3));
  s+=G(270,690,.7,0,NX.ropetool({asm:1,fib:1},t-107.0),ao(t,107.2,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:7.6,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:21.5,draw:s3,in:{type:'zoom',dur:.45,fx:270,fy:520,z:8}},
  {id:'4',a:33.75,draw:s4,in:{type:'whipU',dur:.32}},
  {id:'5',a:38.85,draw:s5,in:{type:'zoom',dur:.45,fx:270,fy:420,z:9}},
  {id:'6',a:49.0,draw:s6,in:{type:'whipL',dur:.32}},
  {id:'7',a:55.6,draw:s7,in:{type:'whipD',dur:.32}},
  {id:'8',a:74.3,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:87.25,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:98.05,draw:s10,in:{type:'glitch',dur:.3}},
  {id:'11',a:101.8,draw:s11,in:{type:'whipU',dur:.32}},
  {id:'END',a:106.9,draw:sEND,in:{type:'swap',dur:.4}}
];
HL=[{"t0": 0.05, "lines": [{"txt": "este trozo de", "sz": 30, "t": [0.05, 0.44, 0.75]}, {"txt": "*marfil*", "sz": 62, "t": [0.85]}], "t1": 1.9}, {"t0": 1.98, "lines": [{"txt": "casi", "sz": 30, "t": [1.98]}, {"txt": "40.000", "sz": 90, "t": [2.25], "num": true, "roll": 0.4}, {"txt": "años", "sz": 34, "t": [2.84], "gap": 0.95}], "t1": 4.44}, {"t0": 5.85, "lines": [{"txt": "una *máquina*", "sz": 52, "t": [5.85, 6.06]}, {"txt": "de hacer cuerdas", "sz": 30, "t": [6.46, 6.56, 6.81], "gap": 1.05}], "t1": 8.98}, {"t0": 9.06, "lines": [{"txt": "la Edad de", "sz": 30, "t": [9.06, 9.2, 9.45]}, {"txt": "*Piedra*", "sz": 62, "t": [9.57]}], "t1": 11.17}, {"t0": 15.09, "lines": [{"txt": "*pudren*", "sz": 62, "t": [15.09]}], "t1": 16.69}, {"t0": 25.55, "lines": [{"txt": "Hohle", "sz": 30, "t": [25.55]}, {"txt": "*Fels*", "sz": 62, "t": [25.76]}], "t1": 27.97}, {"t0": 28.05, "lines": [{"txt": "*15*", "sz": 90, "t": [28.05], "num": true, "roll": 0.4}, {"txt": "trozos", "sz": 30, "t": [28.41], "gap": 0.95}], "t1": 30.01}, {"t0": 41.27, "lines": [{"txt": "*ranuras*", "sz": 58, "t": [41.27]}, {"txt": "en espiral", "sz": 30, "t": [41.74, 41.85], "gap": 1.05}], "t1": 42.75}, {"t0": 42.83, "lines": [{"txt": "¿para qué", "sz": 30, "t": [42.83, 43.11]}, {"txt": "*sirven*?", "sz": 58, "t": [43.25]}], "t1": 44.85}, {"t0": 49.31, "lines": [{"txt": "*funcionó*", "sz": 62, "t": [49.31], "spark": true}], "t1": 50.91}, {"t0": 55.85, "lines": [{"txt": "¿la más", "sz": 30, "t": [55.85, 56.31]}, {"txt": "*antigua*?", "sz": 58, "t": [56.55]}], "t1": 58.15}, {"t0": 73.1, "lines": [{"txt": "*neandertales*", "sz": 50, "t": [73.1]}], "t1": 74.7}, {"t0": 78.16, "lines": [{"txt": "no es tan", "sz": 30, "t": [78.16, 78.34, 78.46]}, {"txt": "*fácil*", "sz": 62, "t": [78.66]}], "t1": 80.26}, {"t0": 85.69, "lines": [{"txt": "*19.000*", "sz": 80, "t": [85.69], "num": true, "roll": 0.4}, {"txt": "años", "sz": 30, "t": [86.42], "gap": 0.95}], "t1": 88.02}, {"t0": 104.09, "lines": [{"txt": "¿fuego, rueda", "sz": 30, "t": [104.09, 104.74]}, {"txt": "o *cuerda*?", "sz": 52, "t": [105.09, 105.29]}], "t1": 106.12}, {"t0": 106.2, "lines": [{"txt": "te leo en", "sz": 30, "t": [106.2, 106.4, 106.67]}, {"txt": "*comentarios*", "sz": 48, "t": [106.79]}], "t1": 106.82}];
