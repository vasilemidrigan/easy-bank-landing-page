"use strict";

const btnHamburger = document.getElementById("btn__hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

header.addEventListener("click", () => {
  if (header.classList.contains("active")) {
    header.classList.remove("active");
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
  } else {
    header.classList.add("active");
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
  }
  console.log(header);
});
