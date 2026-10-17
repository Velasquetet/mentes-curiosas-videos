/* =====================================================================
   CAST · Personajes hechos a medida para cada tema (estilo de los vídeos de
   referencia de @puesyaestaria.tv, 17/10/2026): cabeza redonda de color plano,
   ojos de punto, cuerpo en bloque redondeado del color de la ropa, piernas
   cortas, manos flotantes, sin contorno. Cada historia tiene su reparto
   (reyes, cirujanos, científicos, ladrones…) y un nombre en pastilla encima.
   figure(o) → SVG con los pies en (0,0); altura ≈ 190 px a escala 1.
   ===================================================================== */
const SKINC={amarillo:'#ffc83d',rosa:'#ff5a7a',naranja:'#f7961b',lila:'#8a4dff',azul:'#2a37d7',claro:'#ffd2b0',moreno:'#c98a5a',oscuro:'#7a4a2a'};
/* o={skin,hair,hairC,hat,hatC,body:'suit|robe|dress|coat|lab|tee|uniform|cape',c (ropa),c2 (detalle),legs,acc:[…],emo,look,T,ph,walk,arms:[izq,der] (grados),hold:{r:'svg mano dcha',l:'svg mano izq'},name,s,flip,bob}
   hair: none|short|side|curly|long|bun|wig|afro|spiky|ponytail  ·  hat: crown|cap|tophat|beret|mitre|helmet|beanie|chef|police|hardhat|party
   acc: glasses|sunglasses|mustache|beard|mask|tie|bowtie|necklace|earrings|medal|stethoscope|blush  ·  emo: happy|neutral|angry|sad|surprised|wink|worried|smug|sleep|shock */
