import sys, os, time
from playwright.sync_api import sync_playwright
V=os.path.abspath(os.environ.get('DIR','.')); FPS=30
K=int(sys.argv[1]); N=int(sys.argv[2]); a=float(sys.argv[3]) if len(sys.argv)>3 else 0; b=float(sys.argv[4]) if len(sys.argv)>4 else None
out=sys.argv[5] if len(sys.argv)>5 else 'frames'
os.makedirs(f'{V}/{out}',exist_ok=True)
with sync_playwright() as pw:
    br=pw.chromium.launch(); p=br.new_page(viewport={'width':540,'height':960},device_scale_factor=float(os.environ.get('DPR','2')))
    p.goto('file://'+V+'/'+os.environ.get('PAGE','render.html')); p.wait_for_timeout(800); p.evaluate("document.fonts.ready")
    dur=p.evaluate("DUR"); n=int(round(dur*FPS)); i0=int(round(a*FPS)); i1=n if b is None else int(round(b*FPS))
    t0=time.time();c=0
    for i in range(i0,i1):
        if (i-i0)%N!=K: continue
        if os.environ.get('SKIP') and os.path.exists(f'{V}/{out}/f{i:04d}.png'): continue
        p.evaluate(f"render({i/FPS})")
        p.locator('#stage').screenshot(path=f'{V}/{out}/f{i:04d}.png'); c+=1
    print('done',K,c,round(time.time()-t0,1)); br.close()
