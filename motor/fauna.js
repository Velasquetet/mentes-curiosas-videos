/* ===== FAUNA Y OBJETOS ===== */
const PAL={
  pink:{top:'#ff93b5',bot:'#f2396f',neck:'#ff709d',leg:'#ec5f8b',wing:'#ea3b74',tip:'#141212',beak:'#f8e9df'},
  grey:{top:'#cdcdcd',bot:'#8e8e8e',neck:'#b3b3b3',leg:'#8a8a8a',wing:'#a3a3a3',tip:'#4a4a4a',beak:'#e6e6e6'},
  pale:{top:'#faeaef',bot:'#ebc9d3',neck:'#f4dbe2',leg:'#e7bccb',wing:'#f0d3dc',tip:'#3a3a3a',beak:'#f6efe9'}};
function palOf(pk=1,pale=0){const o={};for(const k in PAL.pink)o[k]=mixc(mixc(PAL.grey[k],PAL.pink[k],pk),PAL.pale[k],pale);return o;}
const FPOSE={
  stand:{n:[44,-170,96,-226,14,-262,50,-318],a:0},
  look:{n:[44,-170,100,-232,34,-284,68,-326],a:-12},
  down:{n:[44,-170,118,-198,134,-108,120,-14],a:180},
  preen:{n:[34,-176,72,-276,-40,-254,-68,-188],a:-150},
  feed:{n:[44,-170,112,-238,128,-152,116,-98],a:72},
  feed2:{n:[44,-170,106,-236,118,-196,108,-160],a:58},
  proud:{n:[44,-170,92,-232,20,-276,58,-330],a:-20}};
function poseMix(a,b,p){const A=FPOSE[a],B=FPOSE[b||a];return {n:A.n.map((v,i)=>lerp(v,B.n[i],p)),a:lerp(A.a,B.a,p)};}
/* flamenco: o={x,y,s,flip,pose,pose2,pp,T,ph,pk,pale,blink,legs:'one'|'two',xray,xp:{f,s,l},noShadow,o,glow} */
function flamingo(o){
  if((o.s??1)<=.002||(o.o??1)<=.003)return '';
  const T=o.T||0,ph=o.ph||0,pz=poseMix(o.pose||'stand',o.pose2,o.pp||0),c=palOf(o.pk??1,o.pale||0);
  const br=Math.sin(T*2.2+ph);
  const n=pz.n.slice();
  if(!o.still){n[6]+=Math.sin(T*1.5+ph)*1.6;n[7]+=Math.sin(T*1.3+ph+1)*1.4;n[2]+=br*1.2;}
  const neckD=`M${f1(n[0])} ${f1(n[1])} C${f1(n[2])} ${f1(n[3])} ${f1(n[4])} ${f1(n[5])} ${f1(n[6])} ${f1(n[7])}`;
  const X=!!o.xray,xp=o.xp||{};
  const gB=X?'#fff':lgrad([[0,c.top],[1,c.bot]],0,0,.3,1);
  const bodyD='M60 -158 C58 -190 -10 -200 -58 -176 C-76 -167 -88 -152 -96 -138 C-74 -132 -44 -114 -4 -114 C34 -114 62 -132 60 -158 Z';
  const wingD='M44 -164 C26 -186 -26 -188 -58 -168 C-70 -160 -82 -148 -90 -140 C-64 -140 -32 -132 -6 -132 C22 -132 46 -146 44 -164 Z';
  const two=o.legs==='two'||o.pose==='down'||o.pose==='feed';
  const legD=two?'M0 -118 L-6 -60 L-8 0 M-20 0 L4 0 M12 -118 L18 -60 L22 0 M12 0 L34 0':'M6 -118 L4 -62 L2 0 M-10 0 L14 0 M12 -120 L30 -84 L10 -70';
  const blink=o.blink??(((T+ph*1.7)%3.9)<.11);
  const lc=X?(xp.l?mixc('#ffffff',PAL.pink.leg,xp.l):'#fff'):c.leg;
  let s='';
  if(!o.noShadow)s+=shadowE(4,1,58,.13);
  if(X)s+=P(legD,ST(K.ink,7.4))+P(legD,ST(lc,3.4));else s+=P(legD,ST(lc,4.6));
  // cuerpo
  s+=`<g transform="translate(0 -150) scale(1 ${f3(1+.012*br)}) translate(0 150)">`;
  if(X){
    s+=P(bodyD,`fill:#fff;${OL(2.4)}`);
    if(xp.f>0)s+=clipG(P(bodyD,`fill:${lgrad([[0,PAL.pink.top],[1,PAL.pink.bot]],0,0,.3,1)}`),Rc(-110,-120-90*EZ.io(xp.f),220,120,'#000'));
    s+=o.organs||'';
    s+=P(wingD,`fill:none;${OL(2,'rgba(20,18,18,.5)')};stroke-dasharray:5 5`);
  }else{
    s+=P(bodyD,`fill:${gB}`)+P(wingD,`fill:${c.wing}`)+P('M-56 -152 C-70 -148 -84 -142 -96 -138 C-80 -135 -66 -135 -52 -140 Z',`fill:${c.tip}`)+
      P('M-30 -181 Q8 -192 40 -177',ST('#fff',3,'opacity:.32'))+P('M-40 -150 q14 6 30 4 M-20 -142 q14 5 28 2',ST('#fff',2,'opacity:.22'));
  }
  if(o.glow)s+=Ci(-84,-148,10+4*Math.sin(T*9),'rgba(255,60,120,.28)')+Ci(-84,-148,5.5,'#ff3d7f',OL(1.6,'#fff'));
  s+='</g>';
  // cuello + cabeza
  const nc=X?(xp.s?mixc('#ffffff',PAL.pink.neck,xp.s):'#fff'):c.neck;
  if(X)s+=P(neckD,ST(K.ink,15))+P(neckD,ST(nc,10.2));
  else s+=P(neckD,ST(nc,12.5))+P(neckD,ST('#fff',2.6,'opacity:.22;stroke-dasharray:0 6 40 400'));
  const hx=n[6],hy=n[7],ha=pz.a+(o.still?0:Math.sin(T*1.1+ph)*3);
  let head=(X?Ci(0,0,13,nc,OL(2.4)):Ci(0,0,13,nc))+P('M9 -6 Q25 -8 32 -1 L28 6 Q20 2 9 5 Z',`fill:${X?'#fff':c.beak};${X?OL(2):''}`)+P('M32 -1 Q38 8 34 21 Q30 13 28 6 Z',`fill:${c.tip}`);
  head+=blink?P('M-2 -3 L5 -3',ST(K.ink,2)):Ci(1.5,-3.5,2.6,K.ink)+Ci(.8,-4.4,.8,'#fff');
  s+=G(hx,hy,o.hs||1.22,ha,head);
  if(o.extra)s+=o.extra(n);
  return G(o.x,o.y||0,(o.flip?-1:1)*(o.s??1),o.r||0,s,o.o??1,o.s??1);
}
/* pollo de flamenco (plumón gris, pico recto) */
function fluffD(cx,cy,r,n=14,amp=4,ph=0){let d='';for(let i=0;i<=n;i++){const a=i/n*Math.PI*2,a2=(i+.5)/n*Math.PI*2,rr=r+amp;
  const x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r,qx=cx+Math.cos(a2)*(rr+Math.sin(ph+i)*1.2),qy=cy+Math.sin(a2)*(rr+Math.sin(ph+i)*1.2),x2=cx+Math.cos(a+Math.PI*2/n)*r,y2=cy+Math.sin(a+Math.PI*2/n)*r;
  d+=(i?'':`M${f1(x)} ${f1(y)}`)+` Q${f1(qx)} ${f1(qy)} ${f1(x2)} ${f1(y2)}`;}return d+'Z';}
