# recorta silencios entre palabras a <=0.3 s y ajusta words.json
import json, numpy as np, scipy.io.wavfile as wf
sr,x=wf.read('../../tts/2026-10-24_mundo-dinosaurios.wav'); W=json.load(open('../../tts/2026-10-24_mundo-dinosaurios.words.json'))
MAXG=0.40; out=[]; cuts=[]  # (start,end) to remove in original time
for a,b in zip(W,W[1:]):
    e=a['t']+a['d']; g=b['t']-e
    if g>MAXG+0.02:
        rem=g-MAXG; c0=e+MAXG/2; cuts.append((c0,c0+rem))
def shift(t):
    s=0
    for c0,c1 in cuts:
        if t>=c1: s+=c1-c0
        elif t>c0: s+=t-c0
    return t-s
keep=[];pos=0;fade=int(sr*0.01)
segs=[];prev=0
for c0,c1 in cuts: segs.append((prev,c0)); prev=c1
segs.append((prev,len(x)/sr))
y=[]
for i,(a,b) in enumerate(segs):
    seg=x[int(a*sr):int(b*sr)].astype(np.float32)
    if i>0: seg[:fade]*=np.linspace(0,1,fade)
    if i<len(segs)-1: seg[-fade:]*=np.linspace(1,0,fade)
    y.append(seg)
y=np.concatenate(y)
wf.write('voz.wav',sr,y.astype(np.int16))
NW=[{'t':round(shift(o['t']),3),'d':o['d'],'w':o['w']} for o in W]
json.dump(NW,open('words.json','w'),ensure_ascii=False)
print('orig',len(x)/sr,'nuevo',len(y)/sr,'cortes',len(cuts))
