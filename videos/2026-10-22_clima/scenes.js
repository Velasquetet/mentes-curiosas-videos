/* ===== NOTICIA · La ONU: ya no se puede evitar pasar de 1,5 °C · 22/10/2026 ===== */
/* Informe del PNUMA sobre la brecha de emisiones (21/10). Tono neutral, sin bromas. */
DUR=93.4;window.DUR=DUR;
const ap=(t,t0,d=.3)=>EZ.back(sg(t,t0,t0+d));
const ao=(t,t0,d=.3)=>EZ.out(sg(t,t0,t0+d));
const GY=735;
const groundLine=(p=1,y=GY)=>DR(`M-30 ${y} L570 ${y}`,ST(K.ink,2.4),p);
const SC=[[2.8,'2,8 °C',K.red,29.7,-13],[2.6,'2,6 °C','#f36d3b',34.7,13],[2.1,'2,1 °C','#f6a81a',38.2,0]];
function card(x,y,top,big,col,lt,sub,w=240){return G(x,y,EZ.back(sg(lt,0,.3)),0,Rc(-w/2,-50,w,100,'#fff',14,OL(2.4))+Tn(0,-18,top,14,800,{fill:'#555'})+Tn(0,22,big,30,800,{fill:col||K.ink})+(sub?Tn(0,42,sub,11,600,{fill:'#777'}):''),cl(lt*4));}

/* 1 · fotograma 0: termómetro gigante subiendo con la cinta del 1,5 °C, que se rompe (recurso nuevo limitbreak) */
function s1(t){let s='';
  s+=G(250,690,.85,0,NX.limitbreak({at:2.2,val:1.85},t+.6));
  s+=G(0,64,1,0,NX.breaking({text:'ÚLTIMA HORA',sub:'Informe de la ONU',y:0},t+.4));
  s+=pillA(120,370,'por primera vez',sg(t,1.0,1.25),{fill:K.ink,sz:15,w:800});
  return s;}
/* 2 · Acuerdo de París (2015): no pasar de 1,5 °C respecto a la era preindustrial */
function s2(t){let s='';
  if(t<11.1){s+=G(270,500,.95,0,NX.signing({title:'Acuerdo de París'},t-6.9));
    s+=G(420,300,.75,0,NX.calendar({from:2015,to:2015,month:'DIC'},t-9.5),ao(t,9.5,.3));
    s+=pillA(270,250,'el gran objetivo',sg(t,7.5,7.75),{fill:'url(#gRP)',sz:16,w:800});}
  else{s+=groundLine(1);
    s+=G(270,440,.95,0,NX.globe({},t-11.1));
    s+=pillA(270,250,'máximo: +1,5 °C',sg(t,12.6,12.85),{fill:K.red,sz:20,w:800});
    s+=pillA(270,640,'respecto a antes de la industria',sg(t,13.8,14.05),{fill:K.ink,sz:15,w:800});
    s+=actor('lenteja',{t0:11.3,path:[[11.3,90]],emo:[[11.3,1,0]],s:.75,y:()=>GY,face:()=>1,look:()=>1},t);}
  return s;}
/* 3 · hoy ya estamos muy cerca (recurso nuevo warmcurve, solo la historia) */
function s3(t){let s='';
  s+=G(245,560,1,0,NX.warmcurve({w:340,h:280,hist:.3},t-16.35));
  s+=pillA(270,215,'hoy: muy cerca',sg(t,17.3,17.55),{fill:K.red,sz:18,w:800});
  return s;}
/* 4 · el informe: Brecha de Emisiones 2026 · PNUMA · miércoles 21/10 */
function s4(t){let s='';
  s+=G(270,280,.6,0,NX.globe({},t-19.2));
  s+=G(270,500,1,0,NX.headcard({cat:'ONU · PNUMA',title:'Informe sobre la Brecha de Emisiones 2026'},t-19.0));
  if(t>24.0)s+=G(400,720,.8,0,NX.calendar({from:21,to:21,month:'OCT'},t-24.0));
  s+=pillA(200,720,'publicado el miércoles',sg(t,24.2,24.45),{fill:K.ink,sz:15,w:800});
  return s;}
