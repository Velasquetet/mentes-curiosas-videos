/* ===== MOTOR: personajes, titulares, subtítulos, transiciones, render ===== */
const DUR=61.6;
const WORDS=window.WORDS; // [{s,e,txt,w:[[t,word],...]}]

/* ---------- personajes (rig propio) ---------- */
let UIDF=0;
function walkAt(t,keys){if(t<=keys[0][0])return {x:keys[0][1],mv:0,dir:0};
  for(let i=1;i<keys.length;i++){if(t<=keys[i][0]){const [t0,x0]=keys[i-1],[t1,x1]=keys[i],p=EZ.io(sg(t,t0,t1));return {x:lerp(x0,x1,p),mv:x1!==x0?Math.min(1,Math.sin(Math.PI*p)*2):0,dir:Math.sign(x1-x0)};}}
  return {x:keys[keys.length-1][1],mv:0,dir:0};}
function emoAt(sched,t){let cur=sched[0];for(const s of sched)if(t>=s[0])cur=s;return cur;}
/* actor(k,{t0,t1,path:[[t,x]],y,s,emo:[[t,i,v,off]],face,look,prop,mod,pop,exit},t) */
function actor(k,o,t){
  if(t<(o.t0??-1)||t>(o.t1??99))return '';
  const lt=t-(o.t0??0),w=walkAt(t,o.path),em=emoAt(o.emo,t),p=P0(k),e=EMO[em[1]],L=e.L[em[2]];
  e.f[em[2]](p,(((t-em[0])+(em[3]||0))*PERS[k].tempo)%L,k);stylize(k,p,t);
  if(w.mv>0){const ph=t*13;p.ty-=Math.abs(Math.sin(ph))*11*w.mv;p.legL=-7*Math.max(0,Math.sin(ph))*w.mv;p.legR=-7*Math.max(0,-Math.sin(ph))*w.mv;p.rot+=5*Math.sin(ph)*w.mv;p.arms.l=[12+30*Math.sin(ph)*w.mv,10];p.arms.r=[12-30*Math.sin(ph)*w.mv,10];}
  let flip=o.face?o.face(t)<0:false;if(w.mv>0&&w.dir)flip=w.dir<0;
  if(o.look){const lk=o.look(t);if(lk!==undefined&&!['happy','closed','squint','x','spiral','heart','star'].includes(p.eye.t))p.eye.px=lk*(flip?-1:1);}
  // parpadeo propio (determinista)
  const bt=(t*1.0+hs(k.length)*3)%3.6;if(bt<.12&&['open','wide'].includes(p.eye.t||'open'))p.eye.lid=Math.max(p.eye.lid||0,1-Math.abs(bt-.06)/.06);
  if(o.mod)o.mod(p,t,lt);
  const ent=o.pop===false?1:EZ.back(cl(lt/.4)),ex=o.exit?1-EZ.out(sg(t,o.exit,o.exit+.3)):1;const gs=ent*ex;
  let prop='';const pr=o.prop?o.prop(t):'';if(pr){const hp=handPos(k,1,p.arms.r);prop=G((p.tx+hp[0]*p.sx)*gs,(p.ty+hp[1]*p.sy)*gs,gs,0,pr);}
  const acc=o.acc?o.acc(t):'';const s=o.s||.8,y=o.y?o.y(t):0;
  const body=drawChar(k,p,'f'+(UIDF++),false);
  return `<g transform="translate(${f1(w.x)} ${f1(y)}) scale(${f3(flip?-s:s)} ${f3(s)})"><g transform="scale(${f3(gs)})">${body}</g>${prop}${acc?G(p.tx*gs,p.ty*gs,gs,0,acc):''}</g>`;
}
const PROP={
  lupa:G(0,0,.5,-35,lupaS(26)),
  regla:G(0,0,1,-20,Rc(-4,-70,14,74,'#f6d36b',2,OL(2))+[...Array(7)].map((_,i)=>P(`M-4 ${-62+i*10} l${i%2?5:8} 0`,ST(K.ink,1.4))).join('')),
  puntero:G(0,0,1,0,P('M0 0 L56 -42',ST('#6b4a2e',4.6))+Ci(56,-42,4.5,K.pink)),
  zanahoria:G(0,0,.75,-60,carrotS()),
  papel:G(0,0,1,-8,Rc(-20,-50,40,50,'#fff',3,OL(2))+P('M-12 -40 l24 0 M-12 -32 l24 0 M-12 -24 l18 0',ST('rgba(20,18,18,.45)',2))+Rc(-12,-16,24,5,K.pink,2)),
  prismaticos:G(0,0,1,0,Rc(-15,-11,13,17,K.ink,4)+Rc(2,-11,13,17,K.ink,4)+Ci(-8,-12,4,'#7fd3ff')+Ci(9,-12,4,'#7fd3ff')),
  espejo:G(0,0,1,0,P('M0 0 L0 24',ST(K.ink,6))+El(0,-14,13,17,'#cfefff',`stroke:${K.ink};stroke-width:4`)+P('M-5 -20 l6 -6',ST('#fff',3))),
  movil:G(0,0,1,-10,Rc(-10,-36,20,36,K.ink,4)+Rc(-7.5,-32,15,26,'#9fd8ff',2))};
