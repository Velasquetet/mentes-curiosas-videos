/* ===== ESCENAS · la malvasía cabeciblanca: el pato español del pico azul ===== */
DUR=109.4;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function leader(x1,y1,x2,y2,p,c=K.ink,bend=-24){if(p<=0)return '';const mx=(x1+x2)/2,my=(y1+y2)/2+bend;
  return DR(`M${f1(x1)} ${f1(y1)} Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}`,ST(c,1.8),EZ.out(p))+(p>.9?Ci(x2,y2,3.2,c):'');}
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=300+hs(i*5.3+seed)*360,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
function birds(t,y0=300){let s='';for(let i=0;i<3;i++){const x=((t*22+i*70+100)%700)-80;s+=birdV(x,y0+i*14+Math.sin(t*2+i)*4,1,t,i);}return s;}
const push=(s,t,a,b,k0=1,k1=1.06,fx=270,fy=520)=>G(fx,fy,lerp(k0,k1,EZ.sine(sg(t,a,b))),0,G(-fx,-fy,1,0,s));
const shake=(s,t,t0,amp=6,d=.4)=>{if(t<t0||t>t0+d)return s;const q=1-(t-t0)/d;return G(Math.sin(t*90)*amp*q,Math.cos(t*77)*amp*q*.6,1,0,s);};
function bubbleS(txt,sz=18,o={}){const w=mw(txt,fSans(sz,800))+sz*1.4,h=sz*2;const tail=o.tail??-1;
  return P(`M${f1(-w/2+h/2)} ${f1(-h/2)} L${f1(w/2-h/2)} ${f1(-h/2)} A${h/2} ${h/2} 0 0 1 ${f1(w/2-h/2)} ${f1(h/2)} L${f1(tail*w*.15+8)} ${f1(h/2)} L${f1(tail*w*.32)} ${f1(h/2+14)} L${f1(tail*w*.15-8)} ${f1(h/2)} L${f1(-w/2+h/2)} ${f1(h/2)} A${h/2} ${h/2} 0 0 1 ${f1(-w/2+h/2)} ${f1(-h/2)}Z`,`fill:${o.fill||'#fff'};${OL(2.2)}`)+Tn(0,sz*.36,txt,sz,800,{fill:o.tc||K.ink});}
function bubbleA(x,y,lt,txt,o={}){if(lt<0)return '';const q=EZ.back(sg(lt,0,.28)),out=o.out?1-EZ.out(sg(lt,o.out,o.out+.2)):1;
  return G(x,y+Math.sin(lt*5)*2,q*(o.s||1),(o.r||0)+(1-q)*-10,bubbleS(txt,o.sz||18,o),cl(q*3)*out);}
/* ondas sobre la línea de flotación de un pato (tapa la parte de abajo) */
function wake(x,y,w,T,c='#4654ee'){let d=`M${f1(x-w/2)} ${y}`;for(let i=0;i<8;i++){const xx=x-w/2+(i+.5)*w/8;d+=` Q${f1(xx)} ${f1(y-4+Math.sin(T*3+i)*2)} ${f1(x-w/2+(i+1)*w/8)} ${y}`;}
  return P(d+` L${f1(x+w/2)} ${y+26} L${f1(x-w/2)} ${y+26}Z`,`fill:${c}`)+P(d,ST('#c9d0ff',2.4));}
/* paisaje: laguna mediterránea con carrizo */
function lagoonL(T,o={}){let s=G(o.sx||410,o.sy||410,1,0,sunS(o.sr||72));
  s+=G(120+T*3,300,1,0,cloudS(84))+G(440+T*2,262,.72,0,cloudS(60))+birds(T,330);
  s+=G(110,592,1,0,humpS(300,126))+G(330,592,1,0,humpS(330,150))+G(520,592,1,0,humpS(240,96));
  s+=bushBand(-40,580,590,26,o.seed||4,{c:'#8fcf7a'});
  s+=waterBand(-40,580,612,990,T,{rows:6,fill:'#4654ee'});
  return s;}
const fgReeds=T=>reeds(30,990,10,190,4,T)+reeds(510,990,9,180,9,T);
const mDuck=(x,y,k,T,o={})=>G(x,y,k,0,duckS(Object.assign({T},o)));
/* bote de pigmento */
function jarS(lab='PIGMENTO AZUL'){return Rc(-50,-120,100,120,'#fff',12,OL(2.4))+Rc(-56,-138,112,24,K.ink,6)+Rc(-50,-70,100,42,'#3fb4ff',0)+Rc(-50,-120,100,120,'none',12,OL(2.4))+Tn(0,-46,lab,9.5,800,{fill:'#fff',ls:.06});}
/* icono de pato pequeño (cabeza) */
function duckIcon(c='#fff',bill='#3fb4ff'){return Ci(0,0,13,c,OL(1.6))+clipG(P('M-14 -14 L14 -14 L14 -4 Q0 -8 -14 -1Z','fill:#1a1513'),'<circle cx="0" cy="0" r="13"/>')+P('M10 -3 Q18 -5 22 0 Q20 4 10 4Z',`fill:${bill};${OL(1.2)}`)+Ci(5,-2,1.8,K.ink);}
/* molécula de hormona */
function hormoneS(){return P('M-14 -8 L0 -16 L14 -8 L14 8 L0 16 L-14 8Z','fill:#ffe6f0;'+OL(1.8))+P('M14 -8 L28 -16 L42 -8 L42 8 L28 16 L14 8',`fill:#ffe6f0;${OL(1.8)}`)+Ci(0,0,3,K.pink);}
/* señal de madera */
function signS(txt,c=K.red){const w=mw(txt,fSans(15,800))+30;return P('M0 0 L0 70',ST('#7a4a2a',7))+Rc(-w/2,-36,w,38,'#fff',6,`stroke:${c};stroke-width:4`)+Tn(0,-11,txt,15,800,{fill:c});}
/* mosquito adulto (quironómido) */
function midgeS(T){const fl=Math.sin(T*60)*.5+.5;return G(-4,-6,1,-20-fl*30,El(-10,-6,14,5,'rgba(220,240,255,.85)',OL(1.2)))+G(4,-6,1,20+fl*30,El(10,-6,14,5,'rgba(220,240,255,.85)',OL(1.2)))+
  El(0,0,5,14,'#5c6b3a',OL(1.4))+Ci(0,-16,5,'#3e4a26',OL(1.2))+P('M-3 -20 q-6 -10 -12 -12 M3 -20 q6 -10 12 -12',ST(K.ink,1.4))+P('M-4 4 l-10 8 M4 4 l10 8 M-4 -2 l-12 2 M4 -2 l12 2',ST(K.ink,1.2));}