/* 5 · escenarios a final de siglo: 2,8 · 2,6 · 2,1 °C */
function s5(t){let s='';
  s+=G(245,600,1,0,NX.warmcurve({w:340,h:280,hist:-5,scen:SC.map(([v,l,c,a,d])=>[v,l,c,a-25.85,d])},t-25.85));
  if(t>26.0)s+=G(270,215,1,0,pill(t<31.6?'con las políticas actuales':t<35.9?'si cumplen sus promesas':'en el mejor de los casos',{sz:17,w:800,fill:t<31.6?K.red:t<35.9?'#f36d3b':'#c98400'}),ao(t,26.0,.3));
  s+=G(0,0,1,0,Tn(270,262,'calentamiento a final de siglo',14,700,{fill:'#555'}),ao(t,26.3,.3));
  return s;}
/* 6 · recortes necesarios (recurso nuevo cutstairs) y lo que dan las promesas */
function s6(t){let s='';
  s+=G(270,720,1,0,NX.cutstairs({h:320,items:[['2025',100,'hoy',.2],['2030',82,'−18 %',42.6-39.2],['2035',55,'−45 %',45.2-39.2],['2040',31,'−69 %',47.9-39.2]],promise:['2035',87,'promesas: −11 a −15 %',50.2-39.2]},t-39.2));
  s+=pillA(270,290,'emisiones (2025 = 100)',sg(t,40.6,40.85),{fill:K.ink,sz:15,w:800});
  return s;}
/* 7 · nuevo objetivo: exceso pequeño y corto (pico 1,7-1,8 °C y vuelta antes de 2100) */
function s7(t){let s='';
  s+=G(245,600,1,0,NX.warmcurve({w:340,h:280,hist:-5,scen:SC.map(([v,l,c,a,d])=>[v,l,c,-5,d]),dim:true,over:59.5-55.75},t-55.75));
  s+=pillA(270,215,'exceso pequeño y corto',sg(t,57.6,57.85),{fill:'#f36d3b',sz:18,w:800});
  if(t>64.2)s+=G(270,262,1,0,pill('volver a 1,5 °C antes de 2100',{sz:14,w:800,fill:K.ink}),ao(t,64.2,.3));
  return s;}