function chick(o){
  if((o.s??1)<=.002||(o.o??1)<=.003)return '';
  const T=o.T||0,ph=o.ph||0,b=Math.sin(T*5+ph),pk=o.pk||0;
  const top=mixc('#c4c4c4',PAL.pink.top,pk),bot=mixc('#8d8d8d',mixc('#8d8d8d',PAL.pink.bot,.7),pk);
  const gb=lgrad([[0,top],[1,bot]],0,0,0,1);
  const blink=o.blink??(((T+ph)%3.3)<.11);
  let s=(o.noShadow?'':shadowE(0,1,34,.13))+P('M-9 -10 L-10 0 M-18 0 L-3 0 M9 -10 L10 0 M4 0 L19 0',ST(mixc('#6a6a6a',PAL.pink.leg,pk),4.6));
  s+=P(fluffD(0,-38,28,14,4.2,T*2),`fill:${gb}`)+El(-6,-36,15,10,mixc('#a3a3a3',PAL.pink.wing,pk),'opacity:.8');
  const hy=-76+b*1.2,beakD=o.adultBeak?'M10 -6 Q22 -7 27 -1 L24 5 Q18 2 10 4 Z M27 -1 Q31 6 28 15 Q25 9 24 5 Z':'M11 -4 L30 -1 L11 4 Z';
  const head=Ci(0,0,15,top)+P(beakD,`fill:${o.adultBeak?K.ink:'#454545'}`)+(blink?P('M2 -3 L8 -3',ST(K.ink,2)):Ci(4.5,-3.5,2.5,K.ink)+Ci(3.8,-4.3,.8,'#fff'));
  s+=G(18,hy,1,(o.hr||0)+b*3,P(fluffD(0,0,13,10,2.4,T*2),`fill:${top}`)+head);
  if(o.extra)s+=o.extra;
  return G(o.x,o.y||0,(o.flip?-1:1)*(o.s??1),o.r||0,s,o.o??1,o.s??1);
}
/* artemia (gambita) */
function artemiaS(T=0,big=false,c1='#ff7a45',c2='#f2453d'){
  const g=lgrad([[0,c1],[1,c2]],0,0,1,0);
  let s=P('M-30 0 Q-20 -10 0 -9 Q18 -8 26 -4 Q31 0 26 4 Q18 8 0 9 Q-20 10 -30 0Z',`fill:${g}`)+P('M-30 0 L-46 -6 L-43 0 L-46 6Z',`fill:${c2}`);
  for(let i=0;i<8;i++){const x=-18+i*5.4,a=Math.sin(T*18+i*.9)*4;s+=P(`M${f1(x)} 7 q${f1(a*.5)} 5 ${f1(a)} 10`,ST(c2,1.8));}
  s+=P('M24 -4 l6 -8 M24 4 l7 -6',ST(K.ink,1.6))+Ci(30,-12,2.6,K.ink)+Ci(31,-2,2.6,K.ink);
  if(big)s+=P('M-14 -4 q6 -3 12 0 M0 -4 q6 -3 12 0',ST('#fff',1.6,'opacity:.45'));
  return s;}
