/* =====================================================================
   NEWS · Biblioteca de motion graphics para noticias (estilo Mentes curiosas)
   Convención: cada componente es  NX.nombre(opciones, lt)  → SVG (string)
   · lt = segundos desde que aparece el componente (controla su animación)
   · se dibuja centrado en (0,0) salvo que se indique; colócalo con G(x,y,escala,rot,…)
   · usa el kit (G, P, Rc, Ci, Tn, Ts, pill, EZ, sg, lerp, K, DR, ST, OL…)
   ===================================================================== */
const NX={};
const _ap=(lt,a=0,d=.35)=>EZ.back(sg(lt,a,a+d));
const _ao=(lt,a=0,d=.35)=>EZ.out(sg(lt,a,a+d));
const _blink=(lt,f=2)=>(Math.floor(lt*f*2)%2===0);
const _pulse=(lt,r,c=K.pink,n=2,per=1.4)=>{let s='';for(let i=0;i<n;i++){const q=((lt/per)+i/n)%1;s+=Ci(0,0,r*(.4+q*1.6),'none',`stroke:${c};stroke-width:${f1(3*(1-q))};opacity:${f2(1-q)}`);}return s;};
NX.pulse=(o,lt)=>_pulse(lt,o.r||20,o.c||K.pink,o.n||2,o.per||1.4);

/* ---------------- A · RÓTULOS E INTERFAZ ---------------- */
/* Franja de ÚLTIMA HORA (pantalla completa, arriba) · o:{text,y} */
NX.breaking=(o={},lt)=>{const y=o.y??118,p=_ao(lt,0,.4),txt=o.text||'ÚLTIMA HORA',w=mw(txt,fSans(20,800))+86;
  let s=G(-W*(1-p),0,1,0,Rc(0,y-22,W,44,K.red)+Rc(0,y+22,W,5,K.ink,0,'opacity:.85'));
  s+=G(0,0,1,0,Rc(18,y-17,w,34,'#fff',17)+Ci(40,y,7,K.red,`opacity:${_blink(lt,1.2)?1:.25}`)+Tn(56,y+7.5,txt,20,800,{a:'start',fill:K.red,ls:.04}),_ao(lt,.25,.3));
  if(o.sub)s+=G(0,0,1,0,Tn(w+40,y+6.5,o.sub,16,700,{a:'start',fill:'#fff'}),_ao(lt,.4,.3));
  return s;};
/* Etiqueta EN DIRECTO · o:{text} */
NX.live=(o={},lt)=>{const t=o.text||'EN DIRECTO',w=mw(t,fSans(13,800))+40;return G(0,0,_ap(lt),0,Rc(-w/2,-14,w,28,K.ink,14)+Ci(-w/2+15,0,5.5,K.red,`opacity:${_blink(lt,1)?1:.2}`)+Tn(8,4.6,t,13,800,{fill:'#fff',ls:.06}));};
/* Etiqueta de fuente · o:{src} */
NX.source=(o={},lt)=>{const t='Fuente: '+(o.src||'Euronews');return G(0,0,1,0,pill(t,{sz:11,w:600,fill:'rgba(20,18,18,.75)'}),_ao(lt,0,.3));};
/* Rótulo inferior (nombre + cargo) · o:{title,sub} */
NX.lowerThird=(o={},lt)=>{const p=_ao(lt,0,.4),w=Math.max(mw(o.title||'',fSans(18,800)),mw(o.sub||'',fSans(13,500)))+44;
  return G(-30*(1-p),0,1,0,Rc(0,-28,w,58,'#fff',8,OL(2))+Rc(0,-28,8,58,'url(#gRP)',4)+Tn(22,-4,o.title||'',18,800,{a:'start'})+Tn(22,18,o.sub||'',13,500,{a:'start',fill:'#666'}),cl(p*2));};
/* Puntos clave numerados · o:{title, items:[...], step} */
NX.keyPoints=(o={},lt)=>{const it=o.items||[],st=o.step||.6,w=o.w||420;let s='';
  if(o.title)s+=G(0,-32,1,0,Ts(0,0,o.title,30),_ao(lt,0,.3));
  it.forEach((t,i)=>{const a=.2+i*st,p=_ao(lt,a,.35);if(p<=0)return;const y=i*58;
    s+=G(40*(1-p),y,1,0,Rc(-w/2+4,y?0:0,w,46,K.ink,10,'opacity:.9')+Rc(-w/2,-4,w,46,'#fff',10,OL(2))+Ci(-w/2+28,19,15,'url(#gRP)')+Tn(-w/2+28,24.5,String(i+1),15,800,{fill:'#fff'})+Tn(-w/2+56,24,t,16,600,{a:'start'}),cl(p*2));});
  return s;};
/* Cita destacada · o:{text, who} (texto se escribe solo) */
NX.quote=(o={},lt)=>{const txt=o.text||'',n=Math.floor(txt.length*sg(lt,.3,.3+txt.length*.035)),lines=[];let cur='';
  txt.slice(0,n).split(' ').forEach(wd=>{if(mw(cur+' '+wd,fSerif(26,true))>380&&cur){lines.push(cur);cur=wd;}else cur=cur?cur+' '+wd:wd;});if(cur)lines.push(cur);
  let s=G(0,0,_ap(lt,0,.4),0,Rc(-215,-95,430,190+Math.max(0,lines.length-3)*30,'#fff',14,OL(2.2))+Ts(-185,-30,'«',90,{fill:'url(#gRP)',stroke:'url(#gRP)'}));
  lines.forEach((l,i)=>s+=Ts(-160,-38+i*32,l,26,{a:'start',it:true}));
  if(o.who&&n>=txt.length)s+=G(0,0,1,0,Tn(185,70+Math.max(0,lines.length-3)*30,'— '+o.who,14,700,{a:'end',fill:'#555'}),_ao(lt,.3+txt.length*.035,.3));
  return s;};
/* Periódico que entra girando · o:{paper, headline} */
NX.newspaper=(o={},lt)=>{const p=EZ.out(sg(lt,0,.7)),r=(1-p)*720,k=lerp(.1,1,p);
  let s=Rc(-170,-120,340,240,'#f4f0e6',4,OL(2.2))+Tn(0,-88,(o.paper||'EL DIARIO').toUpperCase(),22,800,{ls:.08})+P('M-150 -76 L150 -76 M-150 -72 L150 -72',ST(K.ink,1.2));
  const hl=(o.headline||'').toUpperCase(),words=hl.split(' ');let l1='',l2='';words.forEach(wd=>{if(mw(l1+' '+wd,fSans(24,800))<290&&!l2)l1=l1?l1+' '+wd:wd;else l2=l2?l2+' '+wd:wd;});
  s+=Tn(0,-40,l1,24,800)+Tn(0,-12,l2,24,800);
  s+=Rc(-150,8,135,90,'#cfc8b8',2)+P('M-140 70 L-100 40 L-70 60 L-40 30 L-25 50',ST('#8a8170',3));
  for(let i=0;i<6;i++)s+=Rc(0,10+i*15,150,6,'#d4cdbd',3);
  return G(0,0,k,r,s,cl(p*3));};
/* Notificación en el móvil · o:{app,title,body} */
NX.phone=(o={},lt)=>{const n=_ao(lt,.5,.35);let s=G(0,0,_ap(lt,0,.4),0,Rc(-95,-180,190,360,K.ink,28)+Rc(-85,-170,170,340,'#2a37d7',20)+Rc(-30,-165,60,12,K.ink,6)+Tn(0,-120,'12:00',34,300,{fill:'#fff'}));
  s+=G(0,(1-n)*-60,1,0,Rc(-80,-80,160,62,'rgba(255,255,255,.95)',12)+Rc(-70,-70,16,16,'url(#gRP)',4)+Tn(-48,-58,(o.app||'NOTICIAS').toUpperCase(),9,700,{a:'start',fill:'#777'})+Tn(-70,-40,o.title||'',12,800,{a:'start'})+Tn(-70,-25,o.body||'',10,500,{a:'start',fill:'#444'}),cl(n*2));
  return s;};
/* Publicación en red social (genérica, sin marcas) · o:{user,text,likes} */
NX.post=(o={},lt)=>{const p=_ap(lt,0,.4),lk=Math.floor((o.likes||12800)*EZ.out(sg(lt,.5,2)));
  let s=Rc(-170,-90,340,180,'#fff',14,OL(2.2))+Ci(-140,-60,16,'url(#gPIPA)')+Tn(-116,-63,o.user||'@usuario',14,800,{a:'start'})+Tn(-116,-47,'hace 2 min',11,500,{a:'start',fill:'#888'});
  const words=(o.text||'').split(' ');let lines=[''],li=0;words.forEach(wd=>{if(mw(lines[li]+' '+wd,fSans(15,500))>300){lines.push(wd);li++;}else lines[li]=lines[li]?lines[li]+' '+wd:wd;});
  lines.slice(0,3).forEach((l,i)=>s+=Tn(-150,-10+i*20,l,15,500,{a:'start'}));
  s+=P('M-150 62 a6 6 0 0 1 12 0 a6 6 0 0 1 12 0 q0 10 -12 18 q-12 -8 -12 -18z','fill:'+K.pink)+Tn(-118,72,lk.toLocaleString('es-ES'),13,700,{a:'start'});
  return G(0,0,p,0,s);};