const SNORKEL=G(0,0,1,0,Rc(-36,-86,50,24,'rgba(160,220,255,.6)',10,`stroke:${K.ink};stroke-width:4`)+P('M10 -78 q18 -30 6 -58',ST(K.ink,5))+Ci(16,-136,4,K.pink));
/* pose suelta (sin camino) para apariciones rápidas */
function pose(k,ei,v,lt,x,y,s,flip=false,mod){const p=P0(k);EMO[ei].f[v](p,((lt*PERS[k].tempo)%EMO[ei].L[v]),k);stylize(k,p,lt);if(mod)mod(p);
  return `<g transform="translate(${f1(x)} ${f1(y)}) scale(${f3(flip?-s:s)} ${f3(s)})">${drawChar(k,p,'q'+(UIDF++),false)}</g>`;}

/* ---------- titulares (serif + cursiva en degradado) ---------- */
/* línea: {txt:'más *rosas*', sz:46, t:[...tiempos por palabra], num:false} ; *x* = cursiva */
function parseLine(L){const words=[];let on=false;L.txt.split(' ').forEach(w=>{let it=on;if(/^¿?\*/.test(w)){it=true;on=true;}if(/\*[.,:…?!]*$/.test(w)){on=false;}words.push({w:w.replace(/\*/g,''),it});});return words;}
function headline(H,t){
  if(t<H.t0-.01||t>H.t1+.4)return '';
  const out=sg(t,H.t1-.18,H.t1+.12);
  let y=H.y||150,s='';
  H.lines.forEach((L,li)=>{
    const words=parseLine(L),sz=L.sz||32,num=!!L.num;
    const fontOf=w=>num&&!w.it?fSans(sz,500):fSerif(sz,w.it);
    const sp=mw(' ',fSerif(sz,false))*.95;
    const ws=words.map(w=>mw(w.w,fontOf(w)));const tot=ws.reduce((a,b)=>a+b,0)+sp*(words.length-1);
    let x=270-tot/2;
    if(li>0)y+=sz*(L.gap??1.0);
    if(L.speed){const lt0=L.t?L.t[L.t.length-1]:H.t0;s+=speedLines(270,y-sz*.3,tot,sg(t,lt0,lt0+.8)*(1-out));}
    words.forEach((w,wi)=>{
      const tw=(L.t&&L.t[wi]!==undefined)?L.t[wi]:H.t0+li*.12+wi*.07;
      const p=sg(t,tw-.02,tw+.26);const cx=x+ws[wi]/2;x+=ws[wi]+sp;
      if(p<=0)return;
      const q=sg(out,wi*.06+li*.1,wi*.06+li*.1+.5);
      const op=cl(p*2.4)*(1-q);if(op<=.01)return;
      const dy=(1-EZ.out(p))*16-q*18,bl=(1-p)*4+q*4;
      const fill=w.it?(L.ic||H.ic||'url(#gRP)'):(L.c||K.ink);
      const sc=w.it?lerp(1.22,1,EZ.back(p)):1,rot=w.it?(1-EZ.out(p))*-5:0;
      let txtw=w.w,rb=0;
      if(num&&L.roll&&!w.it){const rq=sg(t,tw,tw+(L.roll||.4));if(rq<1){txtw=w.w.replace(/[0-9]/g,(d,ii)=>String((+d+Math.floor(t*34)+ii*3)%10));rb=4*(1-rq);}}
      const el=num&&!w.it?Tn(0,0,txtw,sz,500,{fill,ls:-.02}):Ts(0,0,w.w,sz,{it:w.it,fill,stroke:fill});
      s+=blurG(G(cx,y+dy,sc,rot,el,op),bl*.25,bl+rb);
      if(w.it&&L.spark&&p>.3)s+=sparkA(cx+ws[wi]/2+8,y-sz*.62,t-tw-.12,8,K.pink,.7)+sparkA(cx-ws[wi]/2-4,y-sz*.2,t-tw-.2,6,K.orange,.7);
    });
  });
  return s;
}
let HL=[];
function headlines(t){return HL.map(H=>headline(H,t)).join('');}

