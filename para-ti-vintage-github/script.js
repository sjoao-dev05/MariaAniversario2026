const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const envelope=document.getElementById("envelope");
const letter=document.getElementById("loveLetter");
const tap=document.getElementById("tapText");
let opened=false;
envelope.addEventListener("click",()=>{
  opened=!opened;
  envelope.classList.toggle("open",opened);
  letter.classList.toggle("show",opened);
  tap.textContent=opened?"♡":"toca para abrir";
  if(opened){burst();setTimeout(()=>letter.scrollIntoView({behavior:"smooth",block:"center"}),750)}
});
function burst(){
  const box=document.getElementById("hearts");
  for(let i=0;i<18;i++){
    const h=document.createElement("span"); h.textContent=Math.random()>.45?"♡":"✦";
    h.style.left=(45+Math.random()*10)+"vw"; h.style.top="58vh";
    h.style.setProperty("--x",(Math.random()*240-120)+"px");
    h.style.animationDelay=(Math.random()*.35)+"s"; box.appendChild(h);
    setTimeout(()=>h.remove(),2300);
  }
}