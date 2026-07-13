// Countdown

const targetDate = new Date("August 1, 2026 16:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";

        return;
    }

    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);

}

setInterval(updateCountdown,1000);

updateCountdown();


// Fade Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(el=>observer.observe(el));
// BACK TO TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// LOADER

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("hide");

},1800);

});
// SMART NAVBAR

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/* ==========================
   FLOATING PARTICLES
========================== */

const particles=document.getElementById("particles");

for(let i=0;i<30;i++){

const p=document.createElement("div");

p.className="particle";

const size=Math.random()*4+2;

p.style.width=size+"px";

p.style.height=size+"px";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(Math.random()*18+12)+"s";

p.style.animationDelay=Math.random()*20+"s";

p.style.opacity=Math.random()*.35;

particles.appendChild(p);

}
