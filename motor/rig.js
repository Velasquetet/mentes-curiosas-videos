/* ---------- rig de personajes ---------- */
const PI=Math.PI,TAU=2*PI,S=Math.sin;
let UID=0;
const F=(d,c)=>`<path d="${d}" style="fill:${c}"/>`;
const C=(x,y,r,c)=>`<circle cx="${x}" cy="${y}" r="${r}" style="fill:${c}"/>`;
const R=(x,y,w,h,c,rx=0,tr='')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" style="fill:${c}" ${tr?`transform="${tr}"`:''}/>`;
const PINK='#FF8FA3';
const SKIN={grano:['var(--grano)','var(--grano-d)'],pipa:['var(--pipa)','var(--pipa-d)'],lenteja:['var(--lenteja)','var(--lenteja-d)'],garbanzo:['var(--garbanzo)','var(--garbanzo-d)']};
const GEO={
  grano:{base:'M-50 -64 A50 50 0 1 0 50 -64 A50 50 0 1 0 -50 -64Z',shade:'M0 -114 A50 50 0 0 1 0 -14 A28 50 0 0 0 0 -114Z',
    eyes:[[-17,-72],[15,-72]],er:12,mouth:[0,-50],mw:12,sh:[[-47,-54],[47,-54]],legs:[-20,11],shadow:40,top:-114,hw:42,browY:-93,
    cheeks:[[-30,-52],[30,-52]],cheekC:'var(--pipa)',
    acc:a=>`<g transform="rotate(${a.toFixed(2)} 0 -112)">${R(-3,-136,6,26,INK,3)}${C(-13,-134,11,'var(--lenteja)')}${C(14,-140,13,'var(--lenteja-d)')}</g>`},
  pipa:{base:'M-6 -122 Q0 -133 6 -122 L52 -20 Q57 -9 44 -9 L-44 -9 Q-57 -9 -52 -20Z',shade:'M0 -128.5 Q3 -127 6 -122 L52 -20 Q57 -9 44 -9 L12 -9Z',
    eyes:[[0,-56]],er:17,mouth:[0,-26],mw:12,sh:[[-31,-46],[31,-46]],legs:[-22,13],shadow:46,top:-128,hw:26,browY:-82,uni:true,browHalf:21,
    cheeks:[[-22,-32],[22,-32]],cheekC:'#FFD3DB',
    acc:a=>R(-12,-146,24,14,'var(--grano)',4,`rotate(${(-14+a).toFixed(2)} 0 -139)`)},
  lenteja:{base:'M-19 -92 L19 -92 A39 39 0 0 1 19 -14 L-19 -14 A39 39 0 0 1 -19 -92Z',shade:'M-57 -40 L57 -40 A39 39 0 0 1 19 -14 L-19 -14 A39 39 0 0 1 -57 -40Z',
    eyes:[[-19,-62],[19,-62]],er:11,mouth:[0,-31],mw:12,sh:[[-55,-46],[55,-46]],legs:[-26,17],shadow:52,top:-92,hw:50,browY:-86,glasses:true,
    cheeks:[[-42,-38],[42,-38]],cheekC:'#FF9DB0'},
  garbanzo:{base:'M-34 -118 L34 -118 A14 14 0 0 1 48 -104 L48 -28 A14 14 0 0 1 34 -14 L-34 -14 A14 14 0 0 1 -48 -28 L-48 -104 A14 14 0 0 1 -34 -118Z',
    shade:'M18 -118 L34 -118 A14 14 0 0 1 48 -104 L48 -28 A14 14 0 0 1 34 -14 L18 -14Z',
    eyes:[[-17,-70],[17,-70]],er:12,mouth:[7,-39],mw:12,sh:[[-47,-56],[47,-56]],legs:[-24,15],shadow:46,top:-118,hw:44,browY:-91,uni:true,browHalf:36,browW:10,
    browBase:{l:4,m:0,r:-4},lid0:.45,cheeks:[[-31,-46],[31,-46]],cheekC:'#FF9DB0'}
};
const AMP={grano:1,pipa:1.2,lenteja:.9,garbanzo:.75};
const MOUTH0={grano:{t:'grin',w:1,h:1},pipa:{t:'o',w:1,h:1},lenteja:{t:'flat',w:1},garbanzo:{t:'flat',w:1.1,tilt:-8}};
function P0(k){return {tx:0,ty:0,rot:0,pv:0,sx:1,sy:1,legL:0,legR:0,
  eye:{t:'open',s:1,px:0,py:0,ps:1,lid:GEO[k].lid0||0,tilt:0,rot:0},eyes:null,
  brow:{o:k==='garbanzo'?1:0,l:0,m:0,r:0},mouth:Object.assign({},MOUTH0[k]),
  arms:{l:[12,0],r:[12,0]},blush:k==='grano'?1:0,tint:null,acc:0,fx:[]};}

