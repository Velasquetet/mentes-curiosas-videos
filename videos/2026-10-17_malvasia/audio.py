"""Diseño sonoro propio · malvasía (sintetizado): música de fondo muy suave + efectos ocasionales."""
import numpy as np, scipy.io.wavfile as wf
from scipy.signal import butter, sosfilt
SR=48000; DUR=109.4; N=int(SR*DUR)
rng=np.random.default_rng(17)
def t_(d): return np.arange(int(SR*d))/SR
def env_exp(d,dec,att=.003):
    t=t_(d); e=np.exp(-t/dec); a=np.clip(t/att,0,1); return e*a
def bp(x,lo,hi,o=2): return sosfilt(butter(o,[lo,hi],btype='band',fs=SR,output='sos'),x)
def lp(x,f,o=2): return sosfilt(butter(o,f,btype='low',fs=SR,output='sos'),x)
def hp(x,f,o=2): return sosfilt(butter(o,f,btype='high',fs=SR,output='sos'),x)
def place(buf,x,t0,g=1.0):
    i=int(t0*SR)
    if i>=len(buf): return
    x=x[:len(buf)-i]; buf[i:i+len(x)]+=x*g
def db(v): return 10**(v/20)
def svf_sweep(x,f0,f1,q=1.2):
    """filtro paso-banda de estado variable con barrido de frecuencia"""
    n=len(x); f=np.geomspace(f0,f1,n); out=np.zeros(n); lo=b=0.0
    for i in range(n):
        F=2*np.sin(np.pi*f[i]/SR); hi=x[i]-lo-q*b; b+=F*hi; lo+=F*b; out[i]=b
    return out
# ---------- efectos ----------
def whoosh(d=.42,f0=380,f1=3400,soft=False):
    n=rng.standard_normal(int(SR*d)); y=svf_sweep(n,f0,f1,q=.9 if not soft else 1.4)
    t=t_(d); e=np.sin(np.pi*np.clip(t/d,0,1))**1.6; y=y*e
    return y/np.max(np.abs(y)+1e-9)
def zoomwhoosh(d=.55):
    y=whoosh(d,1800,160); t=t_(d); return y*(0.6+0.4*t/d)
def pop(f0=880,f1=380,d=.11):
    t=t_(d); f=f1+(f0-f1)*np.exp(-t/.018); ph=2*np.pi*np.cumsum(f)/SR
    y=np.sin(ph)*np.exp(-t/.035)*np.clip(t/.002,0,1)
    return y/np.max(np.abs(y))
def boing(d=.5):
    t=t_(d); f=320+150*np.sin(2*np.pi*11*t)*np.exp(-5*t)+80*np.exp(-3*t); ph=2*np.pi*np.cumsum(f)/SR
    y=(np.sin(ph)+.3*np.sin(2*ph))*np.exp(-t/.18)*np.clip(t/.004,0,1); return y/np.max(np.abs(y))
def crack():
    y=np.zeros(int(SR*.12))
    for k,(o,a) in enumerate([(0,1),(.028,.7),(.061,.85)]):
        b=hp(rng.standard_normal(int(SR*.006)),1800)*np.exp(-t_(.006)/.0015); place(y,b,o,a)
    y+=np.concatenate([np.sin(2*np.pi*140*t_(.05))*np.exp(-t_(.05)/.012),np.zeros(len(y)-int(SR*.05))])*.35
    return y/np.max(np.abs(y))
def swish(d=.2): return whoosh(d,900,5200)
def bloop():
    t=t_(.09); f=220+520*(t/.09)**.7; ph=2*np.pi*np.cumsum(f)/SR; y=np.sin(ph)*np.sin(np.pi*t/.09)**1.5; return y
def ding(f0=1318.5,d=1.3,soft=1.0):
    t=t_(d); y=np.sin(2*np.pi*f0*t)*np.exp(-t/.5)+.45*np.sin(2*np.pi*f0*2.76*t)*np.exp(-t/.18)+.2*np.sin(2*np.pi*f0*5.4*t)*np.exp(-t/.07)
    y*=np.clip(t/.002,0,1); return y/np.max(np.abs(y))*soft
def tick():
    y=bp(rng.standard_normal(int(SR*.02)),2000,7000)*np.exp(-t_(.02)/.003)+.5*np.sin(2*np.pi*2600*t_(.02))*np.exp(-t_(.02)/.004)
    return y/np.max(np.abs(y))
