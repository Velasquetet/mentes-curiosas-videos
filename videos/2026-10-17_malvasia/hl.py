# genera HL (titulares) a partir de words.json: cada palabra del titular se busca en orden en la voz
import json,re
W=json.load(open('words.json'))
norm=lambda s:re.sub(r'[^\wáéíóúñü]','',s.lower().replace('*',''))
# (líneas) ; línea = (texto, tamaño, extras) ; números con @tiempo explícito: "2023@10.80"
SPEC=[
 [('este *pato*',50,{})],
 [('tiene el pico',30,{}),('*azul*',64,{'spark':True}),('eléctrico',30,{'gap':.95})],
 [('ni una *gota*',46,{}),('de pigmento azul',30,{'gap':1.1})],
 [('la *malvasía*',50,{}),('cabeciblanca',34,{'gap':1.0})],
 [('cría en',30,{}),('*lagunas*',56,{}),('de España',30,{'gap':1.0})],
 [('cabeza',30,{}),('*blanca*',58,{})],
 [('cola',30,{}),('*tiesa*',58,{})],
 [('parece de',30,{}),('*juguete*',58,{'spark':True})],
 [('¿el *truco*?',56,{})],
 [('el azul es',30,{}),('*estructural*',50,{})],
 [('capa de',30,{}),('*queratina*',54,{})],
 [('estructura',30,{}),('*microscópica*',46,{})],
 [('dispersa',30,{}),('la *luz*',58,{})],
 [('nos llega',30,{}),('*azul*',64,{'spark':True})],
 [('pero no',30,{}),('*siempre*',58,{})],
 [('época de',30,{}),('*celo*',64,{})],
 [('las *hormonas*',50,{})],
 [('el pico',30,{}),('se *enciende*',52,{'spark':True})],
 [('a las *hembras*',48,{})],
 [('los más',30,{}),('*brillantes*',54,{})],
 [('acaba la',30,{}),('*temporada*',52,{})],
 [('vuelve a ser',30,{}),('*grisáceo*',54,{})],
 [('la cola',30,{}),('también tiene *truco*',40,{})],
 [('plumas largas',30,{}),('y *rígidas*',54,{})],
 [('patos de',30,{}),('*cola tiesa*',54,{'spark':True})],
 [('una *buceadora*',48,{}),('nata',30,{'gap':1.0})],
 [('se *sumerge*',52,{})],
 [('*larvas*',58,{})],
 [('mosquitos',30,{}),('que no *pican*',46,{})],
 [('huevos',30,{}),('*enormes*',60,{'spark':True})],
 [('en proporción',30,{}),('a su *cuerpo*',48,{})],
 [('los más *grandes*',48,{}),('de todas las aves acuáticas',26,{'gap':1.05})],
 [('el *giro*',70,{'spark':True})],
 [('finales de los',30,{}),('años *setenta*',50,{})],
 [('solo quedaban',30,{})],
 [('22@62.55',96,{'num':True,'roll':.4})],
 [('se *protegieron*',46,{}),('las lagunas',30,{'gap':1.05})],
 [('se prohibió',30,{}),('*cazarla*',56,{})],
 [('la población',30,{}),('empezó a *crecer*',46,{})],
 [('un *problema*',50,{}),('desde muy lejos',30,{'gap':1.05})],
 [('la malvasía',30,{}),('*canela*',62,{})],
 [('un pato',30,{}),('*americano*',54,{})],
 [('se escapó en el',30,{}),('*Reino Unido*',50,{})],
 [('los años',30,{}),('*ochenta*',56,{})],
 [('alcanzó',30,{}),('*España*',58,{})],
 [('empezó a',30,{}),('*cruzarse*',56,{})],
 [('sus *híbridos*',50,{})],
 [('son *fértiles*',52,{})],
 [('podía',30,{}),('*desaparecer*',50,{})],
 [('*mezclándose*',52,{'spark':True})],
 [('control del',30,{}),('pato *invasor*',48,{})],
 [('hibridación',30,{}),('*controlada*',52,{})],
 [('y en *España*',52,{})],
 [('más de',30,{}),('2.000@93.79',84,{'num':True,'roll':.5})],
 [('en el mundo',30,{}),('sigue en *peligro*',46,{})],
 [('las *sequías*',52,{}),('amenazan las lagunas',28,{'gap':1.05})],
 [('de 22@100.53',56,{'num':True}),('a más de 2.000@101.49',40,{'num':True,'gap':1.0})],
 [('¿qué otro *animal*',44,{}),('de España',30,{'gap':1.0}),('casi nadie *conoce*?',40,{'gap':1.0})],
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
  nxt=HL[i+1]['t0'] if i+1<len(HL) else 107.3
  h['t1']=round(max(last+.6,nxt-.08) if nxt-last>.6 else nxt-.08,2)
  if nxt-last>2.6: h['t1']=round(last+1.6,2)
open('hl.js','w').write('HL='+json.dumps(HL,ensure_ascii=False)+';\n')
for h in HL: print(h['t0'],h['t1'],' | '.join(l['txt'] for l in h['lines']))
