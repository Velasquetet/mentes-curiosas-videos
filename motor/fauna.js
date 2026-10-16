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

/* ===== añadidos 15/10/2026 · el T. rex con labios ===== */
/* Tiranosaurio de perfil (mira a la derecha, pies en y=0) · o={T,c,belly,lips 0..1,open 0..1,walk 0..1,hlArm 0..1,feathers 0..1,blink}
   lips=0 → dientes al aire (versión «de película»); lips=1 → labios de escamas que tapan los dientes */
function trexS(o={}){const T=o.T||0,c=o.c||'#3f9b4f',cd=o.cd||'#2b7a3e',bl=o.belly||'#c9e8b0',L=cl(o.lips??1),op=cl(o.open||0),wk=o.walk||0;
  const ph=T*6,sw=wk*Math.sin(ph),bob=wk*Math.abs(Math.sin(ph))*-4+Math.sin(T*2)*1.5,tail=Math.sin(T*1.6)*5;
  const leg=(x,y,a,col)=>G(x,y,1,a,El(0,10,40,52,col,OL(2.2))+P('M-8 50 L4 118 L14 150',ST(K.ink,32))+P('M-8 50 L4 118 L14 150',ST(col,27))+P('M2 150 L52 152 L52 160 L-6 160Z',`fill:${col};${OL(2)}`)+P('M52 152 l10 4 l-10 4 M40 151 l9 4 l-9 4',ST(K.ink,2)));
  let s=G(-10,-160,1,-sw*16,leg(0,0,0,cd));
  // cuerpo + cola
  s+=G(0,bob,1,0,
    P(`M-280 ${f1(-168+tail)} Q-170 -192 -60 -214 Q20 -244 92 -224 Q118 -216 130 -200 L130 -158 Q104 -138 72 -126 Q20 -96 -40 -108 Q-130 -128 -280 ${f1(-160+tail)}Z`,`fill:${c};${OL(2.4)}`)+
    P('M-40 -110 Q20 -100 70 -128 Q100 -140 126 -160 L118 -150 Q80 -120 30 -112 Q-10 -106 -40 -110Z',`fill:${bl}`)+
    [...Array(9)].map((_,i)=>P(`M${-230+i*36} ${-182+i*-3.2+(i>5?(i-5)*-5:0)} l8 -7 l8 7`,ST(cd,2))).join('')+
    (o.feathers?[...Array(14)].map((_,i)=>P(`M${-200+i*22} ${-196-(i>8?(i-8)*4:0)} q4 -12 ${8} -2`,ST('#e9d27a',2.2,`opacity:${f2(o.feathers)}`))).join(''):''));
  // brazo diminuto (2 dedos)
  const ar=Math.sin(T*3)*6,ha=o.hlArm||0;
  s+=G(104,-142+bob,1+ha*.25,ar,(ha>0?Ci(14,10,26*ha,'none',`stroke:${K.pink};stroke-width:3`):'')+P('M0 0 Q12 6 16 14',ST(K.ink,8))+P('M0 0 Q12 6 16 14',ST(c,5))+P('M16 14 l9 -1 M16 14 l7 6',ST(K.ink,2.4)));
  s+=G(30,-160,1,sw*16,leg(0,0,0,c));
  // cabeza
  const hx=118,hy=-210+bob,ja=op*24;
  let hd='';
  const teethU=[...Array(8)].map((_,i)=>P(`M${34+i*11} 0 l4 ${10} l4 -10Z`,'fill:#fff;'+OL(1.2))).join('');
  const teethL=[...Array(7)].map((_,i)=>P(`M${40+i*11} 0 l4 -9 l4 9Z`,'fill:#fff;'+OL(1.2))).join('');
  // mandíbula inferior (gira en 10,2)
  hd+=G(10,2,1,ja,G(-10,-2,1,0,(L<1?G(0,0,1,0,teethL,1-L):'')+P('M8 0 L122 0 Q120 14 96 20 L24 24 Q6 20 8 0Z',`fill:${c};${OL(2.2)}`)+P('M24 10 L110 8',ST(bl,4))+
     (L>0?P(`M30 ${f1(1-9*L)} L118 ${f1(1-8*L)} L120 2 L30 3Z`,`fill:${c};opacity:${f2(L)}`):'')));
  if(op>0)hd+=P(`M14 0 L120 0 L${f1(120-op*6)} ${f1(op*34)} Z`,`fill:#7a1f2b`);
  hd+=(L<1?G(0,0,1,0,teethU,1-L):'');
  // cráneo
  hd+=P('M2 -32 Q44 -50 98 -40 Q124 -34 126 -12 L126 2 L4 6 Q-8 -12 2 -32Z',`fill:${c};${OL(2.4)}`);
  if(L>0){hd+=P(`M30 -2 L126 -2 L126 ${f1(2+10*L)} Q78 ${f1(2+13*L)} 30 ${f1(2+8*L)}Z`,`fill:${c};opacity:${f2(L)}`)+DR(`M30 ${f1(2+8*L)} Q78 ${f1(2+13*L)} 126 ${f1(2+10*L)}`,ST(K.ink,2),L)+
    [...Array(7)].map((_,i)=>Ci(40+i*12,2+9*L,1.6,cd,`opacity:${f2(L)}`)).join('');}
  const bk=o.blink?1:((T*.7)%3<.1?1:0);
  hd+=P('M66 -38 Q80 -46 94 -38',ST(K.ink,3))+(bk?P('M72 -28 l14 0',ST(K.ink,2.4)):Ci(80,-28,5.5,'#fff3a0',OL(1.6))+El(81,-28,1.6,4.2,K.ink))+Ci(116,-30,2.2,K.ink);
  s+=G(hx-8,hy+6,1.4,Math.sin(T*1.3)*2,G(0,-4,1,0,hd));
  return s;}
