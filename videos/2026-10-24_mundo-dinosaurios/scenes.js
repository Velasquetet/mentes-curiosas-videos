/* ===== DIARIO · Cómo era el mundo de los dinosaurios (sin contar los dinosaurios) · 24/10/2026 ===== */
DUR=129.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=760;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const INDIA=[77.5,21.5],OMAN=[57.6,23.1];
function card(x,y,top,big,col,lt,w=240){return G(x,y,EZ.back(sg(lt,0,.3)),0,Rc(-w/2,-46,w,92,'#fff',14,OL(2.4))+Tn(0,-16,top,13,800,{fill:'#555'})+Tn(0,22,big,30,800,{fill:col||K.ink}),cl(lt*4));}
function xMark(x,y,r,p){if(p<=0)return '';return DR(`M${x-r} ${y-r} L${x+r} ${y+r}`,ST(K.red,9),sg(p,0,.5))+DR(`M${x+r} ${y-r} L${x-r} ${y+r}`,ST(K.red,9),sg(p,.5,1));}
function ptero(x,y,s,T,ph=0){const f=Math.sin(T*6+ph)*14;return G(x,y,s,0,P(`M-40 ${f1(-f)} Q-20 -8 0 0 Q20 -8 40 ${f1(-f)} L22 2 Q0 10 -22 2Z`,`fill:#6b4a8a;${OL(1.6)}`)+P('M0 -2 L18 -10 L10 -2Z',`fill:#6b4a8a;${OL(1.4)}`));}
function lawn(w,h,T){let s=Rc(-w/2,-h,w,h,'#5fb04a',8,OL(2.4));for(let i=0;i<34;i++){const x=-w/2+8+hs(i*2.7)*(w-16),y=-h+10+hs(i*5.3)*(h-14);s+=P(`M${f1(x)} ${f1(y)} l-3 -10 M${f1(x)} ${f1(y)} l3 -11`,ST('#3f8f35',2.2));}return s;}
/* paisaje mesozoico: sol, nubes, colinas violeta, volcán, vegetación y suelo de tierra (sin hierba) */
function mesoLand(t,o={}){let s='';const T=t;
  s+=G(290,o.sunY||300,1,0,sunS(70));
  s+=G(90+t*4%60,250,1,0,cloudS(90))+G(430+t*2.5%60,200,1,0,cloudS(64));
  s+=G(470,560,1,0,P('M-110 0 L-30 -150 L20 -150 L110 0Z','fill:#7b3fb0')+P('M-30 -150 L20 -150 L4 -120 L-14 -132Z','fill:#ff8a3d')+G(0,-170-(t*14%50),1,0,Ci(0,0,18+(t*10%30),'rgba(120,110,120,.35)')));
  s+=G(60,560,1,0,humpS(260,120))+G(280,560,1,0,humpS(320,150));
  if(o.sauro!==false)s+=G(330,560,.42,0,sauropodS({T,c:'#5c02b0'}));
  s+=Rc(-20,556,580,900,o.soil||'#b98a5c')+P('M-20 556 L560 556',ST('#8a6240',3));
  for(let i=0;i<34;i++){const x=hs(i*3.1)*540,y=580+hs(i*7.7)*700;s+=El(x,y,4+hs(i)*8,2+hs(i)*3,'#9a6f46');}
  if(o.flora!==false)s+=G(270,600,.62,0,NX.prehflora({},T));
  return s;}

/* 1 · fotograma 0: el T. rex ruge en la época de los dinosaurios… pero lo raro es el suelo */
function s1(t){let s='';const pan=EZ.io(sg(t,4.7,5.5));
  let w=mesoLand(t);
  for(let i=0;i<3;i++)w+=ptero(((t*60+i*190)%700)-80,180+i*40+Math.sin(t+i)*8,.7,t,i);
  const sh=t<2.4?Math.sin(t*40)*3*(1-t/2.4):0;
  w+=G(lerp(225,170,EZ.out(sg(t,0,2))),900+sh,.88,0,trexS({T:t,lips:0,open:t<1.6?.5+.45*Math.abs(Math.sin(t*3)):.15,walk:t<2?1:0}));
  if(t>4.5)w+=G(270,1010,1,0,Ci(0,0,90,'none',ST(K.red,6))+Ts(0,24,'?',80,{it:true,fill:K.red,stroke:K.red}),ap(t,5.2,.35));
  const zm=lerp(1.14,1,EZ.out(sg(t,0,2.2)));w=G(270,700,zm,0,G(-270,-700,1,0,w));
  s+=G(0,-pan*330,1,0,w);
  if(t<4.8){s+=G(270,110,1,0,Ts(0,0,'la época de los',36),1-ao(t,4.5,.3))+G(270,172,1,0,Ts(0,0,'dinosaurios',64,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),1-ao(t,4.5,.3));}
  if(t>2.6&&t<4.8)s+=pillA(270,232,'lo más raro no serían ellos…',sg(t,2.65,2.9),{fill:K.ink,sz:16,w:800,o:1-ao(t,4.5,.3)});
  if(t>4.8)s+=pillA(270,180,'…sino el suelo',sg(t,4.9,5.15),{fill:'url(#gRP)',sz:20,w:800});
  return s;}
