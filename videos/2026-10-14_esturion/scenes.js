/* ===== ESCENAS · el esturión de lago (pez que podría vivir más de 400 años) ===== */
DUR=114.4;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function leader(x1,y1,x2,y2,p,c=K.ink,bend=-24){if(p<=0)return '';const mx=(x1+x2)/2,my=(y1+y2)/2+bend;
  return DR(`M${f1(x1)} ${f1(y1)} Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}`,ST(c,1.8),EZ.out(p))+(p>.9?Ci(x2,y2,3.2,c):'');}
function birds(t,y0=300){let s='';for(let i=0;i<3;i++){const x=((t*22+i*70+100)%700)-80;s+=birdV(x,y0+i*14+Math.sin(t*2+i)*4,1,t,i);}return s;}
function fgLeaves(T,y=962){return G(20,y,1.15,-20+Math.sin(T*1.2)*1.5,leafS(200,48))+G(92,y+16,1.1,8,leafS(150,36,'#2b7a3e','#1b5a2b'))+
  G(520,y-4,1.15,20+Math.sin(T*1.1+1)*1.5,leafS(210,52))+G(452,y+18,1.1,-6,fernS(170));}
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* fondo submarino bajo una superficie en y0 */
function underwater(T,y0,y1=990,o={}){let s=Rc(-40,y0,620,y1-y0,'url(#gUW)');
  for(let i=0;i<5;i++){const x=30+i*120+Math.sin(T*.6+i)*12;s+=P(`M${f1(x)} ${y0} L${f1(x+50)} ${y0} L${f1(x+10)} ${y1} L${f1(x-40)} ${y1}Z`,'fill:#fff;opacity:.06');}
  for(let i=0;i<10;i++){const q=((T*.25)+hs(i*3))%1;s+=Ci(30+hs(i)*480+Math.sin(T+i)*6,lerp(y1-60,y0+10,q),2+hs(i+2)*3,'none',`stroke:#fff;stroke-width:1.4;opacity:${f2(.5*(1-q))}`);}
  if(o.weeds!==false)for(let i=0;i<7;i++){const x=20+i*84+hs(i)*30,h=60+hs(i+4)*70,sw=Math.sin(T*1.2+i)*10;s+=P(`M${f1(x)} ${y1-40} Q${f1(x+sw)} ${f1(y1-40-h*.5)} ${f1(x+sw*1.6)} ${f1(y1-40-h)}`,ST(i%2?'#2b7a3e':'#1f6b33',5));}
  s+=P(`M-40 ${y0} ${[...Array(15)].map((_,i)=>`Q${-20+i*44} ${f1(y0-4+Math.sin(T*2+i)*2)} ${f1(4+i*44)} ${y0}`).join(' ')}`,ST('#a7b0ff',2.4));
  return s;}
function lakeSky(T,o={}){let s=G(o.sx||400,o.sy||420,1,0,sunS(o.sr||70));
  s+=G(110+T*3,300,1,0,cloudS(86))+G(440+T*2,262,.75,0,cloudS(62))+birds(T,320);
  s+=G(70,o.hy||580,1,0,humpS(250,118))+G(300,o.hy||580,1,0,humpS(320,156))+G(520,o.hy||580,1,0,humpS(250,104));
  s+=bushBand(-40,580,(o.hy||580)-4,30,o.seed||3);
  return s;}
/* libro abierto + pluma */
function bookS(T){let s=P('M-130 0 Q-70 -16 0 0 Q70 -16 130 0 L130 96 Q70 80 0 96 Q-70 80 -130 96Z','fill:#8a2b1f')+P('M-122 -6 Q-64 -22 0 -4 L0 88 Q-64 70 -122 86Z','fill:#fbf6ea;'+OL(2))+P('M122 -6 Q64 -22 0 -4 L0 88 Q64 70 122 86Z','fill:#f4eedd;'+OL(2));
  for(let i=0;i<6;i++){s+=P(`M${-108} ${10+i*12} Q-60 ${-2+i*12} -14 ${12+i*12}`,ST('#b9b0a0',2.2))+P(`M14 ${12+i*12} Q60 ${-2+i*12} ${i===5?70:108} ${10+i*12}`,ST('#b9b0a0',2.2));}
  const qx=70+Math.sin(T*6)*10,qy=-40+Math.cos(T*6)*4;
  s+=G(qx,qy,1,30,P('M0 0 Q-8 -40 10 -96 Q24 -50 6 0Z','fill:#fff;'+OL(2))+P('M4 -4 L8 -80',ST('#c9c9c9',1.6))+P('M0 0 L-3 18',ST(K.ink,3)));
  return s;}
/* estudio científico (tarjeta) */
function paperS(t,t0){const W2=300,H2=320;let s=Rc(-W2/2+5,-H2/2+6,W2,H2,K.ink,12)+Rc(-W2/2,-H2/2,W2,H2,'#fbf8f2',12,OL(2.2));
  s+=Rc(-W2/2,-H2/2,W2,34,K.blue,12)+Rc(-W2/2,-H2/2+20,W2,14,K.blue)+Tn(0,-H2/2+22,'JOURNAL OF FISH BIOLOGY · 2026',10.5,700,{fill:'#fff',ls:.08});
  s+=Ts(0,-H2/2+70,'Crecimiento y longevidad',22)+Ts(0,-H2/2+96,'del esturión de lago',22,{it:true});
  for(let i=0;i<5;i++)s+=Rc(-118,-H2/2+120+i*16,i===4?150:236,6,'#d7d0c4',3);
  s+=G(0,70,.42,0,sturgeon({T:t,amp:2}));
  s+=Tn(0,H2/2-22,'44 años de marcaje y recaptura',11.5,600,{fill:'#6b6b6b'});
  return s;}
function snailS(T){const b=Math.sin(T*3)*1.5;return P(`M-30 0 Q-34 -8 -24 -10 L26 -10 Q40 -10 44 -24 Q50 -30 52 -20 Q50 -4 34 0Z`,'fill:#f6c58f;'+OL(1.8))+
  G(0,-28+b,1,0,Ci(0,0,24,'#c2410c',OL(2))+P('M0 0 m-14 0 a14 14 0 1 1 14 14 a9 9 0 1 1 -9 -9',ST('#fff',2.2,'opacity:.7')))+P('M46 -22 L50 -38 M50 -22 L58 -34',ST(K.ink,1.8))+Ci(50,-38,2.4,K.ink)+Ci(58,-34,2.4,K.ink);}
