// ==========================
// 1. HAMBURGER MENU
// ==========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked");
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });
}

// ==========================
// 2. NAVBAR SCROLL EFFECT
// ==========================
const nav = document.querySelector(".right nav");

if (nav) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
            nav.style.background = "rgba(27,16,24,0.95)";
            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";
        } else {
            nav.style.background = "rgba(27,16,24,0.75)";
            nav.style.boxShadow = "0 8px 30px rgba(0,0,0,.25)";
        }
    });
}

// ==========================
// 3. NAV LINK CLICK / ACTIVE STATE
// ==========================
const allNavLinks = document.querySelectorAll(".nav-links a");

allNavLinks.forEach(link => {
    link.addEventListener("click", function() {
        // பழைய active class-ஐ நீக்கிவிட்டு கிளிக் செய்ததற்கு மட்டும் சேர்க்கும்
        allNavLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");

        // Mobile-ல் Menu open-ல் இருந்தால் கிளிக் செய்ததும் மூடும்
        if (navLinks.classList.contains("active")) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
            document.body.classList.remove("no-scroll");
        }
    });
});

// ==========================
// 4. POPUP MODAL
// ==========================
const popup = document.getElementById("popup");
const talkBtn = document.querySelector(".talk-btn");
const closeBtn = document.querySelector(".close");

if (popup && talkBtn && closeBtn) {
    // Open popup
    talkBtn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
    });

    // Close popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close when clicking outside popup box
    window.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
}