/* ===== KIT · estilo explainer TikTok (gris + serif + motion graphics) ===== */
const W=540,H=960;
const K={bg:'#c6c6c6',ink:'#141212',pink:'#ff2e63',red:'#f34841',rose:'#e73568',blue:'#2a37d7',purple:'#8005f0',mag:'#b526ad',
  orange:'#f76e19',yellow:'#f6a81a',green:'#2b7a3e',green2:'#3f9b4f',lgreen:'#a6e3a1',brown:'#9a4a2f',dbrown:'#66291f',
  cream:'#f4eee2',white:'#ffffff',grey:'#8e8e8e',sky:'#c6c6c6'};
const f1=n=>(+n).toFixed(1),f2=n=>(+n).toFixed(2),f3=n=>(+n).toFixed(3);
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const sg=(x,a,b)=>cl((x-a)/(b-a));
const lerp=(a,b,p)=>a+(b-a)*p;
const bel=(x,a,b)=>x<=a||x>=b?0:Math.sin(Math.PI*(x-a)/(b-a));
const EZ={lin:p=>p,out:p=>1-Math.pow(1-p,3),out4:p=>1-Math.pow(1-p,4),out5:p=>1-Math.pow(1-p,5),in:p=>p*p*p,in2:p=>p*p,
  io:p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,sine:p=>-(Math.cos(Math.PI*p)-1)/2,
  back:p=>{const c1=1.9,c3=c1+1;return 1+c3*Math.pow(p-1,3)+c1*Math.pow(p-1,2);},
  back2:p=>{const c1=1.25,c3=c1+1;return 1+c3*Math.pow(p-1,3)+c1*Math.pow(p-1,2);},
  el:p=>p<=0?0:p>=1?1:Math.pow(2,-10*p)*Math.sin((p*10-.75)*2*Math.PI/3)+1};
const hs=i=>{const x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x);};
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const hex2=c=>{c=c.replace('#','');return [0,2,4].map(i=>parseInt(c.substr(i,2),16));};
const mixc=(a,b,p)=>{const A=hex2(a),B=hex2(b);return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*cl(p)).toString(16).padStart(2,'0')).join('');};

/* ---------- primitivas SVG ---------- */
const P=(d,s)=>`<path d="${d}" style="${s}"/>`;
const ST=(c,w,x='')=>`fill:none;stroke:${c};stroke-width:${w};stroke-linecap:round;stroke-linejoin:round;${x}`;
const OL=(w=2.2,c=K.ink)=>`stroke:${c};stroke-width:${w};stroke-linejoin:round`;
const Rc=(x,y,w,h,fill,rx=0,s='')=>`<rect x="${f1(x)}" y="${f1(y)}" width="${f1(Math.max(0,w))}" height="${f1(Math.max(0,h))}" rx="${rx}" style="fill:${fill};${s}"/>`;
const Ci=(x,y,r,fill,s='')=>`<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(Math.max(0,r))}" style="fill:${fill};${s}"/>`;
const El=(x,y,rx,ry,fill,s='')=>`<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="${f1(Math.max(0,rx))}" ry="${f1(Math.max(0,ry))}" style="fill:${fill};${s}"/>`;
const scv=v=>Math.abs(v)<.001?(v<0?-.001:.001):v;
function G(x,y,s,r,inner,o=1,sy,extra=''){
  if(o<=.003||!inner)return '';
  let tr=`translate(${f2(x)} ${f2(y)})`;if(r)tr+=` rotate(${f2(r)})`;
  if(s!==1||sy!==undefined)tr+=` scale(${f3(scv(s))} ${f3(sy===undefined?Math.abs(scv(s)):scv(sy))})`;
  return `<g transform="${tr}"${o<1?` opacity="${f3(o)}"`:''}${extra}>${inner}</g>`;
}
/* trazo que se dibuja (0..1) */
const DR=(d,s,p)=>p<=0?'':`<path pathLength="1" d="${d}" style="${s};stroke-dasharray:1 1;stroke-dashoffset:${f3(1-cl(p))}"/>`;