const heartPath=(cx,cy,r)=>`M${cx} ${cy+r*.9} C${cx-r*1.6} ${cy-r*.1} ${cx-r*.7} ${cy-r*1.3} ${cx} ${cy-r*.45} C${cx+r*.7} ${cy-r*1.3} ${cx+r*1.6} ${cy-r*.1} ${cx} ${cy+r*.9}Z`;
function starPath(cx,cy,Ro,ri,n=5,rot=-90){let d='';for(let i=0;i<n*2;i++){const a=(rot+i*180/n)*PI/180,rr=i%2?ri:Ro;d+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1);}return d+'Z';}
function spiralPath(cx,cy,Rr,rot){let d='';for(let i=0;i<=44;i++){const a=i/44*TAU*2.3+rot,rr=Rr*i/44;d+=(i?'L':'M')+(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1);}return d;}

function drawEye(cx,cy,r,e,side,k,uid,i){
  const Rr=r*(e.s||1),sw=Math.max(3.6,r*.38);
  const st=`style="fill:none;stroke:${INK};stroke-width:${sw.toFixed(1)};stroke-linecap:round;stroke-linejoin:round"`;
  switch(e.t){
    case 'happy':return `<path d="M${cx-Rr*.9} ${cy+Rr*.3} Q${cx} ${cy-Rr*1.1} ${cx+Rr*.9} ${cy+Rr*.3}" ${st}/>`;
    case 'closed':return `<path d="M${cx-Rr*.9} ${cy} Q${cx} ${cy+Rr*.8} ${cx+Rr*.9} ${cy}" ${st}/>`;
    case 'squint':{
      if(side===0)return `<path d="M${cx-Rr} ${cy-Rr*.55} L${cx-Rr*.15} ${cy} L${cx-Rr} ${cy+Rr*.55} M${cx+Rr} ${cy-Rr*.55} L${cx+Rr*.15} ${cy} L${cx+Rr} ${cy+Rr*.55}" ${st}/>`;
      const d=-side;return `<path d="M${cx-d*Rr*.8} ${cy-Rr*.65} L${cx+d*Rr*.7} ${cy} L${cx-d*Rr*.8} ${cy+Rr*.65}" ${st}/>`;}
    case 'x':return `<path d="M${cx-Rr*.75} ${cy-Rr*.75} L${cx+Rr*.75} ${cy+Rr*.75} M${cx+Rr*.75} ${cy-Rr*.75} L${cx-Rr*.75} ${cy+Rr*.75}" ${st}/>`;
    case 'spiral':return C(cx,cy,Rr,'#fff')+`<path d="${spiralPath(cx,cy,Rr*.85,e.rot||0)}" style="fill:none;stroke:${INK};stroke-width:${(sw*.65).toFixed(1)};stroke-linecap:round"/>`;
    case 'heart':return `<path d="${heartPath(cx,cy,Rr*1.05)}" style="fill:#FF2E63;stroke:#fff;stroke-width:3;stroke-linejoin:round"/>`;
    case 'star':return `<path d="${starPath(cx,cy,Rr*1.3,Rr*.58,5,-90+(e.rot||0))}" style="fill:#fff;stroke:${INK};stroke-width:3;stroke-linejoin:round"/>`;
  }
  const pr=Rr*.5*(e.ps??1),px=cx+(e.px||0)*Rr*.42,py=cy+(e.py||0)*Rr*.42+Rr*.06;
  let o=C(cx,cy,Rr.toFixed(2),'#fff')+C(px.toFixed(2),py.toFixed(2),pr.toFixed(2),INK)+C((px-pr*.35).toFixed(2),(py-pr*.38).toFixed(2),(pr*.3).toFixed(2),'#fff');
  const lid=E.clamp(e.lid||0);
  if(lid>.01){const id=`ec${uid}_${i}`,ey=cy-Rr+2*Rr*lid,tilt=(e.tilt||0)*(side===0?0:-side);
    o+=`<clipPath id="${id}"><circle cx="${cx}" cy="${cy}" r="${(Rr+.6).toFixed(2)}"/></clipPath><g clip-path="url(#${id})"><rect x="${cx-Rr*2}" y="${(ey-Rr*3).toFixed(2)}" width="${Rr*4}" height="${Rr*3}" transform="rotate(${tilt.toFixed(1)} ${cx} ${ey.toFixed(2)})" style="fill:${SKIN[k][1]}"/></g>`;}
  return o;
}
function drawMouth(k,m){
  const g=GEO[k],mx=g.mouth[0]+(m.ox||0),my=g.mouth[1],mw=g.mw,w=m.w??1,h=m.h??1;
  const st=`style="fill:none;stroke:${INK};stroke-width:5;stroke-linecap:round;stroke-linejoin:round"`;
  let s='';
  switch(m.t){
    case 'grin':{const W=mw*w,H=mw*h;s=`<path d="M${-W} 0 A${W} ${H.toFixed(2)} 0 0 0 ${W} 0Z" style="fill:${INK}"/>`;if(m.tongue)s+=`<ellipse cx="0" cy="${(H*.58).toFixed(2)}" rx="${(W*.42).toFixed(2)}" ry="${(H*.27).toFixed(2)}" style="fill:${PINK}"/>`;break;}
    case 'smile':s=`<path d="M${-mw*w} 0 Q0 ${(mw*.9*h).toFixed(2)} ${mw*w} 0" ${st}/>`;break;
    case 'frown':s=`<path d="M${-mw*w} ${(mw*.4*h).toFixed(2)} Q0 ${(-mw*.5*h).toFixed(2)} ${mw*w} ${(mw*.4*h).toFixed(2)}" ${st}/>`;break;
    case 'o':s=`<ellipse rx="${(mw*.5*w).toFixed(2)}" ry="${(mw*.5*h).toFixed(2)}" style="fill:${INK}"/>`;break;
    case 'flat':s=`<path d="M${-mw*.8*w} 0 L${mw*.8*w} 0" style="stroke:${INK};stroke-width:6;stroke-linecap:round"/>`;break;
    case 'wavy':{const W=mw*w,Am=3*h;let d=`M${-W} 0`;for(let i=1;i<=6;i++)d+=` L${(-W+i*W/3).toFixed(2)} ${i%2?-Am:Am}`;s=`<path d="${d}" ${st}/>`;break;}
    case 'teeth':{const W=mw*w,H=mw*.5*h;s=`<rect x="${-W}" y="${-H}" width="${W*2}" height="${H*2}" rx="${H*.8}" style="fill:${INK}"/><rect x="${-W+3}" y="${-H+3}" width="${W*2-6}" height="${H*2-6}" rx="${H*.5}" style="fill:#fff"/><path d="M${-W+3} 0 L${W-3} 0 M${-W/3} ${-H+3} L${-W/3} ${H-3} M${W/3} ${-H+3} L${W/3} ${H-3}" style="stroke:${INK};stroke-width:2.5"/>`;break;}
    case 'tongue':s=`<ellipse cx="${mw*.2}" cy="${mw*.45}" rx="${mw*.38}" ry="${(mw*.5*h).toFixed(2)}" style="fill:${PINK}"/><path d="M${-mw*.8*w} 0 L${mw*.8*w} 0" style="stroke:${INK};stroke-width:6;stroke-linecap:round"/>`;break;
  }
  return `<g transform="translate(${mx.toFixed(2)} ${my}) rotate(${(m.tilt||0).toFixed(1)})">${s}</g>`;
}
function drawBrows(k,b){
  if((b.o||0)<.02)return '';
  const g=GEO[k],bb=g.browBase||{l:0,m:0,r:0},L=b.l+bb.l,M=b.m+bb.m,Rt=b.r+bb.r,by=g.browY;
  const st=`style="fill:none;stroke:${INK};stroke-width:${g.browW||6};stroke-linecap:round;stroke-linejoin:round;opacity:${b.o.toFixed(2)}"`;
  if(g.uni){const hw=g.browHalf;return `<path d="M${-hw} ${(by+L).toFixed(2)} L0 ${(by+M).toFixed(2)} L${hw} ${(by+Rt).toFixed(2)}" ${st}/>`;}
  let d='';g.eyes.forEach(([ex],i)=>{const sd=i?1:-1,out=ex+sd*g.er,inn=ex-sd*g.er*.7;d+=`M${out} ${(by+(sd<0?L:Rt)).toFixed(2)} L${inn} ${(by+M).toFixed(2)} `;});
  return `<path d="${d}" ${st}/>`;
}
function handPos(k,side,ar){const [sx,sy]=GEO[k].sh[side<0?0:1],r1=ar[0]*PI/180,r2=(ar[0]+ar[1])*PI/180;return [sx+side*(Math.sin(r1)*16+Math.sin(r2)*15),sy+Math.cos(r1)*16+Math.cos(r2)*15];}
function drawArms(k,a){let s='';[['l',-1],['r',1]].forEach(([n,sd],i)=>{const [sx,sy]=GEO[k].sh[i],r1=a[n][0]*PI/180,r2=(a[n][0]+a[n][1])*PI/180;
  const ex=sx+sd*Math.sin(r1)*16,ey=sy+Math.cos(r1)*16,hx=ex+sd*Math.sin(r2)*15,hy=ey+Math.cos(r2)*15;
  s+=`<path d="M${sx} ${sy} L${ex.toFixed(2)} ${ey.toFixed(2)} L${hx.toFixed(2)} ${hy.toFixed(2)}" style="fill:none;stroke:${INK};stroke-width:7;stroke-linecap:round;stroke-linejoin:round"/>`+C(hx.toFixed(2),hy.toFixed(2),6.5,INK);});return s;}
