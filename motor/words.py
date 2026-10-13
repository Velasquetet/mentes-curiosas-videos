import json, re, numpy as np, scipy.io.wavfile as w
from scipy.signal import butter, sosfiltfilt, find_peaks
sr,x=w.read('voz_corta.wav'); x=x.astype(np.float32)
if x.ndim>1: x=x.mean(1)
x/=np.abs(x).max()
sos=butter(4,[250,3500],btype='band',fs=sr,output='sos'); y=sosfiltfilt(sos,x)
hop=int(sr*0.005); env=np.sqrt(np.convolve(y**2,np.ones(int(sr*0.03))/int(sr*0.03),'same'))[::hop]
tt=np.arange(len(env))*0.005
segs=json.load(open('segs.json'))
V='aeiouáéíóúü'
def syl(wd):
    s=wd.lower()
    s=re.sub(r'[^a-záéíóúüñ]','',s)
    if not s: return 1
    # vocal groups; split strong-strong hiatus (a,e,o + a,e,o) and accented weak vowels
    n=0;i=0
    groups=re.findall(r'[aeiouáéíóúü]+',s)
    for g in groups:
        k=1
        for a,b in zip(g,g[1:]):
            if (a in 'aeoáéó' and b in 'aeoáéó') or a in 'íú' or b in 'íú': k+=1
        n+=k
    return max(1,n)
out=[]
for si,sg in enumerate(segs):
    words=sg['txt'].split()
    sy=[syl(wd) for wd in words]
    a,b=sg['s'],sg['e']
    m=(tt>=a)&(tt<=b); e=env[m]; te=tt[m]
    es=np.convolve(e,np.ones(5)/5,'same')
    pk,_=find_peaks(es,distance=int(0.085/0.005),prominence=es.max()*0.06)
    pt=te[pk]
    N=sum(sy)
    # cumulative syllable start index for each word
    cum=np.concatenate([[0],np.cumsum(sy)])
    def syl_time(k):
        if len(pt)<2: return a+(b-a)*k/N
        # map syllable k (0..N-1) proportionally onto peaks
        f=k*(len(pt)-1)/max(1,N-1)
        i=int(np.floor(f)); fr=f-i
        if i>=len(pt)-1: return pt[-1]
        return pt[i]*(1-fr)+pt[i+1]*fr
    ws=[]
    for i,wd in enumerate(words):
        st=syl_time(cum[i])-0.07
        ws.append(max(a,st))
    ws[0]=a
    item={'s':a,'e':b,'txt':sg['txt'],'w':[[round(ws[i],3),words[i]] for i in range(len(words))],'np':int(len(pt)),'ns':int(N)}
    out.append(item)
    print(si,len(pt),N,' '.join(f"{wd}@{t:.2f}" for t,wd in item['w']))
json.dump(out,open('words.json','w'),ensure_ascii=False,indent=0)