const artemiaMini=(T,i)=>P('M-7 0 Q-2 -3 4 -2 Q8 0 4 2 Q-2 3 -7 0Z','fill:#ff6a3d')+P(`M-7 0 l-4 ${f1(-1.5+Math.sin(T*14+i))}`,ST('#f2453d',1.4));
/* alga */
const algaS=(T,i)=>P(`M0 0 q3 -4 0 -8 q-3 -4 0 -8`,ST(i%2?'#3f9b4f':'#6ccf6a',2.6))+Ci(0,0,2.2,i%2?'#2b7a3e':'#58b85a');
/* huevo */
function eggS(crack=0,o={}){const top=o.top??1;
  let s=El(0,-40,30,40,K.cream,OL(2.4))+Ci(-10,-56,2.2,'#d8ccb8')+Ci(8,-30,2.6,'#d8ccb8')+Ci(12,-60,1.6,'#d8ccb8');
  if(crack>0)s+=DR('M-29 -42 L-18 -48 L-10 -38 L0 -48 L8 -38 L17 -48 L29 -42',ST(K.ink,2.2),crack);
  return s;}
const eggBottomS=()=>P('M-29 -42 L-18 -48 L-10 -38 L0 -48 L8 -38 L17 -48 L29 -42 Q30 -20 22 -8 Q12 0 0 0 Q-12 0 -22 -8 Q-30 -20 -29 -42Z',`fill:${K.cream};${OL(2.4)}`);
const eggTopS=()=>P('M-29 -42 L-18 -48 L-10 -38 L0 -48 L8 -38 L17 -48 L29 -42 Q28 -62 18 -73 Q9 -80 0 -80 Q-9 -80 -18 -73 Q-28 -62 -29 -42Z',`fill:${K.cream};${OL(2.4)}`);
/* zanahoria */
function carrotS(){return P('M-6 -6 Q-30 -10 -64 -2 Q-30 8 -6 8 Q4 4 -6 -6Z','fill:url(#gCAR)')+P('M-24 -5 l4 4 M-40 -3 l3 4 M-52 -1 l3 3',ST('#d4560f',1.8))+
  P('M-4 -2 Q8 -18 4 -30 Q-2 -16 -4 -2Z','fill:#3f9b4f')+P('M-2 0 Q16 -10 22 -22 Q8 -14 -2 0Z','fill:#2b7a3e')+P('M-2 2 Q14 2 24 -6 Q10 -6 -2 2Z','fill:#58b85a');}
/* ADN */
function dnaS(h,ph,o={}){const amp=o.amp||34,n=o.n||7;let back='',front='',rungs='';
  const pts=(off)=>{const a=[];for(let i=0;i<=40;i++){const y=-h/2+h*i/40,an=ph+off+i/40*n;a.push([Math.sin(an)*amp,y,Math.cos(an)]);}return a;};
  const A=pts(0),B=pts(Math.PI);
  for(let i=0;i<=40;i+=3){const ya=A[i][1];rungs+=Rc(Math.min(A[i][0],B[i][0]),ya-3,Math.abs(A[i][0]-B[i][0]),6,'#ffffff',3,'opacity:.95');}
  const strand=(arr,g)=>{let fs='',bs='';for(let i=0;i<40;i++){const seg=`M${f1(arr[i][0])} ${f1(arr[i][1])} L${f1(arr[i+1][0])} ${f1(arr[i+1][1])}`;if(arr[i][2]>0)fs+=seg;else bs+=seg;}return [fs,bs];};
  const [fa,ba]=strand(A),[fb,bb]=strand(B);
  return P(ba,ST('url(#gDNA1)',9,'opacity:.9'))+P(bb,ST('url(#gDNA2)',9,'opacity:.9'))+rungs+P(fa,ST('url(#gDNA1)',10))+P(fb,ST('url(#gDNA2)',10));}
/* plato con cubiertos */
function plateS(){return El(0,0,88,24,'#fff',OL(2.4))+El(0,-2,58,14,'none',OL(1.8,'rgba(20,18,18,.45)'))+
  P('M-118 -20 L-118 18 M-126 -20 L-126 -6 Q-126 2 -118 2 Q-110 2 -110 -6 L-110 -20',ST(K.ink,2.4))+P('M116 -22 Q128 -10 122 6 L122 18',ST(K.ink,2.4))+P('M116 -22 L116 18',ST(K.ink,2.4));}
