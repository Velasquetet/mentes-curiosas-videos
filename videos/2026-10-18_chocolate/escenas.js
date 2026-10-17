/* ===== ESCENAS · el chocolate más antiguo al este del Misisipi (Etowah, Georgia) ===== */
DUR=119.6;window.DUR=DUR;
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
const xMark=(p,r=80,c=K.red,w=12)=>DR(`M${-r} ${-r} L${r} ${r}`,ST(c,w),sg(p,0,.5))+DR(`M${r} ${-r} L${-r} ${r}`,ST(c,w),sg(p,.4,1));
const tick=(p,r=40,c='#2b9a4e',w=10)=>DR(`M${-r} 0 L${-r*.3} ${r*.7} L${r} ${-r*.8}`,ST(c,w),p);
/* choza de bajareque con techo de paja */
function hutS(s=1){return G(0,0,s,0,Rc(-34,-46,68,46,'#e2c08a',4,OL(2))+P('M-44 -42 L0 -92 L44 -42Z','fill:#c98a3a;'+OL(2))+P('M-30 -52 l8 -12 M-12 -60 l6 -14 M10 -60 l6 -12 M26 -52 l6 -10',ST('#8a5a20',1.6))+Rc(-9,-26,18,26,'#5a3a20',3));}
/* hueso, mazorca de maíz */
const boneS=()=>P('M-34 -6 Q-44 -16 -38 -20 Q-30 -24 -28 -12 L28 -12 Q30 -24 38 -20 Q44 -16 34 -6 Q44 4 38 8 Q30 12 28 2 L-28 2 Q-30 12 -38 8 Q-44 4 -34 -6Z','fill:#f8f3e6;'+OL(2));
const cornS=()=>El(0,0,12,30,'#f6c443',OL(2))+[...Array(5)].map((_,i)=>P(`M-10 ${-20+i*10} L10 ${-20+i*10}`,ST('#d99a1a',1.4))).join('')+P('M-6 26 Q-26 0 -14 -26 M6 26 Q26 0 14 -26',ST('#5aa04a',4));
/* paisaje: Etowah junto al río, con montículos y chozas */
function etowahL(T,o={}){let s=G(o.sx??430,o.sy??400,1,0,sunS(o.sr||70));
  s+=G(110+T*3,300,1,0,cloudS(84))+G(420+T*2,250,.7,0,cloudS(60))+birds(T,330);
  s+=G(80,560,1,0,humpS(300,120))+G(320,560,1,0,humpS(340,150))+G(540,560,1,0,humpS(260,100));
  s+=groundBand(-40,600,555,440,{c:'url(#gGR)'})+bushBand(-40,580,548,22,o.seed||3,{c:'#8fcf7a'});
  const m=o.mounds??1;
  if(m>0){s+=G(o.mx??300,o.my??650,o.mk??1,0,moundS({w:300,h:120,grow:o.grow??1,temple:o.temple??1}));
    s+=G(90,630,.7,0,moundS({w:180,h:70,grow:o.grow2??1,temple:0}))+G(480,640,.7,0,moundS({w:170,h:66,grow:o.grow2??1,temple:o.temple??1}));}
  if(o.huts!==false)[[60,700,.7],[150,690,.62],[470,700,.66],[400,712,.7]].forEach(([x,y,k])=>s+=G(x,y,k,0,hutS()));
  s+=waterBand(-40,580,880,990,T,{rows:2,fill:'#4654ee'});
  return s;}
const fgLeaves=T=>G(-10,990,1,20+Math.sin(T*1.3)*3,leafS(170,48,'#2b7a3e','#1f6b33'))+G(30,990,1,40+Math.sin(T*1.1)*3,leafS(130,38,'#3f9b4f','#2b7a3e'))+G(550,990,1,-24+Math.sin(T*1.2)*3,leafS(170,48,'#2b7a3e','#1f6b33'))+G(512,990,1,-44,leafS(120,36,'#3f9b4f','#2b7a3e'));