/* ---------- subtítulos karaoke (caja negra, palabra activa rosa) ---------- */
const CHUNKS=[];
(function(){WORDS.forEach((sg_,si)=>{const ws=sg_.w.map(([tt,w],i)=>({w,s:tt,e:i<sg_.w.length-1?sg_.w[i+1][0]:sg_.e}));let cur=[];
  const FW=new Set(['de','la','el','al','lo','y','a','en','que','con','los','las','un','una','su','se','si','del','o']);
  ws.forEach((o,i)=>{cur.push(o);const txt=cur.map(c=>c.w).join(' '),nxt=ws[i+1];
    const punct=/[.,:?!…]$/.test(o.w)&&cur.length>=1&&nxt;
    const brk=i===ws.length-1||cur.length>=4||punct||(nxt&&(txt+' '+nxt.w).length>25);
    if(brk){let carry=[];if(!punct&&i<ws.length-1){while(cur.length>2&&FW.has(cur[cur.length-1].w.toLowerCase()))carry.unshift(cur.pop());}
      CHUNKS.push({ws:cur,s:cur[0].s,e:cur[cur.length-1].e,si});cur=carry;}});});
  CHUNKS.forEach((c,i)=>{const n=CHUNKS[i+1];c.hide=n&&n.s-c.e<.75?n.s-.04:c.e+.42;});})();
function subtitle(t){
  const c=CHUNKS.find(c=>t>=c.s-.06&&t<c.hide);if(!c)return '';
  const sz=11.6,font=fSans(sz,700),sp=mw(' ',font);
  const ws=c.ws.map(o=>mw(o.w,font)),tot=ws.reduce((a,b)=>a+b,0)+sp*(ws.length-1);
  const w=tot+15,h=20,y=798;
  let s=Rc(270-w/2,y-h/2,w,h,'#0e0a0b',4.5);let x=270-tot/2;
  c.ws.forEach((o,i)=>{const col=t>=o.e?'#ffffff':(t>=o.s-.02?K.pink:'#8d8d8d');s+=Tn(x,y+4.1,o.w,sz,700,{a:'start',fill:col});x+=ws[i]+sp;});
  const pop=sg(t,c.s-.06,c.s+.06);
  return G(270,y,lerp(.94,1,pop),0,G(-270,-y,1,0,s),cl(pop*2));
}

/* ---------- escenas y transiciones ---------- */
let SCN=[]; // {id,a,b,draw(t),in:{type,dur,fx,fy,dir}}
function trans(sc,t){ // devuelve {p,type} si la escena está entrando
  if(!sc.in)return null;const d=sc.in.dur||.35;if(t>=sc.a+d)return null;return {p:sg(t,sc.a,sc.a+d),...sc.in};}