/* Grandes Lagos (aprox.) para el mapa */
const LAKES=[
 [[-92.1,46.7],[-89.5,48.0],[-88.2,48.9],[-86.5,48.7],[-84.8,47.5],[-84.6,46.5],[-86.5,46.4],[-88.4,46.9],[-90.5,46.6]],
 [[-87.8,41.7],[-87.2,41.6],[-86.3,42.3],[-86.2,43.6],[-86.5,44.8],[-85.6,45.8],[-84.8,45.9],[-85.6,45.2],[-87.0,45.6],[-87.6,44.8],[-87.9,43.3]],
 [[-84.7,46.0],[-84.0,46.2],[-81.5,46.1],[-80.0,45.9],[-80.6,44.6],[-81.7,43.4],[-82.4,43.0],[-82.5,43.6],[-83.4,44.0],[-83.4,44.9],[-84.1,45.5]],
 [[-83.5,41.7],[-82.0,41.5],[-80.0,42.1],[-78.9,42.8],[-80.2,42.7],[-81.8,42.3],[-83.1,42.0]],
 [[-79.8,43.3],[-79.0,43.2],[-77.2,43.3],[-76.2,43.6],[-76.5,44.1],[-77.6,44.0],[-79.4,43.7]]];
const lakesOver=(t0,t)=> (proj,k,lt)=>{const q=EZ.out(sg(lt,t0,t0+.6));if(q<=0)return '';let s='';
  LAKES.forEach(L=>{let d='';L.concat([L[0]]).forEach(([lo,la],i)=>{const [x,y]=proj(lo,la);d+=(i?' L':'M')+f1(x)+' '+f1(y);});s+=P(d+'Z',`fill:${mixc('#fbfbfb','#3b49ec',q)};stroke:${K.ink};stroke-width:${f2(1.2/k)};stroke-linejoin:round`);});return s;};