/* cabeza de cocodrilo con los dientes siempre al aire · o={T,open} */
function crocS(o={}){const T=o.T||0,op=cl(o.open||0),c=o.c||'#5f8f3a',cd=o.cd||'#46702a';let s='';
  const tu=[...Array(11)].map((_,i)=>P(`M${-100+i*20} 0 l5 ${11+(i%3==1?4:0)} l5 ${-11-(i%3==1?4:0)}Z`,'fill:#fffbe8;'+OL(1.2))).join('');
  s+=G(-110,2,1,op*14,G(110,-2,1,0,P('M-112 0 L120 0 Q124 18 100 22 L-100 26 Q-118 18 -112 0Z',`fill:${c};${OL(2.2)}`)+[...Array(10)].map((_,i)=>P(`M${-92+i*20} 0 l5 -10 l5 10Z`,'fill:#fffbe8;'+OL(1.2))).join('')));
  s+=P('M-120 -40 Q-90 -62 -40 -50 L110 -30 Q132 -24 128 0 L-118 4 Q-130 -20 -120 -40Z',`fill:${c};${OL(2.4)}`)+tu;
  for(let i=0;i<6;i++)s+=P(`M${-70+i*28} -44 l8 -6 l8 6`,ST(cd,2));
  s+=El(-74,-52,14,10,c,OL(2))+Ci(-72,-54,5,'#ffd84a',OL(1.4))+El(-72,-54,1.5,4,K.ink)+Ci(116,-26,3,K.ink);
  return G(0,Math.sin(T*2)*2,1,0,s);}
/* diente de terópodo con esmalte · o={wear 0..1 (daño), shine} */
function toothS(o={}){const w=cl(o.wear||0);let s=P('M-34 -70 Q-40 10 0 80 Q40 10 34 -70Z','fill:#fffaf0;'+OL(2.6))+P('M-26 -60 Q-28 10 0 66',ST('#e9e1cd',6));
  s+=P('M34 -60 l6 8 l-6 6 l6 8 l-6 6 l6 8 l-6 6',ST(K.ink,1.6))+Rc(-38,-84,76,18,'#e2c9a6',5,OL(2));
  if(w>0)s+=G(0,0,1,0,P('M-10 20 l14 10 l-6 12 l12 8 M8 -20 l-10 14 l8 6',ST('#8a6a40',2.4))+P('M-6 70 L0 80 L8 66Z','fill:#c6c6c6'),w);
  if(o.shine)s+=P('M-14 -40 Q-16 -10 -8 16',ST('#fff',4,`opacity:${f2(o.shine)}`));
  return s;}
/* parche de piel con escamas (lupa) · o={n} */
function scalesS(o={}){const r=o.r||70;let s=Ci(0,0,r,'#7bbf6a',OL(2.4));let sc='';
  for(let y=-r;y<=r;y+=14)for(let x=-r;x<=r;x+=16){const xx=x+((y/14)%2?8:0);sc+=El(xx,y,7,6,'#5f9e4f','stroke:#3d7a35;stroke-width:1.4');}
  return s+clipG(sc,`<circle cx="0" cy="0" r="${r-2}"/>`)+Ci(0,0,r,'none',OL(2.4));}
/* dragón de Komodo de perfil (mira a la derecha, patas en y=0) · o={T,walk,lips} */
function komodoS(o={}){const T=o.T||0,wk=o.walk||0,ph=T*7,c='#8a7a5a',cd='#6b5d43',sw=Math.sin(ph)*wk;
  const leg=(x,a,col)=>G(x,-30,1,a,P('M0 0 Q-6 18 -10 30 L8 30',ST(K.ink,13))+P('M0 0 Q-6 18 -10 30 L8 30',ST(col,9))+P('M8 30 l6 -2 M8 30 l6 3',ST(K.ink,2)));
  let s=leg(-60,sw*20,cd)+leg(70,-sw*20,cd);
  s+=P(`M-230 ${f1(-20+Math.sin(T*2)*6)} Q-150 -36 -80 -50 Q0 -66 90 -52 Q120 -50 130 -46 L132 -26 Q90 -18 30 -16 Q-60 -14 -120 -24 Q-180 -22 -230 ${f1(-16+Math.sin(T*2)*6)}Z`,`fill:${c};${OL(2.2)}`);
  for(let i=0;i<8;i++)s+=Ci(-100+i*26,-40+(i%2)*6,3,cd);
  const fk=Math.sin(T*9)>.3?1:0;
  s+=G(126,-44,1,0,P('M0 -6 Q30 -18 66 -6 Q74 0 66 8 L2 12Z',`fill:${c};${OL(2.2)}`)+P('M10 6 Q38 10 66 6',ST(cd,2.4))+Ci(26,-6,3.6,'#ffd84a',OL(1.2))+Ci(26,-6,1.4,K.ink)+
    (fk?P('M68 4 l18 0 l6 -4 M86 4 l6 4',ST('#e2475a',2.2)):''));
  s+=leg(-40,-sw*20,c)+leg(90,sw*20,c);
  return G(0,0,1,0,s);}
