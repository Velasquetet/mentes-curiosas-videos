"""Diseño sonoro propio · reptiles (sintetizado): música de fondo muy suave + efectos ocasionales."""
import numpy as np, scipy.io.wavfile as wf
from scipy.signal import butter, sosfilt
SR=48000; DUR=123.2; N=int(SR*DUR)
rng=np.random.default_rng(16)
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
trans=[(1.95,'w'),(4.7,'w'),(9.0,'z'),(10.85,'s'),(11.65,'w'),(14.0,'z'),(15.6,'w'),(18.55,'z'),(22.25,'w'),(24.95,'w'),(29.25,'s'),(31.1,'w'),(33.65,'w'),(37.05,'s'),(40.15,'z'),(42.55,'z'),(43.8,'w'),(47.3,'w'),(51.1,'w'),(52.3,'s'),(55.85,'w'),(59.45,'w'),(61.7,'w'),(66.05,'w'),(68.4,'z'),(71.1,'w'),(74.05,'w'),(77.3,'w'),(79.7,'z'),(82.25,'w'),(85.85,'w'),(87.35,'z'),(92.1,'w'),(94.05,'z'),(97.45,'s'),(99.45,'w'),(107.85,'z'),(108.85,'w'),(111.7,'s'),(114.95,'z'),(117.45,'w'),(121.3,'s')]
for tt,kind in trans:
    x=zoomwhoosh() if kind=='z' else whoosh(.4 if kind=='w' else .5,500 if kind=='w' else 900,3600 if kind=='w' else 2600,soft=kind=='s')
    place(sfx,x,tt,db(-25 if kind!='s' else -28))
def growl(d=1.0,f=300):
    t=t_(d); n=lp(rng.standard_normal(len(t)),f)*(1+.6*np.sin(2*np.pi*28*t)); y=n*np.sin(np.pi*t/d)**1.2+.4*np.sin(2*np.pi*70*t)*np.sin(np.pi*t/d)
    return y/np.max(np.abs(y))
def bellow(d=.9):
    t=t_(d); f=55+8*np.sin(2*np.pi*3*t); ph=2*np.pi*np.cumsum(f)/SR; y=(np.sin(ph)+.6*np.sin(2*ph)+.3*np.sin(3*ph))*(1+.5*np.sin(2*np.pi*22*t))
    y+=.4*lp(rng.standard_normal(len(t)),400); y*=np.sin(np.pi*t/d)**.8; return y/np.max(np.abs(y))
def geck():
    y=np.zeros(int(SR*.75)); t=t_(.14); a=bp(rng.standard_normal(len(t)),900,3200)*(1+np.sin(2*np.pi*90*t))*np.sin(np.pi*t/.14)
    place(y,a/np.max(np.abs(a)),0,1)
    t=t_(.42); f=520-120*t/.42; ph=2*np.pi*np.cumsum(f)/SR; o=(np.sin(ph)+.5*np.sin(2*ph)+.25*np.sin(3*ph))*np.sin(np.pi*t/.42)**.6
    place(y,o/np.max(np.abs(o)),.22,.9); return y
def squeal(d=.6):
    t=t_(d); f=3200-1200*t/d+300*np.sin(2*np.pi*14*t); ph=2*np.pi*np.cumsum(f)/SR; y=(np.sin(ph)+.3*np.sin(2*ph))*np.sin(np.pi*t/d)**.7; return y/np.max(np.abs(y))
def babycall():
    t=t_(.16); f=700+500*np.sin(np.pi*t/.16); ph=2*np.pi*np.cumsum(f)/SR; return np.sin(ph)*np.sin(np.pi*t/.16)**1.5
def crickets(d):
    y=np.zeros(int(SR*d)); k=0.0
    while k<d-.1:
        for j in range(3): place(y,chirp(4300,4500,.03),k+j*.05,.6)
        k+=.55
    return y
def sand(d):
    n=bp(rng.standard_normal(int(SR*d)),300,3000); t=t_(d); e=(.5+.5*np.sin(2*np.pi*4.4*t))**2; return n*e/np.max(np.abs(n))
# pops de etiquetas y bocadillos
for tt in [1.25,3.94,9.43,14.54,14.8,19.56,21.2,21.5,30.2,31.2,32.05,32.75,34.29,35.36,38.44,41.73,42.9,47.73,52.92,58.3,59.99,63.36,64.51,66.42,71.5,71.71,75.44,78.33,78.91,87.08,90.08,90.6,95.85,108.2,109.3,109.9,115.3,116.66]:
    place(sfx,pop(900+rng.uniform(-120,160),400),tt,db(-27))
