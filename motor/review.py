"""Revisión fotograma a fotograma de un vídeo ya renderizado.
Uso:  python3 motor/review.py videos/<carpeta> [paso=1] [por_hoja=48]
Genera <carpeta>/revision/hoja_XXX.png con TODOS los fotogramas (paso=1) en miniatura,
cada uno con su número y su tiempo, para mirarlos uno a uno antes de codificar.
Busca: textos solapados o cortados, elementos fuera de pantalla o descuadrados,
personajes cortados, huecos vacíos, saltos raros entre fotogramas."""
import sys, os, glob
from multiprocessing import Pool
from PIL import Image, ImageDraw
D=sys.argv[1]; step=int(sys.argv[2]) if len(sys.argv)>2 else 1; per=int(sys.argv[3]) if len(sys.argv)>3 else 48
fr=sorted(glob.glob(os.path.join(D,'frames','f*.png')))[::step]
out=os.path.join(D,'revision'); os.makedirs(out,exist_ok=True)
for f in glob.glob(os.path.join(out,'hoja_*.png')): os.remove(f)
cols=8; tw,th=180,320
def thumb(f):
    im=Image.open(f); im.draft('RGB',(tw,th))
    im=im.convert('RGB'); im=im.reduce(max(1,im.width//tw)).resize((tw,th)); d=ImageDraw.Draw(im)
    n=int(os.path.basename(f)[1:-4]); d.rectangle([0,0,96,14],fill='#000'); d.text((3,2),f'{n} · {n/30:.2f}s',fill='#ff0')
    return im
def sheet(h):
    chunk=fr[h:h+per]; rows=(len(chunk)+cols-1)//cols
    sh=Image.new('RGB',(cols*(tw+4),rows*(th+4)),'#222')
    for i,f in enumerate(chunk): sh.paste(thumb(f),((i%cols)*(tw+4),(i//cols)*(th+4)))
    sh.save(os.path.join(out,f'hoja_{h//per:03d}.png'),compress_level=1)
if __name__=='__main__':
    with Pool(os.cpu_count() or 2) as p: p.map(sheet,range(0,len(fr),per))
    print('hojas:',(len(fr)+per-1)//per,'fotogramas:',len(fr),'→',out)
