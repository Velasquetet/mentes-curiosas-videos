/* ===== ESCENAS · el T. rex tenía labios (y otras cosas que hemos corregido) ===== */
DUR=105.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const dis=(t,t1,d=.25)=>1-EZ.out(sg(t,t1,t1+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
function leader(x1,y1,x2,y2,p,c=K.ink,bend=-24){if(p<=0)return '';const mx=(x1+x2)/2,my=(y1+y2)/2+bend;
  return DR(`M${f1(x1)} ${f1(y1)} Q${f1(mx)} ${f1(my)} ${f1(x2)} ${f1(y2)}`,ST(c,1.8),EZ.out(p))+(p>.9?Ci(x2,y2,3.2,c):'');}
function qDeco(t,a,seed=1,n=5){let s='';for(let i=0;i<n;i++){const x=40+hs(i*3.7+seed)*460,y=250+hs(i*5.3+seed)*400,r=(hs(i+seed)-.5)*40;
  s+=G(x,y+Math.sin(t*1.5+i)*6,1,r+Math.sin(t+i)*5,Ts(0,0,'?',48+hs(i*9+seed)*40,{it:true,fill:'#ffffff',stroke:'#ffffff'}),.45*a);}return s;}
function birds(t,y0=300){let s='';for(let i=0;i<3;i++){const x=((t*22+i*70+100)%700)-80;s+=birdV(x,y0+i*14+Math.sin(t*2+i)*4,1,t,i);}return s;}
/* paisaje del Cretácico */
function cretaceous(T,o={}){const hy=o.hy||600;let s=G(o.sx||410,o.sy||430,1,0,sunS(o.sr||74));
  s+=G(120+T*3,300,1,0,cloudS(86))+G(450+T*2,262,.75,0,cloudS(62))+birds(T,330);
  if(o.volc!==false)s+=G(110,hy-10,.42,0,NX.volcano({},T+3));
  s+=G(300,hy,1,0,humpS(330,150))+G(520,hy,1,0,humpS(250,104));
  s+=bushBand(-40,580,hy-4,30,o.seed||3,{c:'#7fd17a'});
  s+=groundBand(-40,580,hy+20,400,{c:o.gc||'#c98a4a'});
  return s;}
function fgFerns(T,y=972){return G(30,y,1.2,-10+Math.sin(T*1.2)*2,fernS(190))+G(120,y+8,1,8,fernS(150,'#2b7a3e'))+G(510,y-4,1.2,12+Math.sin(T*1.1)*2,fernS(200));}
/* cabeza del T. rex en primer plano (cx,cy = centro de la cabeza en pantalla) */
function trexHead(cx,cy,k,o){return clipG(G(cx,cy,k,0,G(-205,222,1,0,trexS(o))),`<rect x="-40" y="-40" width="620" height="776"/>`);}
/* fósil en roca */
function fossilS(T){let s=P('M-150 30 Q-160 -40 -90 -60 Q0 -84 100 -62 Q160 -40 150 30 Q60 52 -40 48 Q-120 50 -150 30Z','fill:#cdb48f;'+OL(2.4));
  s+=P('M-110 -10 Q-40 -40 60 -30 Q100 -26 110 -6 L106 6 L-104 10Z','fill:#f4eedc;'+OL(2));
  for(let i=0;i<8;i++)s+=G(-80+i*24,8,.18,0,toothS({}));
  s+=Ci(30,-20,10,'#cdb48f',OL(1.6))+P('M-120 30 l20 -8 M80 34 l24 -10',ST('#a8916c',2));return s;}
/* tarjeta de estudio */
function paperS(top,l1,l2,foot){const W2=300,H2=300;let s=Rc(-W2/2+5,-H2/2+6,W2,H2,K.ink,12)+Rc(-W2/2,-H2/2,W2,H2,'#fbf8f2',12,OL(2.2));
  s+=Rc(-W2/2,-H2/2,W2,34,'#b01e23',12)+Rc(-W2/2,-H2/2+20,W2,14,'#b01e23')+Tn(0,-H2/2+22,top,11,700,{fill:'#fff',ls:.08});
  s+=Ts(0,-H2/2+72,l1,24)+Ts(0,-H2/2+100,l2,24,{it:true});
  for(let i=0;i<5;i++)s+=Rc(-118,-H2/2+122+i*16,i===4?150:236,6,'#d7d0c4',3);
  s+=G(40,100,.22,0,trexS({T:0,lips:1}));
  s+=Tn(0,H2/2-16,foot,11,600,{fill:'#6b6b6b'});return s;}
function featherS(c='#e9d27a'){return P('M0 40 Q-14 0 0 -40 Q14 0 0 40Z',`fill:${c};${OL(1.8)}`)+P('M0 46 L0 -34',ST(K.ink,1.6));}
function snowS(r=14){let s='';for(let i=0;i<3;i++)s+=G(0,0,1,i*60,P(`M0 ${-r} L0 ${r} M-4 ${-r+4} L0 ${-r+8} L4 ${-r+4} M-4 ${r-4} L0 ${r-8} L4 ${r-4}`,ST('#fff',2.6)));return s;}
function crownS(){return P('M-30 10 L-34 -22 L-16 -6 L0 -28 L16 -6 L34 -22 L30 10Z','fill:url(#gSUN);'+OL(2.2))+Ci(0,-2,4,K.pink)+Ci(-18,2,3,K.blue)+Ci(18,2,3,K.blue);}
function checkRow(w,txt,p,icon){const q=EZ.back(cl(p));return G(0,0,1,0,Rc(-w/2,-22,w,44,'#fff',22,OL(2))+G(-w/2+24,0,q,0,Ci(0,0,14,'url(#gGR)')+P('M-6 0 l4 5 l8 -9',ST('#fff',3)))+Tn(-w/2+48,6,txt,17,700,{a:'start'})+(icon||''),cl(p*3));}

/* ---------- L1 · el T. rex de las películas ---------- */
function sceneL1(t){
  const T=t;let s=cretaceous(T,{hy:600});
  s+=G(lerp(330,290,EZ.out(sg(t,0,3))),790,.78,0,trexS({T,lips:0,open:.35+.45*Math.abs(Math.sin(T*2.2)),c:'#3f9b4f'}));
  s+=fgFerns(T);
  if(t>1.9)s+=G(0,0,1,0,stampA(300,430,t-2.39,'MAL DIBUJADO',{r:-8,sz:26,c:K.red}));
  const push=t<.5?lerp(1.18,1,EZ.out(t/.5)):1+.05*EZ.sine(sg(t,.5,3.4));
  return G(270,650,push,0,G(-270,-650,1,0,s));
}
/* ---------- M1 · probablemente tenía labios ---------- */
function sceneM1(t){
  const T=t;let s=groundLine(1);
  const L=EZ.io(sg(t,5.5,6.1)),k=lerp(1.9,2.1,sg(t,3.3,6.4));
  s+=trexHead(250,430,k,{T,lips:L,open:(1-L)*.25});
  s+=pillA(360,600,'¿labios?',sg(t,4.61,4.9)*dis(t,5.6,.2),{sz:15})+pillA(360,600,'labios ✓',sg(t,5.66,5.95),{sz:16,w:800,fill:'url(#gRP)'});
  s+=leader(330,585,300,488,sg(t,5.7,6.0),K.ink,10);
  s+=actor('lenteja',{t0:3.4,path:[[3.4,640],[3.9,470]],emo:[[3.4,1,0],[3.9,2,0]],s:.75,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>tt>3.9?PROP.puntero:'',mod:(p,tt)=>{if(tt>3.9)p.arms.r=[112+6*Math.sin(tt*4),-30];}},t);
  return s;
}
/* ---------- M2 · siempre con los dientes fuera, como un cocodrilo ---------- */
function sceneM2(t){
  const T=t;let s='';
  const up=EZ.io(sg(t,8.8,9.3));
  s+=G(270,lerp(450,360,up),lerp(1,.78,up),0,NX.cine({},t-6.5));
  s+=pillA(150,280,'en el cine',sg(t,7.13,7.4)*dis(t,8.8,.2),{sz:13});
  const cq=EZ.out(sg(t,9.2,9.7));if(cq>0)s+=G(lerp(700,270,cq),610,.95,0,crocS({T,open:.25+.2*Math.sin(T*3)}));
  s+=pillA(130,690,'cocodrilo',sg(t,9.4,9.7),{sz:14,fill:'url(#gRP)'});
  s+=groundLine(1);
  return s;
}
/* ---------- M3 · 2023: un equipo de paleontólogos ---------- */
function sceneM3(t){
  const T=t;let s=groundLine(1);
  s+=G(410,330,1,0,NX.calendar({from:2023,to:2023,month:'AÑO'},t-10.5));
  s+=G(270,560,ap(t,10.9,.35),0,fossilS(T));
  s+=actor('lenteja',{t0:11.3,path:[[11.3,90]],emo:[[11.3,0,0],[12.2,9,1]],s:.72,y:()=>GY,face:()=>1,look:()=>1,prop:tt=>PROP.lupa},t);
  s+=actor('pipa',{t0:11.6,path:[[11.6,450]],emo:[[11.6,0,0],[12.6,9,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=actor('grano',{t0:12.1,path:[[12.1,250]],emo:[[12.1,0,0],[13.0,9,0]],s:.55,y:()=>GY+6,face:()=>1},t);
  return s;
}
/* ---------- M4 · revista Science ---------- */
function sceneM4(t){
  const T=t;let s=groundLine(1);
  const dIn=EZ.out(sg(t,14.05,14.5));
  s+=blurG(G(280,480+(1-dIn)*620,1,(1-dIn)*8,paperS('SCIENCE · 2023','Los terópodos','tenían labios','Dientes, mandíbulas y lagartos actuales')),0,Math.sin(Math.PI*sg(t,14.05,14.5))*10);
  s+=stampA(300,620,t-16.13,'NO ERA ASÍ',{r:-6,sz:26,c:K.red});
  s+=actor('garbanzo',{t0:14.6,path:[[14.6,-60],[15.2,70]],emo:[[14.6,1,0],[15.2,6,0]],s:.72,pop:false,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- M5 · ¿cómo lo saben? ---------- */
function sceneM5(t){
  const T=t;let s=qDeco(t,ao(t,17.2,.4),4,6)+groundLine(1);
  s+=G(300,470,ap(t,17.3,.35),0,fossilS(T));
  const lq=ap(t,18.5,.3);if(lq>0)s+=G(300,360,lq,0,P('M-60 0 Q0 -26 60 0 Q0 16 -60 0Z',`fill:#e8869a;${OL(2)}`)+DR('M-70 -24 L70 24 M70 -24 L-70 24',ST(K.red,5),sg(t,19.2,19.6)));
  s+=stampA(300,580,t-19.3,'NO FOSILIZAN',{r:5,sz:20,c:K.red});
  s+=actor('pipa',{t0:17.2,path:[[17.2,96]],emo:[[17.2,0,0],[17.8,9,1]],s:.8,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- M6 · ¡por los dientes! ---------- */
function sceneM6(t){
  const T=t;let s=raysBg(270,480,t*14,20,'#d3d3d3',ao(t,20.1,.3))+groundLine(1);
  s+=G(270,470,1.7*ap(t,20.3,.4)*(1+.04*Math.sin(T*4)),Math.sin(T*2)*4,toothS({shine:.6+.4*Math.sin(T*4)}));
  s+=sparkA(170,380,t-20.6,12,K.pink,.8)+sparkA(380,400,t-20.75,10,K.yellow,.8)+sparkA(360,560,t-20.9,8,K.orange,.8);
  return s;
}
/* ---------- L2 · los cocodrilos: dientes al aire ---------- */
function sceneL2(t){
  const T=t;let s=G(410,380,1,0,sunS(80))+G(130+t*3,290,1,0,cloudS(80));
  s+=G(120,600,1,0,humpS(300,120))+G(430,600,1,0,humpS(280,100));
  s+=bushBand(-40,580,598,28,6,{c:'#7fd17a'});
  s+=waterBand(-40,580,620,990,T,{rows:6});
  s+=G(lerp(560,290,EZ.out(sg(t,21.4,22.6))),650+Math.sin(T*2)*3,1.05,0,crocS({T,open:.15+.1*Math.sin(T*2)}));
  s+=pillA(150,460,'dientes al aire',sg(t,23.4,23.7),{sz:14,fill:'url(#gRP)'})+leader(170,478,250,640,sg(t,23.5,23.8),K.ink,10);
  s+=reeds(40,990,10,150,4,T)+reeds(500,990,9,140,9,T);
  return s;
}
/* ---------- M7 · se secan, se desgastan, se rompen ---------- */
function sceneM7(t){
  const T=t;let s=groundLine(1);
  const w=sg(t,25.3,26.8);
  s+=G(150,480,1.35*ap(t,24.25,.35)*(1+.03*Math.sin(T*3)),-6,toothS({wear:w}));
  if(t>26.48&&t<26.9){const q=sg(t,26.48,26.9);for(let i=0;i<6;i++){const a=hs(i+3)*6.28;s+=Ci(150+Math.cos(a)*60*q,560+Math.sin(a)*30*q+q*q*40,4*(1-q),'#e2c9a6');}}
  s+=G(380,330,1,0,pill('☀ se secan',{sz:16,w:700}),ap(t,24.59,.3));
  s+=G(380,420,1,0,pill('se desgastan',{sz:16,w:700,fill:K.orange}),ap(t,25.5,.3));
  s+=G(380,510,1,0,pill('se rompen',{sz:16,w:700,fill:K.red}),ap(t,26.48,.3));
  s+=actor('garbanzo',{t0:24.6,path:[[24.6,400]],emo:[[24.6,0,0],[25.2,6,0]],s:.62,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M8 · los del T. rex: sin ese daño ---------- */
function sceneM8(t){
  const T=t;let s=groundLine(1);
  s+=G(150,470,ap(t,27.4,.35)*1.15,0,toothS({wear:1}))+pillA(150,600,'cocodrilo',sg(t,27.6,27.9),{sz:13});
  s+=G(380,470,ap(t,27.7,.35)*1.15,0,toothS({shine:.8}))+pillA(380,600,'tiranosaurio',sg(t,28.25,28.5),{sz:13,fill:'url(#gRP)'});
  s+=stampA(380,360,t-29.98,'SIN DAÑO',{r:-6,sz:22,c:K.green});
  return s;
}
/* ---------- M9 · esmalte bien conservado ---------- */
function sceneM9(t){
  const T=t;let s=groundLine(1);
  const k=lerp(1.25,1.4,sg(t,30.7,32.8));
  s+=G(250,470,k*ap(t,30.7,.3),0,toothS({shine:.5+.5*Math.sin(T*5)}));
  s+=G(250,470,1,0,DR('M-60 -130 Q-80 0 -10 120',ST(K.pink,5),sg(t,31.0,31.5)));
  s+=pillA(420,380,'esmalte',sg(t,31.02,31.3),{sz:15,fill:'url(#gRP)'})+leader(410,396,300,440,sg(t,31.1,31.4),K.ink,-10);
  s+=pillA(420,560,'bien conservado ✓',sg(t,31.98,32.25),{sz:13,fill:'url(#gGR)'});
  return s;
}
/* ---------- L3 · el dragón de Komodo (con labios) ---------- */
function sceneL3(t){
  const T=t;let s=G(110,420,1,0,sunS(60))+G(380+t*3,300,1,0,cloudS(84));
  s+=G(150,610,1,0,humpS(300,130))+G(440,610,1,0,humpS(300,120));
  s+=bushBand(-40,580,606,28,8,{c:'#7fd17a'});
  s+=groundBand(-40,580,626,400,{c:'#d9b26f'});
  s+=G(lerp(-120,250,EZ.out(sg(t,32.9,35.4))),760,1.15,0,komodoS({T,walk:t<35.4?1:.15}));
  s+=pillA(330,560,'tiene labios',sg(t,34.62,34.9),{sz:14,fill:'url(#gRP)'})+leader(340,578,420,712,sg(t,34.7,35.0),K.ink,-10);
  s+=pillA(160,480,'dragón de Komodo',sg(t,36.43,36.7),{sz:15,w:700});
  s+=fgFerns(T,980);
  return s;
}
/* ---------- M10 · los dientes no eran tan enormes ---------- */
function sceneM10(t){
  const T=t;let s=groundLine(1);
  s+=trexHead(250,450,2.0,{T,lips:0,open:0});
  const bq=EZ.io(sg(t,38.55,39.2));
  if(bq>0)s+=DR('M40 300 L470 300',ST(K.ink,3),bq)+DR('M40 290 L40 310 M470 290 L470 310',ST(K.ink,3),bq);
  s+=pillA(255,270,'cráneo',sg(t,38.86,39.1),{sz:14});
  const tq=EZ.out(sg(t,39.66,40.0));if(tq>0)s+=Rc(260,488,60,30,'none',4,`stroke:${K.pink};stroke-width:3;opacity:${f2(tq)}`);
  s+=pillA(290,560,'dientes',sg(t,39.7,40.0),{sz:13,fill:'url(#gRP)'});
  s+=stampA(300,640,t-40.72,'TAMAÑO NORMAL',{r:-5,sz:20,c:K.blue});
  s+=actor('garbanzo',{t0:37.3,path:[[37.3,620],[37.8,470]],emo:[[37.3,1,0],[37.8,8,0],[40.8,6,0]],s:.62,pop:false,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- M11 · cabían dentro, tapados por labios de escamas ---------- */
function sceneM11(t){
  const T=t;let s=groundLine(1);
  const op=1-EZ.io(sg(t,42.5,43.5)),L=EZ.io(sg(t,44.15,45.0));
  s+=trexHead(lerp(240,220,sg(t,41.6,46.3)),450,lerp(2.0,2.25,sg(t,41.6,46.3)),{T,lips:L,open:.45*op});
  s+=pillA(130,300,'boca cerrada',sg(t,43.49,43.75),{sz:13});
  const zq=ap(t,45.45,.35);if(zq>0){s+=G(400,600,zq*.62,0,scalesS({}))+pillA(400,680,'escamas',sg(t,45.52,45.8),{sz:13,fill:'url(#gRP)'});}
  return s;
}
/* ---------- M12 · lo que hemos tenido que corregir ---------- */
function sceneM12(t){
  const T=t;let s=groundLine(1);
  const q=ap(t,46.5,.35);
  if(q>0){s+=G(300,440,q,-3,Rc(-130,-150,260,300,'#fbf8f2',10,OL(2.2))+Rc(-130,-150,260,40,K.ink,10)+Tn(0,-124,'FICHA · T. REX',14,800,{fill:'#fff',ls:.06})+
    ['labios','brazos','velocidad','plumas','temperatura'].map((x,i)=>Tn(-104,-74+i*44,x,18,600,{a:'start'})+Rc(40,-88+i*44,60,16,'#d7d0c4',3)).join(''));
    for(let i=0;i<5;i++){const p=sg(t,48.3+i*.18,48.55+i*.18);s+=G(300,440,1,-3,DR(`M30 ${-80+i*44} Q70 ${-70+i*44} 110 ${-84+i*44}`,ST(K.red,4),p));}}
  s+=stampA(300,620,t-48.99,'A CORREGIR',{r:-6,sz:22,c:K.red});
  s+=actor('grano',{t0:46.5,path:[[46.5,90]],emo:[[46.5,0,0],[47.1,14,0]],s:.72,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- M13 · bracitos con dos dedos ---------- */
function sceneM13(t){
  const T=t;let s=groundLine(1);
  s+=G(lerp(330,300,sg(t,49.8,53.3)),GY,.78,0,trexS({T,lips:1,hlArm:ao(t,50.62,.4)}));
  const zq=ap(t,51.6,.35);
  if(zq>0){const cx=150,cy=380,r=80;s+=G(cx,cy,zq,0,Ci(0,0,r,'#fff',OL(2.4))+G(-10,-10,2.6,0,P('M-20 -10 Q-4 -4 0 6',ST(K.ink,8))+P('M-20 -10 Q-4 -4 0 6',ST('#3f9b4f',5))+P('M0 6 l12 -2 M0 6 l9 8',ST(K.ink,3)))+
    G(40,50,1,0,pill('2 dedos',{sz:14,w:800,fill:'url(#gRP)'})));
    s+=leader(cx+60,cy+40,360,540,sg(t,51.7,52.0)*1,K.ink,20);}
  const tq=ap(t,52.69,.25);if(tq>0)s+=G(90,560,tq,0,Tn(0,0,'3',64,800,{fill:'#6e6e6e'})+DR('M-26 -50 L26 10',ST(K.red,6),sg(t,52.8,53.1)));
  return s;
}
/* ---------- L4 · no era un velocista ---------- */
function sceneL4(t){
  const T=t;let s=cretaceous(T,{hy:600,sx:280,sy:470,sr:56,seed:9,volc:false});
  const x=lerp(70,330,sg(t,53.3,57.4));
  s+=G(x,830,.62,0,trexS({T,lips:1,walk:1}));
  for(let i=0;i<4;i++){const q=((T*1.4)+i/4)%1;s+=Ci(x-70-q*60,830-q*20,(6+i*2)*(1-q),'#e9cfa4');}
  s+=pillA(410,380,'¿velocista?',sg(t,54.39,54.7),{sz:15})+stampA(410,440,t-55.0,'NO',{r:-8,sz:26,c:K.red,out:1.6});
  s+=G(120,330,1,0,NX.calendar({from:2017,to:2017,month:'AÑO'},t-56.0));
  s+=fgFerns(T,985);
  return s;
}
/* ---------- M14 · caminar deprisa, unos 20 km/h ---------- */
function sceneM14(t){
  const T=t;let s=groundLine(1);
  s+=G(270,460,1.2,0,NX.gauge({val:20,max:60,min:0,label:'km/h',unit:''},t-59.85));
  s+=pillA(270,300,'no corría',sg(t,57.6,57.9)*dis(t,59.7,.2),{sz:15,fill:K.red})+pillA(270,300,'caminaba deprisa',sg(t,58.9,59.2),{sz:15,fill:'url(#gGR)'});
  s+=G(lerp(40,200,sg(t,57.4,61.9)),GY,.36,0,trexS({T,lips:1,walk:1}));
  s+=actor('lenteja',{t0:57.6,path:[[57.6,470]],emo:[[57.6,0,0],[58.2,2,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>PROP.papel},t);
  return s;
}
/* ---------- L5 · la escena del coche ---------- */
function sceneL5(t){
  const T=t;let s=G(420,380,1,0,sunS(64))+G(100+t*3,300,1,0,cloudS(80));
  s+=G(120,600,1,0,humpS(300,120))+G(430,600,1,0,humpS(280,110))+bushBand(-40,580,598,28,4,{c:'#7fd17a'});
  s+=Rc(-40,620,620,400,'#7a7a7a')+Rc(-40,620,620,10,'#5f5f5f');
  for(let i=0;i<6;i++){const x=((i*120-T*60)%720+720)%720-100;s+=Rc(x,700,60,8,'#f4eedc',3);}
  const cx=lerp(330,380,sg(t,62,67.9));
  s+=G(cx-40,700+Math.sin(T*20)*1.5,1.1,0,carS(T));
  s+=G(lerp(-40,90,sg(t,62,67.9)),780,.55,0,trexS({T,lips:1,walk:1,open:.2}));
  s+=pillA(380,560,'20 km/h',sg(t,63.3,63.6),{sz:15,fill:'url(#gRP)'});
  s+=stampA(380,470,t-66.6,'SIN PRISA',{r:-6,sz:20,c:K.blue});
  const k=1+.16*EZ.io(sg(t,64.0,65.2));
  return G(300,700,k,0,G(-300,-700,1,0,s));
}
function carS(T){const w=Math.sin(T*14)*0;return Rc(-70,-34,140,34,K.red,10,OL(2.2))+P('M-40 -34 L-24 -60 L30 -60 L46 -34Z','fill:#bfe3ff;'+OL(2.2))+P('M3 -60 L3 -34',ST(K.ink,2))+
  Ci(-40,2,15,K.ink)+Ci(-40,2,6,'#cfcfcf')+Ci(42,2,15,K.ink)+Ci(42,2,6,'#cfcfcf')+Rc(62,-26,10,8,'#ffd84a',2);}
/* ---------- M15 · ¿y las plumas? ---------- */
function sceneM15(t){
  const T=t;let s=qDeco(t,ao(t,68.0,.4),11,5)+groundLine(1);
  for(let i=0;i<5;i++){const q=ap(t,68.2+i*.08,.3);s+=G(150+i*60,380+Math.sin(T*2+i)*18+(i%2)*40,q,Math.sin(T*1.5+i)*30,featherS(i%2?'#e9d27a':'#f6a81a'));}
  s+=actor('pipa',{t0:68.0,path:[[68.0,270]],emo:[[68.0,0,0],[68.5,8,0]],s:.8,y:()=>GY,face:()=>1},t);
  return s;
}
/* ---------- L6 · parientes con plumas ---------- */
function sceneL6(t){
  const T=t;let s=cretaceous(T,{hy:600,sx:420,seed:5,volc:false,gc:'#b7834a'});
  s+=G(lerp(560,250,EZ.out(sg(t,69.2,70.6))),800,.5,0,trexS({T,lips:1,walk:t<70.6?1:.2,feathers:1,c:'#c76a3a',cd:'#9a4a2f',belly:'#f3cfa0'}));
  s+=pillA(330,520,'pariente con plumas',sg(t,69.7,70.0),{sz:14,fill:'url(#gRP)'});
  s+=fgFerns(T,985);
  return s;
}
/* ---------- M16 · en el T. rex: piel con escamas ---------- */
function sceneM16(t){
  const T=t;let s=groundLine(1);
  s+=G(lerp(310,290,sg(t,71.7,75.6)),GY,.78,0,trexS({T,lips:1}));
  const zq=ap(t,74.2,.35);if(zq>0){s+=G(140,370,zq*.9,0,scalesS({}))+leader(190,420,250,560,sg(t,74.3,74.6),K.ink,10);}
  s+=pillA(140,460,'piel con escamas',sg(t,74.7,75.0),{sz:13,fill:'url(#gRP)'});
  s+=G(400,330,1,0,NX.lowerThird({title:'T. rex',sub:'restos de piel'},t-72.3),dis(t,74.0,.2));
  return s;
}
/* ---------- M17 · de momento, no hay pruebas ---------- */
function sceneM17(t){
  const T=t;let s=groundLine(1);
  const fq=ap(t,75.7,.35);if(fq>0)s+=G(270,430,fq*2.2,-20,featherS())+G(270,430,1,0,DR('M-80 -80 L80 80',ST(K.red,8),sg(t,77.9,78.3)));
  s+=stampA(270,560,t-76.82,'SIN PRUEBAS',{r:-6,sz:24,c:K.red});
  s+=G(400,300,1,0,NX.stamp({type:'desarrollo',text:'DE MOMENTO',sz:14,r:5},t-75.9));
  s+=actor('lenteja',{t0:75.7,path:[[75.7,80]],emo:[[75.7,0,0],[76.3,2,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1,prop:tt=>PROP.papel},t);
  return s;
}
/* ---------- M18 · el último giro: septiembre ---------- */
function sceneM18(t){
  const T=t;let s=raysBg(270,520,t*30,20,'#d3d3d3',ao(t,78.8,.3))+groundLine(1);
  s+=G(270,420,1,0,NX.calendar({from:2026,to:2026,month:'SEP'},t-80.1));
  s+=actor('grano',{t0:78.9,path:[[78.9,270]],emo:[[78.9,0,0],[79.5,6,0]],s:.8,y:()=>GY,face:()=>1,mod:(p,tt)=>{p.rot+=Math.sin(tt*6)*4;}},t);
  return s;
}
/* ---------- M19 · analizando el esmalte ---------- */
function sceneM19(t){
  const T=t;let s=groundLine(1);
  s+=G(200,460,ap(t,81.3,.3)*1.05,0,toothS({shine:.6}));
  const by=lerp(360,560,(Math.sin(T*3)+1)/2);
  if(t>81.9)s+=Rc(120,by-2,160,4,K.pink,2,`opacity:${f2(ao(t,81.9,.2)*.85)}`)+P(`M200 ${f1(by)} L420 380`,ST(K.pink,2,`opacity:${f2(ao(t,81.9,.2)*.6)}`));
  s+=pillA(200,300,'esmalte',sg(t,82.03,82.3),{sz:14,fill:'url(#gRP)'});
  const cq=ap(t,83.4,.3);if(cq>0)s+=G(420,380,cq,0,Rc(-60,-44,120,88,'#141212',10)+Rc(-52,-36,104,60,'#2a37d7',6)+Tn(0,0,'C · O',16,800,{fill:'#fff'})+Rc(-30,30,60,6,'#8e8e8e',3));
  s+=actor('lenteja',{t0:83.6,path:[[83.6,640],[84.0,470]],emo:[[83.6,1,0],[84.0,9,0]],s:.62,pop:false,y:()=>GY,face:()=>-1,look:()=>-1,prop:tt=>PROP.lupa},t);
  return s;
}
/* ---------- M20 · unos 36 grados ---------- */
function sceneM20(t){
  const T=t;let s=groundLine(1);
  s+=G(150,500,1.15,0,NX.thermo({temp:36,max:50},t-84.8));
  s+=G(lerp(560,400,EZ.out(sg(t,84.7,85.5))),GY,.45,0,trexS({T,lips:1}));
  return s;
}
/* ---------- M21 · casi como el nuestro ---------- */
function sceneM21(t){
  const T=t;let s=groundLine(1);
  s+=G(lerp(560,360,EZ.out(sg(t,87.5,88.1))),GY,.42,0,trexS({T,lips:1}));
  s+=pillA(370,520,'T. rex ≈ 36 °C',sg(t,87.6,87.9),{sz:14,fill:'url(#gRP)'});
  s+=pillA(130,420,'nosotros ≈ 37 °C',sg(t,88.26,88.55),{sz:14,fill:'url(#gWA)'});
  s+=actor('grano',{t0:87.6,path:[[87.6,130]],emo:[[87.6,0,0],[88.2,10,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  return s;
}
/* ---------- M22 · nada que ver con un lagarto frío ---------- */
function sceneM22(t){
  const T=t;let s=groundLine(1);
  const fz=sg(t,90.2,90.8);
  s+=G(lerp(560,270,EZ.out(sg(t,89.05,89.8))),GY,1.05,0,satG(komodoS({T,walk:t<89.8?1:0}),1-fz*.7,false));
  for(let i=0;i<5;i++){const q=ap(t,90.4+i*.07,.3);s+=G(110+i*80,380+Math.sin(T*2+i)*14,q,T*40+i*20,snowS(14+(i%2)*6));}
  s+=pillA(270,520,'lagarto frío',sg(t,90.46,90.75),{sz:14,fill:'url(#gWA)'});
  s+=stampA(270,600,t-89.6,'NO ERA ASÍ',{r:5,sz:18,c:K.red,out:.9});
  return s;
}
/* ---------- M23 · resumen ---------- */
function sceneM23(t){
  const T=t;let s=groundLine(1);
  [['labios',91.47],['dos dedos',92.03],['paso rápido',92.74],['cuerpo caliente',93.91]].forEach(([x,t0],i)=>{const q=sg(t,t0-.05,t0+.3);
    if(q>0)s+=G(lerp(420,270,EZ.out(q)),320+i*72,1,0,checkRow(320,x,q));});
  return s;
}
/* ---------- L7 · el rey de los dinosaurios ---------- */
function sceneL7(t){
  const T=t;let s=cretaceous(T,{hy:600,sx:270,sy:470,sr:100,seed:7});
  s+=G(250,820,.72,0,trexS({T,lips:1,walk:.3}));
  const cq=E.bounce(sg(t,95.0,95.6));if(t>94.9)s+=G(lerp(300,398,cq),lerp(300,622,cq),1.2,-8,crownS());
  s+=confetti(370,560,t-95.6,26,3);
  s+=fgFerns(T,985);
  return s;
}
/* ---------- M24 · cada vez menos como en las películas ---------- */
function sceneM24(t){
  const T=t;let s=groundLine(1);
  s+=G(270,370,.7,0,NX.cine({},t-96.25));
  s+=pillA(270,478,'película',sg(t,97.83,98.1),{sz:13});
  s+=G(lerp(560,290,EZ.out(sg(t,96.3,97.0))),GY,.62,0,trexS({T,lips:1}));
  s+=pillA(130,560,'ciencia',sg(t,96.6,96.9),{sz:14,fill:'url(#gGR)'});
  return s;
}
/* ---------- M25 · ¿qué otro animal dibujamos mal? ---------- */
function sceneM25(t){
  const T=t;let s=qDeco(t,ao(t,98.8,.5),7,6);
  const opts=[['A','El mamut'],['B','El velocirraptor'],['C','El dodo'],['D','¿Otro? Dímelo']];
  opts.forEach(([l,txt],i)=>{const q=ap(t,99.2+i*.12,.32),sel=i===1?EZ.out(sg(t,100.6,100.8)):0;if(q>0)s+=G(270+(1-EZ.out(sg(t,99.2+i*.12,99.55+i*.12)))*120,330+i*54,1,0,optionRow(340,l,txt,sel),cl(q*2));});
  if(t>100.4&&t<101.0){const q=sg(t,100.4,100.6);s+=G(lerp(470,400,EZ.out(q)),lerp(560,390,EZ.out(q)),1,0,P('M0 0 L0 22 L6 16 L11 26 L15 24 L10 14 L18 14Z',`fill:#fff;${OL(1.8)}`));}
  const cq=ap(t,100.9,.3);
  if(cq>0){const typed='¡El velocirraptor!'.slice(0,Math.floor(18*sg(t,101.1,101.9)));s+=G(270,568,cq,0,inputRow(340,typed,Math.floor(t*4)%2===0));}
  s+=groundLine(1);
  s+=actor('pipa',{t0:98.8,path:[[98.8,86]],emo:[[98.8,0,0],[99.4,9,0],[100.8,3,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:99.0,path:[[99.0,458]],emo:[[99.0,0,0],[99.6,9,1]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  return s;
}
/* ---------- FIN ---------- */
function sceneEND(t){
  const T=t;let s='';
  s+=G(146,236,1,0,logoS(sg(t,102.9,103.6)));
  s+=G(0,0,1,0,Ts(270,352,'El T. rex de verdad',30),ao(t,103.0,.3))+G(0,0,1,0,Ts(270,398,'tenía labios',44,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,103.1,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Science (2023) · Science Advances (2026) · PeerJ (2017)',10,600)+Tn(270,474,'Biology Letters (2017) · Smithsonian Magazine',10,600)+Tn(270,490,'15/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,103.2,.3));
  s+=G(lerp(700,-260,sg(t,102.75,105)),GY,.42,0,trexS({T,lips:1,walk:1}));
  s+=groundLine(1);
  const par=[['grano',.62],['pipa',.6],['lenteja',.6],['garbanzo',.6]];
  par.forEach(([k,sc],i)=>{const x=600-((t-102.75)*70+i*110)%760;s+=pose(k,1,0,t,x,GY,sc,true,p=>{const ph=t*11+i;p.ty-=Math.abs(Math.sin(ph))*9;p.rot+=4*Math.sin(ph);});});
  return s;
}

/* ---------- línea de tiempo ---------- */
SCN=[
  {id:'L1',a:0,draw:sceneL1},
  {id:'M1',a:3.3,draw:sceneM1,in:{type:'zoom',dur:.45,fx:360,fy:430,z:8}},
  {id:'M2',a:6.42,draw:sceneM2,in:{type:'whipL',dur:.34}},
  {id:'M3',a:10.32,draw:sceneM3,in:{type:'whipU',dur:.34}},
  {id:'M4',a:13.98,draw:sceneM4,in:{type:'whipL',dur:.34}},
  {id:'M5',a:17.08,draw:sceneM5,in:{type:'iris',dur:.4,fx:100,fy:600,r0:10}},
  {id:'M6',a:20.08,draw:sceneM6,in:{type:'zoom',dur:.45,fx:300,fy:470,z:9}},
  {id:'L2',a:21.38,draw:sceneL2,in:{type:'whipD',dur:.36}},
  {id:'M7',a:24.2,draw:sceneM7,in:{type:'zoom',dur:.45,fx:300,fy:650,z:9}},
  {id:'M8',a:27.24,draw:sceneM8,in:{type:'whipL',dur:.34}},
  {id:'M9',a:30.66,draw:sceneM9,in:{type:'zoom',dur:.45,fx:380,fy:470,z:8}},
  {id:'L3',a:32.8,draw:sceneL3,in:{type:'whipU',dur:.36}},
  {id:'M10',a:37.16,draw:sceneM10,in:{type:'whipL',dur:.34}},
  {id:'M11',a:41.58,draw:sceneM11,in:{type:'whipU',dur:.34}},
  {id:'M12',a:46.38,draw:sceneM12,in:{type:'whipL',dur:.34}},
  {id:'M13',a:49.8,draw:sceneM13,in:{type:'whipU',dur:.34}},
  {id:'L4',a:53.34,draw:sceneL4,in:{type:'whipD',dur:.36}},
  {id:'M14',a:57.32,draw:sceneM14,in:{type:'whipL',dur:.34}},
  {id:'L5',a:62.0,draw:sceneL5,in:{type:'iris',dur:.42,fx:300,fy:600,r0:20}},
  {id:'M15',a:67.9,draw:sceneM15,in:{type:'whipU',dur:.34}},
  {id:'L6',a:69.12,draw:sceneL6,in:{type:'whipD',dur:.36}},
  {id:'M16',a:71.72,draw:sceneM16,in:{type:'whipL',dur:.34}},
  {id:'M17',a:75.55,draw:sceneM17,in:{type:'whipU',dur:.34}},
  {id:'M18',a:78.76,draw:sceneM18,in:{type:'iris',dur:.42,fx:270,fy:480,r0:20}},
  {id:'M19',a:81.22,draw:sceneM19,in:{type:'whipL',dur:.34}},
  {id:'M20',a:84.62,draw:sceneM20,in:{type:'whipU',dur:.34}},
  {id:'M21',a:87.46,draw:sceneM21,in:{type:'whipL',dur:.34}},
  {id:'M22',a:88.98,draw:sceneM22,in:{type:'whipD',dur:.34}},
  {id:'M23',a:91.12,draw:sceneM23,in:{type:'whipL',dur:.32}},
  {id:'L7',a:94.74,draw:sceneL7,in:{type:'iris',dur:.42,fx:270,fy:600,r0:20}},
  {id:'M24',a:96.16,draw:sceneM24,in:{type:'whipL',dur:.34}},
  {id:'M25',a:98.74,draw:sceneM25,in:{type:'whipU',dur:.32}},
  {id:'END',a:102.7,draw:sceneEND,in:{type:'swap',dur:.4}}
];

/* ---------- titulares (generados con hl.py desde words.json) ---------- */
HL=[{"t0": 0.05, "lines": [{"txt": "el *tiranosaurio*", "sz": 44, "t": [0.05, 0.33]}], "t1": 1.83}, {"t0": 1.91, "lines": [{"txt": "está mal", "sz": 30, "t": [1.91, 2.17]}, {"txt": "*dibujado*", "sz": 56, "t": [2.39], "spark": true}], "t1": 3.42}, {"t0": 3.5, "lines": [{"txt": "no es un *detalle*", "sz": 40, "t": [3.5, 3.69, 3.84, 3.96]}], "t1": 5.26}, {"t0": 5.34, "lines": [{"txt": "tenía", "sz": 30, "t": [5.34]}, {"txt": "*labios*", "sz": 62, "t": [5.66], "spark": true}], "t1": 6.41}, {"t0": 6.49, "lines": [{"txt": "siempre con los", "sz": 30, "t": [6.49, 7.45, 7.93]}, {"txt": "*dientes* fuera", "sz": 48, "t": [8.11, 8.51]}], "t1": 8.9}, {"t0": 8.98, "lines": [{"txt": "como un", "sz": 30, "t": [8.98, 9.27]}, {"txt": "*cocodrilo*", "sz": 54, "t": [9.4]}], "t1": 10.72}, {"t0": 10.8, "lines": [{"txt": "2023", "sz": 62, "t": [10.8], "num": true, "roll": 0.42}], "t1": 11.98}, {"t0": 12.06, "lines": [{"txt": "un equipo de", "sz": 30, "t": [12.06, 12.33, 12.66]}, {"txt": "*paleontólogos*", "sz": 46, "t": [12.78]}], "t1": 13.95}, {"t0": 14.03, "lines": [{"txt": "en la revista", "sz": 30, "t": [14.03, 14.12, 14.23]}, {"txt": "*Science*", "sz": 58, "t": [14.69]}], "t1": 15.37}, {"t0": 15.45, "lines": [{"txt": "seguramente", "sz": 30, "t": [15.45]}, {"txt": "*no* era así", "sz": 50, "t": [16.13, 16.3, 16.46]}], "t1": 17.08}, {"t0": 17.16, "lines": [{"txt": "¿cómo lo *saben*?", "sz": 44, "t": [17.16, 17.48, 17.61]}], "t1": 18.24}, {"t0": 18.32, "lines": [{"txt": "los labios no se", "sz": 30, "t": [18.32, 18.5, 18.87, 19.01]}, {"txt": "*fosilizan*", "sz": 52, "t": [19.14]}], "t1": 20.06}, {"t0": 20.14, "lines": [{"txt": "por los", "sz": 30, "t": [20.14, 20.39]}, {"txt": "*dientes*", "sz": 62, "t": [20.56], "spark": true}], "t1": 21.37}, {"t0": 21.45, "lines": [{"txt": "los *cocodrilos*", "sz": 46, "t": [21.45, 21.77]}], "t1": 23.12}, {"t0": 23.2, "lines": [{"txt": "siempre al *aire*", "sz": 44, "t": [23.2, 23.57, 23.67]}], "t1": 24.27}, {"t0": 24.29, "lines": [{"txt": "se *secan*", "sz": 40, "t": [24.29, 24.59]}, {"txt": "se *desgastan*", "sz": 40, "t": [25.17, 25.5], "gap": 1.1}, {"txt": "se *rompen*", "sz": 40, "t": [26.17, 26.48], "gap": 1.1}], "t1": 27.22}, {"t0": 27.3, "lines": [{"txt": "los dientes de los", "sz": 30, "t": [27.3, 27.6, 28.0, 28.09]}, {"txt": "*tiranosaurios*", "sz": 48, "t": [28.25]}], "t1": 29.04}, {"t0": 29.12, "lines": [{"txt": "no muestran ese", "sz": 30, "t": [29.12, 29.3, 29.77]}, {"txt": "*daño*", "sz": 62, "t": [29.98]}], "t1": 30.65}, {"t0": 30.73, "lines": [{"txt": "su *esmalte*", "sz": 48, "t": [30.73, 31.02]}, {"txt": "bien conservado", "sz": 30, "t": [31.74, 31.98], "gap": 1.1}], "t1": 32.77}, {"t0": 32.85, "lines": [{"txt": "como los lagartos", "sz": 30, "t": [32.85, 33.3, 33.47]}, {"txt": "que sí tienen *labios*", "sz": 44, "t": [34.04, 34.16, 34.3, 34.62]}], "t1": 35.79}, {"t0": 35.87, "lines": [{"txt": "el dragón de", "sz": 30, "t": [35.87, 35.98, 36.33]}, {"txt": "*Komodo*", "sz": 60, "t": [36.43], "spark": true}], "t1": 37.15}, {"t0": 37.23, "lines": [{"txt": "*además*", "sz": 54, "t": [37.23]}], "t1": 37.88}, {"t0": 37.96, "lines": [{"txt": "comparados con su", "sz": 30, "t": [37.96, 38.55, 38.73]}, {"txt": "*cráneo*", "sz": 56, "t": [38.86]}], "t1": 39.46}, {"t0": 39.46, "lines": [{"txt": "sus dientes no eran", "sz": 30, "t": [39.46, 39.66, 40.11, 40.31]}, {"txt": "tan *enormes*", "sz": 50, "t": [40.53, 40.72]}], "t1": 41.56}, {"t0": 41.64, "lines": [{"txt": "cabían de *sobra*", "sz": 44, "t": [41.64, 42.1, 42.2]}], "t1": 42.42}, {"t0": 42.5, "lines": [{"txt": "dentro de una boca", "sz": 30, "t": [42.5, 42.85, 42.99, 43.2]}, {"txt": "*cerrada*", "sz": 56, "t": [43.49]}], "t1": 44.09}, {"t0": 44.15, "lines": [{"txt": "tapados por", "sz": 30, "t": [44.15, 44.64]}, {"txt": "labios de *escamas*", "sz": 44, "t": [45.06, 45.44, 45.52]}], "t1": 47.18}, {"t0": 47.26, "lines": [{"txt": "no son lo *único*", "sz": 44, "t": [47.26, 47.39, 47.6, 47.73]}], "t1": 48.18}, {"t0": 48.26, "lines": [{"txt": "hemos tenido que", "sz": 30, "t": [48.26, 48.51, 48.87]}, {"txt": "*corregir*", "sz": 56, "t": [48.99]}], "t1": 49.78}, {"t0": 49.86, "lines": [{"txt": "sus famosos", "sz": 30, "t": [49.86, 50.19]}, {"txt": "*bracitos*", "sz": 56, "t": [50.62]}], "t1": 51.45}, {"t0": 51.53, "lines": [{"txt": "solo *dos dedos*", "sz": 46, "t": [51.53, 51.8, 51.98]}, {"txt": "no tres", "sz": 30, "t": [52.51, 52.69], "gap": 1.1}], "t1": 53.5}, {"t0": 53.58, "lines": [{"txt": "tampoco era un", "sz": 30, "t": [53.58, 54.1, 54.27]}, {"txt": "*velocista*", "sz": 56, "t": [54.39]}], "t1": 55.46}, {"t0": 55.54, "lines": [{"txt": "un estudio de", "sz": 30, "t": [55.54, 55.64, 56.08]}, {"txt": "2017", "sz": 60, "t": [56.19], "num": true, "roll": 0.42}], "t1": 57.3}, {"t0": 57.38, "lines": [{"txt": "no podía *correr*", "sz": 46, "t": [57.38, 57.5, 57.89]}], "t1": 58.58}, {"t0": 58.66, "lines": [{"txt": "caminar *deprisa*", "sz": 46, "t": [58.66, 59.1]}], "t1": 59.95}, {"t0": 60.03, "lines": [{"txt": "unos", "sz": 30, "t": [60.03]}, {"txt": "20", "sz": 64, "t": [60.34], "num": true, "roll": 0.4}, {"txt": "*km/h*", "sz": 40, "t": [60.65], "gap": 0.8}], "t1": 62.45}, {"t0": 62.53, "lines": [{"txt": "la escena del", "sz": 30, "t": [62.53, 62.66, 63.05]}, {"txt": "*coche*", "sz": 58, "t": [63.22]}], "t1": 64.82}, {"t0": 66.23, "lines": [{"txt": "pisar tanto el", "sz": 30, "t": [66.23, 66.61, 66.92]}, {"txt": "*acelerador*", "sz": 50, "t": [67.01]}], "t1": 67.88}, {"t0": 67.96, "lines": [{"txt": "¿y las *plumas*?", "sz": 48, "t": [67.96, 68.15, 68.38]}], "t1": 69.11}, {"t0": 69.19, "lines": [{"txt": "algunos *parientes*", "sz": 44, "t": [69.19, 69.7]}, {"txt": "sí las tenían", "sz": 30, "t": [70.56, 70.67, 70.83], "gap": 1.1}], "t1": 71.7}, {"t0": 71.78, "lines": [{"txt": "en el propio", "sz": 30, "t": [71.78, 71.87, 71.98]}, {"txt": "*tiranosaurio*", "sz": 50, "t": [72.32]}], "t1": 74.2}, {"t0": 74.28, "lines": [{"txt": "piel con", "sz": 30, "t": [74.28, 74.53]}, {"txt": "*escamas*", "sz": 60, "t": [74.7]}], "t1": 76.47}, {"t0": 76.55, "lines": [{"txt": "no hay *pruebas*", "sz": 46, "t": [76.55, 76.69, 76.82]}, {"txt": "de que estuviera emplumado", "sz": 26, "t": [77.21, 77.31, 77.42, 77.91], "gap": 1.05}], "t1": 78.96}, {"t0": 79.04, "lines": [{"txt": "el último", "sz": 30, "t": [79.04, 79.18]}, {"txt": "*giro*", "sz": 62, "t": [79.53], "spark": true}], "t1": 80.13}, {"t0": 80.19, "lines": [{"txt": "este", "sz": 30, "t": [80.19]}, {"txt": "*septiembre*", "sz": 54, "t": [80.42]}], "t1": 81.21}, {"t0": 81.29, "lines": [{"txt": "analizando el", "sz": 30, "t": [81.29, 81.93]}, {"txt": "*esmalte*", "sz": 56, "t": [82.03]}], "t1": 83.63}, {"t0": 84.68, "lines": [{"txt": "su *cuerpo*", "sz": 48, "t": [84.68, 84.81]}, {"txt": "estaba a", "sz": 30, "t": [85.22, 85.6], "gap": 1.1}], "t1": 85.91}, {"t0": 85.99, "lines": [{"txt": "36", "sz": 72, "t": [85.99], "num": true, "roll": 0.45}, {"txt": "*grados*", "sz": 44, "t": [86.7], "gap": 0.8}], "t1": 87.44}, {"t0": 87.52, "lines": [{"txt": "casi como el", "sz": 30, "t": [87.52, 87.88, 88.16]}, {"txt": "*nuestro*", "sz": 58, "t": [88.26]}], "t1": 88.96}, {"t0": 89.04, "lines": [{"txt": "nada que ver con", "sz": 30, "t": [89.04, 89.47, 89.6, 89.76]}, {"txt": "un lagarto *frío*", "sz": 46, "t": [89.95, 90.04, 90.46]}], "t1": 91.11}, {"t0": 91.19, "lines": [{"txt": "con *labios*", "sz": 40, "t": [91.19, 91.47]}, {"txt": "dos *dedos*", "sz": 40, "t": [92.03, 92.22], "gap": 1.1}], "t1": 92.66}, {"t0": 92.74, "lines": [{"txt": "paso *rápido*", "sz": 40, "t": [92.74, 93.03]}, {"txt": "cuerpo *caliente*", "sz": 40, "t": [93.57, 93.91], "gap": 1.1}], "t1": 94.73}, {"t0": 94.81, "lines": [{"txt": "el *rey*", "sz": 58, "t": [94.81, 95.07]}, {"txt": "de los dinosaurios", "sz": 30, "t": [95.26, 95.36, 95.53], "gap": 1.0}], "t1": 96.14}, {"t0": 96.22, "lines": [{"txt": "se parece cada vez", "sz": 30, "t": [96.22, 96.35, 96.72, 96.94]}, {"txt": "*menos*", "sz": 58, "t": [97.11]}], "t1": 97.38}, {"t0": 97.46, "lines": [{"txt": "al de las", "sz": 30, "t": [97.46, 97.58, 97.67]}, {"txt": "*películas*", "sz": 54, "t": [97.83]}], "t1": 98.73}, {"t0": 98.81, "lines": [{"txt": "¿qué otro animal", "sz": 32, "t": [98.81, 99.05, 99.29]}, {"txt": "dibujamos *mal*?", "sz": 46, "t": [100.08, 100.61], "gap": 1.1}], "t1": 101.21}, {"t0": 101.23, "lines": [{"txt": "te leo en", "sz": 30, "t": [101.23, 101.43, 101.71]}, {"txt": "*comentarios*", "sz": 48, "t": [101.82]}], "t1": 103.32}];