def flip():
    d=.11; t=t_(d); y=bp(rng.standard_normal(len(t)),1500,6500)*(np.exp(-t/.035)*np.clip(t/.004,0,1))*(.7+.3*np.sin(2*np.pi*45*t))
    return y/np.max(np.abs(y))
def drip():
    t=t_(.12); f=600+900*np.exp(-t/.012); ph=2*np.pi*np.cumsum(f)/SR; y=np.sin(ph)*np.exp(-t/.03)*np.clip(t/.001,0,1); return y/np.max(np.abs(y))
def sadslide(d=.62):
    t=t_(d); f=(440-210*np.clip(t/d,0,1)**1.2)*(1+.012*np.sin(2*np.pi*6*t)); ph=2*np.pi*np.cumsum(f)/SR
    y=(np.sin(ph)+.5*np.sin(2*ph)+.25*np.sin(3*ph))*np.clip(t/.03,0,1)*np.clip((d-t)/.12,0,1); y=lp(y,2500); return y/np.max(np.abs(y))
def type_click():
    d=.03; t=t_(d); y=hp(rng.standard_normal(len(t)),2500)*np.exp(-t/.0025)+.4*np.sin(2*np.pi*(1700+rng.uniform(-200,200))*t)*np.exp(-t/.005)
    return y/np.max(np.abs(y))
def stamp():
    d=.32; t=t_(d); thud=np.sin(2*np.pi*(70+60*np.exp(-t/.02))*t)*np.exp(-t/.07)
    slap=lp(rng.standard_normal(len(t)),1800)*np.exp(-t/.02)
    y=thud+.55*slap; y*=np.clip(t/.0015,0,1); return y/np.max(np.abs(y))
def pin_drop():
    d=.42; t=t_(d); f=1700-1100*(t/d)**.8; ph=2*np.pi*np.cumsum(f)/SR; wh=np.sin(ph)*np.sin(np.pi*t/d)*.35
    y=np.zeros(int(SR*.65)); y[:len(wh)]+=wh; place(y,pop(520,260,.14),.4,1.0); return y/np.max(np.abs(y))
def chime():
    y=np.zeros(int(SR*1.6))
    for k,f in enumerate([1046.5,1318.5,1568.0]): place(y,ding(f,1.2),k*.075,.7)
    return y/np.max(np.abs(y))
def chirp(f0=3200,f1=4600,d=.07):
    t=t_(d); f=np.linspace(f0,f1,len(t)); ph=2*np.pi*np.cumsum(f)/SR; return np.sin(ph)*np.sin(np.pi*t/d)**2
def birds(d=2.5,seed=1):
    r=np.random.default_rng(seed); y=np.zeros(int(SR*d))
    t0=.1
    while t0<d-.3:
        n=r.integers(2,4)
        for k in range(n): place(y,chirp(r.uniform(2800,3600),r.uniform(4000,5200),r.uniform(.05,.08)),t0+k*.09,r.uniform(.4,1))
        t0+=r.uniform(.5,1.1)
    return y
def water(d):
    n=rng.standard_normal(int(SR*d)); b=np.cumsum(n); b=b-np.convolve(b,np.ones(4800)/4800,'same'); y=lp(b,600)
    t=t_(d); y*=.6+.4*np.sin(2*np.pi*.35*t)+.2*np.sin(2*np.pi*.9*t+1); y/=np.max(np.abs(y)); return y
def fade(x,fi=.4,fo=.4):
    n=len(x); a=np.ones(n); i=int(fi*SR); o=int(fo*SR)
    if i: a[:i]=np.linspace(0,1,i)
    if o: a[-o:]=np.minimum(a[-o:],np.linspace(1,0,o))
    return x*a

sfx=np.zeros(N)
trans=[(2.7,'w'),(5.3,'w'),(9.55,'z'),(13.6,'s'),(16.6,'z'),(23.0,'w'),(29.3,'w'),(32.2,'w'),(35.85,'z'),(39.65,'w'),(43.5,'w'),(48.05,'z'),(49.8,'w'),(56.3,'s'),(58.0,'w'),(63.75,'s'),(68.75,'w'),(73.7,'w'),(78.85,'z'),(86.25,'w'),(92.4,'w'),(95.3,'w'),(100.2,'s'),(102.3,'w'),(107.25,'s')]
for tt,kind in trans:
    x=zoomwhoosh() if kind=='z' else whoosh(.4 if kind=='w' else .5,500 if kind=='w' else 900,3600 if kind=='w' else 2600,soft=kind=='s')
    place(sfx,x,tt,db(-25 if kind!='s' else -28))
