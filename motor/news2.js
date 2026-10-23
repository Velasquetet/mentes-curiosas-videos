/* =====================================================================
   NEWS 2 · Ampliación de la biblioteca de noticias (17/10/2026)
   Misma convención que news.js:  NX.nombre(opciones, lt) → SVG centrado en (0,0)
   Grupos: J desastres/clima/emergencias · K política/sociedad/justicia/conflicto
           L economía/energía · M ciencia/espacio/salud/tecnología
           N rótulos/datos/mapas · O transporte · P deporte/cultura
   ===================================================================== */
const N2_START=NX_CATALOG.length;
const _N2=[];const n2cat=(name,fn,mode)=>_N2.push([name,fn,mode]);
/* utilidades compartidas */
const _osc=(lt,f=1,a=1,ph=0)=>Math.sin(lt*f*Math.PI*2+ph)*a;
function _skyline(w=420,o={}){const T=o.T||0,lit=o.lit??1,n=o.n||9,seed=o.seed||3;let s='';const bw=w/n;
  for(let i=0;i<n;i++){const h=70+hs(i*3.1+seed)*150,x=-w/2+i*bw,c=['#2a2f45','#353b57','#24283c'][i%3];
    s+=Rc(x+2,-h,bw-4,h,o.c||c,2,OL(1.6));
    for(let r=0;r<Math.floor(h/22);r++)for(let k=0;k<2;k++){const on=hs(i*7+r*3+k+seed)<.7;const blink=lit>=1?1:(hs(i+r*5+k)<lit?1:0);
      s+=Rc(x+7+k*(bw-4)/2.2,-h+10+r*22,(bw-4)/2.2-8,10,on&&blink?'#ffd86b':'#454b63',1.5);}}
  return s;}
function _person(c='#2a37d7',k=1,walk=0,lt=0){const sw=walk?Math.sin(lt*10)*8:0;return G(0,0,k,0,P(`M-5 0 L${f1(-5+sw*.6)} -26 M5 0 L${f1(5-sw*.6)} -26`,ST(K.ink,4))+Rc(-10,-58,20,34,c,8,OL(1.6))+Ci(0,-68,10,'#ffd2b0',OL(1.6)));}
function _house(c='#f4eee2',roof=K.red,k=1){return G(0,0,k,0,Rc(-40,-70,80,70,c,2,OL(2.2))+P('M-50 -70 L0 -112 L50 -70Z',`fill:${roof};${OL(2.2)}`)+Rc(-10,-34,20,34,'#66291f')+Rc(14,-58,18,16,'#bcd3f0',2,OL(1.4)));}
function _tree(k=1,bend=0){return G(0,0,k,0,P(`M0 0 Q${f1(bend*.3)} -40 ${f1(bend)} -70`,ST('#5a3119',7))+G(bend,-90,1,bend*.6,Ci(0,0,30,'#35a24c',OL(1.6))+Ci(-12,-8,12,'#4fbf63')));}
function _cloudDark(w=160,c='#6b7387'){const h=w*.34;return P(`M${-w/2} 0 Q${-w/2} ${-h*.7} ${-w*.28} ${-h*.62} Q${-w*.22} ${-h*1.25} ${-w*.02} ${-h*1.05} Q${w*.12} ${-h*1.5} ${w*.27} ${-h*.9} Q${w*.5} ${-h*.95} ${w/2} 0 Z`,`fill:${c};${OL(2)}`);}

