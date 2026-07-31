const popup = document.getElementById("popup");
const talkBtn = document.querySelector(".talk-btn");
const closeBtn = document.querySelector(".close");

talkBtn.onclick = () => {
    popup.style.display = "flex";
}

closeBtn.onclick = () => {
    popup.style.display = "none";
}

window.onclick = (e) => {
    if (e.target == popup) {
        popup.style.display = "none";
    }
}