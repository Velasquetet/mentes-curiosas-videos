"""Diseño sonoro propio · chocolate de Etowah (sintetizado): música de fondo muy suave + efectos ocasionales."""
import numpy as np, scipy.io.wavfile as wf
from scipy.signal import butter, sosfilt
SR=48000; DUR=109.0; N=int(SR*DUR)
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
trans=[(7.6,'w'),(21.5,'z'),(33.75,'w'),(38.85,'z'),(49.0,'w'),(55.6,'w'),(74.3,'w'),(87.25,'w'),(101.8,'w'),(106.9,'s')]
for tt,kind in trans:
    x=zoomwhoosh() if kind=='z' else whoosh(.4 if kind=='w' else .5,500 if kind=='w' else 900,3600 if kind=='w' else 2600,soft=kind=='s')
    place(sfx,x,tt,db(-25 if kind!='s' else -28))
def bubbles(d=1.5):
    y=np.zeros(int(SR*d)); k=0.0
    while k<d-.1: place(y,bloop(),k,rng.uniform(.4,1)); k+=rng.uniform(.08,.22)
    return y
def glitch(d=.3):
    t=t_(d); y=np.sign(np.sin(2*np.pi*(180+900*rng.random())*t))*.4+bp(rng.standard_normal(len(t)),800,6000)
    g=(np.floor(t*40)%2); y*=g*np.clip((d-t)/.05,0,1); return y/np.max(np.abs(y))
def thump():
    t=t_(.25); y=np.sin(2*np.pi*(60+50*np.exp(-t/.03))*t)*np.exp(-t/.08); return y/np.max(np.abs(y))
def scrape(d=2.4):
    t=t_(d); y=bp(rng.standard_normal(len(t)),2500,7000)*(.5+.5*np.abs(np.sin(2*np.pi*3*t)))*np.clip(t/.1,0,1)*np.clip((d-t)/.2,0,1); return y/np.max(np.abs(y))
def wind(d):
    n=rng.standard_normal(int(SR*d)); y=svf_sweep(n,300,900,q=1.6)+svf_sweep(n[::-1],900,300,q=1.6); return y/np.max(np.abs(y))
place(sfx,glitch(),98.05,db(-27))
for tt in [.9,3.9,6.0,19.6,24.1,25.6,27.8,30.6,32.6,36.9,38.0,41.3,45.6,46.9,53.3,54.4,56.3,61.4,65.6,67.8,69.0,71.2,73.0,78.3,82.5,87.45,88.35,88.95,89.6,90.1,91.3,94.6,96.4,102.4,102.9,103.4]:
    place(sfx,pop(900+rng.uniform(-120,160),400),tt,db(-27))
for i in range(15): place(sfx,pop(600+i*25,380,.05),29.4+i*.07,db(-34))
for i in range(4): place(sfx,pop(650+i*80,380),32.4+i*.12,db(-30))
for tt in [3.75,36.8]: place(sfx,ding(1318.5,1.2,1),tt,db(-30))
for tt in [49.31,73.1,100.6]: place(sfx,chime(),tt,db(-29))
place(sfx,stamp(),99.45,db(-23))
for tt in [15.0,99.9]: place(sfx,swish(.25),tt,db(-27))
place(sfx,boing(),15.6,db(-31))
place(sfx,fade(scrape(2.2),.1,.2),46.6,db(-36))
place(sfx,fade(scrape(2.4),.1,.2),51.9,db(-37))
place(sfx,fade(scrape(1.6),.1,.2),76.4,db(-37))
for k in range(12): place(sfx,tick(),79.6+k*.16,db(-34))
for k in range(8): place(sfx,tick(),54.1+k*.12,db(-36))
for k in range(13): place(sfx,type_click(),94.4+k*.14,db(-33))
place(sfx,chime(),107.0,db(-26))
place(sfx,fade(wind(3.0),.4,.6),23.2,db(-33))

# ---------- música (marimba + bajo + shaker), muy suave ----------
BPM=104; beat=60/BPM; bar=4*beat
def note(m): return 440*2**((m-69)/12)
def marimba(f,d=.9,v=1.0):
    t=t_(d); y=(np.sin(2*np.pi*f*t)*np.exp(-t/.42)+.22*np.sin(2*np.pi*f*3.93*t)*np.exp(-t/.08)+.06*np.sin(2*np.pi*f*9.2*t)*np.exp(-t/.02))
    y+=.04*hp(rng.standard_normal(len(t)),3000)*np.exp(-t/.004); y*=np.clip(t/.003,0,1); return y*v
def pluckbass(f,d=.7,v=1.0):
    t=t_(d); y=(np.sin(2*np.pi*f*t)+.25*np.sin(4*np.pi*f*t))*np.exp(-t/.25)*np.clip(t/.008,0,1); return y*v
def shaker(v=1.0):
    t=t_(.06); return bp(rng.standard_normal(len(t)),5000,11000)*np.exp(-t/.012)*np.clip(t/.004,0,1)*v
CH=[(57,[57,60,64,69]),(65,[65,69,72,77]),(60,[60,64,67,72]),(67,[67,71,74,79])]  # Am F C G
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
for i,m in enumerate([57,60,64,69]): place(mus,marimba(note(m),1.6,.8),107.0+i*.04)
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
