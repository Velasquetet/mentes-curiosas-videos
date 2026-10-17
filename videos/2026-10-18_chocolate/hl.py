# genera HL (titulares) a partir de words.json: cada palabra del titular se busca en orden en la voz
import json,re
W=json.load(open('words.json'))
norm=lambda s:re.sub(r'[^\wáéíóúñü]','',s.lower().replace('*',''))
# (líneas) ; línea = (texto, tamaño, extras) ; números con @tiempo explícito: "2023@10.80"
SPEC=[
 [('hace',30,{}),('900@0.38',96,{'num':True,'roll':.4}),('años',34,{'gap':.95})],
 [('alguien tomó',30,{}),('*chocolate*',60,{'spark':True})],
 [('en *Georgia*',56,{}),('Estados Unidos',26,{'gap':1.05})],
 [('no debería',30,{}),('haber sido *posible*',46,{})],
 [('el cacao es',30,{}),('*tropical*',62,{})],
 [('en Georgia',30,{}),('*hiela*',66,{})],
 [('no crece',30,{}),('ni de *broma*',52,{})],
 [('*Etowah*',66,{'spark':True})],
 [('enormes',30,{}),('*montículos*',52,{}),('de tierra',30,{'gap':1.0})],
 [('pueblos',30,{}),('*misisipianos*',48,{})],
 [('cuando *empezaron*',50,{}),('a construir',30,{'gap':1.0})],
 [('su primer gran',30,{}),('*montículo*',54,{})],
 [('*banquetes*',60,{'spark':True})],
 [('las *fosas*',54,{})],
 [('huesos',30,{}),('comida',30,{'gap':1.05}),('*cerámica*',56,{'gap':1.25})],
 [('31@32.64',90,{'num':True,'roll':.4}),('piezas',30,{'gap':.95})],
 [('*cafeína*',60,{})],
 [('sustancias del',30,{}),('*cacao*',62,{})],
 [('un *problema*',54,{})],
 [('el *yaupón*',60,{})],
 [('la misma',30,{}),('señal *química*',48,{})],
 [('la llamada',30,{}),('*bebida negra*',50,{})],
 [('la explicación',30,{}),('más *sencilla*',50,{})],
 [('nada de',30,{}),('*chocolate*',58,{})],
 [('Adam *King*',54,{}),('Universidad de Carolina del Sur',22,{'gap':1.1})],
 [('más difícil de',30,{}),('*confundir*',52,{})],
 [('*ADN*',96,{'spark':True})],
 [('un laboratorio',30,{}),('de *París*',58,{})],
 [('*tres* trozos',54,{})],
 [('en *dos*',62,{}),('ADN de *cacao*',42,{'gap':1.15})],
 [('¿chocolate',30,{}),('*moderno*?',56,{})],
 [('lo *comprobaron*',48,{})],
 [('fragmentos',30,{}),('*cortísimos*',54,{})],
 [('ADN',30,{}),('*antiguo*',62,{})],
 [('el *giro*',84,{'spark':True})],
 [('los *mayas*',58,{}),('en Belice',30,{'gap':1.0})],
 [('y *Ecuador*',58,{})],
 [('casi',30,{}),('2.000@87.14',90,{'num':True,'roll':.5}),('kilómetros',30,{'gap':.95})],
 [('rutas que movían',30,{}),('*cacao*',62,{})],
 [('medio',30,{}),('*continente*',54,{})],
 [('eso sí',30,{}),('los autores *avisan*',44,{})],
 [('solo',30,{}),('*dos* piezas',54,{})],
 [('origen',30,{}),('*preliminar*',52,{})],
 [('ni una',30,{}),('*semilla*',60,{})],
 [('nada de',30,{}),('*tabletas*',58,{})],
 [('las tabletas',30,{}),('no *llegaron*',52,{})],
 [('siglo *XIX*@109.34',60,{'spark':True})],
 [('¿qué *alimento*',46,{}),('ha viajado más',30,{'gap':1.0}),('hasta *ti*?',44,{'gap':1.1})],
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
  nxt=HL[i+1]['t0'] if i+1<len(HL) else 116.4
  h['t1']=round(max(last+.6,nxt-.08) if nxt-last>.6 else nxt-.08,2)
  if nxt-last>2.6: h['t1']=round(last+1.6,2)
OVR={50.27:51.78}
for h in HL:
  if h['t0'] in OVR: h['t1']=OVR[h['t0']]
open('hl.js','w').write('HL='+json.dumps(HL,ensure_ascii=False)+';\n')
for h in HL: print(h['t0'],h['t1'],' | '.join(l['txt'] for l in h['lines']))