/* ---------- L1 · este pato tiene el pico azul eléctrico ---------- */
function sceneL1(t){
  const T=t;let s=lagoonL(T,{sx:420,sy:430,sr:80});
  s+=mDuck(lerp(270,240,EZ.out(sg(t,0,2.6))),720,1.35,T,{bill:EZ.io(sg(t,1.2,1.7)),tail:.55});
  s+=wake(240,722,360,T);
  if(t>1.4)for(let i=0;i<3;i++){const q=((t-1.4)*1.3+i/3)%1;s+=Ci(240+140*1.35,720-120*1.35,30+q*60,'none',`stroke:#3fb4ff;stroke-width:${f1(4*(1-q))};opacity:${f2(1-q)}`);}
  s+=sparkA(460,520,t-1.55,12,'#3fb4ff',.7)+sparkA(390,500,t-1.7,9,'#fff',.7);
  s+=fgReeds(T);
  return push(s,t,0,2.7,1.12,1.0,400,600);
}
/* ---------- M1 · ni una gota de pigmento azul ---------- */
function sceneM1(t){
  const T=t;let s=groundLine(1);
  s+=G(170,GY,1.1*ap(t,2.8,.35),Math.sin(T*3)*2,jarS());
  const dq=sg(t,3.76,4.4);if(dq>0&&dq<1)s+=G(170,lerp(GY-260,GY-60,EZ.in(dq)),1,0,dropS(10,'#3fb4ff'));
  if(t>4.58){const q=EZ.out(sg(t,4.58,4.8));s+=G(170,GY-70,1,0,DR('M-80 -80 L80 80',ST(K.red,10),q)+DR('M80 -80 L-80 80',ST(K.red,10),sg(t,4.68,4.9)));}
  s+=pillA(170,460,'0 gotas',sg(t,4.0,4.3),{sz:15,w:800,fill:'url(#gRP)'});
  s+=actor('garbanzo',{t0:2.8,path:[[2.8,410]],emo:[[2.8,0,0],[3.3,9,0],[4.6,7,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return shake(s,t,4.6,5,.35);
}
/* ---------- M2 · la malvasía cabeciblanca cría en lagunas de España ---------- */
function sceneM2(t){
  const T=t;let s='';
  const mv=EZ.io(sg(t,7.6,8.1));
  s+=G(270,lerp(520,470,mv),1,0,NX.map({focus:'España',pins:[[-4.69,37.48,'Zóñar (Córdoba)'],[-0.75,38.18,'El Hondo (Alicante)']],w:470,h:380,zoomAt:.05},t-6.6),ao(t,7.6,.4));
  const cq=ap(t,5.4,.4)*dis(t,7.6,.3);
  if(cq>0){s+=G(270,500,cq,0,Rc(-190,-150,380,300,'#fff',18,OL(2.4))+G(0,40,.95,0,duckS({T,bill:1,tail:.5}))+wake(0,42,330,T)+Tn(0,-112,'Oxyura leucocephala',15,600,{fill:'#666'}));}
  s+=pillA(270,700,'malvasía cabeciblanca',sg(t,5.8,6.1)*dis(t,7.6),{sz:16,w:800,fill:'url(#gRP)'});
  return s;
}
/* ---------- L2 · cabeza blanca, cola tiesa, pico de juguete ---------- */
function sceneL2(t){
  const T=t;let s=lagoonL(T,{sx:120,sy:430,sr:64,seed:7});
  s+=mDuck(250,710,1.45,T,{bill:1,tail:lerp(.3,1,EZ.back(sg(t,10.7,11.1)))});
  s+=wake(240,712,400,T);
  s+=pillA(330,380,'cabeza blanca',sg(t,9.7,10.0),{sz:15,w:800})+leader(330,396,360,520,sg(t,9.8,10.1),K.ink,10);
  s+=pillA(110,330,'cola tiesa',sg(t,10.75,11.05),{sz:15,w:800,fill:'url(#gRP)'})+leader(110,346,90,560,sg(t,10.85,11.15),K.ink,-10);
  const pq=sg(t,11.81,12.1);if(pq>0)s+=ringA(250+125*1.45,710-118*1.45,44,30,pq,K.pink,3.4);
  s+=bubbleA(450,470,t-12.75,'¡cuac!',{sz:16,tail:1,r:-6});
  s+=fgReeds(T);
  return push(s,t,9.55,13.6,1,1.08,400,480);
}
/* ---------- M3 · ¿el truco? estructural ---------- */
function sceneM3(t){
  const T=t;let s=qDeco(t,ao(t,13.7,.4)*dis(t,15.3),3,5)+groundLine(1);
  s+=actor('lenteja',{t0:13.65,path:[[13.65,150]],emo:[[13.65,0,0],[14.0,16,0],[15.5,2,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1,prop:tt=>PROP.lupa},t);
  s+=G(390,700,1.05*ap(t,13.9,.35),0,duckS({T,bill:1,tail:.5}));
  s+=stampA(330,440,t-15.53,'ESTRUCTURAL',{r:-6,sz:24,c:K.blue});
  s+=pillA(330,500,'no es pigmento',sg(t,15.9,16.2),{sz:13,w:700});
  return s;
}
/* ---------- M4 · queratina con nanoestructura: solo vuelve el azul ---------- */
function sceneM4(t){
  const T=t;let s='';
  const zq=EZ.io(sg(t,16.6,17.3));
  s+=G(270,lerp(560,600,zq),1.15,0,structBlueS({T,p:EZ.io(sg(t,20.1,20.9)),out:EZ.io(sg(t,21.6,22.3))}));
  s+=pillA(150,750,'nanoestructura',sg(t,19.2,19.5),{sz:14,w:800,fill:K.ink})+leader(150,734,120,610,sg(t,19.3,19.6),K.ink,10);
  s+=pillA(100,560,'luz blanca',sg(t,20.3,20.6),{sz:13,w:700});
  s+=pillA(420,330,'solo azul',sg(t,22.2,22.5),{sz:15,w:800,fill:'#2f8fe0'});
  const mq=ap(t,18.6,.3);if(mq>0)s+=G(450,760,mq,0,Ci(0,0,30,'#fff',OL(2))+G(-2,-2,1,0,lupaS(14)));
  return push(s,t,16.6,23,1,1.07,270,560);
}
/* ---------- M5 · época de celo: las hormonas encienden el pico ---------- */
function sceneM5(t){
  const T=t;let s=groundLine(1);
  const on=EZ.io(sg(t,28.2,28.8)),off=t<24?EZ.io(sg(t,23.2,23.9)):0;
  const bill=t<24.3?1-off:on;
  s+=mDuck(250,GY-6,1.55,T,{bill,tail:.6,swim:.4});
  const cq=ap(t,24.5,.35);if(cq>0)s+=G(110,400,cq,Math.sin(T*2)*3,P('M0 18 C-30 -4 -18 -30 0 -14 C18 -30 30 -4 0 18Z','fill:url(#gRP);'+OL(2))+Tn(0,52,'celo',13,800));
  if(t>25.9&&t<28.6){for(let i=0;i<4;i++){const q=sg(t,25.9+i*.3,27.4+i*.3);if(q<=0||q>=1)continue;s+=G(lerp(80+i*90,420,EZ.io(q)),lerp(330+i*20,560,EZ.io(q)),.9,T*60+i*40,hormoneS(),Math.sin(Math.PI*q)+.2);}}
  s+=pillA(160,320,'hormonas',sg(t,25.98,26.25)*dis(t,28.2),{sz:14,w:800,fill:'url(#gRP)'});
  if(t>28.3){for(let i=0;i<3;i++){const q=((t-28.3)*1.2+i/3)%1;s+=Ci(450,530,24+q*60,'none',`stroke:#3fb4ff;stroke-width:${f1(4*(1-q))};opacity:${f2(1-q)}`);}}
  s+=sparkA(470,500,t-28.4,12,'#3fb4ff',.7)+sparkA(420,470,t-28.55,9,K.yellow,.7);
  s+=pillA(420,400,'gris → azul',sg(t,27.0,27.3),{sz:13,w:700});
  return push(s,t,23,29.3,1,1.06,320,560);
}
/* ---------- M6 · a las hembras les gustan los más brillantes ---------- */
function sceneM6(t){
  const T=t;let s=groundLine(1);
  s+=mDuck(100,GY-4,.85,T,{bill:.25,tail:.35});
  s+=G(415,GY-4,-.85,0,duckS({T:T+1,bill:1,tail:.9}));
  s+=G(lerp(-80,255,EZ.out(sg(t,29.4,30.2))),GY+40,.62,0,duckS({T,kind:'hembra',tail:.3}));
  s+=pillA(120,560,'apagado',sg(t,30.7,31.0),{sz:13,fill:'#8b9097'})+pillA(410,560,'¡brillante!',sg(t,31.06,31.35),{sz:14,w:800,fill:'#2f8fe0'});
  for(let i=0;i<3;i++){const hq=ap(t,31.2+i*.18,.3);if(hq>0)s+=G(360+i*30,500-i*36-Math.sin(T*2+i)*6,hq*.7,0,P('M0 18 C-30 -4 -18 -30 0 -14 C18 -30 30 -4 0 18Z','fill:url(#gRP);'+OL(2)));}
  return s;
}
/* ---------- M7 · acaba la temporada: vuelve a ser grisáceo ---------- */
function sceneM7(t){
  const T=t;let s=groundLine(1);
  const mon=['MAR','ABR','MAY','JUN','JUL','AGO','SEP'];const mi=Math.min(mon.length-1,Math.floor(sg(t,32.5,34.4)*mon.length));
  s+=G(140,420,ap(t,32.3,.35),0,calS(mon[mi],'MES',{w:110,h:120,sz:36}));
  const g=EZ.io(sg(t,34.3,35.2));
  s+=mDuck(330,GY-6,1.25,T,{bill:1-g,tail:lerp(.6,.2,g)});
  s+=pillA(440,560,'grisáceo',sg(t,34.85,35.15),{sz:14,w:800,fill:'#8b9097'});
  return s;
}
/* ---------- L3 · la cola: plumas largas y rígidas ---------- */
function sceneL3(t){
  const T=t;let s=lagoonL(T,{sx:430,sy:420,sr:70,seed:2});
  const tq=lerp(.2,1,EZ.back(sg(t,38.6,39.0)));
  s+=mDuck(lerp(300,280,sg(t,35.9,39.7)),720,1.35,T,{bill:1,tail:tq});
  s+=wake(280,722,380,T);
  s+=pillA(130,380,'plumas largas',sg(t,37.73,38.0),{sz:15,w:800})+leader(130,396,150,560,sg(t,37.8,38.1),K.ink,10);
  s+=pillA(130,440,'y rígidas',sg(t,38.64,38.9),{sz:15,w:800,fill:'url(#gRP)'});
  if(t>38.7&&t<39.4){const q=sg(t,38.7,39.4);for(let i=0;i<5;i++)s+=P(`M${f1(120+i*10)} ${f1(560-i*14)} l-14 -6`,ST(K.ink,2.4,`opacity:${f2(1-q)}`));}
  s+=fgReeds(T);
  return push(s,t,35.85,39.7,1,1.06,250,560);
}
/* ---------- M8 · patos de cola tiesa ---------- */
function sceneM8(t){
  const T=t;let s=groundLine(1);
  const DK=[[120,'canela',.6,GY-70,1],[420,'hembra',.6,GY-70,-1],[270,'malvasia',.95,GY+20,1]];
  DK.forEach(([x,k,sc,y,fl],i)=>{const q=ap(t,40.0+i*.25,.35);if(q>0)s+=G(x,y,sc*q*fl,0,duckS({T:T+i,kind:k,tail:.9+.1*Math.sin(T*3+i),bill:1}),1,sc*q);});
  s+=pillA(270,420,'patos de cola tiesa',sg(t,42.3,42.6),{sz:17,w:800,fill:'url(#gRP)'});
  s+=pillA(270,462,'género Oxyura',sg(t,42.6,42.9),{sz:12,w:600});
  for(let i=0;i<3;i++)s+=ringA(DK[i][0]-DK[i][4]*112*DK[i][2],DK[i][3]-64*DK[i][2],30*DK[i][2]/.6,44*DK[i][2]/.6,sg(t,40.9+i*.15,41.4+i*.15)*dis(t,43.2),K.pink,3);
  return s;
}
/* ---------- L4 · buceadora nata: bajo el agua, larvas ---------- */
const LARV=[...Array(8)].map((_,i)=>({x:40+i*62+hs(i*4.1)*20,y:890+hs(i*2.3)*50,ph:i*1.3}));
function sceneL4(t){
  const T=t;let s=Rc(-60,-60,660,440,'#cfe0ff')+Rc(-60,380,660,700,'url(#gUW)');
  s+=P(`M-60 380 ${[...Array(16)].map((_,i)=>`Q${-40+i*44} ${f1(375+Math.sin(T*2+i)*3)} ${f1(-16+i*44)} 380`).join(' ')}`,ST('#a7b0ff',3));
  for(let i=0;i<5;i++){const x=40+i*120+Math.sin(T*.6+i)*10;s+=P(`M${f1(x)} 380 L${f1(x+46)} 380 L${f1(x+12)} 900 L${f1(x-32)} 900Z`,'fill:#fff;opacity:.06');}
  s+=mudBand(-40,580,880,200);
  for(let i=0;i<5;i++)s+=P(`M${40+i*120} 990 q-10 -60 6 -120 q10 -50 -4 -90`,ST('#1f6b33',8));
  /* inmersión: arriba → al fondo → come */
  const dv=EZ.io(sg(t,45.5,46.6)),eat=sg(t,47.3,49.2);
  const hop=bel(t,44.4,45.0);const dx=lerp(260,lerp(300,380,eat),dv),dy=lerp(378+hop*6,lerp(800,840,eat),dv),rot=lerp(-hop*14,lerp(28,18,eat),dv);
  LARV.forEach((l,i)=>{const gone=(i>=4&&i<7)&&eat>(i-4)*.25+.15;if(gone)return;s+=G(l.x,l.y,1.3,Math.sin(T+i)*20,midgeLarvaS(T,l.ph));});
  s+=G(dx,dy,1.15,rot,duckS({T,bill:1,tail:.8,feet:dv,swim:1-dv}));
  if(dv>0)for(let i=0;i<6;i++){const q=((T*.9)+i/6)%1;s+=Ci(dx+60+hs(i)*20,dy-80-q*200,3+hs(i)*4,'none',`stroke:#e6eeff;stroke-width:2;opacity:${f2((1-q)*dv)}`);}
  s+=pillA(130,460,'una y otra vez',sg(t,46.2,46.5)*dis(t,47.3),{sz:14,w:700});
  s+=pillA(130,840,'larvas',sg(t,47.41,47.7),{sz:15,w:800,fill:K.red});
  return push(s,t,43.5,48.1,1,1.05,300,560);
}
/* ---------- M9 · mosquitos que no pican ---------- */
function sceneM9(t){
  const T=t;let s=groundLine(1);
  s+=G(lerp(200,280,sg(t,48.1,49.8)),460+Math.sin(T*5)*10,3.2*ap(t,48.15,.35),0,midgeS(T));
  s+=G(150,700,2.4,0,midgeLarvaS(T,0))+leader(150,680,250,520,sg(t,48.5,48.8),K.ink,-10);
  s+=pillA(150,640,'de pequeños',sg(t,48.5,48.8),{sz:12,w:700});
  s+=stampA(390,620,t-48.94,'NO PICAN',{r:-6,sz:20,c:K.green});
  s+=pillA(390,330,'quironómidos',sg(t,48.4,48.7),{sz:13,w:700,fill:'url(#gPU)'});
  return s;
}
/* ---------- M10 · huevos enormes ---------- */
function sceneM10(t){
  const T=t;let s=groundLine(1);
  const eg=ap(t,51.0,.4),grow=lerp(.5,1,EZ.back(sg(t,51.0,51.5)));
  s+=mDuck(150,GY-4,.95,T,{kind:'hembra',tail:.3});
  if(eg>0)s+=G(390,GY,grow*1.1,Math.sin(T*3)*1.5,bigEggS({glow:bel(t,53.8,55.6)}));
  const bq=sg(t,52.1,52.8);if(bq>0){s+=DR('M60 760 L250 760',ST(K.ink,2.4),bq)+DR('M340 760 L440 760',ST(K.ink,2.4),bq);s+=pillA(150,782,'mamá',bq,{sz:11,w:700})+pillA(390,782,'huevo',bq,{sz:11,w:700,fill:'url(#gOR)'});}
  const cq=ap(t,53.83,.35);if(cq>0)s+=G(390,GY-178,cq,Math.sin(T*2)*4,P('M-26 10 L-30 -16 L-14 -4 L0 -22 L14 -4 L30 -16 L26 10Z','fill:#ffd23f;'+OL(2)));
  s+=pillA(390,420,'récord en aves acuáticas',sg(t,55.0,55.3),{sz:13,w:800,fill:'url(#gRP)'});
  s+=actor('pipa',{t0:50.0,path:[[50.0,620],[50.6,500]],emo:[[50.0,1,0],[50.6,7,0]],s:.55,pop:false,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return push(s,t,49.8,56.3,1,1.05,300,600);
}
/* ---------- M11 · ahora, el giro ---------- */
function sceneM11(t){
  const T=t;let s=raysBg(270,520,t*30,20,'#d3d3d3',ao(t,56.3,.3))+groundLine(1);
  s+=actor('grano',{t0:56.3,path:[[56.3,270]],emo:[[56.3,0,0],[56.7,11,0]],s:.9,y:()=>GY,face:()=>1,mod:(p,tt)=>{p.rot+=Math.sin(tt*6)*4;}},t);
  s+=sparkA(150,420,t-57.2,14,K.pink,.8)+sparkA(400,440,t-57.35,11,K.yellow,.8);
  return s;
}
/* ---------- M12 · finales de los 70: solo quedaban 22 ---------- */
function sceneM12(t){
  const T=t;let s='';
  const cm=EZ.io(sg(t,59.9,60.4));
  s+=G(270,lerp(470,330,cm),lerp(1.3,.8,cm),0,NX.calendar({from:1970,to:1978,month:'AÑO',dur:.9},t-58.1));
  /* rejilla: muchos patos que desaparecen hasta quedar 22 */
  const n=60,cols=10,dx=44,dy=44,x0=270-(cols-1)*dx/2,y0=440;
  const fade=sg(t,60.4,61.6);
  for(let i=0;i<n;i++){const q=ap(t,59.95+i*.006,.25);if(q<=0)continue;const keep=i<22;const k=keep?1:1-EZ.in(sg(fade,hs(i)*.6,hs(i)*.6+.4));if(k<=.02)continue;
    const x=x0+(i%cols)*dx,y=y0+Math.floor(i/cols)*dy;s+=G(x,y,q*k*(1+.15*bel(t,62.5,63.0)),0,duckIcon(keep&&t>61.5?'#fff':'#e8e8e8',keep&&t>61.5?'#3fb4ff':'#9a9a9a'));}
  s+=stampA(270,760,t-62.55,'22 EN TODA ESPAÑA',{r:-5,sz:20,c:K.red});
  return s;
}
/* ---------- L5 · se protegieron las lagunas, se prohibió cazar, crecen ---------- */
function sceneL5(t){
  const T=t;let s=lagoonL(T,{sx:400,sy:420,sr:74,seed:5});
  s+=G(130,590,ap(t,64.08,.35),-3,signS('ESPACIO PROTEGIDO',K.green));
  s+=G(420,590,ap(t,65.64,.35),3,signS('PROHIBIDO CAZAR',K.red));
  const pos=[[270,740],[140,790],[400,790],[220,850],[350,870],[100,900],[460,890],[290,930]];
  pos.forEach(([x,y],i)=>{const q=ap(t,i<2?63.9+i*.2:66.9+(i-2)*.18,.35);if(q<=0)return;s+=G(x,y,.5*q,0,duckS({T:T+i,bill:1,tail:.5}))+wake(x,y+2,140*q,T+i);});
  s+=G(90,430,.55,0,NX.trend({dir:'up',value:'',label:''},t-67.4),.9);
  s+=fgReeds(T);
  return push(s,t,63.75,68.75,1,1.06,270,700);
}
/* ---------- M13 · un problema desde muy lejos: la malvasía canela ---------- */
function sceneM13(t){
  const T=t;let s=groundLine(1);
  s+=G(lerp(640,350,EZ.out(sg(t,69.4,70.4))),GY-4,1.15,0,duckS({T,kind:'canela',bill:1,tail:.7}));
  s+=bubbleA(150,520,t-69.7,'¿y ese?',{sz:15,tail:-1,r:-5,out:1.4});
  s+=pillA(330,380,'malvasía canela',sg(t,71.4,71.7),{sz:16,w:800,fill:'#b8532a'});
  s+=pillA(330,425,'Oxyura jamaicensis',sg(t,71.7,72.0),{sz:12,w:600});
  s+=G(130,470,ap(t,72.9,.35),0,NX.flag({colors:['#b22234','#fff','#b22234','#fff','#3c3b6e'],w:110,h:70},t-72.9));
  s+=pillA(130,600,'origen: América',sg(t,73.15,73.45),{sz:12,w:700});
  s+=actor('garbanzo',{t0:68.85,path:[[68.85,110]],emo:[[68.85,0,0],[69.6,9,0],[71.4,7,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1,t1:72.8},t);
  return s;
}
/* ---------- M14 · escapó en el Reino Unido → llegó a España ---------- */
function sceneM14(t){
  const T=t;let s='';
  s+=G(270,480,1,0,NX.map({center:[-3,46.5],zoom:9,highlight:['Reino Unido','España'],arcs:[[[-1.5,52.6],[-3.7,40.2]]],pins:[[-1.5,52.6,'reserva (R. Unido)'],[-3.7,40.2,'España, años 80']],w:470,h:520,zoomAt:.05},t-73.75));
  /* patito que viaja por el arco */
  const q=EZ.io(sg(t,76.9,78.3));
  if(q>0&&q<1){const x=lerp(310,250,q)-Math.sin(Math.PI*q)*40,y=lerp(330,610,q);s+=G(x,y,.32,0,duckS({T,kind:'canela'}));}
  return s;
}
/* ---------- M15 · se cruzan: híbridos fértiles → podía desaparecer mezclándose ---------- */
function sceneM15(t){
  const T=t;let s=groundLine(1);
  const mix=EZ.io(sg(t,79.3,79.9)),hy=ap(t,81.2,.4);
  s+=G(lerp(120,190,mix),GY-4,.8,0,duckS({T,kind:'canela',bill:1}),1-sg(t,81.0,81.3));
  s+=G(lerp(420,350,mix),GY-4,-.8,0,duckS({T:T+1,bill:1}),1-sg(t,81.0,81.3));
  const hq=ap(t,79.5,.3)*dis(t,81.0,.2);if(hq>0)s+=G(270,520,hq,0,P('M0 18 C-30 -4 -18 -30 0 -14 C18 -30 30 -4 0 18Z','fill:url(#gRP);'+OL(2)));
  if(hy>0)s+=G(270,GY-4,hy*1.2,0,duckS({T,kind:'hibrido',bill:1,tail:.6}));
  s+=pillA(270,420,'híbrido',sg(t,81.47,81.75),{sz:16,w:800,fill:'#a8583a'});
  s+=stampA(270,330,t-82.1,'FÉRTIL',{r:-5,sz:22,c:K.orange,out:1.6});
  /* desaparecer mezclándose: la cabeza blanca se va manchando */
  const dq=sg(t,84.2,86.0);if(dq>0){for(let i=0;i<10;i++){const a=i*.62+T*.4,r=30+hs(i)*90;s+=Ci(270+Math.cos(a)*r,560+Math.sin(a)*r*.5,10+hs(i+3)*10,i%2?'#b8532a':'#1a1513',`opacity:${f2(.35*dq)}`);}}
  s+=pillA(270,470,'¿adiós, especie?',sg(t,84.21,84.5),{sz:14,w:800,fill:K.red});
  return s;
}
/* ---------- M16 · control del invasor: hibridación controlada ---------- */
function sceneM16(t){
  const T=t;let s=groundLine(1);
  s+=G(290,600,1,0,NX.line({pts:[9,8,7,5,3,2,1],w:300,h:170},t-86.4),ao(t,86.4,.3));
  s+=pillA(290,640,'malvasías canelas',sg(t,87.9,88.2),{sz:13,w:800,fill:'#b8532a'});
  s+=G(110,GY-4,ap(t,87.0,.3)*.55,0,duckS({T,kind:'canela',bill:1}));
  s+=stampA(380,700,t-90.19,'CONTROLADA',{r:-6,sz:22,c:K.green});
  s+=pillA(270,380,'Europa occidental',sg(t,90.9,91.2),{sz:13,w:700});
  return s;
}
/* ---------- M17 · en España, más de 2.000 ---------- */
function sceneM17(t){
  const T=t;let s=groundLine(1);
  const n=70,cols=10,dx=44,dy=40,x0=270-(cols-1)*dx/2,y0=330;
  for(let i=0;i<n;i++){const q=ap(t,93.5+hs(i*2.7)*1.3,.25);if(q<=0)continue;const x=x0+(i%cols)*dx,y=y0+Math.floor(i/cols)*dy;s+=G(x,y+Math.sin(T*3+i)*2,q,0,duckIcon());}
  s+=pillA(270,600,'más de 2.000 en España',sg(t,94.2,94.5),{sz:15,w:800,fill:'url(#gRP)'});
  const pos=[[110,GY-4],[270,GY-4],[430,GY-4]];
  pos.forEach(([x,y],i)=>{const q=ap(t,92.5+i*.18,.35);if(q>0)s+=G(x,y,.62*q,0,duckS({T:T+i,bill:1,tail:.6}));});
  s+=confetti(270,420,t-94.2,26,3,240);
  return s;
}
/* ---------- L6 · en peligro en el mundo; sequías ---------- */
function sceneL6(t){
  const T=t;const dry=EZ.io(sg(t,97.6,99.4));
  let s=G(420,450,1+.25*dry,0,sunS(70))+G(120+T*3,330,1,0,cloudS(84),1-dry);
  s+=G(110,592,1,0,humpS(300,126))+G(330,592,1,0,humpS(330,150));
  s+=G(0,0,1,0,G(110,592,1,0,humpS(300,126,{lit:'#d6a25a',dark:'#a8743a'}))+G(330,592,1,0,humpS(330,150,{lit:'#d6a25a',dark:'#a8743a'})),dry);
  s+=Rc(-40,610,620,400,mixc('#c9a46a','#d8b77a',dry));
  for(let i=0;i<12;i++){const x=hs(i)*540,y=640+hs(i+5)*300;s+=P(`M${f1(x)} ${f1(y)} l${f1(20+hs(i)*20)} ${f1(8-hs(i+2)*16)} l${f1(14)} ${f1(10)} M${f1(x+20)} ${f1(y+4)} l-6 18`,ST('#8a6a3a',2.2,`opacity:${f2(dry)}`));}
  const wy=lerp(612,760,dry),ww=lerp(640,260,dry);
  s+=clipG(waterBand(-40,580,612,990,T,{rows:5,fill:'#4654ee'}),`<ellipse cx="270" cy="${f1(lerp(800,860,dry))}" rx="${f1(ww)}" ry="${f1(lerp(200,90,dry))}"/>`);
  s+=mDuck(270,lerp(780,840,dry),.8,T,{bill:1,tail:.5});
  s+=G(200,330,1,0,NX.stamp({type:'urgente',text:'EN PELIGRO · UICN',sz:20,r:-5},t-96.6));
  return push(s,t,95.3,100.2,1,1.05,270,700);
}
/* ---------- M18 · de 22 a más de 2.000 ---------- */
function sceneM18(t){
  const T=t;let s=groundLine(1);
  s+=G(130,470,ap(t,100.5,.35),0,Ci(0,0,60,'#fff',OL(2.4))+Tn(0,16,'22',44,600));
  s+=arrowA('M190 470 L320 470',sg(t,100.8,101.4),K.pink,4,14);
  s+=G(410,470,ap(t,101.5,.35),0,Ci(0,0,82,'url(#gRP)',OL(2.4))+Tn(0,14,'+2.000',36,700,{fill:'#fff'}));
  s+=pillA(130,560,'años 70',sg(t,100.6,100.9),{sz:12,w:700})+pillA(410,590,'hoy',sg(t,101.7,102.0),{sz:12,w:700,fill:'url(#gRP)'});
  s+=mDuck(270,GY-4,.6,T,{bill:1,tail:.8});
  return s;
}
/* ---------- M19 · pregunta ---------- */
function sceneM19(t){
  const T=t;let s=qDeco(t,ao(t,102.4,.5),7,6);
  const opts=[['A','El desmán ibérico'],['B','El fartet'],['C','El urogallo'],['D','¿Otro? Dímelo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,102.6+i*.12,.32),sel=i===0?EZ.out(sg(t,104.0,104.2)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,102.6+i*.12,102.95+i*.12)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  if(t>103.8&&t<104.4){const q=sg(t,103.8,104.0);s+=G(lerp(470,400,EZ.out(q)),lerp(560,345,EZ.out(q)),1,0,P('M0 0 L0 22 L6 16 L11 26 L15 24 L10 14 L18 14Z',`fill:#fff;${OL(1.8)}`));}
  const cq=ap(t,104.3,.3);
  if(cq>0){const msg='¡El desmán!';const typed=msg.slice(0,Math.floor(msg.length*sg(t,104.5,105.6)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:102.4,path:[[102.4,86]],emo:[[102.4,0,0],[103.0,9,0],[104.2,3,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:102.55,path:[[102.55,458]],emo:[[102.55,0,0],[103.2,9,1]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- FIN ---------- */
function sceneEND(t){
  const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,107.3,108.0)));
  s+=G(0,0,1,0,Ts(270,352,'La malvasía',30),ao(t,107.4,.3))+G(0,0,1,0,Ts(270,398,'del pico azul',44,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,107.5,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Smithsonian Magazine · MITECO · Animal Diversity Web',10,600)+Tn(270,474,'National Aviary · El Español · iagua',10,600)+Tn(270,490,'17/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,107.6,.3));
  s+=G(lerp(640,330,sg(t,107.2,109.2)),GY-4,.6,0,duckS({T,bill:1,tail:.8}));
  s+=groundLine(1);
  const par=[['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]];
  par.forEach(([k,sc],i)=>{const x=600-((t-107.2)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;
}

/* ---------- línea de tiempo ---------- */
SCN=[
  {id:'L1',a:0,draw:sceneL1},
  {id:'M1',a:2.7,draw:sceneM1,in:{type:'whipL',dur:.34}},
  {id:'M2',a:5.3,draw:sceneM2,in:{type:'whipU',dur:.34}},
  {id:'L2',a:9.55,draw:sceneL2,in:{type:'zoom',dur:.45,fx:300,fy:540,z:8}},
  {id:'M3',a:13.6,draw:sceneM3,in:{type:'iris',dur:.4,fx:150,fy:620,r0:10}},
  {id:'M4',a:16.6,draw:sceneM4,in:{type:'zoom',dur:.45,fx:470,fy:670,z:10}},
  {id:'M5',a:23.0,draw:sceneM5,in:{type:'whipL',dur:.34}},
  {id:'M6',a:29.3,draw:sceneM6,in:{type:'whipU',dur:.34}},
  {id:'M7',a:32.2,draw:sceneM7,in:{type:'whipL',dur:.34}},
  {id:'L3',a:35.85,draw:sceneL3,in:{type:'zoom',dur:.45,fx:330,fy:680,z:8}},
  {id:'M8',a:39.65,draw:sceneM8,in:{type:'whipU',dur:.34}},
  {id:'L4',a:43.5,draw:sceneL4,in:{type:'whipD',dur:.36}},
  {id:'M9',a:48.05,draw:sceneM9,in:{type:'zoom',dur:.45,fx:200,fy:880,z:9}},
  {id:'M10',a:49.8,draw:sceneM10,in:{type:'whipL',dur:.34}},
  {id:'M11',a:56.3,draw:sceneM11,in:{type:'iris',dur:.42,fx:270,fy:480,r0:20}},
  {id:'M12',a:58.0,draw:sceneM12,in:{type:'whipL',dur:.34}},
  {id:'L5',a:63.75,draw:sceneL5,in:{type:'iris',dur:.42,fx:270,fy:540,r0:20}},
  {id:'M13',a:68.75,draw:sceneM13,in:{type:'whipU',dur:.34}},
  {id:'M14',a:73.7,draw:sceneM14,in:{type:'whipL',dur:.34}},
  {id:'M15',a:78.85,draw:sceneM15,in:{type:'zoom',dur:.45,fx:250,fy:610,z:9}},
  {id:'M16',a:86.25,draw:sceneM16,in:{type:'whipU',dur:.34}},
  {id:'M17',a:92.4,draw:sceneM17,in:{type:'whipL',dur:.34}},
  {id:'L6',a:95.3,draw:sceneL6,in:{type:'whipD',dur:.36}},
  {id:'M18',a:100.2,draw:sceneM18,in:{type:'iris',dur:.42,fx:270,fy:470,r0:20}},
  {id:'M19',a:102.3,draw:sceneM19,in:{type:'whipU',dur:.32}},
  {id:'END',a:107.25,draw:sceneEND,in:{type:'swap',dur:.4}}
];
HL=[{"t0": 0.05, "lines": [{"txt": "este *pato*", "sz": 50, "t": [0.05, 0.44]}], "t1": 0.64}, {"t0": 0.72, "lines": [{"txt": "tiene el pico", "sz": 30, "t": [0.72, 0.97, 1.1]}, {"txt": "*azul*", "sz": 64, "t": [1.38], "spark": true}, {"txt": "eléctrico", "sz": 30, "t": [1.68], "gap": 0.95}], "t1": 3.31}, {"t0": 3.39, "lines": [{"txt": "ni una *gota*", "sz": 46, "t": [3.39, 3.58, 3.76]}, {"txt": "de pigmento azul", "sz": 30, "t": [4.0, 4.11, 4.58], "gap": 1.1}], "t1": 5.57}, {"t0": 5.65, "lines": [{"txt": "la *malvasía*", "sz": 50, "t": [5.65, 5.76]}, {"txt": "cabeciblanca", "sz": 34, "t": [6.31], "gap": 1.0}], "t1": 7.71}, {"t0": 7.79, "lines": [{"txt": "cría en", "sz": 30, "t": [7.79, 8.1]}, {"txt": "*lagunas*", "sz": 56, "t": [8.2]}, {"txt": "de España", "sz": 30, "t": [8.64, 8.72], "gap": 1.0}], "t1": 9.58}, {"t0": 9.66, "lines": [{"txt": "cabeza", "sz": 30, "t": [9.66]}, {"txt": "*blanca*", "sz": 58, "t": [10.12]}], "t1": 10.63}, {"t0": 10.71, "lines": [{"txt": "cola", "sz": 30, "t": [10.71]}, {"txt": "*tiesa*", "sz": 58, "t": [10.99]}], "t1": 12.13}, {"t0": 12.21, "lines": [{"txt": "parece de", "sz": 30, "t": [12.21, 12.57]}, {"txt": "*juguete*", "sz": 58, "t": [12.69], "spark": true}], "t1": 13.6}, {"t0": 13.68, "lines": [{"txt": "¿el *truco*?", "sz": 56, "t": [13.68, 13.99]}], "t1": 14.76}, {"t0": 14.84, "lines": [{"txt": "el azul es", "sz": 30, "t": [14.84, 15.09, 15.39]}, {"txt": "*estructural*", "sz": 50, "t": [15.53]}], "t1": 16.86}, {"t0": 16.94, "lines": [{"txt": "capa de", "sz": 30, "t": [16.94, 17.2]}, {"txt": "*queratina*", "sz": 54, "t": [17.3]}], "t1": 18.65}, {"t0": 18.73, "lines": [{"txt": "estructura", "sz": 30, "t": [18.73]}, {"txt": "*microscópica*", "sz": 46, "t": [19.29]}], "t1": 20.12}, {"t0": 20.2, "lines": [{"txt": "dispersa", "sz": 30, "t": [20.2]}, {"txt": "la *luz*", "sz": 58, "t": [20.7, 20.8]}], "t1": 21.56}, {"t0": 21.64, "lines": [{"txt": "nos llega", "sz": 30, "t": [21.64, 21.81]}, {"txt": "*azul*", "sz": 64, "t": [22.24], "spark": true}], "t1": 22.97}, {"t0": 23.05, "lines": [{"txt": "pero no", "sz": 30, "t": [23.05, 23.35]}, {"txt": "*siempre*", "sz": 58, "t": [23.48]}], "t1": 24.77}, {"t0": 24.85, "lines": [{"txt": "época de", "sz": 30, "t": [24.85, 25.18]}, {"txt": "*celo*", "sz": 64, "t": [25.29]}], "t1": 25.68}, {"t0": 25.76, "lines": [{"txt": "las *hormonas*", "sz": 50, "t": [25.76, 25.98]}], "t1": 27.69}, {"t0": 27.77, "lines": [{"txt": "el pico", "sz": 30, "t": [27.77, 27.9]}, {"txt": "se *enciende*", "sz": 52, "t": [28.2, 28.35], "spark": true}], "t1": 29.46}, {"t0": 29.54, "lines": [{"txt": "a las *hembras*", "sz": 48, "t": [29.54, 29.59, 29.79]}], "t1": 30.62}, {"t0": 30.7, "lines": [{"txt": "los más", "sz": 30, "t": [30.7, 30.88]}, {"txt": "*brillantes*", "sz": 54, "t": [31.06]}], "t1": 32.5}, {"t0": 32.58, "lines": [{"txt": "acaba la", "sz": 30, "t": [32.58, 32.85]}, {"txt": "*temporada*", "sz": 52, "t": [32.96]}], "t1": 34.08}, {"t0": 34.16, "lines": [{"txt": "vuelve a ser", "sz": 30, "t": [34.16, 34.5, 34.56]}, {"txt": "*grisáceo*", "sz": 54, "t": [34.8]}], "t1": 35.86}, {"t0": 35.94, "lines": [{"txt": "la cola", "sz": 30, "t": [35.94, 36.23]}, {"txt": "también tiene *truco*", "sz": 40, "t": [36.49, 36.91, 37.17]}], "t1": 37.65}, {"t0": 37.73, "lines": [{"txt": "plumas largas", "sz": 30, "t": [37.73, 38.11]}, {"txt": "y *rígidas*", "sz": 54, "t": [38.55, 38.64]}], "t1": 40.24}, {"t0": 41.95, "lines": [{"txt": "patos de", "sz": 30, "t": [41.95, 42.3]}, {"txt": "*cola tiesa*", "sz": 54, "t": [42.4, 42.67], "spark": true}], "t1": 43.77}, {"t0": 43.85, "lines": [{"txt": "una *buceadora*", "sz": 48, "t": [43.85, 44.0]}, {"txt": "nata", "sz": 30, "t": [44.58], "gap": 1.0}], "t1": 45.34}, {"t0": 45.42, "lines": [{"txt": "se *sumerge*", "sz": 52, "t": [45.42, 45.69]}], "t1": 47.33}, {"t0": 47.41, "lines": [{"txt": "*larvas*", "sz": 58, "t": [47.41]}], "t1": 48.09}, {"t0": 48.17, "lines": [{"txt": "mosquitos", "sz": 30, "t": [48.17]}, {"txt": "que no *pican*", "sz": 46, "t": [48.71, 48.81, 48.94]}], "t1": 50.84}, {"t0": 50.92, "lines": [{"txt": "huevos", "sz": 30, "t": [50.92]}, {"txt": "*enormes*", "sz": 60, "t": [51.27], "spark": true}], "t1": 51.88}, {"t0": 51.96, "lines": [{"txt": "en proporción", "sz": 30, "t": [51.96, 52.11]}, {"txt": "a su *cuerpo*", "sz": 48, "t": [52.67, 52.74, 52.88]}], "t1": 53.37}, {"t0": 53.45, "lines": [{"txt": "los más *grandes*", "sz": 48, "t": [53.45, 53.64, 53.83]}, {"txt": "de todas las aves acuáticas", "sz": 26, "t": [54.24, 54.35, 54.7, 54.92, 55.19], "gap": 1.05}], "t1": 56.94}, {"t0": 57.02, "lines": [{"txt": "el *giro*", "sz": 70, "t": [57.02, 57.2], "spark": true}], "t1": 58.17}, {"t0": 58.25, "lines": [{"txt": "finales de los", "sz": 30, "t": [58.25, 58.71, 58.8]}, {"txt": "años *setenta*", "sz": 50, "t": [58.99, 59.25]}], "t1": 60.75}, {"t0": 60.83, "lines": [{"txt": "solo quedaban", "sz": 30, "t": [60.83, 61.1]}], "t1": 62.47}, {"t0": 62.55, "lines": [{"txt": "22", "sz": 96, "t": [62.55], "num": true, "roll": 0.4}], "t1": 63.75}, {"t0": 63.83, "lines": [{"txt": "se *protegieron*", "sz": 46, "t": [63.83, 64.08]}, {"txt": "las lagunas", "sz": 30, "t": [64.66, 64.81], "gap": 1.05}], "t1": 65.41}, {"t0": 65.47, "lines": [{"txt": "se prohibió", "sz": 30, "t": [65.47, 65.64]}, {"txt": "*cazarla*", "sz": 56, "t": [66.03]}], "t1": 66.72}, {"t0": 66.8, "lines": [{"txt": "la población", "sz": 30, "t": [66.8, 66.92]}, {"txt": "empezó a *crecer*", "sz": 46, "t": [67.44, 67.85, 67.92]}], "t1": 69.52}, {"t0": 69.6, "lines": [{"txt": "un *problema*", "sz": 50, "t": [69.6, 69.71]}, {"txt": "desde muy lejos", "sz": 30, "t": [70.16, 70.42, 70.61], "gap": 1.05}], "t1": 71.13}, {"t0": 71.21, "lines": [{"txt": "la malvasía", "sz": 30, "t": [71.21, 71.36]}, {"txt": "*canela*", "sz": 62, "t": [71.9]}], "t1": 72.54}, {"t0": 72.62, "lines": [{"txt": "un pato", "sz": 30, "t": [72.62, 72.89]}, {"txt": "*americano*", "sz": 54, "t": [73.15]}], "t1": 73.8}, {"t0": 73.88, "lines": [{"txt": "se escapó en el", "sz": 30, "t": [73.88, 74.01, 75.26, 75.38]}, {"txt": "*Reino Unido*", "sz": 50, "t": [75.49, 75.83]}], "t1": 76.84}, {"t0": 76.92, "lines": [{"txt": "los años", "sz": 30, "t": [76.92, 77.11]}, {"txt": "*ochenta*", "sz": 56, "t": [77.42]}], "t1": 77.77}, {"t0": 77.85, "lines": [{"txt": "alcanzó", "sz": 30, "t": [77.85]}, {"txt": "*España*", "sz": 58, "t": [78.33]}], "t1": 78.84}, {"t0": 78.92, "lines": [{"txt": "empezó a", "sz": 30, "t": [78.92, 79.35]}, {"txt": "*cruzarse*", "sz": 56, "t": [79.42]}], "t1": 81.04}, {"t0": 81.12, "lines": [{"txt": "sus *híbridos*", "sz": 50, "t": [81.12, 81.47]}], "t1": 81.82}, {"t0": 81.9, "lines": [{"txt": "son *fértiles*", "sz": 52, "t": [81.9, 82.1]}], "t1": 83.77}, {"t0": 83.85, "lines": [{"txt": "podía", "sz": 30, "t": [83.85]}, {"txt": "*desaparecer*", "sz": 50, "t": [84.21]}], "t1": 85.0}, {"t0": 85.08, "lines": [{"txt": "*mezclándose*", "sz": 52, "t": [85.08], "spark": true}], "t1": 86.96}, {"t0": 87.04, "lines": [{"txt": "control del", "sz": 30, "t": [87.04, 87.91]}, {"txt": "pato *invasor*", "sz": 48, "t": [88.09, 88.38]}], "t1": 89.23}, {"t0": 89.31, "lines": [{"txt": "hibridación", "sz": 30, "t": [89.31]}, {"txt": "*controlada*", "sz": 52, "t": [90.19]}], "t1": 92.38}, {"t0": 92.46, "lines": [{"txt": "y en *España*", "sz": 52, "t": [92.46, 92.66, 92.76]}], "t1": 93.41}, {"t0": 93.49, "lines": [{"txt": "más de", "sz": 30, "t": [93.49, 93.67]}, {"txt": "2.000", "sz": 84, "t": [93.79], "num": true, "roll": 0.5}], "t1": 95.64}, {"t0": 95.72, "lines": [{"txt": "en el mundo", "sz": 30, "t": [95.72, 95.83, 95.94]}, {"txt": "sigue en *peligro*", "sz": 46, "t": [96.29, 96.62, 96.74]}], "t1": 97.39}, {"t0": 97.47, "lines": [{"txt": "las *sequías*", "sz": 52, "t": [97.47, 97.65]}, {"txt": "amenazan las lagunas", "sz": 28, "t": [98.11, 98.64, 98.79], "gap": 1.05}], "t1": 100.21}, {"t0": 100.29, "lines": [{"txt": "de 22", "sz": 56, "t": [100.29, 100.53], "num": true}, {"txt": "a más de 2.000", "sz": 40, "t": [101.1, 101.16, 101.38, 101.49], "num": true, "gap": 1.0}], "t1": 102.31}, {"t0": 102.39, "lines": [{"txt": "¿qué otro *animal*", "sz": 44, "t": [102.39, 102.64, 102.85]}, {"txt": "de España", "sz": 30, "t": [103.2, 103.3], "gap": 1.0}, {"txt": "casi nadie *conoce*?", "sz": 40, "t": [104.2, 104.47, 104.78], "gap": 1.0}], "t1": 105.64}, {"t0": 105.72, "lines": [{"txt": "te leo en", "sz": 30, "t": [105.72, 105.92, 106.2]}, {"txt": "*comentarios*", "sz": 48, "t": [106.31]}], "t1": 107.22}];
