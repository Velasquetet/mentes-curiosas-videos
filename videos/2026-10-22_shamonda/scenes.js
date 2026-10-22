/* ===== NOTICIA · Virus Shamonda: primer caso humano (Francia) · 22/10/2026 ===== */
/* Ha muerto una persona: tono sobrio, sin bromas ni caras graciosas. */
DUR=92.0;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const LYON=[4.84,45.76],ABUJA=[7.49,9.06],TOKIO=[139.7,35.7];
const EU12=['Austria','Bélgica','Francia','Alemania','Irlanda','Italia','Liechtenstein','Luxemburgo','Países Bajos','Portugal','España','Suiza'];
function card(x,y,top,big,col,lt,sub,w=240){return G(x,y,EZ.back(sg(lt,0,.3)),0,Rc(-w/2,-50,w,100,'#fff',14,OL(2.4))+Tn(0,-18,top,14,800,{fill:'#555'})+Tn(0,22,big,30,800,{fill:col||K.ink})+(sub?Tn(0,42,sub,11,600,{fill:'#777'}):''),cl(lt*4));}

/* 1 · fotograma 0: el virus salta de la vaca a una persona (recurso nuevo spillover) */
function s1(t){let s='';
  s+=G(270,520,1.15,0,NX.spillover({at:-.4,label:'1.er CASO HUMANO'},t+.4));
  s+=G(270,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Virus Shamonda',y:0},t+.4));
  return s;}
/* 2 · Francia · el paciente ha muerto */
function s2(t){let s='';
  s+=G(270,500,1,0,NX.map({focus:'Francia',zoom:9,zoomAt:-5,highlight:['Francia'],pins:[[LYON[0],LYON[1],'Lyon']],w:480,h:440},t-5.2+.2));
  if(t>7.1)s+=G(270,770,1,0,Rc(-120,-30,240,60,K.ink,12)+Tn(0,8,'1 fallecido',24,800,{fill:'#fff'}),ao(t,7.1,.35));
  return s;}
/* 3 · se llama virus Shamonda · confirmado por Francia el jueves */
function s3(t){let s='';
  s+=G(270,470,1.5,0,NX.virus({},t-8.4));
  s+=G(270,470,1,0,Ts(0,175,'Shamonda',46,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,9.4,.35));
  if(t>11.3)s+=G(150,250,1,0,NX.stamp({type:'confirmado',text:'CONFIRMADO',r:-6},t-11.4));
  s+=pillA(150,320,'Sanidad y Agricultura (Francia)',sg(t,11.5,11.75),{fill:K.ink,sz:13,w:800});
  if(t>12.7)s+=G(420,270,.8,0,NX.calendar({from:22,to:22,month:'OCT'},t-12.7));
  s+=pillA(420,365,'jueves',sg(t,12.95,13.2),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* 4 · el paciente: hospital de Lyon, defensas muy bajas, enfermedad grave, falleció a principios de octubre */
function s4(t){let s=groundLine(1,640);
  s+=G(270,560,.95,0,NX.hospital({},t-13.5));
  s+=pillA(270,215,'hombre ingresado en Lyon',sg(t,13.8,14.05),{fill:K.ink,sz:16,w:800});
  s+=pillA(150,690,'defensas muy bajas',sg(t,15.5,15.75),{fill:K.red,sz:15,w:800});
  s+=pillA(390,690,'enfermedad grave',sg(t,17.1,17.35),{fill:K.red,sz:15,w:800});
  if(t>18.3)s+=G(270,270,1,0,Rc(-150,-24,300,48,'#fff',12,OL(2.4))+Tn(0,7,'falleció a principios de octubre',16,800),ao(t,18.4,.3));
  return s;}
/* 5 · complicaciones cerebrales · ¿causa o contribuyó? en investigación */
function s5(t){let s='';
  s+=G(270,430,1.1,0,NX.brain({},t-20.4));
  if(t>21.3){const pl=1+.05*Math.sin(t*6);s+=G(270,430,pl,0,Ci(0,-30,150,'none',`stroke:${K.red};stroke-width:4;opacity:.55`),ao(t,21.3,.4));}
  s+=pillA(270,230,'complicaciones cerebrales',sg(t,21.3,21.55),{fill:K.ink,sz:17,w:800});
  s+=pillA(270,620,'«muy probablemente» ligadas al virus',sg(t,24.6,24.85),{fill:'url(#gRP)',sz:15,w:800});
  if(t>28.9)s+=card(145,720,'¿FUE LA CAUSA?','?',K.ink,t-29.0,null,200);
  if(t>30.3)s+=card(395,720,'¿CONTRIBUYÓ?','?',K.ink,t-30.3,null,200);
  if(t>27.4)s+=G(270,430,1,0,stampA(0,0,t-27.5,'EN INVESTIGACIÓN',{c:K.orange,sz:22,r:-6}));
  return s;}
/* 6 · ¿cómo se contagió? la picadura de un jején (recurso nuevo midge) */
function s6(t){let s='';
  const bite=sg(t,35.0,35.6);
  if(t>34.9){s+=G(270,0,1,0,Rc(-230,655,460,90,'#f6d0b0',45,OL(2.4))+P('M-150 690 q10 -6 20 0 M60 700 q10 -6 20 0',ST('#d9a988',2)),ao(t,34.9,.3));}
  s+=G(270,500,2.1,0,NX.midge({fly:1-bite,bite,path:28},t-31.8));
  s+=pillA(270,230,'hipótesis principal: una picadura',sg(t,33.8,34.05),{fill:K.ink,sz:16,w:800});
  s+=pillA(270,290,'jején · Culicoides',sg(t,35.9,36.15),{fill:'url(#gRP)',sz:17,w:800});
  return s;}
/* 7 · más pequeño que un mosquito (recurso nuevo midgesize) · este de Francia */
function s7(t){let s='';
  if(t<39.4)s+=G(280,470,1.05,0,NX.midgesize({at:.1},t-36.4));
  else{s+=G(270,470,1,0,NX.map({focus:'Francia',zoom:9,zoomAt:-5,highlight:['Francia'],w:480,h:440,over:(pr,k,lt)=>{const [x,y]=pr(5.8,47.8);return G(x,y,1/k,0,Ci(0,0,70*ao(t,39.6,.5),'rgba(243,72,65,.35)',OL(3,K.red)));}},t-39.4));
    s+=pillA(270,220,'este de Francia',sg(t,39.7,39.95),{fill:K.ink,sz:17,w:800});
    s+=G(400,560,.5,0,NX.midge({path:30},t),ao(t,40.0,.3));}
  return s;}
/* 8 · descubierto en Nigeria en los años 60 · ganado de África y Japón */
function s8(t){let s='';
  s+=G(270,470,1,0,NX.map({center:[72,20],zoom:1.12,zoomAt:-5,highlight:t>46.8?['Nigeria','Japón']:['Nigeria'],pins:[[ABUJA[0],ABUJA[1],'Nigeria'],[TOKIO[0],TOKIO[1],'Japón']].slice(0,t>47.3?2:1),w:500,h:340},t-41.2));
  if(t>42.6)s+=G(270,230,1,0,Rc(-110,-36,220,72,'#fff',14,OL(2.4))+Tn(0,-8,'DESCUBIERTO',13,800,{fill:'#555'})+Tn(0,22,'años 60',26,800),ap(t,42.6,.35));
  s+=pillA(270,700,'durante décadas, solo en ganado',sg(t,45.0,45.25),{fill:K.ink,sz:15,w:800});
  if(t>45.9)s+=G(445,268,.45,0,NX.cow({},t-45.9),ao(t,45.9,.3));
  return s;}
/* 9 · este verano, por primera vez en Europa occidental: animales de más de una docena de países, entre ellos España */
function s9(t){let s='';
  const n=Math.round(cl((t-51.9)/2.2)*EU12.length);const hl=EU12.slice(0,n);
  s+=G(270,470,1,0,NX.map({center:[6,48],zoom:5.2,zoomAt:-5,highlight:hl,w:480,h:470,over:(pr,k)=>{if(t<55.6)return '';const [x,y]=pr(-3.7,40.4);return G(x,y,1/k,0,_pulse(t-55.6,30,K.red,2,1.2));}},t-48.3+5));
  s+=pillA(270,200,'verano de 2026 · 1.ª vez en Europa occidental',sg(t,48.6,48.85),{fill:K.ink,sz:14,w:800});
  if(t>53.4)s+=card(390,665,'PAÍSES','+12',K.red,t-53.4,'con animales infectados',200);
  s+=pillA(150,665,'España, entre ellos',sg(t,55.6,55.85),{fill:'url(#gRP)',sz:16,w:800});
  return s;}
/* 10 · afecta sobre todo a las vacas: fiebre, decaimiento, menos leche · también ovejas, cabras, caballos (recurso nuevo cow) */
function s10(t){let s=groundLine(1);
  s+=G(220,GY,1.25,0,NX.cow({sick:sg(t,58.6,59.2),emo:t>59.2?'tired':'ok',milk:t>59.8?1-.7*sg(t,60.2,61.0):null},t-56.5));
  s+=pillA(130,250,'fiebre',sg(t,58.7,58.95),{fill:K.red,sz:17,w:800});
  s+=pillA(270,250,'decaimiento',sg(t,59.25,59.5),{fill:K.red,sz:17,w:800});
  s+=pillA(420,250,'menos leche',sg(t,60.0,60.25),{fill:K.red,sz:17,w:800});
  if(t>61.3)s+=G(270,320,1,0,Rc(-170,-24,340,48,'#fff',12,OL(2.4))+Tn(0,7,'también ovejas · cabras · caballos',16,800),ao(t,61.4,.3));
  return s;}
/* 11 · lo importante: sin riesgo para la población general · caso excepcional · no se ha descrito contagio entre personas */
function s11(t){let s='';
  if(t>63.9){s+=G(270,380,1,0,Rc(-200,-70,400,140,'#fff',18,OL(2.6))+Ci(-140,0,34,K.green2,OL(2.4))+P('M-154 0 L-144 10 L-124 -12',ST('#fff',5))+Tn(30,-12,'SIN RIESGO PARA LA',16,800,{fill:'#555'})+Tn(30,22,'población general',26,800,{fill:K.green2}),ap(t,63.95,.4));}
  s+=pillA(160,520,'caso excepcional',sg(t,69.0,69.25),{fill:K.ink,sz:16,w:800});
  s+=pillA(380,520,'persona muy vulnerable',sg(t,70.6,70.85),{fill:K.ink,sz:16,w:800});
  if(t>72.2)s+=G(270,650,1,0,Rc(-200,-46,400,92,'#fff',16,OL(2.4))+Tn(0,-12,'CONTAGIO ENTRE PERSONAS',14,800,{fill:'#555'})+Tn(0,22,'no descrito',26,800,{fill:K.ink}),ap(t,72.3,.35));
  return s;}
/* 12 · con el frío, los jejenes pican cada vez menos */
function s12(t){let s='';
  const c=sg(t,75.6,77.0);
  s+=G(270,470,1,0,Rc(-210,-220,420,440,mixc('#ffffff','#dbe8fa',c),24,OL(2.4)));
  for(let i=0;i<14;i++){const q=((t*.35)+hs(i))%1;s+=G(100+hs(i+3)*340,260+q*420,1,t*40+i*20,P('M-8 0 L8 0 M0 -8 L0 8 M-6 -6 L6 6 M6 -6 L-6 6',ST('#7fa6d8',2.2)),c*(1-Math.abs(q-.5)*1.4));}
  s+=G(270,470,1.6,0,NX.midge({fly:1-c*.85,path:60*(1-c*.7)},t),1-c*.45);
  s+=pillA(270,200,'con el frío',sg(t,75.7,75.95),{fill:'#2f6fe0',sz:17,w:800});
  s+=pillA(270,740,'pican cada vez menos',sg(t,77.2,77.45),{fill:K.ink,sz:17,w:800});
  return s;}
/* 13 · Francia, la OMS y el centro europeo (ECDC) lo investigan */
function s13(t){let s=groundLine(1,700);
  s+=G(270,585,.9,0,NX.microscope({},t-78.7));
  [['FRANCIA',79.5,110],['OMS',80.4,270],['ECDC',81.3,430]].forEach(([n,a,x])=>{if(t>a)s+=G(x,220,1,0,Rc(-70,-30,140,60,K.ink,14)+Tn(0,8,n,20,800,{fill:'#fff'}),ap(t,a,.35));});
  s+=pillA(270,300,'centro europeo de control de enfermedades',sg(t,81.4,81.65),{fill:'url(#gRP)',sz:13,w:800});
  if(t>83.1)s+=G(270,420,1,0,NX.stamp({type:'desarrollo',text:'INVESTIGACIÓN EN CURSO',r:-5},t-83.2));
  return s;}
/* 14 · pregunta (sobria) */
function s14(t){let s=groundLine(1);
  s+=G(270,430,1.3,0,NX.midge({path:50},t));
  s+=actor('pipa',{t0:84.7,path:[[84.7,100]],emo:[[84.7,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:84.8,path:[[84.8,440]],emo:[[84.8,1,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,620,'Te leo en comentarios',sg(t,87.6,87.85),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,89.0,89.6)));
  s+=G(0,0,1,0,Ts(270,352,'Virus Shamonda',30),ao(t,89.05,.3))+G(0,0,1,0,Ts(270,398,'primer caso humano',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,89.15,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'Ministerios de Sanidad y Agricultura de Francia · Euronews',9.5,600)+Tn(270,474,'SMC España · ConSalud · 24horas · 22/10/2026',9.5,600)+Tn(270,490,'investigación en curso',9.5,500,{fill:'#7a7a7a'}),ao(t,89.5,.3));
  s+=G(270,680,.9,0,NX.cow({},t-89.0),ao(t,89.5,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:5.2,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:8.4,draw:s3,in:{type:'zoom',dur:.45,fx:270,fy:470,z:8}},
  {id:'4',a:13.5,draw:s4,in:{type:'whipL',dur:.32}},
  {id:'5',a:20.4,draw:s5,in:{type:'iris',dur:.4,fx:270,fy:430,r0:10}},
  {id:'6',a:31.8,draw:s6,in:{type:'glitch',dur:.3}},
  {id:'7',a:36.4,draw:s7,in:{type:'whipU',dur:.32}},
  {id:'8',a:41.2,draw:s8,in:{type:'whipL',dur:.32}},
  {id:'9',a:48.3,draw:s9,in:{type:'zoom',dur:.45,fx:200,fy:400,z:6}},
  {id:'10',a:56.5,draw:s10,in:{type:'whipL',dur:.32}},
  {id:'11',a:63.6,draw:s11,in:{type:'whipU',dur:.32}},
  {id:'12',a:74.8,draw:s12,in:{type:'whipD',dur:.32}},
  {id:'13',a:78.7,draw:s13,in:{type:'whipL',dur:.32}},
  {id:'14',a:84.6,draw:s14,in:{type:'whipD',dur:.32}},
  {id:'END',a:89.0,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:0,t1:5.1,y:175,lines:[{txt:'de las *vacas*',sz:46,t:[-.5,-.45,-.4]},{txt:'a una persona',sz:34,t:[-.35,-.3,-.25],gap:1.15}]},
 {t0:31.85,t1:33.7,y:190,lines:[{txt:'¿cómo se',sz:34,t:[32.08,32.35]},{txt:'*contagió*?',sz:52,t:[32.49],gap:1.15}]},
 {t0:63.7,t1:65.2,y:170,lines:[{txt:'lo',sz:34,t:[64.36]},{txt:'*importante*',sz:52,t:[64.47],gap:1.15}]},
 {t0:84.7,t1:88.9,y:190,lines:[{txt:'¿conocías',sz:34,t:[84.71]},{txt:'los *jejenes*?',sz:48,t:[86.42,86.59],gap:1.15}]}
];