/* lupa */
function lupaS(r=30,glass=''){return P(`M${f1(r*.7)} ${f1(r*.7)} L${f1(r*1.7)} ${f1(r*1.7)}`,ST(K.ink,9))+P(`M${f1(r*1.42)} ${f1(r*1.42)} L${f1(r*1.75)} ${f1(r*1.75)}`,ST(K.blue,11))+
  (glass||Ci(0,0,r,'rgba(255,255,255,.35)'))+Ci(0,0,r,'none',`stroke:${K.ink};stroke-width:6`)+P(`M${f1(-r*.55)} ${f1(-r*.3)} Q${f1(-r*.45)} ${f1(-r*.6)} ${f1(-r*.15)} ${f1(-r*.62)}`,ST('#fff',3.4,'opacity:.9'));}
/* calendario */
function calS(num,head='AÑO',o={}){const w=o.w||88,h=o.h||96;return Rc(-w/2,-h/2,w,h,'#fff',8,OL(2.2))+P(`M${-w/2} ${-h/2+8} Q${-w/2} ${-h/2} ${-w/2+8} ${-h/2} L${w/2-8} ${-h/2} Q${w/2} ${-h/2} ${w/2} ${-h/2+8} L${w/2} ${-h/2+26} L${-w/2} ${-h/2+26}Z`,`fill:${K.red};${OL(2.2)}`)+
  Tn(0,-h/2+18,head,10.5,700,{fill:'#fff',ls:.12})+Tn(0,h/2-20,num,Math.min(o.sz||38,(w-12)/(String(num).length*.64)),700)+Rc(-w/2+16,-h/2-8,6,16,K.ink,3)+Rc(w/2-22,-h/2-8,6,16,K.ink,3);}
/* tarjeta con lista y casillas */
function checkCard(title,rows,ticks,o={}){const w=o.w||200,rh=34,h=44+rows.length*rh+8;let s=Rc(-w/2,0,w,h,'#fff',10,OL(2.2))+P(`M${-w/2} 10 Q${-w/2} 0 ${-w/2+10} 0 L${w/2-10} 0 Q${w/2} 0 ${w/2} 10 L${w/2} 40 L${-w/2} 40Z`,`fill:${K.ink}`)+Ts(0,28,title,19,{fill:'#fff',sw:.2});
  rows.forEach((r,i)=>{const y=44+i*rh+rh/2+4;s+=Rc(-w/2+16,y-9,18,18,'#fff',3,OL(2))+Tn(-w/2+46,y+5,r,14,500,{a:'start'});
    if(ticks[i]>0)s+=DR(`M${-w/2+18} ${y-1} L${-w/2+24} ${y+6} L${-w/2+38} ${y-12}`,ST(K.pink,3.4),ticks[i]);});
  return s;}
/* termómetro de color */
function meterS(lv,col='url(#gRPv)'){const h=170,w=34;return Rc(-w/2,-h,w,h,'#fff',w/2,OL(2.4))+clipG(Rc(-w/2,-h*lv,w,h*lv,col),Rc(-w/2+4,-h+4,w-8,h-8,'#000',(w-8)/2))+
  P(`M${w/2+6} ${-h*.75} l8 0 M${w/2+6} ${-h*.5} l8 0 M${w/2+6} ${-h*.25} l8 0`,ST(K.ink,2));}
/* gota */
const dropS=(r,c)=>P(`M0 ${f1(-r*1.6)} Q${f1(r*1.1)} ${f1(-r*.2)} ${f1(r*.8)} ${f1(r*.5)} Q0 ${f1(r*1.3)} ${f1(-r*.8)} ${f1(r*.5)} Q${f1(-r*1.1)} ${f1(-r*.2)} 0 ${f1(-r*1.6)}Z`,`fill:${c}`)+Ci(-r*.3,0,r*.22,'#fff','opacity:.7');
/* cadena de carotenoide (hexágonos) */
function caroChain(p,T){let s='';const n=6;for(let i=0;i<n;i++){const q=sg(p,i*.1,i*.1+.4);if(q<=0)continue;const x=-110+i*44,y=Math.sin(i*1.3+T*2)*3;
  const hx=[...Array(6)].map((_,k)=>{const a=(k*60+30)*Math.PI/180;return `${f1(Math.cos(a)*15)} ${f1(Math.sin(a)*15)}`;}).join(' L');
  s+=G(x,y,EZ.back(q),0,P(`M${hx}Z`,`fill:url(#gCAR);${OL(2,K.ink)}`)+(i<n-1?P('M15 0 L29 0',ST(K.ink,2.4)):''));}return s;}
/* mapa */
let MAPG=null;
function pinS(c=K.pink){return P('M0 0 C-4 -10 -16 -18 -16 -30 A16 16 0 1 1 16 -30 C16 -18 4 -10 0 0Z',`fill:${c};${OL(2,K.ink)}`)+Ci(0,-30,6,'#fff');}
function burstS(r,n=16,c1='#f6a81a',c2='#f76e19',rot=0){let s='';for(let i=0;i<n;i++){const a0=(rot+i*360/n)*Math.PI/180,a1=(rot+(i+.45)*360/n)*Math.PI/180;
  s+=P(`M0 0 L${f1(Math.cos(a0)*r)} ${f1(Math.sin(a0)*r)} L${f1(Math.cos(a1)*r)} ${f1(Math.sin(a1)*r)}Z`,`fill:${i%2?c1:c2}`);}return s;}
