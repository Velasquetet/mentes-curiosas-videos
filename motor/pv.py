# uso: python3 pv.py page.html t1,t2,... salida.png [cols] [escala] [dpr]
import sys, math, os
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw
D=os.path.abspath(os.environ.get('DIR','.'))
page=sys.argv[1]; ts=[float(x) for x in sys.argv[2].split(',')]; out=sys.argv[3]
cols=int(sys.argv[4]) if len(sys.argv)>4 else min(5,len(ts)); sc=float(sys.argv[5]) if len(sys.argv)>5 else .5; dpr=float(sys.argv[6]) if len(sys.argv)>6 else 1
ims=[];errs=[]
with sync_playwright() as pw:
    b=pw.chromium.launch(); p=b.new_page(viewport={'width':540,'height':960},device_scale_factor=dpr)
    p.on('console',lambda m: errs.append(m.text) if m.type in('error','warning') else None)
    p.on('pageerror',lambda e: errs.append(str(e)))
    p.goto('file://'+D+'/'+page); p.wait_for_timeout(600); p.evaluate("document.fonts.ready")
    for t in ts:
        p.evaluate(f"render({t})"); fn=f'/tmp/pv_{t}.png'; p.locator('#stage').screenshot(path=fn); ims.append((t,Image.open(fn).convert('RGB')))
    b.close()
w=int(540*dpr*sc); h=int(960*dpr*sc); rows=math.ceil(len(ims)/cols)
sheet=Image.new('RGB',(cols*w+(cols-1)*6,rows*h+(rows-1)*6),'#222')
for i,(t,im) in enumerate(ims):
    im=im.resize((w,h),Image.LANCZOS); d=ImageDraw.Draw(im); d.rectangle([0,0,58,18],fill='#000'); d.text((4,3),f'{t:.2f}',fill='#ff0')
    sheet.paste(im,((i%cols)*(w+6),(i//cols)*(h+6)))
sheet.save(out); print('saved',out, 'errors:',errs[:8])