/* ---------- filtros por fotograma ---------- */
let FID=0,FDEFS='';
function fReset(){FID=0;FDEFS='';}
function blurG(inner,sx,sy=0,full=false){
  if(!inner)return '';sx=Math.abs(sx);sy=Math.abs(sy);if(sx<.2&&sy<.2)return inner;
  const id='b'+(FID++);
  FDEFS+=full?`<filter id="${id}" filterUnits="userSpaceOnUse" x="-200" y="-200" width="${W+400}" height="${H+400}"><feGaussianBlur stdDeviation="${f2(sx)} ${f2(sy)}"/></filter>`
    :`<filter id="${id}" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="${f2(sx)} ${f2(sy)}"/></filter>`;
  return `<g filter="url(#${id})">${inner}</g>`;
}
function satG(inner,s,full=true){
  if(s>.995)return inner;const id='s'+(FID++);
  FDEFS+=`<filter id="${id}" ${full?`filterUnits="userSpaceOnUse" x="-100" y="-100" width="${W+200}" height="${H+200}"`:''} color-interpolation-filters="sRGB"><feColorMatrix type="saturate" values="${f3(cl(s))}"/></filter>`;
  return `<g filter="url(#${id})">${inner}</g>`;
}
function clipG(inner,shape){const id='c'+(FID++);FDEFS+=`<clipPath id="${id}">${shape}</clipPath>`;return `<g clip-path="url(#${id})">${inner}</g>`;}
function lgrad(stops,x1=0,y1=0,x2=0,y2=1,units=''){const id='g'+(FID++);
  FDEFS+=`<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${units?`gradientUnits="${units}"`:''}>${stops.map(([o,c,a])=>`<stop offset="${o}" stop-color="${c}"${a!==undefined?` stop-opacity="${a}"`:''}/>`).join('')}</linearGradient>`;return `url(#${id})`;}
function rgrad(stops,cx=.5,cy=.5,r=.5,units=''){const id='g'+(FID++);
  FDEFS+=`<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}" ${units?`gradientUnits="${units}"`:''}>${stops.map(([o,c,a])=>`<stop offset="${o}" stop-color="${c}"${a!==undefined?` stop-opacity="${a}"`:''}/>`).join('')}</radialGradient>`;return `url(#${id})`;}

/* ---------- degradados fijos (definidos una vez por fotograma) ---------- */
const GDEFS=`
<linearGradient id="gRP" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f5562a"/><stop offset="1" stop-color="#ec2f72"/></linearGradient>
<linearGradient id="gRPv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff5a3c"/><stop offset="1" stop-color="#ec2f72"/></linearGradient>
<linearGradient id="gOR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6a81a"/><stop offset="1" stop-color="#f5562a"/></linearGradient>
<linearGradient id="gGRY" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9a9a9a"/><stop offset="1" stop-color="#6c6c6c"/></linearGradient>
<linearGradient id="gPALE" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ec3f7c"/><stop offset="1" stop-color="#f08aab"/></linearGradient>
<linearGradient id="gSUN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f9b52a"/><stop offset=".55" stop-color="#f7801b"/><stop offset="1" stop-color="#f4493c"/></linearGradient>
<linearGradient id="gSUNP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4c4"/><stop offset="1" stop-color="#ffd86b"/></linearGradient>
<linearGradient id="gPU" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8005f0"/><stop offset="1" stop-color="#a51fd0"/></linearGradient>
<linearGradient id="gMA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c22aa6"/><stop offset="1" stop-color="#e73568"/></linearGradient>
<linearGradient id="gWA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b49ec"/><stop offset="1" stop-color="#2230c4"/></linearGradient>
<linearGradient id="gUW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3e4cf0"/><stop offset=".6" stop-color="#2a37d7"/><stop offset="1" stop-color="#1b2596"/></linearGradient>
<linearGradient id="gGR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f9b4f"/><stop offset="1" stop-color="#2b7a3e"/></linearGradient>
<linearGradient id="gMUD" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b5603c"/><stop offset="1" stop-color="#7d3a23"/></linearGradient>
<linearGradient id="gCAR" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6a81a"/><stop offset="1" stop-color="#f76e19"/></linearGradient>
<linearGradient id="gDNA1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f34841"/><stop offset="1" stop-color="#e73568"/></linearGradient>
<linearGradient id="gDNA2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8005f0"/><stop offset="1" stop-color="#b526ad"/></linearGradient>
<linearGradient id="gGRANO" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffc83d"/><stop offset="1" stop-color="#f7961b"/></linearGradient>
<linearGradient id="gPIPA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5a3c"/><stop offset="1" stop-color="#ec2f72"/></linearGradient>
<linearGradient id="gLENT" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3fdcae"/><stop offset="1" stop-color="#22b58a"/></linearGradient>
<linearGradient id="gGARB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9a3cff"/><stop offset="1" stop-color="#6a14e0"/></linearGradient>
<radialGradient id="gVIG" cx=".5" cy=".46" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".085"/></radialGradient>
<radialGradient id="gBGL" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".07"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>`;