/* A contra B · o:{a,b,ca,cb} */
NX.versus=(o={},lt)=>{const pa=_ao(lt,0,.4),pb=_ao(lt,.15,.4),vs=_ap(lt,.45,.3);
  return G(-240*(1-pa),0,1,0,Rc(-230,-70,215,140,o.ca||'url(#gWA)',16)+Tn(-122,8,o.a||'A',24,800,{fill:'#fff'}))+G(240*(1-pb),0,1,0,Rc(15,-70,215,140,o.cb||'url(#gRP)',16)+Tn(122,8,o.b||'B',24,800,{fill:'#fff'}))+G(0,0,vs,0,Ci(0,0,34,K.ink)+Ts(0,10,'vs',30,{it:true,fill:'#fff',stroke:'#fff'}));};
/* Sellos predefinidos · o:{type:'confirmado'|'desarrollo'|'falso'|'oficial'} */
NX.stamp=(o={},lt)=>{const T={confirmado:['CONFIRMADO',K.green],desarrollo:['EN DESARROLLO',K.orange],falso:['FALSO',K.red],oficial:['OFICIAL',K.blue],urgente:['URGENTE',K.red]}[o.type||'confirmado'];return stampA(0,0,lt,o.text||T[0],{c:T[1],r:o.r??-6,sz:o.sz||26});};
/* Línea temporal · o:{items:[[fecha,texto],...], step} */
NX.timeline=(o={},lt)=>{const it=o.items||[],n=it.length,w=o.w||440,st=o.step||.55;let s=DR(`M${-w/2} 0 L${w/2} 0`,ST(K.ink,3),EZ.io(sg(lt,0,.3+n*st)));
  it.forEach(([d,t],i)=>{const x=-w/2+(n===1?w/2:i*w/(n-1)),a=.25+i*st,p=_ap(lt,a,.3);if(p<=0)return;const up=i%2===0;
    s+=G(x,0,p,0,Ci(0,0,9,'url(#gRP)',OL(2,'#fff'))+P(`M0 ${up?-10:10} L0 ${up?-30:30}`,ST(K.ink,1.6)));
    s+=G(x,up?-44:44,p,0,pill(d,{sz:12,w:700}))+G(x,up?-72:74,1,0,Tn(0,0,t,13,600,{}),_ao(lt,a+.15,.3));});
  return s;};
/* Calendario que pasa hojas · o:{from,to,month} */
NX.calendar=(o={},lt)=>{const a=o.from??1,b=o.to??a,n=Math.abs(b-a),dur=o.dur||1.2,cur=n?Math.min(n,Math.floor(sg(lt,.3,.3+dur)*n+1e-6)):0,val=a+(b>=a?cur:-cur);let s=G(0,0,_ap(lt,0,.35),0,calS(String(val),(o.month||'OCT').toUpperCase(),{w:110,h:120,sz:48}));
  if(n&&lt>.3&&lt<.3+dur+.4){const q=((lt-.3)*(n/dur))%1;s+=G(q*90,-30-80*q+150*q*q,1,-q*90,calS(String(val),(o.month||'OCT').toUpperCase(),{w:110,h:120,sz:48}),1-q);}return s;};
/* Reloj con agujas · o:{h,m,spin} */
NX.clock=(o={},lt)=>{const h=o.h??12,m=o.m??0,sp=o.spin?lt*360*(o.spin):0,ma=m*6+sp*12,ha=h*30+m*.5+sp;let s='';for(let i=0;i<12;i++){const a=i*30*Math.PI/180;s+=P(`M${f1(Math.sin(a)*58)} ${f1(-Math.cos(a)*58)} L${f1(Math.sin(a)*66)} ${f1(-Math.cos(a)*66)}`,ST(K.ink,i%3?2:4));}
  return G(0,0,_ap(lt),0,Ci(0,0,78,'#fff',OL(3))+Ci(0,0,78,'none',`stroke:${K.red};stroke-width:6;opacity:.9`)+s+G(0,0,1,ha,P('M0 6 L0 -36',ST(K.ink,6)))+G(0,0,1,ma,P('M0 8 L0 -54',ST(K.ink,4)))+G(0,0,1,lt*360,P('M0 10 L0 -60',ST(K.red,1.6)))+Ci(0,0,5,K.red));};
/* Cuenta atrás 3-2-1 · o:{from} */
NX.countdown=(o={},lt)=>{const f=o.from||3,i=Math.floor(lt),v=f-i;if(v<1)return'';const q=lt-i;return G(0,0,lerp(1.6,1,EZ.out(sg(q,0,.25))),0,Ci(0,0,70,'url(#gRP)')+Tn(0,30,String(v),86,800,{fill:'#fff'}),1-sg(q,.8,1))+Ci(0,0,80,'none',`stroke:${K.ink};stroke-width:4;stroke-dasharray:${f1(503*(1-q))} 600;transform:rotate(-90deg)`);};

/* ---------------- B · DATOS ---------------- */
const _fmt=(v,dec=0)=>Number(v).toLocaleString('es-ES',{minimumFractionDigits:dec,maximumFractionDigits:dec});
/* Contador que rueda · o:{value,dec,prefix,suffix,label,sz,dur} */
NX.counter=(o={},lt)=>{const d=o.dur||1.2,q=EZ.out4(sg(lt,.15,.15+d)),v=(o.value||0)*q,sz=o.sz||64,txt=(o.prefix||'')+_fmt(v,o.dec||0);
  const bl=q<1?3*(1-q):0;let s=blurG(Tn(0,0,txt,sz,500,{ls:-.02}),0,bl);
  if(o.suffix)s+=Ts(mw(txt,fSans(sz,500))/2+6,0,o.suffix,sz*.62,{a:'start',it:true,fill:'url(#gRP)',stroke:'url(#gRP)'});
  if(o.label)s+=G(0,sz*.55,1,0,pill(o.label,{sz:12,w:600}),_ao(lt,.3,.3));
  return G(0,0,1,0,s,cl(lt*5));};
/* Barras horizontales · o:{items:[[etiqueta,valor,color?]], max, unit, w} */
NX.bars=(o={},lt)=>{const it=o.items||[],max=o.max||Math.max(...it.map(x=>x[1])),w=o.w||300,cols=['url(#gWA)','url(#gRP)','url(#gGR)','url(#gOR)','url(#gPU)'];let s='';
  it.forEach(([lab,v,c],i)=>{const y=i*52,p=EZ.out(sg(lt,.2+i*.18,.9+i*.18)),bw=w*v/max*p;
    s+=G(0,0,1,0,Tn(-w/2-14,y+8,lab,15,700,{a:'end'}),_ao(lt,i*.12,.3))+Rc(-w/2,y-14,w,30,'rgba(20,18,18,.08)',8)+Rc(-w/2,y-14,bw,30,c||cols[i%5],8)+(p>.2?Tn(-w/2+bw+8,y+7,_fmt(v*p,o.dec||0)+(o.unit||''),15,800,{a:'start'}):'');});
  return s;};
/* Columnas verticales · o:{items:[[etiqueta,valor,color?]], max, unit, h} */
NX.columns=(o={},lt)=>{const it=o.items||[],max=o.max||Math.max(...it.map(x=>x[1])),h=o.h||220,n=it.length,bw=Math.min(80,340/n),gap=bw*.35,tw=n*bw+(n-1)*gap,cols=['url(#gWA)','url(#gRP)','url(#gGR)','url(#gOR)','url(#gPU)'];let s=P(`M${-tw/2-20} 0 L${tw/2+20} 0`,ST(K.ink,2.4));
  it.forEach(([lab,v,c],i)=>{const x=-tw/2+i*(bw+gap),p=EZ.out(sg(lt,.2+i*.15,1+i*.15)),bh=h*v/max*p;
    s+=Rc(x,-bh,bw,bh,c||cols[i%5],6)+(p>.15?Tn(x+bw/2,-bh-10,_fmt(v*p,o.dec||0)+(o.unit||''),16,800):'')+Tn(x+bw/2,22,lab,13,700);});
  return s;};
/* Gráfico de línea · o:{pts:[...valores], labels:[...], unit, w, h} */
NX.line=(o={},lt)=>{const v=o.pts||[1,3,2,5],w=o.w||380,h=o.h||200,mx=Math.max(...v),mn=Math.min(0,...v),n=v.length,X=i=>-w/2+i*w/(n-1),Y=x=>-(x-mn)/(mx-mn)*h;
  let d=`M${f1(X(0))} ${f1(Y(v[0]))}`;for(let i=1;i<n;i++)d+=` L${f1(X(i))} ${f1(Y(v[i]))}`;const p=EZ.io(sg(lt,.2,1.6));
  let s=P(`M${-w/2-10} 0 L${w/2+10} 0 M${-w/2-10} 0 L${-w/2-10} ${-h-10}`,ST(K.ink,2));for(let k=1;k<4;k++)s+=P(`M${-w/2} ${f1(-h*k/4)} L${w/2} ${f1(-h*k/4)}`,ST('rgba(20,18,18,.12)',1.4));
  s+=clipG(P(d+` L${f1(X(n-1))} 0 L${f1(X(0))} 0Z`,'fill:'+K.pink+';opacity:.15'),Rc(-w/2,-h-20,w*p,h+20,'#000'))+DR(d,ST('url(#gRP)',5),p);
  const k=Math.min(n-1,Math.floor(p*(n-1)+1e-6));s+=G(X(k),Y(v[k]),1,0,Ci(0,0,7,K.pink,OL(2.5,'#fff')));
  if(p>.98)s+=G(X(n-1),Y(v[n-1])-28,_ap(lt,1.6,.3),0,pill(_fmt(v[n-1],o.dec||0)+(o.unit||''),{sz:13,fill:'url(#gRP)'}));
  (o.labels||[]).forEach((l,i)=>{if(l)s+=Tn(X(i),20,l,11,600,{fill:'#555'});});return s;};