/* 8 · ¿por qué importa cada décima? */
function s8(t){let s='';
  if(t<74.1){s+=groundLine(1);
    s+=G(370,640,1.0,0,NX.thermo({temp:38,max:50},t-67.3));
    s+=actor('lenteja',{t0:66.8,path:[[66.8,110]],emo:[[66.8,1,0],[68.8,2,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
    if(t>70.6)s+=G(270,330,1,0,stampA(0,0,t-70.6,'+0,1 °C = + RIESGO',{c:K.red,sz:20,r:-5}));}
  else{s+=G(270,420,.7,0,NX.heatcity({temp:44},t-74.1));
    if(t>75.5)s+=G(270,660,.55,0,NX.glacier({},t-75.5));
    s+=pillA(160,150,'olas de calor',sg(t,74.6,74.85),{fill:K.red,sz:16,w:800});
    s+=pillA(380,150,'deshielo',sg(t,75.6,75.85),{fill:'#2a37d7',sz:16,w:800});}
  return s;}
/* 9 · renovables > carbón (2025) · COP31 en Turquía (noviembre) */
function s9(t){let s='';
  if(t<83.1){s+=groundLine(1,680);
    s+=G(140,680,.75,0,NX.windturbine({n:2},t-78.3))+G(140,680,.62,0,NX.solar({},t-78.6),ao(t,78.6,.3));
    s+=G(390,680,.62,0,NX.factory({smoke:1},t-80.8),ao(t,80.8,.3));
    s+=pillA(140,740,'renovables',sg(t,78.8,79.05),{fill:K.green2,sz:16,w:800});
    s+=pillA(410,740,'carbón',sg(t,81.1,81.35),{fill:'#555',sz:16,w:800});
    if(t>81.3)s+=G(275,560,1,0,Tn(0,0,'>',80,800,{fill:K.green2}),ap(t,81.3,.3));
    if(t>82.0)s+=G(270,300,1,0,stampA(0,0,t-82.0,'2025',{c:K.green2,sz:28,r:-6}));
    s+=pillA(270,215,'la buena noticia',sg(t,77.5,77.75),{fill:K.green2,sz:18,w:800});}
  else{s+=G(270,470,1,0,NX.map({focus:'Turquía',zoom:4,zoomAt:.1,highlight:['Turquía'],pins:[[30.71,36.89,'Antalya']],w:480,h:380},t-83.1));
    if(t>83.5)s+=G(150,230,.8,0,NX.calendar({from:9,to:9,month:'NOV'},t-83.5));
    s+=pillA(350,230,'COP31 · cumbre del clima',sg(t,85.0,85.25),{fill:'url(#gRP)',sz:15,w:800});}
  return s;}
/* 10 · pregunta */
function s10(t){let s=groundLine(1);
  s+=G(270,450,.55,0,NX.globe({},t-87.45));
  s+=actor('pipa',{t0:87.5,path:[[87.5,100]],emo:[[87.5,1,0]],s:.85,y:()=>GY,face:()=>1,look:()=>1},t);
  s+=actor('grano',{t0:87.6,path:[[87.6,440]],emo:[[87.6,1,0],[89.6,2,0]],s:.85,y:()=>GY,face:()=>-1,look:()=>-1},t);
  s+=pillA(270,620,'Te leo en comentarios',sg(t,89.6,89.85),{fill:'url(#gRP)',sz:15,w:800});
  return s;}
/* FIN */
function sEND(t){let s='';
  s+=G(146,236,1,0,logoS(sg(t,90.95,91.6)));
  s+=G(0,0,1,0,Ts(270,352,'El límite de',30),ao(t,91.0,.3))+G(0,0,1,0,Ts(270,398,'1,5 °C',30,{it:true,fill:'url(#gRP)',stroke:'url(#gRP)'}),ao(t,91.1,.3));
  s+=G(0,0,1,0,Tn(270,440,'Fuentes',10,600,{fill:'#6f6f6f'})+Tn(270,458,'PNUMA (ONU) · RTÉ · Infobae · El Espectador',9.5,600)+Tn(270,474,'Informe sobre la Brecha de Emisiones 2026 · 21/10/2026',9.5,500,{fill:'#7a7a7a'}),ao(t,91.2,.3));
  s+=G(250,800,.5,0,NX.limitbreak({at:-5,val:1.75},t-90.9+3),ao(t,91.2,.3));
  return s;}

SCN=[
  {id:'1',a:0,draw:s1},
  {id:'2',a:6.8,draw:s2,in:{type:'whipL',dur:.32}},
  {id:'3',a:16.3,draw:s3,in:{type:'whipU',dur:.32}},
  {id:'4',a:18.9,draw:s4,in:{type:'iris',dur:.4,fx:270,fy:470,r0:10}},
  {id:'5',a:25.8,draw:s5,in:{type:'whipL',dur:.32}},
  {id:'6',a:39.15,draw:s6,in:{type:'whipU',dur:.32}},
  {id:'7',a:55.7,draw:s7,in:{type:'whipL',dur:.32}},
  {id:'8',a:66.6,draw:s8,in:{type:'glitch',dur:.3}},
  {id:'9',a:77.25,draw:s9,in:{type:'whipU',dur:.32}},
  {id:'10',a:87.4,draw:s10,in:{type:'whipD',dur:.32}},
  {id:'END',a:90.9,draw:sEND,in:{type:'swap',dur:.4}}
];

HL=[
 {t0:.05,t1:6.6,y:175,lines:[{txt:'*1,5 °C*',sz:60,t:[.36]},{txt:'ya no se evita',sz:34,t:[2.65,2.81,2.95,3.20],gap:1.15}]},
 {t0:39.3,t1:42.4,y:180,lines:[{txt:'para volver',sz:32,t:[39.24,39.52]},{txt:'al *1,5*',sz:52,t:[39.86,40.0],gap:1.15}]},
 {t0:66.8,t1:69.6,y:190,lines:[{txt:'¿importa',sz:34,t:[67.26]},{txt:'cada *décima*?',sz:48,t:[67.69,67.92],gap:1.15}]},
 {t0:87.6,t1:89.5,y:190,lines:[{txt:'¿lo',sz:34,t:[88.22]},{txt:'*conseguiremos*?',sz:46,t:[88.33],gap:1.15}]}
];
