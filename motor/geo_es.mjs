// Genera window.GEOJ.esprov: provincias de España (península + Baleares) para NX.spainalert. Uso: node geo_es.mjs
import fs from 'fs';
import {feature} from 'topojson-client';
import {geoConicConformal, geoPath} from 'd3-geo';
const prov=JSON.parse(fs.readFileSync('node_modules/es-atlas/es/provinces.json'));
const pv=feature(prov,prov.objects.provinces).features.filter(f=>!/Palmas|Tenerife/.test(f.properties.name));
const proj=geoConicConformal().rotate([3.5,0]).parallels([36,43]).fitExtent([[0,0],[460,360]],{type:'FeatureCollection',features:pv.filter(f=>!/Ceuta|Melilla/.test(f.properties.name))});
const p=geoPath(proj).digits(1);
const g=JSON.parse(fs.readFileSync('geo.json'));
g.esprov=pv.map(f=>({n:f.properties.name,d:p(f),c:p.centroid(f).map(v=>+v.toFixed(1))}));
g.esproj={rot:3.5,note:'puntos: usar GEOJ.espt'};
const pts={Valencia:[-0.376,39.47],Alicante:[-0.48,38.35],Gandia:[-0.18,38.97],Palma:[2.65,39.57],Ibiza:[1.43,38.91],Barcelona:[2.17,41.39],'Cabrera de Mar':[2.39,41.53],Madrid:[-3.70,40.42]};
g.espt=Object.fromEntries(Object.entries(pts).map(([k,v])=>[k,proj(v).map(x=>+x.toFixed(1))]));
fs.writeFileSync('geo.json',JSON.stringify(g));
console.log(g.esprov.map(f=>f.n).join('|'));console.log(JSON.stringify(g.espt), g.esprov.reduce((a,f)=>a+f.d.length,0));
