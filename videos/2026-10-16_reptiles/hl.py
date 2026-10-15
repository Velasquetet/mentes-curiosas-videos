# genera HL (titulares) a partir de words.json: cada palabra del titular se busca en orden en la voz
import json,re
W=json.load(open('words.json'))
norm=lambda s:re.sub(r'[^\wáéíóúñü]','',s.lower().replace('*',''))
# (líneas) ; línea = (texto, tamaño, extras) ; números con @tiempo explícito: "2023@10.80"
SPEC=[
 [('las *tortugas*',50,{})],
 [('no son',30,{}),('*mudas*',64,{'spark':True})],
 [('no es una forma',30,{}),('de *hablar*',46,{})],
 [('las han',30,{}),('*grabado*',58,{})],
 [('durante mucho tiempo',30,{}),('*pensamos*',50,{})],
 [('que los *reptiles*',44,{}),('eran animales silenciosos',26,{'gap':1.1})],
 [('como mucho',30,{}),('un *bufido*',52,{})],
 [('*error*',70,{'spark':True})],
 [('un *biólogo*',50,{})],
 [('Universidad de',30,{}),('*Zúrich*',58,{})],
 [('Gabriel',30,{}),('*Jorgewich-Cohen*',40,{})],
 [('grabando a sus',30,{}),('propias *tortugas*',46,{})],
 [('en *casa*',50,{})],
 [('se llamaba',30,{}),('*Homer*',64,{'spark':True})],
 [('Homer hacía',30,{}),('*ruidos*',60,{})],
 [('2022@22.35',62,{'num':True,'roll':.42})],
 [('su *equipo*',48,{}),('publicó que',30,{'gap':1.1})],
 [('53@25.04',76,{'num':True,'roll':.45}),('*especies*',44,{'gap':.85})],
 [('que creíamos',30,{}),('*mudas*',58,{})],
 [('en realidad emiten',30,{}),('*sonidos*',58,{})],
 [('50@29.34',72,{'num':True,'roll':.4}),('eran *tortugas*',44,{'gap':.85})],
 [('*chasquidos*',44,{}),('*gruñidos*',44,{'gap':1.1}),('*chirridos*',44,{'gap':1.1})],
 [('muchos *machos*',46,{})],
 [('para *cortejar*',44,{}),('o para *pelearse*',44,{'gap':1.1})],
 [('pero *espera*',50,{})],
 [('lo más *raro*',48,{})],
 [('antes de',30,{}),('*nacer*',62,{'spark':True})],
 [('crías de *cocodrilo*',42,{}),('del *Nilo*',46,{'gap':1.15})],
 [('llaman desde',30,{}),('dentro del *huevo*',46,{})],
 [('sus *hermanos*',48,{}),('las oyen',30,{'gap':1.1})],
 [('rompen el *cascarón*',42,{})],
 [('casi a la',30,{}),('*vez*',64,{})],
 [('y la *madre*',50,{})],
 [('escarba la',30,{}),('*arena*',60,{})],
 [('¿y los *gecos*?',52,{})],
 [('el geco',30,{}),('*tokay*',62,{})],
 [('grita algo parecido',30,{}),('a su *nombre*',48,{})],
 [('*geck-o*',72,{'spark':True})],
 [('unos *científicos*',46,{})],
 [('le pusieron un',30,{}),('*ruido*',60,{})],
 [('como el del',30,{}),('*tráfico*',58,{})],
 [('¿gritó más *fuerte*?',44,{})],
 [('*no*',80,{})],
 [('alargó la',30,{}),('*llamada*',58,{})],
 [('la «o» duraba',30,{}),('casi un',30,{'gap':1.0})],
 [('40@64.51',74,{'num':True,'roll':.4}),('*%*@64.91 *más*',44,{'gap':.85})],
 [('los *aligátores*',48,{}),('americanos',30,{'gap':1.1})],
 [('*braman*',66,{'spark':True})],
 [('ese *bramido*',48,{})],
 [('carné de',30,{}),('*identidad*',56,{})],
 [('cuanto más',30,{}),('*grave*',62,{})],
 [('más *grande*',52,{}),('es el animal',30,{'gap':1.1})],
 [('evitar *peleas*',46,{}),('que van a perder',30,{'gap':1.1})],
 [('en *Chile*',52,{})],
 [('la lagartija',30,{}),('*llorona*',60,{})],
 [('cuando un',30,{}),('*depredador*',50,{})],
 [('la atrapa',30,{}),('*chilla*',64,{'spark':True})],
 [('las que la *oyen*',44,{})],
 [('se quedan',30,{}),('*inmóviles*',54,{})],
 [('en la *India*',50,{})],
 [('los machos de',30,{}),('*gavial*',60,{})],
 [('un *bulto*',52,{}),('en la punta del hocico',26,{'gap':1.1})],
 [('el *ghara*',56,{}),('significa *olla*',40,{'gap':1.15})],
 [('bajo el',30,{}),('*agua*',60,{})],
 [('*¡pop!*',84,{'spark':True})],
 [('un *sonido*',50,{})],
 [('unas',30,{}),('*centésimas*',52,{}),('de segundo',30,{'gap':1.0})],
 [('el gran',30,{}),('*giro*',70,{'spark':True})],
 [('el estudio de',30,{}),('las *tortugas*',48,{})],
 [('comunicarse con',30,{}),('*sonidos*',58,{})],
 [('un antepasado',30,{}),('*común*',62,{})],
 [('hace unos',30,{}),('407@105.55',70,{'num':True,'roll':.5}),('*millones* de años',36,{'gap':.8})],
 [('un *pez*',70,{'spark':True})],
 [('no todos los',30,{}),('*científicos*',50,{}),('están de acuerdo',30,{'gap':1.0})],
 [('la próxima vez',30,{}),('que veas una *tortuga*',40,{})],
 [('*piénsalo*',60,{})],
 [('a lo mejor está',30,{}),('esperando a que',30,{'gap':1.0}),('te *calles*',54,{'gap':1.1})],
 [('¿qué animal parece',32,{}),('*mudo*',60,{}),('pero no lo es?',30,{'gap':1.0})],
 [('te leo en',30,{}),('*comentarios*',48,{})],
]
cur=0;HL=[]
for lines in SPEC:
  outl=[]
  for txt,sz,ex in lines:
    toks=txt.split(' ');times=[];shown=[]
    for tk in toks:
      if '@' in tk:
        a,b=tk.split('@');shown.append(a);times.append(float(b))
        # avanzar cursor hasta pasado ese tiempo
        while cur<len(W) and W[cur]['t']<=float(b)+.01: cur+=1
        continue
      n=norm(tk);j=cur
      while j<len(W) and norm(W[j]['w'])!=n: j+=1
      if j>=len(W) or j-cur>12: raise SystemExit(f'no encuentro {tk!r} cerca de {W[cur]["w"]}@{W[cur]["t"]}')
      times.append(W[j]['t']);shown.append(tk);cur=j+1
    d={'txt':' '.join(shown),'sz':sz,'t':[round(x,2) for x in times]};d.update(ex);outl.append(d)
  HL.append({'t0':outl[0]['t'][0],'lines':outl})
for i,h in enumerate(HL):
  last=max(max(l['t']) for l in h['lines'])
  nxt=HL[i+1]['t0'] if i+1<len(HL) else 121.6
  h['t1']=round(max(last+.6,nxt-.08) if nxt-last>.6 else nxt-.08,2)
  if nxt-last>2.6: h['t1']=round(last+1.6,2)
open('hl.js','w').write('HL='+json.dumps(HL,ensure_ascii=False)+';\n')
for h in HL: print(h['t0'],h['t1'],' | '.join(l['txt'] for l in h['lines']))