/* Donut de porcentaje · o:{pct,label,color} */
NX.donut=(o={},lt)=>{const q=EZ.out(sg(lt,.15,1.3)),p=(o.pct||50)/100*q,R=80,C=2*Math.PI*R;
  return G(0,0,_ap(lt,0,.35),0,Ci(0,0,R,'none','stroke:rgba(20,18,18,.12);stroke-width:26')+`<circle r="${R}" style="fill:none;stroke:${o.color||K.pink};stroke-width:26;stroke-linecap:round;stroke-dasharray:${f1(C*p)} ${f1(C)};transform:rotate(-90deg)"/>`+Tn(0,10,_fmt((o.pct||50)*q,o.dec||0)+'%',38,700)+(o.label?Tn(0,36,o.label,12,600,{fill:'#555'}):''));};
/* Barra de porcentaje · o:{pct,label,w} */
NX.pctBar=(o={},lt)=>{const w=o.w||360,q=EZ.out(sg(lt,.2,1.2)),p=(o.pct||50)/100*q;return Rc(-w/2,-16,w,32,'rgba(20,18,18,.1)',16)+Rc(-w/2,-16,w*p,32,o.color||'url(#gRP)',16)+Tn(-w/2+w*p+(p>.85?-10:10),6,_fmt((o.pct||50)*q,o.dec||0)+'%',16,800,{a:p>.85?'end':'start',fill:p>.85?'#fff':K.ink})+(o.label?Tn(-w/2,-28,o.label,14,700,{a:'start'}):'');};
/* Indicador semicircular · o:{val,min,max,label,zones:true} */
NX.gauge=(o={},lt)=>{const mn=o.min||0,mx=o.max||100,q=EZ.el(sg(lt,.2,1.6)),v=mn+((o.val??70)-mn)*q,a=-90+180*(v-mn)/(mx-mn),R=100;let s='';
  const cs=['#3f9b4f','#f6a81a','#f76e19','#f34841'];for(let i=0;i<4;i++){const a0=(180+i*45)*Math.PI/180,a1=(180+(i+1)*45)*Math.PI/180;s+=P(`M${f1(Math.cos(a0)*R)} ${f1(Math.sin(a0)*R)} A${R} ${R} 0 0 1 ${f1(Math.cos(a1)*R)} ${f1(Math.sin(a1)*R)}`,ST(cs[i],24,'stroke-linecap:butt'));}
  s+=G(0,0,1,a,P('M0 10 L-6 0 L0 -86 L6 0Z',`fill:${K.ink}`))+Ci(0,0,12,K.ink)+Tn(0,46,_fmt(v,o.dec||0)+(o.unit||''),30,700)+(o.label?Tn(0,68,o.label,12,600,{fill:'#555'}):'');return G(0,0,_ap(lt,0,.35),0,s);};
/* Matriz de iconos (1 de cada N) · o:{n,total,cols,label} */
NX.iconArray=(o={},lt)=>{const tot=o.total||10,n=o.n||1,cols=o.cols||Math.min(10,tot),sz=o.sz||30;let s='';
  for(let i=0;i<tot;i++){const x=(i%cols-(cols-1)/2)*sz*1.25,y=Math.floor(i/cols)*sz*1.6,p=_ap(lt,i*.03,.25),on=i<n&&lt>.5+tot*.03+i*.08;const c=on?'url(#gRP)':'#9b9b9b';
    s+=G(x,y,p*sz/30,0,Ci(0,-22,8,c)+P('M-11 0 Q-11 -14 0 -14 Q11 -14 11 0Z','fill:'+c));}
  if(o.label)s+=G(0,-sz*1.4,1,0,Ts(0,0,o.label,26),_ao(lt,.2,.3));return s;};
/* Flecha de tendencia · o:{dir:'up'|'down',value,label} */
NX.trend=(o={},lt)=>{const up=(o.dir||'up')==='up',p=EZ.back(sg(lt,0,.5)),c=up?'url(#gGR)':'url(#gRP)';
  return G(0,0,1,0,G(0,(1-p)*(up?60:-60),p,up?0:180,P('M0 -80 L60 -10 L24 -10 L24 70 L-24 70 L-24 -10 L-60 -10Z','fill:'+c))+G(0,0,1,0,Tn(90,10,(up?'+':'−')+(o.value||''),40,700,{a:'start'})+(o.label?Tn(90,34,o.label,13,600,{a:'start',fill:'#555'}):''),_ao(lt,.35,.3)));};

/* ---------------- C · MAPAS ---------------- */
let WORLD=null;const WALIAS={'eeuu':'Estados Unidos','ee. uu.':'Estados Unidos','usa':'Estados Unidos','corea del sur':'República de Corea','corea del norte':'República Popular Democrática de Corea','siria':'República Árabe Siria','laos':'República Democrática Popular de Lao','rd congo':'Congo (República Democrática del)','irak':'Iraq','vaticano':'Santa Sede','holanda':'Países Bajos','chequia':'República Checa','birmania':'Myanmar'};
function wFind(n){if(!WORLD)WORLD=window.WORLDJ;const k=(WALIAS[n.toLowerCase()]||n).toLowerCase();return WORLD.c.find(c=>c.n.toLowerCase()===k||(c.en||'').toLowerCase()===k);}
function wProj(lon,lat){if(!WORLD)WORLD=window.WORLDJ;const l=lon*Math.PI/180,p=lat*Math.PI/180,p2=p*p,p4=p2*p2;const x=l*(.8707-.131979*p2+p4*(-.013791+p4*(.003971*p2-.001529*p4))),y=p*(1.007226+p2*(.015085+p4*(-.044475+.028874*p2-.005916*p4)));return [WORLD.t[0]+WORLD.k*x,WORLD.t[1]-WORLD.k*y];}
/* Mapa mundial · o:{over:(proj,k,lt)=>svg extra, focus:'España', highlight:['Francia',…], pins:[[lon,lat,'texto']], arcs:[[[lon,lat],[lon,lat]]], zoom:auto, w,h}
   Se dibuja en una ventana w×h centrada en (0,0); hace zoom desde el mundo entero al país enfocado. */
NX.map=(o={},lt)=>{if(!WORLD)WORLD=window.WORLDJ;const w=o.w||500,h=o.h||420;const f=o.focus?wFind(o.focus):null;
  let cx=500,cy=260,k0=w/1000*.98,k1=k0;if(f){const [x0,y0,x1,y1]=f.b;cx=(x0+x1)/2;cy=(y0+y1)/2;k1=Math.min(o.zoom||99,.55*Math.min(w/Math.max(8,x1-x0),h/Math.max(8,y1-y0)));}
  if(o.center){[cx,cy]=wProj(o.center[0],o.center[1]);k1=o.zoom||4;}
  const zq=EZ.io(sg(lt,o.zoomAt??.3,(o.zoomAt??.3)+1.1)),k=k0*Math.pow(k1/k0,zq),mx=lerp(500,cx,zq),my=lerp(260,cy,zq);
  const hl=new Set((o.highlight||[]).concat(o.focus?[o.focus]:[]).map(n=>{const c=wFind(n);return c?c.n:n;}));const hq=_ao(lt,(o.zoomAt??.3)+.9,.4);
  let m=Rc(-200,-200,1400,920,o.sea||'#bcd3f0');
  WORLD.c.forEach(c=>{const on=hl.has(c.n);m+=P(c.d,`fill:${on?mixc('#fbfbfb','#ff8fab',hq):'#fbfbfb'};stroke:${K.ink};stroke-width:${f2(1.1/k)};stroke-linejoin:round`);});
  (o.arcs||[]).forEach(([a,b],i)=>{const [x1,y1]=wProj(a[0],a[1]),[x2,y2]=wProj(b[0],b[1]),mxp=(x1+x2)/2,myp=(y1+y2)/2-Math.hypot(x2-x1,y2-y1)*.3;m+=DR(`M${f1(x1)} ${f1(y1)} Q${f1(mxp)} ${f1(myp)} ${f1(x2)} ${f1(y2)}`,ST(K.red,3/k,`stroke-dasharray:${f2(8/k)} ${f2(6/k)}`),EZ.io(sg(lt,1.4+i*.3,2.4+i*.3)));});
  if(o.over)m+=o.over(wProj,k,lt); /* capa extra en coordenadas del mapa (lagos, rutas a medida…) */
  let pins='';(o.pins||[]).forEach(([lon,lat,lab],i)=>{const [px,py]=wProj(lon,lat),sx=(px-mx)*k,sy=(py-my)*k,a=1.3+i*.25,q=sg(lt,a,a+.35);if(q<=0)return;
    pins+=G(sx,sy,1,0,_pulse(lt-a,14,K.red,2,1.3)+G(0,-(1-EZ.out(q))*60,1,0,pinS(K.red),cl(q*4)))+(lab?G(sx,sy-58,1,0,pill(lab,{sz:12,w:700}),_ao(lt,a+.3,.3)):'');});
  return clipG(G(0,0,k,0,G(-mx,-my,1,0,m))+pins,Rc(-w/2,-h/2,w,h,'#000',16))+Rc(-w/2,-h/2,w,h,'none',16,OL(2.4));};