function figure(o={}){
  const T=o.T||0,ph=o.ph||0,sk=SKINC[o.skin]||o.skin||SKINC.amarillo,c=o.c||'#2a37d7',c2=o.c2||'#ffffff',hc=o.hairC||'#141212',acc=new Set(o.acc||[]);
  const bob=(o.bob??1)*Math.abs(Math.sin(T*3.2+ph))*2.2,walk=o.walk?Math.sin(T*11+ph):0,breathe=1+.015*Math.sin(T*2.4+ph);
  const HR=34,hy=-140-bob,body=o.body||'suit';let s='';
  if(o.shadow!==false)s+=El(0,2,38,6,'rgba(20,18,18,.16)');
  // piernas
  const lc=o.legs||'#2a37d7';s+=Rc(-15+walk*3,-30,11,30,lc,5)+Rc(4-walk*3,-30,11,30,lc,5)+El(-10+walk*4,-1,10,4.5,'#141212')+El(10-walk*4,-1,10,4.5,'#141212');
  // cuerpo
  let bd='',by=-104-bob*.5;
  if(body==='robe'||body==='cape')bd=P(`M-46 ${by+76} Q-44 ${by} 0 ${by-4} Q44 ${by} 46 ${by+76}Z`,`fill:${c}`)+(body==='cape'?P(`M-30 ${by+2} L-52 ${by+80} L-26 ${by+76}Z M30 ${by+2} L52 ${by+80} L26 ${by+76}Z`,`fill:${c2}`)+Rc(-44,by-2,88,12,'#fff',6):'');
  else if(body==='dress')bd=P(`M-22 ${by} Q0 ${by-6} 22 ${by} L44 ${by+76} L-44 ${by+76}Z`,`fill:${c}`)+Rc(-22,by,44,20,c2,8);
  else if(body==='lab')bd=Rc(-34,by,68,78,'#ffffff',18)+P(`M0 ${by+4} L0 ${by+78}`,ST('#d6dbe2',2))+P(`M-12 ${by} L0 ${by+24} L12 ${by}`,`fill:${c}`);
  else if(body==='tee')bd=Rc(-32,by,64,76,c,18)+P(`M-10 ${by} Q0 ${by+10} 10 ${by}`,`fill:${sk}`);
  else bd=Rc(-34,by,68,78,c,18)+(body==='suit'||body==='coat'?P(`M-14 ${by} L0 ${by+30} L14 ${by}Z`,`fill:${c2}`)+P(`M0 ${by+30} L0 ${by+76}`,ST('rgba(0,0,0,.18)',2)):'')+(body==='uniform'?Rc(-34,by+40,68,8,c2,0)+Ci(-14,by+18,3,'#f6c443')+Ci(14,by+18,3,'#f6c443'):'');
  if(acc.has('tie'))bd+=P(`M0 ${by+6} L-6 ${by+14} L0 ${by+44} L6 ${by+14}Z`,`fill:${o.tieC||'#e2264a'}`);
  if(acc.has('bowtie'))bd+=P(`M-11 ${by+2} L0 ${by+8} L11 ${by+2} L11 ${by+14} L0 ${by+8} L-11 ${by+14}Z`,`fill:${o.tieC||'#e2264a'}`);
  if(acc.has('necklace'))bd+=P(`M-16 ${by+2} Q0 ${by+22} 16 ${by+2}`,ST('#f6c443',3));
  if(acc.has('medal'))bd+=P(`M-6 ${by} L0 ${by+20} L6 ${by}`,ST('#e2264a',3))+Ci(0,by+24,7,'#f6a81a');
  if(acc.has('stethoscope'))bd+=P(`M-14 ${by+2} Q-18 ${by+30} 0 ${by+34} Q18 ${by+30} 14 ${by+2}`,ST('#3b3f46',3))+Ci(0,by+36,5,'#9aa0a8');
  s+=G(0,0,1,0,`<g transform="translate(0 ${by+40}) scale(1 ${f3(breathe)}) translate(0 ${-(by+40)})">${bd}</g>`);
  // brazos: manos flotantes · arms=[subida izq, subida dcha] en px (positivo = arriba)
  const [al,ar]=o.arms||[Math.sin(T*2+ph)*4,Math.sin(T*2+ph+1)*4];
  const lx=-44,ly=by+46-al,rx=44,ry=by+46-ar;
  s+=Ci(lx,ly,9.5,sk)+Ci(rx,ry,9.5,sk);
  if(o.hold&&o.hold.l)s+=G(lx,ly,1,0,o.hold.l);if(o.hold&&o.hold.r)s+=G(rx,ry,1,0,o.hold.r);
  // cabeza
  let hd='';const hair=o.hair||'short';
  if(hair==='long')hd+=P(`M${-HR-6} 4 Q${-HR-8} ${-HR-14} 0 ${-HR-12} Q${HR+8} ${-HR-14} ${HR+6} 4 L${HR+4} 40 L${-HR-4} 40Z`,`fill:${hc}`);
  if(hair==='curly'||hair==='wig'){const wc=hair==='wig'?(o.hairC||'#f4efe4'):hc;for(let i=0;i<12;i++){const a=Math.PI*(.9+i/11*1.2),r=HR+6;hd+=Ci(Math.cos(a)*r,Math.sin(a)*r,13,wc);}for(let i=0;i<6;i++)hd+=Ci((i%2?1:-1)*(HR+4),6+Math.floor(i/2)*16,13,wc);}
  if(hair==='afro')hd+=Ci(0,-8,HR+16,hc);
  hd+=Ci(0,0,HR,sk);
  if(hair==='short')hd+=P(`M${-HR} -4 Q${-HR} ${-HR-4} 0 ${-HR-2} Q${HR} ${-HR-4} ${HR} -4 Q${HR*.4} ${-HR*.6} ${-HR} -4Z`,`fill:${hc}`);
  if(hair==='side')hd+=P(`M${-HR} 0 Q${-HR-2} ${-HR-6} ${HR*.2} ${-HR-4} Q${HR+2} ${-HR} ${HR} -2 Q${HR*.3} ${-HR*.7} ${-HR*.6} -10Z`,`fill:${hc}`);
  if(hair==='curly')for(let i=0;i<5;i++)hd+=Ci(-HR*.7+i*HR*.35,-HR*.8,10,hc);
  if(hair==='wig')for(let i=0;i<5;i++)hd+=Ci(-HR*.7+i*HR*.35,-HR*.85,11,o.hairC||'#f4efe4');
  if(hair==='bun')hd+=P(`M${-HR} -2 Q0 ${-HR-8} ${HR} -2 Q0 ${-HR*.5} ${-HR} -2Z`,`fill:${hc}`)+Ci(0,-HR-8,14,hc);
  if(hair==='spiky')hd+=P(`M${-HR} -6 L${-HR*.7} ${-HR-14} L${-HR*.3} ${-HR-2} L0 ${-HR-18} L${HR*.3} ${-HR-2} L${HR*.7} ${-HR-14} L${HR} -6 Q0 ${-HR*.5} ${-HR} -6Z`,`fill:${hc}`);
  if(hair==='ponytail')hd+=P(`M${-HR} -2 Q0 ${-HR-8} ${HR} -2 Q0 ${-HR*.5} ${-HR} -2Z`,`fill:${hc}`)+El(HR+8,-6,9,20,hc);
  if(hair==='long')hd+=P(`M${-HR} -2 Q0 ${-HR-8} ${HR} -2 Q${HR*.2} ${-HR*.4} ${-HR*.3} -10Z`,`fill:${hc}`);
  // cara
  const emo=o.emo||'happy',lk=(o.look||0)*5,ey=-2,blink=(((T+ph*1.3)%3.7)<.12);let fc='';
  const eye=(x)=>blink||emo==='sleep'?P(`M${x-5} ${ey} L${x+5} ${ey}`,ST('#141212',3)):emo==='happy'&&o.closed?P(`M${x-5} ${ey+2} Q${x} ${ey-5} ${x+5} ${ey+2}`,ST('#141212',3)):Ci(x+lk,ey,emo==='surprised'||emo==='shock'?5.5:4.2,'#141212');
  if(emo==='wink')fc+=Ci(-12+lk,ey,4.2,'#141212')+P(`M7 ${ey} Q12 ${ey-5} 17 ${ey}`,ST('#141212',3));else fc+=eye(-12)+eye(12);
  if(emo==='angry')fc+=P('M-20 -14 L-6 -8 M20 -14 L6 -8',ST('#141212',3.4));
  if(emo==='worried'||emo==='sad')fc+=P('M-20 -9 L-7 -14 M20 -9 L7 -14',ST('#141212',3));
  if(emo==='smug')fc+=P('M-18 -10 L-6 -10 M6 -10 L18 -10',ST('#141212',3));
  const mouths={happy:'M-9 12 Q0 21 9 12',neutral:'M-6 14 L6 14',angry:'M-9 17 Q0 10 9 17',sad:'M-8 18 Q0 11 8 18',worried:'M-8 16 Q-4 13 0 16 Q4 19 8 16',smug:'M-6 14 Q4 18 9 11',wink:'M-9 12 Q0 21 9 12',sleep:'M-4 15 L4 15'};
  if(emo==='surprised'||emo==='shock')fc+=El(0,15,emo==='shock'?7:5,emo==='shock'?9:6,'#141212');else fc+=P(mouths[emo]||mouths.happy,ST('#141212',3));
  if(acc.has('blush')||emo==='happy')fc+=El(-20,8,6,3.5,'rgba(255,90,120,.35)')+El(20,8,6,3.5,'rgba(255,90,120,.35)');
  if(acc.has('glasses'))fc+=Ci(-12,ey,9,'none',ST('#141212',2.4))+Ci(12,ey,9,'none',ST('#141212',2.4))+P(`M-3 ${ey} L3 ${ey}`,ST('#141212',2.4));
  if(acc.has('sunglasses'))fc+=Rc(-24,ey-6,20,12,'#141212',5)+Rc(4,ey-6,20,12,'#141212',5)+P(`M-4 ${ey-2} L4 ${ey-2}`,ST('#141212',3));
  if(acc.has('mask'))fc+=Rc(-HR,ey-8,HR*2,15,o.maskC||'#ff2e63',0)+eye(-12)+eye(12);
  if(acc.has('mustache'))fc+=P('M-14 9 Q-7 4 0 8 Q7 4 14 9 Q7 12 0 10 Q-7 12 -14 9Z','fill:'+(o.mustC||hc));
  if(acc.has('beard'))fc+=P(`M${-HR+4} 4 Q${-HR+6} ${HR+6} 0 ${HR+8} Q${HR-6} ${HR+6} ${HR-4} 4 Q0 26 ${-HR+4} 4Z`,'fill:'+(o.beardC||hc));
  if(acc.has('earrings'))fc+=Ci(-HR+1,12,3.5,'#f6c443')+Ci(HR-1,12,3.5,'#f6c443');
  hd+=G(o.flip?-0:0,0,1,0,fc);
  // sombreros
  const hat=o.hat,hcol=o.hatC;
  if(hat==='crown')hd+=P(`M-24 ${-HR+2} L-26 ${-HR-24} L-12 ${-HR-12} L0 ${-HR-30} L12 ${-HR-12} L26 ${-HR-24} L24 ${-HR+2}Z`,`fill:${hcol||'#f6c443'}`)+Ci(0,-HR-12,4.5,'#e2264a')+Ci(-14,-HR-8,3.5,'#2a37d7')+Ci(14,-HR-8,3.5,'#2a37d7')+Ci(0,-HR-32,5,'#2a37d7');
  if(hat==='cap')hd+=P(`M${-HR+2} ${-HR*.35} Q0 ${-HR-16} ${HR-2} ${-HR*.35}Z`,`fill:${hcol||'#2a37d7'}`)+P(`M${HR-6} ${-HR*.4} L${HR+18} ${-HR*.3}`,ST(hcol||'#2a37d7',7));
  if(hat==='tophat')hd+=Rc(-34,-HR-4,68,8,hcol||'#141212',3)+Rc(-22,-HR-44,44,44,hcol||'#141212',4)+Rc(-22,-HR-14,44,7,'#e2264a');
  if(hat==='beret')hd+=El(-4,-HR+2,HR+4,12,hcol||'#e2264a')+Ci(-4,-HR-10,3,hcol||'#e2264a');
  if(hat==='mitre'||hat==='cardinal')hd+=hat==='mitre'?P(`M-20 ${-HR+4} L0 ${-HR-40} L20 ${-HR+4}Z`,`fill:${hcol||'#fff'}`)+P(`M0 ${-HR-34} L0 ${-HR}`,ST('#f6c443',4)):El(0,-HR+4,HR-2,12,hcol||'#e2264a');
  if(hat==='helmet')hd+=P(`M${-HR-2} -6 Q0 ${-HR-22} ${HR+2} -6Z`,`fill:${hcol||'#6f7a4f'}`)+Rc(-HR-4,-8,HR*2+8,6,hcol||'#5d6842',3);
  if(hat==='beanie')hd+=P(`M${-HR-2} -14 Q0 ${-HR-30} ${HR+2} -14Z`,`fill:${hcol||'#141212'}`)+Rc(-HR-3,-22,HR*2+6,10,hcol||'#141212',5)+Ci(0,-HR-20,8,hcol||'#141212');
  if(hat==='chef')hd+=Rc(-22,-HR-8,44,14,'#fff',3)+Ci(-14,-HR-20,14,'#fff')+Ci(4,-HR-28,16,'#fff')+Ci(18,-HR-18,12,'#fff');
  if(hat==='police')hd+=P(`M${-HR} ${-HR*.4} L${-HR+6} ${-HR-14} L${HR-6} ${-HR-14} L${HR} ${-HR*.4}Z`,`fill:${hcol||'#1b2596'}`)+Rc(-HR-2,-HR*.5,HR*2+4,7,'#141212',3)+Ci(0,-HR-4,5,'#f6c443');
  if(hat==='hardhat')hd+=P(`M${-HR-4} -8 Q0 ${-HR-18} ${HR+4} -8Z`,`fill:${hcol||'#f6c443'}`)+Rc(-HR-8,-10,HR*2+16,6,hcol||'#f6c443',3);
  if(hat==='party')hd+=P(`M-14 ${-HR+4} L0 ${-HR-34} L14 ${-HR+4}Z`,`fill:${hcol||'#ff2e63'}`)+Ci(0,-HR-36,5,'#f6c443');
  s+=G(0,hy,1,o.tilt||Math.sin(T*1.6+ph)*2,hd);
  if(o.name)s+=G(0,hy-HR-(hat?54:26),1,0,pill(o.name,{sz:12,w:700,fill:'#fff',tc:'#141212',s:'stroke:#141212;stroke-width:1.6'}));
  const k=o.s??1;return G(o.x||0,o.y||0,(o.flip?-1:1)*k,0,s,o.o??1,k);
}
/* reparto de ejemplo (para el catálogo) */
const CAST_PRESETS={
  rey:{skin:'amarillo',hair:'long',body:'cape',c:'#e73568',c2:'#2a37d7',hat:'crown',name:'Rey'},
  cirujano:{skin:'rosa',hair:'wig',body:'coat',c:'#1b2596',c2:'#fff',acc:['bowtie'],name:'Cirujano'},
  cientifico:{skin:'amarillo',hair:'side',hairC:'#6b3a1a',body:'suit',c:'#2a37d7',acc:['glasses','bowtie'],name:'Científico'},
  ladron:{skin:'rosa',hair:'none',body:'tee',c:'#141212',hat:'beanie',acc:['mask'],emo:'wink'},
  doctora:{skin:'claro',hair:'ponytail',hairC:'#6b3a1a',body:'lab',c:'#3fdcae',acc:['stethoscope'],name:'Doctora'},
  policia:{skin:'moreno',hair:'short',body:'uniform',c:'#1b2596',c2:'#141212',hat:'police'},
  politica:{skin:'claro',hair:'bun',hairC:'#c98a5a',body:'suit',c:'#8005f0',acc:['earrings','necklace'],name:'Ministra'},
  obrero:{skin:'naranja',hair:'none',body:'tee',c:'#f6a81a',hat:'hardhat',acc:['mustache']},
  cardenal:{skin:'rosa',hair:'none',body:'robe',c:'#e2264a',hat:'cardinal',emo:'smug'},
  astronauta:{skin:'claro',hair:'short',body:'suit',c:'#f4f6f8',c2:'#2a37d7',legs:'#d6dbe2',hat:'helmet',hatC:'#d6dbe2'}
};
/* Gato (mascota recurrente de los vídeos de referencia) · o={x,y,s,T,c,emo:'happy|dead|sleep|angry',sit} */
function catS(o={}){const T=o.T||0,c=o.c||'#f76e19',d='#141212',tail=Math.sin(T*3)*14;let s='';
  s+=El(0,2,40,6,'rgba(20,18,18,.16)');
  s+=P(`M30 -30 Q60 ${-50+tail*.4} 54 ${-80+tail}`,ST(c,11))+[0,1,2].map(i=>P(`M${40+i*6} ${-40-i*12+tail*.3*i/2} l8 -4`,ST(d,4))).join('');
  s+=Rc(-34,-60,70,56,c,22)+[0,1,2].map(i=>P(`M${-14+i*14} -60 L${-14+i*14} -40`,ST(d,5))).join('');
  s+=Rc(-24,-12,12,14,'#2a37d7',4)+Rc(14,-12,12,14,'#2a37d7',4);
  const ex=o.emo==='dead'?P('M-22 -98 L-12 -88 M-12 -98 L-22 -88 M12 -98 L22 -88 M22 -98 L12 -88',ST(d,3)):o.emo==='sleep'?P('M-22 -92 L-12 -92 M12 -92 L22 -92',ST(d,3)):Ci(-17,-93,4,d)+Ci(17,-93,4,d);
  s+=G(0,0,1,Math.sin(T*1.5)*3,P('M-40 -70 L-36 -122 L-16 -108 L16 -108 L36 -122 L40 -70 Q40 -60 0 -60 Q-40 -60 -40 -70Z',`fill:${c}`)+P('M-30 -110 L-22 -100 M30 -110 L22 -100 M-6 -108 L-6 -98 M6 -108 L6 -98',ST(d,4))+ex+P('M-4 -82 L4 -82 L0 -78Z','fill:#e2264a')+P('M0 -78 Q-6 -72 -10 -76 M0 -78 Q6 -72 10 -76',ST(d,2))+(o.emo==='angry'?P('M-26 -102 L-10 -98 M26 -102 L10 -98',ST(d,3)):''));
  if(o.emo==='dead')s+=G(0,-130,1,0,El(0,0,22,6,'none',ST('#f6c443',3)));
  const k=o.s??1;return G(o.x||0,o.y||0,(o.flip?-1:1)*k,0,s,o.o??1,k);}
