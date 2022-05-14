"use strict";

const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnHamburger = document.getElementById("btn__hamburger");
const headerMobMenu = document.querySelector(".header__mob-menu");
const overlay = document.querySelector(".overlay");
const fade = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("active")) {
    fade.forEach((el) => {
      el.classList.add("fade-out");
      el.classList.remove("fade-in");
    });
    body.classList.remove("noscroll");
    header.classList.remove("active");
  } else {
    fade.forEach((el) => {
      el.classList.add("fade-in");
      el.classList.remove("fade-out");
    });
    body.classList.add("noscroll");
    header.classList.add("active");
  }
});
