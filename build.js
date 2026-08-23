const fs=require("fs"),path=require("path");

function escAttr(s){return String(s??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function renderAttrs(attrs){
  if(!attrs)return "";
  return Object.entries(attrs).map(([k,v])=>{
    if(v===null||v===false)return "";
    if(v===true||v==="")return ` ${k}`;
    const val=Array.isArray(v)?v.join(" "):v;
    return ` ${k}="${escAttr(val)}"`;
  }).join("");
}
function renderBlock(b){
  if(!b)return "";
  const cls=b.class?` class="${escAttr(b.class)}"`:"";
  const sty=b.style?` style="${escAttr(b.style)}"`:"";
  const attrs=renderAttrs(b.attrs);
  if(b.type==="heading"){const l=Math.max(1,Math.min(6,Number(b.level||3)));return `<h${l}${cls}${sty}${attrs}>${b.html??b.text??""}</h${l}>`}
  if(b.type==="paragraph")return `<p${cls}${sty}${attrs}>${b.html||""}</p>`;
  if(b.type==="list"){const t=b.ordered?"ol":"ul";return `<${t}${cls}${sty}${attrs}>${(b.items||[]).map(x=>`<li>${x}</li>`).join("")}</${t}>`}
  if(b.type==="callout")return `<div${cls||' class="guide-callout"'}${sty}${attrs}>${b.html||""}</div>`;
  if(b.type==="container"){
    const tag=(b.tag||"div").toLowerCase();
    return `<${tag}${cls}${sty}${attrs}>${b.html||""}</${tag}>`;
  }
  if(b.type==="image")return `<img src="${escAttr(b.src||"")}" alt="${escAttr(b.alt||"")}"${cls}${sty}${attrs}>`;
  if(b.type==="video"){if(b.tag==="video")return `<video src="${escAttr(b.src||"")}" controls${cls}${sty}${attrs}></video>`;return `<iframe src="${escAttr(b.src||"")}" title="${escAttr(b.title||"")}" allowfullscreen${cls}${sty}${attrs}></iframe>`}
  return b.html||"";
}
function renderBlocks(d){
  const body=(d.blocks||[]).map(renderBlock).join("\n");
  const tpl=d.structured_template_html||"__VHTK_BLOCKS_PLACEHOLDER__";
  if(tpl.includes("__VHTK_BLOCKS_PLACEHOLDER__"))return tpl.replace("__VHTK_BLOCKS_PLACEHOLDER__",body);
  return d.legacy_section_html||d.section_html||body;
}

const c=path.join(__dirname,"content"),a=path.join(c,"articles");
const settings=JSON.parse(fs.readFileSync(path.join(c,"settings.json"),"utf8"));
const sections=fs.readdirSync(a).filter(f=>f.endsWith(".json")).map(file=>{
 const d=JSON.parse(fs.readFileSync(path.join(a,file),"utf8"));
 return {id:"article-"+file.replace(/\.json$/,""),...d,section_html:(d.blocks&&d.blocks.length)?renderBlocks(d):(d.section_html||d.body_html||"")};
}).sort((x,y)=>(x.order||999)-(y.order||999));
fs.writeFileSync(path.join(c,"site.json"),JSON.stringify({...settings,sections},null,2),"utf8");
console.log("Built",sections.length,"structured articles v48");
