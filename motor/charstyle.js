/* ===== Personajes · construcción del estilo de referencia =====
   cuerpo-cápsula a dos colores (cabeza = color del personaje, abajo = ropa),
   sin contornos, manos redondas flotantes, patitas cortas, ojos de punto. */
(function(){
  const HAND='#f7961b';
  const D={
    grano:{base:'M-36 -84 A36 36 0 0 1 36 -84 L36 -44 A30 30 0 0 1 6 -14 L-6 -14 A30 30 0 0 1 -36 -44 Z',cut:-66,head:'#ffbe2e',head2:'#f59a12',cloth:'#2a37d7',cloth2:'#1f2aa8',
      eyes:[[-12,-90],[12,-90]],er:7,mouth:[0,-76],mw:7,sh:[[-36,-72],[36,-72]],legs:[-20,10],shadow:36,top:-118,hw:40,browY:-104,cheeks:[[-24,-78],[24,-78]],cheekC:'#ff6f5e',
      acc:a=>`<g transform="rotate(${a.toFixed(2)} 0 -116)">${R(-2.5,-134,5,20,INK,2.5)}${C(-11,-134,9,'#3fdcae')}${C(11,-139,10,'#22b58a')}</g>`},
    pipa:{base:'M-22 -116 Q0 -140 22 -116 L40 -36 Q46 -14 26 -14 L-26 -14 Q-46 -14 -40 -36 Z',cut:-62,head:'#ff5a4f',head2:'#ec2f72',cloth:'#f6a81a',cloth2:'#e8850f',
      eyes:[[0,-92]],er:9.5,mouth:[0,-72],mw:7,sh:[[-32,-68],[32,-68]],legs:[-19,9],shadow:38,top:-128,hw:30,browY:-102,uni:true,browHalf:14,cheeks:[[-16,-74],[16,-74]],cheekC:'#ffc2cf',
      acc:a=>`<g transform="rotate(${(a*.6).toFixed(2)} 0 -124)">`+F('M-6 -124 Q-30 -126 -40 -104 Q-30 -112 -18 -110 Q-8 -112 -6 -124Z','#6b1a2a')+R(-10,-136,20,11,'#2a37d7',4)+'</g>'},
    lenteja:{base:'M-14 -98 L14 -98 A42 42 0 0 1 56 -56 A42 42 0 0 1 14 -14 L-14 -14 A42 42 0 0 1 -56 -56 A42 42 0 0 1 -14 -98 Z',cut:-52,head:'#38d9a9',head2:'#1fb487',cloth:'#ffffff',cloth2:'#e3e3e3',
      eyes:[[-18,-72],[18,-72]],er:6.5,mouth:[0,-60],mw:7,sh:[[-54,-66],[54,-66]],legs:[-26,16],shadow:52,top:-98,hw:56,browY:-92,glasses:true,cheeks:[[-38,-58],[38,-58]],cheekC:'#ff9db0'},
    garbanzo:{base:'M-24 -132 L24 -132 A12 12 0 0 1 36 -120 L36 -26 A12 12 0 0 1 24 -14 L-24 -14 A12 12 0 0 1 -36 -26 L-36 -120 A12 12 0 0 1 -24 -132 Z',cut:-70,head:'#9a3cff',head2:'#6a14e0',cloth:'#3a5a2e',cloth2:'#2b4522',
      eyes:[[-12,-98],[12,-98]],er:7,mouth:[5,-82],mw:7,sh:[[-36,-80],[36,-80]],legs:[-20,10],shadow:38,top:-132,hw:40,browY:-110,uni:true,browHalf:22,browW:6,browBase:{l:3,m:0,r:-3},lid0:.25,cheeks:[[-22,-84],[22,-84]],cheekC:'#ff8fc8',
      acc:a=>F('M-36 -116 L-36 -124 Q-36 -140 -20 -140 L22 -140 Q36 -140 36 -126 L36 -118 Q14 -124 -6 -118 Q-22 -114 -36 -116Z','#151515')}
  };
  for(const k in D){Object.assign(GEO[k],D[k]);GEO[k].shade='M0 0Z';}
  GEO.lenteja.uni=false;GEO.grano.uni=false;
  // ojos de punto
  const _eye=drawEye;
  drawEye=function(cx,cy,r,e,side,k,uid,i){
    const t=e.t||'open';
    if(t==='open'||t==='wide'){
      const Rr=r*(e.s||1)*(t==='wide'?1.25:1),px=cx+(e.px||0)*Rr*.35,py=cy+(e.py||0)*Rr*.35;
      let o=C(px.toFixed(2),py.toFixed(2),(Rr*.62).toFixed(2),INK);
      if(t==='wide')o=C(px.toFixed(2),py.toFixed(2),(Rr*1.05).toFixed(2),'#fff')+o;
      const lid=E.clamp(e.lid||0);
      if(lid>.01){const id=`ec${uid}_${i}`,ey=cy-Rr+2*Rr*lid;
        o+=`<clipPath id="${id}"><circle cx="${px}" cy="${py}" r="${(Rr*(t==='wide'?1.1:.7)).toFixed(2)}"/></clipPath><g clip-path="url(#${id})"><rect x="${cx-Rr*2}" y="${(ey-Rr*3).toFixed(2)}" width="${Rr*4}" height="${Rr*3}" style="fill:${GEO[k].head}"/></g>`;}
      return o;}
    return _eye(cx,cy,r*.9,e,side,k,uid,i).replace(/stroke-width:([0-9.]+)/g,(m,v)=>'stroke-width:'+Math.max(2.4,v*.62).toFixed(1));
  };
  const _mouth=drawMouth;drawMouth=(k,m)=>_mouth(k,m).replace(/stroke-width:([0-9.]+)/g,(mm,v)=>'stroke-width:'+(v*.55).toFixed(1));
  const _brows=drawBrows;drawBrows=(k,b)=>_brows(k,b).replace(/stroke-width:([0-9.]+)/g,(mm,v)=>'stroke-width:'+(v*.6).toFixed(1));
  // sin brazos: solo manos redondas que flotan
  drawArms=function(k,a){let s='';[['l',-1],['r',1]].forEach(([n],i)=>{const hp=handPos(k,i?1:-1,a[n]);s+=C(hp[0].toFixed(2),hp[1].toFixed(2),8.5,HAND);});return s;};
  drawLegs=function(k,p){const [a,b]=GEO[k].legs,l=p.legL||0,r=p.legR||0;return R(a,-16+l,10,17,INK,5)+R(b,-16+r,10,17,INK,5);};
  drawChar=function(k,p,uid){
    const g=GEO[k],pv=p.pv||0,ss=1-Math.min(.6,Math.max(0,-p.ty)/110),id='cb'+uid;
    let body=(g.acc&&k!=='garbanzo'?g.acc(p.acc||0):'');
    body+=`<clipPath id="${id}"><path d="${g.base}"/></clipPath><g clip-path="url(#${id})">`+
      R(-70,-150,140,150+g.cut,g.head)+R(14,-150,60,150+g.cut,g.head2,0,'')+R(-70,g.cut,140,80,g.cloth)+R(16,g.cut,60,80,g.cloth2);
    if(k==='lenteja')body+=F(`M-16 ${g.cut} L0 ${g.cut+20} L16 ${g.cut}Z`,g.head)+R(-2,g.cut+20,4,30,'#d0d0d0');
    if(k==='garbanzo')body+=F(`M-9 ${g.cut} L9 ${g.cut} L4 ${g.cut+12} L7 ${g.cut+40} L0 ${g.cut+48} L-7 ${g.cut+40} L-4 ${g.cut+12}Z`,'#f34841')+F(`M-18 ${g.cut} L0 ${g.cut+14} L18 ${g.cut}Z`,'#fff');
    if(k==='grano')body+=R(-6,g.cut+6,12,4,'#fff',2);
    body+='</g>';
    if(k==='garbanzo')body+=g.acc(0);
    if(p.tint&&p.tint.a>.01)body+=`<path d="${g.base}" style="fill:${p.tint.c};opacity:${p.tint.a.toFixed(2)}"/>`;
    g.cheeks.forEach(([x,y])=>body+=C(x,y,5.5,g.cheekC).replace('/>',` opacity="${Math.max(.55,p.blush||0).toFixed(2)}"/>`));
    let eyes='';g.eyes.forEach(([ex,ey],i)=>{const sd=g.eyes.length===1?0:(i?1:-1);const e=Object.assign({},p.eye,(p.eyes&&p.eyes[i])||{});eyes+=drawEye(ex,ey,g.er,e,sd,k,uid,i);});
    body+=eyes;
    if(g.glasses)body+=g.eyes.map(([ex,ey])=>`<circle cx="${ex}" cy="${ey}" r="12" style="fill:none;stroke:${INK};stroke-width:3.4"/>`).join('')+R(-6,g.eyes[0][1]-1.5,12,3,INK);
    body+=drawBrows(k,p.brow)+drawMouth(k,p.mouth)+drawArms(k,p.arms);
    return `<ellipse cx="${p.tx.toFixed(2)}" cy="1" rx="${(g.shadow*ss*p.sx).toFixed(2)}" ry="${(5*ss).toFixed(2)}" style="fill:#000;opacity:${(.14*ss).toFixed(3)}"/>`+
      `<g transform="translate(${p.tx.toFixed(2)} ${p.ty.toFixed(2)}) translate(0 ${pv}) rotate(${p.rot.toFixed(2)}) translate(0 ${-pv})">${drawLegs(k,p)}<g transform="scale(${p.sx.toFixed(3)} ${p.sy.toFixed(3)})">${body}</g></g>`+
      `<g transform="translate(${p.tx.toFixed(2)} ${p.ty.toFixed(2)})">${p.fx.map(drawFx).join('')}</g>`;
  };
})();