/* ---------- L1 · gancho: un pez bajo el lago ---------- */
function sceneL1(t){
  const T=t;let s=lakeSky(T,{hy:560});
  s+=waterBand(-40,580,560,610,T,{rows:2})+sunGlint(400,574,T,70);
  s+=underwater(T,610);
  s+=mudBand(-40,580,900,100);
  s+=sturgeon({x:lerp(-120,250,EZ.out(sg(t,0,3.4))),y:760,s:.82,T,amp:5});
  s+=actor('grano',{path:[[0,620],[1.2,452]],emo:[[0,1,0],[1.2,1,1],[3.3,7,0]],s:.48,pop:false,y:tt=>800+Math.sin(tt*2.2)*6,face:()=>-1,look:()=>-1,acc:()=>SNORKEL,mod:(p,tt)=>{p.rot+=6*Math.sin(tt*3);}},t);
  const push=t<.6?lerp(1.2,1,EZ.out(t/.6)):1+.05*EZ.sine(sg(t,.6,4.3));
  return G(270,700,push,0,G(-270,-700,1,0,s));
}
/* ---------- M1 · antes de que muriera Cervantes ---------- */
function sceneM1(t){
  const T=t;let s='';
  s+=G(270,350+Math.sin(T*2)*3,ap(t,4.4,.4)*.9,0,bookS(T));
  s+=G(270,590,1,0,NX.timeline({items:[['~1590','nace el pez'],['1616','muere Cervantes'],['2026','sigue vivo']],step:.55,w:400},t-4.75));
  s+=actor('pipa',{t0:5.5,path:[[5.5,470]],emo:[[5.5,7,0]],s:.75,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- L2 · bajo el agua: el esturión ---------- */
function sceneL2(t){
  const T=t;let s=G(420,250,1,0,sunS(48))+G(120+t*3,236,.8,0,cloudS(70));
  s+=waterBand(-40,580,286,312,T,{rows:1});
  s+=underwater(T,312);
  s+=mudBand(-40,580,880,120);
  const x=lerp(640,250,EZ.out(sg(t,6.85,8.4)))-sg(t,8.4,9.6)*40;
  s+=sturgeon({x,y:580,s:1.25,T,amp:6,flip:false});
  s+=pillA(160,450,'esturión de lago',sg(t,7.21,7.5),{fill:'url(#gRP)',sz:14})+leader(190,466,x+40,548,sg(t,7.3,7.6),'#fff',-12);
  return s;
}
/* ---------- M2 · mapa: Grandes Lagos ---------- */
function sceneM2(t){
  const lt=t-9.3;let s='';
  s+=G(270,520,1,0,NX.map({center:[-84,45.5],zoom:7,zoomAt:.1,over:lakesOver(1.0,t),w:480,h:440},lt));
  s+=pillA(300,450,'Grandes Lagos',sg(t,10.0,10.3),{fill:'url(#gRP)',sz:14});
  s+=pillA(190,640,'EE. UU.',sg(t,10.4,10.7),{sz:12})+pillA(330,355,'Canadá',sg(t,10.5,10.8),{sz:12});
  return s;
}
/* ---------- M3 · tamaño y placas de hueso ---------- */
function sceneM3(t){
  const T=t;let s=groundLine(1);
  const fx=262,fs=1.05,hl=EZ.io(sg(t,14.6,15.3));
  s+=sturgeon({x:fx,y:520+Math.sin(T*1.5)*4,s:fs,T,amp:3,hl});
  const mq=EZ.io(sg(t,12.1,12.9));
  if(mq>0){const x0=24,x1=lerp(24,432,mq);s+=P(`M${x0} 410 L${f1(x1)} 410`,ST(K.ink,2.6))+P(`M${x0} 400 L${x0} 420`,ST(K.ink,2.6))+(mq>.98?P('M432 400 L432 420',ST(K.ink,2.6)):'')+G(x1,410,1,0,P('M-9 -6 L0 0 L-9 6',ST(K.ink,2.6)));}
  s+=pillA(228,382,'+1,80 m',sg(t,12.94,13.2),{fill:'url(#gRP)',sz:16,w:800});
  const lz=ap(t,15.2,.35)*dis(t,16.05,.2);
  if(lz>0){const cx=230,cy=360,r=74;
    const inner=clipG(Rc(cx-r,cy-r,2*r,2*r,'#c6c6c6')+G(cx,cy,2.6,0,G(-90,20,1,0,sturgeon({T,amp:0,hl}))),`<circle cx="${cx}" cy="${cy}" r="${r}"/>`);
    s+=G(cx,cy,lz,0,G(-cx,-cy,1,0,inner+Ci(cx,cy,r,'none','stroke:#fff;stroke-width:7')+Ci(cx,cy,r,'none',OL(2.4))));
    s+=leader(cx+50,cy+56,300,470,sg(t,15.3,15.6)*dis(t,16.05),K.ink,10);}
  s+=pillA(400,600,'placas de hueso',sg(t,15.16,15.44),{fill:'url(#gRP)'})+leader(390,586,330,500,sg(t,15.25,15.55),K.ink,-10);
  s+=actor('lenteja',{t0:14.2,path:[[14.2,640],[14.8,470]],emo:[[14.2,1,0],[14.8,16,0]],s:.9,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>tt>14.8?PROP.puntero:'',mod:(p,tt)=>{if(tt>14.8)p.arms.r=[112+6*Math.sin(tt*4),-30];}},t);
  s+=actor('pipa',{t0:12.3,path:[[12.3,70]],emo:[[12.3,7,0],[13.6,3,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- L3 · la época de los dinosaurios ---------- */
function sceneL3(t){
  const T=t;let s=G(430,400,1,0,sunS(80))+G(230+t*3,300,1,0,cloudS(90))+G(500,350,.7,0,cloudS(56));
  s+=G(110,560,.5,0,NX.volcano({},t-16.2));
  s+=G(300,590,1,0,humpS(320,140))+G(520,590,1,0,humpS(260,100));
  s+=G(lerp(250,320,sg(t,16.2,20.2)),588,.62,0,sauropodS({T}));
  s+=bushBand(-40,580,586,28,7,{c:'#7fd17a'});
  s+=waterBand(-40,580,600,640,T,{rows:2,fill:'#3b49ec'});
  s+=underwater(T,640,850,{weeds:false});
  s+=sturgeon({x:lerp(-60,330,EZ.io(sg(t,16.3,19.8))),y:745,s:.7,T,amp:5});
  s+=sturgeon({x:lerp(-180,180,EZ.io(sg(t,16.6,20.2))),y:800,s:.42,T,amp:5,ph:2});
  s+=groundBand(-40,580,846,200,{c:'#a8743e'});
  s+=G(40,960,1.2,-10,fernS(190))+G(130,972,1,8,fernS(150,'#2b7a3e'))+G(500,966,1.2,12,fernS(200));
  s+=pillA(400,700,'época de los dinosaurios',sg(t,18.44,18.7),{sz:12,fill:'url(#gRP)'});
  s+=actor('grano',{path:[[16.2,470]],emo:[[16.2,7,0],[18.6,3,0]],s:.75,pop:false,y:()=>918,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M4 · creíamos 100 años; récord 150 ---------- */
function sceneM4(t){
  const T=t;let s='';
  s+=G(180,GY,1,0,NX.columns({items:[['lo que creíamos',100,'url(#gWA)']],max:160,h:300},t-20.9),ao(t,20.9,.2));
  s+=G(370,GY,1,0,NX.columns({items:[['el más viejo',150,'url(#gGR)']],max:160,h:300},t-24.3),ao(t,24.3,.2));
  s+=groundLine(1);
  s+=actor('garbanzo',{t0:20.3,path:[[20.3,486]],emo:[[20.3,1,0],[22.3,2,0],[24.9,9,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=actor('lenteja',{t0:20.5,path:[[20.5,54]],emo:[[20.5,1,0],[24.9,10,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- M5 · un estudio nuevo cambia las cuentas ---------- */
function sceneM5(t){
  const T=t;let s=groundLine(1);
  const dIn=EZ.out(sg(t,26.85,27.3));
  s+=blurG(G(300,470+(1-dIn)*620,1,(1-dIn)*8,paperS(T)),0,Math.sin(Math.PI*sg(t,26.85,27.3))*10);
  s+=stampA(330,330,t-28.2,'NUEVO ESTUDIO',{r:-7,sz:22,c:K.blue});
  const q=ap(t,28.9,.3);
  if(q>0){s+=G(90,470,q,0,pill('150 años',{sz:16,w:800}))+DR('M44 470 L136 470',ST(K.red,4),sg(t,29.4,29.7));
    s+=G(90,410+Math.sin(T*5)*4,ap(t,29.75,.3),Math.sin(T*4)*6,Ts(0,0,'?',70,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}));}
  s+=actor('pipa',{t0:27.2,path:[[27.2,-60],[27.8,96]],emo:[[27.2,1,0],[28.9,7,1]],s:.8,pop:false,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- M6 · ¿cómo se calcula la edad de un pez? ---------- */
function sceneM6(t){
  const T=t;let s=qDeco(t,ao(t,31.0,.4),4,6)+groundLine(1);
  s+=sturgeon({x:270,y:480+Math.sin(T*2)*6,s:.85,T,amp:5});
  const cq=ap(t,32.5,.35);
  if(cq>0){s+=G(350,400,cq,-8,Rc(-34,-26,68,26,'#fff',4,OL(2))+Rc(-34,-26,68,8,K.pink,3)+[0,1,2].map(i=>Rc(-20+i*16,-40,4,14,['#f6a81a','#2a37d7','#3f9b4f'][i],2)+El(-18+i*16,-44,3,5,'#ffcf3f')).join('')+Tn(0,-4,'¿?',13,800));}
  s+=actor('pipa',{t0:31.1,path:[[31.1,90]],emo:[[31.1,0,0],[31.8,9,1]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:31.3,path:[[31.3,450]],emo:[[31.3,0,0],[32.0,10,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M7 · anillos de la aleta y del árbol ---------- */
function sceneM7(t){
  const T=t;let s=groundLine(1);
  const fo=dis(t,35.15,.3);
  if(fo>0){s+=G(0,0,1,0,sturgeon({x:280,y:440,s:.95,T,amp:4}),fo);
    s+=ringA(lerp(280,280,0)+ .95*48,470,30,22,sg(t,34.6,35.0)*fo,K.pink,3.2);}
  const rq=ap(t,35.2,.35);
  if(rq>0){s+=G(165,510,rq*.82,0,finRingsS({n:12,p:sg(t,35.4,36.6)}));
    const n=Math.min(12,Math.floor(sg(t,35.4,36.6)*12+1e-6));if(t>35.4)s+=pillA(165,640,n+' anillos = '+n+' años',sg(t,35.5,35.8),{sz:12});
    s+=pillA(165,385,'aleta',sg(t,35.99,36.25),{fill:'url(#gRP)'});}
  const tq=ap(t,36.9,.35);
  if(tq>0){s+=G(390,520,tq*.68,0,stumpS({n:9,p:sg(t,37.0,37.9)}));s+=pillA(390,420,'árbol',sg(t,37.31,37.55),{fill:'url(#gGR)'});}
  s+=actor('lenteja',{t0:33.8,path:[[33.8,640],[34.4,478]],emo:[[33.8,1,0],[34.4,2,0],[36.6,16,0]],s:.72,pop:false,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M8 · los anillos se amontonan ---------- */
function sceneM8(t){
  const T=t;let s=groundLine(1);
  const cw=EZ.io(sg(t,41.6,43.0)),k=1+.25*EZ.io(sg(t,42.6,44.6));
  s+=G(270,500,k,0,finRingsS({n:16,r:150,p:sg(t,38.7,40.4),crowd:cw}));
  const lp=sg(t,42.9,44.4);
  if(t>42.8&&t<44.9){const a=lerp(-.5,.7,EZ.io(lp)),x=270+Math.cos(a)*150*k,y=500+Math.sin(a)*150*k*.9;s+=G(x-20,y-30,ap(t,42.8,.25)*dis(t,44.6,.2),-12,lupaS(40));}
  s+=pillA(130,330,'muy viejos',sg(t,40.94,41.2),{sz:13});
  if(t>43.4)s+=G(270,500,1,0,stampA(0,0,t-43.4,'ILEGIBLE',{r:-8,sz:28,c:K.red}),dis(t,44.75,.2));
  s+=actor('lenteja',{t0:39.2,path:[[39.2,470]],emo:[[39.2,0,0],[40.0,10,0],[43.2,9,1]],s:.75,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M9 · los científicos hicieron otra cosa ---------- */
function sceneM9(t){
  const T=t;let s=raysBg(270,560,t*14,20,'#d3d3d3',ao(t,45.0,.3))+groundLine(1);
  s+=actor('lenteja',{t0:45.1,path:[[45.1,270]],emo:[[45.1,0,0],[45.7,10,1]],s:1.2,y:()=>GY,face:()=>1},t);
  s+=sparkA(170,500,t-46.7,12,K.pink,.8)+sparkA(370,480,t-46.85,10,K.yellow,.8)+sparkA(340,600,t-47.0,8,K.orange,.8);
  return s;
}
/* ---------- L4 · 44 años marcando esturiones ---------- */
function sceneL4(t){
  const T=t;let s=lakeSky(T,{hy:560,sx:110,sy:430,sr:56,seed:9});
  s+=waterBand(-40,580,560,640,T,{rows:3})+sunGlint(110,580,T,60);
  s+=underwater(T,640);
  s+=G(250,600,1,0,boatS({T}));
  s+=P(`M334 ${f1(516+Math.sin(T*1.8)*2)} L${f1(330+Math.sin(T)*4)} 760`,ST('#fff',1.4,'opacity:.7'));
  [[0,720,.5],[1,800,.42],[2,860,.36]].forEach(([i,y,k])=>s+=sturgeon({x:((T*(28-i*6)+i*210)%760)-110,y,s:k,T,amp:4,ph:i}));
  s+=G(420,330,1,0,NX.calendar({from:1980,to:2024,month:'AÑO',dur:1.6},t-48.4));
  s+=pillA(130,690,'miles de esturiones',sg(t,50.33,50.6),{sz:13,fill:'url(#gRP)'});
  return s;
}
/* ---------- M10 · chip, suelta, recaptura y medida ---------- */
function sceneM10(t){
  const T=t;let s=groundLine(1);
  const cq=ap(t,51.4,.35),fly=EZ.io(sg(t,52.05,52.45));
  if(cq>0&&fly<1)s+=G(lerp(270,300,fly),lerp(390,560,fly),cq*lerp(1.3,.12,fly),0,tagChipS(t-51.4));
  // pez: aparece, se suelta (sale), vuelve y se mide
  const out=EZ.in(sg(t,52.4,53.1)),back=EZ.out(sg(t,53.3,54.3));
  const fx=t<53.2?270+out*460:lerp(-260,270,back);
  s+=sturgeon({x:fx,y:560,s:.95,T,amp:t>55?2:5});
  if(fly>=1&&t<53.2)s+=Ci(fx+30,560,5,K.pink,OL(1.2,'#fff'));
  if(t>52.4&&t<53.4){const q=sg(t,52.4,53.0);for(let i=0;i<7;i++){const a=-Math.PI*(.15+.7*hs(i+2));s+=Ci(470+Math.cos(a)*60*q,560+Math.sin(a)*70*q+q*q*60,5*(1-q),'#bcd3f0');}}
  s+=pillA(130,700,'¡libre!',sg(t,52.33,52.6)*dis(t,53.2),{sz:13,fill:'url(#gGR)'});
  if(t>53.2)s+=G(110,380,1,0,calS('+34','AÑOS DESPUÉS',{w:120,h:100}),ap(t,53.4,.3)*dis(t,55.0));
  if(t>54.3){const q=ap(t,54.4,.3);s+=G(380,390,q,0,pill('982 000 364 127 551 ✓',{sz:13,w:700,fill:'url(#gGR)'}));}
  // regla bajo el pez
  const rq=EZ.io(sg(t,55.0,55.8));
  if(rq>0){const x0=54,len=410*rq;s+=Rc(x0,630,len,30,'#f6d36b',4,OL(2));for(let i=0;i<=40;i++){const x=x0+i*10.25;if(x>x0+len)break;s+=P(`M${f1(x)} 630 l0 ${i%5?8:14}`,ST(K.ink,1.4));}}
  s+=pillA(270,700,'¿cuánto ha crecido?',sg(t,56.24,56.5),{sz:13,fill:'url(#gRP)'});
  return s;
}
/* ---------- M11 · 7 cm en 34 años ---------- */
function sceneM11(t){
  const T=t;let s=groundLine(1);
  const x0=86;
  const f1x=x0+.74*226,f2x=x0+.8*226;
  s+=sturgeon({x:f1x,y:400,s:.74,T,amp:2,ph:1})+sturgeon({x:f2x,y:560,s:.8,T,amp:2,ph:3});
  s+=pillA(126,330,'1ª captura',sg(t,57.9,58.2),{sz:12})+pillA(150,490,'34 años después',sg(t,58.1,58.4),{sz:12,fill:'url(#gRP)'});
  const s1=f1x+.74*160,s2=f2x+.8*160,gq=EZ.io(sg(t,59.2,59.8));
  s+=DR(`M${f1(s1)} 330 L${f1(s1)} 620`,ST(K.ink,2,'stroke-dasharray:6 6'),gq)+DR(`M${f1(s2)} 470 L${f1(s2)} 620`,ST(K.pink,2,'stroke-dasharray:6 6'),gq);
  const bq=ap(t,60.12,.3);if(bq>0)s+=G((s1+s2)/2,640,bq,0,P(`M${f1((s1-s2)/2)} -8 L${f1((s1-s2)/2)} 0 L${f1((s2-s1)/2)} 0 L${f1((s2-s1)/2)} -8`,ST(K.pink,3))+G(0,30,1,0,pill('+7 cm',{sz:16,w:800,fill:'url(#gRP)'})));
  s+=G(lerp(60,200,sg(t,58.2,63.4)),GY,.9,0,snailS(T),ao(t,58.2,.3));
  s+=actor('pipa',{t0:59.9,path:[[59.9,492]],emo:[[59.9,7,1],[61.5,9,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M12 · curva de crecimiento extrapolada ---------- */
function sceneM12(t){
  const T=t;let s='';
  s+=G(306,500,1,0,NX.growth({w:390,h:250,label:'lo medido',target:'el más grande',xl:'edad',yl:'tamaño'},t-64.6));
  s+=actor('lenteja',{t0:63.6,path:[[63.6,-60],[64.2,62]],emo:[[63.6,1,0],[64.2,2,0],[67.2,16,0]],s:.78,pop:false,y:()=>GY,face:()=>1,look:()=>1},t)+groundLine(1);
  return s;
}
/* ---------- M13 · hembras: más de 200 años ---------- */
function sceneM13(t){
  const T=t;let s=groundLine(1);
  s+=sturgeon({x:lerp(640,270,EZ.out(sg(t,70.0,71.0))),y:560+Math.sin(T*1.6)*5,s:1.0,T,amp:4});
  s+=pillA(130,480,'hembra',sg(t,71.21,71.5),{fill:'url(#gRP)'});
  if(t>72.9)s+=G(270,380,1,0,NX.counter({value:200,prefix:'+',suffix:'años',sz:72,dur:.9},t-73.0));
  s+=actor('pipa',{t0:73.7,path:[[73.7,460]],emo:[[73.7,11,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M14 · macho del río Black (Michigan): ~435 años ---------- */
function sceneM14(t){
  const T=t;let s='';
  const big=EZ.io(sg(t,76.7,77.3));
  s+=G(270,lerp(470,380,big),lerp(1,.78,big),0,NX.map({center:[-84.6,44.6],zoom:12,zoomAt:.05,over:lakesOver(.0,t),pins:[[-84.35,45.4,'río Black · Michigan']],w:480,h:420},t-74.4));
  if(t>77.4){s+=G(270,700,1,0,NX.counter({value:435,suffix:'años',sz:84,dur:1.2},t-77.55));}
  if(t>78.9)s+=sparkA(130,640,t-78.9,12,K.pink,.8)+sparkA(420,660,t-79.0,10,K.yellow,.8)+sparkA(400,720,t-79.15,8,K.orange,.8);
  return s;
}
/* ---------- M15 · 15 generaciones humanas ---------- */
function sceneM15(t){
  const T=t;let s='';
  s+=G(270,440,1,0,NX.iconArray({total:15,n:15,cols:5,sz:40},t-80.2));
  s+=actor('grano',{t0:80.3,path:[[80.3,270]],emo:[[80.3,0,0],[80.9,16,1]],s:.8,y:()=>GY,face:()=>1},t)+groundLine(1);
  return s;
}
/* ---------- M16 · ojo: son estimaciones ---------- */
function sceneM16(t){
  const T=t;let s=groundLine(1);
  s+=G(300,420,1,0,pill('≈ 435 años',{sz:22,w:800}),ao(t,83.2,.3));
  s+=stampA(300,500,t-83.78,'ESTIMACIÓN',{r:-6,sz:26,c:K.orange});
  if(t>86.6)s+=G(260,590,1,0,NX.stamp({type:'desarrollo',text:'FALTA CONFIRMARLO',r:4,sz:18},t-86.6));
  s+=actor('garbanzo',{t0:83.0,path:[[83.0,96]],emo:[[83.0,0,0],[83.6,9,0],[86.3,2,0]],s:.95,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('lenteja',{t0:85.0,path:[[85.0,640],[85.6,468]],emo:[[85.0,1,0],[85.6,2,1]],s:.8,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>PROP.papel},t);
  return s;
}
/* ---------- L-hielo · tiburón de Groenlandia ---------- */
function sceneSH(t){
  const T=t;let s='';
  [[60,300,120],[250,300,90],[440,300,140]].forEach(([x,y,w],i)=>s+=P(`M${x-w/2} ${y} L${x-w/2+14} ${y-26-hs(i)*14} L${x+w/2-20} ${y-30} L${x+w/2} ${y}Z`,'fill:#f7fbff;'+OL(1.8)));
  s+=underwater(T,300,990,{weeds:false});
  s+=Rc(-40,300,620,700,'#0d1450',0,'opacity:.25');
  s+=sharkG({x:lerp(660,250,EZ.out(sg(t,88.5,90.4))),y:560,s:1.15,T,amp:3});
  s+=pillA(160,700,'tiburón de Groenlandia',sg(t,90.01,90.3),{sz:13,fill:'url(#gRP)'});
  s+=G(400,430,1,0,NX.stamp({type:'confirmado',text:'COMPROBADO',sz:18},t-90.6));
  return s;
}
/* ---------- L5 · récord de agua dulce ---------- */
function sceneL5(t){
  const T=t;let s=lakeSky(T,{hy:600,sx:270,sy:560,sr:96,seed:5});
  s+=waterBand(-40,580,600,980,T,{rows:6})+sunGlint(270,620,T,90);
  const jq=sg(t,92.2,93.4);
  if(jq>0&&jq<1){const x=lerp(80,250,jq),y=700-Math.sin(Math.PI*jq)*170;s+=sturgeon({x,y,s:.55,T,amp:3,r:lerp(-40,40,jq)});}
  if(t>93.3&&t<94.0){const q=sg(t,93.3,94.0);for(let i=0;i<8;i++){const a=-Math.PI*(.1+.8*hs(i+7));s+=Ci(256+Math.cos(a)*70*q,700+Math.sin(a)*60*q+q*q*50,6*(1-q),'#fff');}}
  const mq=EZ.out(sg(t,93.8,94.8));if(mq>0)s+=G(270,lerp(760,440,mq),1,0,medalS({txt:'Nº 1',sub:'agua dulce'},T));
  s+=confetti(270,440,t-94.5,30,3);
  s+=reeds(40,980,12,140,4,T)+reeds(500,980,10,130,9,T);
  return s;
}
/* ---------- M18 · un motivo para cuidarlo ---------- */
function sceneM18(t){
  const T=t;let s=groundLine(1);
  s+=sturgeon({x:300,y:520+Math.sin(T*1.6)*5,s:.95,T,amp:4});
  if(t>97.6)for(let i=0;i<5;i++){const q=((t-97.6)*.8+i/5)%1;s+=G(220+hs(i+3)*170,470-q*120,Math.sin(Math.PI*q)*1.2,0,P(heartPath(0,0,9),`fill:${K.pink}`));}
  s+=actor('pipa',{t0:96.7,path:[[96.7,90]],emo:[[96.7,0,0],[97.5,14,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- M19 · pesca sin control: casi desaparecen ---------- */
const GRID=[...Array(20)].map((_,i)=>({x:105+(i%4)*110,y:330+Math.floor(i/4)*80,keep:i===9||i===14}));
function sceneM19(t){
  const T=t;let s='';
  s+=G(450,250,1,0,NX.calendar({from:1900,to:1900,month:'AÑO'},t-99.4),dis(t,101.2,.3));
  GRID.forEach((g,i)=>{const a=ap(t,99.4+i*.03,.25),gone=g.keep?0:EZ.in(sg(t,100.6+hs(i)*.9,101.1+hs(i)*.9));
    if(a<=0||gone>=1)return;s+=G(g.x+gone*30,g.y-gone*40,1,0,sturgeon({s:.24*a,T,amp:3,ph:i}),1-gone);});
  s+=pillA(270,740,'pesca sin control',sg(t,100.47,100.75),{sz:13,fill:K.red});
  s+=groundLine(1,770);
  return s;
}
/* ---------- M20 · 20 años para reproducirse: recuperación lenta ---------- */
function sceneM20(t){
  const T=t;let s=groundLine(1);
  s+=G(130,380,1,0,NX.calendar({from:1,to:20,month:'AÑOS',dur:1.2},t-102.9));
  const eq=ap(t,105.05,.35);
  if(eq>0){s+=sturgeon({x:370,y:400,s:.6,T,amp:3});for(let i=0;i<14;i++){const q=ap(t,105.1+i*.03,.25);s+=Ci(330+(i%7)*14+(Math.floor(i/7)%2)*7,470+Math.floor(i/7)*13,5.5*q,'#f2c14e',OL(1,'#a36a1c'));}
    s+=pillA(370,520,'huevos',sg(t,105.3,105.55),{sz:12});}
  const pq=ao(t,106.1,.3);
  if(pq>0){const fill=lerp(.05,.22,sg(t,106.2,108.4));s+=G(270,620,1,0,Rc(-200,-14,400,28,'#fff',14,OL(2.2))+Rc(-196,-10,392*fill,20,'url(#gGR)',10),pq);
    s+=G(80+400*fill,606,.6,0,snailS(T),pq);s+=pillA(270,668,'recuperación',sg(t,106.3,106.55),{sz:12});}
  s+=actor('garbanzo',{t0:106.6,path:[[106.6,470]],emo:[[106.6,13,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M21 · ¿qué animal vive más? ---------- */
function sceneM21(t){
  const T=t;let s=qDeco(t,ao(t,108.5,.5),7,6);
  const opts=[['A','La tortuga gigante'],['B','Tiburón de Groenlandia'],['C','La medusa inmortal'],['D','¿Otro? Dímelo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,108.9+i*.12,.32),sel=i===1?EZ.out(sg(t,110.3,110.5)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,108.9+i*.12,109.25+i*.12)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  if(t>110.1&&t<110.7){const q=sg(t,110.1,110.3);s+=G(lerp(470,400,EZ.out(q)),lerp(560,390,EZ.out(q)),1,0,P('M0 0 L0 22 L6 16 L11 26 L15 24 L10 14 L18 14Z',`fill:#fff;${OL(1.8)}`));}
  const cq=ap(t,110.6,.3);
  if(cq>0){const typed='¡Ese tiburón!'.slice(0,Math.floor(13*sg(t,110.8,111.4)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:108.5,path:[[108.5,86]],emo:[[108.5,0,0],[109.1,9,0],[110.5,3,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:108.7,path:[[108.7,458]],emo:[[108.7,0,0],[109.3,9,1]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- FIN ---------- */
function sceneEND(t){
  const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,112.9,113.6)));
  s+=G(0,0,1,0,Ts(270,352,'El pez que podría vivir',30),ao(t,113.1,.3))+G(0,0,1,0,Ts(270,398,'más de 400 años',42,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,113.2,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Journal of Fish Biology · Smithsonian · Bridge Michigan · WMUK',10,600)+Tn(270,474,'14/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,113.3,.3));
  s+=sturgeon({x:lerp(640,-200,sg(t,112.8,114.4)),y:560,s:.5,T,amp:5,flip:true});
  s+=groundLine(1);
  const par=[['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]];
  par.forEach(([k,sc],i)=>{const x=600-((t-112.75)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;
}

/* ---------- línea de tiempo ---------- */
SCN=[
  {id:'L1',a:0,draw:sceneL1},
  {id:'M1',a:4.3,draw:sceneM1,in:{type:'whipU',dur:.36}},
  {id:'L2',a:6.82,draw:sceneL2,in:{type:'iris',dur:.42,fx:270,fy:480,r0:8}},
  {id:'M2',a:9.36,draw:sceneM2,in:{type:'whipL',dur:.34}},
  {id:'M3',a:11.98,draw:sceneM3,in:{type:'whipU',dur:.34}},
  {id:'L3',a:16.22,draw:sceneL3,in:{type:'whipD',dur:.36}},
  {id:'M4',a:20.12,draw:sceneM4,in:{type:'whipL',dur:.34}},
  {id:'M5',a:26.66,draw:sceneM5,in:{type:'whipU',dur:.34}},
  {id:'M6',a:30.88,draw:sceneM6,in:{type:'iris',dur:.4,fx:110,fy:540,r0:10}},
  {id:'M7',a:33.68,draw:sceneM7,in:{type:'whipL',dur:.34}},
  {id:'M8',a:38.54,draw:sceneM8,in:{type:'zoom',dur:.5,fx:165,fy:510,z:9}},
  {id:'M9',a:44.94,draw:sceneM9,in:{type:'whipD',dur:.34}},
  {id:'L4',a:48.18,draw:sceneL4,in:{type:'whipU',dur:.36}},
  {id:'M10',a:51.3,draw:sceneM10,in:{type:'zoom',dur:.5,fx:330,fy:720,z:10}},
  {id:'M11',a:57.62,draw:sceneM11,in:{type:'whipL',dur:.34}},
  {id:'M12',a:63.4,draw:sceneM12,in:{type:'whipU',dur:.34}},
  {id:'M13',a:69.9,draw:sceneM13,in:{type:'whipL',dur:.34}},
  {id:'M14',a:74.4,draw:sceneM14,in:{type:'whipU',dur:.34}},
  {id:'M15',a:80.0,draw:sceneM15,in:{type:'iris',dur:.42,fx:270,fy:700,r0:20}},
  {id:'M16',a:82.94,draw:sceneM16,in:{type:'whipL',dur:.34}},
  {id:'SH',a:88.4,draw:sceneSH,in:{type:'whipD',dur:.36}},
  {id:'L5',a:91.58,draw:sceneL5,in:{type:'whipU',dur:.36}},
  {id:'M18',a:96.56,draw:sceneM18,in:{type:'iris',dur:.42,fx:270,fy:440,r0:20}},
  {id:'M19',a:99.2,draw:sceneM19,in:{type:'whipL',dur:.34}},
  {id:'M20',a:102.7,draw:sceneM20,in:{type:'whipU',dur:.34}},
  {id:'M21',a:108.38,draw:sceneM21,in:{type:'whipL',dur:.32}},
  {id:'END',a:112.75,draw:sceneEND,in:{type:'swap',dur:.4}}
];

/* ---------- titulares sincronizados con la voz ---------- */
HL=[
 {t0:.05,t1:1.65,lines:[{txt:'hay un pez',sz:30,t:[.05,.34,.45]},{txt:'*nadando* ahora',sz:44,t:[.64,1.07]}]},
 {t0:1.73,t1:3.12,lines:[{txt:'en un lago de',sz:30,t:[1.73,1.84,1.94,2.19]},{txt:'*Estados Unidos*',sz:46,t:[2.30,2.77]}]},
 {t0:3.19,t1:4.62,lines:[{txt:'que podría haber',sz:30,t:[3.19,3.30,3.70]},{txt:'*nacido* antes',sz:46,t:[3.92,4.38]}]},
 {t0:4.69,t1:6.75,lines:[{txt:'de que muriera',sz:30,t:[4.69,4.78,4.89]},{txt:'*Cervantes*',sz:56,t:[5.25],spark:true}]},
 {t0:6.88,t1:8.2,lines:[{txt:'es el',sz:30,t:[6.88,7.11]},{txt:'*esturión* de lago',sz:46,t:[7.21,7.69,7.78]}]},
 {t0:8.26,t1:9.2,lines:[{txt:'el pez más',sz:30,t:[8.26,8.44,8.66]},{txt:'*grande*',sz:58,t:[8.86]}]},
 {t0:9.3,t1:11.9,lines:[{txt:'de los',sz:30,t:[9.30,9.30]},{txt:'*Grandes Lagos*',sz:48,t:[9.46,9.88]},{txt:'de Norteamérica',sz:30,t:[10.22,10.31],gap:1.25}]},
 {t0:12.09,t1:13.85,lines:[{txt:'puede pasar del',sz:30,t:[12.09,12.41,12.78]},{txt:'*metro ochenta*',sz:48,t:[12.94,13.25]}]},
 {t0:14.6,t1:16.15,lines:[{txt:'cubierto de',sz:30,t:[14.60,15.05]},{txt:'*placas de hueso*',sz:46,t:[15.16,15.53,15.62]}]},
 {t0:16.38,t1:16.98,lines:[{txt:'su *familia*',sz:48,t:[16.38,16.54]}]},
 {t0:17.01,t1:20.0,lines:[{txt:'ya nadaba en la época de los',sz:28,t:[17.01,17.16,17.57,17.69,17.85,18.19,18.27]},{txt:'*dinosaurios*',sz:54,t:[18.44],spark:true}]},
 {t0:20.23,t1:21.5,lines:[{txt:'hasta *ahora*',sz:44,t:[20.23,20.61]},{txt:'creíamos',sz:30,t:[20.89]}]},
 {t0:21.57,t1:22.95,lines:[{txt:'vivía unos',sz:30,t:[21.57,21.93]},{txt:'*cien años*',sz:54,t:[22.21,22.46]}]},
 {t0:23.12,t1:26.6,lines:[{txt:'el más viejo',sz:30,t:[23.12,23.24,23.44]},{txt:'150',sz:62,num:true,roll:.42,t:[24.90]},{txt:'*años*',sz:40,t:[25.21],gap:.8}]},
 {t0:26.77,t1:28.7,lines:[{txt:'pero un *estudio*',sz:44,t:[26.77,27.06,27.18]},{txt:'publicado este año',sz:30,t:[27.60,28.20,28.48],gap:1.1}]},
 {t0:28.76,t1:30.8,lines:[{txt:'ha cambiado',sz:30,t:[28.76,28.82]},{txt:'las *cuentas*',sz:52,t:[29.29,29.49]}]},
 {t0:30.96,t1:33.6,lines:[{txt:'¿cómo se *calcula*',sz:40,t:[30.96,31.29,31.43]},{txt:'la edad de un *pez*?',sz:40,t:[31.88,32.02,32.27,32.40,32.54],gap:1.15}]},
 {t0:34.74,t1:36.55,lines:[{txt:'se cuentan los',sz:30,t:[34.74,34.74,35.12]},{txt:'*anillos*',sz:56,t:[35.30]}]},
 {t0:36.62,t1:38.45,lines:[{txt:'como los de',sz:30,t:[36.62,36.88,37.04]},{txt:'un *árbol*',sz:52,t:[37.15,37.31]}]},
 {t0:38.62,t1:41.5,lines:[{txt:'el *problema*',sz:48,t:[38.62,38.88]}]},
 {t0:41.59,t1:43.05,lines:[{txt:'los anillos',sz:30,t:[41.59,41.79]},{txt:'se *amontonan*',sz:48,t:[42.17,42.29]}]},
 {t0:43.11,t1:44.85,lines:[{txt:'y ya no se',sz:30,t:[42.88,42.94,43.11,43.26]},{txt:'*distinguen*',sz:52,t:[43.40]}]},
 {t0:45.0,t1:48.1,lines:[{txt:'los *científicos*',sz:46,t:[45.48,45.64]},{txt:'hicieron otra *cosa*',sz:34,t:[46.29,46.69,46.90],gap:1.15}]},
 {t0:48.23,t1:49.8,lines:[{txt:'durante',sz:30,t:[48.23]},{txt:'44',sz:64,num:true,roll:.42,t:[48.73]},{txt:'*años*',sz:40,t:[49.56],gap:.8}]},
 {t0:49.86,t1:51.3,lines:[{txt:'marcaron *miles*',sz:44,t:[49.86,50.33]}]},
 {t0:51.38,t1:52.05,lines:[{txt:'con un *chip*',sz:50,t:[51.38,51.55,51.67],spark:true}]},
 {t0:52.11,t1:53.0,lines:[{txt:'los *soltaron*',sz:48,t:[52.11,52.33]}]},
 {t0:53.06,t1:54.95,lines:[{txt:'y los volvieron a',sz:30,t:[53.06,53.24,53.42,53.89]},{txt:'*pescar*',sz:54,t:[53.96]}]},
 {t0:55.06,t1:57.5,lines:[{txt:'para medir',sz:30,t:[55.06,55.25]},{txt:'cuánto habían *crecido*',sz:38,t:[55.56,55.89,56.24]}]},
 {t0:57.7,t1:59.0,lines:[{txt:'y crecen',sz:30,t:[57.70,57.86]},{txt:'*poquísimo*',sz:54,t:[58.23]}]},
 {t0:59.0,t1:61.1,lines:[{txt:'un macho',sz:30,t:[59.00,59.11]},{txt:'solo *7 cm*',sz:54,t:[59.83,60.12],spark:true}]},
 {t0:61.15,t1:63.3,lines:[{txt:'en 34',sz:60,num:true,roll:.4,t:[61.15,61.29]},{txt:'*años*',sz:40,t:[62.12],gap:.8}]},
 {t0:63.45,t1:64.5,lines:[{txt:'con ese *ritmo*',sz:46,t:[63.45,63.73,63.92]}]},
 {t0:64.58,t1:66.8,lines:[{txt:'*calcularon* cuánto',sz:40,t:[64.58,65.17]},{txt:'tarda en llegar',sz:30,t:[65.50,66.46,66.56],gap:1.1}]},
 {t0:66.85,t1:69.0,lines:[{txt:'a los tamaños',sz:30,t:[66.85,66.89,67.06]},{txt:'más *grandes*',sz:52,t:[67.54,67.72]}]},
 {t0:69.95,t1:70.95,lines:[{txt:'el *resultado*',sz:52,t:[69.95,70.22]}]},
 {t0:70.99,t1:72.85,lines:[{txt:'las *hembras*',sz:48,t:[70.99,71.21]},{txt:'más grandes',sz:30,t:[71.54,71.72],gap:1.1}]},
 {t0:74.56,t1:76.65,lines:[{txt:'un *macho*',sz:46,t:[74.56,74.69]},{txt:'del río *Black*',sz:38,t:[74.99,75.16,75.42],gap:1.1}]},
 {t0:76.78,t1:79.9,lines:[{txt:'tendría unos',sz:32,t:[76.78,77.31]}]},
 {t0:80.09,t1:82.9,lines:[{txt:'15',sz:64,num:true,roll:.4,t:[80.49]},{txt:'*generaciones*',sz:46,t:[80.86],gap:.85},{txt:'humanas',sz:30,t:[81.56],gap:1.0}]},
 {t0:82.99,t1:83.55,lines:[{txt:'*ojo*',sz:66,t:[82.99],speed:true}]},
 {t0:83.58,t1:86.1,lines:[{txt:'son *estimaciones*',sz:44,t:[83.58,83.78]}]},
 {t0:86.28,t1:88.35,lines:[{txt:'quieren *confirmarlas*',sz:38,t:[86.28,86.60]},{txt:'con otro método',sz:30,t:[87.38,87.56,87.79],gap:1.1}]},
 {t0:88.47,t1:91.5,lines:[{txt:'como con el tiburón de',sz:30,t:[88.47,89.21,89.39,89.50,89.92]},{txt:'*Groenlandia*',sz:54,t:[90.01]}]},
 {t0:91.66,t1:93.4,lines:[{txt:'si se *confirman*',sz:46,t:[91.66,91.91,92.04]}]},
 {t0:93.53,t1:96.5,lines:[{txt:'de agua dulce',sz:30,t:[93.53,93.65,93.89]},{txt:'el más *longevo*',sz:52,t:[94.22,94.22,94.44],spark:true}]},
 {t0:97.03,t1:99.1,lines:[{txt:'un motivo para',sz:30,t:[97.03,97.11,97.51]},{txt:'*cuidarlo*',sz:56,t:[97.74],spark:true}]},
 {t0:99.24,t1:100.9,lines:[{txt:'hace más de',sz:30,t:[99.24,99.56,99.75]},{txt:'un *siglo*',sz:52,t:[99.85,100.0]}]},
 {t0:101.36,t1:102.65,lines:[{txt:'casi',sz:30,t:[101.47]},{txt:'*desaparecen*',sz:52,t:[101.75]}]},
 {t0:103.2,t1:104.42,lines:[{txt:'tardan unos',sz:30,t:[103.20,103.55]},{txt:'*20 años*',sz:56,t:[103.79,104.14]}]},
 {t0:104.47,t1:106.0,lines:[{txt:'en empezar a',sz:30,t:[104.47,104.59,105.0]},{txt:'*reproducirse*',sz:46,t:[105.05]}]},
 {t0:106.08,t1:108.3,lines:[{txt:'se recuperan',sz:32,t:[106.08,106.20]},{txt:'muy *despacio*',sz:50,t:[106.75,106.92]}]},
 {t0:108.46,t1:110.4,lines:[{txt:'¿qué animal crees',sz:32,t:[108.46,108.66,109.01]},{txt:'que vive *más*?',sz:46,t:[109.35,109.45,109.70],gap:1.1}]},
 {t0:111.35,t1:112.75,lines:[{txt:'te leo en',sz:30,t:[111.35,111.55,111.83]},{txt:'*comentarios*',sz:48,t:[111.94]}]}
];