def quack(d=.22,f=310):
    t=t_(d); ph=2*np.pi*np.cumsum(f*(1+.15*np.sin(np.pi*t/d))*np.ones(len(t)))/SR; saw=2*((ph/(2*np.pi))%1)-1
    y=bp(saw,700,1900,2)+.6*bp(saw,2200,3200,2); y*=np.sin(np.pi*t/d)**.5; return y/np.max(np.abs(y))
def splash(d=.7):
    t=t_(d); y=bp(rng.standard_normal(len(t)),400,5000)*np.exp(-t/.16)*np.clip(t/.01,0,1); return y/np.max(np.abs(y))
def bubbles(d=1.5):
    y=np.zeros(int(SR*d)); k=0.0
    while k<d-.1: place(y,bloop(),k,rng.uniform(.4,1)); k+=rng.uniform(.08,.22)
    return y
def buzz(d=1.4):
    t=t_(d); f=560+30*np.sin(2*np.pi*3*t); ph=2*np.pi*np.cumsum(f)/SR; saw=2*((ph/(2*np.pi))%1)-1
    y=lp(saw,3000)*np.sin(np.pi*t/d)**.6; return y/np.max(np.abs(y))
# pops de etiquetas y bocadillos
for tt in [5.8,8.2,9.7,10.75,12.75,15.9,19.2,20.3,22.2,25.98,27.0,30.7,31.06,34.85,37.73,38.64,42.3,46.2,47.41,48.4,48.5,52.1,55.0,64.08,65.64,69.7,71.4,72.9,73.15,81.47,84.21,87.9,90.9,94.2,100.5,101.5]:
    place(sfx,pop(900+rng.uniform(-120,160),400),tt,db(-27))
for i in range(3): place(sfx,pop(700+i*120,380),31.2+i*.18,db(-29))
for i in range(3): place(sfx,pop(700+i*120,380),40.0+i*.25,db(-29))
for i in range(60): place(sfx,pop(800+i*15,420,.05),59.95+i*.006*1.0+(i%6)*.01,db(-38))
for i in range(22): place(sfx,pop(700+i*30,420,.06),93.5+(i/22)*1.3,db(-34))
for i in range(8): place(sfx,pop(600+i*60,380),63.9+(i if i<2 else 3+i*.18) * (.2 if i<2 else 1)-0 if False else (63.9+i*.2 if i<2 else 66.9+(i-2)*.18),db(-30))
for i in range(4): place(sfx,pop(600+i*120,380),102.6+i*.12,db(-29))
# destellos
for tt in [1.4,22.24,28.35,53.83,57.2,107.3]: place(sfx,ding(1318.5,1.2,1),tt,db(-30))
# sellos
for tt in [4.6,15.53,48.94,62.55,82.1,90.19,96.6]: place(sfx,stamp(),tt,db(-21))
# patos
place(sfx,quack(),12.75,db(-22)); place(sfx,quack(.18,340),12.98,db(-25))
place(sfx,boing(),10.75,db(-30)); place(sfx,boing(),38.65,db(-29))
place(sfx,drip(),3.8,db(-26))
place(sfx,splash(),45.5,db(-24)); place(sfx,bubbles(2.6),45.9,db(-31))
for k in range(3): place(sfx,pop(500,200,.08),47.4+k*.5,db(-27))
place(sfx,fade(buzz(1.6),.2,.3),48.15,db(-33))
place(sfx,ding(660,1.2,1),79.5,db(-30))
place(sfx,sadslide(),84.3,db(-32))
place(sfx,chime(),57.0,db(-26)); place(sfx,chime(),101.5,db(-27))
for k in range(9): place(sfx,flip(),58.4+k*.1,db(-29))
for k in range(6): place(sfx,flip(),32.5+k*.32,db(-30))
for k in range(5): place(sfx,swish(.18),20.2+k*.08,db(-32))
place(sfx,swish(.3),21.7,db(-28))
place(sfx,whoosh(1.2,300,1500,soft=True),76.9,db(-30))
place(sfx,tick(),103.9,db(-22))
for k in range(11): place(sfx,type_click(),104.5+k*.1,db(-31))
place(sfx,chime(),107.3,db(-26))
# ambientes
for a,b in [(0,2.7),(9.55,13.6),(35.85,39.65),(63.75,68.75)]:
    d=b-a; place(sfx,fade(birds(d,int(a)+1),.2,.3),a,db(-38))
