/* ===== ESCENAS · flamencos (paisaje + motion graphics intercalados) ===== */
MAPG=window.GEOJ;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const life=(t,a,b,da=.3,db=.25)=>ap(t,a,da)*dis(t,b,db);
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function leader(x1,y1,x2,y2,p,c=K.ink,bend=-24){if(p<=0)return '';const mx=(x1+x2)/2,my=(y1+y2)/2+bend;
  return DR(`M${f1(x1)} ${f1(y1)} Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}`,ST(c,1.8),EZ.out(p))+(p>.9?Ci(x2,y2,3.2,c):'');}
function birds(t,y0=300){let s='';for(let i=0;i<3;i++){const x=((t*22+i*70+100)%700)-80;s+=birdV(x,y0+i*14+Math.sin(t*2+i)*4,1,t,i);}return s;}
function fgLeaves(T,o={}){return G(20,o.y||962,1.15,-20+Math.sin(T*1.2)*1.5,leafS(200,48))+G(92,(o.y||962)+16,1.1,8,leafS(150,36,'#2b7a3e','#1b5a2b'))+
  G(520,(o.y||962)-4,1.15,20+Math.sin(T*1.1+1)*1.5,leafS(210,52))+G(452,(o.y||962)+18,1.1,-6,fernS(170));}

/* ---------- L1 · gancho en la laguna ---------- */
function sceneL1(t){
  const T=t;let s='';
  s+=G(96+t*4,300,1,0,cloudS(96))+G(452+t*2.5,262,1,0,cloudS(68))+G(232+t*3,372,.72,0,cloudS(70));
  s+=birds(t,330);
  s+=G(388,446-t*2.5,1,0,sunS(86));
  s+=G(64,552,1,0,humpS(250,118))+G(300,552,1,0,humpS(330,166))+G(522,552,1,0,humpS(240,100));
  s+=saltBand(-40,580,552,14,3);
  s+=waterBand(-40,580,562,664,T)+sunGlint(388,586,T,72);
  [[52,642,.19,1],[112,632,.16,2],[436,648,.21,3],[494,636,.16,4],[168,652,.15,5]].forEach(([x,y,k,i])=>s+=flamingo({x,y,s:k,T,ph:i*1.3,noShadow:true,flip:i%2===0}));
  s+=bushBand(-40,580,660,60,4)+groundBand(-40,580,705,300);
  s+=reeds(52,716,13,130,1,T)+reeds(494,716,11,118,5,T);
  s+=flamingo({x:300,y:716,s:1.14,T,ph:.4,pose:'stand',pose2:'look',pp:bel(t,.9,2.7)*.85});
  s+=actor('grano',{path:[[0,-70],[1.15,112]],emo:[[0,1,0],[1.15,1,1],[1.93,14,1],[3.36,7,0]],s:.84,pop:false,y:()=>846,face:()=>1,look:()=>1},t);
  s+=fgLeaves(T);
  const push=t<.6?lerp(1.22,1.0,EZ.out(t/.6)):1+.06*EZ.sine(sg(t,.6,4.3));
  s=G(300,650,push,0,G(-300,-650,1,0,s));
  return satG(s,1-EZ.io(sg(t,3.4,3.64)));
}

