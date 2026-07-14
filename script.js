/* =====================================================
   VANTA
   script.js
===================================================== */

/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 1800);

    }

});


/* ==========================
   COUNTDOWN
========================== */

const targetDate = new Date("August 1, 2026 16:00:00").getTime();

function updateNumber(id, value) {

    const el = document.getElementById(id);

    if (!el) return;

    const text = String(value).padStart(2, "0");

    if (el.textContent !== text) {

        el.classList.remove("flip");

        void el.offsetWidth;

        el.textContent = text;

        el.classList.add("flip");

    }

}

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        updateNumber("days", 0);
        updateNumber("hours", 0);
        updateNumber("minutes", 0);
        updateNumber("seconds", 0);

        return;

    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    updateNumber("days", d);
    updateNumber("hours", h);
    updateNumber("minutes", m);
    updateNumber("seconds", s);

}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ==========================
   SCROLL REVEAL
========================== */

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},

{

    threshold: 0.15

}

);

document.querySelectorAll(".fade").forEach(el => observer.observe(el));


/* ==========================
   BACK TO TOP
========================== */

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* ==========================
   SMART NAVBAR
========================== */

const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 40) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 180;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ==========================
   FLOATING PARTICLES
========================== */

const particles = document.getElementById("particles");

if (particles) {

    for (let i = 0; i < 18; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        const size = Math.random() * 4 + 2;

        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.left = Math.random() * 100 + "vw";
        p.style.top = Math.random() * 100 + "vh";

        p.style.animationDuration = (Math.random() * 18 + 12) + "s";
        p.style.animationDelay = (Math.random() * 20) + "s";

        p.style.opacity = Math.random() * 0.35 + 0.05;

        particles.appendChild(p);

    }

}
