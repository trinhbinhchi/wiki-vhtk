const fs=require("fs"),path=require("path");
const c=path.join(__dirname,"content"),a=path.join(c,"articles");
const settings=JSON.parse(fs.readFileSync(path.join(c,"settings.json"),"utf8"));

const sections=fs.readdirSync(a)
  .filter(f=>f.endsWith(".json"))
  .map(file=>{
    const d=JSON.parse(fs.readFileSync(path.join(a,file),"utf8"));
    return {
      id:"article-"+file.replace(/\.json$/,""),
      ...d,
      section_html:d.section_html||d.legacy_section_html||d.body_html||""
    };
  })
  .sort((x,y)=>(x.order||999)-(y.order||999));

fs.writeFileSync(path.join(c,"site.json"),JSON.stringify({...settings,sections},null,2),"utf8");
console.log("Built",sections.length,"HTML-primary articles");
