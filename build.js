const fs=require("fs"),path=require("path");

function escAttr(s){return String(s??"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}
function renderBlock(b){
  if(!b)return "";
  const cls=b.class?` class="${escAttr(b.class)}"`:"";
  const sty=b.style?` style="${escAttr(b.style)}"`:"";
  if(b.type==="heading"){const l=Math.max(1,Math.min(6,Number(b.level||3)));return `<h${l}${cls}${sty}>${b.text||""}</h${l}>`}
  if(b.type==="paragraph")return `<p${cls}${sty}>${b.html||""}</p>`;
  if(b.type==="list"){const t=b.ordered?"ol":"ul";return `<${t}${cls}${sty}>${(b.items||[]).map(x=>`<li>${x}</li>`).join("")}</${t}>`}
  if(b.type==="callout")return `<div${cls||' class="guide-callout"'}${sty}>${b.html||""}</div>`;
  if(b.type==="image")return `<img src="${escAttr(b.src||"")}" alt="${escAttr(b.alt||"")}"${cls}${sty}>`;
  if(b.type==="video"){if(b.tag==="video")return `<video src="${escAttr(b.src||"")}" controls${cls}></video>`;return `<iframe src="${escAttr(b.src||"")}" title="${escAttr(b.title||"")}" allowfullscreen${cls}></iframe>`}
  if(b.type==="video_box")return `<div${cls||' class="rework-video-box"'}>${b.html||""}</div>`;
  return b.html||"";
}
function renderBlocks(d){
  const a=d.blocks||[],p=a.filter(b=>b.role==="prefix").map(renderBlock).join(""),body=a.filter(b=>b.role!=="prefix").map(renderBlock).join("\n");
  const m=d.block_meta||{},tag=m.container_tag||"div",cls=m.container_class||"article-content";
  return p+`<${tag} class="${escAttr(cls)}">${body}</${tag}>`;
}

const c=path.join(__dirname,"content"),a=path.join(c,"articles");
const settings=JSON.parse(fs.readFileSync(path.join(c,"settings.json"),"utf8"));
const sections=fs.readdirSync(a).filter(f=>f.endsWith(".json")).map(file=>{
  const d=JSON.parse(fs.readFileSync(path.join(a,file),"utf8"));
  return {id:"article-"+file.replace(/\.json$/,""),...d,section_html:(d.blocks&&d.blocks.length)?renderBlocks(d):(d.section_html||d.body_html||"")};
}).sort((x,y)=>(x.order||999)-(y.order||999));
fs.writeFileSync(path.join(c,"site.json"),JSON.stringify({...settings,sections},null,2),"utf8");
console.log("Built",sections.length,"structured articles");