/* 2 · casi no había hierba: ni prados ni césped */
function s2(t){let s=Rc(0,0,540,960,'#b98a5c');
  for(let i=0;i<40;i++)s+=El(hs(i*3.1)*540,hs(i*7.7)*960,4+hs(i)*9,2+hs(i)*4,'#9a6f46');
  s+=G(270,300,1,0,Rc(-200,-60,400,120,'#fff',16,OL(2.6))+Tn(0,-14,'CASI NO HABÍA',15,800,{fill:'#555',ls:.06})+Tn(0,32,'hierba',44,800,{fill:K.green}),ap(t,6.1,.35));
  if(t>7.9){s+=G(150,560,EZ.back(sg(t,7.9,8.2)),-4,lawn(200,130,t)+Tn(0,30,'prados',20,800,{fill:K.ink}));s+=xMark(150,495,70,sg(t,8.3,8.7));}
  if(t>8.7){s+=G(390,560,EZ.back(sg(t,8.7,9.0)),4,lawn(170,110,t)+Tn(0,30,'césped',20,800,{fill:K.ink}));s+=xMark(390,505,60,sg(t,9.0,9.4));}
  s+=actor('garbanzo',{t0:6.4,path:[[6.4,270]],emo:[[6.4,7,0],[8.4,9,1]],s:.85,y:()=>770,face:()=>1,look:()=>1},t);
  return s;}