/* Radar / onda de localización · o:{r,c} */
NX.radar=(o={},lt)=>{const r=o.r||60;let s='';for(let i=0;i<3;i++){const q=((lt*.8)+i/3)%1;s+=Ci(0,0,r*q,'none',`stroke:${o.c||K.red};stroke-width:3;opacity:${f2(1-q)}`);}return s+Ci(0,0,7,o.c||K.red);};

/* ---------------- D · CLIMA Y CATÁSTROFES ---------------- */
/* Huracán · o:{cat} */
NX.hurricane=(o={},lt)=>{const rot=-lt*120;let arms='';for(let i=0;i<3;i++)arms+=G(0,0,1,i*120,P('M0 0 C 30 -10 70 -10 95 -60 C 70 -30 40 -24 0 -8Z','fill:#ffffff;opacity:.92')+P('M0 0 C 30 -10 70 -10 95 -60',ST('#c7d3e6',3)));
  let s=Ci(0,0,120,'#5d7fb8','opacity:.35')+G(0,0,1,rot,arms+Ci(0,0,22,'#3a5a92')+Ci(0,0,10,'#bcd3f0'));
  if(o.cat)s+=G(92,-92,_ap(lt,.4,.3),0,Ci(0,0,30,'url(#gRP)',OL(3,'#fff'))+Tn(0,-4,'CAT',10,800,{fill:'#fff'})+Tn(0,16,String(o.cat),20,800,{fill:'#fff'}));
  return G(0,0,_ap(lt,0,.5),0,s);};
/* Terremoto: sismógrafo + escala · o:{mag} */
NX.quake=(o={},lt)=>{const mag=o.mag||6.5,w=380;let d='M'+(-w/2)+' 0';const N=120;for(let i=0;i<=N;i++){const x=-w/2+i*w/N,e=Math.exp(-Math.pow((i-N*.55)/(N*.12),2)),a=(4+e*mag*11)*Math.sin(i*1.9+lt*20)*(.5+hs(i)*.5);d+=` L${f1(x)} ${f1(a)}`;}
  const p=EZ.io(sg(lt,0,1.4)),sh=lt>.6&&lt<1.6?Math.sin(lt*70)*4*(1-sg(lt,.6,1.6)):0;
  let s=Rc(-w/2-14,-90,w+28,180,'#fff',12,OL(2.2))+P(`M${-w/2} -60 L${w/2} -60 M${-w/2} 60 L${w/2} 60`,ST('rgba(20,18,18,.12)',1.2))+clipG(P(d,ST(K.red,2.4)),Rc(-w/2,-95,w*p,190,'#000'));
  s+=G(0,124,1,0,Tn(-60,0,'MAGNITUD',13,800,{a:'end',fill:'#555',ls:.08})+Tn(-46,12,_fmt(mag*EZ.out(sg(lt,.6,1.6)),1),46,700,{a:'start'}),_ao(lt,.6,.3));
  return G(sh,0,1,0,s);};
/* Incendio · o:{w} */
NX.fire=(o={},lt)=>{let s='';const n=o.n||5,w=o.w||220;for(let i=0;i<n;i++){const x=-w/2+i*w/(n-1),hgt=90+hs(i)*70,fl=Math.sin(lt*9+i*1.7)*10,sw=Math.sin(lt*6+i)*8;
    const fl1=`M${x-34} 0 Q${x-40} ${-hgt*.5} ${x+sw} ${-hgt-fl} Q${x+40} ${-hgt*.5} ${x+34} 0Z`,fl2=`M${x-20} 0 Q${x-22} ${-hgt*.35} ${x+sw*.6} ${-hgt*.65-fl*.6} Q${x+22} ${-hgt*.35} ${x+20} 0Z`;
    s+=P(fl1,'fill:url(#gSUN)')+P(fl2,'fill:#ffd86b');}
  for(let i=0;i<6;i++){const q=((lt*.6)+i/6)%1;s+=Ci(-w/2+hs(i+3)*w,-120-q*140,10+q*22,'#5b5b5b',`opacity:${f2(.45*(1-q))}`);}
  for(let i=0;i<8;i++){const q=((lt*1.2)+i/8)%1;s+=Ci(-w/2+hs(i+9)*w+Math.sin(lt*4+i)*10,-40-q*170,2.4,'#ffb21f',`opacity:${f2(1-q)}`);}
  return G(0,0,_ap(lt,0,.4),0,s+Rc(-w/2-50,0,w+100,10,K.ink,5));};
/* Inundación (agua sube sobre casas) · o:{level 0-1} */
NX.flood=(o={},lt)=>{const lv=(o.level??.6)*EZ.io(sg(lt,.3,1.8));let s='';[-120,0,120].forEach((x,i)=>{s+=Rc(x-40,-80,80,80,['#f4eee2','#ffd0b8','#e3e8f5'][i],2,OL(2))+P(`M${x-50} -80 L${x} -122 L${x+50} -80Z`,`fill:${['#c2410c','#9a4a2f','#2a37d7'][i]};${OL(2)}`)+Rc(x-12,-36,24,36,'#66291f')+Rc(x+18,-66,16,16,'#bcd3f0',2,OL(1.4));});
  const wy=-lv*140;let d=`M-260 ${f1(wy)}`;for(let x=-260;x<=260;x+=20)d+=` L${x} ${f1(wy+Math.sin(x*.05+lt*3)*5)}`;d+=' L260 40 L-260 40Z';
  return G(0,0,_ap(lt,0,.4),0,s+P(d,'fill:#2a37d7;opacity:.72')+P(d.split(' L260 40')[0],ST('#a7b0ff',3)));};
/* Tormenta (nube + rayo + lluvia) · o:{} */
NX.storm=(o={},lt)=>{let s='';for(let i=0;i<16;i++){const q=((lt*1.8)+hs(i))%1;s+=P(`M${f1(-110+hs(i+4)*220)} ${f1(10+q*150)} l-6 16`,ST('#5d7fb8',3,`opacity:${f2(1-q)}`));}
  const fl=(lt%1.6)<.12;if(fl)s+=P('M10 0 L-18 60 L4 60 L-14 120 L36 44 L12 44 L30 0Z','fill:#ffd23f;stroke:#fff;stroke-width:2');
  s+=G(0,-10,1.6,0,P('M-60 10 Q-70 -14 -40 -20 Q-34 -46 -6 -40 Q12 -60 36 -40 Q66 -40 62 -10 Q74 10 50 14 L-50 14Z',`fill:${fl?'#9aa3b8':'#6b7387'}`));
  return G(0,0,_ap(lt,0,.4),0,s);};
/* Termómetro de calor · o:{temp,max} */
NX.thermo=(o={},lt)=>{const t=(o.temp??42)*EZ.out(sg(lt,.2,1.4)),mx=o.max||50,lv=t/mx;let s=G(0,0,1,0,meterS(lv,'url(#gSUN)'))+Ci(0,8,26,'url(#gSUN)',OL(2.4));
  s+=G(60,-120,1,0,Tn(0,0,_fmt(t,0)+'°',52,600,{a:'start'}),_ao(lt,.3,.3));for(let i=0;i<3;i++)s+=P(`M${-70+i*22} ${f1(-100-Math.sin(lt*4+i)*6)} q6 -10 0 -20 q-6 -10 0 -20`,ST(K.orange,3,'opacity:.6'));
  return G(0,0,_ap(lt,0,.4),0,s);};
/* Volcán en erupción · o:{} */
NX.volcano=(o={},lt)=>{let s=P('M-170 0 L-40 -130 L40 -130 L170 0Z','fill:url(#gMUD)')+P('M-40 -130 L-20 -100 L0 -125 L20 -98 L40 -130Z','fill:#f34841');
  for(let i=0;i<10;i++){const q=((lt*.9)+i/10)%1,a=(-90+(hs(i)-.5)*60)*Math.PI/180,v=160+hs(i+2)*80;s+=Ci(Math.cos(a)*v*q,-130+Math.sin(a)*v*q+q*q*120,6+hs(i)*5,i%2?'#f76e19':'#ffd23f',`opacity:${f2(1-q)}`);}
  for(let i=0;i<5;i++){const q=((lt*.4)+i/5)%1;s+=Ci(Math.sin(i*2+lt)*20,-150-q*180,18+q*34,'#6b6b6b',`opacity:${f2(.55*(1-q))}`);}
  return G(0,0,_ap(lt,0,.4),0,s);};

