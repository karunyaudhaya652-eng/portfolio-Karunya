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