/* fotograma de película (marco con perforaciones) · contenido dentro (w,h) */
function cineS(inner,w=360,h=240,T=0){let s=Rc(-w/2-26,-h/2-14,w+52,h+28,K.ink,10);
  for(let i=0;i<9;i++){const y=-h/2+6+i*(h-12)/8;s+=Rc(-w/2-19,y-5,10,10,'#e8e8e8',2)+Rc(w/2+9,y-5,10,10,'#e8e8e8',2);}
  s+=clipG(Rc(-w/2,-h/2,w,h,'#f2c14e')+inner,`<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="4"/>`);
  return s;}
/* ===== Recursos 16/10 · reptiles que hacen ruido ===== */
/* ondas de sonido «)))» animadas · o={dir 1|-1, n, c, r0, gap, w, spd, ang} */
function soundA(x,y,T,o={}){const n=o.n||3,dir=o.dir||1,c=o.c||K.ink,r0=o.r0||14,gap=o.gap||12,ang=o.ang||38,spd=o.spd||1.6;let s='';
  for(let i=0;i<n;i++){const q=((T*spd)+i/n)%1,r=r0+q*gap*n,a=ang*Math.PI/180,op=Math.sin(Math.PI*q);
    const x1=Math.cos(a)*r*dir,y1=-Math.sin(a)*r,y2=Math.sin(a)*r;
    s+=P(`M${f1(x1)} ${f1(y1)} A${f1(r)} ${f1(r)} 0 0 ${dir>0?1:0} ${f1(x1)} ${f1(y2)}`,ST(c,o.w||3.2,`opacity:${f2(op*(o.o??1))}`));}
  return G(x,y,1,0,s);}
/* tortuga de perfil (mira a la derecha, patas en y=0) · o={T,walk,head 0..1,open 0..1,c,cd,skin} */
function turtleS(o={}){const T=o.T||0,wk=o.walk||0,ph=T*5,sw=Math.sin(ph)*wk,hd=cl(o.head??1),op=cl(o.open||0);
  const c=o.c||'#6b8f3a',cd=o.cd||'#4f6e28',sk=o.skin||'#9cbf6a',skd=o.skind||'#7a9c4c';
  const leg=(x,a,col)=>G(x,-12,1,a,P('M-12 -6 Q-15 8 -12 12 Q0 16 14 12 Q16 4 12 -6Z',`fill:${col};${OL(2)}`)+P('M-6 12 l-1 2 M0 13 l0 2 M6 12 l1 2',ST(K.ink,2)));
  let s=leg(-46,sw*14,skd)+leg(42,-sw*14,skd);
  s+=P('M-92 -18 Q-104 -16 -112 -8 Q-100 -10 -88 -12Z',`fill:${sk};${OL(1.8)}`);
  const hx=lerp(70,100,hd),hy=-26+Math.sin(T*2.2)*1.5*hd;
  s+=P(`M60 -30 Q${f1(hx-20)} ${f1(hy-14)} ${f1(hx)} ${f1(hy-8)} L${f1(hx)} ${f1(hy+8)} Q${f1(hx-18)} ${f1(hy+8)} 60 -10Z`,`fill:${sk};${OL(2)}`);
  s+=G(hx,hy,1,0,G(0,0,1,0,P('M-6 -16 Q22 -18 30 -4 Q30 2 26 4 L-4 6Z',`fill:${sk};${OL(2)}`))+G(0,4,1,op*20,P('M-4 0 L26 0 Q22 10 -2 10Z',`fill:${skd};${OL(2)}`))+
    (op>.05?El(20,4,5*op,4*op,'#5a1a22'):'')+Ci(12,-8,4.4,'#fff',OL(1.4))+Ci(13.5,-8,2.2,K.ink)+Ci(14.3,-9,.8,'#fff')+P('M6 -14 Q12 -16 18 -13',ST(K.ink,1.6)));
  s+=P('M-96 -12 Q-90 -86 0 -88 Q90 -86 96 -12Z',`fill:${c};${OL(2.6)}`);
  s+=clipG(P('M-60 -16 L-52 -50 L-20 -64 L20 -64 L52 -50 L60 -16 M-20 -64 L-26 -86 M20 -64 L26 -86 M-52 -50 L-82 -56 M52 -50 L82 -56 M-20 -64 L-8 -40 L8 -40 L20 -64 M-8 -40 L-12 -16 M8 -40 L12 -16 M-52 -50 L-40 -16 M52 -50 L40 -16',ST(cd,3)),'<path d="M-96 -12 Q-90 -86 0 -88 Q90 -86 96 -12Z"/>');
  s+=P('M-70 -66 Q-40 -82 -6 -82',ST('#fff',4,'opacity:.35'));
  s+=Rc(-100,-16,200,12,'#d9c27a',6,OL(2.2));
  s+=leg(-26,-sw*14,sk)+leg(62,sw*14,sk);
  return G(0,-Math.abs(Math.sin(ph))*2*wk,1,0,s);}
