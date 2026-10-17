/* =====================================================================
   TÉCNICAS · recursos copiados de los vídeos de referencia (17/10/2026)
   Misma convención NX.nombre(o, lt). Se registran en el catálogo con tcat().
   ===================================================================== */
const T_START=NX_CATALOG.length;const _TC=[];const tcat=(n,f,m)=>_TC.push([n,f,m]);
const _dash=(c='#141212',w=2.2)=>ST(c,w,'stroke-dasharray:8 7');
/* cota (línea de medida con flechas y etiqueta) */
function dimS(x1,y1,x2,y2,lab,p=1,c='#141212'){if(p<=0)return '';const ang=Math.atan2(y2-y1,x2-x1),nx=-Math.sin(ang)*8,ny=Math.cos(ang)*8;let s=DR(`M${f1(x1)} ${f1(y1)} L${f1(x2)} ${f1(y2)}`,ST(c,1.8),p);
  s+=P(`M${f1(x1+nx)} ${f1(y1+ny)} L${f1(x1-nx)} ${f1(y1-ny)} M${f1(x2+nx)} ${f1(y2+ny)} L${f1(x2-nx)} ${f1(y2-ny)}`,ST(c,1.8,`opacity:${f2(cl(p*3))}`));
  if(lab&&p>.9)s+=G((x1+x2)/2-ny*2.4,(y1+y2)/2+nx*2.4,1,0,pill(lab,{sz:11,w:700}));return s;}
/* fondo de rayas radiales grises (muy usado en la referencia) */
function stripesBg(cx=270,cy=480,rot=0,n=26,c1='#d9d9d9',c2='#bdbdbd'){let s=Rc(-60,-60,W+120,H+120,c2);const R=1500;for(let i=0;i<n;i++){const a0=(rot+i*360/n)*Math.PI/180,a1=(rot+(i+.5)*360/n)*Math.PI/180;s+=P(`M${cx} ${cy} L${f1(cx+R*Math.cos(a0))} ${f1(cy+R*Math.sin(a0))} L${f1(cx+R*Math.cos(a1))} ${f1(cy+R*Math.sin(a1))}Z`,`fill:${c1}`);}return s;}
/* fondo de cuadrícula (papel milimetrado / plano) */
function gridBg(c='#f4f4f4',l='rgba(20,18,18,.08)',step=24){let s=Rc(-60,-60,W+120,H+120,c);for(let x=0;x<=W;x+=step)s+=P(`M${x} 0 L${x} ${H}`,ST(l,1));for(let y=0;y<=H;y+=step)s+=P(`M0 ${y} L${W} ${y}`,ST(l,1));return s;}
/* ===== Fondos de línea (arquitectura dibujada a trazo sobre gris) ===== */
/* roomS(tipo,o) · tipo: library|palace|office|classroom|street · se dibuja en coordenadas de pantalla con suelo en o.gy (735) */
function roomS(type='palace',o={}){const gy=o.gy??735,ln=ST('#141212',2.2);let s='';
  if(type==='library'){for(let r=0;r<4;r++){s+=P(`M-10 ${gy-110-r*130} L550 ${gy-110-r*130}`,ln);for(let i=0;i<22;i++){const x=6+i*25+hs(i+r*30)*6,h=70+hs(i*3+r)*44,w=12+hs(i+r)*10;s+=Rc(x,gy-110-r*130-h,w,h,'none',1,ln+(hs(i*7+r)<.12?';fill:#2a37d7':''));}}}
  if(type==='palace'){for(let i=0;i<4;i++){const x=40+i*130;s+=P(`M${x} ${gy-60} L${x} ${gy-330} Q${x+40} ${gy-400} ${x+80} ${gy-330} L${x+80} ${gy-60}Z M${x+40} ${gy-372} L${x+40} ${gy-60} M${x} ${gy-200} L${x+80} ${gy-200}`,ln);}
    s+=P(`M200 0 L200 60 M340 0 L340 60`,ln)+G(270,70,1,0,P('M-50 0 Q0 30 50 0 M-30 0 L-30 -12 M0 6 L0 -12 M30 0 L30 -12',ST('#f6a81a',3))+Ci(-30,-16,4,'#f6c443')+Ci(0,-16,4,'#f6c443')+Ci(30,-16,4,'#f6c443'));}
  if(type==='office'){s+=Rc(-10,gy-150,560,150,'#f4efe4',0,ln)+P(`M-10 ${gy-150} L550 ${gy-150}`,ST('#141212',3));for(let i=0;i<3;i++)s+=Rc(30+i*175,gy-430,130,220,'none',4,ln)+P(`M${95+i*175} ${gy-430} L${95+i*175} ${gy-210} M${30+i*175} ${gy-320} L${160+i*175} ${gy-320}`,ln);}
  if(type==='classroom'){s+=Rc(60,gy-420,420,230,'#2a2f45',8,OL(3))+Rc(40,gy-190,460,10,'#9a6a3a',3,OL(2));for(let i=0;i<3;i++)s+=P(`M${120+i*150} ${gy-60} L${120+i*150} ${gy} M${80+i*150} ${gy-60} L${160+i*150} ${gy-60}`,ln);}
  if(type==='street'){for(let i=0;i<4;i++){const x=-10+i*140,h=260+hs(i)*140;s+=Rc(x,gy-h,130,h,'none',0,ln);for(let r=0;r<Math.floor(h/80);r++)for(let k=0;k<2;k++)s+=Rc(x+18+k*56,gy-h+20+r*80,38,48,'none',2,ln);}}
  s+=P(`M-10 ${gy} L550 ${gy}`,ST('#141212',2.6));
  if(o.floor!==false)for(let i=-6;i<=6;i++)s+=P(`M${270+i*40} ${gy} L${270+i*140} ${gy+260}`,ST('rgba(20,18,18,.25)',1.4));
  return s;}
