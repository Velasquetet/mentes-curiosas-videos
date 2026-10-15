# genera HL (titulares) a partir de words.json: cada palabra del titular se busca en orden en la voz
import json,re
W=json.load(open('words.json'))
norm=lambda s:re.sub(r'[^\wáéíóúñü]','',s.lower().replace('*',''))
# (líneas) ; línea = (texto, tamaño, extras) ; números con @tiempo explícito: "2023@10.80"
SPEC=[
 [('el *tiranosaurio*',44,{})],
 [('está mal',30,{}),('*dibujado*',56,{'spark':True})],
 [('no es un *detalle*',40,{})],
 [('tenía',30,{}),('*labios*',62,{'spark':True})],
 [('siempre con los',30,{}),('*dientes* fuera',48,{})],
 [('como un',30,{}),('*cocodrilo*',54,{})],
 [('2023@10.80',62,{'num':True,'roll':.42})],
 [('un equipo de',30,{}),('*paleontólogos*',46,{})],
 [('en la revista',30,{}),('*Science*',58,{})],
 [('seguramente',30,{}),('*no* era así',50,{})],
 [('¿cómo lo *saben*?',44,{})],
 [('los labios no se',30,{}),('*fosilizan*',52,{})],
 [('por los',30,{}),('*dientes*',62,{'spark':True})],
 [('los *cocodrilos*',46,{})],
 [('siempre al *aire*',44,{})],
 [('se *secan*',40,{}),('se *desgastan*',40,{'gap':1.1}),('se *rompen*',40,{'gap':1.1})],
 [('los dientes de los',30,{}),('*tiranosaurios*',48,{})],
 [('no muestran ese',30,{}),('*daño*',62,{})],
 [('su *esmalte*',48,{}),('bien conservado',30,{'gap':1.1})],
 [('como los lagartos',30,{}),('que sí tienen *labios*',44,{})],
 [('el dragón de',30,{}),('*Komodo*',60,{'spark':True})],
 [('*además*',54,{})],
 [('comparados con su',30,{}),('*cráneo*',56,{})],
 [('sus dientes no eran',30,{}),('tan *enormes*',50,{})],
 [('cabían de *sobra*',44,{})],
 [('dentro de una boca',30,{}),('*cerrada*',56,{})],
 [('tapados por',30,{}),('labios de *escamas*',44,{})],
 [('no son lo *único*',44,{})],
 [('hemos tenido que',30,{}),('*corregir*',56,{})],
 [('sus famosos',30,{}),('*bracitos*',56,{})],
 [('solo *dos dedos*',46,{}),('no tres',30,{'gap':1.1})],
 [('tampoco era un',30,{}),('*velocista*',56,{})],
 [('un estudio de',30,{}),('2017@56.19',60,{'num':True,'roll':.42})],
 [('no podía *correr*',46,{})],
 [('caminar *deprisa*',46,{})],
 [('unos',30,{}),('20@60.34',64,{'num':True,'roll':.4}),('*km/h*@60.65',40,{'gap':.8})],
 [('la escena del',30,{}),('*coche*',58,{})],
 [('pisar tanto el',30,{}),('*acelerador*',50,{})],
 [('¿y las *plumas*?',48,{})],
 [('algunos *parientes*',44,{}),('sí las tenían',30,{'gap':1.1})],
 [('en el propio',30,{}),('*tiranosaurio*',50,{})],
 [('piel con',30,{}),('*escamas*',60,{})],
 [('no hay *pruebas*',46,{}),('de que estuviera emplumado',26,{'gap':1.05})],
 [('el último',30,{}),('*giro*',62,{'spark':True})],
 [('este',30,{}),('*septiembre*',54,{})],
 [('analizando el',30,{}),('*esmalte*',56,{})],
 [('su *cuerpo*',48,{}),('estaba a',30,{'gap':1.1})],
 [('36@85.99',72,{'num':True,'roll':.45}),('*grados*@86.70',44,{'gap':.8})],
 [('casi como el',30,{}),('*nuestro*',58,{})],
 [('nada que ver con',30,{}),('un lagarto *frío*',46,{})],
 [('con *labios*',40,{}),('dos *dedos*',40,{'gap':1.1})],
 [('paso *rápido*',40,{}),('cuerpo *caliente*',40,{'gap':1.1})],
 [('el *rey*',58,{}),('de los dinosaurios',30,{'gap':1.0})],
 [('se parece cada vez',30,{}),('*menos*',58,{})],
 [('al de las',30,{}),('*películas*',54,{})],
 [('¿qué otro animal',32,{}),('dibujamos *mal*?',46,{'gap':1.1})],
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
  nxt=HL[i+1]['t0'] if i+1<len(HL) else 103.4
  h['t1']=round(max(last+.6,nxt-.08) if nxt-last>.6 else nxt-.08,2)
  if nxt-last>2.6: h['t1']=round(last+1.6,2)
open('hl.js','w').write('HL='+json.dumps(HL,ensure_ascii=False)+';\n')
for h in HL: print(h['t0'],h['t1'],' | '.join(l['txt'] for l in h['lines']))