/* geco tokay de perfil (gris azulado con lunares naranjas) · o={T,open,walk} */
function geckoS(o={}){const T=o.T||0,op=cl(o.open||0),wk=o.walk||0,ph=T*8,sw=Math.sin(ph)*wk,c='#8aa0c6',cd='#5f7499';
  const leg=(x,a,col)=>G(x,-14,1,a,P('M0 0 Q-10 8 -14 14',ST(K.ink,9))+P('M0 0 Q-10 8 -14 14',ST(col,5.5))+Ci(-18,15,3,col,OL(1.2))+Ci(-12,16,3,col,OL(1.2))+Ci(-6,15,3,col,OL(1.2)));
  let s=leg(-30,sw*18,cd)+leg(36,-sw*18,cd);
  s+=P(`M-58 -18 Q-110 -14 -150 ${f1(-30+Math.sin(T*2.4)*8)} Q-108 -4 -56 -6Z`,`fill:${c};${OL(2)}`);
  s+=P('M-62 -12 Q-50 -40 0 -40 Q40 -40 56 -28 L58 -8 Q20 -2 -20 -2 Q-56 -2 -62 -12Z',`fill:${c};${OL(2.2)}`);
  [[-40,-24],[-18,-32],[4,-26],[24,-32],[38,-20],[-4,-14],[-28,-12],[-90,-18],[-118,-22]].forEach(([x,y],i)=>s+=Ci(x,y,i>6?3:4.2,'#f08a3c'));
  s+=G(52,-26,1,0,P('M0 -14 Q30 -22 50 -6 Q52 0 48 4 L2 12Z',`fill:${c};${OL(2.2)}`)+G(4,4,1,op*24,P('M0 0 L46 0 Q40 12 2 10Z',`fill:${cd};${OL(2)}`))+(op>.05?El(34,6,7*op,4*op,'#c2344f'):'')+
    Ci(24,-8,7.5,'#f6c43a',OL(1.6))+El(24,-8,1.6,6,K.ink)+Ci(36,-10,3,'#f08a3c'));
  s+=leg(-14,-sw*18,c)+leg(56,sw*18,c);
  return G(0,0,1,0,s);}
/* gavial macho (hocico largo y fino con el «ghara») · o={T,ghara 0..1 resaltado,open} */
function gharialS(o={}){const T=o.T||0,hg=cl(o.ghara||0),op=cl(o.open||0),c=o.c||'#7c8a5a',cd=o.cd||'#5c6a40',bl='#d8d3a4';let s='';
  const leg=(x,a,col)=>G(x,-8,1,a,P('M0 0 Q-4 14 -12 22 L8 22',ST(K.ink,13))+P('M0 0 Q-4 14 -12 22 L8 22',ST(col,9))+P('M8 22 l6 -2 M8 22 l6 3',ST(K.ink,2)));
  s+=leg(-120,Math.sin(T*3)*6,cd)+leg(20,-Math.sin(T*3)*6,cd);
  s+=P(`M-280 ${f1(-14+Math.sin(T*1.6)*6)} Q-200 -40 -110 -62 Q-20 -76 50 -56 L66 -16 Q-20 -2 -110 -6 Q-200 -6 -280 ${f1(-6+Math.sin(T*1.6)*6)}Z`,`fill:${c};${OL(2.4)}`);
  s+=P('M-200 -10 Q-110 -2 50 -18',ST(bl,6))+P('M-200 -10 Q-110 -2 50 -18',ST(K.ink,1.4,'opacity:.4'));
  for(let i=0;i<10;i++){const x=-230+i*28,y=-24-Math.sin(Math.PI*cl((i+1)/11))*44;s+=P(`M${x} ${f1(y)} l8 -10 l8 10`,`fill:${cd};${OL(1.4)}`);}
  for(let i=0;i<7;i++)s+=Ci(-150+i*30,-40+(i%2)*8,3.4,cd);
  s+=G(52,-36,1,0,G(0,0,1,-op*6,P('M0 -20 Q16 -26 44 -16 L198 -10 Q206 -8 206 0 L0 4Z',`fill:${c};${OL(2.2)}`)+[...Array(12)].map((_,i)=>P(`M${30+i*14} 2 l3 6 l3 -6`,'fill:#fffbe8;'+OL(.9))).join(''))+
    G(0,6,1,op*8,P('M0 -2 L200 0 Q206 6 196 10 L0 16Z',`fill:${bl};${OL(2)}`)+[...Array(12)].map((_,i)=>P(`M${36+i*14} -1 l3 -6 l3 6`,'fill:#fffbe8;'+OL(.9))).join(''))+
    El(22,-22,14,11,c,OL(2.2))+Ci(24,-24,5.4,'#ffd84a',OL(1.4))+El(24,-24,1.5,4.2,K.ink));
  s+=leg(-90,-Math.sin(T*3)*6,c)+leg(44,Math.sin(T*3)*6,c);
  const gx=256,gy=-50;s+=(hg>0?Ci(gx,gy,26+5*Math.sin(T*6),'none',`stroke:${K.pink};stroke-width:3.6;opacity:${f2(hg)}`):'')+P(`M${gx-18} ${gy+10} Q${gx-20} ${gy-14} ${gx} ${gy-16} Q${gx+20} ${gy-14} ${gx+18} ${gy+10}Z`,'fill:#6b5a40;'+OL(2.2))+Ci(gx-6,gy-4,3.2,'#3a2e22')+Ci(gx+6,gy-4,3.2,'#3a2e22');
  return G(0,Math.sin(T*2)*2,1,0,s);}
