"""Diseño sonoro propio (sintetizado): música de fondo muy suave + efectos ocasionales."""
import numpy as np, scipy.io.wavfile as wf
from scipy.signal import butter, sosfilt
SR=48000; DUR=130.1; N=int(SR*DUR)
rng=np.random.default_rng(7)
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

def rumble(d):
    n=rng.standard_normal(int(SR*d)); y=lp(n,120,4); y/=np.max(np.abs(y)); return y
def thud():
    d=.35; t=t_(d); y=np.sin(2*np.pi*(45+40*np.exp(-t/.03))*t)*np.exp(-t/.09); return y/np.max(np.abs(y))
def beam(d):
    t=t_(d); y=bp(rng.standard_normal(len(t)),900,4000)*(.6+.4*np.sin(2*np.pi*3*t)); y=fade(y,.05,.5); return y/np.max(np.abs(y))
def sparkle(d=.9):
    y=np.zeros(int(SR*d))
    for k in range(7): place(y,ding(1568*2**(k/12*2),.5,.6),k*.06,.6)
    return y/np.max(np.abs(y))
def splash():
    d=.7; t=t_(d); y=bp(rng.standard_normal(len(t)),400,5000)*np.exp(-t/.16)*np.clip(t/.004,0,1); y+=.5*thud()[:len(t)] if len(thud())>=len(t) else 0
    return y/np.max(np.abs(y))

sfx=np.zeros(N)
TR=[(8.6,'w'),(13.1,'w'),(19.45,'w'),(20.8,'w'),(39.3,'w'),(46.45,'w'),(52.6,'z'),(58.95,'s'),(63.0,'w'),(64.5,'w'),(71.4,'w'),(75.2,'s'),(80.9,'w'),(86.45,'z'),(95.95,'w'),(103.35,'s'),(110.0,'z'),(118.15,'w'),(122.4,'w'),(128.55,'s')]
for tt,kind in TR:
    x=zoomwhoosh() if kind=='z' else whoosh(.4 if kind=='w' else .5,500 if kind=='w' else 900,3600 if kind=='w' else 2600,soft=kind=='s')
    place(sfx,x,tt,db(-26 if kind!='s' else -29))