/* ===================== J · DESASTRES, CLIMA Y EMERGENCIAS ===================== */
/* Tsunami: ola gigante que avanza hacia la costa · o:{h} */
NX.tsunami=(o={},lt)=>{const q=EZ.io(sg(lt,.2,2.6)),x=lerp(260,-40,q),H=(o.h||190)*(.6+.4*q);let s='';
  s+=Rc(-250,-10,500,90,'#e9c58a')+P('M-250 -10 L250 -10',ST(K.ink,2));
  [-170,-90].forEach((hx,i)=>s+=G(hx,-10,.55,0,_house(i?'#ffd0b8':'#f4eee2',i?K.blue:K.red)));
  s+=G(-210,-10,.8,0,_tree(1,Math.sin(lt*3)*6));
  let d=`M${f1(x-60)} 80 Q${f1(x-40)} ${f1(-H*.4)} ${f1(x+30)} ${f1(-H)} Q${f1(x+90)} ${f1(-H*1.08)} ${f1(x+110)} ${f1(-H*.8)} Q${f1(x+70)} ${f1(-H*.85)} ${f1(x+60)} ${f1(-H*.55)} Q${f1(x+120)} ${f1(-H*.2)} 260 -10 L260 80Z`;
  s+=clipG(P(d,'fill:url(#gUW)')+P(`M${f1(x+30)} ${f1(-H)} Q${f1(x+90)} ${f1(-H*1.08)} ${f1(x+110)} ${f1(-H*.8)}`,ST('#fff',7))+[...Array(6)].map((_,i)=>Ci(x+40+i*16+_osc(lt,2,3,i),-H*1.02+Math.abs(_osc(lt,1.5,6,i)),5,'#fff')).join(''),Rc(-250,-400,500,480,'#000'))+P(d,`fill:none;${OL(2.2)}`);
  if(o.label!==false)s+=G(160,-H-60,1,0,pill(o.label||'TSUNAMI',{sz:15,w:800,fill:K.red}),_ao(lt,.8,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('tsunami · Ola gigante',lt=>NX.tsunami({},lt));
/* Tornado: embudo girando con escombros · o:{} */
NX.tornado=(o={},lt)=>{let s='';const sway=_osc(lt,.4,24);
  for(let i=0;i<12;i++){const y=-260+i*22,w=lerp(130,16,i/11),x=sway*(i/11)+_osc(lt,1.5,6,i*.6);s+=El(x,y,w,9,i%2?'#8a90a0':'#a5abb8',OL(1.6));
    s+=P(`M${f1(x-w*.6)} ${f1(y)} q${f1(w*.3)} 5 ${f1(w*.6)} 0`,ST('#fff',1.6,'opacity:.5'));}
  for(let i=0;i<8;i++){const a=lt*4+i*.8,r=60+hs(i)*50,y=-60-hs(i+2)*140;s+=G(Math.cos(a)*r+sway*.6,y+Math.sin(a)*14,1,lt*200+i*40,Rc(-5,-3,10,6,['#66291f','#2b7a3e','#9a9a9a'][i%3],1));}
  s+=G(0,-262,1,0,_cloudDark(340,'#596173'));
  return G(0,0,_ap(lt,0,.4),0,El(sway,4,60,9,'rgba(20,18,18,.2)')+s);};
n2cat('tornado · Tornado',lt=>G(0,120,1,0,NX.tornado({},lt)));
/* Sequía: tierra agrietada, planta seca y sol · o:{} */
NX.drought=(o={},lt)=>{let s=G(110,-200,1,0,sunS(54));
  s+=P('M-230 0 L230 0 L230 90 L-230 90Z','fill:#d99a52;'+OL(2.2));
  const cr=EZ.out(sg(lt,.3,1.6));
  ['M-200 10 L-160 40 L-170 80','M-160 40 L-100 50 L-60 30','M-100 50 L-110 86','M-20 20 L20 50 L80 40 L120 70','M20 50 L10 88','M80 40 L110 10','M140 30 L180 60 L220 40','M180 60 L170 88'].forEach((d,i)=>s+=DR(d,ST('#7d3a23',3),cr));
  s+=G(-60,0,1,0,P('M0 0 Q-4 -30 6 -60',ST('#8a6a3a',4))+P('M4 -40 Q-20 -46 -26 -30 M6 -54 Q24 -64 28 -48',ST('#a8834d',3)));
  s+=G(60,-10,1,0,Ci(0,0,22,'none',ST('#8a6a3a',3,'stroke-dasharray:4 5')),.0);
  for(let i=0;i<3;i++)s+=P(`M${-120+i*90} ${f1(-60-_osc(lt,.8,6,i))} q8 -12 0 -24 q-8 -12 0 -24`,ST(K.orange,3,'opacity:.55'));
  if(o.label)s+=G(0,130,1,0,pill(o.label,{sz:14,w:700,fill:K.orange}),_ao(lt,.6,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('drought · Sequía',lt=>NX.drought({label:'Sin lluvia desde junio'},lt));
/* Nevada / temporal de nieve · o:{depth} */
NX.blizzard=(o={},lt)=>{let s=_cloudDark(300,'#8e97aa');const d=(o.depth??40)*EZ.out(sg(lt,.2,2.4));
  for(let i=0;i<34;i++){const q=((lt*.45)+hs(i))%1,x=-200+hs(i*2.7)*400+_osc(lt,.6,10,i)+q*40,y=-10+q*230;s+=G(x,y,1,lt*60+i*20,P('M-5 0 L5 0 M0 -5 L0 5 M-3.5 -3.5 L3.5 3.5 M-3.5 3.5 L3.5 -3.5',ST('#fff',2)),1-sg(q,.85,1));}
  s+=G(0,230,1,0,_house('#f4eee2',K.blue,.8)+P(`M-60 ${f1(-88*0.8-d*.15)} Q0 ${f1(-112*.8-d*.5)} 60 ${f1(-88*.8-d*.15)}`,ST('#fff',d*.18+3)));
  s+=P(`M-240 230 Q-120 ${f1(230-d)} 0 ${f1(230-d*.8)} Q120 ${f1(230-d*1.1)} 240 230 L240 260 L-240 260Z`,'fill:#ffffff;'+OL(2));
  if(o.label)s+=G(0,-120,1,0,pill(o.label,{sz:14,w:700,fill:K.blue}),_ao(lt,.6,.3));
  return G(0,-90,_ap(lt,0,.4),0,s);};
n2cat('blizzard · Temporal de nieve',lt=>NX.blizzard({label:'Aviso por nieve'},lt));
/* Deslizamiento de tierra · o:{} */
NX.landslide=(o={},lt)=>{const q=EZ.in2(sg(lt,.6,2.2));let s='';
  s+=P('M-240 60 L-240 -200 Q-150 -220 -60 -120 L60 60Z','fill:#8a6a3a;'+OL(2.2))+P('M-240 -200 Q-150 -220 -60 -120',ST('#4fbf63',10));
  s+=G(-150+q*120,-110+q*120,1,q*30,P('M-60 -40 Q0 -70 60 -30 L50 30 L-50 40Z','fill:#a8743e;'+OL(2))+[...Array(5)].map((_,i)=>Ci(-30+i*16,-10+hs(i)*20,6+hs(i+1)*5,'#7d4a2a')).join('')+G(10,-46,.6,0,_tree(1,0)));
  for(let i=0;i<6;i++){const qq=sg(lt,.8+i*.08,2.2);if(qq>0)s+=Ci(-80+qq*160+hs(i)*20,-40+qq*80,6,'#7d4a2a',`opacity:${f2(1-sg(qq,.8,1))}`);}
  s+=G(130,60,.8,q>.85?-8*(q-.85)/.15:0,_house());s+=P('M-240 60 L240 60',ST(K.ink,2.4));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('landslide · Deslizamiento de tierra',lt=>NX.landslide({},lt));
/* Ola de calor sobre la ciudad · o:{temp} */
NX.heatcity=(o={},lt)=>{let s=G(0,-230,1+.04*Math.sin(lt*4),0,Ci(0,0,90,'rgba(247,110,25,.18)')+sunS(64));
  s+=_skyline(440,{T:lt,c:'#5a3a3a'});
  for(let i=0;i<5;i++)s+=P(`M${-180+i*90} ${f1(-250+_osc(lt,.7,8,i))} q12 -14 0 -28 q-12 -14 0 -28`,ST(K.orange,3,'opacity:.5'));
  s=G(0,0,1,0,s)+Rc(-240,-330,480,340,'url(#gSUN)',0,'opacity:.12;mix-blend-mode:multiply');
  if(o.temp)s+=G(150,-120,1,0,pill(o.temp+' °C',{sz:22,w:800,fill:'url(#gSUN)'}),_ap(lt,.5,.35));
  return G(0,0,_ao(lt,0,.4),0,s);};
n2cat('heatcity · Ola de calor en la ciudad',lt=>G(0,140,1,0,NX.heatcity({temp:44},lt)));
/* Humo y calidad del aire · o:{aqi} */
NX.smoke=(o={},lt)=>{let s=_skyline(440,{T:lt});
  for(let i=0;i<9;i++){const q=((lt*.18)+i/9)%1;s+=Ci(-260+q*520,-200-hs(i)*80+_osc(lt,.4,8,i),60+hs(i+3)*40,'#7d7268',`opacity:${f2(.45*Math.sin(Math.PI*q))}`);}
  const v=(o.aqi||210)*EZ.out(sg(lt,.4,1.6)),c=v>200?'#8e1f4f':v>150?K.red:v>100?K.orange:K.green;
  s+=G(150,-250,_ap(lt,.3,.35),0,Rc(-62,-34,124,68,'#fff',12,OL(2.2))+Tn(0,-10,'CALIDAD DEL AIRE',9,800,{ls:.1})+Tn(0,22,_fmt(v),28,800,{fill:c}));
  return G(0,0,_ao(lt,0,.4),0,s);};
n2cat('smoke · Humo / calidad del aire',lt=>G(0,140,1,0,NX.smoke({},lt)));
/* Edificio dañado (derrumbe) · o:{} */
NX.collapse=(o={},lt)=>{const sh=lt<1?_osc(lt,9,4*(1-lt)):0;let s='';
  s+=G(sh,0,1,0,P('M-110 0 L-110 -230 L60 -230 L60 -150 L100 -120 L80 -60 L110 0Z','fill:#e6dccb;'+OL(2.4))+
    [...Array(4)].map((_,r)=>[0,1,2].map(c=>Rc(-90+c*50,-210+r*50,30,28,r===1&&c===2?'#2a2f45':'#bcd3f0',2,OL(1.4))).join('')).join(''));
  s+=DR('M-30 -230 L-20 -180 L-40 -140 L-10 -90 L-30 -40',ST(K.ink,2.6),sg(lt,.2,.9));
  for(let i=0;i<10;i++){const x=40+hs(i)*130,y=-hs(i+5)*40;s+=G(x,y,1,hs(i)*60,Rc(-12,-8,20+hs(i+2)*14,14,['#c9b79c','#a8946f','#e6dccb'][i%3],2,OL(1.4)),_ao(lt,.4+i*.05,.25));}
  for(let i=0;i<4;i++){const q=((lt*.5)+i/4)%1;s+=Ci(90+i*14,-30-q*90,14+q*20,'#b9b0a0',`opacity:${f2(.5*(1-q))}`);}
  return G(0,0,_ap(lt,0,.4),0,s+P('M-200 0 L220 0',ST(K.ink,2.4)));};
n2cat('collapse · Edificio derrumbado',lt=>G(0,120,1,0,NX.collapse({},lt)));
/* Apagón: la ciudad se queda a oscuras · o:{} */
NX.blackout=(o={},lt)=>{const off=sg(lt,.8,1.6),flick=lt>.8&&lt<1.4&&Math.floor(lt*14)%2===0;
  let s=Rc(-240,-330,480,340,mixc('#bcd3f0','#121530',off),12);
  for(let i=0;i<20;i++)s+=Ci(-220+hs(i)*440,-310+hs(i+4)*120,1.4,'#fff',`opacity:${f2(off)}`);
  s+=G(150,-260,1,0,Ci(0,0,26,'#fff7d6')+Ci(9,-6,22,mixc('#bcd3f0','#121530',off)),off);
  s+=_skyline(460,{T:lt,lit:flick?1:1-off});
  s+=G(-150,-250,_ap(lt,1.3,.35),0,Ci(0,0,34,'#fff',OL(2.4))+P('M-12 6 Q-16 -22 0 -24 Q16 -22 12 6Z','fill:#cfcfcf;'+OL(2))+Rc(-8,6,16,10,'#9a9a9a',2)+P('M-30 30 L30 -30',ST(K.red,6)));
  return G(0,0,_ao(lt,0,.3),0,s);};
n2cat('blackout · Apagón',lt=>G(0,150,1,0,NX.blackout({},lt)));
/* Evacuación: gente caminando hacia la salida · o:{n} */
NX.evacuation=(o={},lt)=>{let s=P('M-240 0 L240 0',ST(K.ink,2.4));const n=o.n||7;
  for(let i=0;i<n;i++){const q=((lt*.18)+i/n)%1,x=lerp(-260,260,q);s+=G(x,0,.9+hs(i)*.2,0,_person(['#2a37d7','#e73568','#8005f0','#f6a81a','#2b7a3e'][i%5],1,1,lt+i),Math.sin(Math.PI*q)*1.4>1?1:Math.sin(Math.PI*q)*1.4);}
  s+=G(0,-150,_ap(lt,.2,.35),0,Rc(-135,-36,270,72,K.green,10,OL(2.4))+P('M-116 0 L-70 0 M-86 -16 L-70 0 L-86 16',ST('#fff',6))+Tn(30,8,'EVACUACIÓN',20,800,{fill:'#fff'}));
  return s;};
n2cat('evacuation · Evacuación',lt=>G(0,120,1,0,NX.evacuation({},lt)));
/* Helicóptero de rescate · o:{c} */
NX.helicopter=(o={},lt)=>{const c=o.c||K.red,bob=_osc(lt,.5,6),rot=Math.abs(Math.cos(lt*40));let s='';
  s+=G(0,bob,1,0,P('M-130 -40 L-40 -36 L-40 -24 L-130 -32Z','fill:'+c+';'+OL(2))+P('M-136 -50 L-120 -50 L-120 -24 L-136 -24Z','fill:#fff;'+OL(1.6))+
    P('M-50 -50 Q-40 -76 10 -76 Q60 -76 74 -40 Q80 -10 50 -6 L-40 -6 Q-56 -20 -50 -50Z','fill:'+c+';'+OL(2.4))+P('M20 -70 Q56 -68 66 -40 L20 -40Z','fill:#bcd3f0;'+OL(1.6))+
    Rc(-6,-90,12,14,K.ink,2)+El(0,-92,150*rot+10,5,K.ink)+P('M-30 6 L50 6 M-20 -6 L-24 6 M40 -6 L44 6',ST(K.ink,3))+Rc(-30,-38,30,18,'#fff',2)+Tn(-15,-24,'+',16,800,{fill:c}));
  if(o.rope!==false){const L=60+_osc(lt,.3,10);s+=P(`M10 ${f1(bob+6)} L10 ${f1(bob+6+L)}`,ST(K.ink,2))+G(10,bob+6+L,.7,0,_person('#f6a81a'));}
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('helicopter · Helicóptero de rescate',lt=>NX.helicopter({},lt));
/* Ambulancia con luces · o:{dir} */
NX.ambulance=(o={},lt)=>{const on=Math.floor(lt*6)%2===0;let s=shadowE(0,4,130,.15)+Rc(-130,-110,170,104,'#fff',8,OL(2.4))+P('M40 -90 L90 -90 L124 -50 L124 -6 L40 -6Z','fill:#fff;'+OL(2.4))+P('M52 -80 L86 -80 L110 -50 L52 -50Z','fill:#bcd3f0;'+OL(1.6));
  s+=Rc(-130,-50,254,14,K.red)+Rc(-82,-84,40,16,K.red,2)+Rc(-70,-96,16,40,K.red,2);
  s+=Rc(-40,-122,22,12,on?'#ff3b3b':'#7a1f1f',4,OL(1.4))+Rc(-14,-122,22,12,on?'#2b3fff':'#16207a',4,OL(1.4));
  if(on)s+=Ci(-29,-116,24,'rgba(255,59,59,.25)');else s+=Ci(-3,-116,24,'rgba(43,63,255,.25)');
  s+=[-90,80].map(x=>G(x,-4,1,0,Ci(0,0,20,K.ink)+Ci(0,0,8,'#ccc'))).join('');
  return G(_osc(lt,3,1.5),0,_ap(lt,0,.4)*(o.dir||1),0,s,1,_ap(lt,0,.4));};
n2cat('ambulance · Ambulancia',lt=>G(0,60,1,0,NX.ambulance({},lt)));
/* Camión de bomberos · o:{} */
NX.firetruck=(o={},lt)=>{const on=Math.floor(lt*5)%2===0;let s=shadowE(0,4,160,.15)+Rc(-170,-90,230,84,K.red,6,OL(2.4))+P('M60 -100 L120 -100 L150 -60 L150 -6 L60 -6Z','fill:'+K.red+';'+OL(2.4))+P('M72 -90 L114 -90 L136 -60 L72 -60Z','fill:#bcd3f0;'+OL(1.6));
  s+=Rc(-170,-40,320,8,'#fff')+G(-60,-104,1,-6,Rc(-110,-6,220,12,'#d6dbe2',3,OL(1.8))+[...Array(9)].map((_,i)=>P(`M${-100+i*25} -6 L${-100+i*25} 6`,ST(K.ink,1.6))).join(''));
  s+=Rc(80,-112,26,12,on?'#ff3b3b':'#7a1f1f',4,OL(1.4))+Rc(110,-112,26,12,on?'#7a1f1f':'#ff3b3b',4,OL(1.4));
  s+=[-130,-60,100].map(x=>G(x,-4,1,0,Ci(0,0,20,K.ink)+Ci(0,0,8,'#ccc'))).join('');
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('firetruck · Bomberos',lt=>G(0,60,1,0,NX.firetruck({},lt)));
/* Sacos terreros contra el agua · o:{} */
NX.sandbags=(o={},lt)=>{let s='';const lv=EZ.io(sg(lt,.3,2.2));
  s+=Rc(-240,-lv*80,240,lv*80+20,'url(#gWA)')+P(`M-240 ${f1(-lv*80)} ${[...Array(6)].map((_,i)=>`Q${-220+i*40} ${f1(-lv*80-4+_osc(lt,1,3,i))} ${-200+i*40} ${f1(-lv*80)}`).join(' ')}`,ST('#a7b0ff',2.4));
  for(let r=0;r<4;r++)for(let c=0;c<4-r*.5;c++){const x=-30+c*44+(r%2)*22,y=-22-r*26;if(x>130)continue;s+=G(x,y,_ap(lt,r*.12+c*.05,.25),0,El(0,0,24,13,'#d9c49a',OL(2))+P('M-14 -2 q14 6 28 0',ST('#a8946f',1.6)));}
  s+=G(170,0,.7,0,_house())+P('M-240 0 L240 0',ST(K.ink,2.4));
  return s;};
n2cat('sandbags · Sacos terreros',lt=>G(0,80,1,0,NX.sandbags({},lt)));
/* Escala de magnitud (comparar terremotos) · o:{items:[[mag,label]],hl} */
NX.magscale=(o={},lt)=>{const it=o.items||[[5,'moderado'],[7,'mayor'],[9.5,'Chile 1960']],w=420,mx=10;let s=Rc(-w/2,-14,w,28,'#fff',14,OL(2.2));
  s+=clipG(Rc(-w/2,-14,w*EZ.out(sg(lt,.2,1.2)),28,lgrad([[0,'#3f9b4f'],[.5,'#f6a81a'],[1,'#e2264a']],0,0,1,0)),Rc(-w/2,-14,w,28,'#000',14));
  for(let m=1;m<=mx;m++)s+=Tn(-w/2+w*m/mx-2,38,String(m),12,700,{fill:'#555'});
  it.forEach(([m,lab],i)=>{const x=-w/2+w*m/mx,p=_ap(lt,.8+i*.3,.3),up=i%2===0;if(p<=0)return;s+=G(x,0,p,0,P(`M0 ${up?-16:16} L0 ${up?-46:46}`,ST(K.ink,2))+G(0,up?-64:68,1,0,pill(String(m).replace('.',',')+' · '+lab,{sz:12,w:700,fill:i===it.length-1?'url(#gRP)':K.ink})));});
  return s;};
n2cat('magscale · Escala de magnitud',lt=>NX.magscale({},lt));
/* Granizo cayendo sobre un coche · o:{size} */
NX.hail=(o={},lt)=>{let s=_cloudDark(320,'#7d8597');
  for(let i=0;i<22;i++){const q=((lt*.9)+hs(i))%1,x=-150+hs(i*3.3)*300,y=10+q*230,r=(o.size||7)*(.7+hs(i+1)*.6);s+=Ci(x,y,r,'#eaf6ff',OL(1.4)+';opacity:'+f2(1-sg(q,.9,1)));}
  s+=G(0,250,1,0,P('M-110 0 L-100 -36 Q-90 -54 -50 -56 L40 -56 Q70 -54 84 -30 L106 -24 Q114 -18 112 0Z','fill:url(#gRP);'+OL(2.4))+Rc(-74,-48,46,22,'#bcd3f0',4,OL(1.4))+Rc(-16,-48,50,22,'#bcd3f0',4,OL(1.4))+
    [[-60,-62],[10,-60],[50,-50]].map(([x,y],i)=>El(x,y+6,7,3,'rgba(20,18,18,.3)')).join('')+Ci(-66,4,18,K.ink)+Ci(70,4,18,K.ink));
  return G(0,-100,_ap(lt,0,.4),0,s);};
n2cat('hail · Granizo',lt=>NX.hail({},lt));
/* Vertido de petróleo · o:{} */
NX.oilspill=(o={},lt)=>{const q=EZ.out(sg(lt,.4,2.6));let s=Rc(-250,-170,500,340,'url(#gWA)',14);
  for(let i=0;i<10;i++)s+=P(`M${-220+hs(i)*440} ${-150+hs(i+3)*300} q8 -3 16 0 t16 0`,ST('#fff',1.8,'opacity:.45'));
  let d='';for(let i=0;i<=24;i++){const a=i/24*Math.PI*2,r=(40+150*q)*(1+.18*Math.sin(a*3+1)+.1*Math.sin(a*5));d+=(i?' L':'M')+f1(-30+Math.cos(a)*r*1.3)+' '+f1(20+Math.sin(a)*r*.6);}
  s+=P(d+'Z','fill:#16130f;opacity:.88')+P(d+'Z',`fill:none;stroke:${'#6b4a8a'};stroke-width:3;opacity:.5`);
  s+=G(-40,-20,.55,-12,P('M-110 0 L110 0 L90 34 L-96 34Z','fill:'+K.red+';'+OL(2.4))+Rc(-80,-30,140,30,'#fff',4,OL(2))+Rc(30,-60,30,30,'#fff',3,OL(2)));
  return clipG(s,Rc(-250,-170,500,340,'#000',14))+Rc(-250,-170,500,340,'none',14,OL(2.4));};
n2cat('oilspill · Vertido de petróleo',lt=>NX.oilspill({},lt));
/* Glaciar que se derrite · o:{} */
NX.glacier=(o={},lt)=>{const m=EZ.io(sg(lt,.3,2.6));let s=Rc(-250,0,500,120,'url(#gWA)');
  const top=-170+m*90;s+=P(`M-200 0 L-180 ${f1(top+30)} L-120 ${f1(top)} L-40 ${f1(top+20)} L30 ${f1(top-10)} L110 ${f1(top+30)} L170 ${f1(top+10)} L210 0Z`,'fill:#e8f6ff;'+OL(2.4))+
    P(`M-120 ${f1(top)} L-100 ${f1(top+60)} M30 ${f1(top-10)} L40 ${f1(top+50)}`,ST('#9fd8ff',3));
  for(let i=0;i<5;i++){const q=((lt*.8)+i/5)%1;s+=G(-150+i*70,lerp(-6,60,q),1,0,dropS(5,'#9fd8ff'),1-q);}
  s+=G(150,24+_osc(lt,.4,4),1,0,P('M-26 0 L-14 -26 L16 -22 L26 0Z','fill:#e8f6ff;'+OL(2)),_ao(lt,1.4,.4));
  s+=G(-200,-30,1,0,Rc(-6,-120,12,150,'#fff',3,OL(1.6))+[...Array(6)].map((_,i)=>P(`M-6 ${-110+i*20} l8 0`,ST(K.ink,1.4))).join('')+Rc(-3,30-m*40,6,m*40,K.blue,2),_ao(lt,.5,.3));
  return s+P('M-250 0 L250 0',ST('#a7b0ff',2.4));};
n2cat('glacier · Glaciar que se derrite',lt=>G(0,80,1,0,NX.glacier({},lt)));
/* Previsión del tiempo (tarjeta de 4 días) · o:{days:[[día,icono,max,min]]} icono: sun|cloud|rain|storm|snow */
function _wxIcon(k,lt=0){if(k==='sun')return G(0,0,.42,lt*20,Ci(0,0,30,'url(#gSUN)')+[...Array(8)].map((_,i)=>G(0,0,1,i*45,Rc(-3,-52,6,14,K.yellow,3))).join(''));
  const cl=G(0,4,.5,0,cloudS(90));if(k==='cloud')return cl;
  if(k==='rain')return cl+[...Array(3)].map((_,i)=>P(`M${-12+i*12} ${f1(14+((lt*2+i/3)%1)*10)} l-3 7`,ST('#2a37d7',2.4))).join('');
  if(k==='storm')return G(0,4,.5,0,_cloudDark(90))+P('M2 8 L-6 22 L2 22 L-4 34 L10 16 L2 16 L8 8Z','fill:#ffd23f;'+OL(1));
  if(k==='snow')return cl+[...Array(3)].map((_,i)=>Tn(-12+i*12,26,'*',16,800,{fill:'#7fb2ff'})).join('');return '';}
NX.forecast=(o={},lt)=>{const d=o.days||[['LUN','sun',31,18],['MAR','cloud',27,17],['MIÉ','rain',22,15],['JUE','storm',19,13]];const w=96;let s='';
  d.forEach(([day,ic,mx,mn],i)=>{const x=(i-(d.length-1)/2)*(w+10),p=_ap(lt,.1+i*.12,.3);if(p<=0)return;
    s+=G(x,0,p,0,Rc(-w/2+3,-82,w,170,K.ink,12)+Rc(-w/2,-85,w,170,'#fff',12,OL(2))+Tn(0,-58,day,13,800,{ls:.08})+G(0,-14,1,0,_wxIcon(ic,lt))+Tn(0,42,mx+'°',22,700)+Tn(0,66,mn+'°',14,600,{fill:'#7a7a7a'}));});
  if(o.title)s+=G(0,-120,1,0,Ts(0,0,o.title,26),_ao(lt,0,.3));return s;};
n2cat('forecast · Previsión del tiempo',lt=>NX.forecast({title:'Previsión'},lt));
/* Viento fuerte: árboles doblados y rachas · o:{kmh} */
NX.wind=(o={},lt)=>{const g=.6+.4*Math.abs(Math.sin(lt*1.3));let s=P('M-240 0 L240 0',ST(K.ink,2.4));
  [-170,-60,60,170].forEach((x,i)=>s+=G(x,0,.9,0,_tree(1,26*g+_osc(lt,1.2,4,i))));
  for(let i=0;i<7;i++){const q=((lt*.9)+i/7)%1;s+=P(`M${f1(-280+q*560)} ${f1(-200+hs(i)*160)} q30 -10 60 0 t60 0`,ST('#fff',3,`opacity:${f2(Math.sin(Math.PI*q))}`));}
  if(o.kmh)s+=G(0,-250,1,0,pill('rachas de '+o.kmh+' km/h',{sz:15,w:800,fill:K.blue}),_ap(lt,.4,.35));
  return s;};
n2cat('wind · Viento fuerte',lt=>G(0,140,1,0,NX.wind({kmh:110},lt)));

/* ===================== K · POLÍTICA, SOCIEDAD, JUSTICIA Y CONFLICTO ===================== */
/* Mazo de juez golpeando · o:{label} */
NX.gavel=(o={},lt)=>{const hit=lt%1.6,a=hit<.25?lerp(-40,0,EZ.in(hit/.25)):hit<.6?0:lerp(0,-40,EZ.io(sg(hit,.6,1.6)));let s='';
  s+=El(0,40,90,18,'#7d4a2a',OL(2.2))+El(0,32,90,18,'#a0623a',OL(2.2));
  s+=G(60,-10,1,a,G(-70,0,1,0,Rc(-100,-8,110,16,'#7d4a2a',6,OL(2))+Rc(-20,-30,40,60,'#a0623a',8,OL(2.2))+Rc(-24,-14,48,8,'#f6a81a',2)));
  if(hit<.4&&lt>.2){const q=hit/.4;for(let i=0;i<6;i++){const an=-Math.PI*(i/5);s+=P(`M${f1(Math.cos(an)*(30+q*40))} ${f1(30+Math.sin(an)*(14+q*18))} l${f1(Math.cos(an)*12)} ${f1(Math.sin(an)*6)}`,ST(K.ink,2.4,`opacity:${f2(1-q)}`));}}
  if(o.label)s+=G(0,110,1,0,pill(o.label,{sz:14,w:700}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('gavel · Mazo del juez',lt=>NX.gavel({label:'Sentencia'},lt));
/* Balanza de la justicia que se inclina · o:{tilt (-1..1)} */
NX.justice=(o={},lt)=>{const t=(o.tilt??.5)*EZ.el(sg(lt,.4,1.8))*14;let s=Rc(-8,-150,16,180,'#c9a24a',4,OL(2))+El(0,34,70,14,'#c9a24a',OL(2))+Ci(0,-156,12,'#c9a24a',OL(2));
  s+=G(0,-140,1,t,Rc(-130,-5,260,10,'#c9a24a',5,OL(2))+[-120,120].map((x,i)=>G(x,0,1,-t,P('M0 0 L-34 70 M0 0 L34 70',ST(K.ink,1.6))+P('M-44 70 Q0 100 44 70Z','fill:#e6c66a;'+OL(2)))).join(''));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('justice · Balanza de la justicia',lt=>G(0,80,1,0,NX.justice({},lt)));
/* Esposas (detención) · o:{label} */
NX.handcuffs=(o={},lt)=>{const sw=_osc(lt,.8,8);let s='';
  [-60,60].forEach((x,i)=>s+=G(x,0,1,i?sw:-sw,Ci(0,0,44,'none',ST('#5b5f66',14))+Ci(0,0,44,'none',ST('#c9ced6',8))+Rc(-14,-60,28,22,'#8a9099',4,OL(2))));
  s+=P('M-20 -46 Q0 -70 20 -46',ST('#5b5f66',8))+P('M-20 -46 Q0 -70 20 -46',ST('#c9ced6',4));
  if(o.label)s+=G(0,90,1,0,pill(o.label,{sz:14,w:700,fill:K.blue}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('handcuffs · Detención',lt=>NX.handcuffs({label:'Detenido'},lt));
/* Firma de un documento (ley, decreto, acuerdo) · o:{title} */
NX.signing=(o={},lt)=>{const p=EZ.io(sg(lt,.6,2.0));let s=Rc(-140,-170,280,330,K.ink,8)+Rc(-146,-176,280,330,'#fbf8f2',8,OL(2.2));
  s+=Ts(-6,-128,o.title||'DECRETO',24)+[...Array(7)].map((_,i)=>Rc(-118,-100+i*20,i===6?140:236,6,'#d7d0c4',3)).join('')+P('M-110 110 L40 110',ST(K.ink,1.4));
  const sig='M-104 100 C-90 70 -80 120 -64 92 C-52 70 -46 110 -30 96 C-20 86 -10 100 0 92 C10 84 20 104 34 94';
  s+=DR(sig,ST('#1b2596',3),p);
  const L=lerp(0,1,p),px=lerp(-104,34,L),py=lerp(100,94,L)+_osc(lt,3,10)*(p>0&&p<1?1:0);
  if(p<1)s+=G(px,py,1,35,Rc(-5,-90,10,90,'#2a2f45',4,OL(1.6))+P('M-5 0 L0 12 L5 0Z','fill:#c9a24a;'+OL(1.2)));
  if(p>=1)s+=stampA(80,40,lt-2.1,'FIRMADO',{r:-10,sz:20,c:K.green});
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('signing · Firma de un documento',lt=>NX.signing({},lt));
/* Cumbre: mesa redonda con banderas · o:{flags:[[colores],…],label} */
NX.summit=(o={},lt)=>{const fl=o.flags||[['#c60b1e','#ffc400','#c60b1e'],['#0055a4','#fff','#ef4135'],['#000','#dd0000','#ffce00'],['#009246','#fff','#ce2b37'],['#003399','#003399','#003399'],['#fff','#bc002d','#fff']];let s='';
  s+=El(0,40,190,64,'#7d4a2a',OL(2.4))+El(0,30,190,64,'#a0623a',OL(2.4))+El(0,30,150,44,'#b8754a');
  fl.forEach((c,i)=>{const a=Math.PI*(1+i/(fl.length-1)),x=Math.cos(a)*170,y=30+Math.sin(a)*60,p=_ap(lt,.2+i*.1,.3);if(p<=0)return;
    s+=G(x,y,p,0,P('M0 0 L0 -70',ST(K.ink,3))+G(0,-70,1,0,Rc(0,0,44,30,'#fff',2,OL(1.6))+c.map((cc,k)=>Rc(k*44/3,0,44/3,30,cc)).join('')+Rc(0,0,44,30,'none',2,OL(1.6))));});
  for(let i=0;i<5;i++){const a=Math.PI*(.15+i*.175),x=Math.cos(a)*120,y=30+Math.sin(a)*40;s+=G(x,y,.9,0,Rc(-10,-8,20,10,'#fff',2,OL(1.2)));}
  if(o.label)s+=G(0,150,1,0,pill(o.label,{sz:15,w:800,fill:'url(#gRP)'}),_ao(lt,.6,.3));
  return s;};
n2cat('summit · Cumbre internacional',lt=>NX.summit({label:'Cumbre'},lt));
/* Frontera con barrera que se levanta · o:{open} */
NX.border=(o={},lt)=>{const a=(o.open??1)*EZ.io(sg(lt,.8,1.8))*-70;let s='';
  for(let i=0;i<9;i++)s+=Rc(-240+i*26,-120,6,120,'#8a9099',2,OL(1.2));s+=P('M-240 -110 L-16 -110 M-240 -60 L-16 -60',ST('#8a9099',3));
  for(let i=0;i<9;i++)s+=Rc(30+i*26,-120,6,120,'#8a9099',2,OL(1.2));s+=P('M30 -110 L254 -110 M30 -60 L254 -60',ST('#8a9099',3));
  s+=G(-60,-110,1,0,Rc(-40,-70,80,70,'#fff',4,OL(2.2))+Rc(-30,-56,60,26,'#bcd3f0',2,OL(1.4))+Rc(-44,-82,88,14,K.blue,3,OL(1.6)))+P('M-240 0 L250 0',ST(K.ink,2.4));
  s+=G(-14,-40,1,a,Rc(0,-6,170,12,'#fff',6,OL(2))+[0,1,2,3,4].map(i=>Rc(10+i*34,-6,16,12,K.red)).join(''))+Rc(-22,-46,16,46,K.ink,3);
  s+=pillA(160,-170,o.label||'FRONTERA',_ao(lt,.4,.3),{sz:14,w:800});
  return s;};
n2cat('border · Frontera',lt=>G(0,80,1,0,NX.border({},lt)));
/* Pasaporte con sello · o:{} */
NX.passport=(o={},lt)=>{let s=Rc(-96,-130,192,260,'#7a1f2b',10,OL(2.4))+Ci(0,-30,34,'none',ST('#e6c66a',3))+P('M-34 -30 L34 -30 M0 -64 Q-20 -30 0 4 Q20 -30 0 -64',ST('#e6c66a',2))+Tn(0,46,'PASAPORTE',15,800,{fill:'#e6c66a',ls:.12})+Tn(0,72,'PASSPORT',10,700,{fill:'#e6c66a',ls:.2});
  s=G(0,0,1,_osc(lt,.3,3),s);
  s+=stampA(60,70,lt-1.0,o.stamp||'ENTRADA',{r:-14,sz:18,c:K.blue,fill:'rgba(255,255,255,.85)'});
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('passport · Pasaporte',lt=>NX.passport({},lt));
/* Campamento de tiendas (refugiados, damnificados) · o:{n} */
NX.tents=(o={},lt)=>{let s=P('M-250 0 L250 0',ST(K.ink,2.4))+Rc(-250,0,500,40,'#e9c58a');const n=o.n||7;
  for(let i=0;i<n;i++){const x=-210+i*(420/(n-1)),k=.7+hs(i)*.35,p=_ap(lt,i*.08,.3);if(p<=0)continue;const c=['#f4eee2','#bcd3f0','#f6d36b'][i%3];
    s+=G(x,0,k*p,0,P('M-46 0 L0 -64 L46 0Z',`fill:${c};${OL(2.2)}`)+P('M0 -64 L-12 0 L12 0Z','fill:#2a2f45')+P('M0 -64 L0 -76',ST(K.ink,2))+Rc(-30,-40,16,8,'#2a37d7',1));}
  for(let i=0;i<3;i++){const q=((lt*.4)+i/3)%1;s+=Ci(150+i*6,-20-q*80,8+q*14,'#b9b0a0',`opacity:${f2(.5*(1-q))}`);}
  return s;};
n2cat('tents · Campamento de tiendas',lt=>G(0,80,1,0,NX.tents({},lt)));
/* Huelga: pancarta y fábrica cerrada · o:{text} */
NX.strike=(o={},lt)=>{let s=Rc(-220,-150,200,150,'#e6dccb',4,OL(2.2))+P('M-220 -150 L-180 -190 L-140 -150 L-100 -190 L-60 -150 L-20 -190 L-20 -150',`fill:#d4c7b0;${OL(2.2)}`)+Rc(-180,-80,70,80,'#9aa0a8',2,OL(2))+[...Array(6)].map((_,i)=>P(`M-180 ${-74+i*12} L-110 ${-74+i*12}`,ST('#5b5f66',2))).join('')+Rc(-140,-240,24,90,'#9a4a2f',2,OL(2));
  s+=G(-128,-150,1,0,P('M-50 -34 L50 -34 L50 34 L-50 34Z','fill:#fff;'+OL(2))+Tn(0,7,'CERRADO',14,800,{fill:K.red}),_ao(lt,.3,.3));
  const bob=Math.abs(_osc(lt,1,8));
  s+=G(110,-bob,1,_osc(lt,.5,4),P('M-4 0 L-4 -150 M100 0 L100 -150',ST('#7d4a2a',6))+Rc(-14,-170,128,66,'#fff',4,OL(2.4))+Tn(50,-128,o.text||'HUELGA',24,800,{fill:K.red}));
  [60,120,170].forEach((x,i)=>s+=G(x,40,.9,0,_person(['#2a37d7','#e73568','#2b7a3e'][i])));
  return G(0,0,_ap(lt,0,.4),0,s+P('M-240 40 L240 40',ST(K.ink,2.4)));};
n2cat('strike · Huelga',lt=>G(0,80,1,0,NX.strike({},lt)));
/* Sanciones: candado sobre monedas/globo · o:{label} */
NX.sanctions=(o={},lt)=>{const d=lt<1.2?(1-EZ.out(sg(lt,.4,1.0)))*-160:0;let s=Ci(0,20,110,'#bcd3f0',OL(2.4))+P('M-110 20 L110 20 M0 -90 Q-60 20 0 130 Q60 20 0 -90 M-96 -30 Q0 -10 96 -30 M-96 70 Q0 50 96 70',ST('#2a37d7',2.2,'opacity:.6'));
  s+=G(0,d,1,0,P('M-44 -40 L-44 -80 Q-44 -120 0 -120 Q44 -120 44 -80 L44 -40',ST('#5b5f66',16))+Rc(-70,-46,140,110,'#f6a81a',14,OL(2.6))+Ci(0,0,12,K.ink)+Rc(-5,6,10,26,K.ink,3));
  if(lt>1.0&&lt<1.4)s+=P('M-90 -70 L-120 -100 M90 -70 L120 -100 M0 -150 L0 -180',ST(K.ink,3,'opacity:'+f2(1-sg(lt,1.0,1.4))));
  if(o.label)s+=G(0,170,1,0,pill(o.label,{sz:15,w:800,fill:K.red}),_ao(lt,1.0,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('sanctions · Sanciones',lt=>NX.sanctions({label:'SANCIONES'},lt));
/* Alto el fuego: paloma con rama de olivo · o:{} */
NX.dove=(o={},lt)=>{const f=_osc(lt,1.4,1);let s=G(0,_osc(lt,.5,8),1,0,
  P('M-70 0 Q-30 -30 30 -16 Q60 -10 80 -26 Q86 -14 74 -2 Q60 14 20 18 Q-30 22 -70 0Z','fill:#fff;'+OL(2.4))+
  P(`M-10 -10 Q-20 ${f1(-80-f*30)} 40 ${f1(-110-f*20)} Q30 -50 20 -14Z`,'fill:#f4f6f8;'+OL(2.2))+P('M-70 0 L-110 -14 L-100 4 L-114 16Z','fill:#fff;'+OL(2))+
  Ci(64,-20,3.2,K.ink)+P('M80 -26 L96 -22 L80 -18Z','fill:#f6a81a;'+OL(1.4))+G(98,-14,1,20,P('M0 0 Q30 4 50 -6',ST('#3f7a3a',3))+[0,1,2,3].map(i=>G(10+i*11,-1-i*1.5,1,i%2?30:-30,El(0,-6,4,9,'#7fb66a',OL(1)))).join('')));
  if(o.label)s+=G(0,120,1,0,pill(o.label,{sz:15,w:800,fill:K.green}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('dove · Paz / alto el fuego',lt=>NX.dove({label:'ALTO EL FUEGO'},lt));
/* Dron (cuadricóptero) · o:{} */
NX.drone=(o={},lt)=>{const bob=_osc(lt,.6,8),r=Math.abs(Math.cos(lt*50));let s=G(0,bob,1,_osc(lt,.4,4),
  Rc(-50,-14,100,28,'#5b5f66',10,OL(2.2))+P('M-50 -8 L-110 -30 M50 -8 L110 -30 M-50 8 L-100 20 M50 8 L100 20',ST('#3b3f46',6))+
  [[-110,-30],[110,-30],[-100,20],[100,20]].map(([x,y])=>G(x,y,1,0,Ci(0,0,6,K.ink)+El(0,-6,40*r+4,4,'rgba(20,18,18,.55)'))).join('')+Ci(0,18,10,K.ink)+Ci(0,18,5,'#2a37d7')+Ci(36,-4,3,Math.floor(lt*3)%2?K.red:'#7a1f1f'));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('drone · Dron',lt=>NX.drone({},lt));
/* Buque de guerra (silueta gris) · o:{} */
NX.warship=(o={},lt)=>{const bob=_osc(lt,.4,3);let s=G(0,bob,1,_osc(lt,.3,1.2),P('M-220 0 L200 0 L240 -26 L-190 -26Z','fill:#6b7387;'+OL(2.4))+Rc(-120,-60,150,34,'#7d8597',3,OL(2))+Rc(-60,-100,70,40,'#7d8597',3,OL(2))+Rc(-36,-140,14,40,'#5b5f66',2)+P('M-30 -140 L-60 -120 M-30 -140 L0 -120',ST(K.ink,2))+
  P('M60 -26 L60 -40 L120 -40 L120 -26Z M120 -34 L180 -38',`fill:#5b5f66;stroke:${K.ink};stroke-width:3`)+[...Array(5)].map((_,i)=>Ci(-110+i*24,-44,4,'#bcd3f0')).join('')+Tn(-150,-8,'F-104',11,800,{fill:'#fff'}));
  s+=Rc(-260,0,520,60,'url(#gWA)')+P(`M-260 0 ${[...Array(13)].map((_,i)=>`Q${-250+i*40} ${f1(-4+_osc(lt,1,2,i))} ${-240+i*40} 0`).join(' ')}`,ST('#a7b0ff',2.4));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('warship · Buque de guerra',lt=>G(0,60,1,0,NX.warship({},lt)));
/* Vehículo blindado (silueta) · o:{} */
NX.armored=(o={},lt)=>{const x=lerp(-40,40,sg(lt,0,3));let s=G(x,0,1,0,shadowE(0,4,170,.15)+P('M-170 -20 L-150 -70 L130 -70 L170 -20Z','fill:#6f7a4f;'+OL(2.4))+Rc(-90,-110,140,40,'#7d8a5a',10,OL(2.2))+Rc(50,-100,150,14,'#5d6842',4,OL(2))+
  Rc(-180,-26,360,30,'#3b4029',14,OL(2.2))+[...Array(7)].map((_,i)=>Ci(-150+i*50,-11,12,'#22251a',OL(1.4))).join('')+P(`M-180 -11 ${[...Array(19)].map((_,i)=>`L${-170+i*20} ${i%2?-16:-6}`).join(' ')}`,ST('#55603c',2)));
  return G(0,0,_ap(lt,0,.4),0,s+P('M-240 6 L240 6',ST(K.ink,2.4)));};
n2cat('armored · Vehículo blindado',lt=>G(0,60,1,0,NX.armored({},lt)));
/* Ataque aéreo interceptado: trazas en el cielo · o:{} */
NX.intercept=(o={},lt)=>{let s=Rc(-240,-300,480,300,lgrad([[0,'#141a3a'],[1,'#3a3f6a']],0,0,0,1),12);
  for(let i=0;i<14;i++)s+=Ci(-220+hs(i)*440,-280+hs(i+3)*160,1.3,'#fff','opacity:.7');
  const q1=sg(lt,.2,1.6),q2=sg(lt,.6,1.6);const ax=lerp(-260,-10,q1),ay=lerp(-260,-160,q1),bx=lerp(160,-10,q2),by=lerp(0,-160,EZ.out(q2));
  if(q1<1)s+=P(`M-260 -260 L${f1(ax)} ${f1(ay)}`,ST('#ffd8a8',3,'opacity:.8'))+Ci(ax,ay,4,'#fff');
  if(q2<1)s+=P(`M160 0 Q${f1(lerp(160,60,q2))} ${f1(lerp(0,-140,q2))} ${f1(bx)} ${f1(by)}`,ST('#cfe7ff',3,'opacity:.8'))+Ci(bx,by,4,'#fff');
  if(lt>1.6){const q=sg(lt,1.6,2.6);s+=Ci(-10,-160,20+q*70,'#ffd86b',`opacity:${f2(1-q)}`)+Ci(-10,-160,10+q*40,'#fff',`opacity:${f2(1-q)}`);for(let i=0;i<10;i++){const a=i/10*Math.PI*2;s+=Ci(-10+Math.cos(a)*q*90,-160+Math.sin(a)*q*90+q*q*40,3,'#ffb21f',`opacity:${f2(1-q)}`);}}
  s+=G(0,0,1,0,_skyline(480,{T:lt,c:'#1e2236'}));
  return clipG(s,Rc(-240,-300,480,300,'#000',12))+Rc(-240,-300,480,300,'none',12,OL(2.4));};
n2cat('intercept · Misil interceptado',lt=>G(0,150,1,0,NX.intercept({},lt)));
/* Dimisión: persona que sale por la puerta con una caja · o:{} */
NX.resign=(o={},lt)=>{const q=EZ.io(sg(lt,.6,2.4));let s=Rc(60,-170,110,170,'#2a2f45',4,OL(2.2))+Rc(66,-164,98,164,'#bcd3f0',2)+Tn(115,-180,'SALIDA',11,800,{fill:K.green});
  s+=G(lerp(-120,110,q),0,1,0,_person('#2a2f45',1.3,q>0&&q<1,lt)+G(14,-60,1,0,Rc(-24,-18,48,30,'#d9b483',3,OL(2))+P('M-14 -18 L-8 -32 M6 -18 L10 -30',ST(K.ink,2))));
  s+=Rc(60,-170,40,170,'#7d4a2a',2,OL(2))+Ci(92,-80,4,'#f6a81a');
  s+=stampA(-90,-120,lt-1.6,o.text||'DIMITE',{r:-8,sz:24,c:K.red});
  return G(0,0,_ap(lt,0,.4),0,s+P('M-240 0 L240 0',ST(K.ink,2.4)));};
n2cat('resign · Dimisión',lt=>G(0,80,1,0,NX.resign({},lt)));
/* Encuesta (intención de voto) · o:{items:[[nombre,%,color]]} */
NX.poll=(o={},lt)=>{const it=o.items||[['Partido A',31.2,K.blue],['Partido B',28.4,K.red],['Partido C',14.9,K.purple],['Partido D',11.3,K.green],['Otros',14.2,'#9b9b9b']];const w=280;let s='';
  if(o.title!==false)s+=G(0,-40,1,0,Ts(0,0,o.title||'Encuesta',28)+Tn(0,24,o.sub||'intención de voto',12,600,{fill:'#666'}),_ao(lt,0,.3));
  it.forEach(([n,v,c],i)=>{const y=40+i*46,p=EZ.out(sg(lt,.2+i*.12,1.0+i*.12));s+=Ci(-180,y,15,c,OL(1.6))+Tn(-158,y+5,n,13,700,{a:'start'})+Rc(-60,y-11,w*v/40*p,22,c,6)+Tn(-60+w*v/40*p+8,y+5,_fmt(v*p,1)+' %',13,800,{a:'start'});});
  return s;};
n2cat('poll · Encuesta',lt=>NX.poll({},lt));
/* Debate: dos atriles con bocadillos · o:{} */
NX.debate=(o={},lt)=>{let s='';[[-120,K.blue,'url(#gRP)'],[120,K.red,'#fff']].forEach(([x,c],i)=>{s+=G(x,0,1,0,P('M-50 0 L-40 -110 L40 -110 L50 0Z','fill:'+c+';'+OL(2.4))+Rc(-56,-124,112,16,'#fff',3,OL(2))+P('M0 -124 L-10 -160',ST(K.ink,3))+Ci(-12,-164,5,K.ink));
    const on=Math.floor(lt/1.1)%2===i;s+=G(x+(i?-30:30),-230,on?1+.05*Math.sin(lt*10):.85,0,Rc(-70,-36,140,60,'#fff',18,OL(2))+P(`M${i?30:-30} 24 L${i?40:-40} 44 L${i?14:-14} 24Z`,'fill:#fff;'+OL(2))+[...Array(3)].map((_,k)=>Ci(-24+k*24,-6,6,on?K.ink:'#bbb')).join(''),on?1:.5);});
  s+=Tn(0,-80,'VS',30,800,{fill:'url(#gRP)'});
  return G(0,0,_ap(lt,0,.4),0,s+P('M-240 0 L240 0',ST(K.ink,2.4)));};
n2cat('debate · Debate',lt=>G(0,100,1,0,NX.debate({},lt)));
/* Megáfono con ondas (protesta, anuncio) · o:{} */
NX.megaphone=(o={},lt)=>{let s=G(0,0,1,-12+_osc(lt,1.2,3),P('M-60 -20 L40 -70 L40 70 L-60 20Z','fill:'+K.red+';'+OL(2.4))+Rc(-90,-24,34,48,'#fff',6,OL(2.2))+Rc(-80,20,16,50,K.ink,4)+El(40,0,14,70,'#c41f3e',OL(2.2)));
  for(let i=0;i<3;i++){const q=((lt*1.2)+i/3)%1;s+=P(`M${f1(80+q*80)} ${f1(-50-q*30)} Q${f1(110+q*100)} 0 ${f1(80+q*80)} ${f1(50+q*30)}`,ST(K.ink,4,`opacity:${f2(1-q)}`));}
  return G(-30,0,_ap(lt,0,.4),0,s);};
n2cat('megaphone · Megáfono',lt=>NX.megaphone({},lt));
/* Maletín con dinero (corrupción) · o:{} */
NX.briefcase=(o={},lt)=>{const op=EZ.back(sg(lt,.5,1.0));let s=Rc(-120,-80,240,150,'#5a3119',10,OL(2.4))+Rc(-40,-104,80,30,'none',8,ST('#3a2010',8));
  s+=Rc(-112,-74,224,120,'#3f9b4f',4)+[...Array(5)].map((_,i)=>[...Array(3)].map((_,k)=>Rc(-104+i*44,-66+k*38,38,30,'#7fd17a',3,OL(1.4))+Ci(-85+i*44,-51+k*38,6,'none',ST('#2b7a3e',1.6))).join('')).join('');
  s+=G(0,-80,1,0,G(0,0,1,0,Rc(-120,-90*op,240,90*op+2,'#7d4a2a',10,OL(2.4))),1);
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('briefcase · Maletín con dinero',lt=>NX.briefcase({},lt));
/* Libro de leyes (§) · o:{title} */
NX.lawbook=(o={},lt)=>{const fl=sg(lt,.5,1.3);let s=Rc(-100,-140,200,260,'#1b2596',8,OL(2.4))+Rc(-90,-130,10,240,'#14207a')+Tn(10,-30,'§',96,500,{fill:'#e6c66a'})+Tn(10,40,o.title||'LEY',22,800,{fill:'#e6c66a',ls:.12});
  if(fl>0&&fl<1)s+=G(-100,-10,1,0,P(`M0 -130 Q${f1(200*Math.cos(Math.PI*fl))} -140 ${f1(200*Math.cos(Math.PI*fl))} -130 L${f1(200*Math.cos(Math.PI*fl))} 120 L0 120Z`,'fill:#fbf8f2;'+OL(1.6)));
  return G(0,0,_ap(lt,0,.4),0,G(0,0,1,-4,s));};
n2cat('lawbook · Libro de leyes',lt=>NX.lawbook({},lt));
/* Cinta policial (zona acordonada) · o:{text} */
NX.tape=(o={},lt)=>{let s='';[[-14,0],[10,1]].forEach(([r,i])=>{const p=EZ.out(sg(lt,i*.3,.6+i*.3));const tx=o.text||'NO PASAR';s+=G(0,i?40:-40,1,r,clipG(Rc(-320,-18,640,36,'#ffd23f',0,OL(2))+[...Array(8)].map((_,k)=>Tn(-280+k*120+((lt*30)%120),7,tx,15,800,{a:'start'})).join(''),Rc(-320,-30,640*p,60,'#000')));});
  return s;};
n2cat('tape · Cinta policial',lt=>NX.tape({},lt));
/* Coche de policía · o:{} */
NX.police=(o={},lt)=>{const on=Math.floor(lt*6)%2===0;let s=shadowE(0,4,130,.15)+P('M-130 -10 L-118 -46 Q-108 -60 -70 -64 L-40 -92 L50 -92 L80 -64 L118 -56 Q134 -50 132 -10Z','fill:#fff;'+OL(2.4))+P('M-30 -86 L40 -86 L66 -64 L-52 -64Z','fill:#bcd3f0;'+OL(1.6))+P('M-6 -86 L-6 -64',ST(K.ink,2));
  s+=Rc(-130,-46,262,16,'#1b2596')+Tn(0,-34,'POLICÍA',13,800,{fill:'#fff',ls:.1})+Rc(-26,-104,24,12,on?'#2b3fff':'#16207a',4,OL(1.2))+Rc(2,-104,24,12,on?'#5a1f1f':'#ff3b3b',4,OL(1.2));
  s+=(on?Ci(-14,-98,26,'rgba(43,63,255,.25)'):Ci(14,-98,26,'rgba(255,59,59,.25)'))+[-80,84].map(x=>G(x,-6,1,0,Ci(0,0,20,K.ink)+Ci(0,0,8,'#ccc'))).join('');
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('police · Coche de policía',lt=>G(0,60,1,0,NX.police({},lt)));

/* ===================== L · ECONOMÍA Y ENERGÍA ===================== */
/* Barril de petróleo con precio · o:{price,dir} */
NX.oil=(o={},lt)=>{const up=(o.dir||'up')==='up';let s=G(-60,0,1,0,El(0,-150,70,18,'#1b1b22',OL(2.2))+Rc(-70,-150,140,160,'#2a2a33',0,OL(2.2))+El(0,10,70,18,'#2a2a33',OL(2.2))+P('M-70 -100 Q0 -88 70 -100 M-70 -40 Q0 -28 70 -40',ST('#4a4a55',4))+G(0,-70,1,0,P('M0 -26 Q22 0 0 22 Q-22 0 0 -26Z','fill:#f6a81a')));
  s+=G(100,-80,_ap(lt,.4,.35),0,P(up?'M0 -50 L36 0 L14 0 L14 50 L-14 50 L-14 0 L-36 0Z':'M0 50 L36 0 L14 0 L14 -50 L-14 -50 L-14 0 L-36 0Z','fill:'+(up?K.red:K.green)+';'+OL(2)));
  if(o.price)s+=G(100,30,1,0,pill(o.price,{sz:16,w:800}),_ao(lt,.7,.3));
  return G(0,60,_ap(lt,0,.4),0,s);};
n2cat('oil · Barril de petróleo',lt=>NX.oil({price:'92 $/barril'},lt));
/* Surtidor de gasolina con contador · o:{price} */
NX.gaspump=(o={},lt)=>{const v=(o.price||1.89)*EZ.out(sg(lt,.3,1.8));let s=Rc(-80,-220,160,220,K.red,12,OL(2.4))+Rc(-60,-196,120,70,'#141212',6,OL(2))+Tn(0,-150,_fmt(v,3)+' €',24,700,{fill:'#7dffb0'})+Tn(0,-112,'€ / LITRO',10,800,{fill:'#fff',ls:.1})+Rc(-50,-92,100,40,'#fff',4,OL(1.6))+Rc(-90,0,180,14,K.ink,3);
  s+=P('M80 -120 Q140 -120 140 -60 L140 -20',ST(K.ink,6))+G(140,-20,1,0,Rc(-12,0,24,46,'#2a2f45',4,OL(1.6))+Rc(-4,40,8,20,'#5b5f66'));
  return G(0,100,_ap(lt,0,.4),0,s);};
n2cat('gaspump · Gasolinera',lt=>NX.gaspump({price:1.879},lt));
/* Carro de la compra (IPC) · o:{pct} */
NX.cart=(o={},lt)=>{let s=P('M-150 -150 L-110 -150 L-70 20 L110 20 L140 -90 L-90 -90',ST(K.ink,6))+[...Array(5)].map((_,i)=>P(`M${-84+i*44} -88 L${-70+i*38} 18`,ST(K.ink,2))).join('')+Ci(-50,50,14,K.ink)+Ci(90,50,14,K.ink);
  [['#f34841',-40,-120,30],['#f6a81a',10,-130,26],['#3f9b4f',60,-118,28],['#fff',-80,-110,22]].forEach(([c,x,y,r],i)=>s+=G(x,y,_ap(lt,.2+i*.12,.3),0,i===3?Rc(-16,-30,32,50,'#fff',4,OL(2))+Rc(-16,-10,32,12,K.blue):Ci(0,0,r,c,OL(2))));
  if(o.pct)s+=G(130,-200,_ap(lt,.8,.35),0,pill('IPC '+o.pct,{sz:18,w:800,fill:K.red}));
  return G(0,40,_ap(lt,0,.4),0,s);};
n2cat('cart · Carro de la compra / IPC',lt=>NX.cart({pct:'+3,2 %'},lt));
/* Vivienda con precio que sube · o:{from,to} */
NX.housing=(o={},lt)=>{const q=EZ.out(sg(lt,.5,1.8));let s=G(-60,0,1.6,0,_house('#f4eee2',K.red));
  s+=DR('M60 -20 L110 -60 L140 -40 L200 -120',ST(K.red,5),q)+(q>.95?G(200,-120,1,0,P('M-16 4 L0 -10 L4 10Z','fill:'+K.red)):'');
  s+=G(110,40,1,0,pill(o.to||'2.200 €/m²',{sz:16,w:800,fill:'url(#gRP)'}),_ao(lt,1.2,.3))+G(110,0,1,0,Tn(0,0,o.from||'1.800 €/m²',13,700,{fill:'#777',x:'text-decoration:line-through'}),_ao(lt,.4,.3));
  return G(0,60,_ap(lt,0,.4),0,s);};
n2cat('housing · Precio de la vivienda',lt=>NX.housing({},lt));
/* Banco (edificio con columnas y €) · o:{sym} */
NX.bank=(o={},lt)=>{let s=P('M-170 -150 L0 -220 L170 -150Z','fill:#f4eee2;'+OL(2.2))+Ci(0,-172,20,'#f6a81a',OL(2))+Tn(0,-165,o.sym||'€',22,800)+Rc(-170,-150,340,16,'#e6dccb',2,OL(2));
  for(let i=0;i<5;i++)s+=Rc(-150+i*70,-134,30,120,'#fff',2,OL(2));s+=Rc(-180,-14,360,14,'#e6dccb',2,OL(2))+Rc(-200,0,400,12,'#d4c7b0',2,OL(2));
  return G(0,80,_ap(lt,0,.4),0,s);};
n2cat('bank · Banco',lt=>NX.bank({},lt));
/* Tarjeta de crédito · o:{} */
NX.card=(o={},lt)=>{const r=_osc(lt,.3,6);let s=G(0,0,1,r,Rc(-150,-95,300,190,lgrad([[0,'#2a37d7'],[1,'#8005f0']],0,0,1,1),16,OL(2.4))+Rc(-112,-40,50,38,'#e6c66a',6,OL(1.4))+P('M-112 -21 L-62 -21 M-87 -40 L-87 -2',ST('#b08a2a',1.4))+Tn(-112,40,'•••• •••• •••• 4821',17,700,{a:'start',fill:'#fff',ls:.05})+Ci(96,60,20,'#f34841','opacity:.9')+Ci(120,60,20,'#f6a81a','opacity:.85'));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('card · Tarjeta de pago',lt=>NX.card({},lt));
/* Criptomoneda (moneda girando) · o:{sym,dir} */
NX.crypto=(o={},lt)=>{const sx=Math.cos(lt*2.4);let s=G(0,0,1,0,El(0,0,Math.abs(sx)*90+4,90,'#f6a81a',OL(2.6))+(sx>0?Tn(0,26,o.sym||'₿',72,800,{fill:'#fff'}):''),1,);
  s=G(0,0,1,0,`<g transform="scale(1 1)">${s}</g>`);
  if(o.dir)s+=G(140,-40,_ap(lt,.5,.3),0,pill((o.dir==='up'?'▲ ':'▼ ')+(o.pct||''),{sz:16,w:800,fill:o.dir==='up'?K.green:K.red}));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('crypto · Criptomoneda',lt=>NX.crypto({dir:'down',pct:'12 %'},lt));
/* Fábrica con chimeneas · o:{smoke} */
NX.factory=(o={},lt)=>{let s=P('M-200 0 L-200 -110 L-140 -150 L-140 -110 L-80 -150 L-80 -110 L-20 -150 L-20 -110 L40 -150 L40 0Z','fill:#d4c7b0;'+OL(2.2))+Rc(40,-200,40,200,'#9a4a2f',2,OL(2))+Rc(100,-160,36,160,'#9a4a2f',2,OL(2))+Rc(40,-100,170,100,'#e6dccb',2,OL(2));
  for(let i=0;i<4;i++)s+=Rc(-180+i*55,-70,34,30,'#bcd3f0',2,OL(1.4));
  if(o.smoke!==false)for(let k=0;k<2;k++)for(let i=0;i<4;i++){const q=((lt*.35)+i/4)%1,x=k?118:60;s+=Ci(x+q*40,(k?-170:-210)-q*120,12+q*26,'#a8a8a8',`opacity:${f2(.55*(1-q))}`);}
  return G(0,100,_ap(lt,0,.4),0,s+P('M-230 0 L230 0',ST(K.ink,2.4)));};
n2cat('factory · Fábrica / industria',lt=>NX.factory({},lt));
/* Puerto: grúa y portacontenedores · o:{} */
NX.port=(o={},lt)=>{const cx=lerp(-60,60,(Math.sin(lt*.8)+1)/2);let s=Rc(-260,0,520,60,'url(#gWA)');
  s+=G(0,_osc(lt,.4,2),1,0,P('M-220 -10 L180 -10 L220 -50 L-200 -50Z','fill:#2a37d7;'+OL(2.4))+[...Array(14)].map((_,i)=>Rc(-190+(i%7)*50,-50-Math.floor(i/7)*28,46,26,[K.red,K.yellow,K.green,'#fff',K.orange,K.purple,K.blue][(i*3)%7],2,OL(1.4))).join(''));
  s+=Rc(160,-260,16,250,K.yellow,2,OL(2))+Rc(-120,-270,320,16,K.yellow,2,OL(2))+P(`M${f1(cx)} -254 L${f1(cx)} -150`,ST(K.ink,2))+Rc(cx-24,-150,48,26,K.red,2,OL(1.6));
  return G(0,80,_ap(lt,0,.4),0,s);};
n2cat('port · Puerto y contenedores',lt=>NX.port({},lt));
/* Aranceles: caja con sello de % en la aduana · o:{pct} */
NX.tariff=(o={},lt)=>{const x=lerp(-260,0,EZ.out(sg(lt,0,.8)));let s=G(x,0,1,0,Rc(-80,-130,160,130,'#d9b483',4,OL(2.4))+P('M-80 -90 L80 -90 M-20 -130 L-20 -90 M20 -130 L20 -90',ST('#a8834d',3))+Tn(0,-40,'IMPORTACIÓN',12,800,{fill:'#7d5a2a',ls:.08}));
  s+=stampA(0,-70,lt-1.0,(o.pct||'25 %')+' ARANCEL',{r:-10,sz:20,c:K.red});
  return G(0,60,_ap(lt,0,.3),0,s+P('M-240 0 L240 0',ST(K.ink,2.4)));};
n2cat('tariff · Aranceles',lt=>NX.tariff({},lt));
/* Cola de empleo (paro) · o:{n} */
NX.queue=(o={},lt)=>{let s=Rc(110,-200,130,200,'#e6dccb',4,OL(2.2))+Rc(140,-110,70,110,'#bcd3f0',2,OL(1.6))+Rc(110,-240,130,40,K.blue,4,OL(2))+Tn(175,-213,o.text||'EMPLEO',15,800,{fill:'#fff'});
  for(let i=0;i<(o.n||7);i++){const x=90-i*44,p=_ap(lt,i*.1,.3);if(p>0)s+=G(x,0,p,0,_person(['#2a37d7','#e73568','#8005f0','#f6a81a','#f34841','#2b7a3e','#5b5f66'][i%7],1,0,lt));}
  return G(0,100,1,0,s+P('M-240 0 L250 0',ST(K.ink,2.4)));};
n2cat('queue · Cola del paro',lt=>NX.queue({},lt));
/* Enchufe y factura de la luz · o:{price} */
NX.plug=(o={},lt)=>{let s=P('M-200 0 Q-120 0 -90 -40',ST(K.ink,6))+G(-60,-60,1,-30,Rc(-34,-30,68,60,'#fff',12,OL(2.4))+Rc(-22,-50,8,22,'#9aa0a8',2,OL(1.4))+Rc(14,-50,8,22,'#9aa0a8',2,OL(1.4)));
  s+=G(80,-60,_ap(lt,.3,.35),0,Rc(-70,-100,140,200,'#fff',8,OL(2.2))+Tn(0,-70,'FACTURA',14,800,{ls:.1})+[...Array(4)].map((_,i)=>Rc(-50,-50+i*20,i===3?70:100,6,'#d7d0c4',3)).join('')+Tn(0,60,o.price||'0,21 €/kWh',16,800,{fill:K.red}));
  s+=G(-60,-160,1+.1*Math.sin(lt*8),0,P('M8 -40 L-20 6 L0 6 L-10 40 L24 -8 L4 -8Z','fill:#ffd23f;'+OL(2)));
  return G(0,60,_ap(lt,0,.4),0,s);};
n2cat('plug · Precio de la luz',lt=>NX.plug({},lt));
/* Placas solares · o:{} */
NX.solar=(o={},lt)=>{let s=G(140,-230,1,lt*10,sunS(40));for(let i=0;i<3;i++){const q=((lt*.8)+i/3)%1;s+=P(`M${f1(140-q*120)} ${f1(-230+q*150)} l-14 14`,ST(K.yellow,4,`opacity:${f2(1-q)}`));}
  for(let r=0;r<2;r++)for(let c=0;c<3;c++){const x=-170+c*120+r*30,y=-40+r*60;s+=G(x,y,_ap(lt,.1+(r*3+c)*.06,.3),0,P('M-50 0 L50 0 L60 -50 L-40 -50Z','fill:#1b2596;'+OL(2))+P('M-25 0 L-15 -50 M0 0 L10 -50 M25 0 L35 -50 M-45 -25 L55 -25',ST('#6f86ff',1.6))+P('M0 0 L0 20',ST(K.ink,3)));}
  return G(0,60,1,0,s);};
n2cat('solar · Placas solares',lt=>NX.solar({},lt));
/* Aerogenerador girando · o:{n} */
NX.windturbine=(o={},lt)=>{let s='';[[0,1],[-150,.7],[150,.75]].slice(0,o.n||3).forEach(([x,k],i)=>{s+=G(x,0,k,0,P('M-6 0 L-3 -240 L3 -240 L6 0Z','fill:#fff;'+OL(2))+G(0,-240,1,lt*120+i*40,[0,120,240].map(a=>G(0,0,1,a,P('M0 0 L-8 -110 Q0 -124 8 -110Z','fill:#fff;'+OL(1.8)))).join('')+Ci(0,0,9,'#fff',OL(2))));});
  return G(0,140,_ap(lt,0,.4),0,s+P('M-240 0 L240 0',ST(K.ink,2.4)));};
n2cat('windturbine · Energía eólica',lt=>NX.windturbine({},lt));
/* Central nuclear (torres de refrigeración) · o:{} */
NX.nuclear=(o={},lt)=>{let s='';[[-90,1],[60,.85]].forEach(([x,k])=>{s+=G(x,0,k,0,P('M-70 0 Q-50 -100 -50 -160 L50 -160 Q50 -100 70 0Z','fill:#e6e6e6;'+OL(2.4))+El(0,-160,50,10,'#cfcfcf',OL(2)));for(let i=0;i<4;i++){const q=((lt*.3)+i/4)%1;s+=Ci(x+q*30,-170*k-q*110,24+q*30,'#fff',`opacity:${f2(.8*(1-q))};${OL(1.4,'rgba(20,18,18,'+f2(.4*(1-q))+')')}`);}});
  s+=G(170,0,1,0,Rc(-40,-80,80,80,'#d4c7b0',2,OL(2))+El(0,-80,40,30,'#d4c7b0',OL(2)));
  s+=G(170,-160,_ap(lt,.4,.3),0,Ci(0,0,22,K.yellow,OL(2))+[0,120,240].map(a=>G(0,0,1,a,P('M0 -4 L-10 -18 A18 18 0 0 1 10 -18Z','fill:'+K.ink))).join('')+Ci(0,0,4,K.ink));
  return G(0,120,_ap(lt,0,.4),0,s+P('M-240 0 L240 0',ST(K.ink,2.4)));};
n2cat('nuclear · Central nuclear',lt=>NX.nuclear({},lt));
/* Batería cargándose · o:{pct} */
NX.battery=(o={},lt)=>{const p=(o.pct??100)/100*EZ.io(sg(lt,.3,2.2)),c=p>.6?K.green:p>.25?K.yellow:K.red;let s=Rc(-120,-60,240,120,'#fff',18,OL(3))+Rc(120,-24,18,48,K.ink,4);
  s+=Rc(-108,-48,216*p,96,c,10)+G(0,0,1+.06*Math.sin(lt*6),0,P('M8 -40 L-20 6 L0 6 L-10 40 L24 -8 L4 -8Z','fill:#fff;'+OL(2)))+Tn(0,100,Math.round(p*100)+' %',28,700);
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('battery · Batería',lt=>NX.battery({pct:80},lt));
/* Punto de recarga de coche eléctrico · o:{} */
NX.charger=(o={},lt)=>{let s=Rc(-200,-200,90,200,K.green,12,OL(2.4))+Rc(-184,-180,58,50,'#141212',6)+Tn(-155,-148,Math.round(EZ.io(sg(lt,.3,2.5))*100)+'%',14,700,{fill:'#7dffb0'})+G(-155,-90,1,0,P('M6 -22 L-12 4 L0 4 L-6 22 L14 -4 L2 -4Z','fill:#fff'));
  s+=P('M-110 -100 Q-40 -110 -10 -60',ST(K.ink,6));
  s+=G(80,0,.85,0,P('M-130 -10 L-118 -46 Q-108 -60 -70 -64 L-40 -92 L50 -92 L80 -64 L118 -56 Q134 -50 132 -10Z','fill:#f4f6f8;'+OL(2.4))+P('M-30 -86 L40 -86 L66 -64 L-52 -64Z','fill:#bcd3f0;'+OL(1.6))+[-80,84].map(x=>G(x,-6,1,0,Ci(0,0,20,K.ink)+Ci(0,0,8,'#ccc'))).join(''));
  for(let i=0;i<3;i++){const q=((lt*1.5)+i/3)%1;s+=Ci(lerp(-110,-12,q),lerp(-100,-62,q)-Math.sin(Math.PI*q)*20,4,K.green,`opacity:${f2(Math.sin(Math.PI*q))}`);}
  return G(0,100,_ap(lt,0,.4),0,s+P('M-240 0 L240 0',ST(K.ink,2.4)));};
n2cat('charger · Recarga eléctrica',lt=>NX.charger({},lt));

/* ===================== M · CIENCIA, ESPACIO, SALUD Y TECNOLOGÍA ===================== */
/* Telescopio apuntando al cielo · o:{} */
NX.telescope=(o={},lt)=>{let s=Rc(-240,-330,480,330,'#141a3a',12);for(let i=0;i<24;i++)s+=Ci(-220+hs(i)*440,-310+hs(i+5)*240,1+hs(i+1)*1.6,'#fff',`opacity:${f2(.4+.6*Math.abs(Math.sin(lt*2+i)))}`);
  s+=G(-40,0,1,0,P('M-60 0 L0 -90 L60 0 M0 -90 L0 0',ST('#d6dbe2',6))+G(0,-100,1,-35,Rc(-120,-22,200,44,'#fff',8,OL(2.4))+Rc(-140,-28,30,56,'#2a37d7',6,OL(2))+Rc(80,-14,30,28,'#d6dbe2',4,OL(2))));
  s+=G(150,-250,_ap(lt,.5,.4),0,spark4(16,K.yellow)+Ci(0,0,30,'none',ST(K.yellow,2,'stroke-dasharray:4 6')));
  return clipG(s,Rc(-240,-330,480,334,'#000',12))+Rc(-240,-330,480,330,'none',12,OL(2.4));};
n2cat('telescope · Telescopio',lt=>G(0,160,1,0,NX.telescope({},lt)));
/* Asteroide acercándose a la Tierra · o:{} */
NX.asteroid=(o={},lt)=>{const q=EZ.io(sg(lt,0,2.6)),x=lerp(220,60,q),y=lerp(-200,-60,q);let s=Rc(-240,-260,480,380,'#141a3a',12);
  for(let i=0;i<20;i++)s+=Ci(-220+hs(i)*440,-240+hs(i+5)*340,1.3,'#fff','opacity:.7');
  s+=G(-110,40,1,lt*6,Ci(0,0,80,'#2a37d7',OL(2.4))+P('M-40 -50 Q-10 -60 0 -30 Q-20 -10 -50 -20Z M10 10 Q40 0 50 30 Q20 50 0 40Z','fill:#3f9b4f'));
  s+=P(`M${f1(x-14)} ${f1(y-22)} L${f1(x+150)} ${f1(y-150)} L${f1(x+22)} ${f1(y+14)}Z`,'fill:rgba(255,150,70,.35)')+P(`M${f1(x-8)} ${f1(y-12)} L${f1(x+90)} ${f1(y-90)} L${f1(x+12)} ${f1(y+6)}Z`,'fill:rgba(255,220,140,.55)')+G(x,y,1,lt*40,P('M-30 -10 Q-20 -34 6 -30 Q34 -24 30 4 Q26 30 -4 28 Q-34 20 -30 -10Z','fill:#8a6a4a;'+OL(2.2))+Ci(-6,-6,7,'#6a4a2a')+Ci(12,10,5,'#6a4a2a'));
  s+=P(`M${f1(x-30)} ${f1(y+20)} L-60 -10`,ST('#fff',1.6,'stroke-dasharray:6 6;opacity:.6'));
  return clipG(s,Rc(-240,-260,480,380,'#000',12))+Rc(-240,-260,480,380,'none',12,OL(2.4));};
n2cat('asteroid · Asteroide',lt=>G(0,80,1,0,NX.asteroid({},lt)));
/* Satélite en órbita · o:{} */
NX.satellite=(o={},lt)=>{let s=Ci(0,140,170,'#2a37d7',OL(2.4))+P('M-120 60 Q-60 40 -30 90 Q-70 120 -120 100Z M40 30 Q100 40 120 90 Q80 110 40 80Z','fill:#3f9b4f');
  s+=El(0,140,230,90,'none',ST('#fff',1.6,'stroke-dasharray:6 8;opacity:.7'));
  const a=lt*.9,x=Math.cos(a)*230,y=140+Math.sin(a)*90;
  s+=G(x,y,.9,_osc(lt,.3,10),Rc(-20,-16,40,32,'#e6c66a',4,OL(2))+Rc(-90,-12,64,24,'#1b2596',2,OL(1.6))+Rc(26,-12,64,24,'#1b2596',2,OL(1.6))+P('M-58 -12 L-58 12 M58 -12 L58 12',ST('#6f86ff',1.4))+P('M0 -16 L0 -32',ST(K.ink,2))+Ci(0,-34,5,K.red));
  return G(0,-60,_ap(lt,0,.4),0,s);};
n2cat('satellite · Satélite',lt=>NX.satellite({},lt));
/* Módulo de aterrizaje en la Luna · o:{} */
NX.lander=(o={},lt)=>{const q=EZ.out(sg(lt,0,2)),y=lerp(-260,0,q);let s=Rc(-240,-330,480,330,'#141a3a',12)+G(150,-250,1,0,Ci(0,0,40,'#2a37d7')+P('M-20 -20 Q0 -30 10 -10Z','fill:#3f9b4f'));
  s+=P('M-240 0 Q-120 -16 0 -6 Q120 4 240 -10 L240 60 L-240 60Z','fill:#cfcfcf;'+OL(2.2))+El(-140,14,30,7,'#a8a8a8')+El(110,22,20,5,'#a8a8a8');
  s+=G(0,y,1,0,Rc(-40,-110,80,60,'#e6c66a',6,OL(2.2))+P('M-40 -50 L-60 0 M40 -50 L60 0 M-70 0 L-50 0 M50 0 L70 0',ST(K.ink,3))+Rc(-24,-150,48,40,'#d6dbe2',8,OL(2))+Ci(0,-130,8,'#bcd3f0',OL(1.4))+(q<1?P('M-12 -50 L0 -10 L12 -50Z','fill:#ffd86b;opacity:.9'):''));
  if(q>=1)for(let i=0;i<6;i++){const qq=sg(lt,2,2.8),a=Math.PI*(1+i/5);s+=Ci(Math.cos(a)*qq*80,Math.sin(a)*qq*14,5*(1-qq),'#bdbdbd');}
  return clipG(s,Rc(-240,-330,480,394,'#000',12))+Rc(-240,-330,480,390,'none',12,OL(2.4));};
n2cat('lander · Alunizaje',lt=>G(0,140,1,0,NX.lander({},lt)));
/* Marte con rover · o:{} */
NX.mars=(o={},lt)=>{let s=Rc(-240,-300,480,300,'#e8a173',12)+G(-130,-210,1,0,Ci(0,0,26,'#f6d6b8'));
  s+=P('M-240 -60 Q-150 -110 -60 -70 Q40 -30 120 -90 Q190 -120 240 -80 L240 0 L-240 0Z','fill:#c2552b;'+OL(2))+P('M-240 -20 L240 -20 L240 0 L-240 0Z','fill:#a8441f');
  const x=lerp(-120,80,sg(lt,0,4));s+=G(x,-24,1,0,Rc(-40,-40,80,24,'#f4f6f8',4,OL(2))+P('M20 -40 L26 -70',ST(K.ink,3))+Rc(16,-80,22,12,'#d6dbe2',3,OL(1.4))+[-30,0,30].map(xx=>Ci(xx,0,10,K.ink)).join('')+P('M-30 -40 L-50 -56 L-20 -56Z','fill:#1b2596;'+OL(1.2)));
  return clipG(s,Rc(-240,-300,480,300,'#000',12))+Rc(-240,-300,480,300,'none',12,OL(2.4));};
n2cat('mars · Marte',lt=>G(0,150,1,0,NX.mars({},lt)));
/* Eclipse · o:{} */
NX.eclipse=(o={},lt)=>{const q=EZ.io(sg(lt,.2,2.4)),mx=lerp(-160,0,q);let s=Rc(-240,-240,480,480,mixc('#7fb2ff','#0d1230',q),12);
  s+=Ci(0,0,90+20*q,'#fff',`opacity:${f2(.3*q)}`)+Ci(0,0,80,'url(#gSUN)')+Ci(mx,0,82,mixc('#5d7fb8','#141212',q));
  if(q>.95)s+=Ci(0,0,86,'none',ST('#fff7d6',4,'opacity:.9'));
  return clipG(s,Rc(-240,-240,480,480,'#000',12))+Rc(-240,-240,480,480,'none',12,OL(2.4));};
n2cat('eclipse · Eclipse',lt=>NX.eclipse({},lt));
/* Cometa · o:{} */
NX.comet=(o={},lt)=>{let s=Rc(-240,-240,480,480,'#141a3a',12);for(let i=0;i<26;i++)s+=Ci(-220+hs(i)*440,-220+hs(i+3)*440,1.2,'#fff','opacity:.75');
  const x=lerp(-140,120,sg(lt,0,4)),y=lerp(100,-60,sg(lt,0,4));
  s+=P(`M${f1(x)} ${f1(y)} Q${f1(x-140)} ${f1(y+60)} ${f1(x-260)} ${f1(y+180)} L${f1(x-200)} ${f1(y+190)} Q${f1(x-110)} ${f1(y+90)} ${f1(x)} ${f1(y)}Z`,'fill:rgba(160,220,255,.35)')+P(`M${f1(x)} ${f1(y)} Q${f1(x-120)} ${f1(y+30)} ${f1(x-240)} ${f1(y+110)}`,ST('rgba(255,255,255,.55)',6));
  s+=Ci(x,y,14,'#fff')+Ci(x,y,26,'rgba(255,255,255,.25)');
  return clipG(s,Rc(-240,-240,480,480,'#000',12))+Rc(-240,-240,480,480,'none',12,OL(2.4));};
n2cat('comet · Cometa',lt=>NX.comet({},lt));
/* Microscopio · o:{} */
NX.microscope=(o={},lt)=>{let s=El(0,0,110,20,'#2a2f45',OL(2.2))+P('M-20 -10 Q-80 -120 0 -220',ST('#2a2f45',22))+G(30,-200,1,-25,Rc(-20,-60,40,130,'#e6e6e6',8,OL(2.2))+Rc(-14,70,28,20,'#9aa0a8',3,OL(1.6))+Rc(-16,-80,32,22,'#2a2f45',3,OL(1.6)))+Rc(-30,-70,140,14,'#9aa0a8',3,OL(2));
  s+=G(150,-200,_ap(lt,.5,.4),0,Ci(0,0,60,'#e8f6ff',OL(2.4))+[...Array(6)].map((_,i)=>G(-30+hs(i)*60+_osc(lt,.4,4,i),-30+hs(i+3)*60,1,lt*30+i*40,El(0,0,10,6,['#3f9b4f','#e73568','#8005f0'][i%3],OL(1.2)))).join(''))+DR('M80 -150 Q100 -170 110 -170',ST(K.ink,1.8),_ao(lt,.6,.3));
  return G(-40,120,_ap(lt,0,.4),0,s);};
n2cat('microscope · Microscopio',lt=>NX.microscope({},lt));
/* Matraz de laboratorio burbujeando · o:{c} */
NX.flask=(o={},lt)=>{const c=o.c||'#3fdcae';let s=P('M-24 -160 L-24 -90 L-90 30 Q-96 50 -74 50 L74 50 Q96 50 90 30 L24 -90 L24 -160Z','fill:#e8f6ff;'+OL(2.6));
  s+=clipG(Rc(-100,-30,200,90,c),P('M-24 -160 L-24 -90 L-90 30 Q-96 50 -74 50 L74 50 Q96 50 90 30 L24 -90 L24 -160Z','fill:#000'))+Rc(-32,-176,64,18,'#fff',4,OL(2));
  for(let i=0;i<6;i++){const q=((lt*.7)+i/6)%1;s+=Ci(-40+hs(i)*80,lerp(40,-140,q)+_osc(lt,1,3,i),4+hs(i+1)*5,'none',`stroke:#fff;stroke-width:2;opacity:${f2(1-q)}`);}
  return G(0,80,_ap(lt,0,.4),0,s);};
n2cat('flask · Laboratorio',lt=>NX.flask({},lt));
/* Vacuna (jeringa y vial) · o:{} */
NX.vaccine=(o={},lt)=>{const pr=EZ.io(sg(lt,.6,1.8));let s=G(-40,0,1,-30,Rc(-120,-24,180,48,'#e8f6ff',8,OL(2.4))+Rc(-116,-20,140*(1-pr)+10,40,'#3fdcae',6)+[...Array(6)].map((_,i)=>P(`M${-90+i*22} -24 L${-90+i*22} -10`,ST(K.ink,1.6))).join('')+Rc(60-40*pr,-30,14,60,'#9aa0a8',3,OL(2))+Rc(60-40*pr,-6,90,12,'#9aa0a8',3,OL(1.6))+Rc(150-40*pr,-30,10,60,'#9aa0a8',3,OL(2))+P('M-120 0 L-180 0',ST('#9aa0a8',4)));
  s+=G(120,40,1,0,Rc(-26,-70,52,90,'#e8f6ff',8,OL(2.2))+Rc(-30,-90,60,22,K.blue,4,OL(2))+Rc(-22,-20,44,36,'#fff',3,OL(1.4))+Tn(0,4,'VACUNA',8,800));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('vaccine · Vacuna',lt=>NX.vaccine({},lt));
/* Pastillas / medicamentos · o:{} */
NX.pills=(o={},lt)=>{let s=Rc(-70,-120,140,180,'#fff',14,OL(2.4))+Rc(-80,-150,160,40,K.orange,8,OL(2.2))+Rc(-50,-60,100,60,'#e8f6ff',4,OL(1.6))+Tn(0,-24,'Rx',22,800,{fill:K.blue});
  [[-130,40,0,K.pink],[120,30,40,K.blue],[110,90,-20,K.yellow],[-110,100,30,'#fff']].forEach(([x,y,r,c],i)=>s+=G(x,y+_osc(lt,.5,4,i),_ap(lt,.3+i*.1,.3),r+lt*10,Rc(-28,-12,56,24,'#fff',12,OL(2))+Rc(0,-12,28,24,c,0)+Rc(-28,-12,56,24,'none',12,OL(2))));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('pills · Medicamentos',lt=>NX.pills({},lt));
/* Monitor de electrocardiograma · o:{bpm} */
NX.ecg=(o={},lt)=>{let s=Rc(-200,-110,400,220,'#141212',14,OL(2.4))+Rc(-188,-98,376,196,'#0d1a14',8);
  for(let i=0;i<10;i++)s+=P(`M${-188+i*38} -98 L${-188+i*38} 98`,ST('#1b3a2a',1));
  const per=60/(o.bpm||72),w=376,N=160;let d='';for(let i=0;i<=N;i++){const x=-188+i*w/N,t=(lt-(N-i)*.012)/per,f=t-Math.floor(t),y=f<.06?-Math.sin(f/.06*Math.PI)*12:f<.1?Math.sin((f-.06)/.04*Math.PI)*-70:f<.14?Math.sin((f-.1)/.04*Math.PI)*30:f>.3&&f<.42?-Math.sin((f-.3)/.12*Math.PI)*16:0;d+=(i?' L':'M')+f1(x)+' '+f1(y+10);}
  s+=P(d,ST('#3ff07a',3));s+=Tn(150,-70,String(o.bpm||72),26,700,{fill:'#3ff07a'})+G(110,-80,1+.15*Math.max(0,Math.sin(lt/per*Math.PI*2)),0,P(heartPath(0,0,9),'fill:#ff3b5b'));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('ecg · Electrocardiograma',lt=>NX.ecg({},lt));
/* Cerebro con chispas · o:{} */
NX.brain=(o={},lt)=>{let s=P('M-100 20 Q-130 -20 -100 -60 Q-100 -110 -40 -110 Q0 -140 40 -110 Q100 -110 100 -60 Q130 -20 100 20 Q90 60 40 56 Q0 80 -40 56 Q-90 60 -100 20Z','fill:#ff9db8;'+OL(2.6));
  s+=P('M-60 -80 Q-30 -60 -50 -30 Q-70 0 -40 20 M0 -110 Q-10 -60 10 -30 Q30 0 0 40 M60 -80 Q30 -50 50 -20 Q70 10 40 30',ST('#d9587f',3));
  for(let i=0;i<6;i++){const q=((lt*1.2)+i/6)%1;if(q<.3)s+=G(-80+hs(i)*160,-90+hs(i+2)*120,EZ.back(q/.3),0,spark4(10,K.yellow));}
  s+=Rc(-14,50,28,50,'#ff9db8',6,OL(2));
  return G(0,20,_ap(lt,0,.4),0,s);};
n2cat('brain · Cerebro',lt=>NX.brain({},lt));
/* Robot (inteligencia artificial) · o:{} */
NX.robot=(o={},lt)=>{const bl=((lt+.3)%3)<.12;let s=Rc(-80,-40,160,140,'#d6dbe2',20,OL(2.4))+Rc(-50,0,100,60,'#2a2f45',10)+[...Array(3)].map((_,i)=>Ci(-28+i*28,30,6,i===Math.floor(lt*3)%3?'#3ff07a':'#1b5a3a')).join('');
  s+=G(0,-110+_osc(lt,.6,3),1,_osc(lt,.4,4),Rc(-90,-70,180,120,'#f4f6f8',24,OL(2.4))+Rc(-66,-46,132,72,'#141a3a',14)+(bl?P('M-40 -10 L-16 -10 M16 -10 L40 -10',ST('#7fe0ff',5)):Ci(-28,-10,12,'#7fe0ff')+Ci(28,-10,12,'#7fe0ff'))+P('M-14 12 Q0 20 14 12',ST('#7fe0ff',3))+P('M0 -70 L0 -94',ST(K.ink,3))+Ci(0,-98,8,K.red,OL(1.6)));
  s+=G(-100,10,1,-20+_osc(lt,.7,14),Rc(-16,-10,32,80,'#d6dbe2',14,OL(2.2)))+G(100,10,1,20,Rc(-16,-10,32,80,'#d6dbe2',14,OL(2.2)));
  return G(0,60,_ap(lt,0,.4),0,s);};
n2cat('robot · Robot / IA',lt=>NX.robot({},lt));
/* Ventana de chat con IA (texto que se escribe) · o:{q,a} */
NX.chatai=(o={},lt)=>{const q=o.q||'¿Me resumes la noticia?',a=o.a||'Claro, aquí tienes los puntos clave…';let s=Rc(-200,-160,400,320,'#fff',16,OL(2.4))+Rc(-200,-160,400,40,'#2a2f45',16)+Rc(-200,-136,400,16,'#2a2f45')+[0,1,2].map(i=>Ci(-176+i*18,-140,5,['#ff5f57','#febc2e','#28c840'][i])).join('');
  s+=G(60,-70,_ap(lt,.2,.3),0,Rc(-130,-22,260,44,K.blue,14)+Tn(-116,6,q,13,600,{a:'start',fill:'#fff'}));
  const n=Math.floor(a.length*sg(lt,1.0,2.6));if(lt>.8)s+=G(-40,10,_ap(lt,.8,.3),0,Rc(-140,-22,280,44,'#eef0f4',14)+Tn(-126,6,n?a.slice(0,n):'• • •',13,600,{a:'start'}));
  s+=Rc(-180,110,360,34,'#f4f4f4',17,OL(1.6))+Ci(160,127,12,'url(#gRP)');
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('chatai · Chat con IA',lt=>NX.chatai({},lt));
/* Ciberataque: portátil con candado roto y código · o:{} */
NX.cyber=(o={},lt)=>{let s=Rc(-160,-200,320,200,'#2a2f45',12,OL(2.4))+Rc(-146,-186,292,172,'#0a0f0a',6);
  for(let r=0;r<9;r++){let line='';for(let k=0;k<22;k++)line+=hs(r*31+k+Math.floor(lt*8))<.5?'0':'1';s+=Tn(-136,-164+r*18,line,13,600,{a:'start',fill:'#2fbf5a',x:'opacity:.55'});}
  s+=P('M-200 0 L200 0 L170 20 L-170 20Z','fill:#9aa0a8;'+OL(2.2));
  const br=sg(lt,.8,1.2);s+=G(0,-100,_ap(lt,.3,.35),0,G(-br*10,-br*14,1,-br*20,P('M-28 -10 L-28 -40 Q-28 -66 0 -66 Q28 -66 28 -40 L28 -20',ST('#d6dbe2',10)))+Rc(-44,-14,88,70,K.red,10,OL(2.4))+Ci(0,14,9,K.ink)+Rc(-4,18,8,20,K.ink,2));
  if(lt>1.2&&Math.floor(lt*4)%2===0)s+=G(0,-250,1,0,pill('⚠ CIBERATAQUE',{sz:16,w:800,fill:K.red}));
  return G(0,100,_ap(lt,0,.4),0,s);};
n2cat('cyber · Ciberataque',lt=>NX.cyber({},lt));
/* Centro de datos (servidores) · o:{} */
NX.servers=(o={},lt)=>{let s='';for(let c=0;c<3;c++){const x=-150+c*110;s+=Rc(x-46,-260,92,260,'#2a2f45',8,OL(2.2));for(let r=0;r<8;r++){s+=Rc(x-38,-250+r*31,76,24,'#3b4258',3);for(let k=0;k<3;k++)s+=Ci(x-28+k*10,-238+r*31,3,hs(c*40+r*5+k+Math.floor(lt*6))<.5?'#3ff07a':'#1b5a3a');s+=Rc(x+4,-242+r*31,28,8,'#1e2234',2);}}
  for(let i=0;i<4;i++){const q=((lt*.8)+i/4)%1;s+=P(`M${-200+q*400} -280 l20 0`,ST(K.blue,3,`opacity:${f2(Math.sin(Math.PI*q))}`));}
  return G(0,130,_ap(lt,0,.4),0,s+P('M-230 0 L230 0',ST(K.ink,2.4)));};
n2cat('servers · Centro de datos',lt=>NX.servers({},lt));
/* Antena de telecomunicaciones (5G / señal) · o:{label} */
NX.antenna=(o={},lt)=>{let s=P('M-50 0 L0 -260 L50 0 M-38 -70 L38 -70 M-26 -140 L26 -140 M-14 -210 L14 -210 M-38 -70 L26 -140 M38 -70 L-26 -140 M-26 -140 L14 -210 M26 -140 L-14 -210',ST('#5b5f66',5));
  s+=Rc(-34,-230,20,44,'#fff',4,OL(1.8))+Rc(14,-230,20,44,'#fff',4,OL(1.8));
  for(let i=0;i<3;i++){const q=((lt*.9)+i/3)%1;s+=P(`M${f1(30+q*90)} ${f1(-260-q*60)} Q${f1(60+q*130)} -210 ${f1(30+q*90)} ${f1(-160+q*60)}`,ST(K.blue,4,`opacity:${f2(1-q)}`))+P(`M${f1(-30-q*90)} ${f1(-260-q*60)} Q${f1(-60-q*130)} -210 ${f1(-30-q*90)} ${f1(-160+q*60)}`,ST(K.blue,4,`opacity:${f2(1-q)}`));}
  if(o.label)s+=G(0,40,1,0,pill(o.label,{sz:15,w:800,fill:K.blue}),_ao(lt,.5,.3));
  return G(0,120,_ap(lt,0,.4),0,s+P('M-200 0 L200 0',ST(K.ink,2.4)));};
n2cat('antenna · Antena / cobertura',lt=>NX.antenna({label:'Caída de la red'},lt));

/* ===================== N · RÓTULOS, DATOS Y MAPAS ===================== */
/* Rótulo de teletipo que pasa (pantalla completa, abajo) · o:{items,y} */
NX.ticker=(o={},lt)=>{const y=o.y??860,it=o.items||['Última hora: nuevo terremoto en Japón','La bolsa cierra al alza','Alerta naranja por lluvias'];const txt=it.join('   •   ')+'   •   ';const w=mw(txt,fSans(15,700));
  const off=(lt*90)%w,p=_ao(lt,0,.3);let s=G(0,(1-p)*60,1,0,Rc(0,y-20,W,40,'#fff')+Rc(0,y-20,W,3,K.ink)+clipG(Tn(130-off,y+6,txt+txt,15,700,{a:'start'}),Rc(120,y-20,W-120,40,'#000'))+Rc(0,y-20,120,40,K.red)+Tn(60,y+6,o.label||'AL MINUTO',13,800,{fill:'#fff',ls:.06}));
  return s;};
n2cat('ticker · Teletipo que pasa',lt=>NX.ticker({},lt),'full');
/* Tarjeta de titular (categoría + titular grande) · o:{cat,title,c} */
NX.headcard=(o={},lt)=>{const t=o.title||'El Gobierno aprueba la nueva ley',words=t.split(' ');const lines=[];let cur='';words.forEach(w=>{if(mw(cur+' '+w,fSerif(30))>330&&cur){lines.push(cur);cur=w;}else cur=cur?cur+' '+w:w;});if(cur)lines.push(cur);
  const h=70+lines.length*36;let s=Rc(-196,-h/2+6,400,h,K.ink,14)+Rc(-200,-h/2,400,h,'#fff',14,OL(2.4))+Rc(-200,-h/2,8,h,o.c||'url(#gRP)',4);
  s+=G(-176+mw(o.cat||'POLÍTICA',fSans(11,800))/2+8,-h/2+28,1,0,pill(o.cat||'POLÍTICA',{sz:11,w:800,fill:o.c||K.ink}));
  lines.forEach((l,i)=>s+=G(0,0,1,0,Ts(-176,-h/2+70+i*36,l,30,{a:'start'}),_ao(lt,.25+i*.12,.3)));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('headcard · Tarjeta de titular',lt=>NX.headcard({},lt));
/* Televisor con informativo · o:{inner (svg), label} */
NX.tv=(o={},lt)=>{let s=Rc(-200,-140,400,250,'#2a2f45',18,OL(2.4))+Rc(-184,-124,368,218,'#bcd3f0',6);
  s+=clipG((o.inner||G(0,-20,1,0,Ci(0,0,40,'#ffd2b0',OL(2))+Rc(-60,40,120,60,K.blue,20,OL(2))))+Rc(-184,60,368,34,K.red)+Tn(-170,83,o.label||'ÚLTIMA HORA',14,800,{a:'start',fill:'#fff'})+Rc(110,-114,64,22,'#fff',4)+Tn(142,-98,'EN VIVO',9,800,{fill:K.red}),Rc(-184,-124,368,218,'#000',6));
  s+=P('M-60 110 L-90 160 M60 110 L90 160',ST(K.ink,5))+Rc(-110,154,220,10,K.ink,4);
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('tv · Televisor',lt=>NX.tv({},lt));
/* Verificación: bulo frente a verdad · o:{fake,real} */
NX.factcheck=(o={},lt)=>{let s='';[[-110,'BULO',o.fake||'«Prohíben las tortillas»',K.red,'✕'],[110,'VERDAD',o.real||'Solo cambia el etiquetado',K.green,'✓']].forEach(([x,h,t,c,ic],i)=>{const p=_ap(lt,.1+i*.6,.35);if(p<=0)return;
  s+=G(x,0,p,0,Rc(-96,-110,192,220,'#fff',14,OL(2.4))+Rc(-96,-110,192,44,c,14)+Rc(-96,-80,192,14,c)+Tn(0,-80,h,18,800,{fill:'#fff',ls:.1})+Ci(0,-10,30,c)+Tn(0,4,ic,34,800,{fill:'#fff'})+Tn(0,60,t.length>22?t.slice(0,22)+'…':t,12,700));});
  return s;};
n2cat('factcheck · Bulo vs verdad',lt=>NX.factcheck({},lt));
/* Ranking (top N) · o:{title,items:[[nombre,valor]],unit} */
NX.ranking=(o={},lt)=>{const it=o.items||[['India',1440],['China',1410],['EE. UU.',340],['Indonesia',280],['Pakistán',245]],mx=Math.max(...it.map(x=>x[1]));let s='';
  if(o.title)s+=G(0,-70,1,0,Ts(0,0,o.title,26),_ao(lt,0,.3));
  it.forEach(([n,v],i)=>{const y=-20+i*52,p=EZ.out(sg(lt,.2+i*.15,.9+i*.15));s+=G(0,y,1,0,Ci(-190,0,18,i===0?'url(#gSUN)':i<3?'#d6dbe2':'#fff',OL(2))+Tn(-190,6,String(i+1),15,800)+Tn(-160,6,n,15,700,{a:'start'})+Rc(-40,-12,220*v/mx*p,24,i===0?'url(#gRP)':K.ink,6)+(p>.3?Tn(-40+220*v/mx*p+8,6,_fmt(v*p)+(o.unit||''),13,800,{a:'start'}):''),_ao(lt,.1+i*.15,.25));});
  return s;};
n2cat('ranking · Ranking',lt=>NX.ranking({title:'Países más poblados',unit:' M'},lt));
/* Comparación de tamaño «X veces más» · o:{a,b,ratio,la,lb} */
NX.compare=(o={},lt)=>{const r=o.ratio||10,k=Math.sqrt(r),R=110,r0=R/k,q=EZ.back(sg(lt,.6,1.3));let s=Ci(-120,40-r0,r0,o.ca||K.blue,OL(2))+Ci(80,40-R*q,R*q,o.cb||'url(#gRP)',OL(2.4))+P('M-240 40 L240 40',ST(K.ink,2.4));
  s+=G(-120,80,1,0,Tn(0,0,o.la||'antes',13,700),_ao(lt,.2,.3))+G(80,80,1,0,Tn(0,0,o.lb||'ahora',13,700),_ao(lt,.8,.3));
  if(q>.9)s+=G(80,40-R,1,0,pill('×'+String(r).replace('.',','),{sz:22,w:800}),_ap(lt,1.3,.3));
  return s;};
n2cat('compare · «X veces más»',lt=>NX.compare({ratio:32,la:'6,9',lb:'9,9'},lt));
/* Comparación de alturas (persona vs objeto) · o:{items:[[nombre,altura_m,color]]} */
NX.heights=(o={},lt)=>{const it=o.items||[['persona',1.75,K.blue],['jirafa',5.5,K.yellow],['casa',9,K.red],['T. rex',4,K.green]],mx=Math.max(...it.map(x=>x[1])),H=300,n=it.length,bw=70;let s=P('M-230 0 L230 0',ST(K.ink,2.4));
  it.forEach(([nm,h,c],i)=>{const x=-((n-1)/2)*(bw+30)+i*(bw+30),p=EZ.out(sg(lt,.2+i*.15,1+i*.15)),hh=H*h/mx*p;s+=Rc(x-bw/2,-hh,bw,hh,c,8,OL(2))+Tn(x,24,nm,13,700)+(p>.3?Tn(x,-hh-10,_fmt(h,h%1?1:0)+' m',14,800):'');});
  for(let i=1;i<=4;i++)s+=P(`M-230 ${-H*i/4} L230 ${-H*i/4}`,ST('rgba(20,18,18,.12)',1.2,'stroke-dasharray:4 6'));
  return G(0,120,1,0,s);};
n2cat('heights · Comparación de alturas',lt=>NX.heights({},lt));
/* Globo terráqueo girando con chincheta · o:{label} */
NX.globe=(o={},lt)=>{const R=130,rot=(lt*.25)%1;let s=Ci(0,0,R,'#2a37d7',OL(2.6));
  const cont=[[.1,-.3,.22,.18],[.35,.1,.16,.26],[.62,-.2,.2,.14],[.82,.25,.12,.16],[.5,-.55,.1,.08]];
  s+=clipG(cont.map(([u,v,w,h],i)=>{const ph=((u+rot)%1)*Math.PI*2-Math.PI,x=Math.sin(ph)*R,vis=Math.cos(ph);if(vis<0)return '';return El(x,v*R,w*R*vis,h*R,'#3f9b4f');}).join('')+[...Array(5)].map((_,i)=>{const ph=((i/5+rot)%1)*Math.PI*2-Math.PI;return El(0,0,Math.abs(Math.sin(ph))*R,R,'none',ST('rgba(255,255,255,.25)',1.4));}).join('')+P(`M${-R} 0 L${R} 0`,ST('rgba(255,255,255,.25)',1.4)),`<circle cx="0" cy="0" r="${R}"/>`);
  s+=Ci(-40,-50,40,'rgba(255,255,255,.12)');
  s+=G(30,-40,1,0,_pulse(lt,14,K.red,2,1.3)+G(0,-(1-EZ.out(sg(lt,.5,.9)))*60,1,0,pinS(K.red),cl(sg(lt,.5,.6)*4)));
  if(o.label)s+=G(30,-110,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.9,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('globe · Globo terráqueo',lt=>NX.globe({label:'Aquí'},lt));
/* Pantalla partida (dos lugares a la vez) · o:{a,b,ta,tb} */
NX.split=(o={},lt)=>{const q=EZ.io(sg(lt,0,.6));let s='';[[-1,o.a||'MADRID',o.ta||'14:00','#f6a81a'],[1,o.b||'TOKIO',o.tb||'21:00','#2a37d7']].forEach(([d,n,t,c])=>{s+=G(d*120*q,0,1,0,Rc(-116,-150,232,300,c,12,OL(2.4))+clipG(G(0,60,.7,0,_skyline(300,{c:'rgba(20,18,18,.35)',lit:0})),Rc(-116,-150,232,300,'#000',12))+Tn(0,-110,n,20,800,{fill:'#fff',ls:.1})+G(0,90,1,0,pill(t,{sz:18,w:800})));});
  return s;};
n2cat('split · Pantalla partida',lt=>NX.split({},lt));
/* Tarta (gráfico circular) · o:{items:[[nombre,valor,color]]} */
NX.pie=(o={},lt)=>{const it=o.items||[['Renovables',56,K.green],['Gas',20,K.orange],['Nuclear',18,K.purple],['Otros',6,'#9b9b9b']],tot=it.reduce((a,b)=>a+b[1],0),R=120,p=EZ.io(sg(lt,.2,1.6));let s='',a0=-Math.PI/2;
  it.forEach(([n,v,c],i)=>{const a1=a0+v/tot*Math.PI*2*p,large=(a1-a0)>Math.PI?1:0;if(a1>a0+.001)s+=P(`M0 0 L${f1(Math.cos(a0)*R)} ${f1(Math.sin(a0)*R)} A${R} ${R} 0 ${large} 1 ${f1(Math.cos(a1)*R)} ${f1(Math.sin(a1)*R)}Z`,`fill:${c};stroke:#fff;stroke-width:3`);
    const am=(a0+a1)/2;if(p>.98)s+=G(Math.cos(am)*(R+44),Math.sin(am)*(R+30),1,0,pill(n+' '+v+'%',{sz:11,w:700,fill:c}),_ao(lt,1.6+i*.1,.3));a0=a1;});
  return G(0,0,1,0,s+Ci(0,0,R,'none',OL(2.4)));};
n2cat('pie · Gráfico de tarta',lt=>NX.pie({},lt));
/* Barra 100 % apilada (comparar dos años) · o:{rows:[[etiqueta,[[v,c],…]]],legend:[[n,c]]} */
NX.stack=(o={},lt)=>{const rows=o.rows||[['2015',[[30,K.green],[45,K.orange],[25,K.purple]]],['2025',[[56,K.green],[24,K.orange],[20,K.purple]]]],w=360;let s='';
  rows.forEach(([lab,segs],i)=>{const y=i*70,p=EZ.out(sg(lt,.2+i*.3,1.1+i*.3));let x=-w/2+30;s+=Tn(-w/2,y+6,lab,15,800,{a:'end'});segs.forEach(([v,c])=>{const ww=(w-30)*v/100*p;s+=Rc(x,y-18,ww,36,c,0,'stroke:#fff;stroke-width:2')+(ww>34?Tn(x+ww/2,y+5,v+'%',12,800,{fill:'#fff'}):'');x+=ww;});});
  (o.legend||[['renovables',K.green],['fósiles',K.orange],['nuclear',K.purple]]).forEach(([n,c],i)=>s+=G(-130+i*120,rows.length*70+10,1,0,Ci(0,0,7,c)+Tn(12,5,n,12,700,{a:'start'}),_ao(lt,.6,.3)));
  return G(20,-40,1,0,s);};
n2cat('stack · Barras 100 % apiladas',lt=>NX.stack({},lt));
/* Distancia entre dos puntos con regla · o:{a,b,km} */
NX.distance=(o={},lt)=>{const p=EZ.io(sg(lt,.4,1.6));let s=G(-170,0,1,0,_pulse(lt,12,K.blue,2,1.4)+Ci(0,0,8,K.blue,OL(2,'#fff')))+G(-170,-34,1,0,pill(o.a||'Madrid',{sz:13,w:700}),_ao(lt,.1,.3));
  s+=DR('M-170 0 Q0 -80 170 0',ST(K.ink,3,'stroke-dasharray:8 8'),p);
  if(p>.98)s+=G(170,0,_ap(lt,1.6,.3),0,Ci(0,0,8,K.red,OL(2,'#fff')))+G(170,-34,1,0,pill(o.b||'París',{sz:13,w:700}),_ao(lt,1.6,.3))+G(0,-70,1,0,pill(_fmt((o.km||1053)*sg(lt,1.6,2.4))+' km',{sz:18,w:800,fill:'url(#gRP)'}),_ao(lt,1.6,.3));
  return s;};
n2cat('distance · Distancia',lt=>NX.distance({},lt));
/* Buscador que se escribe (lo más buscado) · o:{q} */
NX.search=(o={},lt)=>{const q=o.q||'qué es una alerta de terremoto',n=Math.floor(q.length*sg(lt,.4,.4+q.length*.05));let s=Rc(-210,-28,420,56,'#fff',28,OL(2.4))+Ci(-180,0,11,'none',ST(K.ink,3))+P('M-172 8 L-164 16',ST(K.ink,3))+Tn(-156,6,q.slice(0,n),15,600,{a:'start'})+(Math.floor(lt*3)%2&&n<q.length?Rc(-155+mw(q.slice(0,n),fSans(15,600)),-11,2,22,K.ink):'');
  if(n>=q.length){const p=_ao(lt,.6+q.length*.05,.3);s+=G(0,0,1,0,Rc(-210,40,420,120,'#fff',14,OL(2))+[0,1,2].map(i=>Tn(-180,74+i*34,['🔍 '+q,'🔍 '+q+' hoy','🔍 '+q.split(' ').slice(0,3).join(' ')+'…'][i],13,600,{a:'start',fill:i?'#555':K.ink})).join(''),p);
    s+=G(150,-60,1,0,pill('▲ más buscado',{sz:12,w:800,fill:K.red}),p);}
  return G(0,-40,_ap(lt,0,.3),0,s);};
n2cat('search · Búsqueda en internet',lt=>NX.search({},lt));
/* Pila de notificaciones en el móvil · o:{items:[[app,texto]]} */
NX.notifs=(o={},lt)=>{const it=o.items||[['Alerta','Aviso rojo por lluvias'],['Noticias','Se suspenden las clases'],['Tráfico','Cortada la A-7'],['Tiempo','Hasta 120 l/m² hoy']];let s=Rc(-130,-260,260,520,'#141212',36,OL(2.4))+Rc(-118,-246,236,492,'#2a37d7',26)+Tn(0,-190,'17:42',38,600,{fill:'#fff'});
  it.forEach(([a,t],i)=>{const p=_ap(lt,.3+i*.35,.3);if(p<=0)return;const y=-120+i*74;s+=G(0,y,p,0,Rc(-106,-30,212,62,'rgba(255,255,255,.92)',14)+Rc(-94,-18,28,28,i?K.ink:K.red,7)+Tn(-58,-6,a.toUpperCase(),10,800,{a:'start',fill:'#666'})+Tn(-58,14,t,12,700,{a:'start'}));});
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('notifs · Notificaciones',lt=>NX.notifs({},lt));
/* Correo electrónico que llega y se abre · o:{subject} */
NX.email=(o={},lt)=>{const op=EZ.io(sg(lt,.6,1.2)),up=EZ.out(sg(lt,1.0,1.8));let s='';
  s+=G(0,-up*90,1,0,Rc(-120,-80,240,150,'#fff',6,OL(2))+Tn(-100,-50,'Asunto:',11,800,{a:'start',fill:'#666'})+Tn(-100,-30,o.subject||'Comunicado oficial',14,800,{a:'start'})+[...Array(4)].map((_,i)=>Rc(-100,-10+i*16,i===3?120:200,6,'#d7d0c4',3)).join(''),up>0?1:0);
  s+=Rc(-150,-60,300,180,'#e8e2d4',8,OL(2.4))+P(`M-150 -60 L0 ${f1(lerp(40,-160,op))} L150 -60`,`fill:#f4efe4;${OL(2.4)}`)+P('M-150 120 L-20 30 M150 120 L20 30',ST('#b9b0a0',2));
  s+=G(130,-70,_ap(lt,.2,.3),0,Ci(0,0,18,K.red,OL(2,'#fff'))+Tn(0,6,'1',16,800,{fill:'#fff'}));
  return G(0,40,_ap(lt,0,.4),0,s);};
n2cat('email · Correo electrónico',lt=>NX.email({},lt));
/* Documento filtrado con tachones · o:{title} */
NX.leak=(o={},lt)=>{let s=Rc(-150,-200,300,380,K.ink,8)+Rc(-156,-206,300,380,'#fbf8f2',8,OL(2.2))+Tn(-6,-160,o.title||'CONFIDENCIAL',20,800,{fill:K.red,ls:.12});
  for(let i=0;i<11;i++){const y=-120+i*24,w=200+hs(i)*40;s+=Rc(-126,y,w,8,'#d7d0c4',3);if(hs(i+7)<.45){const p=EZ.out(sg(lt,.3+i*.08,.6+i*.08));s+=Rc(-126+hs(i)*60,y-4,(90+hs(i+3)*80)*p,16,K.ink,2);}}
  s+=stampA(60,120,lt-1.4,'FILTRADO',{r:-12,sz:22,c:K.red});
  return G(0,0,_ap(lt,0,.4),0,G(0,0,1,3,s));};
n2cat('leak · Documento filtrado',lt=>NX.leak({},lt));
/* Gran pregunta (tarjeta) · o:{q} */
NX.bigq=(o={},lt)=>{let s=Ci(0,-40,90,'url(#gRP)',OL(2.6))+Ts(4,0,'?',130,{fill:'#fff',stroke:'#fff'});s=G(0,0,1+.04*Math.sin(lt*4),_osc(lt,.5,5),s);
  if(o.q)s+=G(0,120,1,0,pill(o.q,{sz:16,w:800}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('bigq · Gran pregunta',lt=>NX.bigq({q:'¿Qué sabemos?'},lt));

/* ===================== O · TRANSPORTE ===================== */
/* Panel de salidas del aeropuerto con cancelaciones · o:{rows:[[hora,destino,estado]]} */
NX.departures=(o={},lt)=>{const rows=o.rows||[['10:15','LONDRES','CANCELADO'],['10:40','PARÍS','RETRASADO'],['11:05','ROMA','CANCELADO'],['11:30','LISBOA','EMBARQUE'],['12:00','BERLÍN','CANCELADO']];let s=Rc(-230,-170,460,340,'#141212',12,OL(2.4))+Rc(-230,-170,460,44,'#2a2f45',12)+Rc(-230,-140,460,14,'#2a2f45')+Tn(-206,-140,'✈  SALIDAS',18,800,{a:'start',fill:'#ffd23f',ls:.06});
  rows.forEach(([h,d,st],i)=>{const y=-90+i*50,flip=sg(lt,.2+i*.15,.5+i*.15),c=st==='CANCELADO'?'#ff4d4d':st==='RETRASADO'?'#ffb21f':'#7dffb0';
    s+=Tn(-206,y+8,h,16,700,{a:'start',fill:'#ffd23f'})+Tn(-130,y+8,d,16,700,{a:'start',fill:'#fff'})+G(150,y,1,0,Rc(-70,-16,140,32,'#1e1e22',4)+(flip>.5?Tn(0,7,st,13,800,{fill:c,x:st==='CANCELADO'&&Math.floor(lt*2)%2?'opacity:.6':''}):Rc(-60,-2,120*(1-flip*2),4,'#555')),1);});
  return s;};
n2cat('departures · Panel de salidas',lt=>NX.departures({},lt));
/* Atasco de tráfico · o:{} */
NX.traffic=(o={},lt)=>{let s=Rc(-260,-60,520,120,'#2f3036')+P('M-260 0 L260 0',ST('#f4eee2',3,'stroke-dasharray:24 20'));
  const car=(c)=>P('M-50 0 L-44 -20 Q-38 -30 -16 -30 L18 -30 Q34 -28 40 -16 L52 -12 Q56 -8 54 0Z','fill:'+c+';'+OL(1.8))+Rc(-30,-26,20,12,'#bcd3f0',2)+Rc(-6,-26,22,12,'#bcd3f0',2)+Ci(-28,2,8,K.ink)+Ci(30,2,8,K.ink);
  const cs=['#2a37d7','#f34841','#fff','#f6a81a','#3f9b4f','#8005f0'];for(let r=0;r<2;r++)for(let i=0;i<5;i++){const x=-210+i*110+(r?50:0)+_osc(lt,.3,2,i+r*5),on=Math.floor(lt*2+i+r)%2===0;s+=G(x,r?50:-8,1,0,car(cs[(i+r*3)%6])+(r?'':Ci(-50,-6,4,on?'#ff3b3b':'#7a1f1f')));}
  s+=G(0,-120,_ap(lt,.4,.3),0,pill('🚗 retenciones de 12 km',{sz:14,w:800,fill:K.red}));
  return s;};
n2cat('traffic · Atasco',lt=>NX.traffic({},lt));
/* Metro / tren de cercanías · o:{} */
NX.metro=(o={},lt)=>{const x=lerp(-420,420,sg(lt,0,3.2));let s=Rc(-260,-180,520,180,'#e6e6e6')+Rc(-260,-180,520,20,'#2a2f45')+P('M-260 0 L260 0',ST(K.ink,4))+Rc(-260,0,520,30,'#9aa0a8');
  s+=clipG(G(x,0,1,0,[0,1].map(k=>G(-150+k*300,0,1,0,Rc(-145,-140,290,130,K.red,16,OL(2.4))+[...Array(4)].map((_,i)=>Rc(-120+i*62,-118,46,46,'#bcd3f0',4,OL(1.4))).join('')+Rc(-140,-60,280,10,'#fff')+Ci(-100,-6,10,K.ink)+Ci(100,-6,10,K.ink))).join('')),Rc(-260,-200,520,240,'#000'));
  s+=G(-180,-200,1,0,Ci(0,0,22,K.red,OL(2))+Tn(0,7,'M',20,800,{fill:'#fff'}));
  return G(0,90,_ap(lt,0,.4),0,s);};
n2cat('metro · Metro / cercanías',lt=>NX.metro({},lt));
/* Bicicleta · o:{} */
NX.bike=(o={},lt)=>{const a=lt*400;const wh=x=>G(x,0,1,a,Ci(0,0,50,'none',ST(K.ink,6))+[0,45,90,135].map(r=>G(0,0,1,r,P('M-48 0 L48 0',ST('#9aa0a8',2)))).join(''));
  let s=wh(-80)+wh(90)+P('M-80 0 L-10 -10 L50 -80 L-30 -80 L-10 -10 M50 -80 L90 0 M-30 -80 L-40 -100 M-56 -100 L-24 -100 M50 -80 L46 -110 L70 -116',ST(K.blue,8))+G(-10,-10,1,a*.5,P('M-14 0 L14 0',ST(K.ink,4)));
  return G(_osc(lt,.5,6),40,_ap(lt,0,.4),0,s);};
n2cat('bike · Bicicleta',lt=>NX.bike({},lt));
/* Crucero · o:{} */
NX.cruise=(o={},lt)=>{let s=G(0,_osc(lt,.4,3),1,0,P('M-230 0 L210 0 L240 -40 L-220 -40Z','fill:#fff;'+OL(2.4))+Rc(-190,-80,360,40,'#fff',4,OL(2))+Rc(-150,-116,280,36,'#fff',4,OL(2))+Rc(-100,-146,180,30,'#fff',4,OL(2))+Rc(20,-190,40,44,K.red,4,OL(2))+Rc(20,-190,40,12,K.ink,3)+
  [...Array(3)].map((_,r)=>[...Array(14-r*4)].map((_,i)=>Ci(-176+r*36+i*25,-62-r*36,4,'#2a37d7')).join('')).join('')+P('M-230 -10 L210 -10',ST(K.blue,4)));
  s+=Rc(-260,0,520,60,'url(#gWA)')+P(`M-260 0 ${[...Array(13)].map((_,i)=>`Q${-250+i*40} ${f1(-4+_osc(lt,1,2,i))} ${-240+i*40} 0`).join(' ')}`,ST('#a7b0ff',2.4));
  return G(0,60,_ap(lt,0,.4),0,s);};
n2cat('cruise · Crucero',lt=>NX.cruise({},lt));
/* Carretera cortada (conos y valla) · o:{text} */
NX.roadblock=(o={},lt)=>{let s=Rc(-260,-10,520,80,'#2f3036')+P('M-260 30 L260 30',ST('#f4eee2',3,'stroke-dasharray:24 20'));
  s+=G(0,-10,_ap(lt,.1,.35),0,P('M-150 0 L-140 -110 M150 0 L140 -110',ST(K.ink,5))+Rc(-170,-130,340,40,'#fff',4,OL(2.2))+[...Array(6)].map((_,i)=>P(`M${-150+i*60} -130 L${-120+i*60} -90 L${-100+i*60} -90 L${-130+i*60} -130Z`,'fill:'+K.red)).join('')+Rc(-90,-74,180,40,K.yellow,4,OL(2))+Tn(0,-48,o.text||'CORTADA',18,800));
  [-200,-110,110,200].forEach((x,i)=>s+=G(x,20,_ap(lt,.3+i*.08,.3),0,P('M-22 0 L-8 -60 L8 -60 L22 0Z','fill:'+K.orange+';'+OL(2))+Rc(-14,-40,28,10,'#fff')+Rc(-28,-4,56,8,K.ink,2)));
  return G(0,60,1,0,s);};
n2cat('roadblock · Carretera cortada',lt=>NX.roadblock({},lt));

/* ===================== P · DEPORTE Y CULTURA ===================== */
/* Fútbol: balón que entra en la portería · o:{} */
NX.goal=(o={},lt)=>{const q=sg(lt,.3,1.2),bx=lerp(-200,80,EZ.out(q)),by=lerp(60,-60,EZ.out(q))-Math.sin(Math.PI*q)*60;let s=Rc(-260,0,520,80,'#3f9b4f')+P('M-260 0 L260 0',ST('#fff',3));
  s+=G(120,0,1,0,P('M-60 0 L-60 -140 L120 -140 L120 0',ST('#fff',8))+[...Array(8)].map((_,i)=>P(`M${-60+i*25} -140 L${-40+i*25} -20`,ST('rgba(255,255,255,.5)',1.4))).join('')+[...Array(5)].map((_,i)=>P(`M-60 ${-120+i*28} L120 ${-110+i*28}`,ST('rgba(255,255,255,.5)',1.4))).join(''));
  s+=G(bx,by,1,lt*400,Ci(0,0,22,'#fff',OL(2))+P('M0 -8 L8 -2 L5 8 L-5 8 L-8 -2Z','fill:'+K.ink)+P('M0 -8 L0 -22 M8 -2 L20 -8 M5 8 L12 18 M-5 8 L-12 18 M-8 -2 L-20 -8',ST(K.ink,1.6)));
  if(lt>1.3)s+=G(0,-200,1,0,Ts(0,0,'¡GOL!',64,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),_ap(lt,1.3,.35))+confetti(0,-200,lt-1.3,24,2);
  return G(0,60,1,0,s);};
n2cat('goal · Gol',lt=>NX.goal({},lt));
/* Copa / trofeo · o:{label} */
NX.trophy=(o={},lt)=>{let s=P('M-70 -170 L70 -170 Q70 -70 0 -50 Q-70 -70 -70 -170Z','fill:url(#gSUN);'+OL(2.6))+P('M-70 -150 Q-120 -150 -110 -110 Q-100 -80 -54 -80 M70 -150 Q120 -150 110 -110 Q100 -80 54 -80',ST(K.ink,8))+P('M-70 -150 Q-120 -150 -110 -110 Q-100 -80 -54 -80 M70 -150 Q120 -150 110 -110 Q100 -80 54 -80',ST('#f6a81a',4));
  s+=Rc(-14,-54,28,40,'#f6a81a',2,OL(2))+Rc(-60,-16,120,26,'#2a2f45',4,OL(2))+Rc(-74,10,148,22,'#2a2f45',4,OL(2))+P('M-40 -150 Q-30 -100 -10 -80',ST('#fff',4,'opacity:.5'));
  for(let i=0;i<4;i++){const q=((lt*.8)+i/4)%1;s+=G(-90+hs(i)*180,-200+hs(i+2)*100,Math.sin(Math.PI*q),q*90,spark4(10,i%2?K.yellow:'#fff'));}
  if(o.label)s+=G(0,70,1,0,pill(o.label,{sz:15,w:800}),_ao(lt,.4,.3));
  return G(0,80,_ap(lt,0,.4),0,s);};
n2cat('trophy · Trofeo',lt=>NX.trophy({label:'Campeones'},lt));
/* Marcador · o:{a,b,sa,sb,ca,cb,min} */
NX.scoreboard=(o={},lt)=>{const sb=lt>1.2?(o.sb??1):Math.max(0,(o.sb??1)-1);let s=Rc(-220,-70,440,140,'#141212',14,OL(2.4));
  [[-1,o.a||'LOCAL',o.sa??2,o.ca||K.blue],[1,o.b||'VISITANTE',sb,o.cb||K.red]].forEach(([d,n,sc,c])=>{s+=G(d*120,0,1,0,Rc(-80,-50,160,30,c,4)+Tn(0,-29,n,13,800,{fill:'#fff',ls:.06})+Tn(0,46,String(sc),56,700,{fill:'#ffd23f'}));});
  s+=Tn(0,20,'–',40,700,{fill:'#fff'})+G(0,-92,1,0,pill(o.min||"78'",{sz:13,w:800,fill:K.red}));
  if(lt>1.2&&lt<1.8)s+=Rc(40,-20,160,80,'#fff',8,`opacity:${f2(.5*(1-sg(lt,1.2,1.8)))}`);
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('scoreboard · Marcador',lt=>NX.scoreboard({},lt));
/* Estadio lleno · o:{} */
NX.stadium=(o={},lt)=>{let s=P('M-250 -40 Q0 -240 250 -40 L250 60 L-250 60Z','fill:#5b5f66;'+OL(2.4));
  for(let r=0;r<6;r++)for(let i=0;i<26;i++){const t=i/25,x=lerp(-230,230,t),y=-40-Math.sin(Math.PI*t)*(150-r*22)+r*6,jump=Math.max(0,Math.sin(lt*6+i*.7+r))*3;s+=Ci(x,y-jump,5,['#2a37d7','#e73568','#f6a81a','#fff','#3f9b4f'][(i+r*2)%5]);}
  s+=Rc(-250,20,500,80,'#3f9b4f')+P('M-250 20 L250 20 M0 20 L0 100',ST('#fff',2.4))+El(0,60,40,18,'none',ST('#fff',2.4));
  for(let i=0;i<2;i++)s+=G(i?220:-220,-200,1,0,Rc(-4,0,8,60,'#9aa0a8')+Rc(-26,-18,52,22,'#fff7d6',4,OL(1.6))+P('M0 0 L-60 140 L60 140Z',`fill:rgba(255,247,214,${f2(.15+.05*Math.sin(lt*3))})`));
  return G(0,60,_ap(lt,0,.4),0,s);};
n2cat('stadium · Estadio',lt=>NX.stadium({},lt));
/* Canasta de baloncesto · o:{} */
NX.hoop=(o={},lt)=>{const q=sg(lt,.3,1.4),bx=lerp(-180,60,q),by=lerp(80,-150,q)-Math.sin(Math.PI*q)*140+(q>=1?sg(lt,1.4,1.8)*100:0);let s=Rc(40,-260,12,300,'#5b5f66')+Rc(20,-250,120,80,'#fff',4,OL(2.4))+Rc(50,-230,60,40,'none',2,ST(K.red,3));
  s+=P('M20 -170 L100 -170',ST(K.orange,6))+[...Array(5)].map((_,i)=>P(`M${24+i*18} -168 L${30+i*14} -120`,ST('#fff',2))).join('')+P('M28 -140 L96 -140 M32 -124 L92 -124',ST('#fff',2));
  s+=G(bx,by,1,lt*300,Ci(0,0,24,K.orange,OL(2))+P('M-24 0 L24 0 M0 -24 L0 24 M-17 -17 Q0 0 -17 17 M17 -17 Q0 0 17 17',ST(K.ink,1.6)));
  return G(-20,100,1,0,s+P('M-220 40 L220 40',ST(K.ink,2.4)));};
n2cat('hoop · Baloncesto',lt=>NX.hoop({},lt));
/* Coche de carreras · o:{c} */
NX.racecar=(o={},lt)=>{const c=o.c||K.red;let s=shadowE(0,4,190,.15)+P('M-200 -6 L-190 -30 L-120 -36 L-60 -60 L20 -62 L60 -40 L180 -30 L200 -12 L200 -6Z','fill:'+c+';'+OL(2.4))+Rc(-210,-56,30,30,K.ink,3)+Rc(180,-24,40,14,K.ink,3)+Ci(-30,-56,16,'#2a2f45',OL(1.6))+Tn(60,-24,'27',18,800,{fill:'#fff'});
  s+=[-130,120].map(x=>G(x,-6,1,lt*900,Ci(0,0,26,K.ink)+Ci(0,0,12,'#9aa0a8')+P('M-10 0 L10 0',ST(K.ink,3)))).join('');
  for(let i=0;i<5;i++){const q=((lt*3)+i/5)%1;s+=P(`M${f1(-220-q*120)} ${-50+i*10} l-40 0`,ST('#fff',3,`opacity:${f2(1-q)}`));}
  return G(0,40,_ap(lt,0,.4),0,s);};
n2cat('racecar · Coche de carreras',lt=>NX.racecar({},lt));
/* Línea de meta con cinta · o:{} */
NX.finish=(o={},lt)=>{const q=sg(lt,.2,1.6),x=lerp(-260,40,q);let s=P('M-260 40 L260 40',ST(K.ink,2.4))+[...Array(8)].map((_,r)=>[...Array(2)].map((_,c)=>Rc(60+c*12,-160+r*24,12,24,(r+c)%2?K.ink:'#fff')).join('')).join('')+P('M60 -170 L60 40 M84 -170 L84 40',ST(K.ink,3));
  const broke=x>36;s+=broke?P('M60 -60 Q30 -40 10 -20 M84 -60 Q120 -40 150 -10',ST(K.red,4)):P('M60 -60 L84 -60',ST(K.red,4));
  s+=G(x,40,1.3,0,_person(K.blue,1,1,lt*1.6));
  if(broke)s+=confetti(70,-100,lt-1.55,22,4);
  return G(-20,80,_ap(lt,0,.3),0,s);};
n2cat('finish · Línea de meta',lt=>NX.finish({},lt));
/* Estatuilla de premio (estrella genérica) · o:{label} */
NX.award=(o={},lt)=>{let s=Rc(-50,0,100,40,'#2a2f45',4,OL(2))+Rc(-36,-14,72,16,'#3b4258',2,OL(1.6))+P('M-10 -14 L-14 -120 L14 -120 L10 -14Z','fill:url(#gSUN);'+OL(2))+G(0,-150,1+.05*Math.sin(lt*4),lt*20,P(starPath(0,0,44,20,5),'fill:url(#gSUN);'+OL(2.4)));
  for(let i=0;i<5;i++){const q=((lt*.9)+i/5)%1;s+=G(-80+hs(i)*160,-220+hs(i+3)*160,Math.sin(Math.PI*q),q*90,spark4(9,i%2?'#fff':K.yellow));}
  if(o.label)s+=G(0,80,1,0,pill(o.label,{sz:15,w:800,fill:'url(#gRP)'}),_ao(lt,.4,.3));
  return G(0,80,_ap(lt,0,.4),0,s);};
n2cat('award · Premio',lt=>NX.award({label:'Mejor película'},lt));
/* Escenario de concierto con focos · o:{} */
NX.concert=(o={},lt)=>{let s=Rc(-250,-300,500,300,'#141a3a',12);
  [[-180,K.pink],[0,K.yellow],[180,K.blue]].forEach(([x,c],i)=>{const a=_osc(lt,.4,18,i*2);s+=G(x,-290,1,a,P('M-6 0 L-70 260 L70 260 L6 0Z',`fill:${c};opacity:.22`)+Rc(-14,-10,28,20,'#2a2f45',4,OL(1.4)));});
  s+=Rc(-250,-40,500,40,'#2a2f45');
  s+=G(0,-40,1,0,_person('#141212',1.3,0)+P('M20 -70 L40 -110',ST(K.ink,3))+Ci(42,-114,6,K.ink));
  for(let i=0;i<16;i++){const jump=Math.max(0,Math.sin(lt*7+i))*6;s+=Ci(-230+i*31,40-jump,12,'#0d1020')+P(`M${-230+i*31} ${32-jump} L${-236+i*31+(i%3)*4} ${-6-jump}`,ST('#0d1020',5));}
  for(let i=0;i<3;i++){const q=((lt*.8)+i/3)%1;s+=Tn(-60+i*60,-120-q*80,'♪',22,700,{fill:'#fff',x:`opacity:${f2(1-q)}`});}
  return clipG(s,Rc(-250,-300,500,360,'#000',12));};
n2cat('concert · Concierto',lt=>G(0,140,1,0,NX.concert({},lt)));
/* Claqueta de cine · o:{title} */
NX.clapper=(o={},lt)=>{const a=lt%1.6<.2?-30*(1-(lt%1.6)/.2):lt%1.6<1.2?0:-30*sg(lt%1.6,1.2,1.6);let s=Rc(-150,-60,300,180,'#141212',8,OL(2.4))+Tn(-130,-20,'ESCENA',12,800,{a:'start',fill:'#fff'})+Tn(-130,10,o.title||'ESTRENO',26,800,{a:'start',fill:'#fff'})+P('M-150 40 L150 40 M0 40 L0 120',ST('#fff',2))+Tn(-120,80,'TOMA 1',13,700,{a:'start',fill:'#fff'});
  s+=G(-150,-60,1,a,Rc(0,-36,300,36,'#141212',4,OL(2.4))+[...Array(5)].map((_,i)=>P(`M${10+i*60} -36 L${40+i*60} -36 L${20+i*60} 0 L${-10+i*60} 0Z`,'fill:#fff')).join(''));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('clapper · Claqueta de cine',lt=>NX.clapper({},lt));
/* Mando de videojuegos · o:{} */
NX.gamepad=(o={},lt)=>{let s=P('M-150 -40 Q-150 -90 -90 -90 L90 -90 Q150 -90 150 -40 L170 50 Q180 100 130 100 Q100 100 80 60 L-80 60 Q-100 100 -130 100 Q-180 100 -170 50Z','fill:#2a2f45;'+OL(2.6));
  s+=Rc(-110,-40,60,20,'#141212',4)+Rc(-90,-60,20,60,'#141212',4)+[[90,-56,K.green],[120,-30,K.red],[90,-4,K.blue],[60,-30,K.yellow]].map(([x,y,c],i)=>Ci(x,y,13*(Math.floor(lt*3)%4===i?1.15:1),c,OL(1.6))).join('')+Ci(-40,20,18,'#141212')+Ci(40,20,18,'#141212');
  return G(0,0,_ap(lt,0,.4),0,G(0,0,1,_osc(lt,.4,4),s));};
n2cat('gamepad · Videojuegos',lt=>NX.gamepad({},lt));
/* Libro abierto (premio literario, cultura) · o:{} */
NX.book=(o={},lt)=>{const fl=sg(lt%2.4,.4,1.2);let s=P('M-180 0 Q-90 -20 0 0 Q90 -20 180 0 L180 140 Q90 120 0 140 Q-90 120 -180 140Z','fill:#8a2b1f;'+OL(2.4))+P('M-170 -8 Q-86 -28 0 -6 L0 128 Q-86 108 -170 126Z','fill:#fbf6ea;'+OL(2))+P('M170 -8 Q86 -28 0 -6 L0 128 Q86 108 170 126Z','fill:#f4eedd;'+OL(2));
  for(let i=0;i<7;i++)s+=P(`M-150 ${14+i*15} Q-80 ${2+i*15} -20 ${16+i*15}`,ST('#b9b0a0',2))+P(`M20 ${16+i*15} Q80 ${2+i*15} 150 ${14+i*15}`,ST('#b9b0a0',2));
  if(fl>0&&fl<1)s+=P(`M0 -6 Q${f1(85*Math.cos(Math.PI*fl))} ${f1(-26-40*Math.sin(Math.PI*fl))} ${f1(170*Math.cos(Math.PI*fl))} ${f1(-8-50*Math.sin(Math.PI*fl))} L${f1(170*Math.cos(Math.PI*fl))} ${f1(126-50*Math.sin(Math.PI*fl))} Q${f1(85*Math.cos(Math.PI*fl))} 108 0 128Z`,'fill:#fffaf0;'+OL(1.6));
  return G(0,-40,_ap(lt,0,.4),0,s);};
n2cat('book · Libro',lt=>NX.book({},lt));
/* Cuadro en un museo · o:{} */
NX.painting=(o={},lt)=>{let s=Rc(-170,-200,340,260,'#c9a24a',6,OL(2.6))+Rc(-148,-178,296,216,'#fff',2,OL(1.6));
  s+=clipG(Rc(-148,-178,296,216,'#7fb2ff')+G(60,-120,1,0,sunS(30))+G(-80,38,1,0,humpS(220,120))+G(80,38,1,0,humpS(200,90))+Rc(-148,-10,296,48,'#3f9b4f'),Rc(-148,-178,296,216,'#000'));
  s+=G(0,100,1,0,Rc(-60,-14,120,28,'#fff',3,OL(1.6))+Tn(0,5,'Óleo · 1889',11,700),_ao(lt,.5,.3));
  s+=P('M-200 -260 L-150 -200 M200 -260 L150 -200',ST(K.ink,1.6))+P('M-120 -300 L-40 60 L40 60 L120 -300Z','fill:rgba(255,247,214,.18)');
  return G(0,60,_ap(lt,0,.4),0,s);};
n2cat('painting · Cuadro / museo',lt=>NX.painting({},lt));
/* Auriculares y notas (música) · o:{} */
NX.music=(o={},lt)=>{const b=1+.05*Math.max(0,Math.sin(lt*8));let s=G(0,0,b,0,P('M-90 20 Q-90 -110 0 -110 Q90 -110 90 20',ST(K.ink,14))+Rc(-120,0,50,90,'url(#gRP)',20,OL(2.4))+Rc(70,0,50,90,'url(#gRP)',20,OL(2.4)));
  for(let i=0;i<4;i++){const q=((lt*.6)+i/4)%1;s+=Tn(lerp(-60,140,hs(i))+_osc(lt,.6,10,i),lerp(40,-200,q),i%2?'♫':'♪',30,700,{fill:[K.pink,K.blue,K.purple,K.orange][i],x:`opacity:${f2(Math.sin(Math.PI*q))}`});}
  return G(0,40,_ap(lt,0,.4),0,s);};
n2cat('music · Música',lt=>NX.music({},lt));

/* ===== Recursos nuevos · noticia del segundo intercalar (17/10/2026) ===== */
/* Reloj digital que pasa por un segundo intercalar 23:59:60 · o:{seq:[...],step,hl (índice resaltado),label,badge ('+1 s'/'−1 s'),badgeC} */
NX.leapclock=(o={},lt)=>{const seq=o.seq||['23:59:58','23:59:59','23:59:60','00:00:00'],st=o.step||.7,hl=o.hl??2,i=Math.min(seq.length-1,Math.floor(Math.max(0,lt-.3)/st)),isH=i===hl;
  let s=Rc(-200,-80,400,160,'#141212',22,OL(2.6))+Rc(-186,-66,372,132,'#0b1410',14);
  const ft=lt-.3-i*st,bump=isH?1+.12*Math.max(0,1-ft/.25):1;
  s+=G(0,0,bump,0,Tn(0,26,seq[i],70,700,{fill:isH?'#ff4f7b':'#5dff9b',ls:.02}));
  if(isH)s+=Rc(-186,-66,372,132,'#ff2e63',14,'opacity:'+f2(.15*(1+Math.sin(lt*14))));
  s+=Rc(-150,80,24,18,'#141212',3)+Rc(126,80,24,18,'#141212',3);
  if(o.label)s+=G(0,-118,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.4,.3));
  if(isH)s+=G(150,-76,1,-8,Rc(-44,-16,88,32,o.badgeC||'url(#gRP)',16)+Tn(0,6,o.badge||'+1 s',16,800,{fill:'#fff'}),cl(ft*5));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('leapclock · Reloj con segundo intercalar 23:59:60',lt=>NX.leapclock({label:'31 dic 2016 · UTC'},lt%4));
/* Reloj atómico de laboratorio (átomo + cifras que corren) · o:{label} */
NX.atomclock=(o={},lt)=>{let s=Rc(-170,-150,340,300,'#e8e6ef',18,OL(2.6))+Rc(-150,-130,300,90,'#141212',10);
  const ms=Math.floor(lt*1000)%1000,sec=Math.floor(lt)%60;s+=Tn(0,-70,`12:00:${String(sec).padStart(2,'0')}.${String(ms).padStart(3,'0')}`,30,700,{fill:'#5dff9b'});
  const cx=-70,cy=50;for(let k=0;k<3;k++)s+=G(cx,cy,1,k*60+lt*40,El(0,0,62,22,'none',ST('#2a37d7',3)));
  s+=Ci(cx,cy,12,'url(#gRP)',OL(2));for(let k=0;k<3;k++){const a=lt*5+k*2.1,r=k*60+lt*40,ca=Math.cos(r*Math.PI/180),sa=Math.sin(r*Math.PI/180),ex=Math.cos(a)*62,ey=Math.sin(a)*22;s+=Ci(cx+ex*ca-ey*sa,cy+ex*sa+ey*ca,5,'#f6a81a',OL(1.4));}
  for(let r=0;r<3;r++)s+=Ci(60,10+r*36,9,hs(r+Math.floor(lt*3))<.6?'#3ff07a':'#1b5a3a',OL(1.4))+Rc(80,4+r*36,70,12,'#c9c6d6',4,OL(1.2));
  s+=Rc(-140,150,40,14,'#141212',3)+Rc(100,150,40,14,'#141212',3);
  if(o.label)s+=G(0,-186,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('atomclock · Reloj atómico',lt=>NX.atomclock({label:'Reloj atómico'},lt));
/* Deriva entre dos relojes (Tierra vs. atómico) con hueco que se abre y se corrige · o:{la,lb,gap,fix:[t...]} */
NX.drift=(o={},lt)=>{const la=o.la||'Reloj atómico',lb=o.lb||'Giro de la Tierra',max=o.gap||60,fixes=o.fix||[];
  let g=Math.min(max,lt*40);fixes.forEach(f=>{if(lt>f)g=Math.max(0,g-Math.min(max,(lt-f)*200));});const W2=380;
  let s=Rc(-W2/2,-70,W2,26,'#2a37d7',13,OL(2))+Tn(-W2/2,-82,la,13,700,{a:'start'});
  s+=Rc(-W2/2,10,W2-g,26,'#3f9b4f',13,OL(2))+Tn(-W2/2,-2,lb,13,700,{a:'start'});
  if(g>8)s+=P(`M${f1(W2/2-g)} 50 L${W2/2} 50`,ST(K.red,3))+P(`M${f1(W2/2-g)} 42 l0 16 M${W2/2} 42 l0 16`,ST(K.red,3))+Tn(W2/2-g/2,78,'desfase',12,700,{fill:K.red});
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('drift · Desfase entre dos relojes',lt=>NX.drift({},lt%3));

/* ===== Recursos nuevos · noticia del alta del Papa León XIV (17/10/2026) ===== */
/* Pulmones con sus 5 lóbulos (derecho 3, izquierdo 2; el derecho del paciente queda a la izquierda de la pantalla)
   o:{count (numera los lóbulos uno a uno), countAt, hl:'RU|RM|RL|LU|LL' (resalta), hlAt, remove (el lóbulo resaltado sale), removeAt, labels} */
NX.lungs=(o={},lt)=>{const L={RU:'M-70 -150 Q-128 -132 -146 -40 L-30 -64 L-30 -122 Q-40 -150 -70 -150Z',RM:'M-146 -40 L-30 -64 L-30 4 L-124 34 Q-152 0 -146 -40Z',RL:'M-124 34 L-30 4 L-30 108 Q-82 132 -140 120 Q-158 78 -124 34Z',
  LU:'M70 -150 Q128 -132 148 -12 L30 28 L30 -122 Q40 -150 70 -150Z',LL:'M148 -12 L30 28 L30 108 Q82 132 140 120 Q162 60 148 -12Z'};
  const cen={RU:[-82,-100],RM:[-92,-20],RL:[-90,70],LU:[86,-80],LL:[96,60]},ord=['RU','RM','RL','LU','LL'];
  let s=Rc(-11,-214,22,100,'#e8d6d0',8,OL(2.2))+[0,1,2,3,4].map(i=>P(`M-11 ${-200+i*18} l22 0`,ST('#bfa59c',2))).join('');
  s+=P('M0 -118 Q-10 -96 -40 -78 M0 -118 Q10 -96 40 -78',ST('#bfa59c',10))+P('M0 -118 Q-10 -96 -40 -78 M0 -118 Q10 -96 40 -78',ST('#e8d6d0',5));
  const ca=o.countAt??.5,ha=o.hlAt??.5,ra=o.removeAt??1.5;
  ord.forEach((k,i)=>{let tr='',op=1,fill='#f39bb0';
    if(o.hl===k&&lt>ha){const pu=.5+.5*Math.sin((lt-ha)*9);fill=`rgb(${Math.round(240-20*pu)},${Math.round(90-40*pu)},${Math.round(110-40*pu)})`;
      if(o.remove&&lt>ra){const q=EZ.io(sg(lt,ra,ra+.8));tr=`translate(${f1(-70*q)} ${f1(60*q)}) rotate(${f1(-14*q)} ${cen[k][0]} ${cen[k][1]})`;op=1-.55*q;}}
    s+=`<g transform="${tr}" opacity="${f2(op)}"><path d="${L[k]}" style="fill:${fill};${OL(2.6)}"/>`+P(L[k].replace(/Z$/,''),'fill:none;stroke:#ffffff;stroke-width:1;opacity:.35')+'</g>';
    if(o.remove&&o.hl===k&&lt>ra)s+=`<path d="${L[k]}" style="fill:none;stroke:#141212;stroke-width:2;stroke-dasharray:7 6;opacity:${f2(EZ.out(sg(lt,ra+.2,ra+.6)))}"/>`;
    if(o.count){const q=_ap(lt,ca+i*.32,.3);if(q>0)s+=G(cen[k][0],cen[k][1],q,0,Ci(0,0,17,'#141212')+Tn(0,7,String(i+1),19,800,{fill:'#fff'}));}});
  if(o.labels){s+=G(-90,168,1,0,pill('derecho · 3',{sz:12,w:700}),_ao(lt,.4,.3))+G(92,168,1,0,pill('izquierdo · 2',{sz:12,w:700}),_ao(lt,.55,.3));}
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('lungs · Pulmones y sus 5 lóbulos',lt=>NX.lungs({count:true,hl:'RL',hlAt:2.4,remove:true,removeAt:3.2,labels:true},lt%5));
/* Hospital (fachada con cruz, ventanas que se encienden y puerta) · o:{label,name,door (abre la puerta en ese instante)} */
NX.hospital=(o={},lt)=>{let s=Rc(-200,-170,400,250,'#f1ece3',6,OL(2.6))+Rc(-70,-230,140,64,'#f1ece3',6,OL(2.6));
  s+=Ci(0,-198,24,'#fff',OL(2))+Rc(-6,-214,12,32,K.red,2)+Rc(-16,-204,32,12,K.red,2);
  for(let r=0;r<4;r++)for(let c=0;c<8;c++){if(r===3&&(c===3||c===4))continue;const on=hs(r*11+c*3+Math.floor(lt*.8))<.55;s+=Rc(-180+c*46,-150+r*52,30,34,on?'#ffe08a':'#9fb3c8',3,OL(1.4));}
  const dq=o.door!=null?EZ.io(sg(lt,o.door,o.door+.5)):0;
  s+=Rc(-40,6,80,74,'#141212',3)+Rc(-38,8,38-34*dq,72,'#7fa6c9',2,OL(1.2))+Rc(0+34*dq,8,38-34*dq,72,'#7fa6c9',2,OL(1.2));
  if(o.name)s+=Rc(-110,-26,220,26,'#2a37d7',4)+Tn(0,-8,o.name,13,800,{fill:'#fff',ls:.06});
  if(o.label)s+=G(0,120,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('hospital · Hospital',lt=>NX.hospital({name:'POLICLÍNICO',label:'Roma',door:1.5},lt%4));

/* Ley en pausa: documento firmado al que cae encima un gran botón de pausa · o:{title,label,at} (at = segundo en que cae la pausa) */
NX.pausedlaw=(o={},lt)=>{const at=o.at??.9,q=EZ.back(sg(lt,at,at+.35)),gray=EZ.out(sg(lt,at+.2,at+.7));
  let doc=Rc(-130,-160,260,310,K.ink,8)+Rc(-136,-166,260,310,'#fbf8f2',8,OL(2.2))+Ts(-6,-118,o.title||'LEY',24)
   +[...Array(7)].map((_,i)=>Rc(-108,-92+i*20,i===6?120:216,6,'#d7d0c4',3)).join('')
   +P('M-100 100 C-86 70 -76 120 -60 92 C-48 70 -42 110 -26 96 C-16 86 -6 100 4 92',ST('#1b2596',3));
  let s=G(0,0,1,0,doc,1-.45*gray);
  if(q>0){s+=G(0,-10,q,0,Ci(0,0,86,'#141212',OL(2.6))+Rc(-30,-38,20,76,'#fff',5)+Rc(10,-38,20,76,'#fff',5));
    const r=86+40*sg(lt,at,at+.6);s+=Ci(0,-10,r,'none',`stroke:#141212;stroke-width:3;opacity:${f2(1-sg(lt,at,at+.6))}`);}
  if(o.label)s+=G(0,200,1,0,pill(o.label,{sz:16,w:800,fill:'url(#gRP)'}),_ao(lt,at+.5,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('pausedlaw · Ley en pausa',lt=>NX.pausedlaw({title:'LEY',label:'EN PAUSA'},lt%4));
/* Barriles de petróleo que viajan de un país a otro y pagan un peaje (arancel) al llegar a otro país
   · o:{from,to,mid,pct} — from vende, to compra, mid es el país que aplica el arancel */
NX.oiltoll=(o={},lt)=>{const from=o.from||'RUSIA',to=o.to||'COMPRADOR',mid=o.mid||'EE. UU.',pct=o.pct||'+100 %';
  let s=Rc(-230,-60,120,90,'#e2264a',10,OL(2.4))+Tn(-170,-8,from,14,800,{fill:'#fff'})
   +Rc(-60,-60,120,90,'#f6a81a',10,OL(2.4))+Tn(0,-8,to,13,800,{fill:'#141212'})
   +Rc(110,-60,120,90,'#2a37d7',10,OL(2.4))+Tn(170,-8,mid,14,800,{fill:'#fff'});
  const bar=(x,y,k=1)=>G(x,y,k,0,El(0,-22,16,5,'#1b1b22',OL(1.4))+Rc(-16,-22,32,40,'#2a2a33',0,OL(1.4))+El(0,18,16,5,'#2a2a33',OL(1.4))+P('M0 -10 Q8 0 0 8 Q-8 0 0 -10Z','fill:#f6a81a'));
  for(let i=0;i<3;i++){const k=EZ.io(sg(lt,.3+i*.25,1.3+i*.25));if(k>0&&k<1)s+=bar(lerp(-150,-30,k),70-Math.sin(k*Math.PI)*40);}
  const box=EZ.io(sg(lt,1.8,2.7));if(box>0)s+=G(lerp(20,140,box),60-Math.sin(box*Math.PI)*40,1,0,Rc(-24,-20,48,40,'#d9b483',4,OL(1.8)));
  if(lt>2.7){const g=EZ.back(sg(lt,2.7,3.0));s+=G(170,-110,g,-8,Rc(-62,-24,124,48,'#141212',12)+Tn(0,9,pct,22,800,{fill:'#fff'}));}
  s+=P('M-110 -15 L-60 -15 M60 -15 L110 -15',ST(K.ink,2.4,'stroke-dasharray:6 6'));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('oiltoll · Petróleo y arancel en cadena',lt=>NX.oiltoll({},lt%4.5));

/* Casa Blanca (fachada con pórtico de columnas y bandera de EE. UU.) · o:{label} */
NX.whitehouse=(o={},lt)=>{let s=Rc(-230,-90,460,170,'#f7f5ef',4,OL(2.4))+Rc(-236,-100,472,14,'#e9e4d8',2,OL(2));
  for(let i=0;i<8;i++){const x=-205+i*58;if(i===3||i===4)continue;s+=Rc(x,-66,26,38,'#bcd3f0',3,OL(1.4))+Rc(x,2,26,38,'#bcd3f0',3,OL(1.4))+P(`M${x} -47 L${x+26} -47 M${x} 21 L${x+26} 21`,ST('#7d97c2',1.2));}
  s+=P('M-80 -100 Q0 -150 80 -100Z','fill:#f7f5ef;'+OL(2.2))+Rc(-86,-100,172,10,'#e9e4d8',1,OL(1.6));
  for(let i=0;i<6;i++){const x=-70+i*28;s+=Rc(x-5,-90,10,166,'#fdfcf8',2,OL(1.4));}
  s+=Rc(-12,30,24,46,'#5a4632',3,OL(1.4))+Rc(-240,80,480,14,'#d9d2c2',2,OL(2));
  s+=P('M0 -132 L0 -200',ST(K.ink,3));let d='M0 -198';for(let x=0;x<=56;x+=7)d+=` L${x} ${f1(-198+Math.sin(x*.13-lt*5)*3)}`;for(let x=56;x>=0;x-=7)d+=` L${x} ${f1(-162+Math.sin(x*.13-lt*5)*3)}`;
  s+=P(d+'Z','fill:#e2264a;'+OL(1.4))+[0,1,2].map(i=>P(`M0 ${-192+i*12} L56 ${-192+i*12}`,ST('#fff',3.4))).join('')+Rc(0,-198,24,18,'#1b2596',1);
  if(o.label)s+=G(0,130,1,0,pill(o.label,{sz:14,w:800}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.45),0,s);};
n2cat('whitehouse · Casa Blanca',lt=>NX.whitehouse({label:'CASA BLANCA'},lt));


/* ===== Recursos nuevos · noticia de la estampida del Durga Puja en Calcuta (18/10/2026) ===== */
/* Pandal: pabellón temporal de fiesta (bambú y tela, arco de entrada, guirnaldas de luces) · o:{label,narrow (entrada estrecha 0-1),rain (0-1)} */
NX.pandal=(o={},lt)=>{const nw=o.narrow??0,dw=lerp(120,54,nw);let s='';
  s+=P('M-210 60 L-210 -120 Q-210 -230 0 -260 Q210 -230 210 -120 L210 60Z','fill:#f6a81a;'+OL(2.6));
  s+=P('M-180 60 L-180 -110 Q-180 -205 0 -228 Q180 -205 180 -110 L180 60Z','fill:#e2264a;'+OL(2));
  s+=P('M-150 60 L-150 -100 Q-150 -180 0 -198 Q150 -180 150 -100 L150 60Z','fill:#ffd23f;'+OL(2));
  for(let i=0;i<9;i++){const a=Math.PI*(.12+i*.095),x=Math.cos(a)*-150,y=-100-Math.sin(a)*92;s+=G(x,y,1,0,P('M0 -14 Q10 0 0 14 Q-10 0 0 -14Z','fill:#e2264a;'+OL(1.2)));}
  s+=P(`M${f1(-dw/2)} 60 L${f1(-dw/2)} -40 Q0 ${f1(-40-dw*.7)} ${f1(dw/2)} -40 L${f1(dw/2)} 60Z`,'fill:#3a2414;'+OL(2.2));
  s+=Ci(0,-130,26,'#fff7d6',OL(2))+[0,1,2,3,4,5,6,7].map(k=>{const a=k*Math.PI/4+lt*.6;return P(`M${f1(Math.cos(a)*32)} ${f1(-130+Math.sin(a)*32)} L${f1(Math.cos(a)*42)} ${f1(-130+Math.sin(a)*42)}`,ST('#f6a81a',3));}).join('');
  s+=Rc(-232,-140,10,200,'#c9a46a',3,OL(1.6))+Rc(222,-140,10,200,'#c9a46a',3,OL(1.6));
  let d='M-226 -140';for(let x=-226;x<=226;x+=28)d+=` Q${x+14} -118 ${x+28} -140`;s+=P(d,ST(K.ink,1.6));
  for(let x=-212;x<=212;x+=28){const on=hs(x*.37+Math.floor(lt*4))>.35;s+=Ci(x,-128,5,on?'#fff36b':'#9a8f5a',OL(1));}
  const rn=o.rain||0;if(rn>0)for(let i=0;i<34;i++){const q=((lt*1.8)+hs(i*1.9))%1,x=hs(i+3)*520-260,y=-300+q*380;s+=P(`M${f1(x)} ${f1(y)} l-5 18`,ST('#5d7fb8',2.6,`opacity:${f2(rn*(1-q)*.85)}`));}
  if(o.label)s+=G(0,104,1,0,pill(o.label,{sz:14,w:800}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('pandal · Pabellón de fiesta (pandal)',lt=>NX.pandal({label:'pandal',rain:lt>1.5?sg(lt,1.5,2.2):0,narrow:sg(lt,2.5,3.2)},lt%4.5));
/* Densidad: 1 metro cuadrado visto desde arriba que se llena de personas (puntos) · o:{steps:[1,2,4,6],every (s por paso),wave (0-1, se mueven a oleadas),label} */
NX.density=(o={},lt)=>{const steps=o.steps||[1,2,4,6],ev=o.every||.8,k=Math.min(steps.length-1,Math.floor(lt/ev)),n=steps[k],wv=o.wave||0;
  const S=220;let s=Rc(-S/2,-S/2,S,S,'#ecebf2',6,OL(2.6))+P(`M${-S/2} ${S/2+22} L${S/2} ${S/2+22} M${-S/2} ${S/2+14} l0 16 M${S/2} ${S/2+14} l0 16`,ST(K.ink,2))+Tn(0,S/2+46,'1 metro',13,700);
  const pos=[[0,0],[-50,40],[50,-40],[-55,-55],[55,55],[0,-70],[0,70],[-75,10],[75,-10]];
  for(let i=0;i<n;i++){const [x,y]=pos[i],ph=i*1.3,dx=wv*Math.sin(lt*4-x*.02)*20,dy=wv*Math.cos(lt*3-y*.02)*8,ti=ev*steps.findIndex(v=>v>i),q=EZ.back(sg(lt,ti,ti+.3));
    s+=G(x+dx,y+dy,q,0,Ci(0,0,26,['#2a37d7','#e73568','#8005f0','#f6a81a','#3f9b4f','#f34841'][i%6],OL(2))+Ci(0,0,10,'rgba(255,255,255,.35)'));}
  const col=n>=5?K.red:n>=4?'#f6a81a':'#3f9b4f';
  s+=G(0,-S/2-46,1,0,Rc(-92,-26,184,52,col,26,OL(2))+Tn(-30,10,String(n),28,800,{fill:'#fff'})+Tn(28,6,o.label||'por m²',13,700,{fill:'#fff'}));
  if(wv>0)s+=G(S/2+34,0,1,0,P('M-10 -30 Q10 -15 -10 0 Q10 15 -10 30',ST(K.red,4))+P('M-20 22 L-10 30 L-2 20',ST(K.red,4)),wv);
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('density · Personas por metro cuadrado',lt=>NX.density({steps:[1,2,4,6],every:.8,wave:lt>3.4?sg(lt,3.4,3.8):0},lt%5.5));
/* Embudo visto desde arriba: gente (puntos) que avanza hacia una entrada estrecha y se atasca · o:{jam (instante del atasco),fall (0-1 algunos caen),label} */
NX.funnel=(o={},lt)=>{const ja=o.jam??1.5,jq=EZ.io(sg(lt,ja,ja+.8)),fl=o.fall||0;let s='';
  s+=P('M-240 -150 L-40 -20 L-40 150 M240 -150 L40 -20 L40 150',ST(K.ink,5));
  s+=Rc(-40,110,80,40,'#3a2414',2)+Tn(0,170,'entrada',12,700);
  for(let i=0;i<46;i++){const r=hs(i*2.3),c=hs(i*5.1),flow=((lt*.35)+r)%1,adv=lerp(flow,.55+.45*r,jq);
    const y=lerp(-230,90,adv),half=y<-20?lerp(240,40,(y+150)/130):38,x=(c-.5)*2*Math.max(28,Math.min(230,half-14))*(y<-150?1:1);
    const jit=jq*Math.sin(lt*7+i)*3;const down=fl>0&&i%6===0&&adv>.8;
    s+=down?El(x,y+6,18,9,'#9a9aa8',OL(1.4)+`;opacity:${f2(.4+.6*fl)}`):Ci(x+jit,y,11,['#2a37d7','#e73568','#8005f0','#f6a81a','#3f9b4f'][i%5],OL(1.4));}
  if(jq>0){s+=G(-120,10,1,25,P('M-26 0 L18 0 M6 -12 L18 0 L6 12',ST(K.red,5)),jq)+G(120,10,1,155,P('M-26 0 L18 0 M6 -12 L18 0 L6 12',ST(K.red,5)),jq)+G(0,-120,1,90,P('M-26 0 L18 0 M6 -12 L18 0 L6 12',ST(K.red,5)),jq);}
  if(o.label)s+=G(0,-262,1,0,pill(o.label,{sz:14,w:800,fill:'url(#gRP)'}),_ao(lt,ja,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('funnel · Multitud que se atasca en una entrada',lt=>NX.funnel({jam:1.4,fall:sg(lt,2.6,3.2),label:'atasco'},lt%4.5));
/* Presión sobre el pecho: torso de perfil frontal con pulmones que no pueden hincharse; flechas que aprietan; guard = brazos delante del pecho · o:{press,guard,label} */
NX.chestpress=(o={},lt)=>{const pa=o.press??.8,pq=EZ.io(sg(lt,pa,pa+.6)),gq=o.guard!=null?EZ.back(sg(lt,o.guard,o.guard+.4)):0;
  const br=1+.08*Math.sin(lt*3.2)*(1-pq*.85),sq=1-pq*.16+gq*.1;let s='';
  s+=P('M-120 140 L-120 -40 Q-120 -110 -60 -120 L60 -120 Q120 -110 120 -40 L120 140Z','fill:#ecd6c4;'+OL(2.6));
  s+=Ci(0,-170,44,'#ecd6c4',OL(2.6))+Rc(-18,-132,36,18,'#ecd6c4',4);
  s+=`<g transform="translate(0 10) scale(${f2(sq*br)} ${f2(br)})">`+P('M-14 -80 Q-80 -80 -88 10 Q-90 80 -30 86 Q-12 60 -14 -80Z','fill:#f39bb0;'+OL(2.2))+P('M14 -80 Q80 -80 88 10 Q90 80 30 86 Q12 60 14 -80Z','fill:#f39bb0;'+OL(2.2))+'</g>';
  if(pq>0){const off=lerp(90,0,pq);s+=G(-180-off*.2,10,1,0,P('M-40 0 L20 0 M4 -16 L20 0 L4 16',ST(K.red,7)),pq)+G(180+off*.2,10,1,180,P('M-40 0 L20 0 M4 -16 L20 0 L4 16',ST(K.red,7)),pq);}
  if(gq>0)s+=G(0,-10,gq,0,Rc(-100,-14,200,28,'#2a37d7',14,OL(2.2))+Rc(-100,16,200,28,'#2a37d7',14,OL(2.2))+Ci(-104,1,18,'#ecd6c4',OL(2))+Ci(104,1,18,'#ecd6c4',OL(2)));
  if(o.label)s+=G(0,190,1,0,pill(o.label,{sz:14,w:800,fill:gq>0?'#2a37d7':K.red}),_ao(lt,gq>0?o.guard+.2:pa+.3,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('chestpress · Presión sobre el pecho',lt=>NX.chestpress({press:.8,label:'no deja respirar'},lt%3.5));

/* ===== Recursos nuevos · noticia del ataque masivo con drones sobre Rusia (18/10/2026) ===== */
/* Enjambre de drones: cielo nocturno que se llena de drones (puntos con hélices) y contador · o:{n (drones dibujados),count (número del contador),label,grow (s hasta llenarse),sky} */
NX.droneswarm=(o={},lt)=>{const W=480,H=o.h||420,n=o.n||70,gr=o.grow||2.2,q=EZ.out(sg(lt,0,gr));let s='';
  s+=Rc(-W/2,-H,W,H,lgrad([[0,'#0d1130'],[1,'#3a3f6a']],0,0,0,1),12);
  for(let i=0;i<22;i++)s+=Ci(-W/2+10+hs(i*1.7)*(W-20),-H+10+hs(i*2.9)*H*.55,1.3,'#fff',`opacity:${f2(.4+.4*hs(i+Math.floor(lt*2)))}`);
  const vis=Math.floor(n*q);
  for(let i=0;i<vis;i++){const bx=-W/2+20+hs(i*3.1)*(W-40),by=-H+30+hs(i*7.7)*(H-120),z=1.2+hs(i*1.3)*1.3,dx=_osc(lt,.25+hs(i)*.2,10,i),dy=_osc(lt,.4,4,i*2),r=Math.abs(Math.cos(lt*40+i));
    const a=EZ.out(sg(lt,i/n*gr,i/n*gr+.3));
    s+=G(bx+dx-(1-a)*60,by+dy+(1-a)*30,z,0,Rc(-9,-3,18,6,'#1b1d26',2)+P('M-9 -1 L-16 -5 M9 -1 L16 -5',ST('#1b1d26',2))+El(-16,-6,6*r+2,1.4,'rgba(255,255,255,.55)')+El(16,-6,6*r+2,1.4,'rgba(255,255,255,.55)')+Ci(6,0,1.6,Math.floor(lt*3+i)%2?'#ff4d4d':'#7a1f1f'),a);}
  s+=G(0,0,1,0,_skyline(W,{T:lt,c:'#1e2236',seed:7}));
  let out=clipG(s,Rc(-W/2,-H,W,H,'#000',12))+Rc(-W/2,-H,W,H,'none',12,OL(2.4));
  if(o.count){const v=Math.round(o.count*EZ.out4(sg(lt,.2,gr)));out+=G(0,-H+56,_ap(lt,.1,.35),0,Rc(-110,-34,220,68,'#fff',14,OL(2.4))+Tn(0,14,String(v).replace(/\B(?=(\d{3})+(?!\d))/g,'.'),40,800,{fill:K.red}));}
  if(o.label)out+=G(0,36,1,0,pill(o.label,{sz:14,w:800}),_ao(lt,.5,.3));
  return G(0,0,_ao(lt,0,.3),0,out);};
n2cat('droneswarm · Enjambre de drones con contador',lt=>G(0,200,1,0,NX.droneswarm({count:1015,label:'drones en una noche'},lt%5)));
/* Terminal petrolera junto al agua: tanques cilíndricos, tuberías y un petrolero; burn = nº de tanques que arden (desde fireAt) · o:{tanks,burn,fireAt,ship,label} */
NX.oilterminal=(o={},lt)=>{const nt=o.tanks||5,nb=o.burn||0,fa=o.fireAt??.8;let s='';
  s+=Rc(-260,30,520,70,'url(#gWA)')+P(`M-260 30 ${[...Array(13)].map((_,i)=>`Q${-250+i*40} ${f1(26+_osc(lt,.8,2,i))} ${-240+i*40} 30`).join(' ')}`,ST('#a7b0ff',2.4));
  if(o.ship!==false){const sx=lerp(170,150,EZ.io(sg(lt,0,3)));s+=G(sx,40,1,0,P('M-70 -8 L70 -8 L58 12 L-62 12Z','fill:#2a2f45;'+OL(2))+Rc(36,-26,24,18,'#fff',2,OL(1.4))+Rc(-50,-14,80,6,K.red,1));}
  s+=Rc(-250,0,420,30,'#9aa0a8',2,OL(2.2));
  s+=P('M-240 -6 L160 -6',ST('#5b5f66',5))+P('M120 -6 L120 26 L150 26',ST('#5b5f66',4));
  const sp=380/nt;
  for(let i=0;i<nt;i++){const x=-215+sp*i+sp/2-sp/2,big=i%2===0,hw=big?32:26,h=big?90:70,ap=_ap(lt,i*.08,.35);
    let t=El(0,-h,hw,8,'#e8e9ee',OL(2))+Rc(-hw,-h,hw*2,h,'#d6dbe2',0,OL(2.2))+El(0,0,hw,8,'#d6dbe2',OL(2))+P(`M${-hw} ${-h*.45} Q0 ${-h*.45+8} ${hw} ${-h*.45}`,ST('#9aa0a8',2))+Rc(-hw,-h*.45-4,hw*2,8,'#2a37d7');
    const burning=i<nb&&lt>fa+i*.35;
    if(burning){const fq=EZ.out(sg(lt,fa+i*.35,fa+i*.35+.6));t+=G(0,-h,fq*.55,0,NX.fire({n:3,w:hw*2.4},lt+i));
      for(let k=0;k<5;k++){const qq=((lt*.35)+k/5+i*.13)%1;t+=Ci(_osc(lt,.3,10,k)+qq*40,-h-90-qq*170,14+qq*30,'#3b3838',`opacity:${f2(.55*fq*Math.sin(Math.PI*qq))}`);}}
    s+=G(x,0,ap,0,t);}
  if(o.label)s+=G(-40,80,1,0,pill(o.label,{sz:14,w:800,fill:K.ink}),_ao(lt,.5,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('oilterminal · Terminal petrolera que arde',lt=>G(0,60,1,0,NX.oilterminal({burn:2,fireAt:1,label:'terminal petrolera'},lt%5)));
/* Almacén logístico (compras por internet): nave con persianas, cajas que salen en cinta; fire = instante en que empieza a arder · o:{fire,label,brand} */
NX.warehouse=(o={},lt)=>{const fi=o.fire;let s='';
  s+=P('M-210 0 L-210 -150 L-140 -190 L140 -190 L210 -150 L210 0Z','fill:#e2e4ea;'+OL(2.6));
  s+=P('M-210 -150 L210 -150',ST('#9aa0a8',3));
  for(let i=0;i<3;i++){const x=-150+i*110;s+=Rc(x-40,-110,80,110,'#9aa0a8',3,OL(2));for(let k=1;k<7;k++)s+=P(`M${x-40} ${-110+k*15} L${x+40} ${-110+k*15}`,ST('#7a8088',1.4));}
  s+=Rc(-90,-178,180,26,o.brandC||'#2a37d7',6,OL(1.8))+Tn(0,-160,o.brand||'ALMACÉN',13,800,{fill:'#fff'});
  s+=Rc(-240,-4,480,8,'#3b3f46',3);
  for(let i=0;i<6;i++){const q=((lt*.25)+i/6)%1;const x=lerp(-230,230,q);if(fi==null||lt<fi)s+=G(x,-18,1,0,Rc(-14,-14,28,28,'#c9a46a',2,OL(1.4))+P('M-14 -4 L14 -4',ST('#a07c45',2)));}
  if(fi!=null&&lt>fi){const fq=EZ.out(sg(lt,fi,fi+.8));s+=G(40,-190,fq*.9,0,NX.fire({n:4,w:260},lt));
    for(let k=0;k<6;k++){const qq=((lt*.3)+k/6)%1;s+=Ci(20+qq*80+_osc(lt,.3,8,k),-300-qq*200,18+qq*40,'#3b3838',`opacity:${f2(.5*fq*Math.sin(Math.PI*qq))}`);}}
  if(o.label)s+=G(0,40,1,0,pill(o.label,{sz:14,w:800}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('warehouse · Almacén logístico (que arde)',lt=>G(0,120,1,0,NX.warehouse({fire:1.5,brand:'OZON',label:'centro logístico'},lt%4.5)));
/* Del petróleo a la guerra: barril → monedas → presupuesto militar (flujo de dinero explicativo) · o:{step (s entre pasos),cut (0-1: el flujo se corta)} */
NX.warfunds=(o={},lt)=>{const st=o.step||.9,cut=o.cut||0;let s='';
  const nodes=[[-170,'#2a2a33','petróleo'],[0,'#f6a81a','dinero'],[170,'#6f7a4f','guerra']];
  nodes.forEach(([x,c,lb],i)=>{const a=_ap(lt,i*st,.35);let ic='';
    if(i===0)ic=El(0,-40,32,9,'#1b1b22',OL(2))+Rc(-32,-40,64,74,'#2a2a33',0,OL(2))+El(0,34,32,9,'#2a2a33',OL(2))+P('M0 -16 Q12 0 0 12 Q-12 0 0 -16Z','fill:#f6a81a');
    if(i===1)ic=[0,1,2].map(k=>El(0,20-k*14,34,10,'#ffd23f',OL(2))).join('')+Tn(0,-12,'€',16,800,{fill:'#a06b00'});
    if(i===2)ic=Rc(-44,0,88,26,'#3b4029',10,OL(2))+Rc(-30,-22,52,22,'#6f7a4f',6,OL(2))+Rc(14,-16,44,8,'#5d6842',3,OL(1.6));
    s+=G(x,0,a,0,Ci(0,0,64,'#fff',OL(2.4))+ic+G(0,96,1,0,pill(lb,{sz:13,w:800})));});
  for(let i=0;i<2;i++){const x0=-170+i*170+70,q=sg(lt,(i+.6)*st,(i+.6)*st+.4);if(q>0){s+=P(`M${x0} 0 L${f1(x0+30*q)} 0`,ST(K.ink,5))+G(x0+30*q,0,q,0,P('M-8 -10 L4 0 L-8 10',ST(K.ink,5)));
      if(i===0||cut===0)for(let k=0;k<3;k++){const m=((lt*.9)+k/3)%1;s+=Ci(x0-10+m*50,-26,5,'#ffd23f',OL(1)+`;opacity:${f2(Math.sin(Math.PI*m)*(i===0?1-cut*.8:1))}`);}}}
  if(cut>0)s+=G(-85,0,EZ.back(cut),0,P('M-22 -22 L22 22 M22 -22 L-22 22',ST(K.red,8)));
  return G(0,0,_ao(lt,0,.3),0,s);};
n2cat('warfunds · Del petróleo al dinero de la guerra',lt=>NX.warfunds({cut:sg(lt%5,3.2,3.6)},lt%5));

/* Base militar de entrenamiento con incendio forestal que avanza empujado por el viento y cruza la valla · o:{spread (s hasta cruzar), wind (flechas), label} */
NX.basefire=(o={},lt)=>{const sp=o.spread||4,q=EZ.io(sg(lt,.3,.3+sp));let s='';
  s+=Rc(-260,0,520,60,'#b9a46a',0,OL(2))+P('M-260 0 L260 0',ST(K.ink,2.4));
  for(let i=0;i<9;i++)s+=P(`M${-250+i*60} 18 l8 -8 l8 8`,ST('#8f7c45',2));
  /* valla con postes */
  s+=P('M150 0 L150 -46 M175 0 L175 -46 M200 0 L200 -46 M225 0 L225 -46 M250 0 L250 -46',ST(K.ink,3))+P('M140 -40 L260 -40 M140 -24 L260 -24',ST('#6b6f78',2));
  /* barracones, tiendas y vehículos */
  s+=Rc(-240,-58,90,58,'#d7cdb0',2,OL(2))+P('M-246 -58 L-195 -80 L-144 -58Z','fill:#7c6e48;'+OL(2))+Rc(-206,-30,18,30,'#5a4a2a');
  [[-110,0],[-55,0]].forEach(([x])=>s+=G(x,0,1,0,P('M-30 0 L0 -40 L30 0Z','fill:#6f7a4f;'+OL(2))+P('M-6 0 L0 -14 L6 0Z','fill:#2f3420')));
  s+=G(20,0,.9,0,Rc(-44,-26,88,26,'#5d6842',8,OL(2))+Rc(-26,-44,48,20,'#6f7a4f',5,OL(2))+Rc(16,-38,46,7,'#4a5236',3,OL(1.4))+[-28,-8,12,32].map(x=>Ci(x,0,8,'#2b2b2b',OL(1.4))).join(''));
  s+=G(95,0,.75,0,Rc(-30,-40,60,40,'#6f7a4f',4,OL(2))+Rc(30,-28,24,28,'#5d6842',4,OL(2))+Ci(-14,0,9,'#2b2b2b',OL(1.4))+Ci(36,0,9,'#2b2b2b',OL(1.4)));
  /* frente de fuego: avanza de izquierda a derecha */
  const fx=lerp(-300,280,q),fw=Math.max(40,fx+260);
  if(lt>.3){s+=G((fx-260)/2-10,0,.42+.18*q,0,NX.fire({n:Math.max(3,Math.round(fw/45)),w:fw},lt));
    for(let k=0;k<8;k++){const qq=((lt*.3)+k/8)%1;s+=Ci(-240+hs(k)*Math.max(20,fw)+qq*120,-120-qq*220,16+qq*40,'#4a4545',`opacity:${f2(.55*Math.sin(Math.PI*qq)*Math.min(1,q*3))}`);}}
  /* viento */
  if(o.wind!==false)for(let k=0;k<3;k++){const m=((lt*.8)+k/3)%1;s+=G(-200+m*400,-230+k*36,1,0,P('M-40 0 Q-10 -10 20 0 M8 -10 L24 0 L8 10',ST('#ffffff',5)),f2(Math.sin(Math.PI*m)));}
  if(o.label)s+=G(0,70,1,0,pill(o.label,{sz:14,w:800}),_ao(lt,.4,.3));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('basefire · Incendio en una base militar (viento)',lt=>G(0,80,1,0,NX.basefire({label:'zona de entrenamiento'},lt%6)));
/* Bandera que baja a media asta (luto) · o:{colors (bandas verticales), leaf (hoja de arce central, Canadá), at (s en que empieza a bajar)} */
NX.halfmast=(o={},lt)=>{const cs=o.colors||[K.red,'#ffffff',K.red],at=o.at??.6,q=EZ.io(sg(lt,at,at+2.2)),fy=lerp(-300,-170,q),w=150,h=90;let s='';
  s+=P('M0 60 L0 -310',ST('#8b8f98',7))+Ci(0,-314,7,'#c9a04a',OL(1.4))+Rc(-30,52,60,14,'#6b6f78',3,OL(2));
  const wv=k=>_osc(lt,.6,4,k);let fl='';
  cs.forEach((c,i)=>{const x0=4+i*w/cs.length,x1=4+(i+1)*w/cs.length;fl+=P(`M${f1(x0)} ${f1(fy+wv(i))} L${f1(x1)} ${f1(fy+wv(i+1))} L${f1(x1)} ${f1(fy+h+wv(i+1))} L${f1(x0)} ${f1(fy+h+wv(i))}Z`,'fill:'+c);});
  if(o.leaf!==false){const cx=4+w/2,cy=fy+h/2+wv(1.5);fl+=G(cx,cy,.9,0,P('M0 -26 L6 -14 L14 -18 L11 -4 L22 -8 L18 2 L24 6 L8 10 L10 18 L2 14 L2 26 L-2 26 L-2 14 L-10 18 L-8 10 L-24 6 L-18 2 L-22 -8 L-11 -4 L-14 -18 L-6 -14Z','fill:'+K.red));}
  s+=fl+P(`M4 ${f1(fy+wv(0))} L${4+w} ${f1(fy+wv(3))} L${4+w} ${f1(fy+h+wv(3))} L4 ${f1(fy+h+wv(0))}Z`,'fill:none;'+OL(2));
  if(o.label)s+=G(0,100,1,0,pill(o.label,{sz:14,w:800}),_ao(lt,at+2.2,.3));
  return G(0,0,_ao(lt,0,.3),0,s);};
n2cat('halfmast · Bandera a media asta',lt=>G(0,140,1,0,NX.halfmast({label:'a media asta'},lt%5)));

/* ---------------- dana Adam · alerta roja en Valencia, Alicante y Baleares (18/10/2026) ---------------- */
/* Móvil con ES-Alert (alerta de Protección Civil) a pantalla completa, vibra y suena · o:{title,sub,level ('ROJO'), buzz (0-1), small (sin texto largo)} */
function esAlertS(o={}){const T=o.T||0,bz=o.buzz??1,sh=bz>0?Math.sin(T*70)*3*bz:0;let s='';
  if(bz>0)for(let i=0;i<3;i++){const q=((T*1.6)+i/3)%1;s+=Rc(-100-q*40,-185-q*40,200+q*80,370+q*80,'none',30+q*20,`stroke:${K.red};stroke-width:3;opacity:${f2((1-q)*.55*bz)}`);}
  let ph=Rc(-95,-180,190,360,K.ink,28)+Rc(-85,-170,170,340,'#c81e2c',20)+Rc(-30,-165,60,12,K.ink,6);
  const fl=bz>0&&Math.floor(T*4)%2?.16:0;ph+=Rc(-85,-170,170,340,'#ffffff',20,`opacity:${f2(fl)}`);
  ph+=Rc(-85,-150,170,30,'rgba(0,0,0,.25)')+Tn(0,-130,'ES-ALERT · Protección Civil',10.5,800,{fill:'#fff',ls:.03});
  /* icono: nube con lluvia */
  const cl0=P('M-34 -6 Q-36 -30 -14 -30 Q-8 -48 12 -44 Q30 -42 32 -24 Q48 -22 46 -6Z','fill:#fff;'+OL(3));
  let dr='';for(let i=0;i<4;i++){const q=((T*2.2)+i/4)%1;dr+=P(`M${-24+i*16} ${f1(4+q*22)} l-4 10`,ST('#fff',4,`opacity:${f2(1-q)}`));}
  ph+=G(0,-78,1,0,cl0+dr);
  ph+=Tn(0,-18,o.title||'ALERTA ROJA',20,800,{fill:'#fff',ls:.05});
  ph+=Tn(0,4,o.sub||'Peligro extraordinario',12,700,{fill:'#ffe1e4'})+Tn(0,20,o.sub2||'por lluvias',12,700,{fill:'#ffe1e4'});
  ph+=Rc(-70,40,140,56,'#fff',12)+Tn(0,60,'NIVEL',9.5,800,{fill:'#777',ls:.1})+Tn(0,86,o.level||'ROJO',24,800,{fill:'#c81e2c'});
  ph+=Rc(-72,110,144,34,'rgba(255,255,255,.18)',17)+Tn(0,132,o.tip||'Evita desplazarte',12,700,{fill:'#fff'});
  return s+G(sh,0,1,sh*.6,ph);}
NX.esalert=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,esAlertS(Object.assign({T:lt},o)));
n2cat('esalert · Móvil con ES-Alert (alerta roja por lluvias)',lt=>NX.esalert({buzz:1-sg(lt%4,3,3.4)},lt%4));

/* Mapa de avisos de la Aemet por provincias (península + Baleares) · o:{red:[nombres], orange:[…], yellow:[…], pins:[['Valencia','texto'],…], at (s en que se colorea), w (ancho, por defecto 460), lx (desplaza etiquetas), over:(pt,lt)=>svg extra}
   Nombres de provincia como en es-atlas (se aceptan trozos: 'Valencia', 'Alicante', 'Balears'). Puntos con nombre en GEOJ.espt (ver geo_es.mjs). */
NX.spainalert=(o={},lt)=>{const g=window.GEOJ,at=o.at??.4,q=EZ.io(sg(lt,at,at+.8)),pulse=.75+.25*Math.sin(lt*6);const has=(arr,n)=>(arr||[]).some(k=>n.includes(k));
  let m=Rc(-40,-30,540,432,'#bcd3f0',14);
  g.esprov.forEach(f=>{let c='#fbfbfb';if(has(o.red,f.n))c=mixc('#fbfbfb','#e0283a',q*pulse);else if(has(o.orange,f.n))c=mixc('#fbfbfb','#f76e19',q);else if(has(o.yellow,f.n))c=mixc('#fbfbfb','#f6c21a',q);
    m+=P(f.d,`fill:${c};stroke:${K.ink};stroke-width:1.1;stroke-linejoin:round`);});
  if(o.over)m+=o.over(g.espt,lt); /* capa extra en coordenadas del mapa (flechas, rutas) */
  let pins='';(o.pins||[]).forEach(([k,lab],i)=>{const pt=g.espt[k];if(!pt)return;const a=at+.6+i*.25,qq=sg(lt,a,a+.35);if(qq<=0)return;
    pins+=G(pt[0],pt[1],1,0,_pulse(lt-a,12,K.red,2,1.3)+Ci(0,0,5,K.ink,OL(2,'#fff')))+(lab?G(pt[0]+(o.lx||0),pt[1]-22,1,0,pill(lab,{sz:12,w:800}),_ao(lt,a+.2,.3)):'');});
  const leg=[['ROJO','#e0283a'],['NARANJA','#f76e19'],['AMARILLO','#f6c21a']].map(([t,c],i)=>G(20+i*104,382,1,0,Rc(0,-10,18,18,c,4,OL(1.6))+Tn(24,4,t,11,800,{a:'start'}))).join('');
  const W=o.w||460,k=W/460;
  return G(-230*k,-190*k,k,0,G(0,0,1,0,m+pins)+G(0,0,1,0,leg,_ao(lt,at+.8,.3))+Rc(-40,-30,540,432,'none',14,OL(2.4)));};
n2cat('spainalert · Mapa de avisos de la Aemet por provincias',lt=>G(0,0,.9,0,NX.spainalert({red:['Valencia','Alicante'],orange:['Murcia','Almería','Balears'],yellow:['Barcelona','Tarragona'],pins:[['Valencia','aviso rojo']]},lt%5)));

/* Semáforo de avisos de la Aemet: 4 niveles, el indicador sube hasta el nivel indicado · o:{level (0-3), at, dur} */
NX.alertlevels=(o={},lt)=>{const L=[['VERDE','sin riesgo','#3f9b4f'],['AMARILLO','riesgo','#f6c21a'],['NARANJA','riesgo importante','#f76e19'],['ROJO','peligro extraordinario','#e0283a']];
  const lv=o.level??3,at=o.at??.3,dur=o.dur||1.6,pos=lv*EZ.io(sg(lt,at,at+dur));let s='';
  L.forEach(([n,d,c],i)=>{const y=150-i*100,on=pos>=i-.05,big=i===lv&&pos>lv-.05?1+.06*Math.sin(lt*7):1;
    s+=G(-80,y,_ap(lt,i*.08,.3)*big,0,Rc(-70,-42,140,84,on?c:'#e6e6e6',14,OL(2.4))+Tn(0,8,n,i===3?22:18,800,{fill:on?'#fff':'#9a9a9a',ls:.06}));
    s+=G(30,y,1,0,Tn(0,6,d,15,700,{a:'start',fill:on?K.ink:'#9a9a9a'}),_ao(lt,i*.08+.2,.3));});
  const ay=150-pos*100;s+=G(-172,ay,1,0,P('M-18 -16 L10 0 L-18 16Z','fill:'+K.ink));
  return s;};
n2cat('alertlevels · Niveles de aviso de la Aemet',lt=>G(0,40,1,0,NX.alertlevels({level:3},lt%4)));

/* Comparar cantidades de lluvia con depósitos de cristal que se llenan (p. ej. «un día en Pego» frente a «un año en Madrid») · o:{bars:[{lab,v,c,txt}], max, at, step, H (alto), gap, line (índice de la barra cuyo nivel se marca con línea discontinua)} */
NX.yearrain=(o={},lt)=>{const B=o.bars||[{lab:'un año',v:420},{lab:'un día',v:640,c:'#e0283a'}],mx=o.max||Math.max(...B.map(b=>b.v))*1.1,H=o.H||300,gap=o.gap||150,at=o.at??.3,st=o.step??.5,n=B.length;let s='';
  B.forEach((b,i)=>{const x=(i-(n-1)/2)*gap,a=at+i*st,q=EZ.io(sg(lt,a,a+1.4)),lv=H*b.v/mx*q,c=b.c||'#3f6fd8',W=96;
    let g=shadowE(0,6,W*.6,.14)+Rc(-W/2,-H,W,H,'rgba(255,255,255,.55)',8,OL(2.2));
    if(lv>0){let top=`M${-W/2+3} ${f1(-lv)}`;for(let k=0;k<=8;k++)top+=` L${f1(-W/2+3+k*(W-6)/8)} ${f1(-lv+Math.sin(k*1.4+lt*4)*2.2)}`;
      g+=Rc(-W/2+3,-lv,W-6,lv,c,6,'opacity:.8')+P(top,ST('#e4ecff',2.4));
      for(let k=0;k<4;k++){const qq=((lt*.7)+k/4+i*.13)%1;g+=Ci(-W/4+k*W/6,-qq*lv,3,'#fff',`opacity:${f2(.5*(1-qq))}`);}}
    for(let k=1;k<6;k++)g+=P(`M${W/2} ${f1(-H*k/6)} l-10 0`,ST(K.ink,1.4));
    g+=G(0,30,1,0,pill(b.lab,{sz:13,w:800,fill:b.c?b.c:K.ink}),_ao(lt,a,.3));
    if(b.txt)g+=G(0,-H-22,1,0,Tn(0,0,b.txt,22,800,{fill:b.c||K.ink}),_ao(lt,a+1.2,.3));
    s+=G(x,0,_ap(lt,a-.15,.35),0,g);});
  if(o.line!=null){const b=B[o.line],x0=(o.line-(n-1)/2)*gap,y=-H*b.v/mx,qq=sg(lt,at+o.line*st+1.4,at+o.line*st+2);
    if(qq>0)s+=P(`M${x0-60} ${f1(y)} L${f1(x0-60+qq*((n-1)/2*gap+60-x0+60))} ${f1(y)}`,ST(K.ink,2.2,'stroke-dasharray:8 6'));}
  return s;};
n2cat('yearrain · Depósitos de lluvia para comparar (un día frente a un año)',lt=>G(0,170,1,0,NX.yearrain({bars:[{lab:'un año en Madrid',v:420},{lab:'un año en Valencia',v:450},{lab:'un día en Pego',v:638,c:'#e0283a',txt:'638 l/m²'}],max:700,line:1},lt%6)));

/* ===== Noticia del ébola en Nigeria (22/10/2026) ===== */
/* Virus del ébola (filovirus): filamento largo enroscado en forma de cayado con espículas, que se retuerce · o:{s (grosor), label, c} */
NX.ebolavirus=(o={},lt)=>{const k=o.s||1,c=o.c||'#c41f4e',wob=Math.sin(lt*2.2)*6;
  const d=`M-150 ${f1(70+wob)} C-90 ${f1(40-wob)} -40 ${f1(90+wob)} 10 ${f1(50-wob*.6)} S 90 -20 80 -70 S 10 -130 -20 -90 S 0 -30 40 -50`;
  const q=EZ.out(sg(lt,0,.9));let s='';
  for(let i=0;i<26;i++){const u=i/25;if(u>q)break;const a=hs(i*3.7)*6.28;s+='';}
  s+=DR(d,ST(K.ink,34*k),q)+DR(d,ST(c,28*k),q)+DR(d,ST('#ff7a95',10*k,'opacity:.7'),q)+DR(d,ST('#7a0f2c',3*k,'stroke-dasharray:.012 .02'),q);
  /* espículas alrededor del filamento */
  const pts=[[-150,70],[-120,52],[-90,52],[-60,66],[-30,76],[0,58],[30,30],[60,0],[80,-40],[70,-80],[40,-110],[0,-112],[-22,-80],[0,-50],[30,-48]];
  pts.forEach(([x,y],i)=>{const u=i/(pts.length-1);if(u>q)return;const a=(hs(i*2.1)-.5)*1.4+(i<6?-1.57:i<10?-.6:i<13?-1.9:1.57);
    const yy=y+(i<6?(i%2?-1:1)*wob*.5:0);s+=G(x,yy,_ap(lt,.2+u*.6,.25),0,P(`M0 0 L${f1(Math.cos(a)*24*k)} ${f1(Math.sin(a)*24*k)}`,ST('#7a0f2c',3))+Ci(Math.cos(a)*26*k,Math.sin(a)*26*k,4.5*k,'#ff5a7a',OL(1.4)));});
  if(o.label)s+=G(0,150,1,0,pill(o.label,{sz:14,w:800,fill:K.ink}),_ao(lt,.8,.3));
  return s;};
n2cat('ebolavirus · Virus del ébola (filovirus enroscado)',lt=>NX.ebolavirus({label:'cepa Bundibugyo'},lt%4));

/* Rastreo de contactos: un caso en el centro (aislado) y sus contactos alrededor, unidos por líneas que se trazan; después cada contacto recibe su ✓ de vigilancia · o:{n, at, check (s en que empiezan los ✓), label, R} */
NX.contacttrace=(o={},lt)=>{const n=o.n||44,at=o.at??.2,R=o.R||200,ck=o.check;let s='';
  const pos=[];let i=0;[[.42,10],[.7,14],[1,20]].forEach(([r,m])=>{for(let j=0;j<m&&i<n;j++,i++){const a=j/m*6.283+r*1.7;pos.push([Math.cos(a)*R*r,Math.sin(a)*R*r*.92]);}});
  while(pos.length<n){const a=pos.length*2.4;pos.push([Math.cos(a)*R*1.1,Math.sin(a)*R]);}
  pos.forEach(([x,y],j)=>{const a=at+.15+j*.035,q=sg(lt,a,a+.3);if(q<=0)return;s+=P(`M0 0 L${f1(x*EZ.out(q))} ${f1(y*EZ.out(q))}`,ST('rgba(20,18,18,.35)',1.4));});
  pos.forEach(([x,y],j)=>{const a=at+.3+j*.035;if(lt<a)return;const on=ck!=null&&lt>ck+j*.03;
    s+=G(x,y,_ap(lt,a,.3),0,Ci(0,0,11,on?'#3f9b4f':'#fff',OL(2))+(on?P('M-5 0 L-1 4 L6 -5',ST('#fff',2.6)):Ci(0,-2,3.6,K.ink)+P('M-6 7 Q0 1 6 7',ST(K.ink,2))));});
  /* caso aislado en el centro */
  const pl=1+.05*Math.sin(lt*5);
  s+=G(0,0,_ap(lt,at,.4)*pl,0,Rc(-40,-40,80,80,'#fff',14,OL(3,K.red))+Ci(0,-8,13,K.red)+P('M-20 26 Q0 4 20 26',`fill:${K.red}`)+Rc(-40,-40,80,16,K.red,6)+Tn(0,-28,'AISLADA',9,800,{fill:'#fff',ls:.06}));
  if(o.label)s+=G(0,R+44,1,0,pill(o.label,{sz:15,w:800,fill:K.ink}),_ao(lt,at+1,.3));
  return s;};
n2cat('contacttrace · Rastreo de contactos (un caso aislado y sus contactos)',lt=>G(0,-30,.9,0,NX.contacttrace({n:44,check:3,label:'44 contactos'},lt%6)));

/* Calendario de vigilancia de N días (21 = periodo máximo de incubación del ébola): las casillas se van tachando · o:{days, at, dur, title} */
NX.watchdays=(o={},lt)=>{const n=o.days||21,at=o.at??.3,dur=o.dur||2.4,cols=7,cw=50,ch=46,rows=Math.ceil(n/cols),w=cols*cw,h=rows*ch;let s='';
  s+=Rc(-w/2-14,-h/2-58,w+28,h+74,'#fff',14,OL(2.4))+Rc(-w/2-14,-h/2-58,w+28,40,K.red,14)+Rc(-w/2-14,-h/2-30,w+28,12,K.red)+Tn(0,-h/2-31,o.title||'VIGILANCIA',16,800,{fill:'#fff',ls:.08});
  const cur=sg(lt,at,at+dur)*n;
  for(let i=0;i<n;i++){const x=-w/2+(i%cols)*cw+cw/2,y=-h/2+Math.floor(i/cols)*ch+ch/2+8,done=cur>i+.5,now=cur>i&&!done;
    s+=Rc(x-cw/2+4,y-ch/2+4,cw-8,ch-8,done?'#e8f5ea':'#f6f6f6',8,OL(1.4,'#bdbdbd'))+Tn(x,y+6,String(i+1),15,700,{fill:done?'#3f9b4f':'#777'});
    if(done||now)s+=DR(`M${x-14} ${y+2} L${x-4} ${y+12} L${x+15} ${y-12}`,ST('#3f9b4f',3.6),done?1:(cur-i)*2);}
  if(cur>=n-.01)s+=G(w/2-10,h/2+6,1,0,stampA(0,0,lt-(at+dur),o.done||'21 DÍAS',{c:'#3f9b4f',sz:18,r:-8}));
  return s;};
n2cat('watchdays · Calendario de vigilancia (21 días)',lt=>NX.watchdays({},lt%5));

/* No se contagia por el aire / sí por contacto directo: dos tarjetas, aire tachado y gota de fluido con ✓ · o:{at, la, lb} */
NX.notair=(o={},lt)=>{const at=o.at??.2;let s='';
  /* tarjeta A: aire */
  let a=Rc(-110,-120,220,240,'#fff',18,OL(2.4));
  for(let i=0;i<3;i++){const y=-50+i*30,ph=lt*3+i;a+=P(`M-80 ${y} q20 ${f1(-12*Math.sin(ph))} 40 0 t40 0 t40 0`,ST('#8fb2e6',5));}
  a+=G(40,-58,.32,0,NX.virus({},lt+1));
  a+=Tn(0,70,o.la||'POR EL AIRE',17,800);
  const xq=sg(lt,at+.9,at+1.3);a+=DR('M-80 -100 L80 40',ST(K.red,9),xq)+DR('M80 -100 L-80 40',ST(K.red,9),sg(lt,at+1.1,at+1.5));
  s+=G(-120,0,_ap(lt,at,.4),-3,a);
  /* tarjeta B: contacto directo */
  let b=Rc(-110,-120,220,240,'#fff',18,OL(2.4));
  const dy=Math.sin(lt*3)*4;b+=G(-28,-40+dy,1,0,P('M0 -38 C 18 -12 26 2 26 14 A26 26 0 0 1 -26 14 C -26 2 -18 -12 0 -38Z',`fill:${K.red};${OL(2.4)}`)+El(-9,6,6,10,'#fff','opacity:.45'));
  b+=G(38,-32,1,-20,P('M-22 30 L-22 -8 Q-22 -16 -14 -16 Q-6 -16 -6 -8 L-6 -30 Q-6 -38 2 -38 Q10 -38 10 -30 L10 -6 L18 -6 Q26 -6 26 4 L26 30 Q26 44 10 44 L-8 44 Q-22 44 -22 30Z',`fill:#f6d0b0;${OL(2.2)}`));
  b+=Tn(0,62,o.lb||'CONTACTO',17,800)+Tn(0,84,'DIRECTO',17,800);
  b+=G(78,-92,_ap(lt,at+1.8,.35),0,Ci(0,0,22,'#3f9b4f',OL(2.4))+P('M-9 0 L-2 7 L10 -7',ST('#fff',4)));
  s+=G(120,0,_ap(lt,at+.4,.4),3,b);
  return s;};
n2cat('notair · No se contagia por el aire / sí por contacto directo',lt=>NX.notair({},lt%5));

/* ===== Diario del pulpo (22/10/2026) ===== */
/* Pulpo dibujado con 8 brazos ondulantes · o:{c, cd, swim (0..1: brazos juntos hacia atrás, modo propulsión), walk (0..1: camina con los brazos), xray (0..1: ventana con los 3 corazones), beat:[branquial izq, branquial dcho, sistémico] (1 late, 0 parado), blood ('blue'|'none'), arms (0..1: brazos iluminados = neuronas), emo ('ok'|'tired'|'wow'), jet (0..1 chorro de agua)} */
NX.octopus=(o={},lt)=>{const c=o.c||'#e2678f',cd=o.cd||'#b8406b',sw=cl(o.swim||0),wk=o.walk||0,xr=cl(o.xray||0),am=cl(o.arms||0),T=lt;let s='';
  /* brazos */
  for(let i=0;i<8;i++){const side=i<4?-1:1,k=i%4,bx=side*(10+k*9),ph=T*2.6+i*.8+(wk?T*4:0);
    const spread=side*(26+k*22)*(1-sw),len=120+k*6-(sw*20),wav=Math.sin(ph)*16*(1-sw*.7);
    const x1=bx+spread*.5+wav*.4,y1=60+len*.35,x2=bx+spread+wav,y2=60+len*.75+(wk?Math.abs(Math.sin(ph))*-10:0),x3=bx+spread*1.25+Math.sin(ph+1)*22*(1-sw*.6),y3=60+len-Math.max(0,Math.sin(ph+.5))*18*(1-sw);
    const d=`M${f1(bx)} 50 Q${f1(x1)} ${f1(y1)} ${f1(x2)} ${f1(y2)} T${f1(x3)} ${f1(y3)}`;
    s+=P(d,ST(K.ink,23-k))+P(d,ST(k%2?cd:c,19-k));
    if(am>0){s+=P(d,ST('#ffe066',6,`opacity:${f2(am*(.55+.45*Math.sin(T*8+i)))}`));}}
  if(o.jet){const j=cl(o.jet);for(let k=0;k<6;k++){const q=((T*2.2)+k/6)%1;s+=Ci(Math.sin(k*2.1)*14*q,190+q*120,(10+q*16)*j,'#cfe6ff',`opacity:${f2(.75*(1-q)*j)};${OL(1.4,'#8fb2e6')}`);}}
  /* manto y cabeza */
  s+=El(0,-40,78,96,c,OL(3))+El(-24,-80,22,30,'#ffffff','opacity:.18');
  for(let k=0;k<7;k++)s+=Ci(-46+hs(k*3)*90,-90+hs(k*7)*90,3+hs(k)*4,cd,'opacity:.55');
  /* ventana de rayos X con los tres corazones */
  if(xr>0){const bt=o.beat||[1,1,1],H=(x,y,r,on,col,lab)=>{const b=on?1+.16*Math.max(0,Math.sin(T*9)):1;return G(x,y,b*r/20,0,P('M0 8 C-14 -2 -20 -14 -10 -20 C-4 -24 0 -18 0 -14 C0 -18 4 -24 10 -20 C20 -14 14 -2 0 8Z',`fill:${on?col:'#8e8e8e'};${OL(1.6)}`))+(lab?G(x,y+r+12,1,0,Tn(0,0,lab,9,800,{fill:'#fff'})):'');};
    let w=El(0,-30,58,66,'#1d2a44','opacity:.92')+El(0,-30,58,66,'none',OL(2.4,'#9ec3ff'));
    w+=G(-38,-4,1,0,El(0,0,14,22,'#3d6a5a',OL(1.4,'#9ec3ff')))+G(38,-4,1,0,El(0,0,14,22,'#3d6a5a',OL(1.4,'#9ec3ff')));
    w+=P('M-38 -20 Q-20 -50 0 -40 M38 -20 Q20 -50 0 -40',ST(o.blood==='blue'?'#4f8cff':'#c9d6e8',3,'opacity:.9'));
    w+=H(-38,-4,15,bt[0],'#ff5a7a')+H(38,-4,15,bt[1],'#ff5a7a')+H(0,-44,24,bt[2],'#ff2e63');
    if(!bt[2])w+=G(0,-44,1,0,P('M-14 -14 L14 14 M14 -14 L-14 14',ST('#fff',4)));
    s+=G(0,-38,.78,0,w,xr);}
  /* ojos */
  const em=o.emo||'ok',ey=em==='tired'?.35:1,eb=em==='wow'?1.25:1;
  [[-30,0],[30,0]].forEach(([x])=>{s+=El(x,10,16*eb,15*eb,'#fff',OL(2.2))+(ey<1?P(`M${x-13} ${10-2} L${x+13} ${10-2}`,ST(K.ink,3)):'')+El(x+3,12,5*eb,7*eb*ey,K.ink);});
  s+=P(em==='tired'?'M-10 40 Q0 34 10 40':'M-9 36 Q0 42 9 36',ST(K.ink,2.6));
  return s;};
n2cat('octopus · Pulpo (8 brazos, rayos X con 3 corazones, propulsión, brazos que «piensan»)',lt=>{const ph=lt%8;return G(0,-40,.9,0,NX.octopus({xray:ph>2&&ph<6?1:0,beat:[1,1,ph<4?1:0],blood:'blue',swim:ph>4&&ph<6?1:0,jet:ph>4&&ph<6?1:0,arms:ph>6?1:0,emo:ph>4&&ph<6?'tired':'ok'},lt));});

/* Dos tubos de sangre para comparar: roja (hemoglobina, hierro Fe) y azul (hemocianina, cobre Cu), con su casilla de la tabla periódica · o:{at, la, lb} */
NX.bloodtubes=(o={},lt)=>{const at=o.at??.2;let s='';
  const tube=(x,col,lab,el,num,a)=>{const q=EZ.io(sg(lt,a+.3,a+1.3)),H=230;let g=Rc(-34,-H,68,H,'rgba(255,255,255,.55)',30,OL(2.4))+Rc(-44,-H-14,88,20,'#d8d8d8',6,OL(2.2));
    g+=clipG(Rc(-34,-H*.8*q,68,H*.8*q+2,col)+Rc(-34,-H*.8*q,68,10,'#ffffff',0,'opacity:.25'),Rc(-31,-H+3,62,H-6,'#000',28));
    g+=G(0,-H-80,_ap(lt,a+1.2,.35),0,Rc(-38,-38,76,76,'#fff',8,OL(2.4,col))+Tn(-24,-18,String(num),11,700,{a:'start',fill:'#555'})+Tn(0,16,el,34,800,{fill:col}));
    g+=G(0,34,1,0,pill(lab,{sz:13,w:800,fill:col}),_ao(lt,a+.8,.3));
    return G(x,0,_ap(lt,a,.4),0,g);};
  s+=tube(-100,'#d6283a',o.la||'hemoglobina',"Fe",26,at)+tube(100,'#2f6fe0',o.lb||'hemocianina','Cu',29,at+(o.gap??.6));
  return s;};
n2cat('bloodtubes · Sangre roja (hierro) frente a sangre azul (cobre)',lt=>G(0,120,1,0,NX.bloodtubes({},lt%5)));


/* ===== Noticia del informe de la ONU sobre la brecha de emisiones (22/10/2026) ===== */
/* Termómetro gigante cuyo mercurio rompe la cinta del límite (p. ej. 1,5 °C) · o:{at (instante en que rompe), label, top (valor máx. escala), lim, val (valor final)} */
NX.limitbreak=(o={},lt)=>{const at=o.at??.8,top=o.top||3,lim=o.lim??1.5,vf=o.val??1.8,H=440,Y=v=>-v/top*H;let s='';
  const v=lt<at?lerp(lim*.82,lim,EZ.io(sg(lt,0,at))):lim+(vf-lim)*EZ.out(sg(lt,at,at+1.2)),brk=lt>=at;
  /* ondas de calor */
  for(let i=0;i<4;i++){const q=((lt*.7)+i/4)%1;s+=P(`M${-90-i*8} ${f1(-120-q*260)} q12 -14 0 -28 t0 -28`,ST('#f6a81a',4,`opacity:${f2((1-q)*.7)}`));s+=P(`M${90+i*8} ${f1(-100-q*260)} q12 -14 0 -28 t0 -28`,ST('#f6a81a',4,`opacity:${f2((1-q)*.7)}`));}
  /* tubo */
  s+=Rc(-34,-H-30,68,H+40,'rgba(255,255,255,.75)',34,OL(2.6));
  for(let k=0;k<=top;k++){s+=P(`M34 ${f1(Y(k))} l18 0`,ST(K.ink,2.4))+Tn(78,Y(k)+6,k+' °C',15,700,{a:'start'});}
  s+=clipG(Rc(-22,Y(v),44,-Y(v)+20,brk?K.red:'#f36d3b')+Rc(-22,Y(v),44,8,'#fff',0,'opacity:.3'),Rc(-22,-H-20,44,H+30,'#000',22));
  s+=Ci(0,40,50,brk?K.red:'#f36d3b',OL(2.6))+Ci(-14,26,12,'#fff','opacity:.35');
  /* cinta del límite */
  const yl=Y(lim),q=EZ.out(sg(lt,at,at+.5));
  const tape=(dx,rot,side)=>G(dx,yl,1,rot,Rc(side<0?-220:0,-14,220,28,'#ffd400',0,OL(2))+[0,1,2,3,4].map(i=>P(`M${side<0?-210+i*44:10+i*44} 14 l22 -28`,ST(K.ink,7))).join(''));
  if(!brk)s=tape(0,0,-1)+tape(0,0,1)+s;else s=tape(-q*40,-q*24,-1)+tape(q*40,q*24,1)+s;
  s+=G(-150,yl-36,1,0,pill(o.label||'LÍMITE 1,5 °C',{sz:16,w:800,fill:K.red}));
  if(brk){s+=G(0,yl,1,0,[0,1,2,3,4,5].map(i=>{const a=i*1.05,r=30+q*60;return P(`M${f1(Math.cos(a)*20)} ${f1(Math.sin(a)*12)} L${f1(Math.cos(a)*r)} ${f1(Math.sin(a)*r*.6)}`,ST(K.ink,3,`opacity:${f2(1-sg(lt,at+.6,at+1.2))}`));}).join(''));}
  return s;};
n2cat('limitbreak · Termómetro que rompe el límite de 1,5 °C',lt=>G(0,250,.85,0,NX.limitbreak({},lt%4)));

/* Gráfico de temperatura global 1850-2100 con la línea del límite y escenarios · o:{w,h,top,lim, hist (instante en que se dibuja la historia), scen:[[valor 2100, etiqueta, color, instante, desplazamiento y de la etiqueta]], over (instante del escenario de sobrepaso: sube a 1,75 y vuelve a 1,5), dim (atenúa escenarios)} */
NX.warmcurve=(o={},lt)=>{const w=o.w||400,h=o.h||300,top=o.top||3,lim=o.lim??1.5,X=y=>-w/2+(y-1850)/250*w,Y=v=>-v/top*h;let s='';
  s+=Rc(-w/2-46,-h-30,w+92,h+78,'#fff',16,OL(2.4));
  for(let k=0;k<=top;k++){s+=P(`M${-w/2} ${f1(Y(k))} L${w/2} ${f1(Y(k))}`,ST('#e2e2e2',1.4))+Tn(-w/2-10,Y(k)+5,k+'°',13,700,{a:'end',fill:'#666'});}
  [1850,1950,2025,2100].forEach(y=>{s+=Tn(X(y),24,String(y),12,700,{fill:'#666'});});
  s+=P(`M${-w/2} 0 L${w/2} 0`,ST(K.ink,2.2));
  const yl=Y(lim);s+=P(`M${-w/2} ${f1(yl)} L${w/2} ${f1(yl)}`,ST(K.red,3,'stroke-dasharray:10 7'))+G(-w/2+52,yl-14,1,0,Tn(0,0,'1,5 °C',14,800,{fill:K.red}));
  const H=[[1850,0],[1880,.02],[1910,.05],[1940,.25],[1960,.25],[1980,.42],[2000,.78],[2010,.95],[2020,1.25],[2025,1.42]];
  const path=pts=>'M'+pts.map(([y,v])=>f1(X(y))+' '+f1(Y(v))).join(' L');
  const ha=o.hist??0;s+=DR(path(H),ST(K.ink,4),sg(lt,ha,ha+1.4));
  const curve=(vf,n=12)=>{const r=[];for(let i=0;i<=n;i++){const y=2025+i*75/n,u=i/n;r.push([y,1.42+(vf-1.42)*(1-Math.pow(1-u,1.35))]);}return r;};
  (o.scen||[]).forEach(([vf,lab,col,a,dy],i)=>{dy=dy||0;const p=sg(lt,a,a+1.1),dm=o.dim?.35:1;s+=G(0,0,1,0,DR(path(curve(vf)),ST(col,4.5),p),dm);
    if(p>=1)s+=G(X(2100)+8,Y(vf)+dy,1,0,Rc(-2,-15,lab.length*9.2+18,30,col,15)+Tn(7,6,lab,15,800,{a:'start',fill:'#fff'}),_ao(lt,a+1.1,.25)*dm);});
  if(o.over!=null){const a=o.over,pts=[];for(let i=0;i<=20;i++){const y=2025+i*75/20,u=(y-2025)/75;const v=u<.33?1.42+(1.75-1.42)*Math.sin(u/.33*Math.PI/2):1.75-(1.75-1.45)*EZ.io((u-.33)/.67);pts.push([y,v]);}
    const p=sg(lt,a,a+1.6);
    const ov=pts.filter(([y,v])=>v>lim);if(p>.95&&ov.length)s+=P('M'+ov.map(([y,v])=>f1(X(y))+' '+f1(Y(v))).join(' L')+` L${f1(X(ov[ov.length-1][0]))} ${f1(yl)} L${f1(X(ov[0][0]))} ${f1(yl)}Z`,`fill:${K.red};opacity:${f2(.25*_ao(lt,a+1.6,.4))}`);
    s+=DR(path(pts),ST('#f36d3b',5),p);
    if(p>=.5)s+=G(X(2050),Y(1.75)-26,1,0,pill('pico 1,7-1,8 °C',{sz:13,w:800,fill:'#f36d3b'}),_ao(lt,a+.8,.3));}
  return G(0,0,_ap(lt,0,.35),0,s);};
n2cat('warmcurve · Temperatura global 1850-2100: escenarios y sobrepaso del 1,5 °C',lt=>{const t=lt%7;return G(0,150,1,0,NX.warmcurve({hist:.3,scen:[[2.8,'2,8 °C',K.red,1.8,-12],[2.6,'2,6 °C','#f36d3b',2.4,12],[2.1,'2,1 °C','#f6a81a',3]],over:t>4.2?4.2:null,dim:t>4.2},t));});

/* Escalera de recortes de emisiones (2025 = 100) con la barra «fantasma» de lo prometido · o:{items:[[año,%restante,etiqueta,instante]], promise:[año,%restante,etiqueta,instante], h} */
NX.cutstairs=(o={},lt)=>{const it=o.items||[['2025',100,'hoy',0],['2030',82,'−18 %',.6],['2035',55,'−45 %',1.2],['2040',31,'−69 %',1.8]],h=o.h||300,bw=78,gap=22,n=it.length,tw=n*bw+(n-1)*gap;let s=P(`M${-tw/2-20} 0 L${tw/2+20} 0`,ST(K.ink,2.4));
  it.forEach(([y,v,lab,a],i)=>{const x=-tw/2+i*(bw+gap),q=EZ.out(sg(lt,a,a+.5)),bh=v/100*h*q;
    s+=Rc(x,-bh,bw,bh,i?'url(#gWA)':'#7a7a7a',6,OL(2.2));
    if(i){const smk=lt>a;if(smk)s+=G(x+bw/2,-bh-16,1,0,Tn(0,0,lab,20,800,{fill:K.green2||'#3f9b4f'}),_ao(lt,a+.4,.25));}
    else s+=G(x+bw/2,-bh-14,1,0,Tn(0,0,'100',18,800,{fill:'#555'}),_ao(lt,a+.3,.25));
    s+=Tn(x+bw/2,24,y,15,800,{fill:'#555'});});
  if(o.promise){const [y,v,lab,a]=o.promise,i=it.findIndex(e=>e[0]===y);if(i>=0&&lt>a){const x=-tw/2+i*(bw+gap),bh=v/100*h,p=_ao(lt,a,.4);
    s+=G(0,0,1,0,Rc(x-6,-bh,bw+12,bh,'rgba(243,72,65,.12)',6,`stroke:${K.red};stroke-width:3;stroke-dasharray:8 6`),p)+G(x+bw/2,-bh-44,1,0,pill(lab,{sz:13,w:800,fill:K.red}),_ao(lt,a+.3,.3));}}
  return s;};
n2cat('cutstairs · Escalera de recortes de emisiones (y lo prometido)',lt=>G(0,250,1,0,NX.cutstairs({promise:['2035',87,'promesas: −11 a −15 %',3]},lt%6)));

/* registrar en el catálogo */


/* ===== Noticia del virus Shamonda (22/10/2026) ===== */
/* Vaca de perfil (mira a la derecha), pies en y=0 · o:{c (manchas), walk (0..1 anda), sick (0..1: fiebre, termómetro y ojos cansados), milk (0..1 nivel del cubo de leche; null = sin cubo), virus (0..1 halo de virus alrededor), emo ('ok'|'tired')} */
NX.cow=(o={},lt)=>{const T=lt,wk=o.walk||0,sk=cl(o.sick||0),pc=o.c||'#2a2525';let s='';
  const bob=wk?Math.abs(Math.sin(T*6))*-3:Math.sin(T*1.6)*1.2;
  /* patas */
  [[-78,0],[-50,1],[44,1],[70,0]].forEach(([x,ph],i)=>{const a=wk?Math.sin(T*6+ph*3.14)*14:0;
    s+=G(x,-62,1,a,Rc(-9,0,18,60,'#fbfbfb',6,OL(2.2))+Rc(-10,50,20,12,K.ink,4));});
  /* cola */
  const tw=Math.sin(T*3)*14;s+=P(`M-112 -128 Q${f1(-136+tw*.3)} -90 ${f1(-130+tw)} -58`,ST(K.ink,4))+El(-130+tw,-54,6,10,K.ink);
  /* cuerpo con manchas */
  const body='M-112 -150 Q-118 -66 -96 -62 L88 -62 Q108 -66 104 -150 Q100 -160 80 -160 L-92 -160 Q-112 -160 -112 -150Z';
  s+=G(0,bob,1,0,P(body,`fill:#fbfbfb;${OL(2.6)}`)+clipG(El(-60,-136,34,24,pc)+El(10,-90,30,20,pc)+El(70,-140,22,18,pc)+El(-90,-80,18,14,pc),P(body,'fill:#000'))+P(body,`fill:none;${OL(2.6)}`)
    +P('M-30 -62 Q-30 -40 -14 -40 Q2 -40 2 -62Z',`fill:#f4a6b8;${OL(2)}`)+P('M-22 -42 L-22 -34 M-8 -42 L-8 -34',ST(K.ink,2)));
  /* cabeza */
  const hb=Math.sin(T*1.3)*2+bob;let h='';
  h+=El(-4,-30,12,8,'#fbfbfb',OL(2))+El(-2,-30,6,4,'#f4a6b8');
  h+=P('M-6 -40 Q-14 -60 -2 -60 M26 -40 Q34 -60 22 -60',ST('#d9c7a0',5))+P('M-6 -40 Q-14 -60 -2 -60 M26 -40 Q34 -60 22 -60',ST(K.ink,1.4,'opacity:.6'));
  h+=P('M-12 -36 Q-14 6 6 22 L30 22 Q48 6 40 -36 Q14 -50 -12 -36Z',`fill:#fbfbfb;${OL(2.4)}`)+El(4,-26,12,10,pc);
  h+=El(14,18,30,18,'#f4a6b8',OL(2.4))+El(4,18,4,5,K.ink)+El(24,18,4,5,K.ink);
  const ey=o.emo==='tired'||sk>.5?.35:1;
  [[2,-12],[28,-12]].forEach(([x,y])=>{h+=El(x,y,6,6,'#fff',OL(1.6))+El(x+1,y+1,3,3.6*ey,K.ink)+(ey<1?P(`M${x-7} ${y-2} L${x+7} ${y-2}`,ST(K.ink,2.4)):'');});
  if(sk>0){h+=G(46,24,sk,-25,Rc(-3,-4,40,8,'#fff',4,OL(1.6))+Ci(38,0,6,K.red,OL(1.4))+Rc(8,-1.5,30*sk,3,K.red));
    for(let i=0;i<2;i++){const q=((T*.9)+i*.5)%1;h+=G(-14-i*6,-20+q*18,sk*(1-q),0,P('M0 -6 C 4 0 4 4 0 6 C -4 4 -4 0 0 -6Z','fill:#8fc4ff;'+OL(1.2,'#3a78c9')));}}
  s+=G(98,-140+hb,1,8,h);
  /* cubo de leche */
  if(o.milk!=null){const lv=cl(o.milk);let b=P('M-26 -46 L26 -46 L20 0 L-20 0Z',`fill:#c9d2dc;${OL(2.2)}`);
    b+=clipG(Rc(-30,-46+46*(1-lv),60,50,'#ffffff'),P('M-24 -44 L24 -44 L19 -2 L-19 -2Z','fill:#000'))+P('M-24 -46 Q0 -76 24 -46',ST(K.ink,2.2));
    s+=G(150,0,1,0,b);}
  if(o.virus){const v=cl(o.virus);for(let i=0;i<6;i++){const a=i/6*6.28+T*.7;s+=G(Math.cos(a)*150,-100+Math.sin(a)*90,.16*v,0,NX.virus({},lt+i),v);}}
  return s;};
n2cat('cow · Vaca (anda, enferma con fiebre, cubo de leche que baja, virus alrededor)',lt=>{const t=lt%8;return G(-40,160,1,0,NX.cow({walk:t<2?1:0,sick:t>3?Math.min(1,(t-3)*1.5):0,milk:t>2?Math.max(.15,1-(t-2)*.25):null,virus:t>5.5?1:0},lt));});

/* Jején (Culicoides): insecto diminuto con alas moteadas que zumba y pica · o:{s, bite (0..1 baja la probóscide y se posa), fly (0..1 vuela en zigzag), path (ancho del zigzag), spots (alas con manchas)} */
NX.midge=(o={},lt)=>{const T=lt,fl=o.fly??1,bt=cl(o.bite||0),A=o.path||60;let s='';
  const x=fl*(Math.sin(T*2.3)*A+Math.sin(T*5.1)*A*.25),y=fl*(Math.cos(T*3.1)*A*.4)+bt*20;
  const flap=fl>0||bt<1?Math.abs(Math.sin(T*55)):.2,ws=.25+.75*flap;
  let b='';
  /* patas */
  for(let i=0;i<3;i++){const lx=-10+i*12;b+=P(`M${lx} 8 L${lx-8} 30 L${lx-12} 44 M${lx} 8 L${lx+8} 30 L${lx+12} 44`,ST(K.ink,1.6));}
  /* alas moteadas */
  const wing=(dir)=>{let w=El(0,-26,46,16,'rgba(235,240,250,.85)',OL(1.6,'#4a4a52'));if(o.spots!==false)[[-24,-28],[-6,-22],[12,-30],[26,-24],[-14,-34]].forEach(([a,c])=>{w+=Ci(a,c,4,'#6a6a72','opacity:.6');});return G(dir*6,-4,1,dir*-24,G(dir*30,0,1,0,w),1,ws*(1));};
  b+=wing(-1)+wing(1);
  /* cuerpo */
  b+=El(-26,6,24,12,'#5a4636',OL(1.8))+P('M-44 2 L-12 2 M-40 10 L-14 10',ST('#3a2a1f',1.4))+El(6,0,16,14,'#4a382b',OL(1.8))+Ci(30,4,11,'#3a2a1f',OL(1.8));
  b+=Ci(34,0,4.4,'#c93030')+P(`M36 -6 Q46 -18 54 -14 M36 -6 Q42 -22 50 -24`,ST(K.ink,1.4));
  b+=P(`M38 10 L${f1(48+bt*4)} ${f1(18+bt*14)}`,ST(K.ink,2.2));
  s+=G(x,y,o.s||1,bt*20,b);
  if(fl>0){for(let i=0;i<3;i++){const q=((T*2)+i/3)%1;s+=G(x-30-q*40,y-10+Math.sin(i*2)*12,1,0,Tn(0,0,'z',12+q*6,800,{fill:'rgba(20,18,18,'+f2(.6*(1-q))+')'}));}}
  return s;};
n2cat('midge · Jején (Culicoides): vuela zumbando y pica',lt=>{const t=lt%6;return G(0,0,2.2,0,NX.midge({fly:t<3.5?1:Math.max(0,1-(t-3.5)*2),bite:t>4?Math.min(1,(t-4)*2):0},lt));});

/* Comparación de tamaño: mosquito frente a jején (diminuto) con lupa · o:{at} */
NX.midgesize=(o={},lt)=>{const at=o.at??.2;let s='';
  const mosq=(()=>{let m='';for(let i=0;i<3;i++){const lx=-14+i*12;m+=P(`M${lx} 4 L${lx-16} 40 L${lx-26} 70 M${lx} 4 L${lx+16} 40 L${lx+26} 70`,ST(K.ink,1.8));}
    m+=El(-20,-26,52,13,'rgba(235,240,250,.85)',OL(1.6,'#4a4a52'))+El(-50,4,40,9,'#6b5a4a',OL(1.8))+El(4,0,14,12,'#5a4636',OL(1.8))+Ci(24,0,9,'#3a2a1f',OL(1.8))+P('M30 4 L62 22',ST(K.ink,2.2));return m;})();
  s+=G(-120,0,_ap(lt,at,.35),0,mosq+G(0,96,1,0,pill('mosquito',{sz:14,w:800,fill:K.ink})));
  s+=G(120,0,_ap(lt,at+.5,.35),0,G(0,6,.32,0,NX.midge({fly:0,bite:0},lt))+Ci(0,0,58,'rgba(255,255,255,.25)',OL(4))+P('M40 42 L78 80',ST(K.ink,10))+G(0,96,1,0,pill('jején',{sz:14,w:800,fill:'url(#gRP)'})));
  return s;};
n2cat('midgesize · Mosquito frente a jején (con lupa)',lt=>NX.midgesize({},lt%4));

/* Salto de especie: virus que pasa de un animal (vaca) a una persona por primera vez · o:{at, label} */
NX.spillover=(o={},lt)=>{const at=o.at??.3;let s='';
  s+=G(-120,70,.55,0,NX.cow({},lt),_ao(lt,at,.3));
  const per=Ci(0,-96,26,'#f6d0b0',OL(2.4))+P('M-36 0 Q-36 -58 0 -62 Q36 -58 36 0Z',`fill:#5b6b8a;${OL(2.4)}`)+El(-8,-98,3,3.6,K.ink)+El(8,-98,3,3.6,K.ink)+P('M-7 -84 Q0 -86 7 -84',ST(K.ink,2));
  s+=G(160,70,1,0,per,_ao(lt,at+.2,.3));
  const q=EZ.io(sg(lt,at+.6,at+1.8)),bx=lerp(-60,150,q),by=-30-Math.sin(q*3.14)*150;
  s+=DR('M-60 -30 Q45 -330 150 -30',ST(K.red,3,'stroke-dasharray:.02 .02'),q);
  if(lt>at+.6)s+=G(bx,by,.2,lt*60,NX.virus({c:'#e58a1f'},lt));
  if(q>=1)s+=G(160,-20,1,0,_pulse(lt-at-1.8,40,K.red,3,1.2));
  if(o.label&&lt>at+1.9)s+=G(0,150,1,0,stampA(0,0,lt-at-1.9,o.label,{c:K.red,sz:22,r:-5}));
  return s;};
n2cat('spillover · Salto de especie: de la vaca a la persona',lt=>NX.spillover({label:'1.er CASO HUMANO'},lt%5));

/* ===== Recursos nuevos · noticia del terremoto del Tíbet (23/10/2026) ===== */
/* Casa tibetana: muros blancos encalados, marcos de ventana negros trapezoidales, tejado plano con franja granate · o: k */
function _tibHouse(k=1,seed=0){const w=70+hs(seed)*30,h=54+hs(seed+1)*20;let s=P(`M${-w/2} 0 L${-w/2+4} ${-h} L${w/2-4} ${-h} L${w/2} 0Z`,'fill:#f6f2ea;'+OL(2.2))+Rc(-w/2+2,-h-8,w-4,9,'#7a2430',1,OL(1.8));
  for(let i=0;i<2;i++){const x=-w/4+i*w/2;s+=P(`M${x-11} ${-h*.62} L${x+11} ${-h*.62} L${x+8} ${-h*.3} L${x-8} ${-h*.3}Z`,'fill:#16181d')+Rc(x-7,-h*.6,14,10,'#f2c45a',1);}
  s+=P(`M-8 0 L-8 ${-h*.25} L8 ${-h*.25} L8 0`,'fill:#3a2a22;'+OL(1.6));
  return G(0,0,k,0,s);}
/* Casa tibetana derrumbada (escombros) */
function _tibRubble(k=1,seed=0){let s='';for(let i=0;i<9;i++){const x=-40+hs(seed+i)*80,y=-4-hs(seed+i*3)*26;s+=G(x,y,1,hs(i+seed)*70-35,Rc(-12,-7,18+hs(i+2)*16,12,i%3?'#f6f2ea':'#d9d2c4',2,OL(1.4)));}
  s+=G(-6,-30,1,-24,Rc(-30,-4,60,8,'#7a2430',1,OL(1.6)));return G(0,0,k,0,s+P('M-50 0 L50 0',ST(K.ink,2)));}
/* Banderas de oración entre dos postes */
function _prayer(lt,w=200){const c=['#2a5fd7','#ffffff','#e2264a','#3f9b4f','#f6c21a'];let s=P(`M${-w/2} -60 L${-w/2} 0 M${w/2} -60 L${w/2} 0`,ST('#5a3119',3))+P(`M${-w/2} -58 Q0 -30 ${w/2} -58`,ST(K.ink,1.4));
  for(let i=0;i<10;i++){const q=(i+.5)/10,x=-w/2+q*w,y=-58+Math.sin(Math.PI*q)*28;s+=G(x,y,1,_osc(lt,.8,8,i),Rc(-6,0,12,14,c[i%5],1,OL(1)));}return s;}
/* Altiplano tibetano: cumbres nevadas, llanura alta, casas tibetanas y banderas de oración. Puede temblar, agrietarse y derrumbar casas.
   o:{shake (0-1 intensidad), crack (0-1 grieta que se abre), fall (0-1 parte de casas caídas), snow (0-1 nieve que cae), night (0-1), alt ('4.800 m' rótulo de altímetro)} · ancho 540, base en y=0 */
NX.plateau=(o={},lt)=>{const sh=(o.shake||0),dx=sh*_osc(lt,11,6),dy=sh*_osc(lt,13,3,1.3),nt=o.night||0;let s='';
  s+=Rc(-270,-460,540,500,mixc('#bcd3f0','#1b2340',nt));
  if(nt>0)for(let i=0;i<24;i++)s+=Ci(-260+hs(i)*520,-450+hs(i+7)*200,1.3,'#fff',`opacity:${f2(nt*(.5+.5*Math.sin(lt*3+i)))}`);
  const mt=(x0,pk,col,sn,seed)=>{let d=`M${x0-170} 0`;const n=6;for(let i=0;i<=n;i++){const x=x0-170+i*340/n,y=-pk*Math.sin(Math.PI*i/n)*(.7+hs(seed+i)*.3);d+=` L${f1(x)} ${f1(y)}`;}d+=` L${x0+170} 0Z`;
    return P(d,`fill:${col};${OL(2)}`)+P(`M${x0-60} ${f1(-pk*.62)} L${x0-30} ${f1(-pk*.78)} L${x0} ${f1(-pk*.96)} L${x0+34} ${f1(-pk*.8)} L${x0+64} ${f1(-pk*.6)} L${x0+30} ${f1(-pk*.66)} L${x0} ${f1(-pk*.58)} L${x0-28} ${f1(-pk*.68)}Z`,`fill:${sn};${OL(1.4)}`);};
  s+=G(dx*.3,-150+dy*.3,1,0,mt(-150,250,mixc('#9a8fb8','#3a3560',nt),'#ffffff',1)+mt(170,300,mixc('#8a7fa8','#332e58',nt),'#ffffff',4)+mt(10,190,mixc('#a99cc4','#423c6a',nt),'#f4f6fb',9));
  let g=Rc(-280,-150,560,360,mixc('#c9b98e','#5e5641',nt))+P('M-280 -150 L280 -150',ST(K.ink,2.2));
  for(let i=0;i<14;i++)g+=P(`M${f1(-260+hs(i)*520)} ${f1(-130+hs(i+2)*120)} q6 -10 12 0`,ST(mixc('#8a7a52','#3a3528',nt),2));
  const cr=o.crack||0;if(cr>0){const pts=[[-280,-60],[-190,-80],[-120,-50],[-40,-90],[30,-60],[110,-100],[190,-70],[280,-95]];let d='M'+pts.map(p=>p.join(' ')).join(' L');
    g+=DR(d,ST('#2a1f18',3+cr*9),cr)+DR(d,ST('#000',1.4),cr);}
  s+=G(dx,dy,1,0,g);
  const fall=o.fall||0,hx=[-190,-95,0,95,190];hx.forEach((x,i)=>{const down=fall>0&&hs(i+30)<fall+.05&&i%2===0;const y=-150+(i%2?20:0)+30;
    s+=G(x+dx*(1+i*.1),y+dy,.95,down?0:dx*.6,down?_tibRubble(.9,i):_tibHouse(.9,i));});
  s+=G(dx,-150+dy-4,1,0,_prayer(lt,150),1);
  const sn=o.snow||0;if(sn>0)for(let i=0;i<30;i++){const q=((lt*.25)+hs(i))%1;s+=Ci(-260+hs(i*3)*520+_osc(lt,.4,10,i),-450+q*500,2+hs(i)*2.5,'#fff',`opacity:${f2(sn*(1-sg(q,.85,1)))}`);}
  if(sh>0)for(let i=0;i<6;i++){const q=((lt*1.4)+i/6)%1;s+=Ci(-200+hs(i)*400,-150,10+q*30,'#b9ad8e',`opacity:${f2(sh*.55*(1-q))}`);}
  if(o.alt)s+=G(-170,-400,_ap(lt,.4,.35),0,Rc(-74,-30,148,60,'#fff',12,OL(2.4))+P('M-56 12 L-42 -12 L-30 4 L-22 -6 L-10 12Z',`fill:${K.blue};${OL(1.4)}`)+Tn(30,-6,'ALTITUD',10,800,{fill:'#555',ls:.08})+Tn(30,18,o.alt,20,800));
  return s;};
n2cat('plateau · Altiplano tibetano (tiembla, se agrieta, nieva)',lt=>G(0,250,.9,0,NX.plateau({shake:lt%6<3?1:0,crack:sg(lt%6,.5,2),fall:sg(lt%6,1,2),snow:lt%6>3?1:0,alt:'4.800 m'},lt)),'');

/* Choque de placas: la placa India empuja contra Asia, la corteza se pliega y se levantan el Himalaya y la meseta; con «stretch» la meseta se estira y se rompe
   o:{push (0-1), tension (0-1 brillo de tensión), stretch (0-1), labels (true)} · corte de unos 460×300 centrado */
NX.platecrash=(o={},lt)=>{const pu=o.push??EZ.io(sg(lt,.3,2.6)),te=o.tension||0,stv=o.stretch||0;let s='';
  const w=460,top=-40,ix=-230+pu*70;
  s+=Rc(-w/2,-150,w,110,'#bcd3f0',0);
  /* placa asiática (derecha) con relieve que crece */
  const hM=40+pu*110,hP=20+pu*70;
  let asia=`M${f1(ix+60)} ${top} Q${f1(ix+90)} ${f1(top-hM)} ${f1(ix+120)} ${f1(top-hM*.9)} L${f1(ix+150)} ${f1(top-hM*.7)} L${f1(ix+190)} ${f1(top-hP)} L230 ${f1(top-hP*.95)} L230 140 L${f1(ix+60)} 140Z`;
  s+=P(asia,'fill:#d6b98a;'+OL(2.4));
  for(let i=0;i<4;i++)s+=P(`M${f1(ix+70+i*8)} ${f1(top+10+i*20)} Q${f1(ix+130)} ${f1(top-hM*.4+i*24)} 230 ${f1(top+i*24-hP*.4)}`,ST('rgba(90,60,30,.35)',2));
  /* nieve en las cumbres */
  s+=P(`M${f1(ix+92)} ${f1(top-hM*.72)} Q${f1(ix+105)} ${f1(top-hM*1.0)} ${f1(ix+122)} ${f1(top-hM*.9)} L${f1(ix+140)} ${f1(top-hM*.72)}Z`,'fill:#fff;'+OL(1.4));
  /* placa india (izquierda) que entra por debajo */
  s+=P(`M-230 ${top} L${f1(ix+60)} ${top} Q${f1(ix+110)} ${top+30} ${f1(ix+160)} 120 L-230 120Z`,'fill:#c98a5a;'+OL(2.4));
  s+=P(`M-230 120 L${f1(ix+160)} 120 L230 140`,ST(K.ink,2));
  /* flechas de empuje */
  const ar=(x,y,dir,c)=>G(x,y,1,dir<0?180:0,P('M-34 0 L18 0 M6 -14 L22 0 L6 14',ST(c,7)));
  s+=ar(-150+_osc(lt,1.2,6),40,1,'#fff')+ar(150,40,-1,'rgba(255,255,255,.75)');
  if(te>0){for(let i=0;i<3;i++){const q=((lt*1.1)+i/3)%1;s+=Ci(ix+110,top+20,20+q*60,'none',`stroke:${K.red};stroke-width:${f1(4*(1-q))};opacity:${f2(te*(1-q))}`);}
    s+=G(ix+110,top+20,1,lt*80,spark4(14,K.red),te);}
  if(stv>0){const cx=ix+275,cy=top-hP*.95,gap=stv*26;
    s+=P(`M${f1(cx-gap/2)} ${f1(cy)} L${f1(cx-4)} ${f1(cy+40+stv*30)} L${f1(cx+4)} ${f1(cy+40+stv*30)} L${f1(cx+gap/2)} ${f1(cy)}Z`,'fill:#2a1f18;'+OL(1.6));
    s+=G(cx-40-stv*14,cy+22,1,180,P('M-26 0 L12 0 M2 -10 L14 0 L2 10',ST(K.red,6)),_ao(stv,0,.3))+G(cx+40+stv*14,cy+22,1,0,P('M-26 0 L12 0 M2 -10 L14 0 L2 10',ST(K.red,6)),_ao(stv,0,.3));}
  if(o.labels!==false){s+=G(-150,90,1,0,pill('placa India',{sz:13,w:800,fill:'#7a4a2a'}),_ao(lt,.2,.3))+G(170,100,1,0,pill('placa Euroasiática',{sz:13,w:800,fill:'#6b5434'}),_ao(lt,.3,.3));
    if(pu>.6)s+=G(ix+118,f1(top-hM-34),1,0,pill('Himalaya',{sz:12,w:800,fill:K.ink}),_ao(pu,.6,.25));
    if(pu>.8)s+=G(Math.min(180,ix+215),f1(top-hP-30),1,0,pill('meseta del Tíbet',{sz:12,w:800,fill:'url(#gRP)'}),_ao(pu,.8,.2));}
  return clipG(s,Rc(-w/2,-260,w,410,'#000',16))+Rc(-w/2,-260,w,410,'none',16,OL(2.6));};
n2cat('platecrash · Choque de placas: India contra Asia (Himalaya y Tíbet)',lt=>{const t=lt%7;return NX.platecrash({push:EZ.io(sg(t,.3,3)),tension:sg(t,3,3.5)*(1-sg(t,4.5,5)),stretch:sg(t,5,6)},t);});

/* Aire con menos oxígeno en altura: dos frascos con moléculas de O₂ (nivel del mar / altura) · o:{alt ('4.800 m'), at} */
NX.thinair=(o={},lt)=>{const at=o.at??.2;let s='';
  const jar=(x,n,lab,c,a)=>{let j=Rc(-70,-130,140,180,'rgba(255,255,255,.55)',18,OL(2.4))+Rc(-50,-146,100,18,'#9a9a9a',4,OL(2));
    for(let i=0;i<n;i++){const px=-50+hs(i*5+n)*100+_osc(lt,.5+hs(i)*.4,4,i),py=-112+hs(i*7+n)*150+_osc(lt,.4,4,i+2);j+=G(px,py,1,0,Ci(-5,0,6.5,K.red,OL(1.2))+Ci(5,0,6.5,K.red,OL(1.2)),_ao(lt,a+i*.03,.2));}
    return G(x,0,_ap(lt,a-.1,.35),0,j+G(0,80,1,0,pill(lab,{sz:13,w:800,fill:c})));};
  s+=jar(-110,22,'nivel del mar',K.blue,at)+jar(110,12,o.alt||'4.800 m',K.red,at+.5);
  s+=G(0,-180,1,0,Tn(0,0,'O₂',30,800,{fill:K.red}),_ao(lt,at,.3));
  s+=G(110,-180,1,0,pill('menos oxígeno',{sz:13,w:800,fill:K.ink}),_ao(lt,at+1.2,.3));
  return s;};
n2cat('thinair · Menos oxígeno en altura (frascos con O₂)',lt=>NX.thinair({},lt%5));

/* Réplicas: tira de sismógrafo que se desplaza con muchos picos pequeños y un contador · o:{n (total), dur, label} */
NX.aftershocks=(o={},lt)=>{const n=o.n||400,dur=o.dur||2.2,w=440;let s=Rc(-w/2-10,-80,w+20,160,'#fff',12,OL(2.2))+P(`M${-w/2} 0 L${w/2} 0`,ST('rgba(20,18,18,.15)',1.2));
  let d=`M${-w/2} 0`;const N=160;for(let i=0;i<=N;i++){const x=-w/2+i*w/N,k=i+Math.floor(lt*40),spike=hs(k)>.86?(18+hs(k+3)*44):3,a=spike*Math.sin(k*2.3)*(i/N);d+=` L${f1(x)} ${f1(a)}`;}
  s+=P(d,ST(K.red,2));s+=Ci(w/2-6,0,6,K.red);
  const v=Math.round(n*EZ.out(sg(lt,.2,.2+dur)));
  s+=G(0,124,1,0,Rc(-120,-30,240,60,K.ink,14)+Tn(-4,12,'+'+_fmt(v),32,800,{fill:'#fff',a:'end'})+Tn(6,10,o.label||'réplicas',18,700,{fill:'#ff8fab',a:'start'}),_ao(lt,.1,.3));
  return s;};
n2cat('aftershocks · Réplicas: sismógrafo con contador',lt=>NX.aftershocks({n:413},lt%5));

/* ===== Recursos nuevos · diario de las leyendas de Europa (23/10/2026) ===== */
/* Puente del Diablo (Martorell): gran arco gótico apuntado sobre el río, estribos romanos y arco del triunfo romano a un lado
   o:{build (0-1 el arco se levanta piedra a piedra), night (0-1), roman (0-1 resalta la base romana), cat (0-1 un gato cruza), label} · base del río y=0, ancho ~460 */
NX.devilbridge=(o={},lt)=>{const b=o.build??1,nt=o.night||0,ro=o.roman||0;let s='';
  s+=Rc(-260,-20,520,60,mixc('#7fb0e0','#26345e',nt));
  for(let i=0;i<6;i++){const x=-240+((i*90+lt*30)%480);s+=P(`M${f1(x)} 6 q8 -4 16 0`,ST('#fff',2,`opacity:${f2(.6-nt*.3)}`));}
  /* estribos */
  const stone=mixc('#d8c7a4','#6f6650',nt),stone2=mixc('#c4b08a','#5e5644',nt);
  s+=P('M-250 -20 L-250 -110 L-150 -110 L-120 -20Z',`fill:${stone};${OL(2.2)}`)+P('M250 -20 L250 -110 L150 -110 L120 -20Z',`fill:${stone};${OL(2.2)}`);
  if(ro>0)s+=P('M-250 -20 L-250 -110 L-150 -110 L-120 -20Z M250 -20 L250 -110 L150 -110 L120 -20Z',`fill:rgba(243,72,65,${f2(.35*ro)});${OL(3,K.red)}`);
  /* arco gótico apuntado (dos arcos de radio 220), piedra a piedra */
  const R=220,cxA=70,top=-110,apx=Math.atan2(-Math.sqrt(R*R-cxA*cxA),-cxA);const arcPt=(side,u)=>{const ang=Math.PI+(apx+2*Math.PI-Math.PI)*u;const x=cxA+R*Math.cos(Math.PI-(Math.PI-(apx+2*Math.PI))*0)};
  const pt=(side,u)=>{const a0=Math.PI,a1=Math.atan2(-Math.sqrt(R*R-cxA*cxA),-cxA)+2*Math.PI;const ang=a0+(a1-a0)*u;return [side*-(cxA+R*Math.cos(ang)),top+R*Math.sin(ang)];};
  const N=11;for(let side of [-1,1])for(let i=0;i<N;i++){const u=(i+.5)/N;if(u>b*1.02)continue;const [x,y]=pt(side,u),[x2,y2]=pt(side,Math.min(1,u+.02));
    s+=G(x,y,1,Math.atan2(y2-y,x2-x)*180/Math.PI,Rc(-11,-9,22,18,i%2?stone:stone2,2,OL(1.4)));}
  const apY=top-Math.sqrt(R*R-cxA*cxA);
  if(b>=1){s+=P(`M-150 ${top} A${R} ${R} 0 0 1 0 ${f1(apY)} A${R} ${R} 0 0 1 150 ${top}`,ST(K.ink,2.4));
    s+=P(`M-250 ${top-8} L-158 ${top-8} A${R+8} ${R+8} 0 0 1 0 ${f1(apY-10)} A${R+8} ${R+8} 0 0 1 158 ${top-8} L250 ${top-8}`,ST(mixc('#b69e70','#4a4232',nt),6));
    s+=G(0,apY-18,1,0,Rc(-14,-30,28,30,stone,2,OL(1.8))+P('M-16 -30 L0 -44 L16 -30Z',`fill:${stone2};${OL(1.6)}`));}
  /* arco del triunfo romano a la izquierda */
  s+=G(-210,-110,.55,0,Rc(-50,-120,100,120,stone2,2,OL(2))+P('M-22 0 L-22 -60 Q0 -86 22 -60 L22 0Z',`fill:${mixc('#9fb6cf','#1d2748',nt)};${OL(1.8)}`)+Rc(-56,-132,112,14,stone,2,OL(1.8)));
  if(o.cat!=null&&o.cat>0){const q=o.cat,[x,y0]=q<.5?pt(-1,q*2):pt(1,(1-q)*2),y=y0-18;
    s+=G(x,y,.55,0,catS({T:lt*3,c:'#2a2a2a'}));}
  if(o.label)s+=G(0,60,1,0,pill(o.label,{sz:14,w:800,fill:K.ink}),_ao(lt,.3,.3));
  return s;};
n2cat('devilbridge · Puente del Diablo (Martorell): arco gótico que se construye y gato que cruza',lt=>{const t=lt%7;return G(0,140,.95,0,NX.devilbridge({build:sg(t,.2,2.6),cat:t>3.5?sg(t,3.5,6.5):null,roman:t>2.6&&t<3.5?1:0},t));});

/* Diablillo de cuento (rojo, cuernos, cola y tridente), sin dar miedo · o:{emo:'smug'|'angry'|'shock', fork (true), T} · pies en y=0 */
NX.devil=(o={},lt)=>{const em=o.emo||'smug',T=lt,bob=_osc(T,.8,4),c='#e2264a',d='#9e1238';let s=El(0,2,46,8,'rgba(20,18,18,.16)');
  s+=P(`M28 -30 Q70 ${f1(-20+_osc(T,.6,10))} 66 -70 l12 -6 l-4 14Z`,ST(d,5)+';fill:none')+P('M64 -76 L78 -80 L72 -66Z',`fill:${d};${OL(1.4)}`);
  s+=G(0,bob,1,0,P('M-14 0 L-12 -24 M14 0 L12 -24',ST(K.ink,6))+El(0,-60,40,46,c,OL(2.4))+P('M-30 -92 Q-44 -126 -24 -132 Q-30 -112 -16 -100Z M30 -92 Q44 -126 24 -132 Q30 -112 16 -100Z',`fill:#f4eee2;${OL(1.8)}`)+
    (em==='angry'?P('M-24 -78 L-8 -70 M24 -78 L8 -70',ST(K.ink,4)):'')+El(-13,-64,6,em==='shock'?9:7,'#fff',OL(1.6))+El(13,-64,6,em==='shock'?9:7,'#fff',OL(1.6))+Ci(-12,-63,3,K.ink)+Ci(14,-63,3,K.ink)+
    (em==='smug'?P('M-16 -40 Q0 -28 18 -44',ST(K.ink,3.4)):em==='angry'?P('M-14 -34 Q0 -44 14 -34',ST(K.ink,3.4)):El(0,-36,7,9,'#5a0a1e',OL(1.6)))+P('M-8 -14 Q0 -6 8 -14 L0 4Z',`fill:${d}`));
  if(o.fork!==false)s+=G(-48,-40+bob,1,-8,P('M0 40 L0 -70',ST('#6b4a2e',5))+P('M-14 -70 L-14 -90 M0 -70 L0 -96 M14 -70 L14 -90 M-14 -70 L14 -70',ST('#9a9a9a',4)));
  return G(0,0,_ap(lt,0,.35),0,s);};
n2cat('devil · Diablillo de cuento (smug/angry/shock)',lt=>{const e=['smug','angry','shock'][Math.floor(lt/2)%3];return G(0,60,1.4,0,NX.devil({emo:e},lt%2));});

/* Calzada del Gigante: columnas de basalto hexagonales que bajan escalonadas hasta el mar · o:{rise (0-1 crecen), break (0-1 la calzada se rompe hacia el mar), top (true = vista desde arriba de hexágonos), label} · ancho ~480, base y=0 */
NX.causeway=(o={},lt)=>{let s='';const rise=o.rise??1,br=o.break||0;
  if(o.top){const r=26;for(let row=0;row<6;row++)for(let col=0;col<9;col++){const x=-200+col*r*1.5,y=-150+row*r*1.73+(col%2?r*.86:0),q=sg(rise*1.3-((row*9+col)/54)*.3,0,1);if(q<=0)continue;
      let d='';for(let k=0;k<6;k++){const a=Math.PI/3*k;d+=(k?'L':'M')+f1(x+Math.cos(a)*r*.96*q)+' '+f1(y+Math.sin(a)*r*.96*q);}s+=P(d+'Z',`fill:${['#4a4a52','#56565e','#3e3e46'][(row+col)%3]};${OL(1.6,'#1a1a20')}`);}
    return s;}
  s+=Rc(-270,-40,540,90,'#5d8fc8');for(let i=0;i<7;i++){const x=-250+((i*80+lt*24)%520);s+=P(`M${f1(x)} -20 q10 -5 20 0`,ST('#fff',2,'opacity:.6'));}
  const n=16;for(let i=0;i<n;i++){const x=-240+i*30,h0=210-i*11+hs(i)*24,h=h0*EZ.out(sg(rise*1.4-i/n*.4,0,1)),gone=br>0&&i>n*(1-br)?1:0;if(h<=1)continue;
    const dy=gone?(br*120):0,rot=gone?br*30*(hs(i)>.5?1:-1):0;
    s+=G(x,dy,1,rot,P(`M-14 -10 L-14 ${f1(-10-h)} L0 ${f1(-18-h)} L14 ${f1(-10-h)} L14 -10Z`,`fill:${['#4a4a52','#5a5a62'][i%2]};${OL(1.6,'#1a1a20')}`)+P(`M-14 ${f1(-10-h)} L0 ${f1(-2-h)} L14 ${f1(-10-h)} L0 ${f1(-18-h)}Z`,`fill:#7a7a84;${OL(1.4,'#1a1a20')}`)+P(`M0 ${f1(-2-h)} L0 -10`,ST('rgba(0,0,0,.3)',1.4)),gone?1-sg(br,.6,1)*.6:1);}
  if(o.label)s+=G(0,80,1,0,pill(o.label,{sz:14,w:800,fill:K.ink}),_ao(lt,.3,.3));
  return s;};
n2cat('causeway · Calzada del Gigante (columnas que crecen, se rompen o vista de hexágonos)',lt=>{const t=lt%8;return t<4?G(0,120,1,0,NX.causeway({rise:sg(t,0,1.6),break:sg(t,2.2,3.6)},t)):NX.causeway({top:true,rise:sg(t,4,5.5)},t);});

/* Gigante de cuento (barba pelirroja, túnica verde); con baby:true lleva gorrito y chupete de bebé · o:{baby, c, beard, emo:'ok'|'scared', T} · pies en y=0, alto ~300 */
NX.giant=(o={},lt)=>{const c=o.c||'#2b7a3e',bd=o.beard||'#c4521a',bb=o.baby,sc=o.emo==='scared',sh=sc?_osc(lt,8,3):0;let s=El(0,4,90,12,'rgba(20,18,18,.16)');
  s+=G(sh,0,1,0,P('M-30 0 L-26 -70 M30 0 L26 -70',ST('#5a3119',16))+P('M-70 -60 Q-80 -200 0 -210 Q80 -200 70 -60Z',`fill:${bb?'#f6f2ea':c};${OL(2.6)}`)+
    (bb?P('M-70 -60 Q0 -40 70 -60',ST('#e7a0b4',8)):Rc(-70,-110,140,14,'#6b4a2e',4,OL(1.8)))+P('M-66 -170 Q-110 -120 -96 -84 M66 -170 Q110 -120 96 -84',ST(bb?'#f6f2ea':c,20))+
    Ci(0,-250,52,'#f6c9a4',OL(2.6))+(bb?'':P('M-50 -244 Q-54 -180 0 -176 Q54 -180 50 -244 Q30 -220 0 -224 Q-30 -220 -50 -244Z',`fill:${bd};${OL(2)}`))+
    El(-18,-262,6,sc?9:7,'#fff',OL(1.6))+El(18,-262,6,sc?9:7,'#fff',OL(1.6))+Ci(-17,-261,3,K.ink)+Ci(19,-261,3,K.ink)+
    (bb?Ci(0,-232,10,'#7fd3ff',OL(1.8))+Rc(-4,-226,8,8,'#7fd3ff',2)+P('M-58 -268 Q-60 -320 0 -324 Q60 -320 58 -268 Q30 -290 0 -292 Q-30 -290 -58 -268Z',`fill:#bcd3f0;${OL(2)}`)+Ci(0,-326,9,'#ff8fab',OL(1.6)):
      P('M-50 -280 Q-40 -312 0 -308 Q40 -312 50 -280',ST(bd,12))+(sc?El(0,-218,8,10,'#5a1a1a'):'')));
  return G(0,0,_ap(lt,0,.4),0,s);};
n2cat('giant · Gigante de cuento (y disfrazado de bebé)',lt=>G(0,170,.9,0,NX.giant({baby:Math.floor(lt/2.5)%2===1},lt%2.5)));

/* Castillo de Wawel sobre su colina con la cueva del dragón al pie, junto al río · o:{statue (0-1 aparece la estatua de bronce que echa fuego), fire (0-1), bones (0-1 huesos colgados en la puerta, vista de cerca aparte)} · base y=0, ancho ~480 */
NX.wawel=(o={},lt)=>{let s='';
  s+=Rc(-260,-10,520,50,'#7fb0e0');
  s+=P('M-260 -10 L-260 -150 Q-120 -230 60 -200 Q190 -170 260 -120 L260 -10Z',`fill:#7bbf6a;${OL(2.4)}`);
  /* murallas y torres */
  s+=Rc(-200,-300,330,110,'#efe4cf',2,OL(2.2));for(let i=0;i<11;i++)s+=Rc(-200+i*30,-312,16,14,'#efe4cf',1,OL(1.6));
  s+=Rc(-170,-380,50,200,'#efe4cf',2,OL(2.2))+P('M-176 -380 L-145 -430 L-114 -380Z',`fill:#3f9b4f;${OL(2)}`);
  s+=Rc(60,-360,46,170,'#efe4cf',2,OL(2.2))+P('M54 -360 Q83 -420 112 -360Z',`fill:#c9a227;${OL(2)}`)+Ci(83,-430,6,'#c9a227',OL(1.4));
  for(let i=0;i<5;i++)s+=P(`M${-110+i*36} -230 L${-110+i*36} -256 Q${-100+i*36} -268 ${-90+i*36} -256 L${-90+i*36} -230Z`,`fill:#2a2f45;${OL(1.2)}`);
  /* cueva */
  s+=P('M120 -10 L120 -60 Q150 -96 180 -60 L180 -10Z','fill:#1a1410;'+OL(2.2));
  const st=o.statue||0;if(st>0){s+=G(210,-10,.42*EZ.back(cl(st)),0,NX.dragon({bronze:true,fire:o.fire||0},lt));}
  return s;};
n2cat('wawel · Castillo de Wawel con la cueva del dragón (y la estatua que echa fuego)',lt=>G(0,170,.9,0,NX.wawel({statue:sg(lt%5,1,1.5),fire:lt%5>2?1:0},lt)));

/* Dragón de cuento (verde) o estatua de bronce · o:{bronze, fire (0-1 echa fuego), bloat (0-1 tripa que se hincha), drink (true: bebe agua), burst (0-1 revienta), emo:'ok'|'hot'} · pies en y=0, mira a la derecha */
NX.dragon=(o={},lt)=>{const br=o.bronze,c=br?'#8a6a3a':'#4fbf63',d=br?'#5e4520':'#2b7a3e',bl=o.bloat||0,bu=o.burst||0;let s='';
  if(bu>0){for(let i=0;i<14;i++){const a=hs(i)*Math.PI*2,r=bu*180;s+=G(Math.cos(a)*r,-90+Math.sin(a)*r,1,a*60,Rc(-10,-6,20,12,i%2?c:d,3,OL(1.4)),1-sg(bu,.5,1));}
    s+=G(0,-90,1+bu*2,0,spark4(40,'#f6d36b'),1-sg(bu,.3,.8));return s;}
  s+=El(0,4,110,12,'rgba(20,18,18,.16)');
  s+=P(`M-80 -60 Q-170 ${f1(-40+_osc(lt,.5,10))} -190 -110 L-176 -100 L-196 -130Z`,`fill:${c};${OL(2.4)}`);
  const bw=80+bl*40,bh=56+bl*36;
  s+=P('M-40 0 L-40 -40 M40 0 L40 -40',ST(d,16))+El(0,-70,bw,bh,c,OL(2.6))+El(0,-60,bw*.62,bh*.6,br?'#a8874f':'#c8eeb0');
  for(let i=0;i<4;i++)s+=P(`M${-60+i*30} ${f1(-70-bh)} l12 -24 l12 24Z`,`fill:${d};${OL(1.6)}`);
  s+=P(`M${f1(bw*.7)} -100 Q${f1(bw*.9+20)} -160 ${f1(bw*.9+70)} -170`,ST(c,30))+G(bw*.9+90,-176,1,0,El(0,0,44,30,c,OL(2.6))+El(30,6,18,14,br?'#a8874f':'#c8eeb0',OL(1.6))+Ci(40,0,3,K.ink)+Ci(-6,-12,9,'#fff',OL(1.6))+Ci(-4,-12,4,K.ink)+P('M-20 -26 L-30 -50 L-8 -30Z',`fill:${d};${OL(1.4)}`)+
    (o.emo==='hot'?P('M-24 -30 L-4 -24',ST(K.ink,3))+P('M50 26 q-6 10 -14 4',ST('#ff6b3d',4)):''));
  if(bl>0)for(let i=0;i<3;i++){const q=((lt*1.2)+i/3)%1;s+=G(-20+i*20,-70-bh-q*40,1,0,P('M0 0 q8 -8 0 -16 q-8 -8 0 -16',ST('#ff8a3d',4,`opacity:${f2(bl*(1-q))}`)));}
  const fi=o.fire||0;if(fi>0){const fx=bw*.9+128,fy=-172;for(let i=0;i<10;i++){const q=((lt*2.4)+i/10)%1,len=fi*(60+q*180);s+=Ci(fx+len,fy+_osc(lt,3,8,i)+q*10,10+q*26,['#ffd23f','#ff8a3d','#f34841'][i%3],`opacity:${f2(fi*(1-q)*.9)}`);}}
  if(o.drink){s+=P(`M${f1(bw*.9+130)} -150 Q${f1(bw*.9+150)} -60 ${f1(bw*.9+160)} 0`,ST('#7fb0e0',8,'stroke-dasharray:10 8;stroke-dashoffset:'+f1(-lt*60)));}
  return G(0,0,1,0,s);};
n2cat('dragon · Dragón (se hincha, bebe, revienta; o estatua de bronce que echa fuego)',lt=>{const t=lt%8;return G(-40,150,.7,0,t<6?NX.dragon({bloat:sg(t,1,4),drink:t>2&&t<5,emo:t>1?'hot':'ok',fire:0},t):NX.dragon({burst:sg(t,6,7.5)},t));});

/* Oveja (cordero) rellena de azufre, con costuras · o:{sulfur (true)} · pies en y=0 */
NX.sulfursheep=(o={},lt)=>{let s=El(0,4,60,8,'rgba(20,18,18,.16)')+P('M-30 0 L-30 -26 M-10 0 L-10 -24 M14 0 L14 -24 M34 0 L34 -26',ST(K.ink,6));
  for(let i=0;i<9;i++)s+=Ci(-40+(i%5)*20,-50-Math.floor(i/5)*20+_osc(lt,.6,1,i),20,'#fbfbf6',OL(1.8));
  s+=G(56,-60,1,0,El(0,0,20,16,'#3a3a3a',OL(1.8))+Ci(6,-4,3,'#fff')+El(-10,-14,8,5,'#3a3a3a',OL(1.4)));
  if(o.sulfur!==false){s+=P('M-30 -40 l8 6 l8 -6 l8 6 l8 -6 l8 6',ST(K.ink,2))+G(-44,-86,1,0,pill('S',{sz:14,w:800,fill:'#d6b400',tc:K.ink}))+[0,1,2].map(i=>Ci(-20+i*14,-36+_osc(lt,.8,2,i),3,'#f6d200',OL(1))).join('');}
  return G(0,0,_ap(lt,0,.35),0,s);};
n2cat('sulfursheep · Oveja rellena de azufre',lt=>G(0,60,1.6,0,NX.sulfursheep({},lt)));

/* Huesos colgados de una cadena (los «huesos del dragón» de la catedral de Wawel) · o:{q ('?' con interrogante)} · cuelgan desde y=0 */
NX.bones=(o={},lt)=>{let s=P('M0 0 L0 40',ST('#6f6f6f',4,'stroke-dasharray:6 4'));const sw=_osc(lt,.4,4);
  const bone=(len,w)=>P(`M${-len/2} 0 L${len/2} 0`,ST('#efe6d2',w))+Ci(-len/2,-w*.35,w*.45,'#efe6d2',OL(1.4))+Ci(-len/2,w*.35,w*.45,'#efe6d2',OL(1.4))+Ci(len/2,-w*.35,w*.45,'#efe6d2',OL(1.4))+Ci(len/2,w*.35,w*.45,'#efe6d2',OL(1.4))+P(`M${-len/2} 0 L${len/2} 0`,ST('#efe6d2',w-3));
  s+=G(0,40,1,sw,G(0,30,1,80,bone(120,22))+G(-30,70,1,20,bone(160,26))+G(36,100,1,-30,bone(90,18)));
  if(o.q)s+=G(90,60,1,0,Ts(0,0,'?',70,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),_ao(lt,.3,.3));
  return s;};
n2cat('bones · Huesos colgados (¿del dragón?)',lt=>G(0,-100,1.3,0,NX.bones({q:true},lt)));

/* ===== Recursos nuevos · noticia del iPhone Duo, el primer iPhone plegable (23/10/2026) ===== */
/* pantalla interior/exterior genérica (fondo de colores + iconos), sin marcas */
function _foldWall(x,y,w,h,lt,o={}){let s=Rc(x,y,w,h,o.bg||'#1d2350',10);
  s+=Ci(x+w*.25,y+h*.3,w*.32,'#ec2f72',`opacity:.55`)+Ci(x+w*.8,y+h*.62,w*.38,'#f5562a',`opacity:.5`)+Ci(x+w*.45,y+h*.9,w*.3,'#2a37d7',`opacity:.7`);
  const cols=o.cols||4,rows=o.rows||5,gx=w/cols;const ic=['#ffd86b','#7fd3ff','#a6e3a1','#ff8fab','#fff','#c9a7ff'];
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const q=_ap(lt,.25+(r*cols+c)*.025,.3);if(q<=0)continue;
    s+=G(x+gx*(c+.5),y+h*.24+r*gx*1.05,q,0,Rc(-gx*.3,-gx*.3,gx*.6,gx*.6,ic[(r*3+c)%6],gx*.16,OL(1)));}
  if(o.clock)s+=Tn(x+w/2,y+h*.15,o.clock,w*.2,300,{fill:'#fff'});
  return clipG(s,Rc(x,y,w,h,'#000',10));}
/* Móvil plegable tipo libro (de frente): cerrado = pantalla exterior; abierto = pantalla interior doble.
   o:{open 0-1, xray 0-1 (dos baterías + bisagra), touch 0-1 (huella en el botón lateral), dims 0-1 (cotas 5,4″ / 7,6″), crease (0-1 marca del pliegue), w (ancho de una mitad, 120), h (260), clock} · centrado en (0,0) */
NX.foldphone=(o={},lt)=>{const w=o.w||120,h=o.h||260,op=cl(o.open??0),th=Math.PI*(1-EZ.io(op)),hx=lerp(w/2,0,EZ.io(op)),xr=o.xray||0;let s='';
  const L=hx-w,cs=Math.cos(th),xe=hx+w*cs;
  s+=El(0,h/2+18,w*(1+op)*.9,10,'rgba(20,18,18,.16)');
  /* mitad izquierda (fija): marco + pantalla interior */
  s+=Rc(L-6,-h/2-6,w+6,h+12,K.ink,16);
  s+=_foldWall(L,-h/2,w,h,lt,{cols:3,rows:5});
  /* mitad derecha que gira alrededor de la bisagra */
  const x0=Math.min(hx,xe),pw=Math.abs(xe-hx),sk=Math.sin(th)*14;
  if(pw>1){const fr=`M${f1(hx)} ${-h/2-6} L${f1(xe+(cs>0?6:-6))} ${f1(-h/2-6-sk)} L${f1(xe+(cs>0?6:-6))} ${f1(h/2+6+sk)} L${f1(hx)} ${h/2+6}Z`;
    s+=P(fr,`fill:${K.ink}`);
    if(cs>=0){s+=clipG(_foldWall(hx-w,-h/2,2*w,h,lt,{cols:6,rows:5}),P(`M${f1(hx)} ${-h/2} L${f1(xe)} ${f1(-h/2-sk)} L${f1(xe)} ${f1(h/2+sk)} L${f1(hx)} ${h/2}Z`,'#000'));
      s+=P(`M${f1(hx)} ${-h/2} L${f1(xe)} ${f1(-h/2-sk)} L${f1(xe)} ${f1(h/2+sk)} L${f1(hx)} ${h/2}Z`,`fill:rgba(0,0,0,${f2(.45*Math.sin(th))})`);}
    else{/* cara exterior (pantalla de fuera) */
      s+=clipG(_foldWall(xe,-h/2,pw,h,lt,{cols:3,rows:4,bg:'#2b1d4a',clock:o.clock||'10:00'}),P(`M${f1(hx)} ${-h/2} L${f1(xe)} ${f1(-h/2-sk)} L${f1(xe)} ${f1(h/2+sk)} L${f1(hx)} ${h/2}Z`,'#000'));
      s+=P(`M${f1(hx)} ${-h/2} L${f1(xe)} ${f1(-h/2-sk)} L${f1(xe)} ${f1(h/2+sk)} L${f1(hx)} ${h/2}Z`,`fill:rgba(0,0,0,${f2(.4*Math.sin(th))})`);
      if(pw>w*.8)s+=Ci(xe+pw*.5,-h/2+14,4.5,'#000');}}
  /* pliegue */
  if(op>.6)s+=P(`M${f1(hx)} ${-h/2} L${f1(hx)} ${h/2}`,ST('rgba(255,255,255,.25)',2,`opacity:${f2((o.crease??.6)*sg(op,.6,1))}`));
  /* botón lateral con huella */
  const bx=op>.5?xe+6:L-6;s+=Rc(bx-3,-h/2+40,6,40,'#3a3a3a',3);
  if(o.touch){const q=o.touch;s+=G(bx,-h/2+60,1,0,Ci(0,0,26*q,'rgba(255,46,99,.25)')+G(0,0,.5*q,0,NX.fingerprint({glow:1},lt)));}
  /* rayos X: dos baterías y bisagra */
  if(xr>0){const bw=w*.62,bh=h*.48,ofs=op>.5?[L+w/2,hx+w/2]:[0,0];
    s+=Rc(L-6,-h/2-6,(op>.5?2*w:w)+12,h+12,`rgba(10,14,40,${f2(.78*xr)})`,16);
    (op>.5?ofs:[0]).forEach((cx,i)=>{s+=G(cx,10,_ap(lt,.1+i*.25,.35)*xr,0,Rc(-bw/2,-bh/2,bw,bh,'#3f9b4f',10,OL(2,'#a6e3a1'))+P('M6 -30 L-14 4 L0 4 L-8 30 L16 -6 L2 -6Z','fill:#fff')+Tn(0,bh/2+20,'batería '+(i+1),12,800,{fill:'#a6e3a1'}));});
    if(op>.5)s+=G(hx,0,xr,0,Rc(-7,-h/2+10,14,h-20,'#9aa3b8',6,OL(1.6,'#fff'))+[...Array(7)].map((_,i)=>Ci(0,-h/2+30+i*(h-60)/6,4,'#fff')).join(''));}
  /* cotas */
  if(o.dims){const q=EZ.out(cl(o.dims)),X0=op>.5?L:-w/2,X1=op>.5?hx+w:w/2,lab=op>.5?'7,6″':'5,4″';
    s+=DR(`M${f1(X0+10)} ${h/2-10} L${f1(X1-10)} ${-h/2+10}`,ST('#fff',3,'stroke-dasharray:6 6'),q);
    if(q>.6)s+=G((X0+X1)/2,0,_ap(cl((q-.6)/.4),0,1),0,pill(lab,{sz:26,w:800,fill:'url(#gRP)'}));}
  return s;};
n2cat('foldphone · Móvil plegable tipo libro (se abre, cotas, rayos X con dos baterías, huella)',lt=>{const t=lt%9;const op=t<1?0:t<2.4?sg(t,1,2.4):t<7?1:1-sg(t,7,8.4);return NX.foldphone({open:op,dims:t>2.6&&t<4.4?sg(t,2.6,3.4):0,xray:t>4.6&&t<6.8?sg(t,4.6,5):0,touch:t<1?sg(t,.1,.6):0},t);});

/* Huella dactilar (crestas concéntricas) · o:{glow 0-1, scan 0-1 (línea que barre), c} · centro (0,0), radio ~44 */
NX.fingerprint=(o={},lt)=>{const c=o.c||(o.glow?'#ff2e63':K.ink);let s='';
  for(let i=0;i<7;i++){const r=8+i*6.2,a0=-200+hs(i)*30,a1=20-hs(i+3)*30;const p0=[r*Math.cos(a0*Math.PI/180),r*Math.sin(a0*Math.PI/180)],p1=[r*Math.cos(a1*Math.PI/180),r*Math.sin(a1*Math.PI/180)];
    s+=DR(`M${f1(p0[0])} ${f1(p0[1]+6)} A${f1(r)} ${f1(r*1.15)} 0 1 1 ${f1(p1[0])} ${f1(p1[1]+6)}`,ST(c,3.2),EZ.out(sg(lt,i*.05,i*.05+.4)));}
  s+=P('M-4 6 q4 -10 8 0',ST(c,3));
  if(o.glow)s=Ci(0,0,52+3*Math.sin(lt*5),'rgba(255,46,99,.14)')+s;
  if(o.scan!=null){const y=lerp(-44,50,cl(o.scan));s+=P(`M-50 ${f1(y)} L50 ${f1(y)}`,ST('#7fd3ff',3,'opacity:.9'));}
  return s;};
n2cat('fingerprint · Huella dactilar (lector de huella)',lt=>G(0,0,2,0,NX.fingerprint({glow:1,scan:(lt%2)/2},lt%4)));

/* Visto de lado: el móvil se pliega y la pantalla flexible forma una gota dentro de la bisagra
   o:{fold 0-1 (0 abierto plano, 1 cerrado), thick (texto de grosor al cerrar, p. ej. '11 mm'), loop (resalta la gota)} · bisagra en (0,0) */
NX.foldside=(o={},lt)=>{const f=EZ.io(cl(o.fold??0)),ang=180*(1-f),L=200,T=10;let s='';
  /* mitad izquierda fija (horizontal) */
  s+=Rc(-L,-T,L,T*2,'#3a3a46',6,OL(2))+Rc(-L+6,-T-4,L-12,4,'#7fd3ff',2);
  /* mitad derecha girando */
  const a=(180-ang)*Math.PI/180;
  s+=G(0,0,1,-(180-ang),Rc(0,-T,L,T*2,'#3a3a46',6,OL(2))+Rc(6,-T-4,L-12,4,'#7fd3ff',2));
  /* gota de la pantalla en la bisagra */
  const r=lerp(4,22,f);s+=P(`M${f1(-r*.9)} ${-T-2} C${f1(-r*1.6)} ${f1(-T-2-r*2.2)} ${f1(r*1.6)} ${f1(-T-2-r*2.2)} ${f1(r*.9)} ${-T-2}`,ST(o.loop?'#ff2e63':'#7fd3ff',4));
  s+=Ci(0,0,13,'#9aa3b8',OL(2));for(let i=0;i<6;i++){const q=i*60+lt*90;s+=P(`M${f1(9*Math.cos(q*Math.PI/180))} ${f1(9*Math.sin(q*Math.PI/180))} L${f1(13*Math.cos(q*Math.PI/180))} ${f1(13*Math.sin(q*Math.PI/180))}`,ST(K.ink,2));}
  if(o.thick&&f>.95){s+=G(-L-26,-T*2,_ap(sg(f,.95,1),0,1),0,P(`M0 ${-T*2+4} L0 ${T*2+16} M-8 ${-T*2+4} L8 ${-T*2+4} M-8 ${T*2+16} L8 ${T*2+16}`,ST(K.ink,2.4))+G(-50,8,1,0,pill(o.thick,{sz:16,w:800})));}
  return s;};
n2cat('foldside · Plegado de lado: la pantalla forma una gota en la bisagra',lt=>{const t=lt%6;return G(80,40,1,0,NX.foldside({fold:t<3?sg(t,.3,2.6):1-sg(t,4,5.6),thick:'11 mm',loop:t>2.6&&t<4},t));});

/* Cristal rígido frente a lámina flexible: se doblan los dos; el cristal se raja y la lámina con píxeles se curva sin romperse
   o:{bend 0-1, labels (true)} · centro (0,0) */
NX.flexscreen=(o={},lt)=>{const b=cl(o.bend??0);let s='';
  /* izquierda: cristal */
  const bg=Math.min(b,.35)*1.0;const yA=-bg*60;
  s+=G(-130,0,1,0,P(`M-90 0 Q0 ${f1(yA*2)} 90 0 L90 14 Q0 ${f1(yA*2+14)} -90 14Z`,`fill:rgba(190,225,255,.75);${OL(2.4)}`));
  if(b>.35){const q=sg(b,.35,.55);s+=G(-130,yA,1,0,DR('M-6 -6 L4 4 L-4 10 L6 20 M4 4 L18 0 M-4 10 L-18 16',ST(K.red,3),q)+G(0,-40,_ap(q,0,1),0,pill('¡crac!',{sz:15,w:800,fill:K.red})));}
  /* derecha: lámina con píxeles */
  const yB=-b*90;let px='';
  for(let i=0;i<13;i++){const u=(i+.5)/13,x=-90+u*180,y=yB*4*u*(1-u)*1;const ang=Math.atan(yB*4*(1-2*u)/180)*180/Math.PI;
    px+=G(x,y,1,ang,Rc(-5,-11,4,7,'#f34841')+Rc(-1,-11,4,7,'#3f9b4f')+Rc(3,-11,4,7,'#2a37d7'));}
  s+=G(130,0,1,0,P(`M-90 0 Q0 ${f1(yB*2)} 90 0`,ST('#ffd86b',6))+px);
  if(o.labels!==false){s+=G(-130,70,1,0,pill('cristal rígido',{sz:14,w:800,fill:'#555'}),_ao(lt,.2,.3))+G(130,70,1,0,pill('lámina flexible',{sz:14,w:800,fill:'url(#gRP)'}),_ao(lt,.5,.3));}
  return s;};
n2cat('flexscreen · Cristal rígido que se raja frente a lámina flexible con píxeles',lt=>NX.flexscreen({bend:EZ.io(bel(lt%5,0,5)*1.2>1?1:bel(lt%5,0,5)*1.2)},lt%5));

/* Tienda online: el botón «Comprar» pasa a «Agotado», cronómetro de minutos y fecha de entrega
   o:{at (s en que se agota), mins (minutos que marca el cronómetro), date ('enero 2027'), price} · centro (0,0), ~300×380 */
NX.soldout=(o={},lt)=>{const at=o.at??1.2,q=sg(lt,at,at+.25);let s=G(0,0,_ap(lt,0,.4),0,Rc(-150,-190,300,380,'#fff',22,OL(2.6))+Rc(-150,-190,300,40,'#ececec',22)+Rc(-150,-160,300,10,'#ececec')+Ci(-128,-170,5,K.red)+Ci(-112,-170,5,K.yellow)+Ci(-96,-170,5,K.green2));
  s+=G(0,-70,.42,0,NX.foldphone({open:1},5),_ao(lt,.1,.3));
  if(o.price)s+=Tn(0,30,o.price,22,800,{fill:K.ink});
  const bc=q<1?mixc('#2a37d7','#8e8e8e',q):'#8e8e8e';s+=G(0,80,1+.06*bel(q,0,1),0,Rc(-110,-26,220,52,bc,26)+Tn(0,9,q<.5?'Comprar':'Agotado',22,800,{fill:'#fff'}));
  if(o.date&&lt>at+.5)s+=G(0,142,1,0,Tn(0,0,'Entrega estimada:',12,600,{fill:'#666'})+Tn(0,24,o.date,20,800,{fill:K.red}),_ao(lt,at+.5,.3));
  if(o.mins){const m=Math.round(o.mins*EZ.out(sg(lt,.2,at)));s+=G(128,-150,_ap(lt,.2,.3),0,Ci(0,0,34,K.ink,OL(2,'#fff'))+P(`M0 0 L${f1(22*Math.sin(m/60*2*Math.PI*6))} ${f1(-22*Math.cos(m/60*2*Math.PI*6))}`,ST('#fff',3))+Tn(0,52,m+' min',14,800));}
  if(q>=1)s+=G(0,-10,1,0,NX.stamp({type:'falso',text:'AGOTADO',r:-12,sz:30},lt-at-.15));
  return s;};
n2cat('soldout · Tienda online: «Comprar» → «Agotado», cronómetro y fecha de entrega',lt=>NX.soldout({at:1.6,mins:5,date:'enero 2027'},lt%5));

/* Estantería de una tienda que se queda casi vacía y cola de gente esperando · o:{left (cajas que quedan), n (personas en la cola), empty 0-1} · suelo en y=0 */
NX.fewstock=(o={},lt)=>{const tot=12,left=o.left??2,e=cl(o.empty??EZ.io(sg(lt,.4,2)));let s='';
  s+=Rc(-200,-260,260,250,'#f4eee2',6,OL(2.4));for(let r=0;r<3;r++)s+=Rc(-200,-180+r*80,260,8,'#9a4a2f',2,OL(1.4));
  for(let i=0;i<tot;i++){const r=Math.floor(i/4),c=i%4,keep=i<left;const gone=keep?0:sg(e,(i/tot)*.8,(i/tot)*.8+.2);if(gone>=1)continue;
    s+=G(-170+c*60+gone*260,-188+r*80-gone*40,1-gone*.4,0,Rc(-22,-50,44,50,'#fff',5,OL(1.8))+Rc(-12,-38,24,30,'#2b1d4a',4),1-gone);}
  s+=P('M-260 0 L260 0',ST(K.ink,2.4));
  const n=o.n||7;for(let i=0;i<n;i++){const ph=i*1.7;s+=G(110+i*40,0,.62,0,blobS({T:lt+ph,ph:ph+2}));}
  if(left<=3&&e>.9)s+=G(-70,-290,_ap(sg(e,.9,1),0,1),0,pill('pocas unidades',{sz:16,w:800,fill:K.red}));
  return s;};
n2cat('fewstock · Estantería que se vacía y cola de gente («pocas unidades»)',lt=>G(-30,140,1,0,NX.fewstock({left:2,n:6},lt%5)));

/* ---------------- ataque a una iglesia en Jordania (23/10/2026) ---------------- */
/* Iglesia ortodoxa de pueblo (piedra clara, cúpula azul con cruz, campanario, puerta de madera en arco) · o:{night (0-1 oscurece), open (0-1 abre la puerta), glow (luz dentro), mourn (0-1 gente de luto en fila a la entrada), tape (0-1 cinta policial delante), label} · suelo y=0, ancho ~440 */
NX.orthochurch=(o={},lt)=>{const nt=cl(o.night||0),op=cl(o.open||0),st='#ece3cf',sd='#d8ccb2';let s='';
  s+=El(0,6,230,14,'rgba(20,18,18,.16)');
  /* nave */
  s+=Rc(-150,-210,300,210,st,4,OL(2.4));for(let r=0;r<6;r++)s+=P(`M-150 ${-35*r-35} L150 ${-35*r-35}`,ST(sd,1.4));
  s+=P('M-162 -210 L0 -290 L162 -210Z',`fill:${sd};${OL(2.4)}`);
  /* cúpula sobre tambor */
  s+=Rc(-50,-330,100,46,st,3,OL(2.2))+[...Array(4)].map((_,i)=>Rc(-38+i*22,-322,10,26,'#2a3550',4)).join('');
  s+=P('M-58 -330 Q-58 -410 0 -414 Q58 -410 58 -330Z',`fill:#2f6fb8;${OL(2.4)}`)+P('M-30 -350 Q-24 -394 0 -400',ST('rgba(255,255,255,.45)',4));
  s+=P('M0 -414 L0 -470 M-16 -452 L16 -452 M-10 -436 L10 -432',ST('#c9a04a',5));
  /* campanario */
  s+=Rc(150,-330,70,330,st,3,OL(2.4))+P('M144 -330 L185 -380 L226 -330Z',`fill:#2f6fb8;${OL(2.2)}`)+P('M185 -380 L185 -412 M173 -400 L197 -400',ST('#c9a04a',4));
  s+=P('M165 -300 L165 -260 Q185 -282 205 -260 L205 -300 Q185 -316 165 -300Z','fill:#2a3550;'+OL(1.6));
  const sw=_osc(lt,.5,8*(o.bell||0));s+=G(185,-292,1,sw,P('M-8 0 Q-9 -14 0 -16 Q9 -14 8 0Z',`fill:#c9a04a;${OL(1.2)}`));
  /* ventanas en arco */
  const wl=nt>0?`rgba(255,200,110,${f2(.35+.6*nt*(o.glow??1))})`:'#2a3550';
  [-105,105].forEach(x=>s+=P(`M${x-16} -90 L${x-16} -140 Q${x} -162 ${x+16} -140 L${x+16} -90Z`,`fill:${wl};${OL(1.8)}`));
  s+=Ci(0,-238,20,wl,OL(2))+P('M0 -258 L0 -218 M-20 -238 L20 -238',ST(K.ink,1.6));
  /* puerta */
  s+=P('M-40 0 L-40 -110 Q0 -150 40 -110 L40 0Z',`fill:${nt>0?'rgba(255,190,100,.9)':'#2a1e14'};${OL(2.2)}`);
  {const e=f1(lerp(0,-34,op)),e2=f1(lerp(0,34,op));s+=P(`M-40 0 L-40 -110 Q${f1(lerp(-20,-37,op))} -130 ${e} ${f1(lerp(-136,-118,op))} L${e} 0Z`,`fill:#7a4a28;${OL(1.8)}`)+P(`M40 0 L40 -110 Q${f1(lerp(20,37,op))} -130 ${e2} ${f1(lerp(-136,-118,op))} L${e2} 0Z`,`fill:#7a4a28;${OL(1.8)}`);}
  s+=Rc(-60,0,120,8,'#bdb29a',2,OL(1.4));
  /* gente de luto */
  const mo=cl(o.mourn||0);if(mo>0){for(let i=0;i<6;i++){const x=-240+i*40+(i>2?360:0);s+=G(x,0,.6,0,blobS({T:lt*.2,ph:i*1.9+3,c:'#6b6b78'}),cl(mo*1.6-i*.12));}}
  if(nt>0)s=s+Rc(-900,-1400,1800,1420,'#0d1020',0,`opacity:${f2(nt*.45)}`)+[-105,105].map(x=>P(`M${x-16} -90 L${x-16} -140 Q${x} -162 ${x+16} -140 L${x+16} -90Z`,`fill:rgba(255,200,110,${f2(.5*nt)})`)).join('');
  const tp=cl(o.tape||0);if(tp>0)s+=G(0,-40,.62,0,NX.tape({text:'NO PASAR'},(lt-(o.tapeAt||0))));
  if(o.label)s+=G(0,60,1,0,pill(o.label,{sz:15,w:800,fill:K.ink}),cl((lt-.4)*3));
  return G(0,0,EZ.back(sg(lt,0,.4)),0,s);};
n2cat('orthochurch · Iglesia ortodoxa de pueblo (cúpula azul, campanario; noche, luto, cinta policial)',lt=>{const t=lt%9;return G(0,160,.9,0,NX.orthochurch({night:t>3?sg(t,3,4):0,mourn:t<3?sg(t,.3,1.4):1,tape:t>6?1:0,tapeAt:6,bell:1},t));});

/* Velas de luto que se encienden una a una (llama que tiembla) · o:{n (velas), gap, at (s entre velas), label} · base y=0 */
NX.candles=(o={},lt)=>{const n=o.n||5,gp=o.gap||62,at=o.at??.35;let s=Rc(-n*gp/2-20,-6,n*gp+40,16,'#3a3a40',5,OL(1.8));
  for(let i=0;i<n;i++){const x=-(n-1)*gp/2+i*gp,h=90+hs(i*3.7)*60,on=sg(lt,i*at,i*at+.25);
    s+=Rc(x-14,-h,28,h,'#f4efe2',5,OL(2))+P(`M${x-14} ${-h+10} q7 6 14 0`,ST('#d8d0bc',2));
    s+=P(`M${x} ${-h} L${x} ${-h-10}`,ST(K.ink,2));
    if(on>0){const fl=_osc(lt,3.1,2,i)+_osc(lt,5.3,1,i*2),fy=-h-12;s+=G(x,fy,on,fl*2,Ci(0,-16,26,'rgba(255,190,80,.18)')+P('M0 0 Q-11 -14 0 -34 Q11 -14 0 0Z','fill:#ffb02e;'+OL(1.4,'#d4761b'))+P('M0 -3 Q-5 -10 0 -20 Q5 -10 0 -3Z','fill:#fff3c4'));}}
  if(o.label)s+=G(0,56,1,0,pill(o.label,{sz:15,w:800,fill:K.ink}),cl((lt-n*at)*3));
  return s;};
n2cat('candles · Velas de luto que se encienden una a una',lt=>G(0,120,1,0,NX.candles({n:5,label:'en recuerdo'},lt%5)));

/* Bandera de Jordania ondeando (franjas negra, blanca y verde, triángulo rojo con estrella blanca de 7 puntas) · o:{w,h,half (0-1 baja a media asta)} */
NX.jordanflag=(o={},lt)=>{const w=o.w||210,h=o.h||124,hf=cl(o.half||0),fy=lerp(-330,-210,EZ.io(hf));let s=P('M0 70 L0 -340',ST('#8b8f98',7))+Ci(0,-344,7,'#c9a04a',OL(1.4))+Rc(-30,62,60,14,'#6b6f78',3,OL(2));
  const wv=k=>_osc(lt,.6,5,k*.9);const X=k=>4+k*w,Y=(k,v)=>fy+v*h+wv(k*3);
  const band=(v0,v1,c)=>{let d='M';for(let k=0;k<=6;k++)d+=`${f1(X(k/6))} ${f1(Y(k/6,v0))} L`;for(let k=6;k>=0;k--)d+=`${f1(X(k/6))} ${f1(Y(k/6,v1))} L`;return P(d.slice(0,-2)+'Z','fill:'+c);};
  s+=band(0,1/3,'#111')+band(1/3,2/3,'#fff')+band(2/3,1,'#0a8a3a');
  s+=P(`M4 ${f1(Y(0,0))} L${f1(X(.5))} ${f1(Y(.5,.5))} L4 ${f1(Y(0,1))}Z`,'fill:#ce1126');
  let st='';for(let k=0;k<14;k++){const a=-Math.PI/2+k*Math.PI/7,r=k%2?5:12;st+=(k?'L':'M')+f1(Math.cos(a)*r)+' '+f1(Math.sin(a)*r);}
  s+=G(X(.17),Y(.17,.5),1,0,P(st+'Z','fill:#fff'));
  s+=P(`M4 ${f1(Y(0,0))} ${[...Array(7)].map((_,k)=>`L${f1(X((k+1)/6>1?1:(k+1)/6))} ${f1(Y(Math.min(1,(k+1)/6),0))}`).join(' ')} L${f1(X(1))} ${f1(Y(1,1))} L4 ${f1(Y(0,1))}Z`,'fill:none;'+OL(2));
  if(o.label)s+=G(0,110,1,0,pill(o.label,{sz:14,w:800}),cl((lt-.6)*3));
  return G(0,0,_ao(lt,0,.3),0,s);};
n2cat('jordanflag · Bandera de Jordania (y a media asta)',lt=>G(0,150,1,0,NX.jordanflag({half:sg(lt%6,2,4),label:'Jordania'},lt%6)));

NX_CATALOG.push(..._N2);