/* lagartija (lagartija llorona de Chile: parda con bandas) · o={T,open,walk,freeze} */
function lizardS(o={}){const T=o.T||0,op=cl(o.open||0),wk=o.walk||0,ph=T*10,sw=Math.sin(ph)*wk,c=o.c||'#9a7a4e',cd=o.cd||'#6e5534',st=o.st||'#e3cf9a';
  const leg=(x,a,col)=>G(x,-10,1,a,P('M0 0 Q-6 6 -10 10 l-5 0 M-10 10 l-2 4 M-10 10 l3 4',ST(K.ink,6))+P('M0 0 Q-6 6 -10 10',ST(col,3.4)));
  let s=leg(-22,sw*20,cd)+leg(26,-sw*20,cd);
  s+=P(`M-40 -12 Q-80 -10 -120 ${f1(-2+Math.sin(T*3)*6*(1-(o.freeze||0)))} Q-80 2 -40 -1Z`,`fill:${c};${OL(1.8)}`);
  s+=P('M-44 -6 Q-34 -26 0 -26 Q30 -26 42 -18 L42 -4 Q10 0 -20 0 Q-40 0 -44 -6Z',`fill:${c};${OL(2)}`);
  s+=P('M-40 -14 Q0 -22 40 -14',ST(st,3))+P('M-38 -8 Q0 -12 38 -8',ST(cd,2));
  s+=G(40,-16,1,0,P('M0 -9 Q22 -14 36 -3 Q36 2 32 4 L0 8Z',`fill:${c};${OL(1.8)}`)+G(2,3,1,op*26,P('M0 0 L32 0 Q28 8 0 7Z',`fill:${cd};${OL(1.6)}`))+(op>.05?El(24,5,6*op,3.5*op,'#c2344f'):'')+
    Ci(16,-5,4,'#fff',OL(1.2))+Ci(17,-5,2.2,K.ink));
  s+=leg(-8,-sw*20,c)+leg(38,sw*20,c);
  return G(0,0,1,0,s);}
/* micrófono de estudio con soporte · o={rec 0..1} */
function micS(o={}){let s=P('M0 40 L0 120 M-36 124 L36 124',ST(K.ink,6))+P('M-34 0 Q-34 46 0 46 Q34 46 34 0',ST(K.ink,5));
  s+=Rc(-22,-60,44,88,'#3a3a44',22,OL(2.4))+[...Array(6)].map((_,i)=>P(`M-20 ${-44+i*12} L20 ${-44+i*12}`,ST('#5a5a66',2))).join('')+P('M-12 -50 Q-14 -20 -10 10',ST('#fff',3,'opacity:.35'));
  if(o.rec)s+=G(40,-60,1,0,Ci(0,0,7,K.red)+Tn(12,5,'REC',13,800,{a:'start',fill:K.red}),cl(o.rec));
  return s;}
/* pantalla con forma de onda (osciloscopio) · o={T,amp,c,w,h,label} */
function oscS(o={}){const T=o.T||0,w=o.w||260,h=o.h||130,a=o.amp??1,c=o.c||'#7dffb0';let s=Rc(-w/2-10,-h/2-10,w+20,h+20,K.ink,14)+Rc(-w/2,-h/2,w,h,'#10261c',8);
  for(let i=1;i<6;i++)s+=P(`M${f1(-w/2+i*w/6)} ${-h/2} L${f1(-w/2+i*w/6)} ${h/2}`,ST('rgba(125,255,176,.12)',1));
  s+=P(`M${-w/2} 0 L${w/2} 0`,ST('rgba(125,255,176,.2)',1));
  let d='';for(let i=0;i<=80;i++){const x=-w/2+i*w/80,u=i/80,env=Math.sin(Math.PI*u)*(o.burst?Math.exp(-Math.pow((u-.5)/.12,2)):1);
    const y=Math.sin(u*40+T*18)*Math.sin(u*9+T*5)*h*.38*a*env;d+=(i?' L':'M')+f1(x)+' '+f1(y);}
  s+=P(d,ST(c,2.4));if(o.label)s+=Tn(-w/2+10,-h/2+18,o.label,11,700,{a:'start',fill:c});
  return s;}