/* fila de comentario */
function commentRow(w,txt,avatar,o={}){const h=36;return Rc(-w/2,-h/2+3,w,h,K.ink,h/2)+Rc(-w/2,-h/2,w,h,'#fff',h/2,OL(2))+avatar+Tn(-w/2+46,5,txt,13.5,500,{a:'start'})+(o.icon||'');}
function inputRow(w,typed,cursor){const h=36;return Rc(-w/2,-h/2,w,h,'#fff',h/2,OL(2))+Tn(-w/2+22,5,typed||'Escribe un comentario…',13,typed?500:400,{a:'start',fill:typed?K.ink:'#8a8a8a'})+
  (cursor?Rc(typed?(-w/2+23+mw(typed,fSans(13,500))):(-w/2+17),-8,1.6,16,K.ink):'')+Ci(w/2-20,0,13,'url(#gRP)')+P(`M${w/2-25} 0 L${w/2-15} 0 M${w/2-19} -5 L${w/2-14} 0 L${w/2-19} 5`,ST('#fff',2.2));}
/* tarjeta de opción A/B/C */
function optionRow(w,letter,txt,sel,icon=''){const h=40;const fill=sel>0?mixc('#ffffff','#f0436a',sel):'#fff',tc=sel>.5?'#fff':K.ink;
  return Rc(-w/2,-h/2+3,w,h,K.ink,10)+Rc(-w/2,-h/2,w,h,sel>0?(sel>.98?'url(#gRP)':fill):'#fff',10,OL(2))+Ci(-w/2+22,0,11,sel>.5?'#fff':K.ink)+Tn(-w/2+22,4.5,letter,12,700,{fill:sel>.5?K.pink:'#fff'})+icon+Tn(-w/2+70,5,txt,15,600,{a:'start',fill:tc});}
/* avatar mini de personajes */
function miniFace(k,r=11){const c={grano:'url(#gGRANO)',pipa:'url(#gPIPA)',lenteja:'url(#gLENT)',garbanzo:'url(#gGARB)'}[k];
  let shape=k==='pipa'?P(`M0 ${-r*1.2} L${r*1.1} ${r*.9} L${-r*1.1} ${r*.9}Z`,`fill:${c}`):k==='garbanzo'?Rc(-r,-r,2*r,2*r,c,r*.35):k==='lenteja'?Rc(-r*1.15,-r*.8,r*2.3,r*1.6,c,r*.8):Ci(0,0,r,c);
  const eyes=k==='pipa'?Ci(0,0,r*.32,'#fff')+Ci(0,0,r*.16,K.ink):Ci(-r*.35,-r*.1,r*.14,K.ink)+Ci(r*.35,-r*.1,r*.14,K.ink);
  return shape+eyes+P(`M${f1(-r*.25)} ${f1(r*.3)} Q0 ${f1(r*.5)} ${f1(r*.25)} ${f1(r*.3)}`,ST(K.ink,1.4));}
