/* ---------- emociones ---------- */
const seg=(x,a,b)=>E.clamp((x-a)/(b-a));
const bell=(x,a,b)=>x<a||x>b?0:S(PI*(x-a)/(b-a));
const blinkAt=(p,t,t0)=>{const d=Math.abs(t-t0);if(d<.08)p.eye.lid=Math.max(p.eye.lid,1-d/.08);};
const brow=(p,l,m,r,o=1)=>{p.brow.o=Math.max(p.brow.o,o);p.brow.l+=l;p.brow.m+=m;p.brow.r+=r;};
const land=(p,u,amt=.16)=>{const q=Math.exp(-6*u)*Math.cos(u*16);p.sy=1-amt*q;p.sx=1+amt*.8*q;};
const COLS=['var(--grano)','var(--pipa)','var(--lenteja)','var(--garbanzo)','var(--cobalto)'];
const EMO=[
 {n:'Aparecer',d:['Pop con rebote','Cae y se aplasta'],L:[2.4,2.6],f:[
  (p,t,k)=>{const s=E.back(seg(t,0,.45))*(1-E.cubic(seg(t,2.0,2.25)));p.sx=p.sy=Math.max(.001,s);p.acc=14*Math.exp(-3*t)*S(t*14);if(t>.25&&t<.55)p.eye.t='wide';blinkAt(p,t,1.25);},
  (p,t,k)=>{if(t<.35){const u=t/.35;p.ty=-290*(1-u*u);p.sy=1.12;p.sx=.92;p.eye.t='wide';p.eye.s=1.2;p.eye.lid=0;p.mouth={t:'o',w:1,h:1.3};p.arms.l=p.arms.r=[150,10];}
   else if(t<.85){const u=seg(t,.35,.85);land(p,u,.34);if(u<.45){p.eye.t='squint';p.mouth={t:'grin',w:1.2,h:.5};}}
   else if(t>2.15){const u=seg(t,2.15,2.55);if(u<.3){const v=u/.3;p.sy=1-.2*S(PI*v);p.sx=1+.15*S(PI*v);}else{const v=(u-.3)/.7;p.ty=-320*v*v;p.sy=1.12;p.sx=.92;p.arms.l=p.arms.r=[160,0];}}
   p.acc=t<.35?-30:-30*Math.exp(-4*(t-.35))*Math.cos((t-.35)*12);blinkAt(p,t,1.5);}]},
 {n:'Reposo',d:['Respira y parpadea','Mira a los lados'],L:[3,4],f:[
  (p,t,k)=>{const b=S(TAU*t/3);p.sy=1+.04*b;p.sx=1-.03*b;p.acc=5*S(TAU*t/3+1);p.arms.l=p.arms.r=[12+5*b,0];blinkAt(p,t,1.1);blinkAt(p,t,2.6);},
  (p,t,k)=>{const lk=Math.max(-1,Math.min(1,2.2*S(TAU*t/4)));p.eye.px=lk;p.rot=-3*lk;p.tx=2*lk;p.mouth.ox=(p.mouth.ox||0)+2*lk;p.acc=-8*lk;p.arms.l=[12-4*lk,0];p.arms.r=[12+4*lk,0];blinkAt(p,t,1.98);blinkAt(p,t,3.95);}]},
 {n:'Hablar',d:['Explica gesticulando','Enumera con el brazo'],L:[2,2.4],f:[
  (p,t,k)=>{const o=Math.abs(S(t*11))*(.5+.5*Math.abs(S(t*3.1)));p.mouth={t:'grin',w:.95,h:.2+.95*o};p.sy=1+.03*o;p.sx=1-.02*o;brow(p,0,0,0,.9);const br=-4*Math.abs(S(t*2.2));brow(p,br,br,br,.9);p.arms.r=[45+35*S(t*4.2),-50+25*S(t*5.3)];p.acc=4*S(t*5);blinkAt(p,t,1.4);},
  (p,t,k)=>{const beat=Math.floor(t/.8),u=(t%.8)/.8,pu=Math.exp(-6*u);p.ty=-6*pu*AMP[k];p.sy=1+.05*pu;p.sx=1-.03*pu;p.mouth={t:'grin',w:1,h:.3+.8*Math.abs(S(t*10))};brow(p,-6*pu,-6*pu,-6*pu);p.arms.r=[150-10*pu,-25+15*pu];const hp=handPos(k,1,p.arms.r);p.fx.push({k:'txt',str:String(beat+1),x:hp[0]+14,y:hp[1]-20,s:.9+.5*pu,c:'var(--cobalto)'});p.acc=6*pu;}]},
 {n:'Alegría',d:['Saltitos felices','Bailecito con notas'],L:[1.6,2.4],f:[
  (p,t,k)=>{const u=(t%.8)/.8;if(u<.7){const v=u/.7;p.ty=-40*AMP[k]*S(PI*v);p.sy=1.06;p.sx=.96;}else land(p,(u-.7)/.3*.5,.2);p.eye.t='happy';p.mouth={t:'grin',w:1.15,h:1.25,tongue:true};p.blush=.9;p.arms.l=p.arms.r=[135+25*S(TAU*u),15];p.acc=-15*S(TAU*u);},
  (p,t,k)=>{const w=S(TAU*t/1.2),bb=Math.abs(S(TAU*t/.6));p.rot=9*w*AMP[k];p.tx=7*w;p.sy=1+.05*bb;p.sx=1-.03*bb;p.eye.t='happy';p.mouth={t:'smile',w:1.15,h:1.1};p.arms.l=[40+40*w,25];p.arms.r=[40-40*w,25];p.acc=-10*w;const g=GEO[k];
   for(const i of [0,1]){const q=((t/2.4)+i*.5)%1;p.fx.push({k:'note',x:(i?-1:1)*(g.hw+16)+6*S(q*TAU*2),y:g.top+14-55*q,o:S(PI*q)*1.4,s:.85+.3*q,r:10*S(q*TAU)});}}]},
 {n:'Risa',d:['Carcajada temblorosa','Se dobla de risa'],L:[1.8,2.6],f:[
  (p,t,k)=>{const sh=S(t*32);p.ty=-3*Math.abs(sh);p.sx=1+.035*sh;p.sy=1-.03*sh;p.rot=2.5*S(t*16);p.eye.t='squint';p.mouth={t:'grin',w:1.3,h:1.5,tongue:true};brow(p,-5,-5,-5);p.arms.l=p.arms.r=[-15,-60];p.blush=1;const g=GEO[k];
   const q=(t%.9)/.9,sd=Math.floor(t/.9)%2?1:-1;p.fx.push({k:'txt',str:'JA',x:sd*(g.hw+20),y:g.top+10-18*q,s:.7+.5*E.back(E.clamp(q*3)),o:1-E.clamp((q-.7)/.3),r:sd*12});},
  (p,t,k)=>{let ln;if(t<.3)ln=16*E.inOut(t/.3);else if(t<1.3)ln=16;else if(t<1.6)ln=16-30*E.inOut(seg(t,1.3,1.6));else if(t<2.3)ln=-14;else ln=-14*(1-E.inOut(seg(t,2.3,2.6)));
   const fw=t<1.45;p.rot=ln+3*S(t*30);p.eye.t=fw?'squint':'happy';p.mouth={t:'grin',w:1.35,h:1.6,tongue:true};p.blush=1;brow(p,-4,-4,-4);p.arms.l=p.arms.r=fw?[-15,-60]:[110,30];const g=GEO[k];
   if(t>1.4&&t<2.4)g.eyes.forEach(([ex,ey],i)=>{const sd=g.eyes.length===1?(i?1:-1):(i?1:-1);const q=((t-1.4)%.5)/.5;p.fx.push({k:'tear',x:ex+sd*(10+34*q),y:ey-22*S(PI*q)+14*q,s:.8,o:1-q});if(g.eyes.length===1)p.fx.push({k:'tear',x:ex-sd*(10+34*q),y:ey-22*S(PI*q)+14*q,s:.8,o:1-q});});}]},
 {n:'Tristeza',d:['Cabizbajo con lágrima','Llanto con nube'],L:[3,2],f:[
  (p,t,k)=>{const b=S(TAU*t/3);p.sy=.93+.015*b;p.sx=1.04-.01*b;p.rot=-2;p.eye.lid=Math.max(p.eye.lid,.38);p.eye.tilt=-16;p.eye.py=.75;p.eye.px=-.2;brow(p,4,-7,4);p.mouth={t:'frown',w:.9,h:1};p.acc=-25;p.arms.l=p.arms.r=[4,0];
   const g=GEO[k],q=(t%3)/3,[ex,ey]=g.eyes[0];p.fx.push({k:'tear',x:ex-g.er*.5,y:ey+g.er+2+q*q*75,o:q<.85?E.clamp(q*8):1-(q-.85)/.15,s:E.clamp(q*6)});blinkAt(p,t,2.2);},
  (p,t,k)=>{const sob=Math.abs(S(t*9));p.sy=.95-.04*sob;p.sx=1.03+.03*sob;p.ty=-2*sob;p.eye.t='closed';brow(p,5,-8,5);p.mouth={t:'wavy',w:1.1,h:1.2};p.arms.l=p.arms.r=[-10,-40];p.acc=-30;const g=GEO[k];
   g.eyes.forEach(([ex,ey],i)=>{const offs=g.eyes.length===1?[-9,9]:[(i?1:-1)*4];offs.forEach((o,j)=>p.fx.push({k:'stream',x:ex+o,y:ey+3,h:26+16*Math.abs(S(t*5+i+j))}));});
   p.fx.push({k:'cloud',x:4,y:g.top-44+3*S(t*2.5),ph:t});}]},
 {n:'Enfado',d:['Tiembla de rabia','Pisotones y vapor'],L:[1.6,2],f:[
  (p,t,k)=>{p.tx=2.5*S(t*65);p.sy=.97;p.sx=1.03;p.eye.lid=Math.max(p.eye.lid,.42);p.eye.tilt=24;p.eye.ps=.8;brow(p,-3,8,-3);p.mouth={t:'teeth',w:1.05,h:.9};p.tint={c:'#FF2A1F',a:.2+.12*Math.abs(S(t*5))};p.arms.l=p.arms.r=[24,16];p.acc=3*S(t*65);
   const g=GEO[k];p.fx.push({k:'vein',x:g.hw*.72,y:g.top+18,s:1+.25*Math.abs(S(t*8))});},
  (p,t,k)=>{const u=t%1,left=Math.floor(t)%2===0,lf=u<.3?E.cubic(u/.3):u<.4?1-(u-.3)/.1:0,q=u>.4?Math.exp(-8*(u-.4)):0;
   p.sy=1-.09*q;p.sx=1+.07*q;p.ty=-5*lf;if(left)p.legL=-14*lf;else p.legR=-14*lf;p.rot=(left?-1:1)*5*lf;
   p.eye.lid=Math.max(p.eye.lid,.42);p.eye.tilt=24;brow(p,-3,8,-3);p.mouth={t:'teeth',w:1.1,h:1};p.tint={c:'#FF2A1F',a:.3};p.arms.l=[130+25*S(t*14),20];p.arms.r=[130+25*S(t*14+PI),20];const g=GEO[k];
   for(let i=0;i<3;i++){const qq=((t/2)+i/3)%1;p.fx.push({k:'puff',x:(i-1)*15+6*S(qq*9),y:g.top-8-50*qq,s:.5+.9*qq,o:(1-qq)*1.3});}
   if(q>.05){const fx0=left?g.legs[0]+4:g.legs[1]+4;[-1,1].forEach(sd=>p.fx.push({k:'line',x:fx0+sd*14,y:-2,r:sd*60,len:12*q}));}}]},
 {n:'Sorpresa',d:['Bote con exclamación','Se estira del susto'],L:[2.4,2.4],f:[
  (p,t,k)=>{if(t<.15){const v=t/.15;p.sy=1-.15*v;p.sx=1+.1*v;}else if(t<.55){const v=(t-.15)/.4;p.ty=-48*AMP[k]*S(PI*v);p.sy=1.12-.12*v;p.sx=.92+.08*v;}else if(t<.9)land(p,t-.55,.12);
   const on=t>.15&&t<1.9;if(on){p.eye.t='wide';p.eye.s=1.28;p.eye.ps=.45;p.eye.lid=0;brow(p,-10,-10,-10);p.mouth={t:'o',w:1.2,h:1.6};p.arms.l=p.arms.r=[75,35];const g=GEO[k],pp=E.back(seg(t,.2,.45))*(1-seg(t,1.7,1.9));p.fx.push({k:'ex',x:g.hw+12,y:g.top-18,s:pp,r:12});}
   p.acc=on?-22:0;blinkAt(p,t,2.15);},
  (p,t,k)=>{const up=E.back(seg(t,.1,.35))*(1-E.inOut(seg(t,1.8,2.1)));p.sy=1+.28*up+.02*S(t*40)*up;p.sx=1-.14*up;
   if(up>.05){p.eye.t='wide';p.eye.s=1+.3*up;p.eye.ps=.35;p.eye.lid=0;brow(p,-12*up,-12*up,-12*up,up);p.mouth={t:'o',w:.9,h:1.2+.8*up};p.arms.l=p.arms.r=[20+40*up,10*up];
    const g=GEO[k],cy=(g.top+g.eyes[0][1])/2*p.sy;for(let i=0;i<7;i++){const a=(-165+i*25)*PI/180,d=g.hw+34;p.fx.push({k:'line',x:Math.cos(a)*d,y:cy+Math.sin(a)*d*.9,r:(-165+i*25)+90,len:14*up,o:.6+.4*S(t*20+i)});}}
   p.acc=-20*up;blinkAt(p,t,2.3);}]},
 {n:'Miedo',d:['Tiembla y suda','Se encoge y vigila'],L:[1.4,3],f:[
  (p,t,k)=>{p.tx=2*S(t*75);p.sy=.95+.01*S(t*40);p.sx=1.02;p.eye.t='wide';p.eye.s=1.18;p.eye.ps=.4;p.eye.lid=0;p.eye.px=.25*S(t*23);p.eye.py=-.1;brow(p,3,-9,3);p.mouth={t:'teeth',w:.95,h:.75};p.tint={c:'#FFFFFF',a:.22};p.arms.l=p.arms.r=[-25,-55];p.acc=3*S(t*75);const g=GEO[k];
   for(const i of [0,1]){const q=((t/1.4)+i*.5)%1;p.fx.push({k:'tear',x:(i?1:-1)*(g.hw*.85+6),y:g.top+22+q*40,s:1.15*E.clamp(q*5),o:1-E.clamp((q-.7)/.3)});}},
  (p,t,k)=>{const d=E.inOut(seg(t,0,.25))*(1-E.inOut(seg(t,2.5,2.85)));p.sy=1-.32*d;p.sx=1+.14*d;p.tx=1.5*S(t*60)*d;p.eye.s=1+.1*d;p.eye.lid=Math.max(p.eye.lid*(1-d),.2*d);p.eye.px=d>.5?Math.max(-1,Math.min(1,3*S(t*4.2))):0;p.eye.ps=.55;brow(p,2*d,-8*d,2*d,d);p.mouth={t:'wavy',w:.8,h:.9};p.arms.l=p.arms.r=[-20,-50];p.acc=-20*d;const g=GEO[k];
   const q=(t%1.5)/1.5;p.fx.push({k:'tear',x:g.hw*.8+6,y:g.top*(1-.32*d)+20+q*30,s:1.1*E.clamp(q*5)*d,o:1-E.clamp((q-.7)/.3)});}]},
 {n:'Duda',d:['Ladea la cabeza','Se rasca la cabeza'],L:[2.6,3],f:[
  (p,t,k)=>{const d=E.inOut(seg(t,.15,.55))*(1-E.inOut(seg(t,2.15,2.5)));p.rot=12*d;p.pv=-10;p.eye.px=.6*d;p.eye.py=-.6*d;brow(p,1*d,-2*d,-9*d,d);p.mouth={t:'flat',w:.8,tilt:-12*d,ox:4*d};p.acc=10*d;p.arms.l=[12+15*d,0];const g=GEO[k];
   const qq=E.back(seg(t,.4,.7))*(1-seg(t,2,2.2));p.fx.push({k:'q',x:g.hw+12,y:g.top-24+3*S(t*5),s:qq,r:14});blinkAt(p,t,1.4);},
  (p,t,k)=>{const lk=Math.max(-1,Math.min(1,3*Math.cos(TAU*t/3)));p.eye.px=.9*lk;p.rot=-3*lk;p.arms.r=[165,40+18*S(t*22)];brow(p,2,-2,-7);p.mouth={t:'wavy',w:.7,h:.6};p.acc=6*S(t*22);const g=GEO[k];
   for(let i=0;i<3;i++){const tt=seg(t,.3+i*.35,.55+i*.35)*(1-seg(t,2.5,2.8));p.fx.push({k:'q',x:-22+i*20,y:g.top-26-6*i,s:.7*E.back(tt),r:(i-1)*15});}}]},
 {n:'Pensar',d:['Mano en la barbilla','¡Se le ocurre una idea!'],L:[3,3.4],f:[
  (p,t,k)=>{p.arms.r=[-40,-50+8*S(t*6)];p.eye.px=.5;p.eye.py=-.85;p.eye.lid=Math.max(p.eye.lid,.15);brow(p,0,-2,-7);p.mouth={t:'flat',w:.6,tilt:8,ox:-3};p.rot=-3+1.5*S(TAU*t/3);p.acc=-6;const g=GEO[k];
   for(let i=0;i<3;i++){const on=seg(t,.4+i*.4,.55+i*.4)*(1-seg(t,2.6,2.85));p.fx.push({k:'dot',x:g.hw*.5+i*13,y:g.top-14-i*7,s:E.back(on)});}blinkAt(p,t,2.2);},
  (p,t,k)=>{const g=GEO[k],idea=t>1.4,bs=E.back(seg(t,.8,1.1))*(1-seg(t,3,3.3));
   p.fx.push({k:'puff',x:g.hw*.35,y:g.top-10,s:.4*E.back(seg(t,.3,.5))*(1-seg(t,3,3.3))});p.fx.push({k:'puff',x:g.hw*.35+10,y:g.top-26,s:.55*E.back(seg(t,.5,.7))*(1-seg(t,3,3.3))});
   p.fx.push({k:'bubble',x:g.hw*.35+28,y:g.top-60,s:bs});p.fx.push({k:'bulb',x:g.hw*.35+28,y:g.top-56,s:bs*(idea?1+.15*bell(t,1.4,1.7):.85),lit:idea?1:0});
   if(!idea){p.eye.py=-.9;p.eye.px=-.3+.6*S(t*2);p.mouth={t:'flat',w:.6};brow(p,0,-3,-5);}
   else{p.ty=-16*AMP[k]*bell(t,1.4,1.75);p.eye.s=1.2;p.eye.ps=.5;p.eye.lid=0;brow(p,-8,-8,-8);p.mouth={t:'grin',w:1.1,h:1.2};p.arms.r=[165,-10];p.blush=Math.max(p.blush,.6);p.acc=10*S(t*12)*Math.exp(-2*(t-1.4));}}]},
 {n:'Celebrar',d:['Brazos arriba y confeti','Salto con giro'],L:[1.6,2.4],f:[
  (p,t,k)=>{const u=(t%.8)/.8;if(u<.7){const v=u/.7;p.ty=-48*AMP[k]*S(PI*v);p.sy=1.07;p.sx=.95;}else land(p,(u-.7)/.3*.5,.2);p.arms.l=[155+15*S(t*12),20*S(t*12)];p.arms.r=[155+15*S(t*12+1),20*S(t*12+1)];p.eye.t='happy';p.mouth={t:'grin',w:1.2,h:1.3,tongue:true};p.blush=.8;p.acc=-15*S(TAU*u);const g=GEO[k];
   for(let i=0;i<14;i++){const q=((t/1.6)+i/14)%1;p.fx.push({k:'conf',x:-85+((i*53)%170)+6*S(q*8+i),y:g.top-70+q*190-p.ty,r:q*360*(i%2?1:-1),c:COLS[i%5],o:q<.85?1:(1-q)*6});}},
  (p,t,k)=>{if(t<.2){const v=t/.2;p.sy=1-.18*v;p.sx=1+.12*v;}else if(t<1){const v=(t-.2)/.8;p.ty=-75*AMP[k]*S(PI*v);p.rot=360*E.inOut(v);p.pv=-60;p.sy=1.06;p.sx=.96;p.eye.t='happy';p.arms.l=p.arms.r=[150,0];}else if(t<1.4)land(p,t-1,.15);
   if(t>1){p.eye.t='happy';p.mouth={t:'grin',w:1.2,h:1.3,tongue:true};p.arms.l=p.arms.r=[120,-20];const s=E.back(seg(t,1,1.25))*(1-seg(t,1.9,2.3));for(let i=0;i<5;i++){const a=(-160+i*35)*PI/180,d=60+30*seg(t,1,1.6);p.fx.push({k:'star',x:Math.cos(a)*d,y:-60+Math.sin(a)*d,s,r:t*90});}}}]},
 {n:'Asco',d:['Se echa atrás','Escalofrío'],L:[2.6,2],f:[
  (p,t,k)=>{const d=E.inOut(seg(t,.1,.4))*(1-E.inOut(seg(t,2.2,2.5)));p.rot=-10*d;p.tx=-6*d;p.tint={c:'#7BD650',a:.38*d};p.eye.lid=Math.max(p.eye.lid,.4*d);p.eye.px=-.7*d;brow(p,-3*d,5*d,-7*d,d);if(d>.3)p.mouth={t:'tongue',w:.9,h:1};p.arms.r=[12+85*d,-10*d];const g=GEO[k];
   for(let i=0;i<2;i++){const q=((t/1.3)+i*.5)%1;p.fx.push({k:'stink',x:g.hw+22+i*14,y:-30-30*q,o:S(PI*q)*d*1.3,s:.8+.3*q});}},
  (p,t,k)=>{const sh=bell(t,.2,1.4);p.sy=1-.03*sh+.035*sh*S(t*55);p.sx=1+.02*sh*S(t*55+1);p.tx=1.5*sh*S(t*40);if(sh>.1){p.eye.t='squint';p.mouth={t:'wavy',w:1.2,h:1.1};}p.tint={c:'#7BD650',a:.3*sh};brow(p,0,5*sh,0,sh);p.arms.l=p.arms.r=[12-25*sh,-40*sh];const g=GEO[k];
   [-1,1].forEach(sd=>{for(let j=0;j<2;j++)p.fx.push({k:'line',x:sd*(g.hw+14),y:-50-j*22,r:sd*90,len:11*sh,o:sh});});blinkAt(p,t,1.8);}]},
 {n:'Sueño',d:['Cabecea con Zzz','Gran bostezo'],L:[3.4,3],f:[
  (p,t,k)=>{const g=GEO[k];let rot=9*E.inOut(seg(t,.2,2.4)),jolt=t>2.4&&t<2.9;if(t>2.4)rot=9*(1-E.cubic(seg(t,2.4,2.52)));p.rot=rot;p.pv=-10;p.sy=1+.03*S(TAU*t/1.7);
   if(jolt){p.eye.t='open';p.eye.s=1.15;p.eye.lid=0;p.mouth={t:'o',w:.8,h:1};brow(p,-6,-6,-6);p.fx.push({k:'ex',x:g.hw+10,y:g.top-14,s:.7*E.back(seg(t,2.4,2.55))});}
   else if(t>=2.9){p.eye.lid=Math.max(p.eye.lid,.55);p.mouth={t:'flat',w:.6};}
   else{p.eye.t='closed';p.mouth={t:'o',w:.6,h:.5};p.acc=-10*E.inOut(seg(t,.2,2.4));for(let i=0;i<3;i++){const q=((t*.6)+i/3)%1;p.fx.push({k:'z',x:g.hw*.5+18*q+i*2,y:g.top-10-42*q,s:.5+.6*q,o:Math.min(1,q*4)*(1-q)*1.5});}}},
  (p,t,k)=>{const y=E.inOut(Math.min(1,bell(t,.2,1.8)*1.6));p.sy=1+.12*y;p.sx=1-.05*y;p.arms.l=p.arms.r=[20+130*y,10];p.eye.t=y>.3?'closed':'open';p.eye.lid=Math.max(p.eye.lid,.35);p.mouth=y>.15?{t:'o',w:1+.3*y,h:.8+1.8*y}:{t:'flat',w:.6};brow(p,2*y,-5*y,2*y,y);
   const g=GEO[k];if(t>1.6&&t<2.6){const q=seg(t,1.6,2.6),[ex,ey]=g.eyes[g.eyes.length-1];p.fx.push({k:'tear',x:ex+g.er*.9,y:ey+2+q*10,s:.7,o:1-q});}blinkAt(p,t,2.4);}]},
 {n:'Enamorado',d:['Ojos de corazón','Ojos de estrella'],L:[2.4,2.4],f:[
  (p,t,k)=>{const pu=Math.abs(S(t*6.5));p.eye.t='heart';p.eye.s=1+.18*pu;p.rot=6*S(TAU*t/2.4);p.ty=-3*Math.abs(S(TAU*t/1.2));p.blush=1;p.mouth={t:'smile',w:1,h:1};p.arms.l=p.arms.r=[-20,-60];p.acc=8*S(TAU*t/2.4);const g=GEO[k];
   for(let i=0;i<3;i++){const q=((t/2.4)+i/3)%1;p.fx.push({k:'heart',x:(i-1)*28+8*S(q*TAU),y:g.top-6-60*q,s:.6+.5*q,o:S(PI*q)*1.3});}},
  (p,t,k)=>{const b=Math.abs(S(t*5));p.eye.t='star';p.eye.s=1.05+.12*b;p.eye.rot=t*60;p.ty=-4*b;p.sy=1+.03*b;p.mouth={t:'grin',w:1,h:1.1};p.blush=.9;p.arms.l=p.arms.r=[-30,-55];brow(p,-5,-5,-5);const g=GEO[k];
   for(let i=0;i<4;i++){const q=((t/1.2)+i/4)%1,a=(i*90+30)*PI/180;p.fx.push({k:'star',x:Math.cos(a)*(g.hw+22),y:-62+Math.sin(a)*58,s:S(PI*q)*.9,r:q*90});}}]},
 {n:'Mareo',d:['Ojos en espiral','Golpe con estrellitas'],L:[2.4,2.6],f:[
  (p,t,k)=>{const a=TAU*t/1.2;p.rot=8*S(a);p.tx=6*Math.cos(a);p.pv=-10;p.eye.t='spiral';p.eye.rot=-t*8;p.mouth={t:'wavy',w:.9,h:.8};p.tint={c:'#7BD650',a:.15};p.acc=15*S(a+1);p.arms.l=[30+15*S(a),10];p.arms.r=[30-15*S(a),10];},
  (p,t,k)=>{const g=GEO[k];if(t<.12){const v=t/.12;p.sy=1-.3*v;p.sx=1+.2*v;}else if(t<.7)land(p,t-.12,.3);
   p.eye.t=t<.12?'squint':(t>2.2?'open':'x');if(t>2.2){p.eye.lid=Math.max(p.eye.lid,.3);}p.rot=t>.3&&t<2.2?5*S((t-.3)*5):0;p.mouth=t<.12?{t:'teeth',w:1,h:.8}:{t:'o',w:.6,h:.7};
   if(t<.3)[-1,0,1].forEach(i=>p.fx.push({k:'line',x:i*16,y:g.top-12,r:i*30,len:14*(1-t/.3)}));
   if(t>.15&&t<2.2)for(let i=0;i<3;i++){const a=t*5+i*TAU/3;p.fx.push({k:'star',x:Math.cos(a)*44,y:g.top-12+Math.sin(a)*10,s:(.7+.2*Math.sin(a))*E.clamp((t-.15)*6),r:t*200});}blinkAt(p,t,2.45);}]},
 {n:'Presentar',d:['Señala y guiña','¡Ta-chán!'],L:[2.4,2.6],f:[
  (p,t,k)=>{const d=E.back(seg(t,.1,.4))*(1-E.inOut(seg(t,2,2.3)));p.arms.r=[12+83*d,-5*d+3*S(t*9)*d];p.rot=5*d;p.eye.px=d;p.eyes=[{t:(t>.6&&t<1.4)?'happy':'open'},{}];if(GEO[k].eyes.length===1)p.eyes=[{t:(t>.6&&t<1.4)?'happy':'open'}];p.mouth={t:'grin',w:1.05,h:1};brow(p,0,-2*d,-6*d,d);
   const hp=handPos(k,1,p.arms.r);p.fx.push({k:'star',x:hp[0]+20,y:hp[1]-4,s:.8*d*(.8+.2*S(t*8)),r:t*90});},
  (p,t,k)=>{const d=E.back(seg(t,.15,.45))*(1-E.inOut(seg(t,2.1,2.4)));p.ty=-18*AMP[k]*bell(t,.1,.45);p.arms.l=p.arms.r=[12+108*d,-10*d];p.eye.t=d>.5?'happy':'open';p.mouth={t:'grin',w:1.2,h:1.3};brow(p,-6*d,-6*d,-6*d,d);p.blush=Math.max(p.blush,.5*d);
   [-1,1].forEach(sd=>{const hp=handPos(k,sd,p.arms.l);p.fx.push({k:'star',x:hp[0]+sd*12,y:hp[1]-12,s:d*(.7+.3*S(t*10+sd)),r:t*120*sd});});}]},
 {n:'Saludar',d:['Saluda con la mano','Salta y dice hola'],L:[1.8,2.4],f:[
  (p,t,k)=>{p.arms.r=[150,25*S(t*11)];p.rot=3;p.eye.t='happy';p.mouth={t:'grin',w:1.05,h:1.1};p.sy=1+.02*S(t*11);p.blush=Math.max(p.blush,.6);p.acc=5*S(t*11);},
  (p,t,k)=>{if(t<.12){const v=t/.12;p.sy=1-.14*v;p.sx=1+.1*v;}else if(t<.55){const v=(t-.12)/.43;p.ty=-34*AMP[k]*S(PI*v);p.sy=1.06;p.sx=.96;}else if(t<.9)land(p,t-.55,.14);
   p.arms.r=[155,30*S(t*12)];p.arms.l=[t>.12&&t<.55?120:15,0];p.eye.s=1.1;p.eye.lid=0;brow(p,-6,-6,-6);p.mouth={t:'grin',w:1.15,h:1.3,tongue:true};const g=GEO[k];
   p.fx.push({k:'txt',str:'¡Hola!',x:-g.hw-14,y:g.top-14,s:E.back(seg(t,.3,.55))*(1-seg(t,2,2.3)),r:-10,c:'var(--cobalto)'});}]}
];

