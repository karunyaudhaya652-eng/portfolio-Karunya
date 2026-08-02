// ==========================
// HAMBURGER MENU
// ==========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});

// Close menu after clicking a nav link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

// ==========================
// POPUP
// ==========================

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const talkBtn = document.querySelector(".talk-btn");

// Open popup
talkBtn.addEventListener("click", function(e) {
    e.preventDefault();
    popup.style.display = "flex";
});

// Close popup using X
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close popup when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// ==========================
// ACTIVE NAV LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

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

// ==========================
// HEADER SHADOW
// ==========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {
        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,0.3)";
    } else {
        nav.style.boxShadow = "none";
    }

});