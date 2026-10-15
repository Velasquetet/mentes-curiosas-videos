/* ===== ESCENAS · los reptiles hacen mucho más ruido del que crees ===== */
DUR=123.2;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function leader(x1,y1,x2,y2,p,c=K.ink,bend=-24){if(p<=0)return '';const mx=(x1+x2)/2,my=(y1+y2)/2+bend;
  return DR(`M${f1(x1)} ${f1(y1)} Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}`,ST(c,1.8),EZ.out(p))+(p>.9?Ci(x2,y2,3.2,c):'');}
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=280+hs(i*5.3+seed)*380,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
function birds(t,y0=300){let s='';for(let i=0;i<3;i++){const x=((t*22+i*70+100)%700)-80;s+=birdV(x,y0+i*14+Math.sin(t*2+i)*4,1,t,i);}return s;}
/* empuje de cámara suave */
const push=(s,t,a,b,k0=1,k1=1.06,fx=270,fy=520)=>G(fx,fy,lerp(k0,k1,EZ.sine(sg(t,a,b))),0,G(-fx,-fy,1,0,s));
const shake=(s,t,t0,amp=6,d=.4)=>{if(t<t0||t>t0+d)return s;const q=1-(t-t0)/d;return G(Math.sin(t*90)*amp*q,Math.cos(t*77)*amp*q*.6,1,0,s);};
/* bocadillo de cómic con texto */
function bubbleS(txt,sz=18,o={}){const w=mw(txt,fSans(sz,800))+sz*1.4,h=sz*2;const tail=o.tail??-1;
  return P(`M${f1(-w/2+h/2)} ${f1(-h/2)} L${f1(w/2-h/2)} ${f1(-h/2)} A${h/2} ${h/2} 0 0 1 ${f1(w/2-h/2)} ${f1(h/2)} L${f1(tail*w*.15+8)} ${f1(h/2)} L${f1(tail*w*.32)} ${f1(h/2+14)} L${f1(tail*w*.15-8)} ${f1(h/2)} L${f1(-w/2+h/2)} ${f1(h/2)} A${h/2} ${h/2} 0 0 1 ${f1(-w/2+h/2)} ${f1(-h/2)}Z`,`fill:${o.fill||'#fff'};${OL(2.2)}`)+Tn(0,sz*.36,txt,sz,800,{fill:o.tc||K.ink});}
function bubbleA(x,y,lt,txt,o={}){if(lt<0)return '';const q=EZ.back(sg(lt,0,.28)),out=o.out?1-EZ.out(sg(lt,o.out,o.out+.2)):1;
  return G(x,y+Math.sin(lt*5)*2,q*(o.s||1),(o.r||0)+(1-q)*-10,bubbleS(txt,o.sz||18,o),cl(q*3)*out);}
/* icono de «mudo» (altavoz tachado) */
function muteS(){return P('M-14 -8 L-6 -8 L6 -18 L6 18 L-6 8 L-14 8Z','fill:#fff;'+OL(2.2))+P('M12 -8 L26 8 M26 -8 L12 8',ST(K.red,3.4));}
function muteA(x,y,lt){if(lt<0)return '';const q=ap(lt,0,.3);return G(x,y,q,0,Ci(0,0,24,K.ink)+G(-4,0,.8,0,muteS()));}
/* paisaje: charca con tronco */
function pondL(T,o={}){let s=G(o.sx||400,o.sy||400,1,0,sunS(o.sr||70));
  s+=G(130+T*3,300,1,0,cloudS(84))+G(440+T*2,262,.72,0,cloudS(60))+birds(T,330);
  s+=G(120,600,1,0,humpS(320,130))+G(430,600,1,0,humpS(300,110));
  s+=bushBand(-40,580,598,30,o.seed||3,{c:'#7fd17a'});
  s+=waterBand(-40,580,624,990,T,{rows:6});
  return s;}
function logS(w=240){return P(`M${-w/2} -16 L${w/2} -18 Q${w/2+12} 0 ${w/2} 18 L${-w/2} 16Z`,'fill:#9a5a34;'+OL(2.4))+El(w/2,0,10,17,'#d79b62',OL(2))+El(w/2,0,4,7,'none',ST('#9a5a34',1.6))+P(`M${-w/2+20} -6 L${w/2-40} -8 M${-w/2+60} 6 L${w/2-70} 6`,ST('#7a4424',2));}
function fgReeds(T){return reeds(30,990,10,170,4,T)+reeds(510,990,9,160,9,T);}
/* crías de cocodrilo asomando */
function babyCroc(T,p=1){const op=.3+.3*Math.sin(T*8);return G(0,0,p,0,P('M-14 0 Q-16 -22 0 -26 Q20 -28 40 -18 Q46 -12 40 -8 L-12 2Z','fill:#7cae4a;'+OL(2))+P('M0 -8 L40 -8',ST(K.ink,1.6))+G(4,-8,1,op*16,P('M0 0 L36 0 Q30 8 0 6Z','fill:#5f8f3a;'+OL(1.6)))+Ci(8,-20,4.6,'#ffd84a',OL(1.2))+El(8,-20,1.2,3.6,K.ink));}
function nestEggs(T,o={}){let s='';const n=o.n||5,cr=o.crack||0,bp=o.baby||0;
  for(let i=0;i<n;i++){const x=(i-(n-1)/2)*58,wob=o.wob?Math.sin(T*16+i)*o.wob:0;
    if(bp>0){s+=G(x,0,1,0,eggBottomS?eggBottomS():eggS(1));s+=G(x+4,-36-bp*14,.9,0,babyCroc(T+i,EZ.back(cl(bp))));s+=G(x+(i%2?14:-14)*bp,-74-bp*36,1,(i%2?40:-40)*bp,eggTopS?eggTopS():'',1-sg(bp,.6,1));}
    else s+=G(x,0,1,wob,eggS(cr));}
  return s;}
/* coche simple */
function carS(T){return Rc(-70,-34,140,34,K.red,10,OL(2.2))+P('M-40 -34 L-24 -60 L30 -60 L46 -34Z','fill:#bfe3ff;'+OL(2.2))+P('M3 -60 L3 -34',ST(K.ink,2))+
  Ci(-40,2,15,K.ink)+Ci(-40,2,6,'#cfcfcf')+Ci(42,2,15,K.ink)+Ci(42,2,6,'#cfcfcf')+Rc(62,-26,10,8,'#ffd84a',2);}
function aligS(o){return crocS(Object.assign({c:'#3f4a37',cd:'#2b3326'},o));}
/* árbol de parentesco */
function treeDiagram(t,t0,tc){let s='';const root=[270,640];const leaves=[[80,'turtle'],[175,'croc'],[270,'gecko'],[365,'fish'],[460,'yo']];
  leaves.forEach(([x,k],i)=>{const a=t0+.15*i,p=sg(t,a,a+.6);const mid=lerp(root[1],330,.45);
    s+=DR(`M${root[0]} ${root[1]} L${root[0]} ${f1(mid)} Q${f1(x)} ${f1(mid)} ${f1(x)} 360`,ST(K.ink,3),EZ.io(p));
    const q=ap(t,a+.5,.3);if(q>0){let ic='';
      if(k==='turtle')ic=G(-8,24,.5,0,turtleS({T:t}));else if(k==='croc')ic=G(-34,20,.42,0,crocS({T:t}));else if(k==='gecko')ic=G(-34,22,.6,0,geckoS({T:t}));
      else if(k==='fish')ic=G(10,4,.4,0,lobeFishS({T:t}));else ic=G(0,0,1,0,miniFace('grano',22));
      s+=G(x,320,q,0,Ci(0,0,38,'#fff',OL(2.4))+clipG(ic,'<circle cx="0" cy="0" r="36"/>')+Ci(0,0,38,'none',OL(2.4)));}});
  if(t>tc){leaves.forEach(([x],i)=>{const q=((t-tc)*.7+i*.13)%1,mid=lerp(root[1],330,.45);const px=q<.5?lerp(x,root[0],EZ.io(q*2)):root[0],py=q<.5?lerp(360,mid,q*2):lerp(mid,root[1],(q-.5)*2);s+=Ci(px,py,5,K.pink,`opacity:${f2(Math.sin(Math.PI*q))}`);});}
  const rq=ap(t,tc,.35);if(rq>0)s+=G(root[0],root[1],rq,0,Ci(0,0,16,'url(#gRP)',OL(2.4,'#fff'))+_pulse(t-tc,18,K.pink,2,1.2));
  return s;}
function paperS(top,l1,l2,foot){const W2=300,H2=280;let s=Rc(-W2/2+5,-H2/2+6,W2,H2,K.ink,12)+Rc(-W2/2,-H2/2,W2,H2,'#fbf8f2',12,OL(2.2));
  s+=Rc(-W2/2,-H2/2,W2,34,'#b01e23',12)+Rc(-W2/2,-H2/2+20,W2,14,'#b01e23')+Tn(0,-H2/2+22,top,11,700,{fill:'#fff',ls:.08});
  s+=Ts(0,-H2/2+72,l1,24)+Ts(0,-H2/2+100,l2,24,{it:true});
  for(let i=0;i<4;i++)s+=Rc(-118,-H2/2+122+i*16,i===3?150:236,6,'#d7d0c4',3);
  s+=G(60,92,.32,0,turtleS({T:0,open:.4}))+soundA(105,70,0,{n:2,r0:8,gap:6,w:2});
  s+=Tn(0,H2/2-14,foot,11,600,{fill:'#6b6b6b'});return s;}
