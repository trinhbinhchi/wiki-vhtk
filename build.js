
const fs=require("fs"),path=require("path");
const root=__dirname,dir=path.join(root,"content","articles");
const settingsPath=path.join(root,"content","settings.json");
const settings=fs.existsSync(settingsPath)?JSON.parse(fs.readFileSync(settingsPath,"utf8")):{};
const sections=fs.readdirSync(dir).filter(f=>f.endsWith(".json")).map(file=>{
  const d=JSON.parse(fs.readFileSync(path.join(dir,file),"utf8"));
  return {
    id:"article-"+file.replace(/\.json$/,""),
    title:d.title||file,
    icon:d.icon||"✦",
    icon_html:d.icon_html||"",
    order:Number(d.order||999),
    visible:d.visible!==false,
    section_id:d.section_id,
    section_class:d.section_class||"article",
    section_html:d.section_html||""
  };
}).sort((a,b)=>a.order-b.order);
fs.writeFileSync(path.join(root,"content","site.json"),JSON.stringify({...settings,sections},null,2),"utf8");
console.log(`Built ${sections.length} exact HTML articles`);