NX.room=(o={},lt)=>G(-270,-480,1,0,roomS(o.type||'palace',o),_ao(lt,0,.4));
tcat('room · Fondos de línea (biblioteca, palacio, oficina…)',lt=>{const ty=['library','palace','office','classroom','street'][Math.floor(lt/2)%5];return G(0,-40,1,0,NX.room({type:ty},1));},'');
/* Personaje del reparto con aparición y nombre · o: opciones de figure() o {preset} */
NX.cast=(o={},lt)=>{const base=o.preset?Object.assign({},CAST_PRESETS[o.preset],o):o;const p=EZ.back(sg(lt,0,.4));return G(0,0,p,0,figure(Object.assign({},base,{T:lt,s:base.s||1.4})));};
tcat('cast · Personajes a medida (figure)',lt=>{const ks=Object.keys(CAST_PRESETS),k=ks[Math.floor(lt/1.2)%ks.length];return G(0,180,1,0,NX.cast({preset:k},lt%1.2+.4));});
NX.cat=(o={},lt)=>G(0,0,EZ.back(sg(lt,0,.4)),0,catS(Object.assign({T:lt,s:1.6},o)));
tcat('cat · Gato',lt=>G(0,160,1,0,NX.cat({emo:lt%4>2?'dead':'happy'},lt)));
/* Pirámide social / jerarquía con gente en pisos · o:{tiers:[n,…], top:svg} */
NX.pyramid=(o={},lt)=>{const tiers=o.tiers||[1,3,5,7],H=90;let s='';const n=tiers.length;
  tiers.forEach((k,i)=>{const w=120+i*110,y=-((n-i)*H),p=_ao(lt,.1+i*.15,.3);s+=G(0,0,1,0,P(`M${-w/2} ${y+H} L${-w/2+14} ${y} L${w/2-14} ${y} L${w/2} ${y+H}`,ST('#141212',2.4))+P(`M${-w/2-10} ${y+H} L${w/2+10} ${y+H}`,ST('#141212',2.4)),p);
    for(let j=0;j<k;j++){const x=(j-(k-1)/2)*Math.min(70,(w-40)/Math.max(1,k)),q=_ap(lt,.3+i*.15+j*.04,.3);if(q<=0)continue;const pr=i===0&&o.top?null:{skin:['amarillo','rosa','naranja','lila','claro'][(i+j)%5],hair:['short','curly','bun','none','side'][(j+i*2)%5],c:['#2a37d7','#e73568','#f6a81a','#3f9b4f','#8005f0','#141212'][(i*3+j)%6],body:i===0?'cape':'suit',hat:i===0?'crown':(i===1&&j%2?'cardinal':undefined),emo:i===n-1?'worried':'happy'};
      s+=G(x,y+H-4,q*(.42+i*.02),0,o.top&&i===0?o.top:figure(Object.assign({T:lt,ph:i*3+j,shadow:false},pr)));}});
  return G(0,n*H/2,1,0,s);};
