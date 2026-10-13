/* ===== PAISAJES · capas planas con degradado ===== */
function sunS(r,o={}){
  const halo=o.halo===false?'':Ci(0,0,r*1.2,'#fff',`opacity:${o.ho??.95}`);
  return halo+Ci(0,0,r,o.pale?'url(#gSUNP)':'url(#gSUN)');
}
/* colina redondeada a dos tonos (cara iluminada violeta, cara en sombra magenta) */
function humpS(w,h,o={}){
  const L=o.lit||'url(#gPU)',D=o.dark||'url(#gMA)';
  const d=`M${-w/2} 0 C${-w*.32} ${-h*.9} ${-w*.12} ${-h} 0 ${-h} C${w*.14} ${-h} ${w*.32} ${-h*.86} ${w/2} 0 Z`;
  const dd=`M0 ${-h} C${w*.14} ${-h} ${w*.32} ${-h*.86} ${w/2} 0 L${w*.06} 0 C${w*.1} ${-h*.4} ${w*.04} ${-h*.75} 0 ${-h} Z`;
  return P(d,`fill:${L}`)+P(dd,`fill:${D}`);
}
/* meseta / sierra con cima plana */
function mesaS(w,h,o={}){
  const L=o.lit||'url(#gPU)',D=o.dark||'url(#gMA)',tw=w*(o.top||.38);
  const d=`M${-w/2} 0 L${-tw/2} ${-h} L${tw/2} ${-h} L${w/2} 0Z`;
  const dd=`M${tw*.1} ${-h} L${tw/2} ${-h} L${w/2} 0 L${w*.12} 0Z`;
  return P(d,`fill:${L}`)+P(dd,`fill:${D}`)+P(`M${-tw/2} ${-h} L${tw/2} ${-h}`,ST('#d27df7',2,'opacity:.7'));
}
/* banda de agua de laguna con olitas */
function waterBand(x0,x1,y0,y1,T,o={}){
  let s=Rc(x0,y0,x1-x0,y1-y0,o.fill||'url(#gWA)');
  const rows=o.rows??4;
  for(let r=0;r<rows;r++){const yy=y0+(y1-y0)*(.18+r*.22);const n=Math.ceil((x1-x0)/70)+1;
    for(let i=0;i<n;i++){const xx=x0+((i*70+r*31+T*(8+r*3))%((x1-x0)+70))-35,ww=14+hs(i+r*9)*12;
      s+=P(`M${f1(xx)} ${f1(yy)} q${f1(ww/4)} -3 ${f1(ww/2)} 0 t${f1(ww/2)} 0`,ST('#fff',1.8,`opacity:${.55-r*.08}`));}}
  return s;
}
/* reflejo del sol en el agua */
function sunGlint(x,y,T,w=60){let s='';for(let i=0;i<5;i++){const ww=w*(1-i*.17)*(.85+.15*Math.sin(T*2+i));s+=Rc(x-ww/2,y+i*7,ww,2.6,'#ffd27a',1.3,`opacity:${.9-i*.15}`);}return s;}
/* salinas: banda blanca con borde irregular */
function saltBand(x0,x1,y,h,seed=1){let d=`M${x0} ${y}`;for(let x=x0;x<=x1;x+=24)d+=` L${f1(x)} ${f1(y-2-hs(x*.13+seed)*6)}`;d+=` L${x1} ${y+h} L${x0} ${y+h}Z`;
  let top=`M${x0} ${y}`;for(let x=x0;x<=x1;x+=24)top+=` L${f1(x)} ${f1(y-2-hs(x*.13+seed)*6)}`;
  return P(d,'fill:#f3efe8')+P(top,ST(K.ink,1.6));}
/* banda de matorral verde claro con festón */
function bushBand(x0,x1,y,h,seed=2,o={}){let d=`M${x0} ${y+h}`;let x=x0;let i=0;d+=` L${x0} ${y}`;
  while(x<x1){const w=26+hs(i*3.1+seed)*26,hh=10+hs(i*5.7+seed)*12;d+=` Q${f1(x+w/2)} ${f1(y-hh*1.6)} ${f1(x+w)} ${f1(y)}`;x+=w;i++;}
  d+=` L${f1(x)} ${y+h}Z`;return P(d,`fill:${o.c||'#a8e3a2'};stroke:${o.sc||'#e2f6de'};stroke-width:2`);}
/* suelo verde */
function groundBand(x0,x1,y,h,o={}){let d=`M${x0} ${y}`;for(let x=x0;x<=x1;x+=30)d+=` L${f1(x)} ${f1(y+Math.sin(x*.02+(o.ph||0))*3)}`;d+=` L${x1} ${y+h} L${x0} ${y+h}Z`;return P(d,`fill:${o.c||'url(#gGR)'}`);}
/* juncos / carrizo con espadañas */
function reeds(x,y,n,h,seed,T,o={}){let s='';
  for(let i=0;i<n;i++){const xx=x+(hs(i*2.3+seed)-.5)*(o.spread||60),hh=h*(.55+hs(i*7.1+seed)*.5),sw=Math.sin(T*1.3+i+seed)*4*(o.wind??1);
    const c=i%3===0?'#1f6b33':(i%3===1?'#2b7a3e':'#3a9150');
    s+=P(`M${f1(xx)} ${f1(y)} Q${f1(xx+sw*.4)} ${f1(y-hh*.5)} ${f1(xx+sw)} ${f1(y-hh)}`,ST(c,3.2));
    if(hs(i*4.4+seed)>.55)s+=G(xx+sw*.92,y-hh*.88,1,sw*2,Rc(-3.2,-11,6.4,20,'#7d3a23',3.2));}
  return s;}