function drawLegs(k,p){const [a,b]=GEO[k].legs,l=p.legL||0,r=p.legR||0;return R(a,-16+l,9,16,INK,2)+R(a-6,-5+l,17,5,INK,2.5)+R(b,-16+r,9,16,INK,2)+R(b-2,-5+r,17,5,INK,2.5);}
function drawFx(f){
  const {k,x=0,y=0,s=1,o=1,r=0}=f;if(s<=.01||o<=.01)return '';let n='';
  switch(k){
    case 'tear':n=`<path d="M0 -9 Q7 0 5 5 Q0 10 -5 5 Q-7 0 0 -9Z" style="fill:#5EC2FF"/>`+C(-2,2,1.6,'#fff');break;
    case 'stream':n=R(-3.5,0,7,(f.h||30).toFixed(1),'#5EC2FF',3.5);break;
    case 'q':n=`<text text-anchor="middle" y="11" style="font:800 32px var(--f-display);fill:var(--cobalto)">?</text>`;break;
    case 'ex':n=`<text text-anchor="middle" y="12" style="font:800 36px var(--f-display);fill:var(--pipa)">!</text>`;break;
    case 'z':n=`<text text-anchor="middle" y="9" style="font:800 26px var(--f-display);fill:${INK}">Z</text>`;break;
    case 'txt':n=`<text text-anchor="middle" y="7" style="font:800 19px var(--f-display);fill:${f.c||INK}">${f.str}</text>`;break;
    case 'heart':n=`<path d="${heartPath(0,0,10)}" style="fill:#FF2E63"/>`;break;
    case 'note':n=C(-5,8,6,INK)+R(-1,-14,3.5,22,INK)+`<path d="M2.5 -14 Q13 -10 11 0 Q9 -6 2.5 -7Z" style="fill:${INK}"/>`;break;
    case 'star':n=`<path d="${starPath(0,0,12,4.6,4,0)}" style="fill:var(--grano);stroke:${INK};stroke-width:2;stroke-linejoin:round"/>`;break;
    case 'vein':n=`<path d="M-11 -3 Q-4 -4 -3 -11 M3 -11 Q4 -4 11 -3 M11 3 Q4 4 3 11 M-3 11 Q-4 4 -11 3" style="fill:none;stroke:#FF2D2D;stroke-width:4.5;stroke-linecap:round"/>`;break;
    case 'puff':n=`<circle r="9" style="fill:#fff;stroke:${INK};stroke-width:2.5"/>`;break;
    case 'dot':n=C(0,0,4.5,INK);break;
    case 'bubble':n=`<ellipse rx="30" ry="22" style="fill:#fff;stroke:${INK};stroke-width:3"/>`;break;
    case 'bulb':{const lit=f.lit||0;let rays='';if(lit>0)for(let i=0;i<7;i++){const a=(-180+i*30)*PI/180;rays+=`M${(Math.cos(a)*17).toFixed(1)} ${(-6+Math.sin(a)*17).toFixed(1)} L${(Math.cos(a)*24).toFixed(1)} ${(-6+Math.sin(a)*24).toFixed(1)} `;}
      n=(rays?`<path d="${rays}" style="stroke:var(--grano);stroke-width:3.5;stroke-linecap:round;opacity:${lit}"/>`:'')+`<circle cy="-6" r="11" style="fill:${lit>.5?'var(--grano)':'#fff'};stroke:${INK};stroke-width:3"/>`+R(-5.5,4,11,8,INK,2);break;}
    case 'cloud':{let rain='';for(let j=0;j<3;j++){const yy=12+((f.ph*55+j*11)%26);rain+=`M${-14+j*14} ${yy.toFixed(1)} L${-16+j*14} ${(yy+8).toFixed(1)} `;}
      n=`<path d="${rain}" style="stroke:#5EC2FF;stroke-width:3.5;stroke-linecap:round"/><path d="M-26 6 Q-32 -6 -19 -10 Q-15 -23 0 -19 Q11 -27 21 -14 Q33 -12 29 2 Q29 8 21 8 L-19 8 Q-27 8 -26 6Z" style="fill:#8C93AD"/>`;break;}
    case 'conf':n=R(-4,-6,8,12,f.c,1.5);break;
    case 'line':n=`<path d="M0 0 L0 ${-(f.len||14).toFixed(1)}" style="stroke:${f.c||INK};stroke-width:4;stroke-linecap:round"/>`;break;
    case 'stink':n=`<path d="M0 0 Q6 -6 0 -12 Q-6 -18 0 -24" style="fill:none;stroke:#62C23E;stroke-width:4;stroke-linecap:round"/>`;break;
  }
  return `<g transform="translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${r.toFixed(1)}) scale(${s.toFixed(3)})" style="opacity:${E.clamp(o).toFixed(2)}">${n}</g>`;
}
function drawChar(k,p,uid,blinkClass){
  const g=GEO[k],[c,cd]=SKIN[k],pv=p.pv||0,ss=1-Math.min(.6,Math.max(0,-p.ty)/110);
  let body=(g.acc?g.acc(p.acc||0):'')+F(g.base,c)+F(g.shade,cd);
  if(p.tint&&p.tint.a>.01)body+=`<path d="${g.base}" style="fill:${p.tint.c};opacity:${p.tint.a.toFixed(2)}"/>`;
  if(p.blush>.01)g.cheeks.forEach(([x,y])=>body+=`<circle cx="${x}" cy="${y}" r="6" style="fill:${g.cheekC};opacity:${p.blush.toFixed(2)}"/>`);
  let eyes='';g.eyes.forEach(([ex,ey],i)=>{const sd=g.eyes.length===1?0:(i?1:-1);const e=Object.assign({},p.eye,(p.eyes&&p.eyes[i])||{});eyes+=drawEye(ex,ey,g.er,e,sd,k,uid,i);});
  body+=blinkClass?`<g class="eyes">${eyes}</g>`:eyes;
  if(g.glasses)body+=g.eyes.map(([ex,ey])=>`<circle cx="${ex}" cy="${ey}" r="16" style="fill:none;stroke:${INK};stroke-width:6"/>`).join('')+R(-4,-65,8,5,INK);
  body+=drawBrows(k,p.brow)+drawMouth(k,p.mouth)+drawArms(k,p.arms);
  return `<ellipse cx="${p.tx.toFixed(2)}" cy="1" rx="${(g.shadow*ss*p.sx).toFixed(2)}" ry="${(5*ss).toFixed(2)}" style="fill:${INK};opacity:${(.13*ss).toFixed(3)}"/>`+
    `<g transform="translate(${p.tx.toFixed(2)} ${p.ty.toFixed(2)}) translate(0 ${pv}) rotate(${p.rot.toFixed(2)}) translate(0 ${-pv})">${drawLegs(k,p)}<g transform="scale(${p.sx.toFixed(3)} ${p.sy.toFixed(3)})">${body}</g></g>`+
    `<g transform="translate(${p.tx.toFixed(2)} ${p.ty.toFixed(2)})">${p.fx.map(drawFx).join('')}</g>`;
}
function char(kind){return `<g>${drawChar(kind,P0(kind),++UID,true)}</g>`;}