tcat('pyramid · Pirámide social',lt=>G(0,60,1,0,NX.pyramid({},lt)));
/* Rejilla de tarjetas que se van rellenando («había:») · o:{cards:[[texto,svg]],cols,step} */
function cardS(label,inner,o={}){const w=o.w||190,h=o.h||170;return Rc(-w/2+5,-h/2+6,w,h,'#141212',12)+Rc(-w/2,-h/2,w,h,'#fff',12,OL(2.4))+clipG(Rc(-w/2+10,-h/2+10,w-20,h-58,o.bg||'#2a37d7',6)+G(0,-18,1,0,inner||''),Rc(-w/2+10,-h/2+10,w-20,h-58,'#000',6))+Rc(-w/2+10,h/2-42,w-20,32,'#141212',5)+Tn(0,h/2-21,label,13,800,{fill:'#fff'});}
NX.cardgrid=(o={},lt)=>{const cards=o.cards||[['símbolos',G(0,0,.5,0,NX.flag({colors:[K.red,K.yellow,K.red]},9))],['pancartas',G(0,20,.7,0,NX.megaphone({},9))],['canciones',Tn(0,10,'♪ ♫',44,700,{fill:'#fff'})],['jabón',G(0,30,.6,0,NX.flask({c:'#ff9db8'},9))]],cols=o.cols||2,st=o.step||.7,cw=200,ch=180;let s='';
  const rows=Math.ceil(cards.length/cols);
  cards.forEach((c,i)=>{const x=(i%cols-(cols-1)/2)*(cw+16),y=(Math.floor(i/cols)-(rows-1)/2)*(ch+16);s+=Rc(x-cw/2,y-ch/2,cw,ch,'none',12,_dash('rgba(20,18,18,.5)',2));
    const p=sg(lt,.2+i*st,.55+i*st);if(p>0)s+=G(x+(1-EZ.out(p))*40,y-(1-EZ.out(p))*60,EZ.back(p)*.98,(1-p)*-8,cardS(c[0],c[1],{w:cw-10,h:ch-10}));});
  if(o.title)s+=G(-cw,-rows*ch/2-50,1,0,Ts(0,0,o.title,34,{a:'start'}),_ao(lt,0,.3));
  return s;};
tcat('cardgrid · Rejilla de tarjetas',lt=>NX.cardgrid({title:'había:'},lt));
/* Suma de tarjetas = resultado («si… ? + ? = cirugía») · o:{cards:[[texto,svg]],result} */
NX.cardsum=(o={},lt)=>{const cards=o.cards||[['un cirujano',G(0,10,.4,0,figure(CAST_PRESETS.cirujano))],['un bisturí',P('M-50 10 L40 -10 L50 -4 L-40 14Z','fill:#d6dbe2;'+OL(2))],['el paciente',G(0,10,.4,0,figure(CAST_PRESETS.rey))],['¡sigue vivo!',P(heartPath(0,0,30),'fill:#ff3b5b')]],n=cards.length,st=o.step||.6;let s='';
  cards.forEach((c,i)=>{const x=(i%2-.5)*200,y=Math.floor(i/2)*190-200,p=sg(lt,.2+i*st,.55+i*st);s+=Rc(x-88,y-80,176,160,'none',10,_dash('rgba(20,18,18,.45)',2))+Tn(x,y+8,'?',30,500,{fill:'rgba(20,18,18,.3)'});if(p>0)s+=G(x,y,EZ.back(p)*.9,(1-p)*10,cardS(c[0],c[1],{w:180,h:165,bg:'#fff4e6'}));
    if(i<n-1)s+=G(i%2===0?0:-100,i%2===0?y:y+95,_ap(lt,.4+i*st,.25),0,Ci(0,0,14,'url(#gRP)',OL(1.6,'#fff'))+Tn(0,6,'+',18,800,{fill:'#fff'}));});
  const rt=.4+n*st;if(lt>rt){s+=G(0,190,1,0,Rc(-24,-16,48,10,'url(#gRP)',4)+Rc(-24,0,48,10,'url(#gRP)',4),_ao(lt,rt,.3));
    const q=EZ.back(sg(lt,rt+.3,rt+.7));s+=G(0,280,q,0,Rc(-130,-44,260,88,'#fff4e6',6,'stroke:#f6a81a;stroke-width:8')+Ts(0,16,o.result||'cirugía',48,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}));}
  return G(0,-40,.9,0,s);};