/* ---------- texto ---------- */
const CV=document.createElement('canvas').getContext('2d');
const MW={};
function mw(s,font){const k=font+'|'+s;if(MW[k]!==undefined)return MW[k];CV.font=font;return MW[k]=CV.measureText(s).width;}
const fSerif=(sz,it)=>`${it?'italic ':''}400 ${sz}px IS`;
const fSans=(sz,w=500)=>`${w} ${sz}px IN`;
function Ts(x,y,str,sz,o={}){
  const fill=o.fill||K.ink,sw=o.sw??sz*.017;
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.a||'middle'}" style="font-family:IS;${o.it?'font-style:italic;':''}font-size:${f1(sz)}px;fill:${fill};stroke:${o.stroke||fill};stroke-width:${f2(sw)};paint-order:stroke;stroke-linejoin:round;${o.ls?`letter-spacing:${o.ls}em;`:''}${o.x||''}">${esc(str)}</text>`;
}
function Tn(x,y,str,sz,w=500,o={}){
  return `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${o.a||'middle'}" style="font-family:IN;font-weight:${w};font-size:${f1(sz)}px;fill:${o.fill||K.ink};${o.ls?`letter-spacing:${o.ls}em;`:''}${o.x||''}">${esc(str)}</text>`;
}

/* ---------- etiquetas ---------- */
function pillS(str,o={}){
  const sz=o.sz||12.5,wt=o.w||500,w=mw(str,fSans(sz,wt))+sz*(o.padx||1.5),h=sz*(o.h||1.95);
  const fill=o.fill||K.ink,tc=o.tc||'#fff';
  return {w,h,svg:Rc(-w/2,-h/2,w,h,fill,h/2,o.s||'')+Tn(0,sz*.36,str,sz,wt,{fill:tc})};
}
const pill=(str,o)=>pillS(str,o).svg;
function pillA(x,y,str,p,o={}){if(p<=0)return '';const q=cl(p);return G(x,y,EZ.back(q)*(o.k||1),(o.r||0)*(1-q)+(o.r2||0),pill(str,o),cl(q*3)*(o.o??1));}
/* sello */
function stampS(str,c=K.pink,sz=24,fill='#fff'){const w=mw(str,fSans(sz,800))*(1+.07)+sz*1.1,h=sz*1.55;
  return Rc(-w/2,-h/2,w,h,fill,sz*.2,`stroke:${c};stroke-width:${f2(sz*.11)}`)+Tn(0,sz*.36,str,sz,800,{fill:c,ls:.07});}
