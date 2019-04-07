"use strict";

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let sliderContent = document.querySelector(".slider .content");



next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);




function nextSlide() {
    let currentItem = document.querySelector(".active-item");
    currentItem.classList.remove("active-item");
    if (currentItem.previousElementSibling != null) {
        currentItem.previousElementSibling.classList.add("active-item");
    } else {
        currentItem.parentNode.lastElementChild.classList.add("active-item");
    }
}

function prevSlide() {
    let currentItem = document.querySelector(".active-item");
    currentItem.classList.remove("active-item");
    if (currentItem.nextElementSibling != null) {
        currentItem.nextElementSibling.classList.add("active-item");
    } else {
        currentItem.parentNode.firstElementChild.classList.add("active-item");
    }
}