for i in range(4): place(sfx,pop(700+i*120,380),6.6+i*.12,db(-29)); place(sfx,bloop(),7.9+i*.1,db(-30))
for i in range(12): place(sfx,pop(800+i*40,420,.07),25.05+i*.08,db(-32))
for i in range(4): place(sfx,pop(600+i*120,380),117.7+i*.12,db(-29))
# destellos
for tt in [1.23,19.56,39.52,98.72,107.95]: place(sfx,ding(1318.5,1.2,1),tt,db(-30))
# sellos
for tt in [10.95,27.07,46.79,60.94,70.3,72.72,76.6,110.56]: place(sfx,stamp(),tt,db(-21))
# tortugas: chasquidos, gruñidos, chirridos
for k in range(6): place(sfx,tick(),1.3+k*.12,db(-26))
for k in range(5): place(sfx,tick(),21.15+k*.13,db(-26))
place(sfx,growl(.6,500),21.3,db(-28))
for k in range(4): place(sfx,tick(),31.2+k*.11,db(-24))
place(sfx,growl(.55,520),32.05,db(-25))
for k in range(3): place(sfx,chirp(2400,3300,.08),32.75+k*.12,db(-25))
place(sfx,growl(.7,240),10.05,db(-32))
place(sfx,chime(),35.36,db(-28)); place(sfx,stamp(),36.22,db(-23)); place(sfx,boing(),36.3,db(-30))
place(sfx,boing(),38.5,db(-30))
# cocodrilos: llamadas desde el huevo, cascarón, arena
for k in range(10): place(sfx,babycall(),42.0+k*.33,db(-29))
for k in range(6): place(sfx,babycall(),44.2+k*.3,db(-30))
for k in range(5): place(sfx,crack(),45.3+k*.11,db(-26))
for k in range(5): place(sfx,pop(700+k*80,380),46.2+k*.06,db(-29))
place(sfx,fade(sand(1.6),.1,.2),49.0,db(-30))
# geco
place(sfx,geck(),55.15,db(-20)); place(sfx,geck(),55.2,db(-34))
place(sfx,fade(bp(rng.standard_normal(int(SR*3.2)),200,4000),.2,.4),57.0,db(-38))
place(sfx,whoosh(.8,300,1600),58.6,db(-29)); place(sfx,whoosh(.8,300,1600),59.1,db(-31))
for k in range(6): place(sfx,tick(),59.55+k*.06,db(-29))
for k in range(3): place(sfx,swish(.18),62.39+k*.6,db(-31))
# aligátores
place(sfx,bellow(.9),67.65,db(-19)); place(sfx,bellow(.7),71.75,db(-22)); place(sfx,bellow(.8),74.2,db(-22))
# lagartija
place(sfx,swish(.6),80.1,db(-28)); place(sfx,squeal(.65),81.5,db(-25))
place(sfx,sadslide(),84.11,db(-33))
for k in range(12): place(sfx,tick(),84.9+k*.09,db(-31))
# gavial: ¡pop!
place(sfx,pop(300,120,.18),93.5,db(-16)); place(sfx,bloop(),93.62,db(-24)); place(sfx,bloop(),93.75,db(-27))
for k in range(10): place(sfx,tick(),94.4+k*.1,db(-32))
place(sfx,pop(260,110,.14),95.9,db(-24))
# giro, árbol, pez, debate
place(sfx,chime(),97.5,db(-26))
for k in range(5): place(sfx,pop(600+k*90,380),100.1+k*.15,db(-30))
place(sfx,ding(880,1.4,1),104.6,db(-28))
for k in range(14): place(sfx,tick(),105.5+k*.07,db(-31))
place(sfx,boing(),109.5,db(-30))
# final
place(sfx,tick(),119.0,db(-22))
for k in range(11): place(sfx,type_click(),119.5+k*.1,db(-31))
place(sfx,chime(),121.4,db(-26))
# ambientes
for a,b in [(0,1.95),(40.15,42.55),(47.3,51.1),(111.7,114.95)]:
    d=b-a; place(sfx,fade(birds(d,int(a)+1),.2,.3),a,db(-38))
for a,b in [(0,1.95),(66.05,68.4),(87.35,92.1)]: place(sfx,fade(water(b-a),.25,.3),a,db(-34))
place(sfx,fade(water(1.95),.2,.3),92.1,db(-30))
place(sfx,fade(crickets(3.5),.2,.3),52.3,db(-34))

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
for i,m in enumerate([65,69,72,77]): place(mus,marimba(note(m),1.6,.8),121.3+i*.04)
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