/* ---------- L1 · hace 900 años alguien tomó chocolate en Georgia ---------- */
function sceneL1(t){
  const T=t;let s=etowahL(T,{sx:430,sy:410,sr:76});
  const lift=EZ.io(sg(t,1.7,2.4));
  s+=blobS({x:190,y:762,s:1.2,T,ph:4,c:'#f76e19',shape:'bean',emo:t>1.9?'happy':'neutral',arms:[0,-lift*26],hold:G(4,-10-lift*10,.42,-lift*8,cacaoCupS({T}))});
  s+=blobS({x:380,y:768,s:.95,T:T+1,ph:7,c:'#2a37d7',shape:'ball',flip:true,emo:'surprised'});
  const pq=sg(t,2.9,3.2);if(pq>0){s+=G(300,500,1,0,G(0,-(1-EZ.out(pq))*60,1,0,pinS(K.red)),cl(pq*4));for(let i=0;i<2;i++){const q=((t-2.9)*1.1+i/2)%1;s+=El(300,500,10+q*40,(10+q*40)*.35,'none',`stroke:${K.red};stroke-width:3;opacity:${f2(1-q)}`);}}
  s+=sparkA(250,640,t-2.25,12,K.pink,.7)+sparkA(160,620,t-2.4,9,K.yellow,.7);
  s+=fgLeaves(T);
  return push(s,t,0,5.2,1.14,1.0,260,700);
}
/* ---------- M1 · y eso no debería haber sido posible ---------- */
function sceneM1(t){
  const T=t;let s=qDeco(t,ao(t,5.3,.4),3,6)+groundLine(1);
  s+=G(370,GY,1.25*ap(t,5.25,.35),0,Rc(-60,-6,120,12,K.ink,4)+G(0,-6,1,0,cacaoCupS({T})));
  s+=actor('garbanzo',{t0:5.15,path:[[5.15,150]],emo:[[5.15,0,0],[5.7,9,1]],s:.9,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=stampA(330,480,t-6.71,'¿IMPOSIBLE?',{r:-6,sz:26,c:K.red});
  return shake(s,t,6.75,6,.35);
}
/* ---------- L2 · el cacao es tropical… y en Georgia hiela ---------- */
function sceneL2(t){
  const T=t,f=EZ.io(sg(t,10.3,11.7));
  let s=Rc(-60,-60,660,1080,'#9fb0c2',0,`opacity:${f2(f*.55)}`);
  s+=G(420,420,1-.25*f,0,sunS(74,{pale:f>.5}));
  s+=G(110,600,1,0,humpS(300,130,{lit:mixc('#3f9b4f','#eef3f7',f),dark:mixc('#2b7a3e','#c9d6e0',f)}))+G(380,600,1,0,humpS(360,170,{lit:mixc('#58b85a','#f4f7fa',f),dark:mixc('#2b7a3e','#c9d6e0',f)}));
  s+=groundBand(-40,600,595,400,{c:mixc('#3f9b4f','#f1f5f8',f)});
  s+=G(270,820,1.2,Math.sin(T*.8)*.6,cacaoTreeS({T,frost:EZ.io(sg(t,11.2,12.4))}));
  if(f>0)for(let i=0;i<34;i++){const q=((T*.25)+hs(i*2.1))%1,x=hs(i*5.7)*540+Math.sin(T*2+i)*14;s+=Ci(x,240+q*760,2+hs(i)*3,'#fff',`opacity:${f2(f*(1-q*.4))}`);}
  s+=pillA(110,430,'clima tropical',sg(t,9.2,9.5)*dis(t,10.3),{sz:14,w:800,fill:'url(#gOR)'});
  s+=pillA(420,330,'Georgia en invierno',sg(t,11.3,11.6),{sz:14,w:800,fill:'#2f6fd0'});
  s+=stampA(270,560,t-13.39,'NO CRECE',{r:-6,sz:26,c:K.red});
  s+=actor('pipa',{t0:11.0,path:[[11.0,460]],emo:[[11.0,0,0],[11.4,8,0]],s:.62,y:()=>930,face:()=>-1,look:()=>-1},t);
  return push(s,t,7.7,14.8,1.06,1.0,270,700);
}
/* ---------- L3 · Etowah: ciudad de enormes montículos, pueblos misisipianos ---------- */
function sceneL3(t){
  const T=t;const g=EZ.out(sg(t,16.6,17.6)),tp=EZ.back(sg(t,17.4,17.8));
  let s=etowahL(T,{sx:110,sy:400,sr:62,seed:6,grow:lerp(.35,1,g),grow2:lerp(.3,1,g),temple:tp});
  s+=pillA(300,330,'Etowah',sg(t,15.5,15.8),{sz:20,w:800,fill:'url(#gRP)'})+leader(300,395,300,450,sg(t,15.6,15.95),K.ink,10);
  s+=pillA(300,372,'Georgia (EE. UU.)',sg(t,15.9,16.2),{sz:12,w:700});
  if(t>19.2)s+=G(270,860,1,0,blobCrowd({n:7,rows:1,w:470,T,seed:5}),ao(t,19.2,.3));
  s+=pillA(270,425,'pueblos misisipianos',sg(t,19.75,20.05),{sz:15,w:800});
  s+=fgLeaves(T);
  return push(s,t,14.7,21.1,1.0,1.08,300,620);
}
/* ---------- M2 · construyen su primer gran montículo y celebran banquetes ---------- */
function sceneM2(t){
  const T=t;let s=groundLine(1);
  const g=EZ.io(sg(t,21.5,23.9));
  s+=G(270,GY,1,0,moundS({w:360,h:150,grow:lerp(.25,1,g),temple:EZ.back(sg(t,23.6,24.0))}));
  /* porteadores con cestos de tierra */
  for(let i=0;i<4;i++){const ph=((t-21.0)*.42+i/4)%1,side=i%2?1:-1,x=side<0?lerp(-40,150,ph):lerp(580,390,ph);if(t>24.2)break;
    s+=blobS({x,y:GY,s:.62,T:T+i,ph:i*3+1,flip:side>0,hold:G(0,-6,1,0,P('M-14 -4 L14 -4 L10 14 L-10 14Z','fill:#b5823c;'+OL(1.6))+El(0,-6,13,6,'#8a5a34'))});}
  const fq=ao(t,24.0,.4);
  if(fq>0){s+=G(100,GY,.42*fq,0,NX.fire({n:3,w:120},t-24));s+=G(440,GY-2,.5*ap(t,24.2,.3),0,potS());
    [[30,GY],[165,GY],[380,GY],[510,GY]].forEach(([x,y],i)=>{const jump=Math.abs(Math.sin(T*6+i))*14*fq;s+=blobS({x,y:y-jump,s:.6*ap(t,24.1+i*.08,.3),T:T+i,ph:i*5+2,emo:'happy',arms:[-20,-20]});});
    s+=confetti(270,420,t-24.6,26,4,230);}
  s+=pillA(270,360,'1.er montículo',sg(t,23.2,23.5)*dis(t,25.0),{sz:14,w:800});
  return s;
}
/* ---------- M3 · las fosas se llenaron de restos: huesos, comida y cerámica ---------- */
function sceneM3(t){
  const T=t,SY=470;let s=Rc(-60,SY,660,600,'url(#gMUD)')+P(`M-30 ${SY} L570 ${SY}`,ST(K.ink,2.6));
  for(let i=0;i<14;i++)s+=Ci(hs(i*3.1)*540,SY+40+hs(i*1.7)*440,2+hs(i)*4,'#5a2a18','opacity:.5');
  const pit=`M90 ${SY} Q100 ${SY+300} 270 ${SY+310} Q440 ${SY+300} 450 ${SY}Z`;
  s+=P(pit,'fill:#3a1e12;'+OL(2.4));
  /* objetos que caen y se quedan en el fondo */
  const OB=[[27.6,180,SY+250,boneS(),-14],[27.75,320,SY+262,boneS(),20],[28.2,240,SY+270,cornS(),70],[28.35,370,SY+230,cornS(),-60],[29.0,150,SY+200,G(0,0,.42,0,sherdS({seed:2})),-10],[29.15,280,SY+215,G(0,0,.4,0,sherdS({seed:5})),25],[29.3,400,SY+190,G(0,0,.38,0,sherdS({seed:8})),-30],[29.45,220,SY+160,G(0,0,.36,0,sherdS({seed:11})),10]];
  OB.forEach(([t0,x,y,svg,r],i)=>{const q=sg(t,t0,t0+.45);if(q<=0)return;const yy=lerp(SY-220,y,EZ.in2(q)),bounce=q>=1?Math.max(0,Math.sin((t-t0-.45)*14))*6*Math.exp(-(t-t0-.45)*6):0;s+=clipG(G(x,yy-bounce,1,r*q,svg),q<1?Rc(-60,-60,660,1100,'#000'):P(pit,''));});
  s+=pillA(485,600,'huesos',sg(t,27.75,28.0),{sz:13,w:800,fill:'#f8f3e6',tc:K.ink,s:OL(1.6)});
  s+=pillA(485,660,'comida',sg(t,28.35,28.6),{sz:13,w:800,fill:'url(#gOR)'});
  s+=pillA(270,880,'cerámica',sg(t,29.55,29.85),{sz:16,w:800,fill:'url(#gRP)'});
  s+=actor('lenteja',{t0:25.8,path:[[25.8,470]],emo:[[25.8,0,0],[26.4,7,0],[28.0,10,0]],s:.55,y:()=>SY,face:()=>-1,look:()=>-1,prop:()=>PROP.lupa},t);
  s+=pillA(270,420,'fosas del banquete',sg(t,26.1,26.4)*dis(t,27.6),{sz:14,w:800});
  return push(s,t,25.7,30.7,1,1.05,270,620);
}
/* ---------- M4 · 2017: 31 piezas; cafeína y otras sustancias del cacao ---------- */
function sceneM4(t){
  const T=t;let s='';
  const yq=dis(t,32.45,.3);if(yq>0)s+=G(270,lerp(560,480,1-yq),yq,0,NX.bigyear({value:2017},t-30.7));
  const gq=ao(t,32.5,.2)*dis(t,34.55,.3);
  if(gq>0){for(let i=0;i<31;i++){const q=ap(t,32.6+i*.035,.25);if(q<=0)continue;const c=i%7,r=Math.floor(i/7),x=270+(c-3)*64,y=380+r*72;s+=G(x,y+Math.sin(T*2+i)*2,.36*q,hs(i)*40-20,sherdS({seed:i+1,c:mixc('#b9784a','#d8a070',hs(i*2))}),gq);}}
  const fq=ap(t,34.6,.4);
  if(fq>0){s+=G(330,630,1.1*fq,0,NX.flask({c:'#7a3d1e'},t-34.6));
    for(let i=0;i<5;i++){const q=((T*.7)+i/5)%1;s+=Ci(330+Math.sin(T*3+i)*24,560-q*160,4+hs(i)*5,'#fff',`opacity:${f2((1-q)*fq*.8)}`);}
    s+=pillA(400,400,'cafeína',sg(t,35.42,35.7),{sz:16,w:800,fill:'url(#gRP)'})+leader(400,416,350,520,sg(t,35.5,35.8),K.ink,-10);
    s+=pillA(220,470,'+ otras sustancias',sg(t,36.34,36.6),{sz:13,w:700});
    s+=pillA(400,450,'= señal de cacao',sg(t,37.5,37.8),{sz:13,w:800,fill:'#5a2e18'});}
  s+=actor('lenteja',{t0:34.7,path:[[34.7,85]],emo:[[34.7,0,0],[35.2,10,0],[37.4,16,0]],s:.75,y:()=>GY+100,face:()=>1,look:()=>1,prop:()=>PROP.lupa},t);
  return s;
}
/* ---------- M5a · pero había un problema ---------- */
function sceneM5a(t){
  const T=t;let s=raysBg(270,560,t*20,18,'#d0d0d0',ao(t,38.4,.3))+groundLine(1);
  s+=actor('garbanzo',{t0:38.45,path:[[38.45,270]],emo:[[38.45,0,0],[38.8,8,0]],s:1.0,y:()=>GY,face:()=>1},t);
  s+=stampA(270,430,t-39.15,'¡PROBLEMA!',{r:-5,sz:28,c:K.red});
  return shake(s,t,39.2,7,.4);
}
/* ---------- M5b · el yaupón da la misma señal química → «bebida negra» ---------- */
const sigBars=(x,y,lt,c)=>{let s=Rc(x-70,y-70,140,90,'#fff',8,OL(2));[44,60,28,52].forEach((h,i)=>{const q=EZ.out(sg(lt,i*.1,i*.1+.4));s+=Rc(x-52+i*28,y+10-h*q,20,h*q,c,3);});return s+P(`M${x-60} ${y+10} L${x+60} ${y+10}`,ST(K.ink,1.6));};
function sceneM5b(t){
  const T=t;let s=groundLine(1);
  const mv=EZ.io(sg(t,44.1,44.8));
  const cq=ap(t,40.1,.35)*(1-mv);
  if(cq>0)s+=G(170,0,1,0,G(0,GY,cq*.66,0,cacaoTreeS({T})),1)+G(170,0,1,0,pillA(0,GY+30,'cacao',cq,{sz:13,w:800,fill:'#7a3d1e'}),1-mv);
  const yx=lerp(400,150,mv);
  s+=G(yx,GY,1.25*ap(t,40.45,.35),0,yauponS({T}));
  s+=pillA(yx,GY+30,'yaupón',sg(t,41.45,41.7),{sz:13,w:800,fill:'#2b7a3e'});
  const bq=sg(t,42.55,42.9)*(1-mv);
  if(bq>0){s+=G(0,0,1,0,sigBars(150,440,t-42.55,'#7a3d1e')+sigBars(400,440,t-42.6,'#2b7a3e'),cl(bq*3));s+=G(270,420,EZ.back(bq),0,Tn(0,14,'=',54,800,{fill:K.pink}));}
  const dq=ap(t,44.6,.4);
  if(dq>0){s+=G(390,GY,1.3*dq,0,P('M-40 -96 L40 -96 L32 -6 Q30 2 22 2 L-22 2 Q-30 2 -32 -6Z','fill:#c46a3a;'+OL(2.4))+El(0,-96,40,9,'#141212',OL(2))+[0,1,2].map(i=>{const q=((T*.6)+i/3)%1;return P(`M${-14+i*14} ${f1(-110-q*44)} q8 -10 0 -20`,ST('#fff',3,`opacity:${f2(1-q)}`));}).join(''));
    s+=arrowA(`M220 ${GY-90} Q290 ${GY-150} 340 ${GY-110}`,sg(t,44.9,45.4),K.ink,3);
    s+=pillA(390,GY+30,'«bebida negra»',sg(t,46.05,46.35),{sz:14,w:800,fill:K.ink});}
  return s;
}
/* ---------- M6 · la explicación más sencilla: nada de chocolate ---------- */
function sceneM6(t){
  const T=t;let s=groundLine(1);
  s+=G(115,GY,1.1,0,yauponS({T}))+G(115,GY-240,ap(t,48.6,.3),0,Ci(0,0,34,'#fff',OL(2.4))+tick(sg(t,48.7,49.1),18,'#2b9a4e',7));
  s+=G(425,GY,1.2*ap(t,47.4,.35),0,cacaoCupS({T}));
  s+=G(425,GY-60,1,0,xMark(sg(t,50.3,50.9),74,K.red,13));
  s+=actor('garbanzo',{t0:47.35,path:[[47.35,270]],emo:[[47.35,0,0],[47.8,16,0]],s:.68,y:()=>GY,face:()=>1,look:()=>1},t);
  return shake(s,t,50.8,5,.3);
}
/* ---------- M7 · Hasta ahora. ---------- */
function sceneM7(t){return NX.punch({a:'Hasta',b:'ahora.'},t-51.94);}
/* ---------- M8 · equipo de Adam King: buscar ADN ---------- */
function sceneM8(t){
  const T=t;let s=gridBg('#ececec','rgba(20,18,18,.07)',24)+groundLine(1);
  s+=G(270,520,ap(t,53.4,.4),0,Rc(-140,-120,280,170,'#f7f5ef',6,OL(2.4))+P('M-160 -120 L0 -190 L160 -120Z','fill:#e9e4d8;'+OL(2.4))+[...Array(5)].map((_,i)=>Rc(-116+i*52,-100,16,150,'#fff',2,OL(1.6))).join('')+Rc(-150,46,300,14,'#d9d2c2',2,OL(2))+Tn(0,-138,'UNIVERSIDAD',11,800,{ls:.12}));
  for(let i=0;i<5;i++){const q=ap(t,53.6+i*.12,.3);if(q<=0)continue;s+=blobS({x:70+i*80,y:GY,s:.62*q,T:T+i,ph:i*7+3,acc:i%2?['glasses']:[],emo:t>57.4?'surprised':'happy'});}
  s+=pillA(270,330,'equipo de investigación',sg(t,53.5,53.8),{sz:14,w:800});
  s+=actor('lenteja',{t0:57.3,path:[[57.3,620],[57.9,475]],emo:[[57.3,0,0],[57.9,10,1]],s:.7,y:()=>GY,face:()=>-1,prop:()=>PROP.lupa},t);
  return s;
}
function sceneM8b(t){
  const T=t;let s=raysBg(270,520,t*25,22,'#d6d6d6',1);
  s+=G(270,540,1.25*ap(t,59.75,.4),20,dnaS(380,T*2.4,{amp:46,n:6}));
  s+=sparkA(130,420,t-60.0,14,K.pink,.8)+sparkA(420,650,t-60.15,11,K.yellow,.8);
  return s;
}
/* ---------- M9 · laboratorio de París: rasparon 3 trozos → en 2, ADN de cacao ---------- */
function sceneM9(t){
  const T=t;let s='';
  s+=Rc(40,300,200,230,'#cfe0ff',6,OL(2.4));
  s+=G(140,530,1,0,P('M-50 0 L-12 -150 L-6 -200 L6 -200 L12 -150 L50 0 M-40 -40 L40 -40 M-24 -100 L24 -100',ST('#5a6b8a',4))+P('M-20 0 Q0 -30 20 0',ST('#5a6b8a',4)));
  s+=P('M140 300 L140 530 M40 415 L240 415',ST(K.ink,2.4));
  s+=pillA(140,284,'París',sg(t,62.4,62.7),{sz:13,w:800,fill:'#2a37d7'});
  s+=Rc(270,300,240,240,'#eef3f3',8,OL(2.4))+Rc(282,312,216,150,'rgba(170,220,255,.35)',4,OL(1.6))+Tn(390,500,'ZONA LIMPIA',11,800,{fill:'#2a37d7',ls:.1});
  for(let i=0;i<3;i++){const q=sg(t,64.5+i*.25,65.0+i*.25);s+=Rc(300+i*70,465,46,8,'#7a3df0',2,`opacity:${f2(.8*Math.sin(T*6+i)*.5+.4)}`);}
  s+=Rc(-20,GY-10,580,20,'#d9d2c2',4,OL(2.4))+P(`M30 ${GY+10} L30 ${GY+180} M510 ${GY+10} L510 ${GY+180}`,ST(K.ink,4));
  [110,270,430].forEach((x,i)=>{const q=ap(t,63.9+i*.12,.3);if(q<=0)return;const ok=i<2,lit=ok?sg(t,65.5+i*.2,65.9+i*.2):0;
    s+=G(x,GY-50,.62*q,i*12-12,sherdS({seed:i*4+3,glow:lit}));
    if(t>62.75&&t<65.3){const sc=(t*3+i*.3)%1;s+=G(x+lerp(-30,30,sc),GY-70,1,30,P('M0 0 L26 -26',ST('#9aa3b8',4))+P('M26 -26 L46 -46',ST(K.ink,6)));for(let k=0;k<4;k++){const pq=((t*2+k/4+i*.2))%1;s+=Ci(x-10+k*8,GY-50+pq*36,2.4,'#b9784a',`opacity:${f2(1-pq)}`);}}
    if(ok&&lit>0)s+=G(x,GY-150,EZ.back(lit),0,Ci(0,0,30,'#fff',OL(2.4))+tick(lit,15,'#2b9a4e',6));
    if(!ok&&t>66.2)s+=G(x,GY-150,ap(t,66.2,.3),0,Ci(0,0,24,'#fff',OL(2))+Tn(0,7,'—',20,800,{fill:'#8a8a8a'}));});
  if(t>66.6)s+=G(270,868,ap(t,66.64,.35),0,Rc(-92,-22,184,44,'#fff',22,OL(2.4))+G(-62,0,.18,90,dnaS(150,T*3,{amp:40,n:4}))+Tn(18,7,'ADN de cacao',15,800));
  return s;
}
/* ---------- M10a · ¿y si era chocolate moderno? ---------- */
function sceneM10a(t){
  const T=t;let s=groundLine(1);
  s+=G(380,GY-120,ap(t,68.6,.35)*.95,Math.sin(T*2)*4,chocoBarS({bite:t>69.6}));
  s+=actor('garbanzo',{t0:68.15,path:[[68.15,150]],emo:[[68.15,0,0],[68.6,9,0],[69.8,10,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=bubbleA(170,430,t-69.8,'¿contaminación?',{sz:16,tail:-1,r:-4});
  return s;
}
/* ---------- M10b · lo comprobaron: fragmentos cortísimos, como el ADN antiguo ---------- */
function sceneM10b(t){
  const T=t;let s=gridBg('#ececec','rgba(20,18,18,.07)',24);
  const st=t<73.0;
  if(st)s+=stampA(270,520,t-71.5,'COMPROBADO',{r:-5,sz:30,c:'#2b9a4e',out:1.3});
  const mq=ao(t,73.2,.35);
  if(mq>0){s+=G(270,400,1,0,clipG(G(-230,0,1,0,(()=>{let a='',b='',r='';for(let i=0;i<=460;i+=4){const h=Math.sin(i*.16+T*2)*12;a+=`${i?'L':'M'}${i} ${f1(-h)} `;b+=`${i?'L':'M'}${i} ${f1(h)} `;if(i%8===0)r+=P(`M${i} ${f1(-h)} L${i} ${f1(h)}`,ST('#fff',3));}return r+P(a,ST('#f34841',6))+P(b,ST('#8005f0',6));})()),Rc(-230,-30,460*mq,60,'#000')));
    s+=pillA(270,350,'ADN moderno: hebras largas',sg(t,73.5,73.8),{sz:13,w:700});}
  const fq=ao(t,74.3,.35);
  if(fq>0){s+=G(270,600,1.1,0,dnaFragS({T,old:EZ.io(sg(t,74.4,75.6))}),fq);
    s+=pillA(270,690,'ADN antiguo: trocitos',sg(t,75.3,75.6),{sz:14,w:800,fill:'url(#gRP)'});
    s+=pillA(270,735,'≈ 84 «letras» de media',sg(t,76.4,76.7),{sz:12,w:700});}
  s+=actor('lenteja',{t0:77.0,path:[[77.0,470]],emo:[[77.0,0,0],[77.4,11,0]],s:.55,y:()=>GY+130,face:()=>-1},t);
  return s;
}
/* ---------- M11 · y aquí viene el giro ---------- */
function sceneM11(t){
  let s=raysBg(270,520,t*30,20,'#d3d3d3',ao(t,79.4,.3))+groundLine(1);
  s+=actor('grano',{t0:79.4,path:[[79.4,270]],emo:[[79.4,0,0],[79.8,11,0]],s:.9,y:()=>GY,face:()=>1,mod:(p,tt)=>{p.rot+=Math.sin(tt*6)*4;}},t);
  s+=sparkA(150,420,t-80.3,14,K.pink,.8)+sparkA(400,440,t-80.45,11,K.yellow,.8);
  return s;
}
/* ---------- M12 · cacao como el de los mayas de Belice y de Ecuador · casi 2.000 km ---------- */
function sceneM12(t){
  let s='';
  s+=G(270,520,1,0,NX.map({center:[-84,17],zoom:3.0,highlight:['Belice','Ecuador','Estados Unidos'],arcs:[[[-88.7,17.2],[-84.8,34.1]],[[-78.5,-1.5],[-84.8,34.1]]],pins:[[-84.8,34.1,'Etowah'],[-88.7,17.2,'Belice'],[-78.5,-1.5,'Ecuador']],w:480,h:470,zoomAt:.05},t-81.6));
  const dq=sg(t,86.0,86.35);
  if(dq>0)s+=G(270,790-60,EZ.back(dq),0,Rc(-120,-20,240,40,'url(#gRP)',20,OL(2))+Tn(0,6,'Etowah → Belice, en línea recta',14,800,{fill:'#fff'}));
  return s;
}
/* ---------- M13 · rutas que movían cacao a través de medio continente ---------- */
function sceneM13(t){
  const T=t;let s=G(460,360,1,0,sunS(54))+G(120+T*3,290,1,0,cloudS(80))+G(400+T*2,240,.7,0,cloudS(60))+birds(T,320);
  s+=G(380,480,1,0,humpS(360,150))+G(90,480,1,0,humpS(280,110))+groundBand(-40,600,475,520,{c:'url(#gGR)'})+bushBand(-40,580,468,20,8,{c:'#8fcf7a'});
  const PTS=[[470,740],[370,650],[270,700],[160,610],[80,540]];
  const zo=EZ.io(sg(t,93.3,94.6));
  let path=`M${PTS[0][0]} ${PTS[0][1]}`;for(let i=1;i<PTS.length;i++)path+=` L${PTS[i][0]} ${PTS[i][1]}`;
  let w=DR(path,ST('#f4ead2',5,'stroke-dasharray:10 9'),sg(t,89.6,90.6));
  PTS.forEach(([x,y],i)=>{const q=ap(t,89.8+i*.12,.3);if(q>0)w+=blobS({x:x+22,y:y+24,s:.55*q,T:T+i,ph:i*4+2,emo:'happy',flip:true});});
  const hop=sg(t,90.4,93.2)*(PTS.length-1),k=Math.min(PTS.length-2,Math.floor(hop)),u=hop-k;
  const [x1,y1]=PTS[k],[x2,y2]=PTS[k+1];w+=G(lerp(x1,x2,u),lerp(y1,y2,u)-50-Math.sin(Math.PI*u)*50,.32,u*360,cacaoPodS({}));
  w+=G(70,530,.5,0,moundS({w:160,h:60}));
  w+=pillA(90,455,'Etowah',sg(t,90.5,90.8),{sz:12,w:800})+pillA(470,690,'trópico',sg(t,90.0,90.3),{sz:12,w:800,fill:'url(#gOR)'});
  s+=G(270,700,lerp(1,.8,zo),0,G(-270,-700,1,0,w));
  s+=fgLeaves(T);
  return s;
}
/* ---------- M14 · los propios autores avisan ---------- */
function sceneM14(t){
  const T=t;let s=stripesBg(270,560,t*4,26,'#d0d0d0','#c2c2c2')+groundLine(1);
  s+=actor('lenteja',{t0:94.9,path:[[94.9,110]],emo:[[94.9,0,0],[95.4,2,1],[100.5,2,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  const cq=ap(t,95.6,.4);
  if(cq>0)s+=G(330,330,cq,0,checkCard('Ojo',['solo 2 piezas','origen preliminar','0 semillas en Etowah'],[sg(t,98.2,98.6),sg(t,99.7,100.1),sg(t,103.15,103.55)],{w:270}));
  s+=G(380,620,ap(t,102.6,.35)*.4,0,cacaoPodS({open:1}));
  s+=G(380,600,1,0,xMark(sg(t,103.3,103.9),46,K.red,9));
  return s;
}
/* ---------- M15 · nada de tabletas: llegaron en el siglo XIX ---------- */
function sceneM15(t){
  const T=t;let s=groundLine(1);
  const mv=EZ.io(sg(t,106.7,107.4));
  s+=G(lerp(270,150,mv),lerp(560,600,mv),lerp(1,.75,mv)*ap(t,104.7,.35),Math.sin(T*2)*3,chocoBarS({}));
  s+=G(lerp(270,150,mv),lerp(500,540,mv),lerp(1,.75,mv),0,xMark(sg(t,105.6,106.2),100,K.red,14));
  const cq=ap(t,108.9,.4);
  if(cq>0)s+=G(390,530,cq*1.2,0,calS('XIX','SIGLO',{w:120,h:130,sz:44}));
  s+=pillA(390,640,'la tableta llega en el s. XIX',sg(t,109.6,109.9),{sz:12,w:800,fill:'url(#gRP)'});
  s+=actor('garbanzo',{t0:107.2,path:[[107.2,620],[107.8,475]],emo:[[107.2,0,0],[107.8,7,0]],s:.55,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return shake(s,t,106.1,5,.3);
}
/* ---------- M16 · pregunta ---------- */
function sceneM16(t){
  const T=t;let s=qDeco(t,ao(t,110.4,.5),7,6);
  const opts=[['A','El café'],['B','El plátano'],['C','La pimienta'],['D','¿Otro? Dímelo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,110.7+i*.12,.32),sel=i===2?EZ.out(sg(t,112.9,113.1)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,110.7+i*.12,111.05+i*.12)))*120,318+i*52,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  if(t>112.6&&t<113.3){const q=sg(t,112.6,112.85);s+=G(lerp(470,400,EZ.out(q)),lerp(600,430,EZ.out(q)),1,0,P('M0 0 L0 22 L6 16 L11 26 L15 24 L10 14 L18 14Z',`fill:#fff;${OL(1.8)}`));}
  const cq=ap(t,113.4,.3);
  if(cq>0){const msg='¡La pimienta!';const typed=msg.slice(0,Math.floor(msg.length*sg(t,113.6,114.8)));s+=G(270,540,cq,0,inputRow(300,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:110.4,path:[[110.4,86]],emo:[[110.4,0,0],[111.0,9,0],[113.2,3,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:110.55,path:[[110.55,458]],emo:[[110.55,0,0],[111.2,9,1]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- FIN ---------- */
function sceneEND(t){
  const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,116.6,117.3)));
  s+=G(0,0,1,0,Ts(270,352,'El chocolate',30),ao(t,116.7,.3))+G(0,0,1,0,Ts(270,398,'de Etowah',44,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,116.8,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'King et al., PLOS One (2026) · Smithsonian Magazine',10,600)+Tn(270,474,'Archaeology Magazine · ScienceBlog · StudyFinds',10,600)+Tn(270,490,'18/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,116.9,.3));
  s+=groundLine(1);
  const par=[['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]];
  par.forEach(([k,sc],i)=>{const x=600-((t-116.5)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;
}

/* ---------- línea de tiempo ---------- */
SCN=[
  {id:'L1',a:0,draw:sceneL1},
  {id:'M1',a:5.1,draw:sceneM1,in:{type:'whipL',dur:.34}},
  {id:'L2',a:7.65,draw:sceneL2,in:{type:'whipD',dur:.36}},
  {id:'L3',a:14.7,draw:sceneL3,in:{type:'whipD',dur:.36}},
  {id:'M2',a:20.95,draw:sceneM2,in:{type:'whipL',dur:.34}},
  {id:'M3',a:25.65,draw:sceneM3,in:{type:'whipU',dur:.34}},
  {id:'M4',a:30.6,draw:sceneM4,in:{type:'iris',dur:.42,fx:270,fy:700,r0:20}},
  {id:'M5a',a:38.35,draw:sceneM5a,in:{type:'whipL',dur:.32}},
  {id:'M5b',a:40.0,draw:sceneM5b,in:{type:'whipU',dur:.34}},
  {id:'M6',a:47.25,draw:sceneM6,in:{type:'whipL',dur:.34}},
  {id:'M7',a:51.88,draw:sceneM7,in:{type:'glitch',dur:.3}},
  {id:'M8',a:53.15,draw:sceneM8,in:{type:'glitch',dur:.3}},
  {id:'M8b',a:59.7,draw:sceneM8b,in:{type:'zoom',dur:.4,fx:460,fy:520,z:9}},
  {id:'M9',a:60.75,draw:sceneM9,in:{type:'whipL',dur:.34}},
  {id:'M10a',a:68.05,draw:sceneM10a,in:{type:'whipU',dur:.34}},
  {id:'M10b',a:71.3,draw:sceneM10b,in:{type:'zoom',dur:.45,fx:380,fy:620,z:9}},
  {id:'M11',a:79.35,draw:sceneM11,in:{type:'iris',dur:.42,fx:270,fy:480,r0:20}},
  {id:'M12',a:80.95,draw:sceneM12,in:{type:'whipL',dur:.34}},
  {id:'M13',a:89.45,draw:sceneM13,in:{type:'whipD',dur:.36}},
  {id:'M14',a:94.85,draw:sceneM14,in:{type:'whipU',dur:.34}},
  {id:'M15',a:104.5,draw:sceneM15,in:{type:'iris',dur:.42,fx:380,fy:620,r0:20}},
  {id:'M16',a:110.35,draw:sceneM16,in:{type:'whipU',dur:.32}},
  {id:'END',a:116.45,draw:sceneEND,in:{type:'swap',dur:.4}}
];
