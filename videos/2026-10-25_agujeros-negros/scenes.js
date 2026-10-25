/* ===== DIARIO · Agujeros negros que ayudan a crear estrellas · 25/10/2026 ===== */
DUR=110.6;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=760;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const sky=(t,sd=0)=>G(270,480,1,0,NX.starsky({w:560,h:980,n:90,seed:sd},t));
function xMark(x,y,r,p){if(p<=0)return '';return DR(`M${x-r} ${y-r} L${x+r} ${y+r}`,ST(K.red,9),sg(p,0,.5))+DR(`M${x+r} ${y-r} L${x-r} ${y+r}`,ST(K.red,9),sg(p,.5,1));}
const WT=(x,y,str,sz,p,o={})=>p<=0?'':G(x,y,1,0,Ts(0,0,str,sz,Object.assign({fill:'#fff',stroke:'#fff'},o)),p);

/* 1 · fotograma 0: el chorro del agujero negro ya va disparado hacia la nube… y nacen estrellas */
function s1(t){const zm=lerp(1.1,1,EZ.out(sg(t,0,2.4))),sh=t>5.2&&t<5.9?Math.sin(t*60)*4*(1-(t-5.2)/.7):0;
  let w=sky(t);
  w+=G(150,470,1,0,NX.blackhole({r:44,jet:1,dir:90,len:70,glow:.9},t));
  w+=G(345+sh,470,1,0,NX.starbirth({w:390,hit:sg(t,-1.0,1.6),squeeze:sg(t,5.0,5.7),stars:sg(t,5.8,7.4)},t));
  let s=G(270,470,zm,0,G(-270,-470,1,0,w));
  if(t<5.0)s+=G(270,250,1,0,Rc(-170,-52,340,104,'#fff',16,OL(2.6))+Tn(0,-18,'MÁS DE',13,800,{fill:'#555',ls:.06})+G(0,26,1,0,NX.counter({value:1500000,suffix:' km/h',sz:36,dur:.6},t-2.4)),ap(t,2.3,.35)*(1-ao(t,4.8,.25)));
  s+=pillA(130,560,'agujero negro',sg(t,.4,.65),{fill:'#fff',tc:K.ink,sz:15,w:800,o:1-ao(t,4.8,.25)});
  s+=pillA(420,580,'nube de gas',sg(t,4.9,5.15),{fill:K.purple,sz:15,w:800});
  s+=WT(270,200,'y donde chocó…',40,ao(t,4.9,.3));
  s+=WT(270,280,'nacieron',36,ao(t,6.5,.3))+WT(270,345,'estrellas',66,ao(t,6.9,.3),{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'});
  return s;}
/* 2 · los monstruos que se lo tragan todo… también ayudan a crear estrellas */
function s2(t){let s=sky(t,3);
  s+=G(270,400,1.25,0,NX.blackhole({r:56,eat:1,glow:1},t));
  s+=G(0,0,1,0,stampA(270,170,t-10.1,'MONSTRUOS',{c:K.red,sz:30,r:-5}));
  s+=pillA(270,600,'se lo tragan todo',sg(t,11.0,11.25),{fill:K.red,sz:16,w:800,o:1-ao(t,11.9,.25)});
  if(t>11.9)for(let i=0;i<8;i++){const a=i/8*Math.PI*2,k=ap(t,12.4+i*.08,.3);s+=G(270+Math.cos(a)*190,400+Math.sin(a)*120,k*(1+.15*Math.sin(t*4+i)),0,spark4(12,i%2?'#bfe2ff':'#fff'));}
  s+=pillA(270,600,'¿también crean estrellas?',sg(t,12.0,12.25),{fill:'url(#gRP)',sz:17,w:800});
  s+=actor('garbanzo',{t0:8.3,path:[[8.3,430]],emo:[[8.3,9,0],[12.2,7,0]],s:.75,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=actor('pipa',{t0:12.3,path:[[12.3,110]],emo:[[12.3,7,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* 3 · vamos por partes: tan denso que ni la luz escapa */
function s3(t){let s=groundLine(1);
  s+=G(270,180,1,0,Ts(0,0,'vamos por',38),ap(t,14.5,.3)*(1-ao(t,15.8,.25)))+G(270,240,1,0,Ts(0,0,'partes',56,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,14.9,.3)*(1-ao(t,15.8,.25)));
  if(t>15.9){const p=ap(t,16.0,.35);let pan=Rc(-220,-170,440,340,'#0b0d1f',16,OL(2.6))+clipG(NX.starsky({w:440,h:340,n:30,seed:7},t),Rc(-220,-170,440,340,'#000',16));
    pan+=NX.blackhole({r:40,glow:.7},t);
    for(let i=0;i<5;i++){const y0=-120+i*60,q=((t-17.6)*.6+i*.17)%1;if(t<17.9)continue;const bend=y0*.7;const d=`M-210 ${y0} C-120 ${y0} -60 ${f1(bend*.5)} 0 0`;pan+=P(d,ST('#ffe27a',3,'stroke-dasharray:10 8;opacity:.9'));const x=lerp(-210,-30,q),y=lerp(y0,y0*.15,q*q);pan+=Ci(x,y,5,'#ffe27a');}
    s+=G(270,400,p,0,pan);
    s+=pillA(270,200,'muy, muy denso',sg(t,17.3,17.55),{fill:K.ink,sz:17,w:800});
    s+=pillA(270,615,'ni la luz escapa',sg(t,18.3,18.55),{fill:'url(#gRP)',sz:18,w:800});}
  s+=actor('lenteja',{t0:14.5,path:[[14.5,440]],emo:[[14.5,16,0],[17.0,2,0]],s:.75,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;}
/* 4 · cuando come, parte del gas sale disparado en chorros y vientos */
function s4(t){let s=sky(t,5);
  const j=sg(t,23.3,24.2);
  s+=G(270,480,1.15,0,NX.blackhole({r:46,eat:1-sg(t,24.6,25.6)*.5,jet:j,len:330},t));
  if(t>24.6)for(let k=0;k<4;k++){const u=((t-24.6)*.7+k/4)%1;const R=80+u*170;s+=P(`M${f1(270-R)} ${f1(480-R*.25)} Q${f1(270-R*1.1)} 480 ${f1(270-R)} ${f1(480+R*.25)}`,ST('#9fd2ff',4,`opacity:${f2((1-u)*.7)}`))+P(`M${f1(270+R)} ${f1(480-R*.25)} Q${f1(270+R*1.1)} 480 ${f1(270+R)} ${f1(480+R*.25)}`,ST('#9fd2ff',4,`opacity:${f2((1-u)*.7)}`));}
  s+=pillA(270,640,'no se lo traga todo',sg(t,21.0,21.25),{fill:'#fff',tc:K.ink,sz:16,w:800,o:1-ao(t,23.2,.25)});
  s+=pillA(130,300,'chorros',sg(t,24.2,24.45),{fill:'#fff',tc:K.ink,sz:17,w:800});
  s+=pillA(420,620,'vientos',sg(t,24.7,24.95),{fill:K.blue,sz:17,w:800});
  if(t<23.3)s+=WT(270,180,'cuando come…',44,ap(t,20.2,.3));
  return s;}
/* 5 · se pensaba que solo destruían: calientan el gas de las galaxias grandes */
function s5(t){let s=sky(t,9);
  if(t<29.6){s+=G(0,0,1,0,stampA(270,260,t-26.3,'SE PENSABA',{c:K.blue,sz:30,r:-4}));
    s+=G(270,480,1,0,NX.blackhole({r:40,jet:1,len:140},t),ap(t,26.4,.35));
    s+=G(270,700,1,0,Ts(0,0,'solo',40,{fill:'#fff',stroke:'#fff'})+Ts(0,58,'destruían',60,{it:true,fill:K.red,stroke:K.red}),ap(t,28.4,.35));}
  else{const q=sg(t,31.0,33.6);
    s+=G(270,430,1.25,0,NX.galaxy({r:170,quench:q,spin:5},t),ap(t,29.7,.4));
    s+=pillA(270,170,'galaxias grandes',sg(t,30.1,30.35),{fill:'#fff',tc:K.ink,sz:17,w:800});
    if(t>31.0)s+=G(110,640,1,0,Rc(-80,-36,160,72,'#fff',14,OL(2.4))+Tn(0,-8,'GAS',12,800,{fill:'#555',ls:.06})+Tn(0,20,'muy caliente',17,800,{fill:K.red}),ap(t,31.0,.3));
    if(t>32.6)s+=G(400,640,1,0,Rc(-100,-36,200,72,'#fff',14,OL(2.4))+Tn(0,-8,'NO SE ENFRÍA',12,800,{fill:'#555',ls:.06})+Tn(0,20,'0 estrellas nuevas',16,800,{fill:K.ink}),ap(t,32.7,.3))+xMark(400,640,46,sg(t,33.8,34.4));}
  return s;}
/* 6 · como si apagara su propia galaxia */
function s6(t){let s=Rc(0,0,540,960,'#05060d');const off=sg(t,36.4,37.0);
  s+=G(270,380,1,0,NX.galaxy({r:150,quench:.3+off*.7,spin:5},t),1-off*.8);
  const k=EZ.back(sg(t,35.1,35.4));s+=G(270,640,k,0,Rc(-46,-70,92,140,'#f2f2f2',14,OL(3))+Rc(-18,-44,36,88,'#ccc',8,OL(2))+G(0,lerp(-22,22,EZ.io(off)),1,0,Rc(-16,-20,32,40,off>.5?'#555':'#ffd23f',6,OL(2))));
  s+=pillA(270,770,'apagada',sg(t,37.0,37.25),{fill:K.red,sz:17,w:800});
  s+=WT(270,150,'como si la',34,ap(t,35.0,.3))+WT(270,210,'apagara',58,ap(t,36.4,.3),{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'});
  return s;}
/* 7 · 2022: el Hubble mira a Henize 2-10, galaxia enana a 30 millones de años luz */
function s7(t){let s='';
  if(t<39.8){s+=Rc(0,0,540,960,'#c6c6c6')+G(270,470,1,0,Ts(0,0,'2022',150,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,38.7,.35));
    s+=G(270,330,1,0,Ts(0,0,'pero en',40),ap(t,38.4,.3));}
  else if(t<41.2){s+=G(270,560,1.05,0,NX.telescope({},t-39.8));s+=pillA(270,600,'telescopio Hubble',sg(t,40.6,40.85),{fill:K.blue,sz:18,w:800});}
  else{s+=sky(t,11);const z=lerp(.6,1.1,EZ.out(sg(t,41.2,42.4)));s+=G(270,420,z,0,NX.galaxy({type:'dwarf',r:150,bh:1},t));
    s+=pillA(270,170,'Henize 2-10',sg(t,41.4,41.65),{fill:'#fff',tc:K.ink,sz:22,w:800});
    s+=pillA(270,630,'galaxia enana',sg(t,43.2,43.45),{fill:K.purple,sz:17,w:800});
    if(t>43.7)s+=G(270,730,1,0,Rc(-150,-40,300,80,'#fff',14,OL(2.4))+G(0,12,1,0,NX.counter({value:30,suffix:' M años luz',sz:30,dur:.6},t-43.8)),ap(t,43.7,.3));}
  return s;}
/* 8 · su agujero negro pesa como un millón de soles */
function s8(t){let s=groundLine(1);const tilt=lerp(-14,0,EZ.io(sg(t,47.6,48.4)));
  s+=G(270,600,1,0,P('M0 0 L0 -220',ST(K.ink,8))+P('M-60 150 L60 150 L0 0Z',`fill:#555;${OL(2)}`)+G(0,-220,1,tilt,P('M-190 0 L190 0',ST(K.ink,7))+G(-170,0,1,-tilt,P('M0 0 L0 60',ST(K.ink,3))+El(0,64,60,12,'#999',OL(2))+G(0,40,1,0,NX.blackhole({r:20,glow:.5},t)))+G(170,0,1,-tilt,P('M0 0 L0 60',ST(K.ink,3))+El(0,64,60,12,'#999',OL(2))+[...Array(10)].map((_,i)=>{const k=ap(t,46.9+i*.08,.25);return k>0?G(-36+(i%4)*24,52-Math.floor(i/4)*20,k*.24,0,sunS(40)):'';}).join(''))),ap(t,45.8,.35));
  if(t>47.3)s+=G(270,220,1,0,Rc(-190,-52,380,104,'#fff',16,OL(2.6))+Tn(0,-18,'PESA COMO',13,800,{fill:'#555',ls:.06})+G(0,26,1,0,NX.counter({value:1000000,suffix:' soles',sz:36,dur:.7},t-47.4)),ap(t,47.3,.35));
  s+=actor('grano',{t0:46.0,path:[[46.0,90]],emo:[[46.0,7,0]],s:.6,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* 9 · su chorro, más lento y suave, llega a una nube a 230 años luz */
function s9(t){let s=sky(t,13);
  s+=G(80,470,1,0,NX.blackhole({r:34,jet:1,dir:90,len:60,soft:1,glow:.8},t));
  s+=G(300,470,1,0,NX.starbirth({w:440,hit:sg(t,49.2,52.0)},t));
  s+=pillA(220,330,'más lento y suave',sg(t,49.8,50.05),{fill:'#fff',tc:K.ink,sz:16,w:800});
  s+=pillA(440,600,'nube de gas',sg(t,51.7,51.95),{fill:K.purple,sz:15,w:800});
  if(t>52.3){const q=EZ.out(sg(t,52.3,53.0));s+=P(`M80 680 L80 696 L${f1(lerp(80,440,q))} 696 L${f1(lerp(80,440,q))} 680`,ST('#fff',3));
    s+=G(260,750,1,0,Rc(-100,-30,200,60,'#fff',12,OL(2.4))+G(0,10,1,0,NX.counter({value:230,suffix:' años luz',sz:24,dur:.6},t-52.4)),ap(t,52.4,.3));}
  return s;}
/* 10 · como una manguera contra un montón de tierra (recurso nuevo hosepile) */
function s10(t){let s=groundLine(1,620);
  s+=G(270,560,1.2,0,NX.hosepile({on:sg(t,55.9,56.5),push:sg(t,56.6,57.8)},t));
  s+=WT(270,220,'la apretó',46,ap(t,55.2,.3),{fill:K.ink,stroke:K.ink});
  s+=pillA(270,300,'como una manguera',sg(t,56.0,56.25),{fill:K.blue,sz:17,w:800});
  s+=pillA(370,420,'montón de tierra',sg(t,57.1,57.35),{fill:'#8a5a36',sz:15,w:800});
  s+=actor('pipa',{t0:54.6,path:[[54.6,90]],emo:[[54.6,10,0],[57.5,7,0]],s:.6,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;}
/* 11 · a lo largo del camino nacen cúmulos de estrellas · «cordón umbilical» (recurso nuevo starbirth) */
function s11(t){let s=sky(t,13);
  s+=G(80,470,1,0,NX.blackhole({r:34,jet:1,dir:90,len:60,soft:1,glow:.8},t));
  s+=G(300,470,1,0,NX.starbirth({w:440,hit:1,squeeze:sg(t,58.0,58.6),stars:sg(t,59.3,61.4),cord:sg(t,64.3,64.9)},t));
  s+=pillA(270,300,'cúmulos de estrellas',sg(t,60.0,60.25),{fill:'#fff',tc:K.ink,sz:16,w:800,o:1-ao(t,62.3,.25)});
  s+=pillA(270,630,'recién nacidas',sg(t,61.0,61.25),{fill:'url(#gRP)',sz:17,w:800,o:1-ao(t,62.3,.25)});
  s+=pillA(300,600,'«cordón umbilical»',sg(t,64.5,64.75),{fill:K.pink,sz:17,w:800});
  if(t>62.4)s+=WT(270,230,'los astrónomos',36,ap(t,62.5,.3));
  s+=actor('lenteja',{t0:62.6,path:[[62.6,450]],emo:[[62.6,3,0]],s:.6,y:()=>GY+40,face:()=>-1,look:()=>-1},t);
  return s;}
/* 12 · no es un caso aislado: 2026, Centro de Astrofísica Harvard-Smithsonian, 9 galaxias */
function s12(t){let s='';
  if(t<69.2){s+=Rc(0,0,540,960,'#0d0b0c');
    s+=WT(270,360,'no es un caso',40,ap(t,65.9,.3))+WT(270,430,'aislado',62,ap(t,66.7,.3),{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'});
    s+=G(270,600,1,0,Ts(0,0,'2026',96,{fill:'#fff',stroke:'#fff'}),ap(t,67.9,.35));}
  else{s+=sky(t,17);
    s+=G(270,150,1,0,Rc(-210,-44,420,88,'#fff',14,OL(2.4))+Tn(0,-10,'CENTRO DE ASTROFÍSICA',14,800,{fill:'#555',ls:.06})+Tn(0,20,'Harvard-Smithsonian',22,800,{fill:K.ink}),ap(t,69.4,.35));
    for(let i=0;i<9;i++){const k=ap(t,72.6+i*.09,.3);if(k<=0)continue;const x=110+(i%3)*160,y=330+Math.floor(i/3)*160;
      s+=G(x,y,k,0,Rc(-70,-70,140,140,'rgba(255,255,255,.06)',14,OL(2,'#fff'))+G(0,0,.42,(i*37)%180,NX.galaxy({type:i%3===1?'dwarf':'spiral',r:120,spin:4+i},t+i))+Ci(0,0,6+3*Math.abs(Math.sin(t*4+i)),'#ffd27a',`opacity:${f2(sg(t,74.6,75.0))}`));}
    s+=actor('lenteja',{t0:69.4,t1:72.9,path:[[69.4,-40],[71.6,200]],emo:[[69.4,2,0],[71.6,7,0]],prop:()=>PROP.lupa,s:.8,y:()=>620,exit:72.5,face:()=>1,look:()=>1},t);
    s+=actor('garbanzo',{t0:69.6,t1:72.9,path:[[69.6,-120],[71.9,350]],emo:[[69.6,2,0],[71.9,9,0]],s:.8,y:()=>620,exit:72.5,face:()=>1,look:()=>-1},t);
    s+=pillA(270,820,'agujeros negros activos',sg(t,74.2,74.45),{fill:'url(#gRP)',sz:16,w:800});}
  return s;}
/* 13 · el mismo patrón: anillos de estrellas y ondas de choque perpendiculares a los chorros (recurso nuevo galrings) */
function s13(t){let s=sky(t,19);
  s+=G(270,470,1.2,0,NX.galrings({r:170,jet:sg(t,75.6,76.4),rings:sg(t,77.9,79.4),shock:sg(t,81.9,82.7),arrows:t>83.5?1:0},t));
  s+=pillA(270,140,'el mismo patrón',sg(t,77.0,77.25),{fill:'#fff',tc:K.ink,sz:18,w:800});
  s+=pillA(130,330,'anillos',sg(t,78.0,78.25),{fill:K.pink,sz:15,w:800});
  if(t>79.7){const q=EZ.out(sg(t,79.7,80.4));s+=P(`M270 720 L${f1(270+170*1.2*.62*q)} 720`,ST('#fff',3))+P('M270 712 L270 728',ST('#fff',3));
    s+=pillA(330,770,'miles de años luz',sg(t,80.1,80.35),{fill:'#fff',tc:K.ink,sz:14,w:800});}
  s+=pillA(420,330,'ondas de choque',sg(t,82.2,82.45),{fill:'#7fd3ff',tc:K.ink,sz:15,w:800});
  s+=pillA(270,215,'chorros',sg(t,84.5,84.75),{fill:'#fff',tc:K.ink,sz:15,w:800});
  if(t>83.5)s+=G(0,0,1,0,stampA(400,840,t-83.6,'PERPENDICULAR',{c:K.pink,sz:20,r:-4}));
  return s;}
/* 14 · come, escupe y sacude · apaga en unos sitios y enciende en otros */
function s14(t){let s='';
  if(t<91.0){s+=Rc(0,0,540,960,'#c6c6c6')+groundLine(1);
    s+=WT(270,170,'o sea',44,ap(t,86.4,.3),{fill:K.ink,stroke:K.ink});
    s+=actor('grano',{t0:86.4,path:[[86.4,270]],emo:[[86.4,16,0],[88.0,2,0]],s:.7,y:()=>GY,face:()=>1,look:()=>0},t);
    [['come','#ff8a4a',88.0],['escupe','#9fd2ff',88.4],['sacude','#7fd3ff',89.0]].forEach(([n,c,a],i)=>{const k=ap(t,a,.3);if(k<=0)return;const x=100+i*170;
      let ic=Rc(-70,-90,140,180,'#0b0d1f',14,OL(2.6))+G(0,-10,.9,0,NX.blackhole({r:20,eat:i==0?1:0,jet:i==1?1:0,len:70,glow:.6},t));
      if(i==2)for(let q=0;q<2;q++){const u=((t*.8)+q/2)%1,R=30+u*40;ic+=Ci(0,-10,R,'none',ST(c,3,`opacity:${f2(1-u)}`));}
      s+=G(x,430,k,0,clipG(ic,Rc(-70,-90,140,180,'#000',14))+Rc(-70,-90,140,180,'none',14,OL(2.6))+G(0,120,1,0,pill(n,{sz:17,w:800,fill:K.ink})));});}
  else{s+=Rc(0,0,270,960,'#05060d')+sky(t,23);
    const L=clipG(Rc(0,0,270,960,'#05060d')+G(135,430,.8,0,NX.galaxy({r:140,quench:sg(t,91.6,92.6),spin:5},t)),Rc(0,0,270,960,'#000'));
    const R=clipG(G(405,430,.7,0,NX.galrings({r:150,jet:1,rings:sg(t,94.0,95.0),shock:0},t)),Rc(270,0,270,960,'#000'));
    s+=L+R+P('M270 0 L270 960',ST('#fff',3));
    s+=pillA(135,650,'apaga',sg(t,92.0,92.25),{fill:K.red,sz:20,w:800});
    s+=pillA(405,650,'enciende',sg(t,94.5,94.75),{fill:'url(#gRP)',sz:20,w:800});
    s+=pillA(135,180,'en unos sitios',sg(t,91.2,91.45),{fill:'#fff',tc:K.ink,sz:14,w:800});
    s+=pillA(405,180,'en otros',sg(t,93.9,94.15),{fill:'#fff',tc:K.ink,sz:14,w:800});}
  return s;}
/* 15 · no solo destructores: jardineros del universo */
function s15(t){let s=sky(t,29);
  s+=G(270,480,1,0,NX.blackhole({r:40,jet:1,len:115,glow:.8},t));
  if(t<98.1){s+=G(0,0,1,0,stampA(270,700,t-96.9,'DESTRUCTORES',{c:K.red,sz:28,r:-4}));if(t>97.4)s+=P('M110 700 L430 700',ST('#fff',7));
    s+=WT(270,190,'no son solo…',40,ap(t,95.6,.3));}
  else{for(let i=0;i<9;i++){const k=sg(t,98.4+i*.12,99.2+i*.12);if(k<=0)continue;const a=i/9*Math.PI*2,rx=200,ry=150,x=270+Math.cos(a)*rx,y=500+Math.sin(a)*ry;const h=40*EZ.out(k);
      s+=P(`M${f1(x)} ${f1(y)} L${f1(x)} ${f1(y-h)}`,ST('#5fb04a',4))+El(x-8,y-h*.5,8,4,'#5fb04a')+G(x,y-h,EZ.back(sg(k,.5,1)),t*30+i*20,spark4(13,i%2?'#ffe27a':'#bfe2ff'));}
    s+=WT(270,170,'los',36,ap(t,99.2,.3))+WT(270,240,'jardineros',64,ap(t,99.4,.3),{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'})+WT(270,300,'del universo',34,ap(t,100.0,.3));}
  s+=actor('grano',{t0:98.3,path:[[98.3,120]],emo:[[98.3,3,0]],s:.6,y:()=>GY+60,face:()=>1,look:()=>1},t);
  return s;}
/* 16 · pregunta: ¿te acercarías? */
function s16(t){let s=sky(t,31);const z=lerp(.5,1,EZ.io(sg(t,102.8,104.0)));
  s+=G(270,470,z,0,NX.blackhole({r:44,eat:.6,jet:1,len:160,glow:.9},t));
  s+=actor('pipa',{t0:101.3,path:[[101.3,110]],emo:[[101.3,7,0],[104.5,9,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:101.4,path:[[101.4,430]],emo:[[101.4,8,0],[105.4,10,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=WT(270,150,'y tú, si pudieras,',34,ap(t,101.6,.3))+WT(270,225,'¿te acercarías?',56,ap(t,105.4,.3),{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'});
  s+=pillA(270,660,'sin ningún peligro',sg(t,104.3,104.55),{fill:'#fff',tc:K.ink,sz:16,w:800,o:1-ao(t,106.6,.25)});
  s+=pillA(270,660,'Te leo en comentarios',sg(t,106.7,106.95),{fill:'url(#gRP)',sz:16,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,108.2,108.8)));
  s+=G(0,0,1,0,Ts(270,352,'Agujeros negros que',28),ao(t,108.25,.3))+G(0,0,1,0,Ts(270,398,'crean estrellas',36,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,108.35,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'NASA/ESA Hubble · Nature (Schutte y Reines, 2022)',9.5,600)+Tn(270,474,'Center for Astrophysics | Harvard & Smithsonian (2026) · Universe Today',9.5,600),ao(t,108.6,.3));
  s+=G(270,700,.9,0,Rc(-120,-120,240,240,'#0b0d1f',120)+NX.blackhole({r:30,jet:1,len:100,glow:.7},t),ao(t,108.6,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:7.85,draw:s2,in:{type:'whipD',dur:.32}},
  {id:'3',a:14.2,draw:s3,in:{type:'glitch',dur:.3}},
  {id:'4',a:19.7,draw:s4,in:{type:'zoom',dur:.45,fx:270,fy:400,z:6}},
  {id:'5',a:26.0,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:34.75,draw:s6,in:{type:'glitch',dur:.3}},
  {id:'7',a:38.2,draw:s7,in:{type:'whipU',dur:.32}},
  {id:'8',a:45.6,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:48.7,draw:s9,in:{type:'iris',dur:.4,fx:270,fy:480,r0:10}},
  {id:'10',a:54.25,draw:s10,in:{type:'whipD',dur:.32}},
  {id:'11',a:57.9,draw:s11,in:{type:'whipU',dur:.32}},
  {id:'12',a:65.6,draw:s12,in:{type:'glitch',dur:.3}},
  {id:'13',a:75.45,draw:s13,in:{type:'zoom',dur:.45,fx:270,fy:480,z:6}},
  {id:'14',a:86.2,draw:s14,in:{type:'whipL',dur:.32}},
  {id:'15',a:95.3,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'16',a:100.95,draw:s16,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'END',a:108.2,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[];