tcat('cardsum · Suma de tarjetas = resultado',lt=>NX.cardsum({},lt));
/* Tarjetas que se niegan una a una sobre negro («no es… no es…») · o:{cards:[texto]} */
NX.negate=(o={},lt)=>{const cs=o.cards||['tu conciencia','energías','manifestar'],per=o.per||1.0;let s=Rc(-300,-500,600,1000,'#0d0b0c');
  const i=Math.min(cs.length-1,Math.floor(lt/per)),l=lt-i*per,inq=EZ.out(sg(l,0,.25)),xq=sg(l,.4,.65);
  if(i>0)s+=G(-260,0,.8,-8,cardS(cs[i-1],Tn(0,10,'?',60,800,{fill:'#fff'}),{w:200,h:260,bg:'#e73568'})+P('M-90 -120 L90 120 M90 -120 L-90 120',ST(K.pink,10)),.5);
  s+=G(lerp(300,0,inq),0,1,lerp(8,0,inq),cardS(cs[i],G(0,0,1,lt*20,spark4(40,K.yellow)),{w:220,h:280,bg:['#2a37d7','#8005f0','#f76e19','#e73568'][i%4]})+DR('M-95 -125 L95 125',ST(K.pink,12),xq)+DR('M95 -125 L-95 125',ST(K.pink,12),sg(l,.5,.75)));
  return s;};