/* logo propio: 2x2 formas de los personajes + "Mentes curiosas" */
function logoS(p){const parts=[['grano',-18,-18],['pipa',18,-18],['lenteja',-18,18],['garbanzo',18,18]];let s='';
  parts.forEach(([k,x,y],i)=>{const q=sg(p,i*.08,i*.08+.35);if(q>0)s+=G(x,y,EZ.back(q),0,miniFace(k,15));});
  const q2=sg(p,.3,.7);if(q2>0){s+=G(0,0,1,0,Tn(48,-4,'Mentes',38,800,{a:'start',ls:-.03}),cl(q2*2))+G(0,0,1,0,Ts(50,34,'curiosas',44,{a:'start',it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),cl(q2*2-.4));}
  return s;}

/* ===== PECES Y PREHISTORIA (vídeo del esturión, 14/10/2026) ===== */
/* cuerpo de pez genérico (de perfil, mira a la derecha, centrado en 0,0, largo ≈ len)
   top(u)/bot(u): semialturas por encima/debajo de la línea media (u=0 cola → u=1 hocico) */
function _fishBody(len,top,bot,T,amp,ph,n=44){const pts=[],x0=-len/2;
  const yo=u=>amp*Math.sin(2*Math.PI*1.1*u-T*5.2-ph)*Math.pow(1-u,1.6);
  for(let i=0;i<=n;i++){const u=i/n;pts.push([x0+u*len,yo(u),top(u),bot(u)]);}
  let d=`M${f1(pts[0][0])} ${f1(pts[0][1]-pts[0][2])}`;pts.forEach(p=>d+=` L${f1(p[0])} ${f1(p[1]-p[2])}`);
  for(let i=n;i>=0;i--){const p=pts[i];d+=` L${f1(p[0])} ${f1(p[1]+p[3])}`;}
  return {d:d+'Z',yo,pt:u=>{const x=x0+u*len;return [x,yo(u)];}};}
/* esturión de lago: o={x,y,s,T,ph,flip,amp (ondulación),hl (0-1 resalta las placas de hueso),age (0-1 aclara/oscurece),o,r} */
function sturgeon(o={}){
  if((o.s??1)<=.002||(o.o??1)<=.003)return '';
  const T=o.T||0,ph=o.ph||0,amp=o.amp??5,L=320,hl=o.hl||0;
  const top=u=>u<.04?4+u*120:u>.93?lerp(15,2,sg(u,.93,1)):9+26*Math.sin(Math.PI*Math.pow(sg(u,.04,.93),.85)),
        bot=u=>u<.04?3+u*100:u>.9?lerp(16,1.5,sg(u,.9,1)):7+22*Math.sin(Math.PI*Math.pow(sg(u,.04,.9),.9));
  const B=_fishBody(L,top,bot,T,amp,ph);
  const gB=lgrad([[0,'#3f4630'],[.45,'#7c7a4c'],[.7,'#b9a87a'],[1,'#eadfc2']],0,0,0,1);
  let s='';
  // cola heterocerca (lóbulo superior largo)
  const [tx,ty]=B.pt(0),ta=Math.sin(-T*5.2-ph)*amp*1.6;
  s+=G(tx,ty,1,ta,P('M6 -8 Q-28 -26 -66 -62 Q-52 -26 -40 -2 Q-50 14 -58 30 Q-24 18 6 8Z','fill:#56573a')+P('M2 -6 Q-30 -24 -60 -54',ST('#cfc39a',2,'opacity:.45')));
  // aletas pélvica/anal/dorsal (detrás del cuerpo)
  const [ax,ay]=B.pt(.2),[dx,dy]=B.pt(.2),[pvx,pvy]=B.pt(.42);
  s+=P(`M${f1(dx+14)} ${f1(dy-top(.2)+2)} L${f1(dx-10)} ${f1(dy-top(.2)-24)} L${f1(dx-18)} ${f1(dy-top(.2)+3)}Z`,'fill:#4d5034');
  s+=P(`M${f1(ax+10)} ${f1(ay+bot(.2)-2)} L${f1(ax-12)} ${f1(ay+bot(.2)+18)} L${f1(ax-18)} ${f1(ay+bot(.2)-1)}Z`,'fill:#6a6a45');
  s+=P(`M${f1(pvx+10)} ${f1(pvy+bot(.42)-2)} L${f1(pvx-8)} ${f1(pvy+bot(.42)+16)} L${f1(pvx-14)} ${f1(pvy+bot(.42)-1)}Z`,'fill:#6a6a45');
  // cuerpo
  s+=P(B.d,`fill:${gB}`);
  // brillo del lomo
  let hd='';for(let i=0;i<=20;i++){const u=.08+i*.042,[x,y]=B.pt(u);hd+=(i?' L':'M')+f1(x)+' '+f1(y-top(u)+5);}
  s+=P(hd,ST('#fff',3,'opacity:.18'));
  // placas de hueso (escudos): fila dorsal, lateral y ventral
  const sc=mixc('#efe6cc','#ff4f86',hl),se=mixc('#5b5638','#b8173f',hl);
  const scute=(x,y,r,a=0)=>G(x,y,1,a,P(`M0 ${-r} L${f1(r*.75)} 0 L0 ${f1(r*.9)} L${f1(-r*.75)} 0Z`,`fill:${sc};stroke:${se};stroke-width:1.4`)+P(`M0 ${f1(-r*.6)} L0 ${f1(r*.5)}`,ST(se,1,'opacity:.6')));
  for(let i=0;i<11;i++){const u=.28+i*.052,[x,y]=B.pt(u);s+=scute(x,y-top(u)+1,5.6+(hl?Math.sin(T*8+i)*.8*hl:0));}
  for(let i=0;i<16;i++){const u=.12+i*.046,[x,y]=B.pt(u);s+=scute(x,y-2+ (u-.5)*6,4.4);}
  for(let i=0;i<9;i++){const u=.3+i*.05,[x,y]=B.pt(u);s+=scute(x,y+bot(u)-5,3.8);}
  if(hl>.05)s+=P(B.d,`fill:none;stroke:#ff2e63;stroke-width:${f1(3*hl)};opacity:${f2(.6*hl)}`);
  // aleta pectoral
  const [px,py]=B.pt(.74);
  s+=G(px,py+bot(.74)-6,1,Math.sin(T*3+ph)*8,P('M8 -2 Q-6 12 -30 24 Q-20 8 -10 -4Z','fill:#5e5f3d;opacity:.92'));
  // cabeza: opérculo, ojo, boca y barbillas
  const [hx,hy]=B.pt(.83),[ex,ey]=B.pt(.885),[bx,by]=B.pt(.94);
  s+=P(`M${f1(hx)} ${f1(hy-top(.83)+5)} Q${f1(hx+9)} ${f1(hy)} ${f1(hx)} ${f1(hy+bot(.83)-4)}`,ST('#3a3f2a',2.2,'opacity:.7'));
  s+=Ci(ex,ey-7,4.3,'#1c1a14')+Ci(ex+1.1,ey-8.4,1.3,'#fff');
  const by0=by+bot(.94);
  s+=P(`M${f1(bx-16)} ${f1(by0+3)} q6 3 12 0`,ST('#3a3f2a',2));
  for(let i=0;i<4;i++){const xx=bx-2+i*4.4,w=Math.sin(T*4+i+ph)*2.4;s+=P(`M${f1(xx)} ${f1(by0-1)} q${f1(w)} 6 ${f1(w*.4)} 11`,ST('#d9caa0',2));}
  return G(o.x||0,o.y||0,(o.flip?-1:1)*(o.s??1),o.r||0,s,o.o??1,o.s??1);
}
/* tiburón de Groenlandia (gris, hocico romo, aletas pequeñas) · o={x,y,s,T,ph,flip,amp,o} */
function sharkG(o={}){
  if((o.s??1)<=.002)return '';const T=o.T||0,ph=o.ph||0,amp=o.amp??4,L=340;
  const top=u=>u<.05?6+u*80:u>.92?lerp(30,6,Math.pow(sg(u,.92,1),.6)):10+30*Math.sin(Math.PI*Math.pow(sg(u,.05,.92),.7)),
        bot=u=>u<.05?5+u*60:u>.9?lerp(26,4,Math.pow(sg(u,.9,1),.6)):8+26*Math.sin(Math.PI*Math.pow(sg(u,.05,.9),.75));
  const B=_fishBody(L,top,bot,T,amp,ph);let s='';
  const [tx,ty]=B.pt(0),ta=Math.sin(-T*5.2-ph)*amp*1.4;
  s+=G(tx,ty,1,ta,P('M6 -8 Q-26 -24 -50 -46 Q-44 -14 -34 0 Q-40 12 -44 26 Q-20 14 6 8Z','fill:#5b5853'));
  const [d1x,d1y]=B.pt(.5),[d2x,d2y]=B.pt(.3),[pcx,pcy]=B.pt(.72);
  s+=P(`M${f1(d1x+16)} ${f1(d1y-top(.5)+3)} Q${f1(d1x)} ${f1(d1y-top(.5)-20)} ${f1(d1x-14)} ${f1(d1y-top(.5)+2)}Z`,'fill:#5b5853');
  s+=P(`M${f1(d2x+12)} ${f1(d2y-top(.3)+3)} Q${f1(d2x)} ${f1(d2y-top(.3)-16)} ${f1(d2x-12)} ${f1(d2y-top(.3)+2)}Z`,'fill:#5b5853');
  s+=P(B.d,`fill:${lgrad([[0,'#4e4b46'],[.6,'#86817a'],[1,'#c9c3b8']],0,0,0,1)}`);
  for(let i=0;i<5;i++){const [gx,gy]=B.pt(.8+i*.014);s+=P(`M${f1(gx)} ${f1(gy-8)} q3 8 0 16`,ST('#3b3935',1.6,'opacity:.6'));}
  s+=G(pcx,pcy+bot(.72)-6,1,Math.sin(T*2.4+ph)*6,P('M8 -2 Q-4 14 -26 22 Q-16 6 -8 -4Z','fill:#5b5853'));
  const [ex,ey]=B.pt(.93);s+=Ci(ex,ey-8,3.4,'#141212')+Ci(ex+.9,ey-9,1,'#cfe7ff');
  const [mx,my]=B.pt(.9);s+=P(`M${f1(mx)} ${f1(my+bot(.9)-6)} q10 2 16 -2`,ST('#2c2a27',2));
  for(let i=0;i<7;i++){const [x,y]=B.pt(.2+i*.09);s+=Ci(x+hs(i)*8,y-top(.2+i*.09)*.4+hs(i+5)*10,1.6,'#c9c3b8','opacity:.35');}
  return G(o.x||0,o.y||0,(o.flip?-1:1)*(o.s??1),o.r||0,s,o.o??1,o.s??1);
}
/* corte de una espina de aleta con anillos de crecimiento · o={r,n,p (0-1 aparecen),crowd (0-1 se amontonan en el borde),hl (nº de anillos marcados)} */
function finRingsS(o={}){const r=o.r||110,n=o.n||14,p=o.p??1,cw=o.crowd||0;let s='';
  const shape=a=>{const k=1+.06*Math.sin(a*3+1)+.04*Math.sin(a*5);return k;};
  const ring=(rr,st)=>{let d='';for(let i=0;i<=48;i++){const a=i/48*Math.PI*2,k=shape(a),x=Math.cos(a)*rr*k,y=Math.sin(a)*rr*k*.92;d+=(i?' L':'M')+f1(x)+' '+f1(y);}return P(d+'Z',st);};
  s+=ring(r,`fill:#f3e6c9;${OL(2.6)}`);
  const N=Math.round(lerp(n,n+16,cw)),shown=Math.floor(p*N+1e-6);
  for(let i=1;i<=N;i++){if(i>shown)break;const u=i/N;
    const rLin=r*.92*Math.pow(i/n,.8),rCr=i<=n*.55?r*.92*Math.pow(i/n,.8):lerp(r*.92*Math.pow(.55,.8),r*.95,Math.pow(sg(i,n*.55,N),.55));
    const rr=Math.min(r*.97,lerp(rLin,rCr,cw));const on=o.hl&&i<=o.hl;
    s+=ring(rr,`fill:none;stroke:${on?'#ff2e63':'#9b7447'};stroke-width:${on?2.6:f2(lerp(2,1.2,cw*u))};opacity:${on?1:.85}`);}
  s+=El(0,0,9,8,'#7a5631');
  return s;}
/* tocón de árbol con anillos · o={n,p} */
function stumpS(o={}){const w=120,n=o.n||9,p=o.p??1;let s=P(`M${-w} 0 L${-w} 70 Q0 96 ${w} 70 L${w} 0Z`,'fill:#7d4a2a')+P(`M${-w*.6} 14 L${-w*.62} 78 M${-w*.15} 18 L${-w*.16} 88 M${w*.35} 16 L${w*.36} 84`,ST('#5a3119',3,'opacity:.7'));
  s+=El(0,0,w,w*.36,'#f2c98f',OL(2.4));for(let i=1;i<=n;i++){if(i/n>p+.001)break;const k=i/n*.92;s+=El(0,0,w*k,w*.36*k,'none',ST('#b77a45',2));}
  s+=El(0,0,5,2.5,'#7d4a2a');return s;}
/* chip de marcaje (transpondedor) con número de 15 cifras · lt=segundos */
function tagChipS(lt=9){let s='';
  for(let i=0;i<3;i++){const q=((lt*.9)+i/3)%1;s+=P(`M${f1(84+q*40)} ${f1(-26-q*18)} Q${f1(100+q*56)} 0 ${f1(84+q*40)} ${f1(26+q*18)}`,ST(K.pink,3,`opacity:${f2((1-q)*sg(lt,.5,.8))}`));}
  s+=Rc(-84,-26,168,52,'rgba(196,232,255,.72)',26,OL(2.4))+Rc(-74,-16,148,14,'#fff',7,'opacity:.45');
  for(let i=0;i<12;i++){const x=-58+i*7.4;s+=El(x,4,3.2,12,'none',ST('#c8742e',2.2));}
  s+=Rc(36,-8,26,20,K.ink,3)+P('M38 -2 l-6 0 M38 6 l-6 0',ST(K.ink,1.6));
  const num='982 000 364 127 551',k=Math.floor(num.length*sg(lt,.4,1.4));
  s+=G(0,62,1,0,pill(num.slice(0,k)||' ',{sz:15,w:700}),cl(lt*4));
  return s;}
/* saurópodo en silueta (fondo de paisaje) · o={c,T} */
function sauropodS(o={}){const c=o.c||'#5c02b0',T=o.T||0,nk=Math.sin(T*.8)*4;
  let s=P(`M-20 -66 Q40 -110 96 -70 Q130 -150 ${f1(150+nk)} -214 Q${f1(170+nk)} -232 ${f1(186+nk)} -218 Q${f1(164+nk)} -200 ${f1(150+nk)} -170 Q132 -96 118 -54 Q60 -20 -10 -40 Q-90 -36 -190 -10 Q-100 -54 -20 -66Z`,`fill:${c}`);
  [[-6,-46],[18,-44],[78,-50],[100,-52]].forEach(([x,y],i)=>s+=Rc(x,y,15,y*-1,c,5));
  s+=Ci(178+nk,-220,2.2,'#fff','opacity:.6');return s;}
/* barca de remos con investigador (sin rostro) · o={T} */
function boatS(o={}){const T=o.T||0,b=Math.sin(T*1.8)*2;
  return G(0,b,1,Math.sin(T*1.4)*2,P('M-80 -10 L80 -10 Q70 22 40 26 L-50 26 Q-74 22 -80 -10Z','fill:#c2410c')+Rc(-80,-14,160,8,'#f4eee2',3,OL(1.6))+
    Rc(-18,-56,26,42,'#2a37d7',8)+Ci(-5,-66,12,'#ffc6a1')+P('M-18 -70 Q-5 -88 8 -70Z','fill:#f6a81a')+P('M8 -40 L70 -84',ST('#6b4a2e',3))+P('M70 -84 Q90 -40 84 30',ST('#fff',1.4,'opacity:.8')));}
/* medalla de récord · o={txt,sub} lt */
function medalS(o={},lt=9){const sp=Math.sin(lt*2)*6;return P('M-22 -40 L-40 -110 L-10 -110 L6 -50Z','fill:#ec2f72')+P('M22 -40 L40 -110 L10 -110 L-6 -50Z','fill:#2a37d7')+
  G(0,0,1,sp,Ci(0,0,58,'url(#gSUN)',OL(3))+Ci(0,0,44,'none',ST('#fff4c4',3,'opacity:.8'))+Tn(0,10,o.txt||'Nº 1',30,800,{fill:'#fff',x:'paint-order:stroke;stroke:#141212;stroke-width:3px'}))+
  (o.sub?G(0,88,1,0,pill(o.sub,{sz:13,w:700,fill:'url(#gRP)'})):'');}