/* olla de barro (lo que significa «ghara») */
function potS(){return P('M-40 -60 L40 -60 L34 -50 Q66 -20 50 20 Q36 50 0 52 Q-36 50 -50 20 Q-66 -20 -34 -50Z','fill:#c46a3a;'+OL(2.4))+
  Rc(-44,-68,88,12,'#a8552c',5,OL(2.2))+P('M-48 -4 Q0 8 48 -4',ST('#f4d6a8',4))+P('M-44 12 Q0 22 44 12',ST('#8e4322',3))+P('M-30 -40 Q-40 -10 -30 20',ST('#fff',4,'opacity:.3'));}
/* carné de identidad con «foto» · inner = dibujo dentro de la foto */
function idCardS(inner,name='ALIGÁTOR',sub='tamaño: según su voz'){const w=300,h=180;let s=Rc(-w/2+6,-h/2+7,w,h,K.ink,14)+Rc(-w/2,-h/2,w,h,'#f4f1ea',14,OL(2.4));
  s+=Rc(-w/2,-h/2,w,36,'url(#gWA)',14)+Rc(-w/2,-h/2+22,w,14,'url(#gWA)')+Tn(0,-h/2+24,'DOCUMENTO DE IDENTIDAD',12,800,{fill:'#fff',ls:.08});
  s+=clipG(Rc(-130,-44,110,110,'#cfe3c9')+inner,'<rect x="-130" y="-44" width="110" height="110" rx="6"/>')+Rc(-130,-44,110,110,'none',6,OL(2));
  s+=Tn(0,-18,'NOMBRE',9,700,{a:'start',fill:'#8a8a8a'})+Tn(0,0,name,17,800,{a:'start'})+Tn(0,26,'VOZ',9,700,{a:'start',fill:'#8a8a8a'})+Tn(0,44,sub,11.5,600,{a:'start'});
  s+=P('M0 58 q10 -10 20 0 t20 0 t20 0 t20 0 t20 0',ST(K.pink,2.4));return s;}
/* pez de aletas lobuladas (antepasado lejano) · o={T} */
function lobeFishS(o={}){const T=o.T||0,wg=Math.sin(T*4)*6;let s='';
  const fin=(x,y,a)=>G(x,y,1,a,P('M0 0 Q6 18 -4 30 Q-14 18 -6 2Z','fill:#a8662f;'+OL(1.8))+P('M-2 6 L-4 24',ST('#7d4a20',1.6)));
  s+=fin(-10,10,20+wg)+fin(40,12,10-wg);
  s+=P(`M-120 ${f1(wg)} Q-140 ${f1(-20+wg)} -150 ${f1(-30+wg)} Q-146 ${f1(wg)} -150 ${f1(30+wg)} Q-140 ${f1(20+wg)} -120 ${f1(wg)}Z`,'fill:#7d6a9a;'+OL(2));
  s+=P(`M-124 ${f1(wg*.6)} Q-90 -34 0 -34 Q70 -34 96 -6 Q100 4 92 10 Q60 30 0 30 Q-80 30 -124 ${f1(4+wg*.6)}Z`,'fill:#8f7cb0;'+OL(2.2));
  for(let i=0;i<10;i++)for(let j=0;j<3;j++)s+=P(`M${-90+i*16} ${-20+j*14} q6 6 0 12`,ST('#6d5b8c',1.4));
  s+=P('M-40 -34 Q-20 -54 10 -34',`fill:#7d6a9a;${OL(1.8)}`)+P('M60 8 Q74 12 90 6',ST(K.ink,1.8))+Ci(70,-10,6,'#fff',OL(1.4))+Ci(71.5,-10,3,K.ink);
  s+=fin(-6,18,-10-wg)+fin(46,18,-20+wg);
  return G(0,0,1,0,s);}
/* altavoz con ruido · o={T,on} */
function speakerS(o={}){const T=o.T||0,k=1+.04*Math.sin(T*40)*(o.on??1);let s=Rc(-50,-80,100,160,'#2d2d35',14,OL(2.4));
  s+=G(0,-34,k,0,Ci(0,0,24,'#4a4a55',OL(2))+Ci(0,0,8,'#1b1b20'))+G(0,30,k,0,Ci(0,0,36,'#4a4a55',OL(2))+Ci(0,0,14,'#1b1b20'));
  return s;}
/* cronómetro · o={txt,p (0..1 aguja)} */
function stopwatchS(o={}){const p=o.p||0;let s=Rc(-10,-92,20,16,K.ink,4)+Ci(0,-8,74,'#fff',OL(3))+Ci(0,-8,64,'none',ST('#e3e3e3',2));
  for(let i=0;i<12;i++){const a=i*Math.PI/6;s+=P(`M${f1(Math.sin(a)*56)} ${f1(-8-Math.cos(a)*56)} L${f1(Math.sin(a)*62)} ${f1(-8-Math.cos(a)*62)}`,ST(K.ink,2.4));}
  const a=p*2*Math.PI;s+=P(`M0 -8 L${f1(Math.sin(a)*50)} ${f1(-8-Math.cos(a)*50)}`,ST(K.pink,4))+Ci(0,-8,6,K.ink);
  if(o.txt)s+=G(0,30,1,0,pill(o.txt,{sz:15,w:800,fill:'url(#gRP)'}));return s;}

