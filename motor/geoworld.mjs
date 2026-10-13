import fs from 'fs';
import {feature} from 'topojson-client';
import {geoNaturalEarth1, geoPath} from 'd3-geo';
import countries from 'i18n-iso-countries';
const es=JSON.parse(fs.readFileSync('node_modules/i18n-iso-countries/langs/es.json')); countries.registerLocale(es);
const w=JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
const fc=feature(w,w.objects.countries);
fc.features=fc.features.filter(f=>f.properties.name!=='Antarctica');
const proj=geoNaturalEarth1().fitExtent([[0,0],[1000,520]],fc);
const path=geoPath(proj).digits(1);
const out={W:1000,H:520,k:proj.scale(),t:proj.translate(),c:[]};
for(const f of fc.features){
  const id=f.id; let nameEs=id?countries.getName(String(id).padStart(3,'0'),'es',{select:'official'}):null;
  if(!nameEs)nameEs=f.properties.name;
  const alpha2=id?countries.numericToAlpha2(String(id).padStart(3,'0')):null;
  const b=path.bounds(f),c=path.centroid(f);
  // centroid of largest polygon for multi-polygons (avoid e.g. France overseas)
  let cc=c,bb=b;
  if(f.geometry.type==='MultiPolygon'){let best=null,ba=0;for(const poly of f.geometry.coordinates){const g={type:'Polygon',coordinates:poly};const a=path.area(g);if(a>ba){ba=a;best=g;}}cc=path.centroid(best);bb=path.bounds(best);}
  out.c.push({n:nameEs,en:f.properties.name,a2:alpha2,d:path(f),c:cc.map(v=>+v.toFixed(1)),b:bb.flat().map(v=>+v.toFixed(1))});
}
fs.writeFileSync('world.json',JSON.stringify(out));
console.log(out.c.length,(fs.statSync('world.json').size/1024).toFixed(0)+'KB',out.c.filter(x=>['España','Francia','Estados Unidos de América','México','Japón'].includes(x.n)).map(x=>x.n+' '+x.c));