function optionRow2(w,letter,txt,sel){return optionRow(w,letter,txt,sel);}

/* ---------- L1 · las tortugas no son mudas ---------- */
function sceneL1(t){
  const T=t;let s=pondL(T,{sx:410,sy:420,sr:76});
  s+=G(300,684,1,-2,logS(300));
  const op=t>1.2?.4+.5*Math.abs(Math.sin(T*9)):0;
  s+=G(lerp(330,300,EZ.out(sg(t,0,2))),672,1.25,0,turtleS({T,head:ao(t,.6,.5),open:op}));
  if(t>1.2)s+=soundA(440,610,T,{n:3,r0:14,gap:12,w:3.6});
  s+=bubbleA(420,520,t-1.25,'¡clic, clic!',{sz:17,tail:-1});
  s+=fgReeds(T);
  return push(s,t,0,2.1,1.12,1.0,320,640);
}
/* ---------- M1 · las han grabado ---------- */
function sceneM1(t){
  const T=t;let s=groundLine(1);
  s+=G(140,GY-124,1,0,NX.mic({},t-2.1));
  s+=G(lerp(400,380,sg(t,2.2,4.7)),420,1,0,NX.osc({amp:lerp(.15,1,ao(t,3.9,.3)),w:240,h:130},t-2.3));
  s+=G(390,GY,.62,0,turtleS({T,open:t>3.9?.3+.4*Math.abs(Math.sin(T*8)):0}));
  if(t>3.9)s+=soundA(460,GY-40,T,{n:3});
  s+=pillA(380,540,'● grabado',sg(t,3.94,4.2),{sz:14,w:800,fill:K.red});
  return s;
}
/* ---------- M2 · pensábamos que eran silenciosos ---------- */
function sceneM2(t){
  const T=t;let s=groundLine(1);
  const xs=[[80,'t'],[210,'c'],[345,'g'],[462,'l']];
  xs.forEach(([x,k],i)=>{const a=6.6+i*.12,q=ap(t,a,.35);if(q<=0)return;let a2='';
    if(k==='t')a2=G(0,0,.62,0,turtleS({T}));else if(k==='c')a2=G(0,-8,.5,0,crocS({T}));else if(k==='g')a2=G(10,0,.72,0,geckoS({T}));else a2=G(10,0,.85,0,lizardS({T}));
    s+=G(x,GY,q,0,a2);s+=muteA(x,GY-110,t-(7.9+i*.1));});
  const lq=ao(t,4.8,.4)*dis(t,6.5,.3);
  if(lq>0)s+=G(0,0,1,0,actor('lenteja',{t0:4.8,path:[[4.8,270]],emo:[[4.8,0,0],[5.4,10,0]],s:.8,y:()=>GY,face:()=>1},t),lq);
  return push(s,t,4.8,9.1,1,1.06,270,600);
}
/* ---------- M3 · como mucho, un bufido ---------- */
function sceneM3(t){
  const T=t;let s=groundLine(1,800);
  s+=G(lerp(170,150,sg(t,9.1,10.9)),760,2.3,0,turtleS({T,open:t>10.0?.25:0}));
  if(t>10.05){for(let i=0;i<4;i++){const q=sg(t,10.05+i*.08,10.75+i*.08);if(q>0&&q<1)s+=G(lerp(420,520,q),lerp(640,610-i*14,q),1,0,Ts(0,0,'f',30+i*4,{it:true,fill:'#fff',stroke:'#fff'}),Math.sin(Math.PI*q));}
    const cq=sg(t,10.05,10.9);s+=G(lerp(400,470,cq),640,lerp(.3,1.2,cq),0,cloudS(60),Math.sin(Math.PI*cq)*.8);}
  s+=pillA(160,400,'¿solo esto?',sg(t,9.43,9.7),{sz:14});
  return s;
}
/* ---------- M4 · ¡error! ---------- */
function sceneM4(t){
  const T=t;let s=raysBg(270,500,t*20,20,'#d3d3d3',ao(t,10.9,.3))+groundLine(1);
  s+=G(270,450,1.8*ap(t,10.9,.3),0,Ci(0,0,24,K.ink)+G(-4,0,.8,0,muteS()));
  s+=G(270,450,1,0,DR('M-80 -80 L80 80 M80 -80 L-80 80',ST(K.red,10),sg(t,10.95,11.3)));
  s+=actor('garbanzo',{t0:10.95,path:[[10.95,430]],emo:[[10.95,0,0],[11.2,7,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return shake(s,t,10.95,7,.4);
}
/* ---------- M5 · Universidad de Zúrich ---------- */
function sceneM5(t){
  const T=t;let s='';
  s+=G(270,500,1,0,NX.map({focus:'Suiza',pins:[[8.54,47.37,'Zúrich']],w:470,h:430,zoomAt:.1},t-11.6));
  return s;
}
/* ---------- M6 · un biólogo ---------- */
function sceneM6(t){
  const T=t;let s=groundLine(1);
  s+=actor('lenteja',{t0:14.0,path:[[14.0,190]],emo:[[14.0,0,0],[14.6,16,0]],s:.95,y:()=>GY,face:()=>1,look:()=>1,prop:tt=>PROP.lupa},t);
  s+=G(390,GY,.7,0,NX.turtle({open:.3},t-14.3));
  s+=pillA(340,420,'biólogo evolutivo',sg(t,14.54,14.85),{sz:15,w:700,fill:'url(#gRP)'});
  s+=pillA(340,470,'Universidad de Zúrich',sg(t,14.8,15.1),{sz:12});
  return push(s,t,14,15.7,1,1.05,270,600);
}
/* ---------- M7 · sus tortugas, en casa ---------- */
function tankS(T,k=1){let s=Rc(-150,-110,300,170,'rgba(160,215,255,.55)',8,OL(2.6))+Rc(-150,20,300,40,'#d9b26f',0)+Rc(-150,-110,300,170,'none',8,OL(2.6));
  s+=G(-40,30,.6,0,turtleS({T,walk:.6}))+G(70,30,.5,0,turtleS({T:T+1,open:.2}));
  for(let i=0;i<4;i++){const q=((T*.6)+i/4)%1;s+=Ci(100+Math.sin(i*2+T)*8,10-q*110,3+i%2,'#fff',`opacity:${f2(1-q)}`);}
  s+=P('M-110 20 q6 -40 0 -70 M-96 20 q-6 -30 2 -56',ST('#2b7a3e',4));return s;}
function sceneM7(t){
  const T=t;let s=groundLine(1);
  s+=G(270,lerp(560,540,sg(t,15.6,18.6)),ap(t,15.65,.35),0,tankS(T));
  s+=G(300,420,1,0,P('M0 -90 L0 -20',ST(K.ink,2))+G(0,-20,.45,0,micS({rec:Math.floor(t*2)%2})),ao(t,16.1,.3));
  const hq=sg(t,17.85,18.4);if(hq>0)s+=DR('M60 650 L60 400 L270 250 L480 400 L480 650',ST(K.ink,5),EZ.io(hq))+G(270,320,ap(t,18.1,.3),0,Rc(-20,-20,40,40,'#ffd84a',4,OL(2.2))+P('M0 -20 L0 20 M-20 0 L20 0',ST(K.ink,2)));
  s+=actor('grano',{t0:16.1,path:[[16.1,560],[16.6,470]],emo:[[16.1,1,0],[16.6,2,0]],s:.6,pop:false,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M8 · Homer ---------- */
function sceneM8(t){
  const T=t;let s=groundLine(1);
  const op=t>21.1?.3+.6*Math.abs(Math.sin(T*10)):0;
  s+=G(lerp(230,210,sg(t,18.6,22.3)),GY,1.75,0,turtleS({T,open:op}));
  const tq=ap(t,19.56,.35);if(tq>0)s+=G(250,560,tq,Math.sin(T*3)*8,P('M0 -40 L0 0',ST(K.ink,2))+G(0,16,1,0,pill('HOMER',{sz:16,w:800,fill:'url(#gRP)'})));
  if(t>21.1)s+=soundA(430,560,T,{n:3,r0:16,gap:14});
  s+=bubbleA(400,420,t-21.2,'grrr',{sz:18,tail:-1,r:-6});
  s+=bubbleA(150,380,t-21.5,'¡clic!',{sz:16,tail:1,r:6});
  s+=actor('pipa',{t0:20.5,path:[[20.5,620],[21.0,470]],emo:[[20.5,1,0],[21.1,7,0]],s:.62,pop:false,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M9 · 2022: publicaron ---------- */
function sceneM9(t){
  const T=t;let s=groundLine(1);
  s+=G(lerp(270,140,EZ.io(sg(t,23.7,24.2))),lerp(420,350,EZ.io(sg(t,23.7,24.2))),lerp(1.3,.8,EZ.io(sg(t,23.7,24.2))),0,NX.calendar({from:2019,to:2022,month:'AÑO',dur:.7},t-22.25));
  const dIn=EZ.out(sg(t,23.9,24.35));
  if(dIn>0)s+=blurG(G(330,500+(1-dIn)*620,.9,(1-dIn)*8,paperS('NATURE COMMUNICATIONS · 2022','53 especies','«mudas» que suenan','Grabaciones de tortugas y otros animales')),0,Math.sin(Math.PI*dIn)*10);
  return s;
}
/* ---------- M10 · 53 especies ---------- */
function gridIcons(t,t0,o={}){let s='';const n=53,cols=8,dx=52,dy=50,x0=270-(cols-1)*dx/2,y0=330;
  for(let i=0;i<n;i++){const a=t0+i*.018,q=ap(t,a,.25);if(q<=0)continue;const x=x0+(i%cols)*dx,y=y0+Math.floor(i/cols)*dy;
    const tur=i<50,on=o.on||0,tq=o.turtle||0;
    let ic=Ci(0,0,19,on>0?mixc('#141212',tur?'#3f9b4f':'#8005f0',on):'#141212');
    if(tq>0&&tur)ic=Ci(0,0,21,'#eaf6dc',OL(1.6))+G(0,8,.19*EZ.back(cl(tq)),0,turtleS({T:t+i}));else ic+=G(-3,0,.55,0,on>0?P('M-10 -6 L-4 -6 L4 -13 L4 13 L-4 6 L-10 6Z','fill:#fff'):muteS());
    if(on>0&&tq<=0)ic+=soundA(6,0,t+i*.13,{n:2,r0:8,gap:4,w:2,c:'#fff'});
    if(tq>0&&!tur)ic=Ci(0,0,19,'#8005f0',`opacity:${f2(.5+.5*tq)}`)+Tn(0,5,'?',14,800,{fill:'#fff'});
    s+=G(x,y,q*(1+.12*bel(t,o.pulse||-9,(o.pulse||-9)+.4)),0,ic);}
  return s;}
function sceneM10(t){
  const T=t;let s='';
  s+=gridIcons(t,25.05,{on:ao(t,28.3,.35),pulse:28.4});
  s+=stampA(270,690,t-27.07,'«MUDAS»',{r:-6,sz:22,c:K.ink,out:1.2});
  return push(s,t,25,29.3,1,1.04,270,480);
}
/* ---------- M11 · 50 eran tortugas ---------- */
function sceneM11(t){
  const T=t;let s='';
  s+=gridIcons(t,-9,{on:1,turtle:ao(t,29.4,.4)});
  s+=pillA(270,720,'+ tuátara · cecilia · pez pulmonado',sg(t,30.2,30.5),{sz:13,w:700,fill:'url(#gPU)'});
  return push(s,t,29.3,31.2,1.04,1.0,270,480);
}
/* ---------- M12 · chasquidos, gruñidos, chirridos ---------- */
function sceneM12(t){
  const T=t;let s=groundLine(1);
  const talk=[31.2,32.05,32.75].some(a=>t>a&&t<a+.55);
  s+=G(250,GY,1.25,0,turtleS({T,open:talk?.4+.5*Math.abs(Math.sin(T*14)):0}));
  s+=bubbleA(150,420,t-31.2,'clic-clic',{sz:17,tail:1,r:-6});
  s+=bubbleA(400,380,t-32.05,'grrrr',{sz:19,tail:-1,r:5});
  s+=bubbleA(270,330,t-32.75,'¡chirp!',{sz:18,tail:0,r:-3});
  if(talk)s+=soundA(395,GY-40,T,{n:3});
  return push(s,t,31.1,33.7,1,1.06,270,600);
}
/* ---------- M13 · cortejar o pelearse ---------- */
function sceneM13(t){
  const T=t;let s=groundLine(1);
  const clash=EZ.io(sg(t,36.0,36.25))*(1-EZ.out(sg(t,36.35,36.8)));
  s+=G(150+clash*40,GY,.85,0,turtleS({T,open:t>35.3&&t<35.9?.4:0,walk:t>35.9&&t<36.3?1:0}));
  s+=G(390-clash*40,GY,-.85,0,turtleS({T:T+1,open:t>34.3&&t<34.9?.4:0,c:'#7a6a3a',cd:'#5a4e2a'}),1,.85);
  s+=pillA(130,420,'machos',sg(t,34.29,34.55),{sz:14});
  const hq=ap(t,35.36,.35)*dis(t,35.95,.2);if(hq>0)s+=G(270,520+Math.sin(T*4)*6,hq,0,P('M0 18 C-30 -4 -18 -30 0 -14 C18 -30 30 -4 0 18Z','fill:url(#gRP);'+OL(2)));
  const bq=sg(t,36.2,36.7);if(bq>0)s+=G(270,600,EZ.back(bq)*(1-sg(bq,.7,1))+.001,0,burstS(46,12,'#f6a81a','#f76e19',t*60)+Tn(0,8,'¡PUM!',18,800,{fill:'#fff'}));
  return shake(s,t,36.25,6,.35);
}
/* ---------- M14 · pero espera ---------- */
function sceneM14(t){
  const T=t;let s=qDeco(t,ao(t,37.1,.4),5,5)+groundLine(1);
  s+=actor('garbanzo',{t0:37.1,path:[[37.1,120]],emo:[[37.1,0,0],[37.45,16,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  const eq=ap(t,39.1,.35);if(eq>0)s+=G(370,GY,eq*1.6,Math.sin(T*16)*bel(t,39.4,40.3)*6,eggS(0));
  s+=pillA(370,520,'?',sg(t,38.44,38.7),{sz:20,w:800,fill:'url(#gRP)'});
  return s;
}
/* ---------- L2 · cocodrilos del Nilo: llaman desde el huevo ---------- */
function sceneL2(t){
  const T=t;let s=G(400,400,1,0,sunS(70))+G(120+t*3,300,1,0,cloudS(84));
  s+=G(120,580,1,0,humpS(300,110))+G(440,580,1,0,humpS(280,100))+bushBand(-40,580,578,26,6,{c:'#7fd17a'});
  s+=waterBand(-40,580,600,700,T,{rows:3});
  s+=P('M-40 680 Q120 650 270 660 Q420 650 580 690 L580 1000 L-40 1000Z','fill:#e2bd78');
  s+=P('M150 790 Q270 700 390 790Z','fill:#c99a55;'+OL(2));
  s+=G(270,790,.9,0,nestEggs(T,{n:4,wob:t>42?2:0}));
  if(t>42.0){for(let i=0;i<4;i++)s+=soundA(270+(i-1.5)*52+20,730,T+i*.3,{n:2,r0:8,gap:7,w:2.4,c:K.ink,o:.8});}
  s+=pillA(130,630,'río Nilo',sg(t,41.73,42.0),{sz:13,fill:'url(#gWA)'});
  s+=reeds(30,990,8,150,3,T)+reeds(510,990,8,140,8,T);
  return push(s,t,40.2,43.8,1,1.1,270,760);
}
/* ---------- X1 · dentro del huevo (rayos X) ---------- */
function sceneX1(t){
  const T=t;let s=groundLine(1);
  const k=lerp(3.0,3.25,sg(t,42.55,43.85));
  s+=G(270,700,k,Math.sin(T*10)*1.2,El(0,-40,30,40,'#fff8e6',OL(1.2))+clipG(G(-2,-30,.62,-25,babyCroc(T,1)),'<ellipse cx="0" cy="-40" rx="28" ry="38"/>')+El(0,-40,30,40,'rgba(255,248,230,.45)',OL(1.2)));
  for(let i=0;i<2;i++)s+=soundA(i?380:160,520,T+i*.4,{n:3,r0:14,gap:12,w:3.4,dir:i?1:-1});
  s+=pillA(270,420,'¡ya llaman!',sg(t,42.9,43.2),{sz:14,fill:'url(#gRP)'});
  return s;
}
/* ---------- M15 · sus hermanos las oyen: eclosión a la vez ---------- */
function sceneM15(t){
  const T=t;let s=groundLine(1);
  s+=P('M30 735 Q270 640 510 735Z','fill:#e2bd78;'+OL(2.2));
  const cr=sg(t,45.25,45.8),bb=EZ.out(sg(t,46.2,46.7));
  s+=G(270,712,1.25,0,nestEggs(T,{n:5,crack:cr,baby:bb,wob:t>44.2&&t<46.2?3:0}));
  if(t>44.19&&t<46.2){for(let i=0;i<4;i++)s+=soundA(270+(i-1.5)*72+30,630,T+i*.2,{n:2,r0:8,gap:8,w:2.4});}
  s+=stampA(270,420,t-46.79,'¡A LA VEZ!',{r:-6,sz:24,c:K.green});
  return s;
}
/* ---------- L3 · la madre escarba ---------- */
function sceneL3(t){
  const T=t;let s=G(110,400,1,0,sunS(60))+G(380+t*3,300,1,0,cloudS(84));
  s+=G(150,600,1,0,humpS(300,120))+G(440,600,1,0,humpS(300,110))+bushBand(-40,580,598,26,8,{c:'#7fd17a'});
  s+=Rc(-40,620,620,400,'#e2bd78');
  const dig=t>49.0&&t<50.6;
  s+=G(lerp(560,300,EZ.out(sg(t,47.4,48.4))),760+(dig?Math.sin(T*20)*3:0),1.3,dig?-6:0,crocS({T,open:t>48.2&&t<48.8?.3:0}));
  if(dig){for(let i=0;i<10;i++){const q=((T*2.2)+i/10)%1;s+=Ci(150-q*120+hs(i)*20,740-Math.sin(Math.PI*q)*90,5-q*3,'#c99a55');}}
  const bq=ao(t,50.1,.4);if(bq>0){for(let i=0;i<3;i++)s+=G(90+i*50,820,.8*bq,0,babyCroc(T+i,1));}
  s+=pillA(370,520,'mamá cocodrilo',sg(t,47.73,48.0),{sz:14,fill:'url(#gRP)'});
  return push(s,t,47.3,51.2,1,1.06,270,760);
}
/* ---------- M16 · ¿y los gecos? ---------- */
function sceneM16(t){
  const T=t;let s=qDeco(t,ao(t,51.1,.4),9,5)+groundLine(1);
  s+=G(320,GY,1.5*ap(t,51.55,.35),0,geckoS({T}));
  s+=actor('pipa',{t0:51.1,path:[[51.1,90]],emo:[[51.1,0,0],[51.5,9,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- L4 · el geco tokay grita su nombre (noche) ---------- */
function sceneL4(t){
  const T=t;let s=Rc(-60,-60,660,1080,'#3a3f6e')+G(400,380,1,0,sunS(54,{pale:true,ho:.35}));
  for(let i=0;i<14;i++)s+=Ci(30+hs(i*3)*480,260+hs(i*7)*260,1.4+hs(i)*1.4,'#fff',`opacity:${f2(.5+.5*Math.sin(T*2+i))}`);
  s+=G(120,640,1,0,humpS(320,140,{lit:'#5a3fa8',dark:'#3d2a7a'}))+G(430,640,1,0,humpS(300,120,{lit:'#5a3fa8',dark:'#3d2a7a'}));
  s+=Rc(-40,660,620,400,'#1f2a3a');
  s+=Rc(170,240,110,800,'#6b4a2e',0,OL(2.4))+P('M190 300 Q200 500 186 700 M250 280 Q240 520 256 760',ST('#553a24',3));
  const call=t>55.1&&t<55.9;
  s+=G(225,560,1.15,-90,geckoS({T,open:call?.9:(t>53.2&&t<53.6?.3:0)}));
  if(call)s+=soundA(240,370,T,{n:4,r0:20,gap:16,w:4,c:'#ffd84a',ang:60,dir:1});
  s+=bubbleA(380,400,t-55.15,'¡GECK-O!',{sz:26,tail:-1,r:-6,fill:'#ffd84a'});
  s+=pillA(380,620,'geco tokay',sg(t,52.92,53.2),{sz:14,fill:'url(#gRP)'});
  for(let i=0;i<3;i++)s+=G(50+i*200,1000,1.1,(i-1)*14+Math.sin(T+i)*3,leafS(170,28,'#2a2f57','#1c2040'));
  return shake(push(s,t,52.3,55.9,1,1.08,240,520),t,55.15,6,.45);
}
/* ---------- M17 · ruido como el del tráfico ---------- */
function sceneM17(t){
  const T=t;let s=groundLine(1);
  s+=G(140,560,1,0,NX.speaker({},t-57.0));
  const cq=sg(t,58.5,60.2);if(cq>0){s+=Rc(-40,GY+4,620,40,'#7a7a7a');for(let i=0;i<2;i++){const x=lerp(620,-140,cq)+i*230;s+=G(x,GY+2,.6,0,carS(T));}}
  s+=pillA(140,410,'≈ 65 dB',sg(t,58.3,58.6),{sz:15,w:800,fill:K.red});
  s+=G(300,GY,.8,0,geckoS({T}));
  s+=actor('lenteja',{t0:55.85,path:[[55.85,620],[56.4,470]],emo:[[55.85,1,0],[56.4,2,0]],s:.62,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>PROP.papel},t);
  return s;
}
/* ---------- M18 · ¿más fuerte? no ---------- */
function sceneM18(t){
  const T=t;let s=groundLine(1);
  for(let i=0;i<6;i++){const h=40+i*30,on=i<3,q=ap(t,59.55+i*.06,.25);if(q<=0)continue;
    const fake=i>=3?bel(t,59.9,60.9):0;s+=G(170+i*44,620,1,0,Rc(-14,-h*q,28,h*q,on?'url(#gGR)':mixc('#d6d6d6','#f34841',fake),5,OL(2)));}
  s+=pillA(280,320,'volumen',sg(t,59.99,60.3),{sz:14});
  s+=stampA(280,420,t-60.94,'NO',{r:-8,sz:44,c:K.red});
  s+=G(90,GY,.55,0,geckoS({T,open:.3+.3*Math.sin(T*6)}));
  return s;
}
/* ---------- M19 · alargó la «o» ---------- */
function sceneM19(t){
  const T=t;let s='';
  const ax=DR('M50 560 L490 560',ST(K.ink,2.6),sg(t,61.75,62.1));s+=ax+Tn(470,584,'tiempo →',11,700,{a:'end',fill:'#555'});
  const gq=ap(t,62.39,.3),oq=ap(t,62.6,.3),st=EZ.io(sg(t,63.7,64.6));
  if(gq>0)s+=G(70,520,1,0,Rc(0,-30*gq,110,60*gq,'url(#gPU)',10,OL(2))+Tn(55,8,'GECK',18,800,{fill:'#fff'}),cl(gq*2));
  const ow=lerp(140,192,st);if(oq>0)s+=G(196,520,1,0,Rc(0,-30*oq,ow,60*oq,'url(#gRP)',10,OL(2))+Tn(ow/2,8,'O',22,800,{fill:'#fff'}),cl(oq*2));
  if(st>0)s+=G(196,452,1,0,DR(`M140 0 L${f1(ow)} 0`,ST(K.ink,3),st)+P(`M${f1(ow-8)} -6 L${f1(ow)} 0 L${f1(ow-8)} 6`,ST(K.ink,3,`opacity:${f2(st)}`)));
  s+=pillA(330,660,'+37 % de duración',sg(t,64.51,64.8),{sz:15,w:800,fill:'url(#gRP)'});
  s+=pillA(260,400,'la «o»',sg(t,63.36,63.6),{sz:14});
  return push(groundLine(1)+G(270,540,1.2,0,G(-270,-540,1,0,s)),t,61.7,66.1,1,1.05,270,540);
}
/* ---------- L5 · los aligátores braman ---------- */
function sceneL5(t){
  const T=t;let s=G(420,390,1,0,sunS(66))+G(100+t*3,300,1,0,cloudS(84));
  s+=G(120,600,1,0,humpS(300,120,{lit:'#2b7a3e',dark:'#1f6b33'}))+G(430,600,1,0,humpS(280,110,{lit:'#3f9b4f',dark:'#2b7a3e'}));
  s+=bushBand(-40,580,598,30,5,{c:'#6fbf6a'});
  s+=waterBand(-40,580,622,990,T,{rows:6,fill:'#3d6b5a'});
  const bel1=t>67.6&&t<68.5;
  s+=G(lerp(560,280,EZ.out(sg(t,66.1,67.2))),690,1.2,bel1?-8:0,aligS({T,open:bel1?.35:0}));
  if(bel1){s+=soundA(430,600,T,{n:4,r0:20,gap:18,w:4.2});for(let i=0;i<8;i++){const q=((T*3)+i/8)%1;s+=Ci(200+i*24,690-Math.sin(Math.PI*q)*30,3,'#cfe8ff');}}
  s+=pillA(160,480,'aligátor americano',sg(t,66.42,66.7),{sz:14,w:700});
  s+=fgReeds(T);
  return shake(s,t,67.67,5,.6);
}
/* ---------- M20 · carné de identidad ---------- */
function sceneM20(t){
  const T=t;let s=groundLine(1);
  const q=EZ.out(sg(t,68.7,69.2));
  if(q>0)s+=blurG(G(270,470+(1-q)*600,1.25,(1-q)*10-3,idCardS(G(-75,46,.3,0,aligS({T})),'ALIGÁTOR','su voz dice su tamaño')),0,Math.sin(Math.PI*q)*10);
  s+=stampA(380,600,t-70.3,'VERIFICADO',{r:-8,sz:18,c:K.green});
  return s;
}
/* ---------- M21 · más grave = más grande ---------- */
function waveLine(x0,x1,y,T,freq,amp,c,p){let d='';for(let i=0;i<=60;i++){const x=lerp(x0,x1,i/60);d+=(i?' L':'M')+f1(x)+' '+f1(y+Math.sin(i/60*freq*6.28-T*6)*amp);}return DR(d,ST(c,3),p);}
function sceneM21(t){
  const T=t;let s=groundLine(1);
  s+=G(130,GY,.5*ap(t,71.2,.3),0,aligS({T}));s+=G(380,GY,.95*ap(t,71.4,.3),0,aligS({T:T+1,open:t>71.7&&t<72.4?.25:0}));
  s+=waveLine(40,230,560,T,6,14,K.blue,sg(t,71.3,71.8));
  s+=waveLine(270,500,500,T,2,24,K.pink,sg(t,71.71,72.2));
  s+=pillA(135,500,'más agudo',sg(t,71.5,71.8),{sz:13,fill:K.blue})+pillA(385,430,'más grave',sg(t,71.71,72.0),{sz:13,fill:'url(#gRP)'});
  s+=stampA(380,610,t-72.72,'MÁS GRANDE',{r:-6,sz:20,c:K.pink});
  return push(s,t,71.1,74.1,1,1.05,270,600);
}
/* ---------- M22 · evitar peleas ---------- */
function sceneM22(t){
  const T=t;let s=groundLine(1);
  const turn=t>75.4;
  s+=G(lerp(140,lerp(140,40,sg(t,75.8,77.2)),1),GY,(turn?-1:1)*.5,0,aligS({T,walk:turn?1:0}),1,.5);
  s+=G(380,GY,.95,0,aligS({T:T+1,open:t>74.2&&t<75.0?.3:0}));
  if(t>74.2&&t<75.1)s+=soundA(260,GY-60,T,{n:3,dir:-1,r0:14,gap:14,w:3.6,c:K.pink});
  s+=pillA(160,560,'mejor no…',sg(t,75.44,75.7),{sz:14});
  s+=stampA(300,440,t-76.6,'PELEA EVITADA',{r:-5,sz:20,c:K.green});
  return s;
}
/* ---------- M23 · Chile: la lagartija llorona ---------- */
function sceneM23(t){
  const T=t;let s='';
  const mk=EZ.io(sg(t,78.1,78.6));
  s+=G(lerp(270,170,mk),lerp(480,430,mk),lerp(1,.62,mk),0,NX.map({focus:'Chile',pins:[[-70.6,-33.4,'Chile central']],w:300,h:520,zoomAt:.05},t-77.3));
  const lq=ap(t,78.33,.35);if(lq>0){s+=G(390,640,1.3*lq,0,lizardS({T}));
    const tq=sg(t,78.91,79.7);if(tq>0)s+=G(452,630+tq*20,1,0,dropS?P('M0 -8 Q6 0 0 6 Q-6 0 0 -8Z','fill:#7fd3ff;'+OL(1.2)):'',1-tq*.5);}
  s+=pillA(390,560,'lagartija llorona',sg(t,78.91,79.2),{sz:14,fill:'url(#gRP)'});
  return s;
}
/* ---------- L6 · cuando un depredador la atrapa, chilla ---------- */
function sceneL6(t){
  const T=t;let s=G(420,400,1,0,sunS(64))+G(120+t*3,300,1,0,cloudS(80));
  s+=G(120,610,1,0,mesaS?mesaS(300,140):humpS(300,140))+G(440,610,1,0,humpS(300,110));
  s+=bushBand(-40,580,606,28,2,{c:'#b9d98a'});
  s+=Rc(-40,628,620,400,'#c9a46a');
  s+=P('M200 760 Q260 700 340 712 Q400 740 380 760Z','fill:#9b8f80;'+OL(2.2));
  const sh=sg(t,80.1,81.0);
  s+=El(lerp(-60,280,sh),760,lerp(40,90,sh),lerp(8,14,sh),'rgba(20,18,18,.28)');
  const call=t>81.45&&t<82.3;
  s+=G(270,716,1.3,0,lizardS({T,open:call?.9:0}));
  if(sh>0&&sh<1||t>81)s+=G(lerp(-80,300,sh),lerp(330,450,sh),1.1,0,P('M-60 0 Q-30 -26 0 -6 Q30 -26 60 0 Q30 -10 0 6 Q-30 -10 -60 0Z','fill:#3a2e2a;'+OL(1.6)),t>81.3?1-sg(t,81.3,81.6):1);
  if(call)s+=soundA(340,690,T,{n:4,r0:14,gap:14,w:3.6,c:K.red});
  s+=bubbleA(390,580,t-81.51,'¡IIIIH!',{sz:22,tail:-1,r:-5,fill:'#fff',tc:K.red});
  return shake(s,t,81.51,5,.4);
}
/* ---------- M24 · se quedan inmóviles ---------- */
function sceneM24(t){
  const T=t;let s=groundLine(1);
  const fz=ao(t,84.11,.3);
  [[150,1.3],[410,1.3]].forEach(([x,k],i)=>{s+=G(x,GY,k,0,satG(lizardS({T:T+i,freeze:fz,walk:fz>0?0:.0}),1-fz*.85,false));
    if(t>82.6&&t<84.1)s+=soundA(x-60,GY-50,T+i*.3,{n:2,r0:10,gap:8,dir:-1,w:2.6,c:K.red});
    const pq=ap(t,84.2+i*.08,.3);if(pq>0)s+=G(x,GY-90,pq,0,Ci(0,0,18,K.ink)+Rc(-7,-8,5,16,'#fff',1)+Rc(2,-8,5,16,'#fff',1));});
  s+=G(270,430,1,0,NX.stopwatch({txt:'más tiempo',p:.35},t-84.9));
  return s;
}
/* ---------- M25 · India: los gaviales ---------- */
function sceneM25(t){
  const T=t;let s='';
  s+=G(270,480,1,0,NX.map({focus:'India',pins:[[78.4,26.4,'río Chambal']],w:470,h:440,zoomAt:.05},t-85.85));
  return s;
}
/* ---------- M26 · el ghara (= olla) ---------- */
function sceneM26(t){
  const T=t;let s=G(0,0,1,0,Rc(-40,620,620,400,'url(#gWA)'))+groundLine(1,620);
  for(let i=0;i<4;i++){const x=((i*170-T*20)%700+700)%700-80;s+=P(`M${f1(x)} ${640+i*40} q20 -6 40 0 t40 0`,ST('#7d88f5',3));}
  s+=G(lerp(220,200,sg(t,87.4,92.1)),640,.95,0,gharialS({T,ghara:ao(t,88.34,.3)}));
  s+=leader(390,470,440,580,sg(t,88.4,88.7),K.ink,10);
  s+=pillA(370,450,'ghara',sg(t,90.08,90.35),{sz:16,w:800,fill:'url(#gRP)'});
  s+=pillA(130,520,'solo los machos',sg(t,87.08,87.35),{sz:13});
  const pq=ap(t,90.6,.35);if(pq>0)s+=G(140,400,pq*.9,Math.sin(T*2)*4,potS())+G(250,400,1,0,Tn(0,10,'=',40,800),ao(t,91.4,.3));
  return s;
}
/* ---------- M27 · bajo el agua: ¡pop! ---------- */
function sceneM27(t){
  const T=t;let s=Rc(-60,-60,660,1080,'url(#gUW)');
  for(let i=0;i<8;i++){const q=((T*.3)+i/8)%1;s+=Ci(40+hs(i*5)*460,960-q*700,3+hs(i)*5,'none',`stroke:#cfe0ff;stroke-width:2;opacity:${f2(.6*(1-q))}`);}
  for(let i=0;i<6;i++)s+=P(`M${60+i*90} 980 q-10 -60 6 -120 q10 -50 -4 -90`,ST('#1f6b33',8));
  s+=G(lerp(140,110,sg(t,92.1,94.1)),560,1.15,0,gharialS({T}));
  const pq=sg(t,93.45,93.95);
  if(t<93.45){for(let i=0;i<3;i++){const q=((T*1.2)+i/3)%1;s+=Ci(440,520-q*80,4+q*6,'none',`stroke:#fff;stroke-width:2;opacity:${f2(1-q)}`);}}
  if(pq>0&&pq<1)s+=G(430,500,EZ.out(pq)*2.6,0,Ci(0,0,44,'none',`stroke:#fff;stroke-width:${f1(10*(1-pq))};opacity:${f2(1-pq)}`)+burstS(34,14,'#ffd84a','#ffffff',T*40),1-sg(pq,.5,1));
  s+=soundA(430,500,T,{n:3,r0:20,gap:16,w:3.6,c:'#fff',o:ao(t,93.5,.1)*dis(t,94.0,.2)});
  return shake(s,t,93.5,6,.35);
}
/* ---------- M28 · unas centésimas de segundo ---------- */
function sceneM28(t){
  const T=t;let s=groundLine(1);
  s+=G(300,lerp(460,430,ao(t,95.6,.4)),lerp(1.3,1.1,ao(t,95.6,.4)),0,NX.stopwatch({txt:'≈ 0,03 s',p:.02},t-94.1));
  const oq=ap(t,95.85,.35);if(oq>0)s+=G(330,640,.72*oq,0,oscS({T,burst:1,label:'¡POP!',amp:1.4}));
  s+=actor('grano',{t0:94.1,path:[[94.1,90]],emo:[[94.1,0,0],[94.6,7,0]],s:.72,y:()=>GY,face:()=>1,look:()=>1},t);
  return push(s,t,94.1,97.5,1,1.06,300,470);
}
/* ---------- M29 · el gran giro ---------- */
function sceneM29(t){
  const T=t;let s=raysBg(270,520,t*30,20,'#d3d3d3',ao(t,97.45,.3))+groundLine(1);
  s+=actor('grano',{t0:97.5,path:[[97.5,270]],emo:[[97.5,0,0],[97.9,11,0]],s:.85,y:()=>GY,face:()=>1,mod:(p,tt)=>{p.rot+=Math.sin(tt*6)*4;}},t);
  s+=sparkA(150,400,t-98.72,14,K.pink,.8)+sparkA(400,420,t-98.85,11,K.yellow,.8)+sparkA(380,300,t-99.0,9,K.orange,.8);
  return s;
}
/* ---------- M30 · un antepasado común ---------- */
function sceneM30(t){
  const T=t;let s='';
  s+=treeDiagram(t,99.6,104.6);
  const cq=sg(t,105.4,106.4);if(cq>0)s+=G(270,700,ap(t,105.4,.3),0,pill('antepasado común',{sz:15,w:800,fill:'url(#gRP)'}));
  return push(s,t,99.5,107.9,1,1.04,270,520);
}
/* ---------- M31 · un pez ---------- */
function sceneM31(t){
  const T=t;let s=Rc(-60,-60,660,1080,'url(#gUW)',0,`opacity:${f2(ao(t,107.9,.3))}`);
  s+=G(lerp(250,290,sg(t,107.9,108.9)),500+Math.sin(T*2)*8,1.6*ap(t,107.95,.35),-4,lobeFishS({T}));
  s+=soundA(460,470,T,{n:3,c:'#fff',w:3.6});
  s+=pillA(270,640,'pez de aletas lobuladas · Devónico',sg(t,108.2,108.5),{sz:12,w:700});
  return s;
}
/* ---------- M32 · no todos están de acuerdo ---------- */
function sceneM32(t){
  const T=t;let s=groundLine(1);
  s+=actor('lenteja',{t0:108.85,path:[[108.85,110]],emo:[[108.85,0,0],[109.3,2,0]],s:.8,y:()=>GY,face:()=>1,look:()=>1,prop:tt=>PROP.papel},t);
  s+=actor('garbanzo',{t0:109.0,path:[[109.0,430]],emo:[[109.0,0,0],[109.5,9,0]],s:.8,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=bubbleA(150,430,t-109.3,'407 M años',{sz:15,tail:-1});
  s+=bubbleA(400,420,t-109.9,'¿o varios orígenes?',{sz:14,tail:1});
  s+=G(270,560,1,0,NX.stamp({type:'desarrollo',text:'EN DEBATE',sz:20,r:-5},t-110.56));
  return s;
}
/* ---------- L7 · la próxima vez que veas una tortuga ---------- */
function sceneL7(t){
  const T=t;let s=pondL(T,{sx:270,sy:460,sr:96,seed:7});
  s+=G(330,684,1,2,logS(320));
  s+=G(370,672,1.05,0,turtleS({T}));
  s+=G(lerp(-80,175,EZ.out(sg(t,111.8,112.8))),0,1,0,actor('pipa',{t0:111.8,path:[[111.8,0]],emo:[[111.8,1,0],[112.8,1,1]],s:.7,pop:false,y:()=>684,face:()=>1,look:()=>1},t));
  s+=fgReeds(T);
  return push(s,t,111.7,115,1,1.1,320,660);
}
/* ---------- M33 · está esperando a que te calles ---------- */
function sceneM33(t){
  const T=t;let s=groundLine(1);
  s+=G(lerp(250,230,sg(t,114.95,117.5)),GY,1.6,0,turtleS({T,open:t>116.6?.4:0}));
  const dq=ap(t,115.3,.3)*dis(t,116.55,.2);
  if(dq>0)s+=G(390,470,dq,0,bubbleS('· · ·',22,{tail:-1}));
  if(t>116.6)s+=soundA(430,580,T,{n:3});
  s+=bubbleA(390,470,t-116.66,'¡por fin!',{sz:18,tail:-1});
  s+=actor('pipa',{t0:115.0,path:[[115.0,640],[115.5,480]],emo:[[115.0,1,0],[115.5,10,0],[116.6,7,0]],s:.55,pop:false,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M34 · pregunta ---------- */
function sceneM34(t){
  const T=t;let s=qDeco(t,ao(t,117.45,.5),7,6);
  const opts=[['A','La jirafa'],['B','El caracol'],['C','La serpiente'],['D','¿Otro? Dímelo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,117.7+i*.12,.32),sel=i===0?EZ.out(sg(t,119.0,119.2)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,117.7+i*.12,118.05+i*.12)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  if(t>118.8&&t<119.4){const q=sg(t,118.8,119.0);s+=G(lerp(470,400,EZ.out(q)),lerp(560,345,EZ.out(q)),1,0,P('M0 0 L0 22 L6 16 L11 26 L15 24 L10 14 L18 14Z',`fill:#fff;${OL(1.8)}`));}
  const cq=ap(t,119.3,.3);
  if(cq>0){const typed='¡La jirafa!'.slice(0,Math.floor(11*sg(t,119.5,120.6)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:117.45,path:[[117.45,86]],emo:[[117.45,0,0],[118.0,9,0],[119.2,3,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:117.6,path:[[117.6,458]],emo:[[117.6,0,0],[118.2,9,1]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- FIN ---------- */
function sceneEND(t){
  const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,121.4,122.1)));
  s+=G(0,0,1,0,Ts(270,352,'Los reptiles',30),ao(t,121.5,.3))+G(0,0,1,0,Ts(270,398,'no son mudos',44,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,121.6,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Nature Communications (2022) · Current Biology (2008)',10,600)+Tn(270,474,'Proc. R. Soc. B (2017) · Scientific Reports (2017)',10,600)+Tn(270,490,'The Anatomical Record (2021) · Smithsonian Magazine',10,600)+Tn(270,506,'16/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,121.7,.3));
  s+=G(lerp(640,330,sg(t,121.3,123.2)),GY,.55,0,turtleS({T,walk:1}));
  s+=groundLine(1);
  const par=[['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]];
  par.forEach(([k,sc],i)=>{const x=600-((t-121.3)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;
}

/* ---------- línea de tiempo ---------- */
SCN=[
  {id:'L1',a:0,draw:sceneL1},
  {id:'M1',a:1.95,draw:sceneM1,in:{type:'whipL',dur:.34}},
  {id:'M2',a:4.7,draw:sceneM2,in:{type:'whipU',dur:.34}},
  {id:'M3',a:9.0,draw:sceneM3,in:{type:'zoom',dur:.45,fx:270,fy:640,z:8}},
  {id:'M4',a:10.85,draw:sceneM4,in:{type:'iris',dur:.32,fx:270,fy:450,r0:10}},
  {id:'M5',a:11.65,draw:sceneM5,in:{type:'whipL',dur:.34}},
  {id:'M6',a:14.0,draw:sceneM6,in:{type:'zoom',dur:.45,fx:280,fy:480,z:9}},
  {id:'M7',a:15.6,draw:sceneM7,in:{type:'whipU',dur:.34}},
  {id:'M8',a:18.55,draw:sceneM8,in:{type:'zoom',dur:.45,fx:230,fy:560,z:8}},
  {id:'M9',a:22.25,draw:sceneM9,in:{type:'whipL',dur:.34}},
  {id:'M10',a:24.95,draw:sceneM10,in:{type:'whipU',dur:.34}},
  {id:'M11',a:29.25,draw:sceneM11,in:{type:'swap',dur:.3}},
  {id:'M12',a:31.1,draw:sceneM12,in:{type:'whipL',dur:.34}},
  {id:'M13',a:33.65,draw:sceneM13,in:{type:'whipU',dur:.34}},
  {id:'M14',a:37.05,draw:sceneM14,in:{type:'iris',dur:.4,fx:120,fy:600,r0:10}},
  {id:'L2',a:40.15,draw:sceneL2,in:{type:'zoom',dur:.45,fx:370,fy:700,z:9}},
  {id:'X1',a:42.55,draw:sceneX1,in:{type:'zoom',dur:.4,fx:270,fy:760,z:8}},
  {id:'M15',a:43.8,draw:sceneM15,in:{type:'whipL',dur:.34}},
  {id:'L3',a:47.3,draw:sceneL3,in:{type:'whipL',dur:.36}},
  {id:'M16',a:51.1,draw:sceneM16,in:{type:'whipU',dur:.34}},
  {id:'L4',a:52.3,draw:sceneL4,in:{type:'iris',dur:.42,fx:320,fy:680,r0:20}},
  {id:'M17',a:55.85,draw:sceneM17,in:{type:'whipL',dur:.34}},
  {id:'M18',a:59.45,draw:sceneM18,in:{type:'whipU',dur:.34}},
  {id:'M19',a:61.7,draw:sceneM19,in:{type:'whipL',dur:.34}},
  {id:'L5',a:66.05,draw:sceneL5,in:{type:'whipD',dur:.36}},
  {id:'M20',a:68.4,draw:sceneM20,in:{type:'zoom',dur:.45,fx:280,fy:690,z:8}},
  {id:'M21',a:71.1,draw:sceneM21,in:{type:'whipL',dur:.34}},
  {id:'M22',a:74.05,draw:sceneM22,in:{type:'whipU',dur:.34}},
  {id:'M23',a:77.3,draw:sceneM23,in:{type:'whipL',dur:.34}},
  {id:'L6',a:79.7,draw:sceneL6,in:{type:'zoom',dur:.45,fx:390,fy:640,z:9}},
  {id:'M24',a:82.25,draw:sceneM24,in:{type:'whipL',dur:.34}},
  {id:'M25',a:85.85,draw:sceneM25,in:{type:'whipU',dur:.34}},
  {id:'M26',a:87.35,draw:sceneM26,in:{type:'zoom',dur:.45,fx:270,fy:480,z:9}},
  {id:'M27',a:92.1,draw:sceneM27,in:{type:'whipD',dur:.36}},
  {id:'M28',a:94.05,draw:sceneM28,in:{type:'zoom',dur:.45,fx:430,fy:500,z:9}},
  {id:'M29',a:97.45,draw:sceneM29,in:{type:'iris',dur:.42,fx:270,fy:480,r0:20}},
  {id:'M30',a:99.45,draw:sceneM30,in:{type:'whipL',dur:.34}},
  {id:'M31',a:107.85,draw:sceneM31,in:{type:'zoom',dur:.45,fx:270,fy:640,z:9}},
  {id:'M32',a:108.85,draw:sceneM32,in:{type:'whipU',dur:.34}},
  {id:'L7',a:111.7,draw:sceneL7,in:{type:'iris',dur:.42,fx:270,fy:600,r0:20}},
  {id:'M33',a:114.95,draw:sceneM33,in:{type:'zoom',dur:.45,fx:330,fy:640,z:8}},
  {id:'M34',a:117.45,draw:sceneM34,in:{type:'whipU',dur:.32}},
  {id:'END',a:121.3,draw:sceneEND,in:{type:'swap',dur:.4}}
];
HL=[{"t0": 0.05, "lines": [{"txt": "las *tortugas*", "sz": 50, "t": [0.05, 0.4]}], "t1": 0.82}, {"t0": 0.9, "lines": [{"txt": "no son", "sz": 30, "t": [0.9, 1.04]}, {"txt": "*mudas*", "sz": 64, "t": [1.23], "spark": true}], "t1": 2.09}, {"t0": 2.17, "lines": [{"txt": "no es una forma", "sz": 30, "t": [2.17, 2.35, 2.49, 2.66]}, {"txt": "de *hablar*", "sz": 46, "t": [2.99, 3.1]}], "t1": 3.5}, {"t0": 3.58, "lines": [{"txt": "las han", "sz": 30, "t": [3.58, 3.8]}, {"txt": "*grabado*", "sz": 58, "t": [3.94]}], "t1": 4.71}, {"t0": 4.79, "lines": [{"txt": "durante mucho tiempo", "sz": 30, "t": [4.79, 5.26, 5.54]}, {"txt": "*pensamos*", "sz": 50, "t": [5.85]}], "t1": 6.32}, {"t0": 6.4, "lines": [{"txt": "que los *reptiles*", "sz": 44, "t": [6.4, 6.49, 6.65]}, {"txt": "eran animales silenciosos", "sz": 26, "t": [7.21, 7.45, 7.9], "gap": 1.1}], "t1": 9.02}, {"t0": 9.1, "lines": [{"txt": "como mucho", "sz": 30, "t": [9.1, 9.43]}, {"txt": "un *bufido*", "sz": 52, "t": [9.96, 10.07]}], "t1": 10.85}, {"t0": 10.93, "lines": [{"txt": "*error*", "sz": 70, "t": [10.93], "spark": true}], "t1": 11.68}, {"t0": 11.76, "lines": [{"txt": "un *biólogo*", "sz": 50, "t": [11.76, 12.01]}], "t1": 12.61}, {"t0": 12.69, "lines": [{"txt": "Universidad de", "sz": 30, "t": [12.69, 13.35]}, {"txt": "*Zúrich*", "sz": 58, "t": [13.49]}], "t1": 14.09}, {"t0": 14.12, "lines": [{"txt": "Gabriel", "sz": 30, "t": [14.12]}, {"txt": "*Jorgewich-Cohen*", "sz": 40, "t": [14.54]}], "t1": 16.01}, {"t0": 16.09, "lines": [{"txt": "grabando a sus", "sz": 30, "t": [16.09, 16.56, 16.62]}, {"txt": "propias *tortugas*", "sz": 46, "t": [16.82, 17.21]}], "t1": 17.68}, {"t0": 17.76, "lines": [{"txt": "en *casa*", "sz": 50, "t": [17.76, 17.89]}], "t1": 18.92}, {"t0": 19.0, "lines": [{"txt": "se llamaba", "sz": 30, "t": [19.0, 19.15]}, {"txt": "*Homer*", "sz": 64, "t": [19.56], "spark": true}], "t1": 20.53}, {"t0": 20.61, "lines": [{"txt": "Homer hacía", "sz": 30, "t": [20.61, 21.1]}, {"txt": "*ruidos*", "sz": 60, "t": [21.46]}], "t1": 22.27}, {"t0": 22.35, "lines": [{"txt": "2022", "sz": 62, "t": [22.35], "num": true, "roll": 0.42}], "t1": 23.76}, {"t0": 23.84, "lines": [{"txt": "su *equipo*", "sz": 48, "t": [23.84, 24.11]}, {"txt": "publicó que", "sz": 30, "t": [24.44, 24.9], "gap": 1.1}], "t1": 24.96}, {"t0": 25.04, "lines": [{"txt": "53", "sz": 76, "t": [25.04], "num": true, "roll": 0.45}, {"txt": "*especies*", "sz": 44, "t": [25.85], "gap": 0.85}], "t1": 26.33}, {"t0": 26.41, "lines": [{"txt": "que creíamos", "sz": 30, "t": [26.41, 26.54]}, {"txt": "*mudas*", "sz": 58, "t": [27.07]}], "t1": 27.37}, {"t0": 27.45, "lines": [{"txt": "en realidad emiten", "sz": 30, "t": [27.45, 27.56, 28.05]}, {"txt": "*sonidos*", "sz": 58, "t": [28.41]}], "t1": 29.26}, {"t0": 29.34, "lines": [{"txt": "50", "sz": 72, "t": [29.34], "num": true, "roll": 0.4}, {"txt": "eran *tortugas*", "sz": 44, "t": [29.98, 30.21], "gap": 0.85}], "t1": 31.12}, {"t0": 31.2, "lines": [{"txt": "*chasquidos*", "sz": 44, "t": [31.2]}, {"txt": "*gruñidos*", "sz": 44, "t": [32.05], "gap": 1.1}, {"txt": "*chirridos*", "sz": 44, "t": [32.75], "gap": 1.1}], "t1": 33.81}, {"t0": 33.89, "lines": [{"txt": "muchos *machos*", "sz": 46, "t": [33.89, 34.29]}], "t1": 35.08}, {"t0": 35.16, "lines": [{"txt": "para *cortejar*", "sz": 44, "t": [35.16, 35.36]}, {"txt": "o para *pelearse*", "sz": 44, "t": [35.9, 35.96, 36.19], "gap": 1.1}], "t1": 37.08}, {"t0": 37.16, "lines": [{"txt": "pero *espera*", "sz": 50, "t": [37.16, 37.45]}], "t1": 38.05}, {"t0": 38.11, "lines": [{"txt": "lo más *raro*", "sz": 48, "t": [38.11, 38.23, 38.44]}], "t1": 39.06}, {"t0": 39.14, "lines": [{"txt": "antes de", "sz": 30, "t": [39.14, 39.44]}, {"txt": "*nacer*", "sz": 62, "t": [39.52], "spark": true}], "t1": 40.48}, {"t0": 40.56, "lines": [{"txt": "crías de *cocodrilo*", "sz": 42, "t": [40.56, 40.91, 41.0]}, {"txt": "del *Nilo*", "sz": 46, "t": [41.55, 41.73], "gap": 1.15}], "t1": 41.96}, {"t0": 42.04, "lines": [{"txt": "llaman desde", "sz": 30, "t": [42.04, 42.4]}, {"txt": "dentro del *huevo*", "sz": 46, "t": [42.66, 42.99, 43.16]}], "t1": 43.8}, {"t0": 43.88, "lines": [{"txt": "sus *hermanos*", "sz": 48, "t": [43.88, 44.19]}, {"txt": "las oyen", "sz": 30, "t": [44.66, 44.88], "gap": 1.1}], "t1": 45.17}, {"t0": 45.25, "lines": [{"txt": "rompen el *cascarón*", "sz": 42, "t": [45.25, 45.69, 45.8]}], "t1": 46.22}, {"t0": 46.3, "lines": [{"txt": "casi a la", "sz": 30, "t": [46.3, 46.64, 46.69]}, {"txt": "*vez*", "sz": 64, "t": [46.79]}], "t1": 47.39}, {"t0": 47.42, "lines": [{"txt": "y la *madre*", "sz": 50, "t": [47.42, 47.6, 47.73]}], "t1": 48.93}, {"t0": 49.01, "lines": [{"txt": "escarba la", "sz": 30, "t": [49.01, 49.51]}, {"txt": "*arena*", "sz": 60, "t": [49.64]}], "t1": 51.11}, {"t0": 51.19, "lines": [{"txt": "¿y los *gecos*?", "sz": 52, "t": [51.19, 51.39, 51.61]}], "t1": 52.32}, {"t0": 52.4, "lines": [{"txt": "el geco", "sz": 30, "t": [52.4, 52.65]}, {"txt": "*tokay*", "sz": 62, "t": [52.92]}], "t1": 53.17}, {"t0": 53.25, "lines": [{"txt": "grita algo parecido", "sz": 30, "t": [53.25, 53.59, 53.83]}, {"txt": "a su *nombre*", "sz": 48, "t": [54.35, 54.41, 54.56]}], "t1": 55.07}, {"t0": 55.15, "lines": [{"txt": "*geck-o*", "sz": 72, "t": [55.15], "spark": true}], "t1": 55.82}, {"t0": 55.9, "lines": [{"txt": "unos *científicos*", "sz": 46, "t": [55.9, 56.27]}], "t1": 56.93}, {"t0": 57.01, "lines": [{"txt": "le pusieron un", "sz": 30, "t": [57.01, 57.15, 57.61]}, {"txt": "*ruido*", "sz": 60, "t": [57.73]}], "t1": 58.0}, {"t0": 58.08, "lines": [{"txt": "como el del", "sz": 30, "t": [58.08, 58.34, 58.44]}, {"txt": "*tráfico*", "sz": 58, "t": [58.6]}], "t1": 59.43}, {"t0": 59.51, "lines": [{"txt": "¿gritó más *fuerte*?", "sz": 44, "t": [59.51, 59.99, 60.21]}], "t1": 60.86}, {"t0": 60.94, "lines": [{"txt": "*no*", "sz": 80, "t": [60.94]}], "t1": 61.67}, {"t0": 61.75, "lines": [{"txt": "alargó la", "sz": 30, "t": [61.75, 62.26]}, {"txt": "*llamada*", "sz": 58, "t": [62.39]}], "t1": 62.99}, {"t0": 62.99, "lines": [{"txt": "la «o» duraba", "sz": 30, "t": [62.99, 63.36, 63.7]}, {"txt": "casi un", "sz": 30, "t": [64.05, 64.39], "gap": 1.0}], "t1": 64.43}, {"t0": 64.51, "lines": [{"txt": "40", "sz": 74, "t": [64.51], "num": true, "roll": 0.4}, {"txt": "*%* *más*", "sz": 44, "t": [64.91, 65.44], "gap": 0.85}], "t1": 66.04}, {"t0": 66.12, "lines": [{"txt": "los *aligátores*", "sz": 48, "t": [66.12, 66.42]}, {"txt": "americanos", "sz": 30, "t": [67.06], "gap": 1.1}], "t1": 67.66}, {"t0": 67.67, "lines": [{"txt": "*braman*", "sz": 66, "t": [67.67], "spark": true}], "t1": 68.61}, {"t0": 68.69, "lines": [{"txt": "ese *bramido*", "sz": 48, "t": [68.69, 68.92]}], "t1": 69.81}, {"t0": 69.89, "lines": [{"txt": "carné de", "sz": 30, "t": [69.89, 70.2]}, {"txt": "*identidad*", "sz": 56, "t": [70.3]}], "t1": 71.12}, {"t0": 71.2, "lines": [{"txt": "cuanto más", "sz": 30, "t": [71.2, 71.53]}, {"txt": "*grave*", "sz": 62, "t": [71.71]}], "t1": 72.46}, {"t0": 72.54, "lines": [{"txt": "más *grande*", "sz": 52, "t": [72.54, 72.72]}, {"txt": "es el animal", "sz": 30, "t": [73.09, 73.24, 73.36], "gap": 1.1}], "t1": 75.36}, {"t0": 75.44, "lines": [{"txt": "evitar *peleas*", "sz": 46, "t": [75.44, 75.81]}, {"txt": "que van a perder", "sz": 30, "t": [76.25, 76.36, 76.54, 76.6], "gap": 1.1}], "t1": 77.3}, {"t0": 77.38, "lines": [{"txt": "en *Chile*", "sz": 52, "t": [77.38, 77.66]}], "t1": 78.13}, {"t0": 78.21, "lines": [{"txt": "la lagartija", "sz": 30, "t": [78.21, 78.33]}, {"txt": "*llorona*", "sz": 60, "t": [78.91]}], "t1": 79.67}, {"t0": 79.75, "lines": [{"txt": "cuando un", "sz": 30, "t": [79.75, 80.14]}, {"txt": "*depredador*", "sz": 50, "t": [80.26]}], "t1": 80.72}, {"t0": 80.8, "lines": [{"txt": "la atrapa", "sz": 30, "t": [80.8, 80.91]}, {"txt": "*chilla*", "sz": 64, "t": [81.51], "spark": true}], "t1": 82.42}, {"t0": 82.5, "lines": [{"txt": "las que la *oyen*", "sz": 44, "t": [82.5, 83.38, 83.47, 83.62]}], "t1": 83.89}, {"t0": 83.97, "lines": [{"txt": "se quedan", "sz": 30, "t": [83.97, 84.11]}, {"txt": "*inmóviles*", "sz": 54, "t": [84.4]}], "t1": 86.04}, {"t0": 86.12, "lines": [{"txt": "en la *India*", "sz": 50, "t": [86.12, 86.22, 86.36]}], "t1": 86.82}, {"t0": 86.9, "lines": [{"txt": "los machos de", "sz": 30, "t": [86.9, 87.08, 87.41]}, {"txt": "*gavial*", "sz": 60, "t": [87.5]}], "t1": 88.14}, {"t0": 88.22, "lines": [{"txt": "un *bulto*", "sz": 52, "t": [88.22, 88.34]}, {"txt": "en la punta del hocico", "sz": 26, "t": [88.7, 88.79, 88.9, 89.2, 89.35], "gap": 1.1}], "t1": 89.84}, {"t0": 89.92, "lines": [{"txt": "el *ghara*", "sz": 56, "t": [89.92, 90.08]}, {"txt": "significa *olla*", "sz": 40, "t": [90.65, 91.49], "gap": 1.15}], "t1": 92.09}, {"t0": 92.16, "lines": [{"txt": "bajo el", "sz": 30, "t": [92.16, 92.61]}, {"txt": "*agua*", "sz": 60, "t": [92.74]}], "t1": 93.42}, {"t0": 93.5, "lines": [{"txt": "*¡pop!*", "sz": 84, "t": [93.5], "spark": true}], "t1": 94.02}, {"t0": 94.1, "lines": [{"txt": "un *sonido*", "sz": 50, "t": [94.1, 94.36]}], "t1": 95.53}, {"t0": 95.61, "lines": [{"txt": "unas", "sz": 30, "t": [95.61]}, {"txt": "*centésimas*", "sz": 52, "t": [95.88]}, {"txt": "de segundo", "sz": 30, "t": [96.51, 96.61], "gap": 1.0}], "t1": 98.23}, {"t0": 98.31, "lines": [{"txt": "el gran", "sz": 30, "t": [98.31, 98.46]}, {"txt": "*giro*", "sz": 70, "t": [98.72], "spark": true}], "t1": 99.88}, {"t0": 99.96, "lines": [{"txt": "el estudio de", "sz": 30, "t": [99.96, 100.06, 100.5]}, {"txt": "las *tortugas*", "sz": 48, "t": [100.59, 100.75]}], "t1": 101.52}, {"t0": 101.6, "lines": [{"txt": "comunicarse con", "sz": 30, "t": [101.6, 102.33]}, {"txt": "*sonidos*", "sz": 58, "t": [102.53]}], "t1": 103.73}, {"t0": 103.81, "lines": [{"txt": "un antepasado", "sz": 30, "t": [103.81, 103.96]}, {"txt": "*común*", "sz": 62, "t": [104.6]}], "t1": 104.97}, {"t0": 105.05, "lines": [{"txt": "hace unos", "sz": 30, "t": [105.05, 105.28]}, {"txt": "407", "sz": 70, "t": [105.55], "num": true, "roll": 0.5}, {"txt": "*millones* de años", "sz": 36, "t": [106.58, 107.04, 107.15], "gap": 0.8}], "t1": 107.87}, {"t0": 107.95, "lines": [{"txt": "un *pez*", "sz": 70, "t": [107.95, 108.24], "spark": true}], "t1": 109.21}, {"t0": 109.29, "lines": [{"txt": "no todos los", "sz": 30, "t": [109.29, 109.42, 109.72]}, {"txt": "*científicos*", "sz": 50, "t": [109.89]}, {"txt": "están de acuerdo", "sz": 30, "t": [110.56, 110.9, 110.97], "gap": 1.0}], "t1": 112.2}, {"t0": 112.28, "lines": [{"txt": "la próxima vez", "sz": 30, "t": [112.28, 112.39, 112.85]}, {"txt": "que veas una *tortuga*", "sz": 40, "t": [113.05, 113.16, 113.49, 113.67]}], "t1": 114.27}, {"t0": 114.3, "lines": [{"txt": "*piénsalo*", "sz": 60, "t": [114.3]}], "t1": 114.96}, {"t0": 115.04, "lines": [{"txt": "a lo mejor está", "sz": 30, "t": [115.04, 115.12, 115.24, 115.55]}, {"txt": "esperando a que", "sz": 30, "t": [115.79, 116.35, 116.42], "gap": 1.0}, {"txt": "te *calles*", "sz": 54, "t": [116.55, 116.66], "gap": 1.1}], "t1": 117.42}, {"t0": 117.5, "lines": [{"txt": "¿qué animal parece", "sz": 32, "t": [117.5, 117.7, 118.5]}, {"txt": "*mudo*", "sz": 60, "t": [118.85]}, {"txt": "pero no lo es?", "sz": 30, "t": [119.14, 119.34, 119.46, 119.64], "gap": 1.0}], "t1": 120.16}, {"t0": 120.24, "lines": [{"txt": "te leo en", "sz": 30, "t": [120.24, 120.44, 120.71]}, {"txt": "*comentarios*", "sz": 48, "t": [120.83]}], "t1": 121.52}];