/* ===== malvasía cabeciblanca y compañía (17/10) ===== */
/* Pato de cola tiesa de perfil, mirando a la derecha; y=0 = línea de flotación.
   o={T, kind:'malvasia'|'canela'|'hibrido'|'hembra', bill 0..1 (gris→azul), tail 0..1 (cola levantada),
      swim 0..1 (balanceo), feet 0..1 (patas remando bajo el agua), open 0..1 (pico), look -1..1, puff 0..1 (cuello hinchado)} */
function duckS(o={}){const T=o.T||0,kd=o.kind||'malvasia',bq=cl(o.bill??1),tq=cl(o.tail??.5),sw=o.swim??1,op=cl(o.open||0),pf=cl(o.puff||0);
  const fem=kd==='hembra';
  const body=fem?'#8a6a4c':kd==='canela'?'#b8532a':kd==='hibrido'?'#a8583a':'#b5592f',back=fem?'#6a4f37':kd==='canela'?'#8f3a1c':'#8a4426',
    head='#fbfbf7',cap='#1a1513',neck=fem?'#6a4f37':'#1a1513';
  const billC=fem?'#4a4440':mixc('#8b9097','#3fb4ff',bq),billD=fem?'#2f2a27':mixc('#62666c','#1f82d6',bq);
  const bob=Math.sin(T*2.2)*2*sw,rock=Math.sin(T*1.6)*1.6*sw;let s='';
  /* patas remando (bajo el agua) */
  if(o.feet>0){const fq=cl(o.feet);for(let i=0;i<2;i++){const ph=T*9+i*Math.PI,a=Math.sin(ph)*28;
    s+=G(-34+i*16,6,1,a,P('M0 0 L-6 30',ST(K.ink,6))+P('M0 0 L-6 30',ST('#5d6470',3.4))+G(-6,30,1,0,P('M0 0 L-22 -2 L-24 8 L-14 12 L-4 8Z',`fill:#5d6470;${OL(1.6)}`)),fq);}}
  /* cola tiesa: abanico de plumas rígidas */
  const ta=lerp(10,62,tq);let tail='';for(let i=0;i<7;i++){const a=(i-3)*7;tail+=G(0,0,1,a,P('M0 -3 L-66 -5 Q-72 0 -66 5 L0 3Z',`fill:${i%2?back:'#4a2a1a'};${OL(1.6)}`));}
  s+=G(-92,-30,1,ta,tail);
  /* cuerpo */
  s+=P('M-100 -26 Q-104 -6 -86 0 L60 0 Q96 -8 92 -44 Q86 -70 50 -72 Q-20 -76 -70 -58 Q-98 -46 -100 -26Z',`fill:${body};${OL(2.4)}`);
  s+=clipG(P('M-90 -40 Q-30 -66 40 -62 Q70 -60 80 -50 L80 -90 L-110 -90Z',`fill:${back}`)+
    P('M-70 -30 q20 -8 40 0 M-40 -18 q20 -8 40 0 M-10 -34 q20 -8 40 0',ST(back,2.6,'opacity:.8'))+P('M-80 -6 Q0 -2 70 -8',ST('#fff',3,'opacity:.18')),
    '<path d="M-100 -26 Q-104 -6 -86 0 L60 0 Q96 -8 92 -44 Q86 -70 50 -72 Q-20 -76 -70 -58 Q-98 -46 -100 -26Z"/>');
  /* ala */
  s+=P('M-60 -44 Q-10 -60 40 -46 Q10 -26 -54 -26Z',`fill:${back};${OL(1.8)}`)+P('M-40 -40 Q0 -48 26 -42',ST('#3a2216',1.6,'opacity:.6'));
  /* cuello */
  const nx=74,ny=-60;s+=P(`M50 -60 Q${54-pf*6} -96 ${nx} -104 L${nx+22} -100 Q${96+pf*8} -76 88 -44Z`,`fill:${neck};${OL(2.2)}`);
  if(pf>0)s+=El(80,-70,16+10*pf,14+6*pf,neck,OL(2));
  /* cabeza */
  const hx=86,hy=-118;
  s+=G(hx,hy,1,0,(()=>{let h=Ci(0,0,30,fem?'#8a6a4c':head,OL(2.4));
    if(kd==='malvasia')h+=clipG(P('M-40 -40 L40 -40 L40 -14 Q20 -24 0 -22 Q-20 -18 -40 -6Z',`fill:${cap}`),'<circle cx="0" cy="0" r="30"/>');
    else if(kd==='canela')h+=clipG(P('M-40 -40 L40 -40 L40 -2 Q24 -6 14 -8 Q4 -10 -6 -2 Q-24 12 -40 18Z',`fill:${cap}`),'<circle cx="0" cy="0" r="30"/>');
    else if(kd==='hibrido')h+=clipG(P('M-40 -40 L40 -40 L40 -8 Q20 -14 4 -14 Q-16 -10 -40 6Z',`fill:${cap}`)+El(-4,8,14,9,'#2a2320','opacity:.55'),'<circle cx="0" cy="0" r="30"/>');
    else h+=clipG(P('M-40 -40 L40 -40 L40 -10 Q0 -18 -40 -4Z',`fill:#3a2a1e`)+P('M-30 10 Q0 2 34 6',ST('#3a2a1e',5)),'<circle cx="0" cy="0" r="30"/>')+P('M-28 0 Q0 -6 30 -2',ST('#d8c8a8',4));
    h+=Ci(30-8,-2,30,'none','opacity:0')+P('M-30 0 A30 30 0 0 1 30 0',ST('#fff',0));
    /* pico ancho e hinchado en la base */
    const lk=(o.look||0)*1.5;
    h+=G(22,4,1.25,0,P(`M0 -14 Q14 -22 26 -10 Q36 -6 42 -2 Q44 4 38 6 L4 8 Q-4 0 0 -14Z`,`fill:${billC};${OL(2.2)}`)+
      G(4,6,1,op*18,P('M0 0 L36 0 Q40 6 32 9 L2 8Z',`fill:${billD};${OL(1.8)}`))+P('M30 -7 q4 -2 8 1',ST('#fff',1.8,`opacity:${f2(.4+.4*bq)}`))+(bq>.6&&!fem?P('M8 -14 Q18 -18 24 -12',ST('#bdeaff',2.2,`opacity:${f2(sg(bq,.6,1)*.8)}`)):''));
    h+=Ci(12+lk,-6,4.6,K.ink)+Ci(13.4+lk,-7.4,1.5,'#fff');
    if(kd!=='malvasia'&&kd!=='hembra')h+=P('M2 -2 Q12 -12 22 -4',ST('#fff',1.4,'opacity:.0'));
    return h;})());
  return G(-8,bob,1,rock,s);}
