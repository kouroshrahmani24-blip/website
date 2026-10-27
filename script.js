// تمام تنظیمات سایت را از اینجا تغییر بده.
const SITE={
 name:"نام سایت شما",
 badge:"خوش آمدید",
 heroTitle:"اینجا پروژه‌های من را ببینید",
 heroText:"پروژه‌ها، برنامه‌ها و کارهایی که ساخته‌ام را اینجا معرفی می‌کنم.",
 projectsTitle:"پروژه‌های من",
 aboutTitle:"درباره من",
 aboutText:"متن معرفی خودت را اینجا بنویس. این بخش کاملاً قابل تغییر است.",
 contactTitle:"با من در ارتباط باشید",
 footerText:"© 2026 نام سایت شما",
 projects:[
  {title:"Vocabulary Pro+",description:"برنامه آموزش و تمرین لغات انگلیسی.",icon:"📚",tags:["Python","Tkinter"],link:"#"},
  {title:"Toolbox Pro",description:"مجموعه ابزارهای کاربردی و محاسباتی.",icon:"🧰",tags:["Python","Desktop"],link:"#"},
  {title:"پروژه جدید",description:"این کارت را با پروژه بعدی خودت جایگزین کن.",icon:"🚀",tags:["New"],link:"#"}
 ],
 contacts:[{name:"GitHub",url:"https://github.com/"},{name:"Telegram",url:"#"},{name:"Instagram",url:"#"}]
};
const $=id=>document.getElementById(id);
function esc(x){return String(x).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");}
function render(){
 document.title=SITE.name;$("brand").textContent=SITE.name;$("badge").textContent=SITE.badge;
 $("heroTitle").textContent=SITE.heroTitle;$("heroText").textContent=SITE.heroText;
 $("projectsTitle").textContent=SITE.projectsTitle;$("aboutTitle").textContent=SITE.aboutTitle;
 $("aboutText").textContent=SITE.aboutText;$("contactTitle").textContent=SITE.contactTitle;
 $("footer").textContent=SITE.footerText;$("count").textContent=`${SITE.projects.length} پروژه`;
 $("grid").innerHTML=SITE.projects.map(p=>`<article class="project"><div class="icon">${p.icon||"📁"}</div><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>${p.link&&p.link!="#"?`<a href="${p.link}" target="_blank">مشاهده پروژه ←</a>`:""}</article>`).join("");
 $("links").innerHTML=SITE.contacts.map(c=>`<a class="link" href="${c.url}" target="_blank">${esc(c.name)}</a>`).join("");
}
$("theme").onclick=()=>{document.body.classList.toggle("light");$("theme").textContent=document.body.classList.contains("light")?"☀":"☾"};
render();