/* hoja grande de primer plano (violeta o verde) */
function leafS(len,wid,c='#8005f0',v='#5c02b0'){return P(`M0 0 Q${f1(wid)} ${f1(-len*.45)} 0 ${f1(-len)} Q${f1(-wid)} ${f1(-len*.45)} 0 0Z`,`fill:${c}`)+P(`M0 -2 L0 ${f1(-len*.9)}`,ST(v,2.2));}
function fernS(len,c='#1f6b33'){let s=P(`M0 0 L0 ${-len}`,ST(c,3));for(let i=1;i<9;i++){const y=-len*i/9,l=len*.28*(1-i/11);s+=P(`M0 ${f1(y)} q${f1(l*.5)} ${f1(-l*.3)} ${f1(l)} ${f1(-l*.55)} M0 ${f1(y)} q${f1(-l*.5)} ${f1(-l*.3)} ${f1(-l)} ${f1(-l*.55)}`,ST(c,4.2));}return s;}
/* pino piñonero (Doñana) */
function pineS(s=1,seed=0){const w=110*s,h=46*s;return P(`M${f1(-4*s)} 0 L${f1(-2*s)} ${f1(-118*s)} M${f1(-2*s)} ${f1(-96*s)} L${f1(-26*s)} ${f1(-128*s)} M${f1(-2*s)} ${f1(-100*s)} L${f1(24*s)} ${f1(-130*s)}`,ST('#3a2418',6*s))+
  P(`M${f1(-w/2)} ${f1(-118*s)} Q${f1(-w/2-6*s)} ${f1(-118*s-h)} ${f1(-w*.2)} ${f1(-118*s-h*1.05)} Q0 ${f1(-118*s-h*1.45)} ${f1(w*.24)} ${f1(-118*s-h*1.05)} Q${f1(w/2+8*s)} ${f1(-118*s-h*.95)} ${f1(w/2)} ${f1(-118*s)} Z`,'fill:#2f8f45')+
  P(`M${f1(-w*.36)} ${f1(-118*s-h*.55)} Q${f1(-w*.1)} ${f1(-118*s-h*1.15)} ${f1(w*.2)} ${f1(-118*s-h*.82)}`,ST('#4fb465',5*s,'opacity:.9'));}
/* árbol redondo */
function treeS(s=1){return P(`M0 0 L0 ${f1(-70*s)}`,ST('#141212',5*s))+Ci(0,-92*s,36*s,'#35a24c')+Ci(-14*s,-102*s,14*s,'#4fbf63')+Ci(16*s,-80*s,12*s,'#2c8a40');}
/* nido de barro (cono truncado) */
function nestS(w=86,h=34){return P(`M${-w/2} 0 L${-w*.36} ${-h} L${w*.36} ${-h} L${w/2} 0Z`,'fill:url(#gMUD)')+El(0,-h,w*.36,w*.08,'#c97a52')+El(0,-h,w*.28,w*.055,'#8a4329')+
  P(`M${-w*.4} ${-h*.35} q${w*.1} -3 ${w*.2} 0 M${w*.05} ${-h*.6} q${w*.1} -3 ${w*.2} 0`,ST('#6a2f1c',1.6,'opacity:.6'));}
/* estratos de barro bajo el agua */
function mudBand(x0,x1,y,h){let d=`M${x0} ${y}`;for(let x=x0;x<=x1;x+=20)d+=` L${f1(x)} ${f1(y+Math.sin(x*.05)*4)}`;d+=` L${x1} ${y+h} L${x0} ${y+h}Z`;let s=P(d,'fill:url(#gMUD)');
  for(let k=1;k<4;k++){let l=`M${x0} ${f1(y+k*h/4)}`;for(let x=x0;x<=x1;x+=20)l+=` L${f1(x)} ${f1(y+k*h/4+Math.sin(x*.04+k*2)*4)}`;s+=P(l,ST('#5d2715',1.6,'opacity:.55'));}
  return s;}
/* pájaros lejanos (v) */
function birdV(x,y,s,T,ph=0){const f=Math.sin(T*9+ph)*4*s;return P(`M${f1(x-8*s)} ${f1(y-f)} Q${f1(x-4*s)} ${f1(y-3*s)} ${f1(x)} ${f1(y)} Q${f1(x+4*s)} ${f1(y-3*s)} ${f1(x+8*s)} ${f1(y-f)}`,ST(K.ink,1.8));}
