const diapo = document.querySelector(".diapo");
const elements = document.querySelector(".diapo-elements");

let slides = Array.from(elements.children);

let next = document.getElementById("right-arrow");
let prev = document.getElementById("left-arrow");

let compteur = 0;

let slideWidth = diapo.getBoundingClientRect().width;

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrev);

function slideNext() {
    compteur++;
    if (compteur == slides.length) {
        compteur = 0;
    }
    let decal = slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`;
}

function slidePrev() {
    compteur--;
    if (compteur < 0) {
        compteur = slides.length - 1;
    }
    let decal = -slideWidth * compteur;
    elements.style.transform = `translateX(${decal}px)`
}

window.addEventListener("resize", () => {
    slideWidth = diapo.getBoundingClientRect().width
    slideNext();
})