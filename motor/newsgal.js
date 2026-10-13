const SEG=2.6;subtitle=function(){return '';};
const BIG=new Set(['live','source','stamp','calendar','clock','countdown','counter','donut','gauge','iconArray','trend','radar','hurricane','fire','storm','thermo','volcano','ballot','podium','deal','flag','coins','price','rocket','virus','medical','chip','siren','alert','phone']);
SCN=[{id:'g',a:0,b:999,draw:t=>{const i=Math.floor(t/SEG),lt=t-i*SEG;if(i>=NX_CATALOG.length)return G(150,460,1.5,0,logoS(1));const [name,fn,mode]=NX_CATALOG[i];
  const key=name.split(' ')[0];let s=G(270,150,1,0,pill(`${i+1}/${NX_CATALOG.length}`,{sz:12,w:700,fill:'url(#gRP)'}))+G(270,186,1,0,Ts(0,0,name.split('· ')[1]||name,30))+G(270,214,1,0,Tn(0,0,'NX.'+key,13,600,{fill:'#666'}));
  const body=fn(lt),k=BIG.has(key)?1.3:1;
  s+=mode==='full'?body:mode==='left'?G(60,500,1.2,0,body):G(270,520,k,0,body);
  return s;}}];
HL=[];