function stampA(x,y,lt,str,o={}){
  if(lt<0)return '';const p=sg(lt,0,.2),s=1+.95*(1-EZ.out4(p)),sh=lt>.2&&lt<.5?Math.sin(lt*75)*(1-(lt-.2)/.3)*2.4:0;
  const out=o.out!==undefined?1-EZ.out(sg(lt,o.out,o.out+.25)):1;
  return G(x+sh,y,s*(o.s||1),o.r??-4,stampS(str,o.c||K.pink,o.sz||24,o.fill||'#fff'),cl(p*2.6)*out*(o.o??1));
}
/* destellos ✦ */
const spark4=(r,c)=>P(`M0 ${-r} Q${r*.16} ${-r*.16} ${r} 0 Q${r*.16} ${r*.16} 0 ${r} Q${-r*.16} ${r*.16} ${-r} 0 Q${-r*.16} ${-r*.16} 0 ${-r}Z`,`fill:${c}`);
function sparkA(x,y,lt,r=9,c=K.pink,dur=.6){if(lt<0||lt>dur)return '';const p=lt/dur;return G(x,y,EZ.back(sg(p,0,.4))*(1-EZ.in(sg(p,.6,1))),p*90,spark4(r,c));}
/* líneas de velocidad "= palabra =" */
function speedLines(x,y,w,p,c=K.ink){if(p<=0)return '';let s='';const o=cl(p*3)*(1-sg(p,.75,1));
  [[-1,-5],[-1,5],[1,-5],[1,5]].forEach(([sd,dy],i)=>{const x0=x+sd*(w/2+10),len=16*EZ.out(sg(p,0,.5));s+=P(`M${f1(x0)} ${f1(y+dy)} L${f1(x0+sd*len)} ${f1(y+dy)}`,ST(c,2.6));});
  return G(0,0,1,0,s,o);}
/* flecha a mano */
function arrowA(d,p,c=K.ink,w=2.6,head=9){if(p<=0)return '';
  return DR(d,ST(c,w),p);}
/* subrayado/círculo dibujado */
function ringA(x,y,rx,ry,p,c=K.pink,w=3){if(p<=0)return '';const d=`M${f1(x+rx)} ${f1(y)} A${rx} ${ry} 0 1 1 ${f1(x+rx-.1)} ${f1(y-4)}`;return DR(d,ST(c,w),EZ.out(p));}
/* nube con contorno */
function cloudS(w=90){const h=w*.34;return P(`M${-w/2} 0 Q${-w/2} ${-h*.7} ${-w*.28} ${-h*.62} Q${-w*.22} ${-h*1.25} ${-w*.02} ${-h*1.05} Q${w*.12} ${-h*1.5} ${w*.27} ${-h*.9} Q${w*.5} ${-h*.95} ${w/2} 0 Z`,`fill:#fff;${OL(2)}`);}
/* sombra elíptica bajo objetos */
const shadowE=(x,y,rx,o=.14)=>El(x,y,rx,rx*.14,`rgba(20,18,18,${o})`);
/* rayos de fondo (sunburst) */
function raysBg(cx,cy,rot,n=18,c1='#d8d8d8',o=1){let s='';const R=1400;
  for(let i=0;i<n;i++){const a0=(rot+i*360/n)*Math.PI/180,a1=(rot+(i+.5)*360/n)*Math.PI/180;
    s+=P(`M${f1(cx)} ${f1(cy)} L${f1(cx+R*Math.cos(a0))} ${f1(cy+R*Math.sin(a0))} L${f1(cx+R*Math.cos(a1))} ${f1(cy+R*Math.sin(a1))}Z`,`fill:${c1}`);}
  return G(0,0,1,0,s,o);}
/* confeti */
function confetti(x,y,lt,n=26,seed=1,spread=220){if(lt<0||lt>2.2)return '';let s='';const cols=[K.pink,K.blue,K.yellow,K.purple,K.orange,'#fff'];
  for(let i=0;i<n;i++){const a=-Math.PI/2+(hs(seed*31+i)-.5)*2.2,v=spread*(.5+hs(seed*7+i)*.7);
    const px=x+Math.cos(a)*v*EZ.out(cl(lt/.7))+Math.sin(lt*3+i)*8,py=y+Math.sin(a)*v*EZ.out(cl(lt/.7))+lt*lt*120;
    s+=G(px,py,1,lt*400*(hs(i)-.5)+i*40,Rc(-3,-5,6,10,cols[i%cols.length],1.2),1-sg(lt,1.5,2.2));}
  return s;}
