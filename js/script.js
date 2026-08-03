
/* ===============================
      TYPING EFFECT
=============================== */

const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Python Developer",
    "BCA Graduate"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent = currentRole.substring(0, charIndex++);
    } else {

        typing.textContent = currentRole.substring(0, charIndex--);
    }

    if (!deleting && charIndex === currentRole.length + 1) {

        deleting = true;
        setTimeout(typeEffect, 1200);
        return;

    }

    if (deleting && charIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();

/* SCROLL TO TOP */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ===============================
      SKILL BAR ANIMATION
=============================== */

const skillBars = document.querySelectorAll(".skill-bar");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.dataset.width;

            entry.target.style.width = width;

        }

    });

}, {

    threshold: .5

});

skillBars.forEach(bar => {

    bar.style.width = "0";
    bar.style.transition = "2s";

    skillObserver.observe(bar);

});

/* ===============================
      COUNTER
=============================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            function updateCounter() {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            }

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: .5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ===============================
      ACTIVE NAVBAR
=============================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

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

/* ===============================
      FADE-IN ANIMATION
=============================== */

const hiddenElements = document.querySelectorAll(".card, .timeline-item");

const fadeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    fadeObserver.observe(el);

});

/* ===============================
      CONTACT FORM
=============================== */

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent.");

        form.reset();

    });

}

/* ===============================
      CURRENT YEAR
=============================== */

const year = document.getElementById("year");

if (year) {

    year.innerHTML = new Date().getFullYear();

}

/* ===============================
      SMOOTH SCROLL
=============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});