/* 3 · se pensaba que la hierba llegó cuando ya se habían extinguido */
function s3(t){let s=groundLine(1);
  const X=ma=>480-ma/240*440;
  s+=G(0,0,1,0,stampA(270,170,t-9.9,'SE PENSABA',{c:K.blue,sz:28,r:-4}));
  const p=EZ.io(sg(t,10.0,11.0));
  s+=DR(`M40 420 L500 420`,ST(K.ink,4),p);
  [[230,'230 Ma'],[66,'66 Ma'],[0,'hoy']].forEach(([m,l],i)=>{if(p>i*.3)s+=G(X(m),420,ap(t,10.1+i*.25,.3),0,Ci(0,0,8,'#fff',OL(3))+Tn(0,32,l,14,800,{fill:'#333'}));});
  if(t>10.4)s+=G(0,0,1,0,Rc(X(230),360,(X(66)-X(230))*EZ.out(sg(t,10.4,11.2)),36,'#3f9b4f',10,OL(2))+Tn((X(230)+X(66))/2,384,'dinosaurios',15,800,{fill:'#fff'}),cl((t-10.4)*4));
  if(t>11.6){const q=EZ.back(sg(t,11.7,12.0));s+=G(X(40),400,q,0,P('M-18 0 Q-14 -30 -22 -50 M-6 0 Q-4 -34 -2 -60 M6 0 Q8 -30 14 -54 M18 0 Q22 -26 28 -44',ST('#4f9a42',4))+G(0,-80,1,0,pill('hierba',{sz:14,w:800,fill:K.green})));}
  if(t>12.6){const q=sg(t,12.6,13.5);s+=G(lerp(X(66)+120,X(66),q),lerp(250,380,q),1,0,Ci(0,0,16,'#7a6a5a',OL(2))+P('M10 -10 L60 -50 M4 -14 L40 -60',ST('#ff8a3d',4,`opacity:${f2(1-q*.5)}`)),q<1?1:1-ao(t,13.6,.2));
    if(q>=1){const b=ao(t,13.5,.3);let r='';for(let i=0;i<10;i++){const a=i/10*Math.PI*2;r+=P(`M${f1(Math.cos(a)*(20+30*b))} ${f1(Math.sin(a)*(20+30*b))} L${f1(Math.cos(a)*(34+50*b))} ${f1(Math.sin(a)*(34+50*b))}`,ST(K.orange,4));}s+=G(X(66),400,1,0,r,1-ao(t,14.1,.3));}}
  if(t>13.6)s+=pillA(X(66)-80,320,'extinción',sg(t,13.7,13.95),{fill:K.red,sz:14,w:800});
  s+=actor('lenteja',{t0:9.9,path:[[9.9,120]],emo:[[9.9,2,0],[12.6,2,1]],s:.9,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=G(0,0,1,0,'');
  return s;}
/* 4 · India: cacas fosilizadas de saurópodos (65 Ma) con restos microscópicos de hierba (recurso nuevo coprolite) */
function s4(t){let s='';
  if(t<16.75){s+=G(270,470,1,0,NX.map({focus:'India',zoom:9,zoomAt:-.3,highlight:['India'],pins:[[INDIA[0],INDIA[1],'India']],w:480,h:460},t-14.8+.2));
    s+=pillA(270,200,'hasta que…',sg(t,14.95,15.2),{fill:K.ink,sz:17,w:800});}
  else{s+=groundLine(1);
    {const ex=EZ.in2(sg(t,20.9,21.9));s+=G(lerp(640,340,EZ.out(sg(t,16.8,17.8)))+ex*420,GY,.9,0,sauropodS({T:t,c:'#5c02b0'}));}
    {const m=EZ.io(sg(t,21.3,22.2));s+=G(lerp(120,190,m),GY-lerp(32,50,m),lerp(.62,1,m),0,NX.coprolite({zoom:sg(t,21.8,22.6),label:t>23.1?'restos de hierba':''},t-16.8));}
    s+=pillA(120,590,'caca fosilizada',sg(t,17.1,17.35),{fill:'#8a6a48',sz:15,w:800,o:1-ao(t,21.2,.3)});
    s+=pillA(420,500,'saurópodo',sg(t,17.9,18.15),{fill:'#5c02b0',sz:15,w:800,o:1-ao(t,20.9,.3)});
    if(t>19.3&&t<21.5)s+=G(270,250,1,0,Rc(-150,-58,300,116,'#fff',16,OL(2.6))+Tn(0,-20,'HACE UNOS',13,800,{fill:'#555',ls:.06})+G(0,28,1,0,NX.counter({value:65,suffix:' M años',sz:40,dur:.8},t-19.3)),ap(t,19.3,.35)*(1-ao(t,21.3,.25)));
    if(t>22.1)s+=pillA(310,200,'¡microscópicos!',sg(t,22.2,22.45),{fill:K.ink,sz:16,w:800});}
  return s;}
/* 5 · algo había, pero muy poca · las grandes praderas llegaron después */
function s5(t){let s='';const gr=sg(t,24.6,25.4),pr=EZ.io(sg(t,27.2,28.6));
  s+=mesoLand(t,{soil:mixc('#b98a5c','#6fb050',pr),flora:true,sauro:t<27.2});
  for(let i=0;i<5;i++){const x=60+i*105,k=EZ.back(cl(gr*1.4-i*.1));if(k>0)s+=G(x,720,k*1.4,0,P('M-10 0 Q-8 -18 -14 -30 M-3 0 Q-2 -22 0 -36 M4 0 Q6 -18 10 -32 M10 0 Q14 -14 18 -26',ST('#4f9a42',3)));}
  if(pr>0)for(let i=0;i<70;i++){const x=hs(i*2.3)*560-10,y=580+hs(i*4.1)*360;s+=G(x,y,pr*(.8+hs(i)*.6),0,P('M-6 0 Q-5 -12 -9 -20 M0 0 Q0 -14 2 -24 M6 0 Q8 -12 11 -18',ST(i%2?'#3f8f35':'#7cc46a',2.6)));}
  s+=pillA(270,180,'algo había…',sg(t,24.9,25.15),{fill:K.ink,sz:17,w:800,o:1-ao(t,27.0,.25)});
  s+=pillA(270,235,'pero muy poca',sg(t,25.8,26.05),{fill:K.red,sz:17,w:800,o:1-ao(t,27.0,.25)});
  s+=pillA(270,200,'las grandes praderas',sg(t,27.3,27.55),{fill:K.green,sz:18,w:800});
  s+=pillA(270,255,'llegaron después',sg(t,28.5,28.75),{fill:'url(#gRP)',sz:18,w:800});
  s+=actor('grano',{t0:25.0,path:[[25.0,440]],emo:[[25.0,16,0],[27.4,7,0]],s:.8,y:()=>770,face:()=>-1,look:()=>-1},t);
  return s;}
/* 6 · segunda rareza: las flores · primeros dinosaurios hace 230 Ma, primeras flores hace 130 Ma: 100 Ma sin flores */
function flower(r,c='#ff6fa3'){return [0,72,144,216,288].map(a=>G(0,0,1,a,El(0,-r*.55,r*.36,r*.55,c,OL(2)))).join('')+Ci(0,0,r*.3,'#f6c21a',OL(2));}
function s6(t){let s='';
  if(t<31.8){s+=G(270,430,1,0,Ts(0,0,'2',260,{fill:'#fff',stroke:'#fff'}),ap(t,29.6,.35));
    s+=G(270,470,EZ.back(sg(t,30.8,31.2)),t*40,flower(70));
    s+=pillA(270,640,'las flores',sg(t,30.85,31.1),{fill:'url(#gRP)',sz:22,w:800});}
  else{const X=ma=>480-ma/240*440;s+=groundLine(1);
    const p=EZ.io(sg(t,31.9,32.8));s+=DR('M40 470 L500 470',ST(K.ink,4),p);
    [[230,'230 Ma'],[130,'130 Ma'],[0,'hoy']].forEach(([m,l],i)=>{if(p>i*.3)s+=G(X(m),470,ap(t,32.0+i*.25,.3),0,Ci(0,0,8,'#fff',OL(3))+Tn(0,32,l,14,800,{fill:'#333'}));});
    if(t>32.5)s+=G(X(230)+20,450,.22,0,trexS({T:t,c:'#3f9b4f'}),ap(t,32.6,.35))+pillA(100,215,'primeros dinosaurios',sg(t,32.6,32.85),{fill:K.green,sz:14,w:800});
    if(t>34.4)s+=G(100,290,1,0,Rc(-70,-34,140,68,'#fff',14,OL(2.4))+G(0,14,1,0,NX.counter({value:230,sz:34,dur:.8},t-34.4)),ap(t,34.4,.3));
    if(t>37.6){s+=G(X(130),430,EZ.back(sg(t,37.7,38.0)),0,P('M0 40 L0 0',ST('#3f9b4f',4))+flower(22));s+=G(X(130)+30,365,1,0,Rc(-70,-34,140,68,'#fff',14,OL(2.4))+G(0,14,1,0,NX.counter({value:130,sz:34,dur:.8},t-38.6)),ap(t,38.6,.3))+pillA(X(130)+30,295,'primeras flores',sg(t,37.7,37.95),{fill:K.pink,sz:14,w:800});}
    if(t>40.6){const q=EZ.out(sg(t,40.7,41.5));s+=P(`M${X(230)} 540 L${X(230)} 556 L${f1(lerp(X(230),X(130),q))} 556 L${f1(lerp(X(230),X(130),q))} 540`,ST(K.red,4));
      s+=G((X(230)+X(130))/2,600,1,0,Rc(-120,-30,240,60,'#fff',12,OL(2.4))+Tn(0,9,'100 M años',26,800,{fill:K.red}),ap(t,41.0,.35));
      s+=G((X(230)+X(130))/2,670,1,0,pill('sin una sola flor',{sz:16,w:800,fill:K.ink}),ap(t,41.9,.3));}
    s+=actor('pipa',{t0:33.0,path:[[33.0,440]],emo:[[33.0,2,0],[41.0,7,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);}
  return s;}
/* 7 · helechos, coníferas, cícadas y ginkgos · las primeras flores, diminutas (recurso nuevo prehflora) */
function s7(t){let s=groundLine(1,700);
  s+=G(270,700,1,0,NX.prehflora({fern:sg(t,43.85,44.2),con:sg(t,44.55,44.9),cyc:sg(t,45.35,45.7),gink:sg(t,45.85,46.2),flowers:sg(t,47.7,48.3),labels:true},t));
  if(t>48.3){const q=ap(t,48.3,.35);s+=P('M328 640 L380 470',ST(K.ink,3,`opacity:${f2(q)}`))+G(400,400,q,0,clipG(Rc(-90,-90,180,180,'#e9e4d8')+G(0,60,4,0,P('M0 0 L0 -14',ST('#3f9b4f',1.6))+[0,72,144,216,288].map(a=>G(0,-16,1,a,El(0,-4,2.4,4,'#fff',OL(.8)))).join('')+Ci(0,-16,2,'#f6c21a')),Ci(0,0,90,'#000'))+Ci(0,0,90,'none',ST(K.ink,6)));
    s+=pillA(400,520,'diminutas',sg(t,48.5,48.75),{fill:'url(#gRP)',sz:17,w:800});}
  s+=pillA(270,200,'todo era así',sg(t,43.4,43.65),{fill:K.ink,sz:17,w:800,o:1-ao(t,47.2,.3)});
  if(t>47.0)s+=G(220,280,1,0,Ts(0,0,'primeras',34),ao(t,47.2,.3))+G(220,330,1,0,Ts(0,0,'flores',46,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,47.7,.3));
  return s;}
/* 8 · tercera: los días eran más cortos */
function s8(t){let s='';
  s+=G(270,330,1,0,Ts(0,0,'3',220,{fill:'#fff',stroke:'#fff'}),ap(t,50.8,.35));
  const rot=(t*40+sg(t,51.7,53.3)*600)%360;
  s+=G(270,520,EZ.back(sg(t,51.0,51.4)),0,clipG(Ci(0,0,90,'#2a37d7')+G(0,0,1,rot,P('M-60 -40 Q-20 -70 10 -50 Q30 -20 0 0 Q-30 10 -60 -40Z M20 20 Q60 10 64 40 Q30 60 20 20Z M-40 40 Q-20 30 -10 60 Q-40 70 -40 40Z','fill:#3f9b4f')),Ci(0,0,90,'#000'))+P('M0 -90 A90 90 0 0 1 0 90Z','fill:rgba(10,10,30,.45)')+Ci(0,0,90,'none',OL(2.6))+P('M-120 -40 A126 126 0 0 1 -60 -112',ST(K.ink,4))+P('M-60 -112 l-14 -4 l4 14Z',`fill:${K.ink}`));
  s+=G(410,700,.9,0,NX.clock({h:3,m:0,spin:1+sg(t,51.7,53)*4},t),ap(t,52.0,.3));
  s+=pillA(220,690,'días más cortos',sg(t,51.7,51.95),{fill:'url(#gRP)',sz:20,w:800});
  return s;}
/* 9 · almeja fósil de hace 70 Ma, montañas de Omán, anillos diarios como los de un árbol (recurso nuevo rudist) */
function s9(t){let s=groundLine(1);
  const rings=sg(t,58.9,60.6);
  s+=G(t<56.4?270:lerp(270,150,EZ.io(sg(t,56.4,57.0))),GY,1.05,0,NX.rudist({rings,lid:true},t-53.4));
  s+=pillA(270,330,'almeja fósil',sg(t,53.7,53.95),{fill:'#a88d62',sz:17,w:800,o:t<56.4?1:1-ao(t,56.4,.2)});
  s+=pillA(270,385,'hace 70 millones de años',sg(t,54.8,55.05),{fill:K.ink,sz:15,w:800,o:t<56.4?1:1-ao(t,56.4,.2)});
  if(t>56.5&&t<61.1)s+=G(400,320,1,0,NX.map({focus:'Omán',zoom:8,zoomAt:-.3,highlight:['Omán'],pins:[[OMAN[0],OMAN[1],'montañas de Omán']],w:250,h:290},t-56.5+.2),1-ao(t,60.9,.25));
  if(t>58.9)s+=pillA(150,405,'anillos diarios',sg(t,59.4,59.65),{fill:K.pink,sz:15,w:800});
  if(t>61.0)s+=G(390,620,1,0,stumpS({n:9,p:sg(t,61.1,61.9)}),ap(t,61.0,.35))+pillA(390,520,'como un árbol',sg(t,61.3,61.55),{fill:K.brown,sz:15,w:800});
  return s;}
/* 10 · 372 días en un año · cada día duraba unas 23,5 horas (recurso nuevo daydial) */
function s10(t){let s='';
  if(t<65.2){s+=groundLine(1);s+=G(150,GY,.9,0,NX.rudist({rings:1,lid:true},9));
    s+=G(390,430,1,0,Rc(-120,-90,240,180,'#fff',18,OL(2.6))+Tn(0,-52,'DÍAS EN UN AÑO',13,800,{fill:'#555',ls:.06})+G(0,20,1,0,NX.counter({value:372,sz:60,dur:1.2},t-62.5))+Tn(0,66,'hoy: 365',16,800,{fill:'#777'}),ap(t,62.3,.35));
    s+=actor('lenteja',{t0:62.6,path:[[62.6,400]],emo:[[62.6,7,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);}
  else{s+=G(270,470,1.15,0,NX.daydial({h:23.5,at:.9},t-65.2));
    s+=pillA(270,700,'unas 23 horas y media',sg(t,66.4,66.65),{fill:'url(#gRP)',sz:18,w:800});}
  return s;}
/* 11 · ¿por qué? las mareas de la Luna frenan la Tierra y la Luna se aleja ~3,8 cm al año (recurso nuevo moonaway) */
function s11(t){let s=Rc(0,0,540,960,'#141a30');
  s+=G(270,470,1.1,0,NX.moonaway({away:sg(t,73.2,74.8),brake:sg(t,71.2,71.7),rate:'casi 4 cm/año'},t-68.3));
  if(t<69.6)s+=G(270,230,1,0,stampA(0,0,t-68.4,'¿POR QUÉ?',{c:K.pink,sz:32,r:-5}));
  s+=pillA(270,230,'la Luna',sg(t,70.2,70.45),{fill:'#fff',tc:K.ink,sz:18,w:800,o:t<70.2?0:1});
  s+=pillA(120,600,'mareas',sg(t,70.9,71.15),{fill:K.blue,sz:15,w:800});
  s+=actor('garbanzo',{t0:68.4,path:[[68.4,440]],emo:[[68.4,9,0],[71.0,10,0]],s:.8,y:()=>770,face:()=>-1,look:()=>-1},t);
  return s;}
/* 12 · cuarta: en la Antártida había selva (hace 90 Ma, a <1.000 km del polo), 12 °C, 4 meses de noche (recurso nuevo polarforest) */
function s12(t){let s='';const nt=sg(t,87.0,87.8);
  s+=G(220,975,1.9,0,NX.polarforest({night:nt,rain:1-nt,pole:sg(t,80.9,81.4),poleX:110,moonX:90,moonY:-330,dist:'a <1.000 km'},t-75.9));
  for(let i=0;i<4;i++){const x=((i*170+t*8)%760)-110,y=360+(i%2)*60;s+=G(x,y,1,0,G(0,0,1.3,0,cloudS(120)),.85*(1-nt));}
  s+=G(0,0,1,0,Rc(0,0,540,960,'none'));
  s+=G(270,120,1,0,Ts(0,0,'4 · la',34,{fill:'#fff',stroke:'#fff'}),ap(t,76.0,.3)*(1-ao(t,78.4,.3)))+G(270,190,1,0,Ts(0,0,'Antártida',62,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,76.8,.3)*(1-ao(t,78.4,.3)));
  s+=pillA(270,250,'¡con selva!',sg(t,77.7,77.95),{fill:K.green,sz:18,w:800,o:1-ao(t,78.4,.3)});
  s+=pillA(270,150,'hace 90 millones de años',sg(t,79.1,79.35),{fill:K.ink,sz:16,w:800,o:1-ao(t,84.7,.3)});
  s+=pillA(270,210,'bosque lluvioso',sg(t,83.5,83.75),{fill:K.green,sz:17,w:800,o:1-ao(t,84.7,.3)});
  if(t>84.8)s+=G(150,220,1,0,Rc(-100,-56,200,112,'#fff',16,OL(2.6))+Tn(0,-22,'MEDIA ANUAL',12,800,{fill:'#555',ls:.06})+G(0,24,1,0,NX.counter({value:12,suffix:' °C',sz:42,dur:.7},t-85.0)),ap(t,84.9,.35));
  if(t>86.7)s+=G(390,220,1,0,Rc(-110,-56,220,112,'#1b2340',16,OL(2.6,'#fff'))+Tn(0,-18,'4 MESES',22,800,{fill:'#fff'})+Tn(0,16,'de noche seguida',15,700,{fill:'#c9d3ff'}),ap(t,86.8,.35));
  return s;}
/* 13 · sin grandes capas de hielo y con muchísimo más CO2 */
function s13(t){let s='';
  s+=G(150,400,1,0,Ci(0,0,100,'#2a37d7',OL(2.6))+El(0,-78,56,18,'#fff',OL(2)),ap(t,89.0,.35));
  s+=pillA(150,540,'hielo en los polos',sg(t,89.6,89.85),{fill:K.blue,sz:14,w:800});
  s+=xMark(150,400,80,sg(t,90.2,90.8));
  const jar=(x,n,lab,q)=>{let j=Rc(-70,-180,140,180,'rgba(255,255,255,.5)',14,OL(2.6));for(let i=0;i<n;i++){const k=cl(q*n-i);if(k<=0)continue;const px=-50+hs(i*3.3)*100,py=-20-hs(i*5.7)*140+_osc(t,.3,4,i);j+=G(px,py,EZ.back(k),0,Ci(0,0,7,'#555')+Ci(-12,0,5.5,K.red)+Ci(12,0,5.5,K.red));}return G(x,700,1,0,j+Tn(0,30,lab,14,800,{fill:'#333'}));};
  if(t>91.0){s+=G(0,0,1,0,jar(300,4,'hoy',sg(t,91.1,91.6))+jar(450,22,'entonces',sg(t,91.6,93.3)),ap(t,91.0,.3));
    s+=pillA(380,470,'CO₂: muchísimo más',sg(t,92.4,92.65),{fill:K.red,sz:16,w:800});}
  return s;}
/* 14 · quinta, la que más rompe la cabeza */
function s14(t){let s=Rc(0,0,540,960,'#0d0b0c');
  s+=G(270,430,1,0,Ts(0,0,'5',240,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,94.4,.35));
  s+=G(270,560,1,0,Ts(0,0,'la que más',40,{fill:'#fff',stroke:'#fff'}),ap(t,95.1,.3))+G(270,616,1,0,Ts(0,0,'rompe la cabeza',46,{it:true,fill:'#fff',stroke:'#fff'}),ap(t,95.5,.3));
  return s;}
/* 15 · el estegosaurio (150 Ma) y el tiranosaurio (68 Ma) (recurso nuevo stego) */
function s15(t){let s=groundLine(1);
  {const x0=lerp(220,290,sg(t,96.9,101.1));s+=G(t<101.1?x0:lerp(290,130,EZ.io(sg(t,101.1,101.7))),GY,t<101.1?.8:lerp(.8,.55,EZ.io(sg(t,101.1,101.7))),0,NX.stego({walk:t<101.1?.8:0},t-97.0));}
  s+=pillA(t<101.1?270:130,t<101.1?400:520,'estegosaurio · 150 Ma',sg(t,98.8,99.05),{fill:'#c98a3a',sz:15,w:800});
  if(t>101.3){s+=G(lerp(640,420,EZ.out(sg(t,101.3,102.2))),GY,.5,0,trexS({T:t,walk:t<102.2?1:0}));
    s+=pillA(410,390,'T. rex · 68 Ma',sg(t,102.9,103.15),{fill:K.green,sz:15,w:800});}
  return s;}
/* 16 · entre los dos hay más tiempo que entre el T. rex y tú (recurso nuevo deeptime) · el estegosaurio ya era fósil */
function s16(t){let s='';
  if(t<107.75){s+=G(270,380,1.05,0,NX.deeptime({p:sg(t,104.0,104.9),gapA:sg(t,104.7,105.6),gapB:sg(t,106.2,107.0),ta:'82 M años',tb:'68 M años'},t));
    if(t>105.3)s+=pillA(160,250,'más tiempo…',sg(t,105.3,105.55),{fill:K.red,sz:17,w:800});
    if(t>107.1)s+=G(430,250,1,0,Ts(0,0,'…que hasta ti',30,{it:true}),ap(t,107.1,.3));
    s+=actor('grano',{t0:106.8,path:[[106.8,450]],emo:[[106.8,16,0]],s:.7,y:()=>720,face:()=>-1,look:()=>-1},t);}
  else{s+=groundLine(1)+Rc(0,GY,540,200,'#b98a5c');
    for(let i=0;i<12;i++)s+=El(hs(i*3.1)*540,GY+20+hs(i*7.7)*120,6,3,'#9a6f46');
    {const fq=EZ.io(sg(t,111.6,112.8));s+=G(150,GY,.5,0,NX.stego({fossil:fq},9),1);}
    s+=G(lerp(640,390,EZ.out(sg(t,108.4,109.4))),GY,.45,0,trexS({T:t,walk:t<109.4?1:0}));
    s+=pillA(410,380,'T. rex',sg(t,108.8,109.05),{fill:K.green,sz:16,w:800});
    if(t>110.8)s+=G(270,250,1,0,Rc(-170,-40,340,80,'#fff',14,OL(2.4))+Tn(0,10,'decenas de millones de años',17,800,{fill:K.ink}),ap(t,110.9,.35));
    s+=pillA(150,580,'ya era fósil',sg(t,112.9,113.15),{fill:'#8a7e68',sz:16,w:800});}
  return s;}
/* 17 · no fue una época: más de 160 millones de años de mundos distintos */
function s17(t){let s='';
  if(t<117.4){s+=Rc(0,0,540,960,'#0d0b0c');
    s+=G(270,430,1,0,Ts(0,0,'no fue',60,{fill:'#fff',stroke:'#fff'}),ap(t,116.0,.3))+G(270,520,1,0,Ts(0,0,'una época',76,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,116.5,.3));}
  else{const P3=[['Triásico','#d9a066',0,0],['Jurásico','#7ab36a',1,1],['Cretácico','#6fa0c8',2,1]];
    s+=G(270,200,1,0,Rc(-200,-58,400,116,'#fff',16,OL(2.6))+Tn(0,-22,'MÁS DE',13,800,{fill:'#555',ls:.06})+G(0,26,1,0,NX.counter({value:160,suffix:' M años',sz:44,dur:.8},t-118.1)),ap(t,117.42,.35));
    P3.forEach(([n,c,i],k)=>{const q=ap(t,118.3+k*.3,.35);if(q<=0)return;let p=Rc(-80,-170,160,300,c,14,OL(2.6));
      p+=clipG(G(0,125,.5,0,NX.prehflora({con:k>0?1:0,cyc:1,fern:1,gink:k>0?1:0,flowers:k==2?1:0,big:true},t))+(k==0?G(-10,128,.22,0,trexS({T:t,c:'#b05a2a'})):k==1?G(10,128,.24,0,NX.stego({},t+3)):G(-10,128,.22,0,trexS({T:t}))),Rc(-80,-170,160,300,'#000',14));
      s+=G(105+k*165,560,q,0,p+G(0,160,1,0,pill(n,{sz:13,w:800,fill:K.ink})));});}
  return s;}
/* 18 · pregunta */
function s18(t){let s=mesoLand(t,{sunY:400});
  s+=G(0,0,1,0,Rc(0,0,540,960,'rgba(198,198,198,.35)'));
  s+=actor('pipa',{t0:121.5,path:[[121.5,110]],emo:[[121.5,2,0],[124.5,3,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('lenteja',{t0:121.6,path:[[121.6,430]],emo:[[121.6,10,0],[124.6,3,0]],s:.75,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,700,'Te leo en comentarios',sg(t,125.5,125.75),{fill:'url(#gRP)',sz:16,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,126.6,127.2)));
  s+=G(0,0,1,0,Ts(270,352,'El mundo de los',30),ao(t,126.65,.3))+G(0,0,1,0,Ts(270,398,'dinosaurios',34,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,126.75,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Smithsonian · AMNH · Natural History Museum · Nature',9.5,600)+Tn(270,474,'Science (Prasad et al. 2005) · Paleoceanography (de Winter 2020)',9.5,600),ao(t,127.0,.3));
  s+=G(270,800,.5,0,NX.stego({},t),ao(t,127.0,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:5.95,draw:s2,in:{type:'whipD',dur:.32}},
  {id:'3',a:9.7,draw:s3,in:{type:'whipL',dur:.32}},
  {id:'4',a:14.8,draw:s4,in:{type:'zoom',dur:.45,fx:270,fy:480,z:6}},
  {id:'5',a:24.3,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:29.5,draw:s6,in:{type:'glitch',dur:.3}},
  {id:'7',a:43.2,draw:s7,in:{type:'whipU',dur:.32}},
  {id:'8',a:50.7,draw:s8,in:{type:'glitch',dur:.3}},
  {id:'9',a:53.3,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'10',a:62.1,draw:s10,in:{type:'whipU',dur:.32}},
  {id:'11',a:68.3,draw:s11,in:{type:'zoom',dur:.45,fx:270,fy:480,z:6}},
  {id:'12',a:75.9,draw:s12,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'13',a:89.0,draw:s13,in:{type:'whipL',dur:.32}},
  {id:'14',a:94.3,draw:s14,in:{type:'glitch',dur:.3}},
  {id:'15',a:96.9,draw:s15,in:{type:'whipU',dur:.32}},
  {id:'16',a:103.9,draw:s16,in:{type:'whipL',dur:.32}},
  {id:'17',a:113.9,draw:s17,in:{type:'whipD',dur:.32}},
  {id:'18',a:121.3,draw:s18,in:{type:'whipU',dur:.32}},
  {id:'END',a:126.6,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:121.4,t1:126.5,y:190,lines:[{txt:'¿a qué mundo',sz:34,t:[121.7,123.4]},{txt:'*irías* tú?',sz:52,t:[124.3,124.6],gap:1.15}]}
];