function compose(t){
  // escena actual = la última cuya a<=t; anterior si hay transición en curso
  let i=-1;for(let k=0;k<SCN.length;k++)if(t>=SCN[k].a)i=k;if(i<0)i=0;
  const cur=SCN[i],tr=trans(cur,t),prev=tr?SCN[i-1]:null;
  if(!tr||!prev)return cur.draw(t);
  const p=tr.p,A=prev.draw(t),B=cur.draw(t);
  switch(tr.type){
    case 'whipL':case 'whipR':case 'whipU':case 'whipD':{
      const e=EZ.io(p),bl=Math.sin(Math.PI*p)*(tr.blur||26);
      const horiz=tr.type==='whipL'||tr.type==='whipR',sgn=(tr.type==='whipL'||tr.type==='whipU')?1:-1;
      const D=horiz?W:H,o1=-sgn*D*e,o2=sgn*D*(1-e);
      const a=horiz?G(o1,0,1,0,A):G(0,o1,1,0,A),b=horiz?G(o2,0,1,0,B):G(0,o2,1,0,B);
      return blurG(a+b,horiz?bl:bl*.08,horiz?bl*.08:bl,true);}
    case 'zoom':{ // atravesar objeto en (fx,fy)
      const fx=tr.fx||270,fy=tr.fy||480,z1=1+((tr.z||9)-1)*EZ.in2(sg(p,0,.58)),z2=lerp(1.3,1,EZ.out(sg(p,.42,1)));
      const a=G(fx,fy,z1,0,G(-fx,-fy,1,0,A)),b=G(fx,fy,z2,0,G(-fx,-fy,1,0,BG()+B),EZ.io(sg(p,.4,.64)));
      const bl=Math.sin(Math.PI*sg(p,.2,.8))*7;
      return blurG(a,bl,bl,true)+blurG(b,bl*.6,bl*.6,true);}
    case 'iris':{ // círculo que se abre desde (fx,fy)
      const fx=tr.fx||270,fy=tr.fy||480,r=lerp(tr.r0||10,1150,EZ.in2(p));
      return A+clipG(BG()+B,`<circle cx="${f1(fx)}" cy="${f1(fy)}" r="${f1(r)}"/>`)+Ci(fx,fy,r,'none',`stroke:#fff;stroke-width:${f1(10*(1-p))};opacity:${f2(1-p)}`);}
    case 'fade':return A+G(0,0,1,0,BG()+B,EZ.io(p));
    case 'swap':return G(0,0,1,0,A,1-EZ.out(sg(p,0,.6)))+G(0,0,1,0,B,EZ.out(sg(p,.3,1)));
  }
  return B;
}

/* ---------- fondo gris ---------- */
const BG=()=>Rc(-60,-60,W+120,H+120,K.bg)+`<rect x="0" y="0" width="${W}" height="${H}" style="fill:url(#gBGL)"/>`;

/* ---------- render ---------- */
const art=document.getElementById('art');
window.render=function(t){
  fReset();UIDF=0;
  const seed=Math.floor(t*7.5)%40;
  const scene=compose(t);
  const over=(typeof overlays==='function')?overlays(t):'';
  const hl=headlines(t),sub=subtitle(t);
  art.innerHTML=`<defs>${GDEFS}
   <filter id="rough" filterUnits="userSpaceOnUse" x="-20" y="-20" width="${W+40}" height="${H+40}"><feTurbulence type="fractalNoise" baseFrequency="0.07" numOctaves="2" seed="${seed}" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G" result="d1"/><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" seed="${seed+3}" result="n2"/><feDisplacementMap in="d1" in2="n2" scale="0.45" xChannelSelector="R" yChannelSelector="G"/></filter>
   <filter id="grain" filterUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" seed="${Math.floor(t*30)%97}"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .5  0 0 0 0 .5  0 0 0 1 0"/></filter>
   ${FDEFS}</defs>
   <g filter="url(#rough)">${BG()}${scene}${over}${hl}${sub}</g>
   <rect width="${W}" height="${H}" style="fill:url(#gVIG)"/>
   <rect width="${W}" height="${H}" filter="url(#grain)" style="opacity:.05;mix-blend-mode:overlay"/>`;
};
window.DUR=DUR;