/* ---------------- E · POLÍTICA Y SOCIEDAD ---------------- */
/* Hemiciclo · o:{groups:[[escaños,color,'nombre']], total, majority} */
NX.parliament=(o={},lt)=>{const g=o.groups||[[120,K.blue,'A'],[100,K.red,'B'],[30,K.purple,'C']],tot=g.reduce((a,b)=>a+b[0],0);const rows=8,R0=70,R1=170;const seats=[];
  for(let r=0;r<rows;r++){const R=R0+(R1-R0)*r/(rows-1);const n=Math.round(tot*R/((R0+R1)/2*rows)) ;for(let i=0;i<n;i++)seats.push({a:Math.PI*(1-i/(n-1)),R});}
  seats.sort((a,b)=>b.a-a.a);while(seats.length>tot)seats.pop();while(seats.length<tot)seats.push(seats[seats.length-1]);
  let idx=0,s='';const cols=[];g.forEach(([n,c])=>{for(let i=0;i<n;i++)cols.push(c);});
  seats.forEach((st,i)=>{const p=_ap(lt,.1+i/tot*1.2,.2);if(p<=0)return;s+=Ci(Math.cos(st.a)*st.R,-Math.sin(st.a)*st.R,5.6*p,cols[i]||'#999');});
  if(o.majority)s+=G(0,0,1,0,P(`M0 ${-R0+10} L0 ${-R1-18}`,ST(K.ink,2,'stroke-dasharray:4 4'))+G(0,-R1-34,1,0,pill(o.majority+' · mayoría',{sz:11,w:700})),_ao(lt,1.4,.3));
  g.forEach(([n,c,lab],i)=>{s+=G(-150+i*(300/Math.max(1,g.length-1||1)),36,1,0,Ci(-28,0,7,c)+Tn(-16,5,lab+' '+n,13,700,{a:'start'}),_ao(lt,1.3+i*.1,.3));});return s;};
/* Resultado de votación · o:{yes,no,abst,title} */
NX.vote=(o={},lt)=>{const y=o.yes||0,n=o.no||0,ab=o.abst||0,tot=y+n+ab,w=300,q=EZ.out(sg(lt,.3,1.4));
  let s=Rc(-190,-110,380,220,K.ink,16)+Rc(-180,-100,360,200,'#1d1b1b',12)+Tn(0,-66,(o.title||'VOTACIÓN').toUpperCase(),16,800,{fill:'#fff',ls:.08});
  [['SÍ',y,K.blue],['NO',n,K.pink],['ABST.',ab,'#9b9b9b']].forEach(([l,v,c],i)=>{const yy=-28+i*42;s+=Tn(-160,yy+6,l,14,800,{a:'start',fill:'#fff'})+Rc(-100,yy-10,w*.75,20,'#333',4)+Rc(-100,yy-10,w*.75*v/Math.max(1,tot)*q,20,c,4)+Tn(150,yy+6,String(Math.round(v*q)),14,800,{a:'end',fill:'#fff'});});
  if(o.result)s+=stampA(80,96,lt-1.6,o.result,{c:o.result.startsWith('APROB')?K.green:K.red,sz:20});
  return G(0,0,_ap(lt,0,.4),0,s);};
/* Urna con papeleta · o:{} */
NX.ballot=(o={},lt)=>{const q=sg(lt,.4,1.1),py=lerp(-150,-30,EZ.in2(q));let s='';if(q<1)s+=G(0,py,1,(1-q)*-20,Rc(-34,-46,68,92,'#fff',4,OL(2))+P('M-20 -20 l10 12 l24 -26',ST(K.pink,4)));
  s+=Rc(-90,-40,180,130,'rgba(200,225,255,.55)',10,OL(3))+Rc(-50,-46,100,10,K.ink,5)+Rc(-90,30,180,60,'url(#gWA)',0,'opacity:.9')+Tn(0,68,'VOTO',18,800,{fill:'#fff',ls:.12});return G(0,0,_ap(lt,0,.4),0,s);};
/* Atril de rueda de prensa con micrófonos · o:{label} */
NX.podium=(o={},lt)=>{let s='';for(let i=0;i<4;i++){const x=-36+i*24;s+=P(`M${x} -60 L${x*.5} -12`,ST('#333',3))+Rc(x-7,-78,14,22,['#f34841','#2a37d7','#3f9b4f','#f6a81a'][i],6);}
  s+=P('M-80 -10 L80 -10 L64 130 L-64 130Z','fill:url(#gWA)')+Rc(-90,-16,180,14,'#1b2596',4)+Ci(0,50,24,'#fff','opacity:.9')+Ci(0,50,14,'none',OL(2.4,K.blue));
  if(o.label)s+=G(0,150,1,0,pill(o.label,{sz:12,w:700}),_ao(lt,.3,.3));return G(0,0,_ap(lt,0,.4),0,s);};
/* Edificio institucional con columnas y bandera · o:{flag:[colores],label} */
NX.building=(o={},lt)=>{let s=P('M-170 -120 L0 -190 L170 -120Z','fill:#f4eee2;'+OL(2.2))+Rc(-180,-120,360,18,'#e6dccb',2,OL(2));
  for(let i=0;i<6;i++){const x=-150+i*60;s+=Rc(x-12,-100,24,150,'#fbf7ef',2,OL(1.6))+P(`M${x-6} -96 L${x-6} 46 M${x+6} -96 L${x+6} 46`,ST('rgba(20,18,18,.15)',1.4));}
  s+=Rc(-190,50,380,16,'#e6dccb',2,OL(2))+Rc(-200,66,400,14,'#d8ccb8',2,OL(2));
  const fc=o.flag||[K.red,K.yellow,K.red];s+=P('M0 -190 L0 -260',ST(K.ink,3));fc.forEach((c,i)=>{let d=`M0 ${-258+i*12}`;for(let x=0;x<=60;x+=6)d+=` L${x} ${f1(-258+i*12+Math.sin(x*.12-lt*5)*3)}`;for(let x=60;x>=0;x-=6)d+=` L${x} ${f1(-246+i*12+Math.sin(x*.12-lt*5)*3)}`;s+=P(d+'Z','fill:'+c);});
  if(o.label)s+=G(0,104,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.3,.3));return G(0,0,_ap(lt,0,.45),0,s);};
/* Multitud / manifestación · o:{n,signs:['texto',…],colors} */
NX.crowd=(o={},lt)=>{const n=o.n||26,w=o.w||520,cols=o.colors||['#2a37d7','#e73568','#8005f0','#f6a81a','#f34841','#2b7a3e'];let s='';
  (o.signs||[]).forEach((t,i)=>{const x=-w/2+(i+1)*w/((o.signs.length)+1),bob=Math.sin(lt*5+i)*6;s+=G(x,-118+bob,_ap(lt,.3+i*.15,.3),Math.sin(lt*3+i)*4,P('M0 30 L0 70',ST('#7a5a3c',5))+Rc(-62,-22,124,52,'#fff',4,OL(2.2))+Tn(0,10,t.toUpperCase(),Math.min(16,140/Math.max(4,t.length)*1.6),800));});
  for(let r=0;r<2;r++)for(let i=0;i<n/2;i++){const x=-w/2+(i+.5)*w/(n/2)+(r?w/n:0),hh=70+hs(i*3+r)*30,bob=Math.abs(Math.sin(lt*6+i*1.3+r))*6,c=cols[(i+r*3)%cols.length];
    s+=G(x,r*28-bob,1,0,Rc(-18,-hh,36,hh+40,c,18)+Ci(-6,-hh+20,2.6,K.ink)+Ci(6,-hh+20,2.6,K.ink)+(i%3===0?Ci(20,-hh+30-Math.abs(Math.sin(lt*6+i))*14,7,'#f7961b'):''));}
  return G(0,0,_ap(lt,0,.4),0,s);};
/* Apretón de manos / ACUERDO · o:{label} */
NX.deal=(o={},lt)=>{const p=EZ.out(sg(lt,0,.6)),shake=lt>.6&&lt<1.4?Math.sin(lt*30)*6:0;
  const hand=(c)=>Rc(-120,-22,90,44,c,22)+Rc(-40,-26,56,52,'#f7961b',24)+P('M-4 -26 q14 -4 20 10',ST('#d9790c',4));
  let s=G(-140*(1-p),shake,1,0,hand('url(#gWA)'))+G(140*(1-p),shake,-1,0,hand('url(#gRP)'));
  if(lt>.6)s+=sparkA(-30,-60,lt-.6,12,K.yellow,.8)+sparkA(36,-54,lt-.7,9,K.pink,.8);
  if(o.label)s+=G(0,80,1,0,pill(o.label,{sz:14,w:800}),_ao(lt,.7,.3));return s;};
/* Bandera genérica ondeando · o:{colors:[…], dir:'h'|'v', w,h} */
NX.flag=(o={},lt)=>{const cs=o.colors||[K.red,K.yellow,K.red],v=o.dir==='v',w=o.w||180,h=o.h||120,n=cs.length;let s=P(`M${-w/2-6} ${-h/2-10} L${-w/2-6} ${h/2+110}`,ST(K.ink,6));
  const N=18;for(let i=0;i<n;i++){let d='';for(let k=0;k<=N;k++){const x=-w/2+k*w/N,ya=v?-h/2:-h/2+i*h/n;d+=(k?' L':'M')+f1(v?x:x)+' '+f1((v?-h/2:ya)+Math.sin(k*.6-lt*5)*6*k/N);}
    if(v){d='';for(let k=0;k<=N;k++){const x=-w/2+k*w/N;if(x<-w/2+i*w/n-0.1||x>-w/2+(i+1)*w/n+0.1)continue;d+=(d?' L':'M')+f1(x)+' '+f1(-h/2+Math.sin(k*.6-lt*5)*6*k/N);}const xs=d.match(/M([-\d.]+)/)[1];d+=` L${f1(-w/2+(i+1)*w/n)} ${f1(h/2+Math.sin(((i+1)*N/n)*.6-lt*5)*6*(i+1)/n)} L${xs} ${f1(h/2+Math.sin((i*N/n)*.6-lt*5)*6*i/n)}Z`;}
    else{for(let k=N;k>=0;k--){const x=-w/2+k*w/N;d+=` L${f1(x)} ${f1(-h/2+(i+1)*h/n+Math.sin(k*.6-lt*5)*6*k/N)}`;}d+='Z';}
    s+=P(d,'fill:'+cs[i]);}
  return G(0,0,_ap(lt,0,.4),0,s);};

