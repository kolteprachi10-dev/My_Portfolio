
 // ===============================
// TYPING ANIMATION
// ===============================

const texts = [
    "Aspiring Frontend Developer",
    "Learning MERN Stack",
    "Open To Internship Opportunities",
    "Web Development Enthusiast",
    "Future Full Stack Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    if (!typingElement) return;

    const currentText = texts[textIndex];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex);
        charIndex++;

        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ===============================
// HAMBURGER MENU
// ===============================

function toggleMenu() {
    document.getElementById("menu")?.classList.toggle("active");
}

// ===============================
// CLOSE MOBILE MENU
// ===============================

const navLinks = document.querySelectorAll("#menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu")?.classList.remove("active");
    });
});

// ===============================
// DARK / LIGHT MODE
// ===============================

function toggleTheme() {
    document.body.classList.toggle("light");

    const toggle = document.querySelector(".toggle");

    if (document.body.classList.contains("light")) {
        if (toggle) toggle.innerHTML = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        if (toggle) toggle.innerHTML = "🌙";
        localStorage.setItem("theme", "dark");
    }
}

// ===============================
// LOAD SAVED THEME
// ===============================

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");

        const toggle = document.querySelector(".toggle");
        if (toggle) toggle.innerHTML = "☀️";
    }
});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {
        topBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ===============================
// INTERSECTION OBSERVER
// FOR COUNTERS
// ===============================

const statsSection = document.querySelector("#stats");

if (statsSection) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (typeof startCounter === "function") {
                    startCounter();
                }
                observer.unobserve(statsSection);
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(statsSection);
}

// ===============================
// SCROLL REVEAL ANIMATIONS
// ===============================

if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".hero-content", {
        origin: "bottom",
        distance: "60px",
        duration: 1200,
        delay: 200
    });

    ScrollReveal().reveal(".title", {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal(".card", {
        origin: "bottom",
        distance: "70px",
        duration: 1000,
        interval: 150
    });

    ScrollReveal().reveal(".project", {
        origin: "bottom",
        distance: "80px",
        duration: 1200,
        interval: 200
    });

    ScrollReveal().reveal(".achievement", {
        origin: "bottom",
        distance: "80px",
        duration: 1200,
        interval: 200
    });
}

// ===============================
// PRELOADER SUPPORT
// ===============================

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// ===============================
// CERTIFICATE / PROJECT IMAGE POPUP
// ===============================

function openImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    if (!modal || !modalImg) return;

    modal.style.display = "flex";
    modalImg.src = src;
    document.body.style.overflow = "hidden";
}

function closeImage() {
    const modal = document.getElementById("imageModal");

    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "";
}

// Close popup using Escape key
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeImage();
    }
});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "%cWelcome to Prachi Kolte Portfolio 🚀",
    "color:#D4AF37;font-size:16px;font-weight:bold;"
);
