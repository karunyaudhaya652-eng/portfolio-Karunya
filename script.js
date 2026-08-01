const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const popup = document.getElementById("popup");
const talkBtn = document.querySelector(".talk-btn");
const closeBtn = document.querySelector(".close");

talkBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});
const hamburger = document.getElementById("hamburger");

const navLinks = document.querySelector(".nav-links");

const overlay = document.getElementById("overlay");

hamburger.addEventListener("click",()=>{

hamburger.classList.toggle("active");

navLinks.classList.toggle("active");

overlay.classList.toggle("show");

document.body.classList.toggle("no-scroll");

});
overlay.addEventListener("click",()=>{

hamburger.classList.remove("active");

navLinks.classList.remove("active");

overlay.classList.remove("show");

document.body.classList.remove("no-scroll");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

hamburger.classList.remove("active");

navLinks.classList.remove("active");

overlay.classList.remove("show");

document.body.classList.remove("no-scroll");

});

});