/* ---------------- F · ECONOMÍA ---------------- */
/* Monedas que suben/bajan · o:{dir,label} */
NX.coins=(o={},lt)=>{const up=(o.dir||'up')==='up';let s='';for(let c=0;c<4;c++){const hgt=up?(c+1)*3:(4-c)*3;for(let i=0;i<hgt;i++){const p=_ap(lt,c*.15+i*.04,.2);if(p<=0)continue;s+=G(-120+c*80,-i*12,p,0,El(0,0,30,9,'#f6a81a',OL(1.6))+El(0,-3,30,9,'#ffd23f',OL(1.6))+Tn(0,1,'€',9,800,{fill:'#c47d0e'}));}}
  s+=G(150,-120,1,0,NX.trend({dir:up?'up':'down'},Math.max(0,lt-.8)),cl((lt-.8)*4));if(o.label)s+=G(0,40,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.5,.3));return s;};
/* Etiqueta de precio antes/después · o:{old,new,unit} */
NX.price=(o={},lt)=>{const tag=(v,c)=>P('M-80 -36 L60 -36 L92 0 L60 36 L-80 36Z','fill:'+c)+Ci(64,0,6,'#fff')+Tn(-10,10,v,28,800,{fill:'#fff'});
  let s=G(-110,-50,_ap(lt,0,.35),-6,tag((o.old||'1,20')+(o.unit||'€'),'#9b9b9b'));if(lt>.5)s+=DR('M-200 -50 L-20 -50',ST(K.red,5),EZ.out(sg(lt,.5,.8)));
  s+=G(80,60,_ap(lt,.9,.4),4,tag((o.new||'1,80')+(o.unit||'€'),'url(#gRP)'));return s;};
/* Tablero bursátil · o:{items:[[nombre,valor,'+1,2%'|'-0,8%']]} */
NX.market=(o={},lt)=>{const it=o.items||[['IBEX 35','11.240','+1,2%'],['EUR/USD','1,09','-0,3%'],['Petróleo','82 $','+2,1%']];let s=Rc(-200,-24,400,it.length*46+30,K.ink,14);
  it.forEach(([n,v,c],i)=>{const y=i*46+12,up=c.trim().startsWith('+'),p=_ao(lt,.2+i*.15,.3);s+=G(0,0,1,0,Tn(-180,y+5,n,15,700,{a:'start',fill:'#fff'})+Tn(60,y+5,v,15,600,{a:'end',fill:'#fff'})+Rc(80,y-12,100,26,up?'#2b7a3e':'#c41f4e',6)+Tn(130,y+6,(up?'▲ ':'▼ ')+c.replace(/^[+-]/,''),13,800,{fill:'#fff'}),p);});return G(0,0,_ap(lt,0,.4),0,s);};

/* ---------------- G · CIENCIA, ESPACIO, SALUD, TECNOLOGÍA ---------------- */
/* Lanzamiento de cohete · o:{label} */
NX.rocket=(o={},lt)=>{const q=EZ.in(sg(lt,.6,2.6)),y=-q*520,sh=lt>.2&&lt<1.2?Math.sin(lt*80)*2:0;let s='';
  for(let i=0;i<10;i++){const k=((lt*1.4)+i/10)%1;s+=Ci(sh+(hs(i)-.5)*60*k,y+60+k*80,14+k*30,'#e9e9e9',`opacity:${f2((1-k)*.8)}`);}
  const fl=30+Math.sin(lt*40)*6;s+=G(sh,y,1,0,P(`M-14 50 Q0 ${50+fl+20} 14 50Z`,'fill:url(#gSUN)')+P(`M-8 50 Q0 ${50+fl} 8 50Z`,'fill:#ffd86b')+P('M-22 50 L-22 -40 Q-22 -90 0 -110 Q22 -90 22 -40 L22 50Z','fill:#fff;'+OL(2.4))+P('M-22 20 L-44 56 L-22 46Z M22 20 L44 56 L22 46Z','fill:'+K.red+';'+OL(2))+Ci(0,-40,10,'#bcd3f0',OL(2.4))+Rc(-22,10,44,8,K.red));
  s+=Rc(-120,50,240,12,'#9b9b9b',3)+P('M-60 50 L-60 -60 M-60 -30 L-24 -30',ST('#666',5));if(o.label)s+=G(0,100,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.3,.3));return s;};
/* Planeta con satélite en órbita · o:{color} */
NX.orbit=(o={},lt)=>{const a=lt*1.4,sx=Math.cos(a)*150,sy=Math.sin(a)*46,front=Math.sin(a)>0;const sat=G(sx,sy,1,a*20,Rc(-8,-6,16,12,'#ddd',2,OL(1.6))+Rc(-30,-4,18,8,'#2a37d7',1,OL(1.2))+Rc(12,-4,18,8,'#2a37d7',1,OL(1.2)));
  let s=El(0,0,150,46,'none',`stroke:${K.ink};stroke-width:1.6;stroke-dasharray:5 6;opacity:.5`);if(!front)s+=sat;s+=Ci(0,0,80,o.color||'url(#gWA)')+P('M-60 -40 q40 20 30 50 q-10 30 30 40',ST('#3f9b4f',14,'opacity:.8'))+Ci(-26,-30,22,'#fff','opacity:.15');if(front)s+=sat;
  for(let i=0;i<12;i++)s+=Ci(-230+hs(i)*460,-180+hs(i+5)*360,1.6,'#fff',`opacity:${_blink(lt+i*.3,.6)?1:.3}`);return G(0,0,_ap(lt,0,.4),0,s);};
/* Virus / microscopio de partículas · o:{n} */
NX.virus=(o={},lt)=>{let s='';const body=(r)=>{let sp='';for(let i=0;i<10;i++){const a=i*36*Math.PI/180;sp+=P(`M${f1(Math.cos(a)*r)} ${f1(Math.sin(a)*r)} L${f1(Math.cos(a)*r*1.35)} ${f1(Math.sin(a)*r*1.35)}`,ST('#c41f4e',4))+Ci(Math.cos(a)*r*1.4,Math.sin(a)*r*1.4,5,'#ff5a7a');}return sp+Ci(0,0,r,'url(#gRP)')+Ci(-r*.3,-r*.2,r*.18,'#fff','opacity:.35')+Ci(r*.2,r*.3,r*.12,'#c41f4e','opacity:.6');};
  s+=G(0,0,_ap(lt,0,.4),lt*20,body(60));for(let i=0;i<(o.n||5);i++){const x=-190+hs(i)*380,y=-150+hs(i+7)*300;if(Math.hypot(x,y)<120)continue;s+=G(x+Math.sin(lt+i)*8,y+Math.cos(lt*1.2+i)*8,_ap(lt,.2+i*.1,.3)*.35,lt*30+i*40,body(60),.8);}return s;};
/* Cruz médica / ambulancia (luz) · o:{label} */
NX.medical=(o={},lt)=>{const pl=1+.06*Math.sin(lt*8);return G(0,0,_ap(lt,0,.4)*pl,0,Ci(0,0,90,'#fff',OL(3))+Rc(-22,-62,44,124,K.red,6)+Rc(-62,-22,124,44,K.red,6))+(o.label?G(0,120,1,0,pill(o.label,{sz:13,w:700}),_ao(lt,.3,.3)):'');};
/* Chip / IA con circuitos · o:{label} */
NX.chip=(o={},lt)=>{let s='';const p=EZ.io(sg(lt,.2,1.4));for(let i=0;i<8;i++){const a=i*45,len=110+hs(i)*50;s+=G(0,0,1,a,DR(`M70 0 L${f1(len*.6+70)} 0 L${f1(len*.6+90)} 20 L${f1(len+70)} 20`,ST('url(#gRP)',3),p)+(p>.95?Ci(len+70,20,5,K.pink):''));}
  s+=Rc(-70,-70,140,140,K.ink,16)+Rc(-54,-54,108,108,'#2b2b2b',10)+Tn(0,14,o.text||'IA',40,800,{fill:'#fff'});for(let i=0;i<5;i++)s+=Rc(-50+i*22,-82,8,12,'#9b9b9b',2)+Rc(-50+i*22,70,8,12,'#9b9b9b',2)+Rc(-82,-50+i*22,12,8,'#9b9b9b',2)+Rc(70,-50+i*22,12,8,'#9b9b9b',2);
  return G(0,0,_ap(lt,0,.4),0,s);};