/* Huevo enorme junto a la hembra (comparativa de proporción) */
function bigEggS(o={}){const g=o.glow||0;return shadowE(0,2,46,.16)+El(0,-58,44,58,'#f3efe4',OL(2.4))+El(-14,-80,10,16,'#fff','opacity:.6')+(g>0?El(0,-58,52,66,'none',`stroke:${K.yellow};stroke-width:4;opacity:${f2(g)}`):'');}
/* Larva de quironómido (gusanito rojo que se retuerce) */
function midgeLarvaS(T=0,ph=0,o={}){const n=11,c=o.c||'#d8282f',cd=o.cd||'#a01820';let d='';const pts=[];
  for(let i=0;i<n;i++){const x=(i-(n-1)/2)*7,y=Math.sin(T*6+ph+i*.7)*6*(i/n+.3);pts.push([x,y]);}
  pts.forEach(([x,y],i)=>d+=(i?' L':'M')+f1(x)+' '+f1(y));
  let s=P(d,ST(K.ink,9))+P(d,ST(c,6));for(let i=1;i<n-1;i+=2){const [x,y]=pts[i];s+=P(`M${f1(x)} ${f1(y-3)} l0 6`,ST(cd,1.4));}
  const [hx,hy]=pts[n-1];s+=Ci(hx+2,hy,4.6,'#5a1210',OL(1.2));return s;}
/* Color estructural: sección del pico (queratina con nanoestructura) que devuelve solo el azul
   o={p 0..1 llegada de la luz, out 0..1 salida azul, T} */
function structBlueS(o={}){const p=cl(o.p??1),q=cl(o.out??1),T=o.T||0;let s='';
  s+=Rc(-200,0,400,120,'#f0d9c4',10,OL(2.4))+Tn(-186,108,'tejido vivo',11,700,{a:'start',fill:'#8a6a52'});
  s+=Rc(-200,-46,400,52,'rgba(200,225,240,.55)',8,OL(2.4))+Tn(-186,-52,'QUERATINA',11,800,{a:'start',fill:K.ink,ls:.08});
  for(let r=0;r<3;r++)for(let i=0;i<22;i++){const x=-188+i*18+(r%2)*9,y=-36+r*14;s+=Ci(x,y,4.4,'#8fb7d3',`stroke:#5e8fb3;stroke-width:1`);}
  const cols=['#ff4b4b','#ff9f2e','#ffe14a','#4fd16a','#3fb4ff','#8a5cff'];
  cols.forEach((c,i)=>{const x0=-170+i*16,y0=-230;s+=DR(`M${x0} ${y0} L${x0+70} -48`,ST(c,4),p);});
  if(p>=1){cols.forEach((c,i)=>{if(i===4)return;const x=-100+i*16;s+=Ci(x,-36,8,'none',`stroke:${c};stroke-width:2;opacity:${f2(.6*(1-((T*2+i*.2)%1)))}`);});}
  s+=DR('M-10 -48 L110 -230',ST('#3fb4ff',8),q)+(q>.95?G(110,-230,1,-55,P('M-10 -12 L10 0 L-10 12',ST('#3fb4ff',6))):'');
  return s;}