for a,b in [(0,2.7),(9.55,13.6),(35.85,39.65),(63.75,68.75),(95.3,97.6)]: place(sfx,fade(water(b-a),.25,.3),a,db(-34))
place(sfx,fade(water(4.3),.3,.4),43.5,db(-31))

# ---------- música (marimba + bajo + shaker), muy suave ----------
BPM=100; beat=60/BPM; bar=4*beat
def note(m): return 440*2**((m-69)/12)
def marimba(f,d=.9,v=1.0):
    t=t_(d); y=(np.sin(2*np.pi*f*t)*np.exp(-t/.42)+.22*np.sin(2*np.pi*f*3.93*t)*np.exp(-t/.08)+.06*np.sin(2*np.pi*f*9.2*t)*np.exp(-t/.02))
    y+=.04*hp(rng.standard_normal(len(t)),3000)*np.exp(-t/.004); y*=np.clip(t/.003,0,1); return y*v
def pluckbass(f,d=.7,v=1.0):
    t=t_(d); y=(np.sin(2*np.pi*f*t)+.25*np.sin(4*np.pi*f*t))*np.exp(-t/.25)*np.clip(t/.008,0,1); return y*v
def shaker(v=1.0):
    t=t_(.06); return bp(rng.standard_normal(len(t)),5000,11000)*np.exp(-t/.012)*np.clip(t/.004,0,1)*v
CH=[(65,[65,69,72,77]),(62,[62,65,69,74]),(58,[58,62,65,70]),(60,[60,64,67,72])]  # F Dm Bb C
mus=np.zeros(N)
nbars=int(DUR/bar)+1
for b in range(nbars):
    root,tones=CH[b%4]; t0=b*bar
    pat=[0,1,2,1,3,2,1,2] if b%2==0 else [0,2,1,3,2,1,3,1]
    for k,ix in enumerate(pat):
        tt=t0+k*beat/2
        if tt>DUR-1.2: break
        v=.9 if k%2==0 else .6
        place(mus,marimba(note(tones[ix]),v=v*(0.85+0.15*rng.random())),tt+rng.uniform(0,.006))
    for k in (0,2):
        tt=t0+k*beat
        if tt<DUR-1.2: place(mus,pluckbass(note(root-24),v=.8),tt)
    for k in range(8):
        tt=t0+k*beat/2
        if tt<DUR-1.0: place(mus,shaker(.5 if k%2 else .25),tt)
    if b%4==3 and t0+bar*.75<DUR-1.5: place(mus,ding(note(tones[3]+12),1.0,.35),t0+bar*.75)
# acorde final en la tarjeta de cierre
for i,m in enumerate([65,69,72,77]): place(mus,marimba(note(m),1.6,.8),107.25+i*.04)
mus=lp(mus,5200)
mus/=np.max(np.abs(mus))
# ducking bajo la voz
sr,v=wf.read('voz.wav'); v=v.astype(np.float64); v=v.mean(1) if v.ndim>1 else v; v/=np.max(np.abs(v))
if sr!=SR:
    from scipy.signal import resample_poly
    v=resample_poly(v,SR,sr)
env=np.sqrt(np.convolve(v**2,np.ones(int(SR*.05))/int(SR*.05),'same'))
env=np.pad(env,(0,max(0,N-len(env))))[:N]
act=np.clip(env/.06,0,1)
act=np.convolve(act,np.ones(int(SR*.25))/int(SR*.25),'same')
duck=1-0.45*act
mus*=duck
# fundido de entrada/salida
mus[:int(SR*.6)]*=np.linspace(0,1,int(SR*.6)); mus[-int(SR*.9):]*=np.linspace(1,0,int(SR*.9))
wf.write('musica.wav',SR,(mus*0.9*32767).astype(np.int16))
sfx=np.clip(sfx,-1,1)
wf.write('sfx.wav',SR,(sfx*32767).astype(np.int16))
print('ok', np.max(np.abs(sfx)), np.max(np.abs(mus)))