/* ---------------- H · TRANSPORTE Y ALERTAS ---------------- */
/* Vehículo cruzando la pantalla · o:{type:'plane'|'ship'|'train'|'car', dir:1|-1, dur} */
NX.vehicle=(o={},lt)=>{const t=o.type||'plane',dir=o.dir||1,q=sg(lt,0,o.dur||3),x=dir*lerp(-360,360,q);let v='';
  if(t==='plane')v=P('M-70 0 Q-60 -14 50 -12 Q80 -10 86 0 Q80 8 50 10 L-60 8Z','fill:#fff;'+OL(2.4))+P('M-10 -4 L-40 -50 L-22 -50 L24 -6Z M-10 6 L-30 40 L-16 40 L16 8Z M-60 -6 L-74 -34 L-62 -34 L-44 -8Z','fill:'+K.blue+';'+OL(2))+Rc(10,-9,40,6,'#bcd3f0',3);
  if(t==='ship')v=P('M-110 0 L110 0 L84 40 L-90 40Z','fill:'+K.red+';'+OL(2.4))+Rc(-70,-34,120,34,'#fff',4,OL(2))+Rc(-30,-64,40,30,'#fff',4,OL(2))+Rc(20,-78,16,44,K.ink,2)+[...Array(5)].map((_,i)=>Ci(-54+i*22,-18,5,'#bcd3f0',OL(1.4))).join('');
  if(t==='train')v=[0,1,2].map(i=>Rc(-150+i*104,-50,96,60,i?'#fff':K.red,i?8:16,OL(2.4))+Rc(-136+i*104,-38,30,20,'#bcd3f0',3,OL(1.4))+Rc(-96+i*104,-38,30,20,'#bcd3f0',3,OL(1.4))+Ci(-128+i*104,14,10,K.ink)+Ci(-72+i*104,14,10,K.ink)).join('');
  if(t==='car')v=P('M-80 0 L-70 -30 Q-60 -44 -30 -46 L30 -46 Q56 -44 66 -26 L84 -20 Q92 -16 90 0Z','fill:url(#gRP);'+OL(2.4))+Rc(-50,-40,36,20,'#bcd3f0',4,OL(1.4))+Rc(-6,-40,40,20,'#bcd3f0',4,OL(1.4))+Ci(-48,4,14,K.ink)+Ci(52,4,14,K.ink)+Ci(-48,4,6,'#ccc')+Ci(52,4,6,'#ccc');
  const bob=t==='ship'?Math.sin(lt*2)*4:t==='plane'?Math.sin(lt*1.5)*6:0;let tr='';if(t==='plane')for(let i=0;i<4;i++)tr+=P(`M${f1(-90-i*40)} ${f1(-4+i*0)} l-30 0`,ST('#fff',4,`opacity:${f2(.7-i*.15)}`));
  return G(x,bob,1,0,G(0,0,dir,0,tr+v));};
/* Luz de sirena girando · o:{color} */
NX.siren=(o={},lt)=>{const c=o.color||K.red,a=lt*5;let s='';for(let i=0;i<2;i++){const an=a+i*Math.PI,x=Math.cos(an)*300;s+=P(`M0 -30 L${f1(x)} ${f1(-160)} L${f1(x+(Math.sin(an))*90)} ${f1(-60)}Z`,`fill:${c};opacity:${f2(.18+.18*Math.max(0,Math.sin(an)))}`);}
  return s+Rc(-60,0,120,26,'#444',6)+P('M-44 0 Q-44 -56 0 -56 Q44 -56 44 0Z',`fill:${c};opacity:${_blink(lt,2.5)?1:.65}`)+P('M-26 -10 Q-26 -40 0 -44',ST('#fff',5,'opacity:.6'));};
/* Triángulo de alerta · o:{label} */
NX.alert=(o={},lt)=>{const pl=1+.05*Math.sin(lt*10);return G(0,0,_ap(lt,0,.35)*pl,0,P('M0 -90 L84 60 L-84 60Z','fill:'+K.yellow+';stroke:'+K.ink+';stroke-width:7;stroke-linejoin:round')+Rc(-7,-44,14,62,K.ink,7)+Ci(0,38,8,K.ink))+(o.label?G(0,100,1,0,pill(o.label,{sz:14,w:800,fill:K.red}),_ao(lt,.3,.3)):'');};
/* Flechas de desplazamiento (migración, evacuación) · o:{n} */
NX.arrows=(o={},lt)=>{let s='';const n=o.n||5;for(let i=0;i<n;i++){const y=-100+i*50,q=((lt*.7)+i*.17)%1;s+=G(lerp(-240,240,q),y,1,0,P('M-40 -10 L10 -10 L10 -24 L40 0 L10 24 L10 10 L-40 10Z','fill:url(#gRP)'),Math.sin(Math.PI*q));}return s;};

/* Catálogo para el vídeo-muestrario: [nombre visible, función, opciones de ejemplo, escala] */
const NX_CATALOG=[
 ['breaking · Franja de última hora',(lt)=>NX.breaking({text:'ÚLTIMA HORA',sub:'Terremoto en Japón'},lt),'full'],
 ['live · En directo',(lt)=>NX.live({},lt)],
 ['source · Fuente',(lt)=>NX.source({src:'Euronews'},lt)],
 ['lowerThird · Rótulo nombre/cargo',(lt)=>NX.lowerThird({title:'Ministra de Sanidad',sub:'Rueda de prensa · Madrid'},lt),'left'],
 ['keyPoints · Puntos clave',(lt)=>NX.keyPoints({title:'Lo que sabemos',items:['Magnitud 7,1','Alerta de tsunami','Sin víctimas confirmadas']},lt)],
 ['quote · Cita',(lt)=>NX.quote({text:'Es el mayor avance científico de la década',who:'Agencia Espacial'},lt)],
 ['newspaper · Portada',(lt)=>NX.newspaper({paper:'El Diario',headline:'Histórico acuerdo climático'},lt)],
 ['phone · Notificación',(lt)=>NX.phone({app:'Alerta',title:'Aviso por lluvias',body:'Nivel rojo en la costa'},lt)],
 ['post · Publicación',(lt)=>NX.post({user:'@agencia_espacial',text:'Lanzamiento completado con éxito. Próxima parada: la Luna 🚀',likes:48200},lt)],
 ['versus · A contra B',(lt)=>NX.versus({a:'2025',b:'2026'},lt)],
 ['stamp · Sellos',(lt)=>NX.stamp({type:'confirmado'},lt)+G(0,90,1,0,NX.stamp({type:'desarrollo',r:4},Math.max(0,lt-.4)))],
 ['timeline · Línea temporal',(lt)=>NX.timeline({items:[['08:12','Primer aviso'],['09:30','Evacuación'],['11:05','Llega la ayuda'],['14:00','Balance']]},lt)],
 ['calendar · Calendario',(lt)=>NX.calendar({from:10,to:14,month:'OCT'},lt)],
 ['clock · Reloj',(lt)=>NX.clock({h:9,m:30,spin:.6},lt)],
 ['countdown · Cuenta atrás',(lt)=>NX.countdown({from:3},lt*1.8)],
 ['counter · Contador',(lt)=>NX.counter({value:125000,label:'personas evacuadas'},lt)],
 ['bars · Barras',(lt)=>NX.bars({items:[['España',48],['Francia',36],['Italia',29],['Portugal',17]],unit:' %'},lt)],
 ['columns · Columnas',(lt)=>NX.columns({items:[['2022',3.1],['2023',4.6],['2024',2.8],['2025',5.4]],unit:'%',dec:1},lt)],
 ['line · Gráfico de línea',(lt)=>NX.line({pts:[12,14,13,18,22,21,27,31],labels:['E','F','M','A','M','J','J','A'],unit:'°'},lt)],
 ['donut · Porcentaje',(lt)=>NX.donut({pct:68,label:'participación'},lt)],
 ['pctBar · Barra de %',(lt)=>NX.pctBar({pct:82,label:'Votos escrutados'},lt)],
 ['gauge · Indicador',(lt)=>NX.gauge({val:78,label:'riesgo de incendio',unit:'%'},lt)],
 ['iconArray · 1 de cada N',(lt)=>NX.iconArray({n:3,total:10,label:'3 de cada 10'},lt)],
 ['trend · Tendencia',(lt)=>NX.trend({dir:'up',value:'12%',label:'precio de la luz'},lt)],
 ['map · Mapa con zoom',(lt)=>NX.map({focus:'Japón',pins:[[142.4,38.3,'Epicentro']]},lt)],
 ['map · Rutas',(lt)=>NX.map({center:[-20,30],zoom:2.2,arcs:[[[-3.7,40.4],[-74,40.7]],[[-3.7,40.4],[-58.4,-34.6]]],pins:[[-3.7,40.4,'Madrid'],[-74,40.7,'Nueva York']],highlight:['España','Estados Unidos','Argentina']},lt)],
 ['radar · Localización',(lt)=>NX.radar({r:90},lt)],
 ['hurricane · Huracán',(lt)=>NX.hurricane({cat:4},lt)],
 ['quake · Terremoto',(lt)=>NX.quake({mag:7.1},lt)],
 ['fire · Incendio',(lt)=>NX.fire({},lt)],
 ['flood · Inundación',(lt)=>NX.flood({level:.55},lt)],
 ['storm · Tormenta',(lt)=>NX.storm({},lt)],
 ['thermo · Ola de calor',(lt)=>NX.thermo({temp:44},lt)],
 ['volcano · Volcán',(lt)=>NX.volcano({},lt)],
 ['parliament · Hemiciclo',(lt)=>NX.parliament({groups:[[137,K.blue,'Azul'],[121,K.red,'Rojo'],[33,K.green,'Verde'],[59,K.purple,'Morado']],majority:176},lt)],
 ['vote · Votación',(lt)=>NX.vote({yes:178,no:165,abst:7,title:'Votación',result:'APROBADA'},lt)],
 ['ballot · Urna',(lt)=>NX.ballot({},lt)],
 ['podium · Rueda de prensa',(lt)=>NX.podium({label:'Comparecencia'},lt)],
 ['building · Institución',(lt)=>NX.building({label:'Parlamento'},lt)],
 ['crowd · Manifestación',(lt)=>NX.crowd({signs:['Vivienda digna','No al cierre']},lt)],
 ['deal · Acuerdo',(lt)=>NX.deal({label:'ACUERDO'},lt)],
 ['flag · Bandera',(lt)=>NX.flag({colors:['#2a37d7','#ffffff','#f34841'],dir:'v'},lt)],
 ['coins · Economía',(lt)=>NX.coins({dir:'up',label:'Sube el IPC'},lt)],
 ['price · Precio',(lt)=>NX.price({old:'1,20',new:'1,85',unit:' €'},lt)],
 ['market · Bolsa',(lt)=>NX.market({},lt)],
 ['rocket · Lanzamiento',(lt)=>NX.rocket({label:'Despegue'},lt)],
 ['orbit · Órbita',(lt)=>NX.orbit({},lt)],
 ['virus · Virus',(lt)=>NX.virus({},lt)],
 ['medical · Sanidad',(lt)=>NX.medical({label:'Hospital'},lt)],
 ['chip · Tecnología / IA',(lt)=>NX.chip({},lt)],
 ['vehicle · Avión',(lt)=>NX.vehicle({type:'plane'},lt)],
 ['vehicle · Barco / tren / coche',(lt)=>G(0,-120,.8,0,NX.vehicle({type:'ship',dur:4},lt))+G(0,40,.7,0,NX.vehicle({type:'train',dir:-1,dur:3.5},lt))+G(0,170,.8,0,NX.vehicle({type:'car',dur:2.6},lt))],
 ['siren · Sirena',(lt)=>NX.siren({},lt)],
 ['alert · Alerta',(lt)=>NX.alert({label:'AVISO ROJO'},lt)],
 ['arrows · Desplazamientos',(lt)=>NX.arrows({},lt)],
 ['sturgeon · Esturión',(lt)=>NX.sturgeon({},lt)],
 ['shark · Tiburón de Groenlandia',(lt)=>NX.shark({},lt)],
 ['rings · Anillos (aleta)',(lt)=>NX.rings({crowd:lt>1.6?sg(lt,1.6,2.4):0},lt)],
 ['rings · Anillos (árbol)',(lt)=>NX.rings({tree:true},lt)],
 ['tag · Chip de marcaje',(lt)=>NX.tag({},lt)],
 ['growth · Curva medida + estimada',(lt)=>NX.growth({label:'medido',target:'~435 años',xl:'edad',yl:'tamaño'},lt)],
 ['medal · Récord',(lt)=>NX.medal({sub:'agua dulce'},lt)],
 ['sauropod · Dinosaurio (paisaje)',(lt)=>G(-30,80,1,0,sauropodS({T:lt}))],
 ['boat · Barca de investigación',(lt)=>boatS({T:lt})]
];

