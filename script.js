"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

console.log("test");
const cookieMessage = document.createElement("div");
cookieMessage.classList.add("cookie-message");
cookieMessage.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(cookieMessage);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    cookieMessage.remove();
  });

cookieMessage.style.backgroundColor = "#37383d";
cookieMessage.style.width = "120%";

cookieMessage.style.height =
  Number.parseFloat(getComputedStyle(cookieMessage).height, 10) + 30 + "px";

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();

  //scrolling

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
});
