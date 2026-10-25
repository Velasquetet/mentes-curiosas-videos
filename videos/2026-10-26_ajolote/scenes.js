/* ===== DIARIO · El ajolote: regenera casi todo y apenas envejece · 26/10/2026 ===== */
DUR=130.1;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=760;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const WT=(x,y,str,sz,p,o={})=>p<=0?'':G(x,y,1,0,Ts(0,0,str,sz,Object.assign({fill:'#fff',stroke:'#fff'},o)),p);
const HT=(x,y,str,sz,p)=>WT(x,y,str,sz,p,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'});
const KT=(x,y,str,sz,p)=>WT(x,y,str,sz,p,{fill:K.ink,stroke:K.ink});
function xMark(x,y,r,p){if(p<=0)return '';return DR(`M${x-r} ${y-r} L${x+r} ${y+r}`,ST(K.red,9),sg(p,0,.5))+DR(`M${x+r} ${y-r} L${x-r} ${y+r}`,ST(K.red,9),sg(p,.5,1));}
function check(x,y,p,c='#3f9b4f'){if(p<=0)return '';return G(x,y,EZ.back(cl(p)),0,Ci(0,0,22,c,OL(2.4))+P('M-9 0 L-2 7 L10 -7',ST('#fff',4)));}
/* fondo bajo el agua: degradado, rayos de luz y burbujas */
function water(t,o={}){let s=Rc(0,0,540,960,o.c||'#4f9fb5')+Rc(0,480,540,480,'#2c6f88',0,'opacity:.55')+Rc(0,760,540,200,'#1f5468',0,'opacity:.5');
  for(let i=0;i<5;i++){const x=60+i*120+Math.sin(t*.5+i)*20;s+=P(`M${f1(x-30)} 0 L${f1(x+30)} 0 L${f1(x+120)} 960 L${f1(x+20)} 960Z`,'fill:#fff;opacity:.06');}
  for(let i=0;i<14;i++){const u=((t*.12)+hs(i*3.7))%1,x=hs(i*5.1)*540+Math.sin(t*2+i)*8;s+=Ci(x,960-u*1000,3+hs(i)*6,'none',ST('#e6fbff',2,`opacity:${f2(.7*(1-u))}`));}
  if(o.weeds!==false)for(let i=0;i<7;i++){const x=20+i*85,h=90+hs(i*2.2)*80,sw=Math.sin(t*1.4+i)*12;s+=P(`M${x} 970 Q${f1(x+sw)} ${f1(970-h*.5)} ${f1(x+sw*1.6)} ${f1(970-h)}`,ST(i%2?'#2f7a3a':'#3f9b4f',9));}
  return s;}
function grid(t){let s='';for(let x=0;x<=540;x+=45)s+=P(`M${x} 0 L${x} 960`,ST('#b5b5b5',1.2));for(let y=0;y<=960;y+=45)s+=P(`M0 ${y} L540 ${y}`,ST('#b5b5b5',1.2));return s;}

/* 1 · fotograma 0: el ajolote ya ha perdido la pata y le vuelve a crecer… una y otra vez */
function s1(t){let s=water(t);
  const zm=lerp(1.12,1,EZ.out(sg(t,0,2.2)));
  /* ciclos de la pata: 0 al empezar, crece 1,8-3,6; se pierde y vuelve a crecer en 6,7-8,4 */
  let leg=sg(t,1.8,3.6),glow=t<4.1?1:0,cyc=0;
  if(t>6.75){const k=Math.floor((t-6.75)/.85),u=((t-6.75)%.85)/.85;cyc=Math.min(k+1,2);leg=k>=2?1:(u<.25?0:sg(u,.25,.95));glow=k>=2?0:1;}
  const AX=262,AY=640,AS=1.3;let w=G(AX,AY,AS,0,NX.axolotl({leg,glow,emo:t>3.3&&t<4.8?'wow':'ok',swim:.15},t));
  /* contorno de la pata que falta + anillo que la señala */
  const lx=AX+62*AS,ly=AY-12*AS;
  if(t<1.9)w+=G(AX,AY,AS,0,G(62,-30,1,0,P('M0 0 L8 44',ST('#fff',12,`stroke-dasharray:4 7;opacity:${f2(.6+.4*Math.sin(t*10))}`))));
  if(t<3.8){const r=56+6*Math.sin(t*8);w+=Ci(lx,ly,r,'none',ST('#fff',4,'stroke-dasharray:10 8'))+G(lx,ly+r+26,1,0,pill(t<1.9?'¡sin pata!':'creciendo…',{sz:16,w:800,fill:K.ink}));}
  s+=G(270,500,zm,0,G(-270,-500,1,0,w));
  /* textos */
  if(t<3.9){s+=WT(270,170,'pierde una pata…',40,1);s+=HT(270,250,'y le vuelve a crecer',46,ap(t,2.7,.3));}
  if(t>=3.9&&t<6.6){s+=G(0,0,1,0,stampA(270,210,t-4.1,'ENTERA',{c:K.pink,sz:44,r:-5}));
    s+=pillA(270,300,'sin cicatriz',sg(t,5.3,5.55),{fill:'#fff',tc:K.ink,sz:22,w:800})+check(400,300,sg(t,5.7,6.0));}
  if(t>=6.6){s+=WT(270,190,'una y otra vez',44,ap(t,6.7,.3));
    if(cyc)s+=G(270,280,1,0,Rc(-60,-34,120,68,'#fff',16,OL(2.6))+Tn(0,12,'×'+(cyc+1),36,800,{fill:K.pink}),ap(t,6.8,.3));}
  s+=pillA(450,ly-30,'pata nueva',sg(t,2.2,2.45),{fill:'url(#gRP)',sz:16,w:800,o:1-ao(t,3.8,.25)});
  return s;}

/* 2 · es el ajolote, un anfibio mexicano que parece estar siempre sonriendo (paisaje de Xochimilco) */
function s2(t){const T=t;let s='';
  s+=G(96+t*4,230,1,0,cloudS(96))+G(440+t*2.5,190,1,0,cloudS(70));
  s+=G(400,330-(t-8.6)*2,1,0,sunS(80));
  s+=G(70,470,1,0,humpS(260,120))+G(300,470,1,0,humpS(330,170))+G(520,470,1,0,humpS(240,100));
  s+=G(270,480,1,0,NX.xochicanal({boat:sg(t,8.6,13.2)},t));
  /* el ajolote asoma del agua en primer plano */
  const up=EZ.back(sg(t,9.15,9.7));
  s+=Rc(0,650,540,310,'#3d86a0')+Rc(0,650,540,10,'#ffffff',0,'opacity:.35');
  for(let i=0;i<6;i++){const x=((i*100+t*14)%640)-50;s+=P(`M${f1(x)} ${700+(i%3)*60} q12 -5 24 0 t24 0`,ST('#fff',2,'opacity:.4'));}
  s+=clipG(G(285,lerp(1080,960,up),1.2,0,NX.axolotl({emo:t>11.9?'wow':'ok'},t)),Rc(0,560,540,400,'#000'));
  s+=pillA(150,630,'ajolote',sg(t,9.3,9.55),{fill:'url(#gRP)',sz:22,w:800});
  s+=pillA(140,120,'anfibio',sg(t,10.0,10.25),{fill:K.ink,sz:17,w:800});
  s+=pillA(390,120,'de México',sg(t,10.5,10.75),{fill:'#2f9e5b',sz:17,w:800});
  if(t>12.0)s+=G(390,630,1,0,pill('siempre sonriendo',{sz:15,w:800,fill:K.pink}),ap(t,12.0,.3));
  return s;}

/* 3 · y no solo patas: corazón, médula espinal y partes del cerebro (rayos X) */
function s3(t){let s=grid(t)+groundLine(1,820);
  const xr=sg(t,14.9,15.4);
  s+=G(300,520,1.3,0,NX.axolotl({xray:xr},t));
  s+=WT(270,150,'no solo',38,ap(t,13.4,.3),{fill:K.ink,stroke:K.ink})+G(270,210,1,0,Ts(0,0,'patas',52,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,14.2,.3))+xMark(270,200,40,sg(t,14.6,15.0));
  /* etiquetas con línea guía (corazón 66,-30 · médula · cerebro 118,-66, escala 1,6) */
  const lab=(x1,y1,x2,y2,txt,c,a)=>{const p=sg(t,a,a+.3);if(p<=0)return '';return DR(`M${x1} ${y1} L${x2} ${y2}`,ST(K.ink,2),p)+pillA(x2,y2,txt,sg(t,a+.15,a+.4),{fill:c,sz:16,w:800});};
  s+=lab(386,481,410,650,'corazón',K.pink,15.9);
  s+=lab(222,456,140,320,'médula espinal','#2a8bd7',16.75);
  s+=lab(453,434,440,320,'cerebro',K.purple,18.6);
  s+=actor('lenteja',{t0:13.6,path:[[13.6,620],[14.6,460]],emo:[[13.6,2,0],[16.0,7,0]],prop:()=>PROP.lupa,s:.6,y:()=>820,face:()=>-1,look:()=>-1},t);
  return s;}

/* 4 · ¿cómo lo hace? · piel, blastema, células que vuelven atrás, tejidos y costura que desaparece */
function s4(t){let s='';
  if(t<20.8){s+=Rc(0,0,540,960,'#0d0b0c')+WT(270,440,'¿Cómo',72,ap(t,19.6,.3))+HT(270,530,'lo hace?',80,ap(t,20.0,.3));return s;}
  s+=grid(t);
  const cam=t<32?lerp(1.25,1.05,EZ.io(sg(t,20.8,22))):lerp(1.05,.95,EZ.io(sg(t,32,33)));
  const sk=sg(t,22.6,24.2),bd=sg(t,25.6,27.2),gr=sg(t,32.1,35.3),ly=sg(t,32.6,34.6),sm=1-sg(t,37.7,38.6);
  let w=NX.blastema({skin:sk,bud:bd,grow:gr,layers:ly,seam:sm},t);
  /* células que vuelven atrás: flecha de rebobinado alrededor del blastema */
  if(t>28.5&&t<32.2){const r=ap(t,28.6,.35)*(1-ao(t,31.9,.25));w+=G(-30,0,r,-(t-28.5)*120,P('M0 -70 A70 70 0 1 0 64 -28',ST('#2a37d7',6))+P('M64 -28 l6 -26 l-26 8Z','fill:#2a37d7'));}
  const gq=EZ.io(sg(t,31.8,33.2)),bx=lerp(390,272,gq),bs=lerp(1.75,1.0,gq)*(t<32?lerp(1.12,1,EZ.io(sg(t,20.8,22))):1);
  s+=G(bx,480,bs,0,w);
  /* reloj de «pocas horas» */
  if(t>22.2&&t<25.0)s+=G(110,250,1,0,NX.clock?NX.clock({},t-22.2):Ci(0,0,30,'#fff',OL(2)),ap(t,22.3,.3)*(1-ao(t,24.8,.2)));
  s+=pillA(300,640,'pata',sg(t,21.6,21.85),{fill:K.ink,sz:16,w:800,o:1-ao(t,22.5,.2)});
  s+=pillA(270,250,'pocas horas',sg(t,22.6,22.85),{fill:K.ink,sz:18,w:800,o:1-ao(t,24.8,.2)});
  s+=pillA(270,700,'la piel tapa la herida',sg(t,23.2,23.45),{fill:'#fff',tc:K.ink,sz:16,w:800,o:1-ao(t,24.8,.2)});
  s+=pillA(270,700,'blastema',sg(t,27.6,27.85),{fill:'url(#gRP)',sz:22,w:800,o:1-ao(t,31.9,.2)});
  if(t>25.0&&t<28.4)s+=WT(270,230,'un bultito de células',34,ap(t,25.9,.3),{fill:K.ink,stroke:K.ink});
  s+=pillA(270,250,'vuelven atrás',sg(t,29.5,29.75),{fill:'#2a37d7',sz:18,w:800,o:1-ao(t,31.9,.2)});
  s+=pillA(270,310,'casi de embrión',sg(t,30.6,30.85),{fill:'#fff',tc:K.ink,sz:16,w:800,o:1-ao(t,31.9,.2)});
  /* tejidos */
  const tag=(x,y,txt,c,a)=>pillA(x,y,txt,sg(t,a,a+.25),{fill:c,sz:15,w:800,o:1-ao(t,36.7,.2)});
  s+=tag(150,360,'hueso','#a08a5c',32.85)+tag(270,360,'músculo','#e2455a',33.35)+tag(395,360,'nervios','#c79a12',33.95)+tag(270,600,'piel','#e06b93',34.5);
  if(t>35.0&&t<36.9)s+=WT(270,230,'cada cosa en su sitio',32,ap(t,35.1,.3),{fill:K.ink,stroke:K.ink});
  s+=actor('lenteja',{t0:22.0,path:[[22.0,600],[23.0,450]],emo:[[22.0,2,0],[23.0,10,0],[27.6,7,0],[32.5,3,0]],prop:()=>PROP.lupa,s:.6,y:()=>760,face:()=>-1,look:()=>-1},t);
  if(t>36.9){s+=WT(270,230,'no se nota',38,ap(t,37.6,.3),{fill:K.ink,stroke:K.ink})+HT(270,295,'ni la costura',46,ap(t,38.3,.3));}
  return s;}

/* 5 · nosotros cicatrizamos · como mucho, la punta de un dedo o parte del hígado */
function s5(t){let s=groundLine(1);
  s+=actor('garbanzo',{t0:39.5,path:[[39.5,270]],emo:[[39.5,2,0],[41.1,5,0],[42.5,9,0]],s:.75,y:()=>GY,face:()=>1,look:()=>0,
    acc:()=>t>40.9?G(-30,-150,1,30,Rc(-26,-9,52,18,'#f0c9a0',8,OL(1.8))+Rc(-8,-9,16,18,'#e0b088',2)):''},t);
  s+=WT(270,170,'nosotros',40,ap(t,39.5,.3),{fill:K.ink,stroke:K.ink});
  if(t<42.4)s+=G(0,0,1,0,stampA(270,260,t-41.1,'CICATRIZAMOS',{c:K.red,sz:32,r:-4}));
  else{const card=(x,a,ttl,ic,ok)=>{const k=ap(t,a,.35);if(k<=0)return '';return G(x,300,k,0,Rc(-100,-80,200,170,'#fff',16,OL(2.6))+ic+Tn(0,72,ttl,15,800,{fill:K.ink}))+(ok?check(x+80,230,sg(t,a+.4,a+.7)):xMark(x,300,40,sg(t,a+.4,a+.9)));};
    const finger=G(0,-10,1,0,Rc(-18,-50,36,90,'#f0c9a0',18,OL(2.4))+Rc(-12,-46,24,26,'#fff3f0',10,OL(1.6))+P('M-18 10 L18 10',ST('#c99b7a',2)));
    const liver=G(0,-10,1,0,P('M-70 -10 Q-60 -50 0 -46 Q60 -44 70 -24 Q60 10 10 30 Q-40 40 -70 -10Z',`fill:#9a3b3b;${OL(2.4)}`)+P('M-10 -44 Q0 0 -4 28',ST('#6e2424',2)));
    s+=card(150,42.8,'punta del dedo',finger,1)+card(390,45.2,'parte del hígado',liver,1);
    s+=pillA(270,470,'como mucho',sg(t,42.7,42.95),{fill:K.ink,sz:16,w:800});}
  return s;}

/* 6 · lo raro: un eterno adolescente que nunca se hace adulto · branquias · nunca sale del agua */
function s6(t){let s='';
  if(t<52.6){s+=grid(t)+groundLine(1);
    s+=WT(270,150,'y aquí viene',36,ap(t,46.7,.3),{fill:K.ink,stroke:K.ink})+HT(270,215,'lo raro',56,ap(t,47.3,.3));
    s+=actor('pipa',{t0:46.8,path:[[46.8,110]],emo:[[46.8,7,0],[50.5,9,0]],s:.65,y:()=>GY,face:()=>1,look:()=>1},t);
    if(t>48.6){s+=G(330,560,1.05,0,NX.axolotl({},t))+G(0,0,1,0,stampA(330,380,t-49.2,'ETERNO ADOLESCENTE',{c:K.purple,sz:22,r:-4}));}
    if(t>50.4){/* barra larva → adulto que se queda a medias */
      const q=EZ.out(sg(t,50.6,51.6));s+=G(270,860,1,0,Rc(-200,-14,400,28,'#fff',14,OL(2.4))+Rc(-200,-14,400*.5*q,28,'url(#gRP)',14)+Tn(-200,-26,'larva',13,800,{a:'start'})+Tn(200,-26,'adulto',13,800,{a:'end'})+xMark(200,0,16,sg(t,51.7,52.2)),ap(t,50.5,.3));}
    return s;}
  s+=water(t,{weeds:true});
  const z=lerp(1.0,1.9,EZ.io(sg(t,53.4,54.6)))*(1-0)+0;const fx=lerp(270,170,EZ.io(sg(t,53.4,54.6)));
  s+=G(fx,560,z,0,NX.axolotl({swim:.3},t));
  s+=pillA(270,180,'toda la vida',sg(t,53.4,53.65),{fill:K.ink,sz:18,w:800,o:1-ao(t,57.4,.2)});
  s+=pillA(330,250,'«plumas» rosas',sg(t,54.3,54.55),{fill:'url(#gRP)',sz:18,w:800,o:1-ao(t,56.6,.2)});
  s+=pillA(330,250,'son branquias',sg(t,56.7,56.95),{fill:K.pink,sz:20,w:800});
  if(t>57.5)s+=G(0,0,1,0,stampA(270,690,t-57.7,'NUNCA SALE DEL AGUA',{c:K.blue,sz:22,r:-3}));
  return s;}

/* 7 · crece hasta unos 30 cm y tiene crías */
function s7(t){let s=grid(t)+groundLine(1);
  s+=G(270,560,1.1,0,NX.axolotl({},t));
  if(t>60.2){const q=EZ.out(sg(t,60.3,61.1));s+=G(30,640,1,0,Rc(0,0,480*q,34,'#f6d36b',4,OL(2))+[...Array(31)].map((_,i)=>i/30<=q?P(`M${f1(i*16)} 0 l0 ${i%5?8:16}`,ST(K.ink,1.6)):'').join(''));
    s+=G(270,300,1,0,Rc(-110,-48,220,96,'#fff',16,OL(2.6))+Tn(0,-14,'HASTA UNOS',12,800,{fill:'#555',ls:.06})+G(0,26,1,0,NX.counter({value:30,suffix:' cm',sz:40,dur:.6},t-60.4)),ap(t,60.3,.3));}
  if(t>61.9)for(let i=0;i<6;i++){const k=ap(t,62.1+i*.1,.3);s+=G(90+i*72,730,.22*k,0,NX.axolotl({swim:1},t+i));}
  s+=pillA(270,870,'y tiene crías',sg(t,62.1,62.35),{fill:'url(#gRP)',sz:16,w:800});
  s+=WT(270,170,'aun así…',40,ap(t,59.2,.3),{fill:K.ink,stroke:K.ink});
  return s;}

/* 8 · ¿no envejece? Envejecer, envejece… pero muy poco · vive más de 10 años */
function s8(t){let s='';
  if(t<64.5){s+=Rc(0,0,540,960,'#0d0b0c')+WT(270,430,'¿Y no',64,ap(t,63.2,.3))+HT(270,520,'envejece?',84,ap(t,63.6,.3));return s;}
  s+=groundLine(1);
  s+=actor('garbanzo',{t0:64.6,path:[[64.6,120]],emo:[[64.6,9,0],[66.4,2,0]],s:.65,y:()=>GY,face:()=>1,look:()=>1},t);
  if(t<67.4){s+=WT(270,190,'envejecer, envejece…',36,ap(t,64.8,.3),{fill:K.ink,stroke:K.ink})+HT(270,260,'pero muy poco',48,ap(t,66.4,.3));
    s+=G(360,560,.9,0,NX.axolotl({},t));}
  else{s+=G(340,330,1,0,Rc(-140,-60,280,120,'#fff',18,OL(2.6))+Tn(0,-24,'VIVE MÁS DE',13,800,{fill:'#555',ls:.06})+G(0,30,1,0,NX.counter({value:10,suffix:' años',sz:46,dur:.6},t-67.6)),ap(t,67.5,.35));
    /* tarta con 10 velas */
    const ck=ap(t,68.3,.35);if(ck>0){let c=Rc(-110,-50,220,70,'#f7b3c6',12,OL(2.6))+Rc(-110,-50,220,18,'#fff',8,OL(2));for(let i=0;i<10;i++){const x=-95+i*21;c+=Rc(x-3,-80,6,30,i%2?'#7fd3ff':'#f6c344',2,OL(1.2))+El(x,-88+Math.sin(t*12+i),4,7,'#ffb000');}s+=G(340,640,ck,0,c);}
    s+=pillA(340,470,'muchísimo para un anfibio',sg(t,69.1,69.35),{fill:K.ink,sz:15,w:800});
    s+=pillA(340,520,'tan pequeño',sg(t,70.5,70.75),{fill:'url(#gRP)',sz:15,w:800});}
  return s;}

/* 9 · estudio de 2024, preliminar: el reloj biológico del ADN parece pararse · pata regenerada más joven */
function s9(t){let s='';
  if(t<75.2){s+=grid(t);s+=G(270,430,1,0,Ts(0,0,'2024',150,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,72.3,.35));
    s+=WT(270,260,'un estudio de',38,ap(t,71.8,.3),{fill:K.ink,stroke:K.ink});
    if(t>73.8)s+=G(0,0,1,0,stampA(270,600,t-74.0,'PRELIMINAR',{c:K.orange,sz:34,r:-5}));
    s+=actor('lenteja',{t0:72.0,path:[[72.0,450]],emo:[[72.0,16,0]],s:.6,y:()=>GY+80,face:()=>-1,look:()=>-1},t);
    return s;}
  if(t<80.9){s+=Rc(0,0,540,960,'#141a33');
    for(let i=0;i<30;i++)s+=Ci(hs(i*3)*540,hs(i*7)*960,1.5,'#fff','opacity:.4');
    s+=G(270,500,1.2,0,NX.epiclock({stop:79.0,speed:.9,label:'se para'},t),ap(t,75.3,.35));
    s+=pillA(270,180,'reloj biológico',sg(t,75.6,75.85),{fill:'#fff',tc:K.ink,sz:20,w:800});
    s+=pillA(270,240,'escrito en su ADN',sg(t,77.7,77.95),{fill:K.pink,sz:16,w:800});
    s+=pillA(270,860,'a partir de cierta edad',sg(t,79.4,79.65),{fill:'#fff',tc:K.ink,sz:16,w:800});
    return s;}
  s+=grid(t)+groundLine(1,600);
  const cyc=t<83.6?Math.floor((t-81.0)/.7):9,u=((t-81.0)%.7)/.7,leg=t<81||cyc>=3?1:(u<.2?0:sg(u,.2,.9));
  s+=G(255,560,1.45,0,NX.axolotl({leg,glow:t>81.6?1:0},t));
  s+=WT(270,170,'una pata regenerada',36,ap(t,81.0,.3),{fill:K.ink,stroke:K.ink});
  s+=pillA(370,250,'varias veces',sg(t,83.2,83.45),{fill:K.ink,sz:16,w:800});
  if(t>83.9){s+=DR('M356 588 L330 690',ST(K.ink,2),sg(t,84.0,84.3))+pillA(330,700,'más joven',sg(t,84.4,84.65),{fill:'url(#gRP)',sz:20,w:800});
    s+=DR('M200 520 L140 650',ST(K.ink,2),sg(t,85.2,85.5))+pillA(140,660,'resto del cuerpo',sg(t,85.4,85.65),{fill:'#7a7a7a',sz:14,w:800});}
  return s;}

/* 10 · el genoma: 32.000 millones de letras, más de 10 veces el nuestro · uno de los más grandes */
function s10(t){let s=grid(t)+groundLine(1,740);
  s+=WT(270,150,'parte del secreto',36,ap(t,86.7,.3),{fill:K.ink,stroke:K.ink})+HT(270,215,'su genoma',54,ap(t,88.3,.3));
  s+=G(270,740,1,0,NX.genomestack({items:[['nosotros',3,'#7a7a7a',0],['ajolote',32,K.pink,.5]],unit:1},t-89.3));
  s+=pillA(380,300,'millones de letras',sg(t,90.3,90.55),{fill:K.ink,sz:14,w:800,o:1-ao(t,93.5,.2)});
  if(t>91.5)s+=G(150,420,1,0,Rc(-70,-40,140,80,'#fff',16,OL(2.6))+Tn(0,14,'×10',40,800,{fill:K.pink}),ap(t,91.6,.35));
  if(t>93.6)s+=G(0,0,1,0,stampA(170,560,t-93.8,'DE LOS MÁS GRANDES',{c:K.purple,sz:18,r:-4}));
  s+=actor('grano',{t0:87.0,path:[[87.0,-60],[88.2,70]],emo:[[87.0,2,0],[88.2,16,0],[91.6,7,0]],s:.55,y:()=>740,face:()=>1,look:()=>1},t);
  return s;}

/* 11 · su nombre vendría de Xólotl, dios azteca que se lanzó al agua para no ser sacrificado */
function s11(t){let s=Rc(0,0,540,960,'#efdcb4');
  for(let i=0;i<14;i++)s+=Rc(i*40,0,20,26,i%2?'#c0392b':'#2a6f6a')+Rc(i*40+20,934,20,26,i%2?'#2a6f6a':'#c0392b');
  s+=P('M20 40 L520 40 L520 920 L20 920Z',ST('#7a4a2a',3));
  s+=G(270,520,1.35,0,NX.xolotl({dive:sg(t,100.5,102.6)},t),ap(t,96.3,.4));
  s+=WT(270,140,'su nombre vendría de',30,ap(t,96.3,.3),{fill:'#5a3418',stroke:'#5a3418'})+G(270,210,1,0,Ts(0,0,'Xólotl',64,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ap(t,97.2,.3));
  s+=pillA(270,860,'dios azteca',sg(t,98.0,98.25),{fill:'#2a6f6a',sz:16,w:800});
  s+=pillA(270,905,'para no ser sacrificado',sg(t,99.3,99.55),{fill:'#c0392b',sz:15,w:800,o:1-ao(t,102.2,.2)});
  s+=pillA(270,905,'¡se convirtió en ajolote!',sg(t,102.3,102.55),{fill:'url(#gRP)',sz:15,w:800});
  return s;}

/* 12 · en la vida real: canales de Xochimilco, su único hogar salvaje · 6.000/km² en 1998 → 36 en 2014 */
function s12(t){let s='';
  if(t<110.0){const T=t;
    s+=G(96+t*3,230,1,0,cloudS(96))+G(440+t*2,190,1,0,cloudS(70))+G(410,330,1,0,sunS(80));
    s+=G(70,470,1,0,humpS(260,120))+G(300,470,1,0,humpS(330,170))+G(520,470,1,0,humpS(240,100));
    s+=G(270,480,1,0,NX.xochicanal({boat:sg(t,103.5,110)},t));
    s+=Rc(0,662,540,300,'#3f9b4f')+bushBand(-40,580,662,40,7)+reeds(60,700,12,140,3,T)+reeds(480,700,10,120,8,T);
    if(t<106.6)s+=WT(270,120,'en la vida real…',38,ap(t,103.6,.3),{fill:K.ink,stroke:K.ink});
    s+=pillA(270,120,'canales de Xochimilco',sg(t,107.2,107.45),{fill:K.ink,sz:20,w:800});
    s+=pillA(300,730,'su único hogar salvaje',sg(t,108.6,108.85),{fill:'url(#gRP)',sz:18,w:800});
    s+=actor('pipa',{t0:105.0,path:[[105.0,-60],[106.4,130]],emo:[[105.0,2,0],[106.4,16,0]],s:.55,y:()=>860,face:()=>1,look:()=>1},t);
    return s;}
  s+=grid(t);
  s+=G(270,520,1.05,0,NX.axodensity({n0:240,n:3,at:115.1,dur:1.6,label:'1 km² de canal'},t));
  const yr=t<115.0?'1998':'2014';
  s+=G(270,150,1,0,Ts(0,0,yr,72,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),t<115.0?ap(t,112.9,.3):ap(t,115.1,.3));
  if(t<115.0)s+=G(270,860,1,0,Rc(-150,-40,300,80,'#fff',16,OL(2.6))+Tn(0,14,String(Math.round(6000*EZ.out(sg(t,110.4,111.2)))).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' / km²',34,800,{fill:K.ink}),ap(t,110.2,.3));
  else s+=G(270,860,1,0,Rc(-150,-40,300,80,'#fff',16,OL(2.6))+Tn(0,14,String(Math.round(lerp(6000,36,EZ.out(sg(t,115.3,117.1))))).replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' / km²',34,800,{fill:K.red}),ap(t,115.2,.3));
  if(t>117.0)s+=G(0,0,1,0,stampA(420,250,t-117.2,'−99 %',{c:K.red,sz:34,r:-6}));
  return s;}

/* 13 · el animal que puede regenerarlo casi todo… no puede regenerar su hogar */
function s13(t){let s=Rc(0,0,540,960,'#6f7a5a')+Rc(0,500,540,460,'#4f5a3c',0,'opacity:.6');
  for(let i=0;i<10;i++){const u=((t*.08)+hs(i*2.1))%1;s+=Ci(hs(i*5)*540,960-u*900,4+hs(i)*4,'#9aa07a','opacity:.4');}
  s+=G(0,0,1,0,El(130,840,60,16,'#3a3a3a','opacity:.5')+Rc(380,800,70,40,'#8a8f99',6,'opacity:.6'));
  s+=G(270,600,1.4,0,NX.axolotl({emo:'sad'},t));
  s+=WT(270,170,'puede regenerarlo',38,ap(t,118.4,.3))+HT(270,240,'casi todo…',56,ap(t,120.0,.3));
  s+=G(270,360,1,0,Ts(0,0,'…menos su hogar',40,{fill:'#fff',stroke:'#fff'}),ap(t,121.2,.3));
  return s;}

/* 14 · pregunta: ¿qué parte de tu cuerpo regenerarías? */
function s14(t){let s=groundLine(1);
  s+=WT(270,150,'si pudieras regenerar',32,ap(t,123.5,.3),{fill:K.ink,stroke:K.ink})+HT(270,225,'¿qué elegirías?',56,ap(t,125.9,.3));
  s+=actor('pipa',{t0:122.7,path:[[122.7,110]],emo:[[122.7,10,0],[125.9,9,0]],s:.7,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('garbanzo',{t0:122.9,path:[[122.9,430]],emo:[[122.9,9,0],[126.2,7,0]],s:.7,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=G(270,560,.75,0,NX.axolotl({},t),ap(t,124.0,.35));
  const ops=[['un diente',100,124.6],['una rodilla',270,124.9],['el pelo',440,125.2]];
  ops.forEach(([n,x,a])=>{s+=pillA(x,380,n,sg(t,a,a+.25),{fill:'#fff',tc:K.ink,sz:15,w:800,o:1-ao(t,127.0,.2)});});
  s+=pillA(270,380,'Te leo en comentarios',sg(t,127.2,127.45),{fill:'url(#gRP)',sz:18,w:800});
  return s;}

/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,128.6,129.2)));
  s+=G(0,0,1,0,Ts(270,352,'El ajolote que',28),ao(t,128.65,.3))+G(0,0,1,0,Ts(270,398,'nunca crece',36,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,128.75,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Smithsonian Magazine · Knowable Magazine · Natural History Museum',9.5,600)+Tn(270,474,'Conservation International · AP · bioRxiv (2024)',9.5,600),ao(t,128.9,.3));
  s+=G(270,700,.8,0,NX.axolotl({},t),ao(t,128.9,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:8.6,draw:s2,in:{type:'whipD',dur:.32}},
  {id:'3',a:13.1,draw:s3,in:{type:'glitch',dur:.3}},
  {id:'4',a:19.45,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'4b',a:20.8,draw:s4,in:{type:'glitch',dur:.3}},
  {id:'5',a:39.3,draw:s5,in:{type:'whipU',dur:.32}},
  {id:'6',a:46.45,draw:s6,in:{type:'glitch',dur:.3}},
  {id:'6b',a:52.6,draw:s6,in:{type:'zoom',dur:.45,fx:330,fy:520,z:6}},
  {id:'7',a:58.95,draw:s7,in:{type:'iris',dur:.4,fx:270,fy:560,r0:10}},
  {id:'8',a:63.0,draw:s8,in:{type:'whipD',dur:.32}},
  {id:'8b',a:64.5,draw:s8,in:{type:'glitch',dur:.3}},
  {id:'9',a:71.4,draw:s9,in:{type:'whipL',dur:.32}},
  {id:'9b',a:75.2,draw:s9,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'9c',a:80.9,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:86.45,draw:s10,in:{type:'zoom',dur:.45,fx:270,fy:480,z:6}},
  {id:'11',a:95.95,draw:s11,in:{type:'whipU',dur:.32}},
  {id:'12',a:103.35,draw:s12,in:{type:'iris',dur:.4,fx:270,fy:500,r0:10}},
  {id:'12b',a:110.0,draw:s12,in:{type:'zoom',dur:.45,fx:270,fy:560,z:6}},
  {id:'13',a:118.15,draw:s13,in:{type:'glitch',dur:.3}},
  {id:'14',a:122.4,draw:s14,in:{type:'whipL',dur:.32}},
  {id:'END',a:128.55,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[];