/* ---------------- G · NATURALEZA Y CIENCIA (añadidos 14/10/2026) ---------------- */
/* Esturión nadando · o:{amp,hl} */
NX.sturgeon=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,sturgeon({T:lt,amp:o.amp??5,hl:o.hl||0}));
/* Tiburón de Groenlandia · o:{} */
NX.shark=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,sharkG({T:lt}));
/* Anillos de crecimiento (aleta o tronco) · o:{n,crowd,tree} */
NX.rings=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,o.tree?stumpS({n:o.n||9,p:sg(lt,.3,1.6)}):finRingsS({n:o.n||14,p:sg(lt,.3,1.8),crowd:o.crowd||0}));
/* Chip de marcaje con número · o:{} */
NX.tag=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,tagChipS(lt));
/* Curva de crecimiento: tramo medido (sólido) + extrapolación (discontinua) hasta un objetivo · o:{w,h,cut (0-1),label,target,xl,yl} */
NX.growth=(o={},lt)=>{const w=o.w||380,h=o.h||240,cut=o.cut??.35,f=u=>1-Math.pow(1-u,2.2);let s='';
  s+=DR(`M${-w/2} ${h/2} L${w/2} ${h/2}`,ST(K.ink,2.6),_ao(lt,0,.4))+DR(`M${-w/2} ${h/2} L${-w/2} ${-h/2}`,ST(K.ink,2.6),_ao(lt,0,.4));
  const pt=u=>[-w/2+u*w,h/2-f(u)*h*.9];let d1='',d2='';
  for(let i=0;i<=30;i++){const u=i/30*cut,[x,y]=pt(u);d1+=(i?' L':'M')+f1(x)+' '+f1(y);}
  for(let i=0;i<=40;i++){const u=cut+i/40*(1-cut),[x,y]=pt(u);d2+=(i?' L':'M')+f1(x)+' '+f1(y);}
  s+=DR(d1,ST('url(#gRP)',5),EZ.io(sg(lt,.3,1.1)));
  const q2=EZ.io(sg(lt,1.2,2.4));if(q2>0)s+=clipG(P(d2,ST(K.ink,3,'stroke-dasharray:8 8')),Rc(pt(cut)[0]-4,-h,(w*(1-cut)+10)*q2,h*2,'#000'));
  for(let i=0;i<6;i++){const u=cut*(i+.5)/6,[x,y]=pt(u);s+=G(x,y+(hs(i)-.5)*12,_ap(lt,.4+i*.08,.25),0,Ci(0,0,5,'#fff',OL(2)));}
  const [tx,ty]=pt(1);if(lt>2.3)s+=G(tx,ty,_ap(lt,2.3,.3),0,Ci(0,0,10,'url(#gRP)',OL(2.4,'#fff'))+_pulse(lt-2.3,16,K.pink,2,1.2));
  if(o.target&&lt>2.4)s+=G(tx-20,ty-34,1,0,pill(o.target,{sz:13,w:700,fill:'url(#gRP)'}),_ao(lt,2.45,.3));
  if(o.label)s+=G(pt(cut*.5)[0]+30,pt(cut*.5)[1]-44,1,0,pill(o.label,{sz:12,w:600}),_ao(lt,.9,.3));
  if(o.xl)s+=G(w/2-4,h/2+22,1,0,Tn(0,0,o.xl,12,700,{a:'end',fill:'#555'}),_ao(lt,.3,.3));
  if(o.yl)s+=G(-w/2-8,-h/2-10,1,0,Tn(0,0,o.yl,12,700,{a:'start',fill:'#555'}),_ao(lt,.3,.3));
  return s;};
/* Medalla de récord · o:{txt,sub} */
NX.medal=(o={},lt)=>G(0,0,_ap(lt,0,.45),0,medalS(o,lt));

/* ---------------- H · DINOSAURIOS (añadidos 15/10/2026) ---------------- */
/* Tiranosaurio · o:{lips 0..1, open 0..1, walk 0..1, hlArm, feathers} */
NX.trex=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,trexS(Object.assign({T:lt},o)));
/* Cocodrilo (dientes al aire) · o:{open} */
NX.croc=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,crocS(Object.assign({T:lt},o)));
/* Diente con esmalte (sano o dañado) · o:{wear} */
NX.tooth=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,toothS({wear:o.wear||0,shine:.6+.4*Math.sin(lt*3)}));
/* Piel con escamas · o:{} */
NX.scales=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,scalesS(o));
NX_CATALOG.push(
 ['trex · Tiranosaurio (con labios)',(lt)=>G(-20,140,.75,0,NX.trex({lips:1,walk:.6},lt))],
 ['trex · Tiranosaurio «de película»',(lt)=>G(-20,140,.75,0,NX.trex({lips:0,open:.4+.4*Math.sin(lt*3)},lt))],
 ['croc · Cocodrilo',(lt)=>NX.croc({open:sg(lt,.6,1.2)*.6},lt)],
 ['tooth · Diente (esmalte)',(lt)=>G(-80,0,1,0,NX.tooth({},lt))+G(80,0,1,0,NX.tooth({wear:1},lt))],
 ['scales · Piel con escamas',(lt)=>NX.scales({},lt)]);
/* Dragón de Komodo · o:{walk} */
NX.komodo=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,komodoS(Object.assign({T:lt},o)));
/* Fotograma de cine con un T. rex «de película» · o:{} */
NX.cine=(o={},lt)=>G(0,0,_ap(lt,0,.4),0,cineS(G(-20,110,.55,0,trexS({T:lt,lips:0,open:.5+.4*Math.sin(lt*4)}))));
NX_CATALOG.push(
 ['komodo · Dragón de Komodo',(lt)=>NX.komodo({walk:1},lt)],
 ['cine · Fotograma de película',(lt)=>NX.cine({},lt)]);