# gancho bajo el agua
place(sfx,fade(water(8.8),.02,.6),0.0,db(-24))
for k in range(5): place(sfx,bloop(),.05+k*.37,db(-30))
place(sfx,sparkle(),1.85,db(-27)); place(sfx,ding(1760,1.0,.8),3.4,db(-30))
place(sfx,stamp(),4.1,db(-23))
place(sfx,pop(),5.3,db(-30)); place(sfx,ding(1318.5,1.0),5.7,db(-31))
for tt in [6.75,7.6]: place(sfx,bloop(),tt,db(-27)); place(sfx,sparkle(.6),tt+.25,db(-31))
place(sfx,pop(900,450),6.8,db(-30))
# Xochimilco
place(sfx,fade(birds(4.3,3),.3,.6),8.7,db(-31)); place(sfx,fade(water(4.4),.3,.5)*.6,8.6,db(-30))
place(sfx,bloop(),9.2,db(-26))
# rayos X
place(sfx,crack(),14.6,db(-27)); place(sfx,beam(1.3),14.9,db(-29))
# ¿cómo lo hace?
place(sfx,thud(),19.6,db(-20))
for k in range(5): place(sfx,tick(),22.3+k*.5,db(-33))
for k in range(8): place(sfx,bloop(),25.6+k*.2,db(-33))
place(sfx,zoomwhoosh(.6)[::-1].copy(),28.6,db(-29))
place(sfx,chime(),35.05,db(-31)); place(sfx,sparkle(),37.7,db(-29))
# nosotros
place(sfx,stamp(),41.1,db(-24)); place(sfx,sadslide(),41.3,db(-32))
for tt in [43.2,45.6]: place(sfx,ding(1318.5,1.0),tt,db(-31))
place(sfx,stamp(),49.2,db(-25)); place(sfx,crack(),51.7,db(-28)); place(sfx,stamp(),57.7,db(-25))
for k in range(8): place(sfx,tick(),60.3+k*.1,db(-34))
for k in range(6): place(sfx,bloop(),62.1+k*.1,db(-31))
place(sfx,thud(),63.2,db(-20))
for k in range(6): place(sfx,tick(),67.6+k*.1,db(-34))
place(sfx,chime(),68.3,db(-31))
place(sfx,stamp(),74.0,db(-25))
for k in range(8): place(sfx,tick(),75.4+k*.45,db(-33))
place(sfx,thud(),79.0,db(-22)); place(sfx,boing(),79.05,db(-33))
for tt in [81.0,81.7,82.4]: place(sfx,bloop(),tt,db(-29))
place(sfx,chime(),84.4,db(-31))
for k in range(14): place(sfx,flip(),89.3+k*.11,db(-31))
place(sfx,stamp(),93.8,db(-25))
place(sfx,whoosh(.5,2600,400),100.9,db(-28)); place(sfx,splash(),101.6,db(-24)); place(sfx,sparkle(),102.3,db(-29))
place(sfx,fade(birds(6.4,5),.3,.6),103.5,db(-31)); place(sfx,fade(water(6.6),.3,.5)*.6,103.4,db(-30))
for k in range(8): place(sfx,tick(),110.4+k*.1,db(-34))
place(sfx,sadslide(),115.4,db(-30)); place(sfx,stamp(),117.2,db(-24))
place(sfx,sadslide(),121.2,db(-33))
place(sfx,chime(),128.6,db(-30))
for tt in [2.2,9.3,10.0,10.5,12.0,15.9,16.75,18.6,22.6,23.2,27.6,29.5,30.6,32.85,33.35,33.95,34.5,42.7,53.4,54.3,56.7,60.3,66.4,69.1,70.5,75.6,77.7,79.4,83.2,84.4,85.4,88.3,90.3,91.6,98.0,99.3,107.2,108.6,124.6,124.9,125.2,127.2]: place(sfx,pop(760+rng.uniform(-80,100),360),tt,db(-32))
# ---------- música (marimba + bajo + shaker), suave, en re mayor ----------
BPM=84; beat=60/BPM; bar=4*beat
def note(m): return 440*2**((m-69)/12)
def marimba(f,d=.9,v=1.0):
    t=t_(d); y=(np.sin(2*np.pi*f*t)*np.exp(-t/.42)+.22*np.sin(2*np.pi*f*3.93*t)*np.exp(-t/.08)+.06*np.sin(2*np.pi*f*9.2*t)*np.exp(-t/.02))
    y+=.04*hp(rng.standard_normal(len(t)),3000)*np.exp(-t/.004); y*=np.clip(t/.003,0,1); return y*v
def pluckbass(f,d=.7,v=1.0):
    t=t_(d); y=(np.sin(2*np.pi*f*t)+.25*np.sin(4*np.pi*f*t))*np.exp(-t/.25)*np.clip(t/.008,0,1); return y*v
def shaker(v=1.0):
    t=t_(.06); return bp(rng.standard_normal(len(t)),5000,11000)*np.exp(-t/.012)*np.clip(t/.004,0,1)*v
CH=[(62,[62,66,69,74]),(59,[59,62,66,71]),(55,[55,59,62,67]),(57,[57,61,64,69])]  # D Bm G A
mus=np.zeros(N)
nbars=int(DUR/bar)+1
for b in range(nbars):
    root,tones=CH[b%4]; t0=b*bar
    pat=[0,2,1,3,2,1,3,2] if b%2==0 else [0,1,2,3,1,2,3,1]
    for k,ix in enumerate(pat):
        tt=t0+k*beat/2
        if tt>DUR-1.8: break
        v=.9 if k%2==0 else .6
        place(mus,marimba(note(tones[ix]),v=v*(0.85+0.15*rng.random())),tt+rng.uniform(0,.006))
    for k in (0,2):
        tt=t0+k*beat
        if tt<DUR-1.8: place(mus,pluckbass(note(root-24),v=.8),tt)
    for k in range(8):
        tt=t0+k*beat/2
        if tt<DUR-1.6: place(mus,shaker(.25 if k%2 else .12),tt)
for i,m in enumerate([62,66,69,74]): place(mus,marimba(note(m),1.4,.8),128.6+i*.04)
mus=lp(mus,5200)
mus/=np.max(np.abs(mus))
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
mus[:int(SR*.6)]*=np.linspace(0,1,int(SR*.6)); mus[-int(SR*.9):]*=np.linspace(1,0,int(SR*.9))
wf.write('musica.wav',SR,(mus*0.9*32767).astype(np.int16))
sfx=np.clip(sfx,-1,1)
wf.write('sfx.wav',SR,(sfx*32767).astype(np.int16))
print('ok', np.max(np.abs(sfx)), np.max(np.abs(mus)))