tcat('negate · Esto no es… (tarjetas tachadas)',lt=>NX.negate({},lt),'');
/* Expediente / dossier con pestaña, título serif y sello · o:{title,year,sub,lines,stamp} */
NX.dossier=(o={},lt)=>{const fq=EZ.out(sg(lt,0,.4));let s='';for(let k=2;k>=0;k--)s+=G(k*7,-k*7,1,0,Rc(-170,-190,340,380,'#f4ead2',8,OL(2.2)));
  s+=P('M-170 -190 L-170 -214 Q-170 -222 -160 -222 L-60 -222 Q-50 -222 -46 -212 L-40 -190Z','fill:#f4ead2;'+OL(2.2))+Tn(-160,-200,'EXPEDIENTES',9,800,{a:'start',ls:.1});
  s+=G(0,0,1,0,Rc(-150,-170,300,340,'#fff',4,OL(1.8))+P('M-130 -186 L-130 -150 Q-130 -136 -120 -136 Q-110 -136 -110 -150 L-110 -178',ST('#9aa0a8',3)),fq);
  s+=G(-110,-120,1,0,Ts(0,0,o.title||'Melilla',40,{a:'start'}),_ao(lt,.3,.3))+G(-110,-80,1,0,Ts(0,0,o.sub||'generales',26,{a:'start'})+Ts(mw(o.sub||'generales',fSerif(26))+8,0,o.year||'2008',26,{a:'start',it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),_ao(lt,.5,.3));
  (o.lines||['dirigentes condenados','compra de votos','voto por correo']).forEach((t,i)=>{const w=mw(t,fSans(12,700))+18;s+=G(-110+w/2,-30+i*34,_ap(lt,.8+i*.3,.3),0,pill(t,{sz:12,w:700,fill:i===0?K.red:K.ink}));});
  s+=stampA(30,110,lt-(1.0+.3*(o.lines||[1,2,3]).length),o.stamp||'CONDENADOS',{r:-6,sz:24,c:K.red});
  return G(0,0,_ap(lt,0,.35),0,s);};
tcat('dossier · Expediente',lt=>NX.dossier({},lt));
/* Pizarra con marcas de recuento («pacientes ||||») · o:{label,n} */
NX.tally=(o={},lt)=>{const n=Math.floor((o.n||12)*sg(lt,.4,2.4));let s=Rc(-220,-90,440,180,'#2a2f45',8,'stroke:#7d4a2a;stroke-width:10')+Tn(-196,-56,o.label||'pacientes',18,700,{a:'start',fill:'#fff'});
  for(let i=0;i<n;i++){const g=Math.floor(i/5),k=i%5,x=-180+g*70+k*12;s+=k<4?P(`M${x} -20 L${x+2} 50`,ST('#fff',4)):P(`M${x-50} 40 L${x+4} -14`,ST('#fff',4));}
  s+=Rc(120,74,40,8,'#fff',2);return G(0,0,_ap(lt,0,.35),0,s);};
tcat('tally · Pizarra de recuento',lt=>NX.tally({},lt));
/* Plano técnico (fondo azul con cuadrícula y dibujos a línea blanca) · o:{items:['bisturi','tijeras','compas','engranaje','llave'],title} */
const BPRINT={bisturi:'M-70 0 L40 -6 Q70 -10 80 6 Q60 6 40 6 L-70 6Z',tijeras:'M-60 -20 L40 10 M-60 20 L40 -10 M-70 -24 a12 12 0 1 0 1 0 M-70 24 a12 12 0 1 0 1 0',compas:'M0 -60 L-30 50 M0 -60 L30 50 M-6 -66 a8 8 0 1 0 12 0',engranaje:'M0 -46 L10 -36 L30 -40 L32 -20 L46 -10 L36 6 L44 26 L24 32 L18 50 L0 40 L-18 50 L-24 32 L-44 26 L-36 6 L-46 -10 L-32 -20 L-30 -40 L-10 -36Z M0 -16 a16 16 0 1 0 1 0',llave:'M-70 -8 L40 -8 L40 8 L-70 8Z M40 -22 a22 22 0 1 0 1 0'};
NX.blueprint=(o={},lt)=>{const w=o.w||460,h=o.h||560;let s=Rc(-w/2,-h/2,w,h,'#1b2596',6);for(let x=-w/2;x<=w/2;x+=20)s+=P(`M${x} ${-h/2} L${x} ${h/2}`,ST('rgba(255,255,255,.12)',1));for(let y=-h/2;y<=h/2;y+=20)s+=P(`M${-w/2} ${y} L${w/2} ${y}`,ST('rgba(255,255,255,.12)',1));
  (o.items||['bisturi','tijeras','compas']).forEach((k,i)=>{const y=-h/2+110+i*150,x=i%2?40:-20,p=sg(lt,.3+i*.5,1.2+i*.5);s+=G(x,y,1.3,0,DR(BPRINT[k]||BPRINT.llave,ST('#fff',2.2),p))+dimS(x-100,y+50,x+110,y+50,['12 cm','8 cm','15 cm','6 cm','10 cm'][i%5],sg(lt,.8+i*.5,1.3+i*.5),'#fff');});
  if(o.title)s+=G(-w/2+20,-h/2+34,1,0,Tn(0,0,o.title,15,700,{a:'start',fill:'#fff'})+P('M0 8 L160 8',ST('#fff',1.4)),_ao(lt,0,.3));
  s+=Rc(w/2-150,h/2-56,136,44,'none',2,ST('#fff',1.6))+Tn(w/2-82,h/2-30,o.stamp||'PROTOTIPO',11,700,{fill:'#fff'});
  return G(0,0,_ao(lt,0,.3),0,s);};
tcat('blueprint · Plano técnico',lt=>NX.blueprint({title:'instrumental'},lt));
/* Telón que se abre con cartel (gran revelación) · o:{title,it,sub} */
NX.curtain=(o={},lt)=>{const op=EZ.io(sg(lt,.3,1.3));let s=Rc(-230,-300,460,560,'#2a37d7',4)+P('M-60 -300 L-160 260 L160 260 L60 -300Z','fill:rgba(255,255,255,.12)');
  s+=G(0,-20,_ap(lt,1.0,.45),0,Rc(-130,-170,260,330,'#fff8ea',4,'stroke:#c9a24a;stroke-width:10')+Ci(0,-80,52,'#2a37d7',OL(2))+G(0,-60,.4,0,figure(CAST_PRESETS.rey))+Ts(0,50,o.title||'La',34)+Ts(0,96,o.it||'Gran Operación',38,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'})+Tn(0,140,o.sub||'Versalles · 1686',12,600,{fill:'#777'}));
  for(const d of[-1,1]){const x=d*lerp(0,200,op);let fold='';for(let i=0;i<6;i++)fold+=P(`M${d*(i*22)} -300 Q${d*(i*22+10)} 0 ${d*(i*22)} 260`,ST('rgba(0,0,0,.18)',3));s+=G(x,0,1,0,P(`M0 -300 L${d*240} -300 L${d*240} 260 L0 260 Q${d*20} 0 0 -300Z`,'fill:#e2264a')+fold);}
  s+=Rc(-240,-320,480,40,'#c9a24a',6,OL(2))+Rc(-250,260,500,30,'#7d4a2a',3,OL(2));
  for(let i=0;i<14;i++)s+=Ci(-230+i*35,320,22,'#0d0b0c');
  return clipG(s,Rc(-250,-330,500,700,'#000'));};
tcat('curtain · Telón que se abre',lt=>NX.curtain({},lt));
/* Año gigante con rayas radiales y subrayado · o:{value} */
NX.bigyear=(o={},lt)=>{const v=String(o.value||1686),q=sg(lt,.1,.8);let txt=v;if(q<1)txt=v.replace(/[0-9]/g,(d,i)=>String((+d+Math.floor(lt*30)+i*3)%10));
  let s='';for(let i=0;i<20;i++){const a=i/20*Math.PI*2,r1=150+_osc(lt,.6,6,i),r2=r1+40;s+=P(`M${f1(Math.cos(a)*r1)} ${f1(Math.sin(a)*r1*.8)} L${f1(Math.cos(a)*r2)} ${f1(Math.sin(a)*r2*.8)}`,ST('#141212',2.4,`opacity:${f2(_ao(lt,.4,.4))}`));}
  s+=blurG(Tn(0,30,txt,104,600,{ls:-.02}),0,q<1?6*(1-q):0)+DR('M-110 66 Q0 56 110 66',ST('#e2264a',5),sg(lt,.8,1.2));
  s+=G(0,-90,_ap(lt,.9,.3),0,P(starPath(0,0,12,5,4),'fill:#f6a81a'));
  return s;};
tcat('bigyear · Año gigante',lt=>NX.bigyear({},lt));
/* Columna/pedestal que crece hasta el cielo (comparar prestigio, precios…) · o:{items:[[etiqueta,altura,color]],sky} */
NX.pillar=(o={},lt)=>{const it=o.items||[['médicos',420,'url(#gOR)'],['cirujanos',90,'url(#gOR)']],mx=Math.max(...it.map(x=>x[1]));let s='';
  const top=EZ.io(sg(lt,.4,1.8))*mx;if(o.sky!==false&&top>260)s+=G(0,0,1,0,Rc(-250,-520,500,300,'#2a37d7')+[[-150,-470],[60,-420],[170,-490],[-60,-380]].map(([x,y])=>G(x,y,.9,0,cloudS(90))).join(''),sg(top,260,380));
  it.forEach(([lab,h,c],i)=>{const x=(i-(it.length-1)/2)*170,hh=Math.min(h,top);s+=Rc(x-46,-hh,92,hh,c,0,OL(2.2))+Rc(x-56,-hh-14,112,16,'#f6a81a',3,OL(2))+[...Array(Math.floor(hh/30))].map((_,k)=>P(`M${x+30} ${-k*30-15} l14 0`,ST('rgba(20,18,18,.35)',2))).join('')+G(x,-hh-40,1,0,pill(lab,{sz:12,w:700}))+G(x,-hh-14,.42,0,figure(i?CAST_PRESETS.cirujano:CAST_PRESETS.cientifico));});
  return G(0,240,1,0,s+Rc(-250,0,500,14,'#141212'));};
tcat('pillar · Columna que crece',lt=>NX.pillar({},lt));
/* Golpe de efecto sobre negro: «Y no.» (pantalla completa) · o:{a,b} */
NX.punch=(o={},lt)=>{const p=EZ.back(sg(lt,0,.25)),a=o.a||'Y',b=o.b||'no.',sz=110,wa=mw(a,fSerif(sz)),wb=mw(b,fSerif(sz,true)),gap=26,x0=-(wa+gap+wb)/2;let s=Rc(-20,-20,W+40,H+40,'#0d0b0c');
  s+=G(270,480,lerp(1.3,1,p),0,Ts(x0,30,a,sz,{a:'start',fill:'#fff',stroke:'#fff'})+Ts(x0+wa+gap,30,b,sz,{a:'start',it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),cl(p*3));
  return s;};
tcat('punch · «Y no.» sobre negro',lt=>NX.punch({},lt),'full');
/* Foco sobre negro con personaje · o:{who (preset), text} */
NX.spot=(o={},lt)=>{const r=EZ.out(sg(lt,0,.5))*230;let s=Rc(-300,-500,600,1000,'#0d0b0c')+El(0,60,r,r*1.05,'#f4ead2')+P(`M-40 -500 L${-r*.9} 60 L${r*.9} 60 L40 -500Z`,`fill:rgba(244,234,210,${f2(.12*sg(lt,0,.5))})`);
  s+=G(0,200,_ap(lt,.3,.35),0,figure(Object.assign({T:lt,s:1.6},CAST_PRESETS[o.who||'ladron'])));
  if(o.text)s+=G(0,-300,1,0,Ts(0,0,o.text,42,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),_ao(lt,.5,.3));
  return s;};
tcat('spot · Foco sobre negro',lt=>NX.spot({text:'¡Perfecto!'},lt),'');
/* Bocadillo de diálogo con texto serif que se escribe · o:{text,tail:'left'|'right',w} */
NX.bubble=(o={},lt)=>{const txt=o.text||'«Rojo muerto, abono para mi huerto»',w=o.w||300;const n=Math.floor(txt.length*sg(lt,.2,.2+txt.length*.04));const lines=[];let cur='';txt.slice(0,n).split(' ').forEach(wd=>{if(mw(cur+' '+wd,fSerif(26))>w-40&&cur){lines.push(cur);cur=wd;}else cur=cur?cur+' '+wd:wd;});if(cur)lines.push(cur);
  const h=Math.max(70,40+lines.length*30),tl=o.tail==='right';let s=Rc(-w/2+5,-h/2+6,w,h,'#141212',22)+Rc(-w/2,-h/2,w,h,'#fff8ea',22,OL(2.2))+P(tl?`M${w/2-70} ${h/2-2} L${w/2-30} ${h/2+44} L${w/2-40} ${h/2-2}Z`:`M${-w/2+40} ${h/2-2} L${-w/2+30} ${h/2+44} L${-w/2+70} ${h/2-2}Z`,'fill:#fff8ea;'+OL(2.2))+Rc(tl?w/2-72:-w/2+38,h/2-6,34,8,'#fff8ea');
  lines.forEach((l,i)=>s+=Ts(-w/2+22,-h/2+38+i*30,l,26,{a:'start',it:i===lines.length-1&&n<txt.length?false:false}));
  return G(0,0,_ap(lt,0,.3),0,s);};
tcat('bubble · Bocadillo que se escribe',lt=>NX.bubble({},lt));
/* Muchos bocadillos «…» con palabras (debate, discusión) · o:{words} */
NX.chatter=(o={},lt)=>{const ws=o.words||['unidad','nombres','puestos','candidaturas'];let s='';
  for(let i=0;i<10;i++){const x=-200+hs(i)*400,y=-200+hs(i+5)*300,p=_ap(lt,.1+i*.12,.25),word=i%3===1?ws[Math.floor(i/3)%ws.length]:null;if(p<=0)continue;const w=word?mw(word,fSerif(26,true))+30:62;
    s+=G(x,y+_osc(lt,.6,4,i),p,0,Rc(-w/2,-22,w,44,'#fff8ea',16,OL(2))+P('M-8 20 L-14 36 L4 20Z','fill:#fff8ea;'+OL(2))+(word?Ts(0,9,word,26,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}):[0,1,2].map(k=>Ci(-14+k*14,0,4,'#141212')).join('')));}
  return s;};
tcat('chatter · Mil conversaciones',lt=>NX.chatter({},lt));
/* Cita en tarjeta con palabras tachadas (desmentir una versión) · o:{text,strike:[índices de palabras]} */
NX.strikequote=(o={},lt)=>{const ws=(o.text||'“unos chavales a provocar”').split(' '),st=new Set(o.strike||[0,1,2]);let s=Rc(-196,-56,400,120,'#141212',8)+Rc(-200,-60,400,120,'#f4ead2',8,OL(2.2));let x=-170;
  const n=Math.floor(ws.length*sg(lt,.1,.9));ws.slice(0,n).forEach((w,i)=>{const ww=mw(w,fSerif(32));s+=Ts(x,12,w,32,{a:'start'});if(st.has(i))s+=DR(`M${x-2} 2 L${x+ww+2} 2`,ST('#e2264a',4),sg(lt,1.2+i*.12,1.4+i*.12));x+=ww+mw(' ',fSerif(32));});
  return G(0,0,_ap(lt,0,.3),0,G(0,0,1,-2,s));};
tcat('strikequote · Cita tachada',lt=>NX.strikequote({},lt));
/* Dos piezas de puzle que intentan encajar · o:{a,b,ca,cb,join} */
function puzzleS(c,lab,flip){const d='M-70 -50 L-10 -50 Q-14 -72 4 -72 Q22 -72 18 -50 L70 -50 L70 -10 Q92 -14 92 4 Q92 22 70 18 L70 50 L-70 50 L-70 18 Q-48 22 -48 4 Q-48 -14 -70 -10Z';return G(0,0,flip?-1:1,0,P(d,`fill:${c};${OL(2.4)}`))+Tn(0,6,lab,14,800,{fill:'#fff'});}
NX.puzzle=(o={},lt)=>{const j=o.join?EZ.io(sg(lt,.5,1.5)):Math.max(0,Math.sin(Math.PI*sg(lt,.5,1.8)))*.6,gap=lerp(180,72,j);const sh=!o.join&&lt>1.2&&lt<1.8?_osc(lt,6,4):0;
  let s=G(-gap+sh,0,1,0,puzzleS(o.ca||'#8005f0',o.a||'PARTIDO A'))+G(gap-sh,0,1,0,puzzleS(o.cb||'#f34841',o.b||'PARTIDO B',true));
  if(!o.join&&lt>1.6)s+=G(0,-90,_ap(lt,1.6,.3),0,P('M-14 -14 L14 14 M14 -14 L-14 14',ST(K.red,6)));
  return G(0,0,_ap(lt,0,.4),0,s);};
tcat('puzzle · Piezas que no encajan',lt=>NX.puzzle({},lt));
/* Reloj de arena · o:{p (0-1 tiempo agotado)} */
NX.hourglass=(o={},lt)=>{const p=o.p??sg(lt,.2,3.2);let s=Rc(-110,-200,220,22,'#7d4a2a',6,OL(2.2))+Rc(-110,178,220,22,'#7d4a2a',6,OL(2.2))+Rc(-96,-178,14,356,'#7d4a2a',4,OL(1.6))+Rc(82,-178,14,356,'#7d4a2a',4,OL(1.6));
  const glass='M-74 -178 L74 -178 Q74 -60 10 0 Q74 60 74 178 L-74 178 Q-74 60 -10 0 Q-74 -60 -74 -178Z';
  s+=clipG(Rc(-80,-178+p*170,160,178-p*170,'#f6a81a')+Rc(-80,178-p*150,160,p*150,'#f6a81a')+(p<1?Rc(-3,0,6,178-p*150,'#f6a81a'):''),P(glass,'fill:#000'))+P(glass,'fill:rgba(220,240,255,.25);'+OL(2.6));
  return G(0,0,_ap(lt,0,.4),0,s);};
tcat('hourglass · Reloj de arena',lt=>NX.hourglass({},lt));
/* Ovillo enredado (lío, complicación) · o:{} */
NX.tangle=(o={},lt)=>{let s='';for(let k=0;k<3;k++){let d='';for(let i=0;i<=80;i++){const a=i/80*Math.PI*6+k*2,r=60+40*Math.sin(i*.37+k)+10*Math.sin(lt*2+i*.2);d+=(i?' L':'M')+f1(Math.cos(a)*r*1.2)+' '+f1(Math.sin(a)*r*.9);}s+=DR(d,ST(['#e2264a','#8005f0','#c41f3e'][k],9),sg(lt,k*.2,1.4+k*.2));}
  return G(0,0,1,lt*8,s);};
tcat('tangle · Lío / ovillo',lt=>NX.tangle({},lt));
/* Nube de pensamiento con contenido · o:{inner, who} */
NX.thought=(o={},lt)=>{let s='';const p=EZ.back(sg(lt,.3,.8));s+=G(-120,170,1,0,figure(Object.assign({T:lt,s:1.1},CAST_PRESETS[o.who||'cientifico'])));
  [[-80,-50,8],[-60,-80,12]].forEach(([x,y,r],i)=>s+=Ci(x,y,r*_ap(lt,.1+i*.1,.2),'#fff',OL(2)));
  const cl='M-120 0 Q-150 -40 -110 -70 Q-110 -120 -50 -116 Q-20 -160 40 -130 Q100 -150 120 -100 Q170 -80 140 -30 Q160 20 100 30 Q60 60 0 40 Q-60 60 -90 30 Q-140 30 -120 0Z';
  s+=G(60,-180,p,0,P(cl,'fill:#fff;'+OL(2.4))+G(0,-50,1,0,o.inner||G(0,40,.5,0,catS({T:lt}))));
  return s;};
tcat('thought · Nube de pensamiento',lt=>NX.thought({},lt));
/* Manos gigantes que bajan (calma, «tranquilos») · o:{c} */
NX.hands=(o={},lt)=>{const q=EZ.out(sg(lt,0,.6)),c=o.c||'#b526ad';let s='';
  for(const d of[-1,1])s+=G(d*110,lerp(-500,-60,q)+_osc(lt,.8,8),d,_osc(lt,.6,5),Rc(-40,-200,80,160,c,30)+[0,1,2,3].map(i=>Rc(-38+i*20,-60,18,70,c,9)).join('')+Rc(30,-110,60,22,c,11)+P('M-30 -40 L30 -40',ST('rgba(0,0,0,.15)',3)));
  return s;};
tcat('hands · Manos gigantes',lt=>NX.hands({},lt));
/* Equipo/banda de personajes en fila (la «banda», el equipo) · o:{n,presets} */
NX.lineup=(o={},lt)=>{const ps=o.presets||['ladron','cientifico','obrero','doctora','policia'];let s='';ps.forEach((k,i)=>{const x=(i-(ps.length-1)/2)*90,p=_ap(lt,i*.12,.35);if(p>0)s+=G(x,0,p,0,figure(Object.assign({T:lt,ph:i,s:.85,acc:['sunglasses']},CAST_PRESETS[k],{name:undefined})));});
  return G(0,120,1,0,s+P('M-240 0 L240 0',ST('#141212',2.4)));};
tcat('lineup · El equipo en fila',lt=>NX.lineup({},lt));

/* registrar */
NX_CATALOG.push(..._TC);