/* ---------- M1 · huevo → pollo gris ---------- */
function sceneM1(t){
  const T=t;let s=groundLine(1);
  const E2=2.0,C2=2.25,hatch=t>=5.8;
  if(!hatch){const wob=Math.sin(t*24)*bel(t,4.22,5.85)*7*sg(t,4.22,5.1);s+=G(270,GY,E2,wob,eggS(sg(t,4.86,5.32)));}
  else{
    const lt=t-5.8,cp=sg(t,5.82,6.2),sq=EZ.back(cp),shake=bel(t,6.7,7.25)*Math.sin(t*46)*5;
    s+=chick({x:270,y:GY-44-8*sq,s:.001+C2*sq,T,ph:1,r:shake,hr:t>7.5?-6:0});
    if(t>6.7&&t<7.6)for(let i=0;i<9;i++){const q=sg(t,6.72+i*.03,7.4+i*.03);if(q<=0||q>=1)continue;const a=-Math.PI*(.1+.8*hs(i+3)),r=70+80*EZ.out(q);s+=Ci(270+Math.cos(a)*r,600+Math.sin(a)*r+q*q*40,5*(1-q)+1.5,'#a9a9a9');}
    s+=G(270,GY,E2,0,eggBottomS());
    if(lt<1.3){const x=270+lt*230,y=GY-170-520*lt+760*lt*lt,r=lt*560;s+=blurG(G(x,y,E2,r,G(0,40,1,0,eggTopS())),lt<.35?3:0,lt<.35?3:0);}
    if(lt<.4)for(let i=0;i<10;i++){const a=(i/10)*Math.PI*2+.3,q=EZ.out(sg(lt,0,.3)),r1=70+60*q,r2=r1+22*(1-sg(lt,.15,.4));s+=P(`M${f1(270+Math.cos(a)*r1)} ${f1(600+Math.sin(a)*r1)} L${f1(270+Math.cos(a)*r2)} ${f1(600+Math.sin(a)*r2)}`,ST(K.ink,2.6,`opacity:${f2(1-sg(lt,.25,.4))}`));}
  }
  s+=pillA(122,430,'plumón gris',sg(t,6.72,7.02),{sz:13.5})+leader(150,445,226,580,sg(t,6.8,7.12));
  s+=pillA(430,408,'pico recto',sg(t,7.56,7.86),{fill:'url(#gRP)',sz:13.5})+leader(410,424,374,508,sg(t,7.62,7.94),K.ink,-12);
  if(t>7.66)s+=DR('M336 509 L448 511',ST(K.pink,2.8,'stroke-dasharray:6 6'),sg(t,7.66,7.9))+(t>7.9?G(460,503,ap(t,7.9,.25),0,P('M-7 0 L-1 6 L9 -7',ST(K.pink,3.4))):'');
  s+=actor('pipa',{t0:4.32,path:[[4.32,80]],emo:[[4.32,0,0],[4.95,9,0],[5.86,7,1],[6.95,14,0]],s:1.0,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('lenteja',{t0:6.9,path:[[6.9,640],[7.48,470]],emo:[[6.9,1,0],[7.48,16,0]],s:.95,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>tt>7.4?PROP.regla:''},t);
  return s;
}

function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=230+hs(i*5.3+seed)*420,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
/* ---------- M2 · ¿genética? para nada ---------- */
function sceneM2(t){
  const T=t;let s=qDeco(t,ao(t,8.6,.4)*dis(t,9.76,.3),2,5);
  const rise=EZ.out(sg(t,8.5,8.86)),sh=t>9.76&&t<10.12?Math.sin(t*90)*3.4:0;
  s+=blurG(G(270+sh,450+(1-rise)*560,1,0,dnaS(430,t*2.3,{amp:58,n:5.4})),0,(rise<1?(1-rise)*16:0));
  const lp=sg(t,8.76,9.66);
  if(t>8.72&&t<9.9){const x=lerp(190,340,EZ.io(lp)),y=lerp(330,560,EZ.io(lp))+Math.sin(lp*6.3)*26;s+=G(x,y,ap(t,8.72,.25)*dis(t,9.66,.2),-12,lupaS(44));}
  s+=DR('M118 236 L422 668',ST('url(#gRP)',27),EZ.out(sg(t,9.76,9.9)))+DR('M422 236 L118 668',ST('url(#gRP)',27),EZ.out(sg(t,9.86,10.0)));
  s+=groundLine(1);
  s+=actor('garbanzo',{t0:8.6,path:[[8.6,466]],emo:[[8.6,9,1],[9.76,1,0]],s:.98,y:()=>GY,face:()=>-1,look:()=>-1,
    mod:(p,tt)=>{if(tt>9.76&&tt<10.6){p.rot+=Math.sin((tt-9.76)*24)*10*(1-sg(tt,9.76,10.6));p.eye.t='closed';p.mouth={t:'flat',w:1.1};}}},t);
  s+=actor('lenteja',{t0:8.55,path:[[8.55,74]],emo:[[8.55,10,0],[9.8,7,0]],s:.95,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}

/* ---------- M3 · lo que come (plato con "sopa de laguna") ---------- */
function plateSoup(T){let s=El(0,0,92,24,'#fff',OL(2.4))+El(0,-1,66,15,'url(#gWA)');
  for(let i=0;i<6;i++){const a=T*1.4+i*1.05,x=Math.cos(a)*44,y=Math.sin(a)*8;s+=G(x,y,.62,Math.cos(a)>0?180:0,artemiaMini(T,i));}
  s+=P('M-40 -4 q6 -3 12 0 M14 2 q6 -3 12 0',ST('#fff',1.4,'opacity:.7'));return s;}
function sceneM3(t){
  const T=t;let s=groundLine(1);
  s+=Rc(126,676,350,14,K.cream,5,OL(2.2))+P('M150 690 L150 735 M452 690 L452 735',ST(K.ink,2.6));
  s+=G(300,668,1.45,0,plateSoup(T));
  s+=P('M150 664 L150 618 M141 618 L141 634 Q141 643 150 643 Q159 643 159 634 L159 618',ST(K.ink,2.4))+P('M452 616 Q466 630 459 650 L459 664 M452 616 L452 664',ST(K.ink,2.4));
  s+=chick({x:76,y:GY,s:1.5,T,ph:2,hr:-6});
  s+=G(76+30,617,1.5,0,P('M-16 0 L16 0 L0 22Z',`fill:#fff;${OL(1.6)}`));
  const q=ap(t,11.43,.35);if(q>0)s+=G(300,540+Math.sin(T*5)*4,q,Math.sin(T*4)*6,Ts(0,0,'?',96,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}));
  s+=sparkA(370,500,t-11.55,11,K.orange,.7)+sparkA(226,540,t-11.65,9,K.pink,.7);
  return s;
}

/* ---------- L2 · laguna salada: cabeza al revés y filtrado ---------- */
const PART=[...Array(26)].map((_,i)=>({x:20+hs(i*3.3)*500,y:650+hs(i*7.7)*130,k:i%3===0?'alga':'art',ph:hs(i)*6}));
function sceneL2(t){
  const T=t;let s='';
  s+=G(110+t*3,300,1,0,cloudS(84))+G(430+t*2,252,.8,0,cloudS(64))+birds(t,330);
  s+=G(430,420,1,0,sunS(64));
  s+=G(64,606,1,0,humpS(240,110))+G(300,606,1,0,humpS(300,142))+G(520,606,1,0,humpS(220,92));
  s+=saltBand(-40,580,606,10,7);
  s+=Rc(-40,614,620,28,'#4654ee')+waterBand(-40,580,616,640,T,{fill:'#4654ee',rows:2});
  s+=Rc(-40,640,620,152,'url(#gUW)');
  for(let i=0;i<5;i++){const x=40+i*120+Math.sin(T*.6+i)*10;s+=P(`M${f1(x)} 640 L${f1(x+46)} 640 L${f1(x+12)} 792 L${f1(x-32)} 792Z`,'fill:#fff;opacity:.07');}
  s+=mudBand(-40,580,790,190);
  const head=[392,778],suck=sg(t,14.64,16.6);
  PART.forEach((p,i)=>{let x=p.x+Math.sin(T*.8+p.ph)*14,y=p.y+Math.cos(T*1.1+p.ph)*6;
    const lag=hs(i+9)*.5,q=EZ.in(sg(suck,lag,lag+.5));
    if(q>=1)return;x=lerp(x,head[0],q);y=lerp(y,head[1],q);
    s+=G(x,y,(1-q*.6)*(p.k==='alga'?1.1:1.15),p.k==='art'?(Math.sin(T+p.ph)>0?0:180):0,p.k==='alga'?algaS(T,i):artemiaMini(T,i));});
  const pp=EZ.io(sg(t,12.4,12.98));
  s+=flamingo({x:236,y:796,s:1.3,T,ph:.7,pose:'stand',pose2:'down',pp,legs:'two'});
  s+=Rc(-40,640,620,152,'#2a37d7',0,'opacity:.2');
  s+=P(`M-40 640 ${[...Array(15)].map((_,i)=>`Q${-20+i*44} ${f1(636+Math.sin(T*2+i)*2)} ${f1(4+i*44)} 640`).join(' ')}`,ST('#a7b0ff',2.4));
  if(suck>0&&suck<1)for(let i=0;i<4;i++){const q=((T*1.6+i/4)%1);s+=P(`M${f1(head[0]-6)} ${f1(head[1]-8)} q${f1(-10-q*30)} ${f1(-6-q*10)} ${f1(-22-q*40)} ${f1(-4)}`,ST('#fff',2,`opacity:${f2((1-q)*.8)}`))+P(`M${f1(head[0]+6)} ${f1(head[1]-8)} q${f1(10+q*30)} ${f1(-6-q*10)} ${f1(22+q*40)} ${f1(-4)}`,ST('#fff',2,`opacity:${f2((1-q)*.8)}`));}
  // indicador "al revés"
  const ar=sg(t,13.31,13.75);
  if(ar>0){s+=DR(`M${head[0]-34} ${head[1]-26} A32 32 0 1 1 ${head[0]+28} ${head[1]-34}`,ST(K.ink,2.4),EZ.out(ar)*dis(t,14.5))+(ar>.9?G(head[0]+28,head[1]-34,dis(t,14.5),40,P('M-7 -4 L0 3 L7 -5',ST(K.ink,2.4))):'');
    s+=pillA(436,700,'¡al revés!',ar*dis(t,14.5),{fill:'url(#gRP)'});}
  s+=pillA(110,668,'algas',sg(t,15.06,15.34)*dis(t,16.9))+pillA(452,668,'gambitas',sg(t,15.86,16.14)*dis(t,16.9))+pillA(452,694,'≈ 1 cm',sg(t,16.22,16.5)*dis(t,16.9),{sz:11,fill:'#fff',tc:K.ink});
  // lupa sobre una artemia
  const lz=ap(t,17.1,.35)*(t<18.2?1:0);
  if(lz>0){const cx=150,cy=454,r=92;
    const inner=clipG(Rc(cx-r,cy-r,2*r,2*r,'url(#gUW)')+G(cx+Math.sin(T*2)*8,cy+Math.cos(T*2.4)*5,2.4,0,artemiaS(T,true)),`<circle cx="${cx}" cy="${cy}" r="${r}"/>`);
    s+=leader(cx+62,cy+68,356,744,sg(t,17.1,17.4),'#fff',10);
    s+=G(cx,cy,lz,0,G(-cx,-cy,1,0,inner+Ci(cx,cy,r,'none',`stroke:#fff;stroke-width:7`)+Ci(cx,cy,r,'none',OL(2.4))));
    s+=pillA(cx,cy+r+22,'artemia',sg(t,17.25,17.5),{fill:'url(#gRP)'});}
  s+=actor('pipa',{t0:13.4,path:[[13.4,620],[14.4,478]],emo:[[13.4,17,0],[15.8,16,0],[17.16,7,1]],s:.46,pop:false,y:tt=>748+Math.sin(tt*2.2)*6,face:()=>-1,look:()=>-1,acc:()=>SNORKEL,mod:(p,tt)=>{p.rot+=6*Math.sin(tt*3);}},t);
  return s;
}

/* ---------- M4 · carotenoides = zanahoria ---------- */
function sceneM4(t){
  const T=t;let s='';
  const mv=EZ.io(sg(t,17.75,18.3)),left=EZ.io(sg(t,20.34,20.9));
  const ax=lerp(lerp(150,270,mv),150,left),ay=lerp(454,470,mv),ak=lerp(lerp(2.4,2.8,mv),1.9,left);
  const tint=sg(t,18.75,19.6);
  let art=artemiaS(T,true,mixc('#ff8a5c','#ff6a1a',tint),mixc('#f2453d','#e0420f',tint));
  for(let i=0;i<9;i++){const q=ap(t,18.75+i*.06,.25);if(q>0)art+=Ci(-22+i*5.4,(i%2?-3:3),2.4*q,'#ffd23f',OL(.8,'#c4400c'));}
  s+=G(ax,ay+Math.sin(T*2)*6,ak,0,art);
  s+=G(270,322,lerp(1,.7,left),0,caroChain(sg(t,19.3,20.1),T),dis(t,20.4,.3)*cl(sg(t,19.25,19.4)*3));
  s+=pillA(270,594,'carotenoides',sg(t,19.36,19.66)*dis(t,20.3),{fill:'url(#gOR)'});
  const eq=ap(t,21.24,.3);if(eq>0)s+=G(270,470,eq,0,Ci(0,0,24,K.ink)+Rc(-11,-7,22,4.6,'#fff',2)+Rc(-11,2.4,22,4.6,'#fff',2));
  const cq=ap(t,21.7,.35);if(cq>0)s+=G(398,474+Math.sin(T*2.4)*5,2.3*cq,-24,carrotS());
  if(t>21.9)for(let i=0;i<4;i++){const q=((t-21.9)*1.1+i/4)%1;s+=G(352+i*14,500+q*90,1,0,dropS(4.5,K.orange),(1-q)*dis(t,22.85));}
  s+=pillA(398,594,'mismo pigmento',sg(t,21.8,22.1),{sz:11.5,fill:'url(#gOR)'});
  s+=actor('grano',{t0:21.55,path:[[21.55,620],[22.1,470]],emo:[[21.55,1,0],[22.1,3,0]],s:.95,pop:false,y:()=>GY+6,face:()=>-1,look:()=>-1},t);
  return s;
}

/* ---------- M5 · rayos X: hígado → plumas, piel, patas ---------- */
function sceneM5(t){
  const T=t;let s=groundLine(1);
  const fx=196,fy=GY,fs=1.26,X=(lx,ly)=>[fx+lx*fs,fy+ly*fs];
  const xp={f:EZ.io(sg(t,25.27,25.95)),s:EZ.io(sg(t,26.04,26.6)),l:EZ.io(sg(t,26.93,27.35))};
  const pulse=1+.12*bel(t,23.32,23.8)+.06*Math.sin(T*8)*sg(t,23.3,24.3)*(t<24.6?1:0);
  const organs=Ci(14,-150,14,'#ffe2cf',OL(2))+G(-24,-140,pulse,0,El(0,0,20,12,'#b2263b',OL(2))+P('M-10 -3 q6 -4 12 0',ST('#fff',1.6,'opacity:.5')));
  s+=flamingo({x:fx,y:fy,s:fs,T,ph:.3,xray:true,xp,organs,still:true});
  const [sx,sy]=X(14,-150),[lx,ly]=X(-24,-140);
  const q1=sg(t,23.87,24.45);
  if(q1>0&&q1<1)for(let i=0;i<5;i++){const q=cl(q1*1.6-i*.15);if(q>0&&q<1)s+=Ci(lerp(sx,lx,q),lerp(sy,ly,q)-Math.sin(Math.PI*q)*14,4,K.orange,OL(1));}
  if(t>24.3&&t<24.9)s+=G(lx,ly,ap(t,24.3,.2)*dis(t,24.75,.15),t*300,spark4(14,K.yellow));
  const dests=[[X(-26,-176),25.27],[X(64,-262),26.04],[X(4,-58),26.93]];
  dests.forEach(([[dx,dy],td],k)=>{const q=sg(t,td-.6,td);if(q>0&&q<1)for(let i=0;i<4;i++){const qq=cl(q*1.5-i*.16);if(qq>0&&qq<1)s+=Ci(lerp(lx,dx,qq),lerp(ly,dy,qq)-Math.sin(Math.PI*qq)*18,4,K.pink,OL(1));}
    if(t>td&&t<td+.6)s+=G(dx,dy,ap(t,td,.2)*dis(t,td+.4,.2),0,spark4(10,K.pink));});
  s+=pillA(92,452,'hígado',sg(t,23.32,23.6)*dis(t,25.1))+leader(110,466,lx-4,ly-6,sg(t,23.4,23.7)*dis(t,25.1),K.ink,-10);
  const card=ap(t,24.7,.35);if(card>0)s+=G(412,262,card,0,G(0,0,1,0,checkCard('¿A dónde va?',['plumas','piel','patas'],[sg(t,25.27,25.5),sg(t,26.04,26.27),sg(t,26.93,27.16)],{w:186})));
  s+=actor('lenteja',{t0:23.0,path:[[23.0,610],[23.6,462]],emo:[[23.0,1,0],[23.6,16,0],[25.3,2,0]],s:.95,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>tt>23.6?PROP.puntero:'',mod:(p,tt)=>{if(tt>23.6)p.arms.r=[112+6*Math.sin(tt*4),-30];}},t);
  return s;
}

/* ---------- L3 · 2-3 años hasta ser rosa ---------- */
function sceneL3(t){
  const T=t;let s='';
  const ang=lerp(-160,-20,sg(t,27.5,31.4))*Math.PI/180;
  s+=G(270+Math.cos(ang)*230,640+Math.sin(ang)*330,1,0,sunS(60));
  s+=G(60+t*5,330,.9,0,cloudS(80))+G(470,288,.7,0,cloudS(60));
  s+=G(80,600,1,0,humpS(250,120))+G(320,600,1,0,humpS(320,150))+G(540,600,1,0,humpS(220,90));
  s+=saltBand(-40,580,600,14,9)+waterBand(-40,580,612,700,T);
  s+=bushBand(-40,580,700,50,6)+groundBand(-40,580,740,300);
  s+=reeds(40,750,10,110,3,T)+reeds(505,750,9,100,8,T);
  const steps=[27.4,28.61,28.93],stage=steps.filter(x=>t>=x).length-1,st0=steps[Math.max(0,stage)];
  const SC=[.7,.88,1.0],PK=[.12,.5,.82];
  const pop=EZ.back(sg(t,st0,st0+.28)),prevS=SC[Math.max(0,stage-1)],k=lerp(prevS,SC[stage],pop);
  let pk=lerp(PK[Math.max(0,stage-1)],PK[stage],sg(t,st0,st0+.3));pk=lerp(pk,1,EZ.io(sg(t,30.0,30.5)));
  s+=flamingo({x:270,y:772,s:k*1.08,T,ph:.9,pk,pose:'stand',pose2:'proud',pp:sg(t,30.1,30.5)});
  if(t>30.16)for(let i=0;i<6;i++){const q=((t-30.16)*.9+i/6)%1;s+=G(200+hs(i)*150,470+hs(i+3)*200,Math.sin(Math.PI*q),q*120,spark4(9,i%2?K.pink:K.yellow));}
  // calendario que pasa hojas
  const yr=Math.max(0,stage)+1,cx=446,cy=338;
  s+=G(cx,cy,ap(t,27.7,.3),0,calS(String(yr),'AÑO'));
  steps.slice(1).forEach((ts,i)=>{const q=sg(t,ts,ts+.45);if(q>0&&q<1)s+=G(cx+q*120,cy-40-140*q+260*q*q,1,-q*120,calS(String(i+1),'AÑO'),1-q);});
  s+=fgLeaves(T,{y:1000});
  s+=actor('grano',{path:[[27.4,96]],emo:[[27.4,13,0],[29.6,7,0],[30.5,11,0]],s:.84,pop:false,y:()=>872,face:()=>1,look:()=>1},t);
  s+=ffOverlay(t,27.62,29.45);
  return s;
}

function ffOverlay(t,a,b){if(t<a||t>b)return '';const o=cl(sg(t,a,a+.1)*3)*(1-sg(t,b-.25,b));let s='';
  const blink=Math.floor(t*3)%2===0;
  s+=G(36,250,1,0,P('M0 -9 L10 0 L0 9Z M11 -9 L21 0 L11 9Z',`fill:#fff;${OL(1.2)}`)+Tn(30,5,'AVANZANDO',13,800,{a:'start',fill:'#fff',ls:.12,x:'paint-order:stroke;stroke:#141212;stroke-width:2.6px'}),o*(blink?1:.75));
  for(let i=0;i<4;i++){const y=(hs(Math.floor(t*12)+i*7)*900),h=2+hs(i+Math.floor(t*12))*6;s+=Rc(0,y,540,h,i%2?'#ffffff':'#141212',0,`opacity:${f2(.18*o*(t<a+.6?1:.35))}`);}
  return s;}
/* ---------- M6 · sin artemias se destiñe ---------- */
function sceneM6(t){
  const T=t;let s=groundLine(1);
  const pale=EZ.io(sg(t,32.45,33.25));
  s+=flamingo({x:300,y:GY,s:1.16,T,ph:1.6,pk:1,pale});
  if(t>32.5&&t<33.8)for(let i=0;i<4;i++){const q=sg(t,32.5+i*.18,33.0+i*.18);if(q<=0)continue;const x=250+i*28,y0=600;
    s+=q<1?G(x,lerp(y0,GY-4,EZ.in2(q)),1,0,dropS(5,'#ff6f9b')):El(x,GY-1,9*(1-sg(t,33.1+i*.18,33.6+i*.18)*.5),2.4,'#ff8fb1');}
  const nq=ap(t,31.48,.3);if(nq>0)s+=G(112,452,nq,0,Ci(0,0,44,'#fff',OL(2.4))+G(0,0,1.1,0,artemiaS(T))+P('M-30 -30 L30 30',ST(K.pink,6))+Ci(0,0,44,'none',`stroke:${K.pink};stroke-width:6`));
  s+=pillA(112,520,'sin artemias',sg(t,31.6,31.9));
  const mq=ap(t,32.2,.3);if(mq>0)s+=G(476,GY-8,mq,0,meterS(lerp(.95,.16,pale))+G(0,-188,1,0,P('M-6 0 L0 8 L6 0',ST(K.ink,2.2))));
  s+=actor('pipa',{t0:31.3,path:[[31.3,-60],[31.9,74]],emo:[[31.3,1,0],[32.6,5,0]],s:.95,pop:false,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}

/* ---------- M7 · pero aquí viene lo mejor ---------- */
function sceneM7(t){
  const T=t;let s=raysBg(270,560,t*14,20,'#d3d3d3',ao(t,33.62,.3));
  s+=groundLine(1);
  s+=actor('grano',{t0:33.75,path:[[33.75,270]],emo:[[33.75,0,0],[34.3,16,1]],s:1.25,y:()=>GY,face:()=>1},t);
  s+=sparkA(180,520,t-34.5,12,K.pink,.8)+sparkA(360,500,t-34.6,10,K.yellow,.8)+sparkA(330,600,t-34.75,8,K.orange,.8);
  return s;
}

/* ---------- L4 · colonia: leche roja de buche ---------- */
function sceneL4(t){
  const T=t;let s='';
  s+=G(104,384,1,0,sunS(56))+G(330+t*3,300,1,0,cloudS(90))+G(500,350,.7,0,cloudS(60))+birds(t,280);
  s+=G(300,590,1,0,humpS(300,130))+G(510,590,1,0,humpS(260,110));
  s+=saltBand(-40,580,590,10,11)+waterBand(-40,580,598,664,T,{rows:3});
  [[70,654,.42],[452,650,.4]].forEach(([x,y,k],i)=>s+=G(x,y,k,0,nestS())+flamingo({x:x+(i?-6:6),y:y-30*k,s:k*.62,T,ph:3+i,flip:!!i,noShadow:true}));
  s+=P('M-40 668 Q120 656 270 664 T580 662 L580 990 L-40 990Z','fill:#d8a36f')+P('M-40 668 Q120 656 270 664 T580 662',ST(K.ink,1.6));
  for(let i=0;i<9;i++)s+=P(`M${20+i*62} ${700+hs(i)*90} q6 -3 12 0`,ST('#a86b3d',2,'opacity:.6'));
  const drain=EZ.io(sg(t,39.45,40.5)),feed=EZ.io(sg(t,35.5,35.95))*(1-EZ.io(sg(t,39.3,39.75)));
  s+=G(272,GY,1,0,nestS(128,50));
  s+=chick({x:300,y:GY-50,s:.92,T,ph:4,flip:true,hr:feed>.5?-12:0});
  s+=flamingo({x:156,y:GY+4,s:1.0,T,ph:5,pose:'stand',pose2:'feed2',pp:feed,pk:1,pale:drain*.85,legs:'two'});
  s+=flamingo({x:404,y:GY+6,s:.96,T,ph:6,flip:true,pk:1,pale:drain*.85});
  if(feed>.85&&t>36.7)for(let i=0;i<4;i++){const q=((T*1.25+i/4)%1);s+=G(lerp(266,258,q),lerp(632,668,EZ.in2(q)),1,0,dropS(5,'#e2264a'),(1-sg(q,.8,1))*cl(feed));}
  if(feed>.85&&t>36.7)s+=P('M264 628 Q262 640 260 650',ST('#e2264a',3.4,'opacity:.85'));
  s+=pillA(146,520,'padre',sg(t,35.23,35.5)*dis(t,36.7),{sz:11.5})+pillA(412,520,'madre',sg(t,35.3,35.57)*dis(t,36.7),{sz:11.5});
  s+=pillA(118,470,'leche de buche',sg(t,36.92,37.22)*dis(t,39.3),{fill:'url(#gRP)'})+leader(136,484,198,566,sg(t,37.0,37.3)*dis(t,39.3),K.ink,-8);
  s+=ringA(202,570,20,16,sg(t,38.48,38.85)*dis(t,39.3),K.pink,3.2);
  if(t>39.45){const q=ap(t,39.5,.3)*dis(t,41.0);s+=pillA(156,476,'– color',q,{sz:12})+pillA(404,476,'– color',q,{sz:12});
    s+=G(156,502,q,0,P('M0 0 L0 14 M-5 9 L0 14 L5 9',ST(K.ink,2)))+G(404,502,q,0,P('M0 0 L0 14 M-5 9 L0 14 L5 9',ST(K.ink,2)));}
  s+=actor('garbanzo',{t0:36.0,path:[[36.0,620],[36.7,476]],emo:[[36.0,1,0],[36.7,9,0],[39.6,8,1]],s:.82,pop:false,y:()=>884,face:()=>-1,look:()=>-1,prop:tt=>tt>36.7&&tt<39.5?PROP.prismaticos:'',mod:(p,tt)=>{if(tt>36.7&&tt<39.5)p.arms.r=[150,-95];}},t);
  s+=actor('pipa',{t0:39.0,path:[[39.0,-60],[39.5,70]],emo:[[39.0,1,0],[39.6,8,0]],s:.82,pop:false,y:()=>884,face:()=>1,look:()=>1},t);
  return s;
}

/* ---------- M8 · Doñana: se maquillan ---------- */
function docS(t){
  const W2=300,H2=330;let s=Rc(-W2/2+5,-H2/2+6,W2,H2,K.ink,12)+Rc(-W2/2,-H2/2,W2,H2,'#fbf8f2',12,OL(2.2));
  s+=Rc(-W2/2,-H2/2,W2,34,K.red,12)+Rc(-W2/2,-H2/2+20,W2,14,K.red)+Tn(0,-H2/2+22,'ESTACIÓN BIOLÓGICA DE DOÑANA',10.5,700,{fill:'#fff',ls:.08});
  s+=Ts(0,-H2/2+72,'¿Por qué son tan rosas?',24);
  for(let i=0;i<5;i++)s+=Rc(-118,-H2/2+92+i*16,i===4?150:236,6,'#d7d0c4',3);
  const typed='Conclusión: se maquillan.',n=Math.floor(typed.length*sg(t,42.35,43.3));
  s+=Tn(-118,-H2/2+200,typed.slice(0,n),15,700,{a:'start'});
  if(t>42.3&&t<44)s+=Rc(-118+mw(typed.slice(0,n),fSans(15,700))+2,-H2/2+187,2,17,K.pink,0,`opacity:${Math.floor(t*4)%2?1:0}`);
  s+=Tn(0,H2/2-40,'Amat et al. · 2011',12,600,{fill:'#6b6b6b'})+Tn(0,H2/2-22,'Behavioral Ecology and Sociobiology',10.5,500,{fill:'#8a8a8a'});
  return s;}
function sceneM8(t){
  const T=t;let s=groundLine(1);
  const dIn=EZ.out(sg(t,41.05,41.45)),dOut=EZ.in(sg(t,44.15,44.5));
  if(t<44.6)s+=blurG(G(292,478+(1-dIn)*620+dOut*640,1.12,(1-dIn)*8,docS(t)),0,(Math.sin(Math.PI*sg(t,41.05,41.45))+Math.sin(Math.PI*sg(t,44.15,44.5)))*10);
  s+=stampA(326,602+dOut*640,t-43.35,'COMPROBADO',{r:-7,sz:27});
  // parte B: el flamenco se maquilla
  const fin=EZ.out(sg(t,44.3,44.75));
  if(t>44.25){
    const pre=EZ.io(sg(t,44.7,45.1)),rub=t>45.1&&t<47.6?.5+.5*Math.sin((t-45.1)*6):0,back=EZ.io(sg(t,47.6,48.0));
    const pp=cl(pre*(.82+.18*rub)*(1-back));
    const bright=EZ.io(sg(t,46.0,47.8));
    s+=flamingo({x:256+(1-fin)*380,y:GY,s:1.24,T,ph:2.2,pose:'stand',pose2:'preen',pp,pk:1,pale:lerp(.62,0,bright),glow:t>45.6&&t<48.2,still:pp>.2});
    if(bright>.2)for(let i=0;i<6;i++){const q=((T*.9+i/6)%1);s+=G(180+hs(i+11)*200,470+hs(i+5)*180,Math.sin(Math.PI*q),q*90,spark4(9,i%2?K.pink:'#fff'));}
    const gx=256-84*1.24,gy=GY-148*1.24;
    s+=pillA(118,452,'glándula de la cola',sg(t,47.18,47.46)*dis(t,48.5),{sz:11.5})+leader(132,466,gx-2,gy-4,sg(t,47.25,47.55)*dis(t,48.5),K.ink,-6);
    s+=pillA(394,452,'aceite rosa',sg(t,45.67,45.95)*dis(t,48.5),{fill:'url(#gRP)'});
  }
  s+=actor('lenteja',{t0:41.3,t1:44.6,path:[[41.3,-70],[41.9,64]],emo:[[41.3,1,0],[41.9,16,1],[43.35,3,0]],s:.92,pop:false,exit:44.2,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:44.9,path:[[44.9,640],[45.5,470]],emo:[[44.9,1,0],[46.2,14,0]],s:.95,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>PROP.espejo,mod:(p,tt)=>{p.arms.r=[118,-24];}},t);
  return s;
}

/* ---------- M10 · mapa: Fuente de Piedra (Málaga) ---------- */
function sceneM10(t){
  const T=t,M=MAPG;let s='';
  const zin=EZ.back2(sg(t,48.55,48.95)),zoom=EZ.io(sg(t,49.95,50.6));
  const k=lerp(1.0,1.75,zoom),[px,py]=M.fp1,ox=55,oy=318;
  const cx=lerp(270,270,zoom),cy=lerp(470,500,zoom);
  const fx=lerp(ox+215,ox+px,zoom),fy=lerp(oy+180,oy+py,zoom);
  let map=P(M.morocco,`fill:#e2e2e2;${OL(2.2)}`)+P(M.portugal,`fill:#ececec;${OL(2.2)}`)+P(M.spain,`fill:#fbfbfb;${OL(2.6)}`);
  map+=P(M.andal1,`fill:${mixc('#fbfbfb','#ffd2de',sg(t,49.9,50.3))};${OL(1.4,'rgba(20,18,18,.55)')}`);
  for(let i=0;i<4;i++)map+=Ci(380+i*9,120-i*6,2.2+i*.6,'none',OL(1.4));
  const pin=sg(t,50.55,50.95),pd=EZ.out(pin);
  if(t>50.5){map+=G(px,py,1/k,0,G(0,0,ap(t,50.7,.35)*1.25,t*30,burstS(34,16)));map+=G(px,py-(1-pd)*90,1/k,0,pinS(),cl(pin*4));}
  s+=G(cx,cy,zin*k,0,G(-fx,-fy,1,0,G(ox,oy,1,0,map)));
  s+=Rc(-20,-20,580,300,lgrad([[0,K.bg,1],[.62,K.bg,1],[1,K.bg,0]],0,0,0,1));
  const lp=sg(t,49.3,50.4);if(t>49.25&&t<50.6)s+=G(lerp(150,300,EZ.io(lp)),lerp(380,560,EZ.io(lp))+Math.sin(lp*6)*20,ap(t,49.25,.25)*dis(t,50.35,.2),-10,lupaS(32));
  const pxs=cx+(px-fx+ox)*zin*k,pys=cy+(py-fy+oy)*zin*k;
  s+=pillA(pxs,pys-78,'Fuente de Piedra',sg(t,50.8,51.1),{sz:13,w:600});
  s+=pillA(pxs+70,pys+34,'Málaga',sg(t,51.59,51.85),{sz:11.5,fill:'url(#gRP)'})+leader(pxs+52,pys+30,pxs+6,pys+6,sg(t,51.62,51.9),K.ink,6);
  return s;
}

/* ---------- L5 · miles de parejas ---------- */
const FLOCK=[...Array(70)].map((_,i)=>({x:20+((i*73)%500)+hs(i)*20,y:640+Math.floor(i/10)*20+hs(i+1)*10,k:.12+Math.floor(i/10)*.018,d:hs(i*5.1)}));
function sceneL5(t){
  const T=t;let s='';
  s+=G(410,420,1,0,sunS(80))+G(120+t*3,320,1,0,cloudS(88))+G(450,270,.7,0,cloudS(58))+birds(t,290);
  s+=G(70,600,1,0,humpS(240,110))+G(290,600,1,0,humpS(320,150))+G(510,600,1,0,humpS(260,104));
  s+=saltBand(-40,580,600,12,13)+waterBand(-40,580,610,800,T,{rows:6})+sunGlint(410,630,T,80);
  const dens=EZ.io(sg(t,52.2,53.5));
  FLOCK.forEach((f,i)=>{if(f.d>dens)return;const q=ap(t,52.2+f.d*1.3,.3);s+=flamingo({x:f.x,y:f.y,s:f.k*q,T,ph:i,noShadow:true,flip:i%2===0,pose:i%7===0?'down':'stand',pp:i%7===0?1:0});});
  if(t>52.9)for(let i=0;i<6;i++){const q=sg(t,52.95+i*.08,53.7+i*.08);if(q>0&&q<1){const f=FLOCK[i*9];s+=G(f.x+8,f.y-46-q*26,EZ.back(sg(q,0,.3))*(1-sg(q,.7,1)),0,P(heartPath(0,0,7),`fill:${K.pink}`));}}
  s+=saltBand(-40,580,800,170,21)+reeds(40,814,12,120,4,T)+reeds(500,814,10,110,9,T);
  s+=actor('grano',{path:[[51.95,94]],emo:[[51.95,1,0],[52.5,16,0]],s:.84,pop:false,y:()=>900,face:()=>1,look:()=>1,prop:tt=>tt<52.6?PROP.prismaticos:'',mod:(p,tt)=>{if(tt<52.6)p.arms.r=[150,-95];}},t);
  return s;
}

/* ---------- M11 · en resumen: eres lo que comes ---------- */
function sceneM11(t){
  const T=t;let s=Ci(290,600,175*ao(t,53.95,.5),'#ffffff','opacity:.55')+groundLine(1);
  const eat=sg(t,55.0,55.3);
  if(eat<1){const q=EZ.in2(eat);s+=G(lerp(120,330,q),lerp(520,560,q),lerp(1.5,.3,q),0,artemiaS(T,true),ap(t,54.15,.3));}
  s+=flamingo({x:290,y:GY,s:.98,T,ph:2.7,pk:1,pose:'stand',pose2:'proud',pp:sg(t,55.3,55.6)});
  if(t>55.26)for(let i=0;i<6;i++){const q=((t-55.26)*.9+i/6)%1;s+=G(250+hs(i+21)*140,430+hs(i+7)*160,Math.sin(Math.PI*q),q*90,spark4(9,i%2?K.pink:K.yellow));}
  s+=pillA(420,500,'hecho de gambitas',sg(t,55.45,55.75)*dis(t,56.2),{sz:12,fill:'url(#gRP)'})+leader(400,514,346,548,sg(t,55.5,55.8)*dis(t,56.2),K.ink,-10);
  if(t>55.3&&t<56.2){const q=sg(t,55.3,56.0);s+=Ci(330,560,30+90*EZ.out(q),'none',`stroke:${K.pink};stroke-width:${f1(5*(1-q))};opacity:${f2(1-q)}`);}
  s+=stampA(270,560,t-56.27,'LITERALMENTE',{r:-6,sz:24});
  const L=[['grano',58,11,0],['pipa',148,3,0],['lenteja',432,3,1],['garbanzo',500,16,0]];
  L.forEach(([k,x,ei,v],i)=>{const lt=t-56.3-i*.1;if(lt<0)return;const rise=EZ.back(sg(lt,0,.4));s+=G(x,GY,rise,0,G(-x,-GY,1,0,pose(k,ei,v,lt,x,GY,.78,i>=2)));});
  return s;
}

/* ---------- M12 · ¿qué animal? te leo en comentarios ---------- */
function sceneM12(t){
  const T=t;let s=qDeco(t,ao(t,57.6,.5),7,6);
  const opts=[['A','El pulpo'],['B','El ajolote'],['C','El perezoso'],['D','¿Otro? Dímelo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,57.95+i*.12,.32),sel=i===1?EZ.out(sg(t,58.9,59.1)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,57.95+i*.12,58.3+i*.12)))*120,330+i*54,1,0,optionRow(330,l,txt,sel),cl(q*2));});
  if(t>58.75&&t<59.3){const q=sg(t,58.75,58.95);s+=G(lerp(470,390,EZ.out(q)),lerp(560,396,EZ.out(q)),1,0,P('M0 0 L0 22 L6 16 L11 26 L15 24 L10 14 L18 14Z',`fill:#fff;${OL(1.8)}`));}
  const cq=ap(t,59.15,.3);
  if(cq>0){const typed='¡El ajolote!'.slice(0,Math.floor(12*sg(t,59.3,59.85)));s+=G(270,568,cq,0,inputRow(330,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:57.6,path:[[57.6,86]],emo:[[57.6,0,0],[58.2,9,0],[59.1,3,0]],s:.9,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:57.8,path:[[57.8,458]],emo:[[57.8,0,0],[58.4,9,1]],s:.9,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}

/* ---------- FIN · tarjeta de cierre ---------- */
function sceneEND(t){
  const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,60.0,60.7)));
  s+=G(0,0,1,0,Ts(270,352,'Por qué los flamencos',30),ao(t,60.35,.3))+G(0,0,1,0,Ts(270,398,'son rosas',44,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,60.45,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Amat et al. 2011 · National Geographic · BBC Wildlife',10.5,600)+Tn(270,474,'12/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,60.6,.3));
  s+=groundLine(1);
  const par=[['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]];
  par.forEach(([k,sc],i)=>{const x=600-((t-59.9)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  const cx=600-((t-59.9)*70+4*110)%760;s+=chick({x:cx,y:GY,s:.8,T,flip:true,ph:3});
  return s;
}

/* ---------- línea de tiempo ---------- */
SCN=[
  {id:'L1',a:0,draw:sceneL1},
  {id:'M1',a:3.92,draw:sceneM1,in:{type:'whipU',dur:.36}},
  {id:'M2',a:8.46,draw:sceneM2,in:{type:'whipL',dur:.32}},
  {id:'M3',a:10.6,draw:sceneM3,in:{type:'whipU',dur:.32}},
  {id:'L2',a:11.98,draw:sceneL2,in:{type:'zoom',dur:.5,fx:300,fy:667,z:14}},
  {id:'M4',a:17.72,draw:sceneM4,in:{type:'iris',dur:.42,fx:150,fy:454,r0:92}},
  {id:'M5',a:22.84,draw:sceneM5,in:{type:'whipL',dur:.34}},
  {id:'L3',a:27.44,draw:sceneL3,in:{type:'whipU',dur:.36}},
  {id:'M6',a:31.12,draw:sceneM6,in:{type:'whipD',dur:.34}},
  {id:'M7',a:33.58,draw:sceneM7,in:{type:'iris',dur:.32,fx:270,fy:480,r0:6}},
  {id:'L4',a:35.0,draw:sceneL4,in:{type:'whipU',dur:.34}},
  {id:'M8',a:40.94,draw:sceneM8,in:{type:'whipL',dur:.34}},
  {id:'M10',a:48.48,draw:sceneM10,in:{type:'whipL',dur:.34}},
  {id:'L5',a:51.98,draw:sceneL5,in:{type:'iris',dur:.42,fx:252,fy:520,r0:12}},
  {id:'M11',a:53.9,draw:sceneM11,in:{type:'whipD',dur:.34}},
  {id:'M12',a:57.44,draw:sceneM12,in:{type:'whipL',dur:.32}},
  {id:'END',a:59.95,draw:sceneEND,in:{type:'swap',dur:.4}}
];

/* ---------- titulares sincronizados con la voz ---------- */
HL=[
 {t0:.3,t1:3.0,lines:[{txt:'uno de los pájaros',sz:30,t:[.3,.42,.54,.9]},{txt:'más *rosas*',sz:50,t:[1.75,1.93],spark:true}]},
 {t0:3.04,t1:3.95,ic:'url(#gGRY)',lines:[{txt:'y nace',sz:30,t:[3.04,3.14]},{txt:'*gris*',sz:58,t:[3.47]}]},
 {t0:4.59,t1:6.62,lines:[{txt:'el *pollo*',sz:46,t:[4.59,4.86]}]},
 {t0:6.69,t1:8.5,lines:[{txt:'plumón *gris*',sz:38,t:[6.69,7.0],ic:'url(#gGRY)'},{txt:'y pico *recto*',sz:38,t:[7.11,7.56,7.84],gap:1.08}]},
 {t0:8.71,t1:9.7,lines:[{txt:'¿*Genética*?',sz:52,t:[8.71]}]},
 {t0:9.76,t1:10.62,lines:[{txt:'para *nada.*',sz:52,t:[9.76,9.98],speed:true}]},
 {t0:10.74,t1:12.0,lines:[{txt:'es cosa de',sz:30,t:[10.74,10.89,11.14]},{txt:'lo que *come*',sz:48,t:[11.22,11.31,11.43]}]},
 {t0:12.68,t1:14.5,lines:[{txt:'la cabeza',sz:30,t:[12.68,12.78]},{txt:'*al revés*',sz:52,t:[13.23,13.31]}]},
 {t0:15.06,t1:16.95,lines:[{txt:'algas y',sz:30,t:[15.06,15.45]},{txt:'*gambitas*',sz:52,t:[15.86]}]},
 {t0:17.01,t1:18.2,lines:[{txt:'las *artemias*',sz:48,t:[17.01,17.16]}]},
 {t0:18.75,t1:20.28,lines:[{txt:'cargadas de',sz:30,t:[18.75,19.16]},{txt:'*carotenoides*',sz:46,t:[19.3]}],ic:'url(#gOR)'},
 {t0:20.34,t1:22.95,lines:[{txt:'el mismo *pigmento*',sz:34,t:[20.34,20.44,20.76],ic:'url(#gOR)'},{txt:'que las *zanahorias*',sz:34,t:[21.24,21.63,21.75],ic:'url(#gOR)',gap:1.12}]},
 {t0:23.04,t1:25.1,lines:[{txt:'su *hígado*',sz:46,t:[23.04,23.32]},{txt:'los *transforma*',sz:32,t:[23.65,23.87],gap:1.02}]},
 {t0:25.27,t1:27.55,lines:[{txt:'plumas, piel',sz:36,t:[25.27,26.04]},{txt:'y *patas*',sz:48,t:[26.17,26.93]}]},
 {t0:28.61,t1:31.15,lines:[{txt:'2-3',sz:62,num:true,roll:.42,t:[28.61]},{txt:'*años*',sz:44,t:[29.11],gap:.82},{txt:'en ponerse *rosa*',sz:30,t:[29.58,29.7,30.16],gap:1.15,spark:true}]},
 {t0:31.39,t1:33.55,lines:[{txt:'si deja de *comerlos*…',sz:32,t:[31.39,31.48,31.83,31.93]},{txt:'se *destiñe*',sz:50,t:[32.45,32.67],ic:'url(#gPALE)',gap:1.12}]},
 {t0:33.94,t1:35.05,y:170,lines:[{txt:'aquí viene',sz:34,t:[33.94,34.29]},{txt:'lo *mejor*',sz:64,t:[34.43,34.52],spark:true}]},
 {t0:35.03,t1:36.62,lines:[{txt:'los *padres*',sz:48,t:[35.03,35.23]}]},
 {t0:36.66,t1:39.3,lines:[{txt:'una leche *roja*',sz:44,t:[36.66,36.92,37.28]}]},
 {t0:39.45,t1:41.0,lines:[{txt:'pierden su *color*',sz:42,t:[39.45,39.83,40.3]}],ic:'url(#gPALE)'},
 {t0:41.23,t1:43.22,lines:[{txt:'científicos de',sz:30,t:[41.23,41.83]},{txt:'*Doñana*',sz:52,t:[41.94]}]},
 {t0:43.25,t1:44.35,lines:[{txt:'se *maquillan*',sz:50,t:[43.25,43.35],spark:true}]},
 {t0:44.39,t1:45.55,lines:[{txt:'se *untan*',sz:50,t:[44.39,44.67]}]},
 {t0:45.58,t1:47.1,lines:[{txt:'un aceite *rosa*',sz:46,t:[45.58,45.67,46.09],spark:true}]},
 {t0:47.18,t1:48.55,lines:[{txt:'glándula de la',sz:30,t:[47.18,47.61,47.72]},{txt:'*cola*',sz:54,t:[47.87]}]},
 {t0:48.77,t1:50.5,lines:[{txt:'si quieres *verlo*',sz:44,t:[48.77,48.96,49.23]}]},
 {t0:50.55,t1:52.1,lines:[{txt:'Fuente de *Piedra*',sz:46,t:[50.55,50.96,51.06]}]},
 {t0:52.5,t1:54.0,lines:[{txt:'miles de *parejas*',sz:46,t:[52.5,52.8,52.94]}]},
 {t0:54.06,t1:56.22,lines:[{txt:'en resumen',sz:28,t:[54.06,54.19]},{txt:'eres lo que *comes.*',sz:44,t:[54.69,55.01,55.14,55.26],gap:1.25}]},
 {t0:56.27,t1:57.45,lines:[{txt:'*literalmente.*',sz:56,t:[56.27],spark:true}]},
 {t0:57.57,t1:59.32,lines:[{txt:'¿qué *animal*',sz:46,t:[57.57,57.65]},{txt:'quieres ahora?',sz:30,t:[58.0,58.79]}]},
 {t0:59.38,t1:59.95,lines:[{txt:'te leo en',sz:30,t:[59.38,59.43]},{txt:'*comentarios*',sz:48,t:[59.5]}]}
];
