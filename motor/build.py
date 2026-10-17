"""Construye la página de render de un vídeo.
Uso:  python3 build.py <carpeta_del_video>
La carpeta debe contener: scenes.js (escenas + titulares) y words.json (tiempos de la voz).
Genera <carpeta>/render.html, que renderp.py convierte en fotogramas."""
import json, sys, os, re
M=os.path.dirname(os.path.abspath(__file__))
rd=lambda p: open(p, encoding='utf-8').read()
FONTS='''
@font-face{font-family:IS;font-style:normal;src:url(MOTOR/node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2)}
@font-face{font-family:IS;font-style:italic;src:url(MOTOR/node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2)}
'''+''.join(f"@font-face{{font-family:IN;font-weight:{w};src:url(MOTOR/node_modules/@fontsource/inter/files/inter-latin-{w}-normal.woff2)}}\n" for w in (400,500,600,700,800))
CSS='''
:root{--tinta:#141212;--grano:url(#gGRANO);--grano-d:#e3870f;--pipa:url(#gPIPA);--pipa-d:#c41f4e;--lenteja:url(#gLENT);--lenteja-d:#14946f;
 --garbanzo:url(#gGARB);--garbanzo-d:#4a0aa8;--cobalto:#2a37d7;--f-display:IN;--f-body:IN;}
html,body{margin:0;padding:0;background:#000}
.stage{position:relative;width:540px;height:960px;overflow:hidden;background:#c6c6c6}
.stage svg{position:absolute;inset:0;width:540px;height:960px}
.pre{position:absolute;left:-999px;top:0;font-family:IS}.pre i{font-style:italic}.pre b{font-family:IN;font-weight:700}
'''
EASE="const E={clamp:(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),back:p=>{const c1=1.9,c3=c1+1;return 1+c3*Math.pow(p-1,3)+c1*Math.pow(p-1,2)},cubic:p=>1-Math.pow(1-p,3),quart:p=>1-Math.pow(1-p,4),inOut:p=>p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2,bounce:p=>{const n=7.5625,d=2.75;if(p<1/d)return n*p*p;if(p<2/d)return n*(p-=1.5/d)*p+.75;if(p<2.5/d)return n*(p-=2.25/d)*p+.9375;return n*(p-=2.625/d)*p+.984375;}};"
def to_segments(raw):
    """Acepta el formato de Azure [{t,d,w}] (lista plana) y lo agrupa en frases
    [{s,e,txt,w:[[t,palabra],...]}], que es lo que usan subtítulos y titulares."""
    data=json.loads(raw)
    if not data or 'w' in data[0] and isinstance(data[0]['w'],list): return raw
    segs=[];cur=[]
    for i,o in enumerate(data):
        cur.append(o)
        nxt=data[i+1] if i+1<len(data) else None
        end=re.search(r'[.?!…]$',o['w']) or nxt is None or (nxt['t']-(o['t']+o['d'])>0.6)
        if end:
            segs.append({'s':round(cur[0]['t'],3),'e':round(cur[-1]['t']+cur[-1]['d'],3),'txt':' '.join(c['w'] for c in cur),'w':[[round(c['t'],3),c['w']] for c in cur]})
            cur=[]
    return json.dumps(segs,ensure_ascii=False)
def build(folder, scene_file='scenes.js', out='render.html', dur=None):
    folder=os.path.abspath(folder)
    words=to_segments(rd(os.path.join(folder,'words.json'))) if os.path.exists(os.path.join(folder,'words.json')) else '[]'
    js="const INK='var(--tinta)';"+EASE+"\n"
    for f in ['rig.js','emo.js','pers.js','charstyle.js']: js+=rd(os.path.join(M,f))+"\n"
    js+="window.WORDS="+words+";\nwindow.GEOJ="+rd(os.path.join(M,'geo.json'))+";\nwindow.WORLDJ="+rd(os.path.join(M,'world.json'))+";\n"
    for f in ['kit.js','land.js','fauna.js','cast.js','main.js','news.js','news2.js','tecnicas.js']:
        if os.path.exists(os.path.join(M,f)): js+=rd(os.path.join(M,f))+"\n"
    js+=rd(os.path.join(folder,scene_file))+"\n"
    if dur: js+=f"window.DUR={dur};\n"
    rel=os.path.relpath(M,folder)
    html=f'''<!doctype html><html><head><meta charset="utf-8"><style>{FONTS.replace('MOTOR',rel)}{CSS}</style></head><body>
<div class="pre">Aa <i>Aa</i> <b>Aa</b></div><div class="stage" id="stage"><svg id="art" viewBox="0 0 540 960" xmlns="http://www.w3.org/2000/svg"></svg></div>
<script>{js}</script></body></html>'''
    open(os.path.join(folder,out),'w',encoding='utf-8').write(html); print('ok', os.path.join(folder,out))
if __name__=='__main__':
    build(sys.argv[1], *(sys.argv[2:3] or []))
