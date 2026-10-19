# genera HL (titulares) a partir de words.json: cada palabra del titular se busca en orden en la voz
import json,re
W=json.load(open('words.json'))
norm=lambda s:re.sub(r'[^\wáéíóúñü]','',s.lower().replace('*',''))
SPEC=[
 [('este trozo de',30,{}),('*marfil*',62,{})],
 [('casi',30,{}),('40.000@2.25',90,{'num':True,'roll':.4}),('años',34,{'gap':.95})],
 [('una *máquina*',52,{}),('de hacer cuerdas',30,{'gap':1.05})],
 [('la Edad de',30,{}),('*Piedra*',62,{})],
 [('*pudren*@15.09',62,{})],
 [('Hohle@25.55',30,{}),('*Fels*@25.76',62,{})],
 [('*15*@28.05',90,{'num':True,'roll':.4}),('trozos',30,{'gap':.95})],
 [('*ranuras*',58,{}),('en espiral',30,{'gap':1.05})],
 [('¿para qué',30,{}),('*sirven*?',58,{})],
 [('*funcionó*',62,{'spark':True})],
 [('¿la más',30,{}),('*antigua*?',58,{})],
 [('*neandertales*',50,{})],
 [('no es tan',30,{}),('*fácil*',62,{})],
 [('*19.000*@85.69',80,{'num':True,'roll':.4}),('años',30,{'gap':.95})],
 [('¿fuego, rueda',30,{}),('o *cuerda*?',52,{})],
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
      if j>=len(W) or j-cur>80: raise SystemExit(f'no encuentro {tk!r} cerca de {W[cur]["w"]}@{W[cur]["t"]}')
      times.append(W[j]['t']);shown.append(tk);cur=j+1
    d={'txt':' '.join(shown),'sz':sz,'t':[round(x,2) for x in times]};d.update(ex);outl.append(d)
  HL.append({'t0':outl[0]['t'][0],'lines':outl})
for i,h in enumerate(HL):
  last=max(max(l['t']) for l in h['lines'])
  nxt=HL[i+1]['t0'] if i+1<len(HL) else 106.9
  h['t1']=round(max(last+.6,nxt-.08) if nxt-last>.6 else nxt-.08,2)
  if nxt-last>2.6: h['t1']=round(last+1.6,2)
OVR={}
for h in HL:
  if h['t0'] in OVR: h['t1']=OVR[h['t0']]
open('hl.js','w').write('HL='+json.dumps(HL,ensure_ascii=False)+';\n')
for h in HL: print(h['t0'],h['t1'],' | '.join(l['txt'] for l in h['lines']))
