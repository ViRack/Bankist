"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const header = document.querySelector(".header");
const nav = document.querySelector('.nav');


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

////////////////////////////////////////
// Page Navigation
// Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("in it");
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log("in the if");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// ----not the cleanest method as this will attach the function to EVERY "link", wasteful
// --- use above delegation method instead, especially when case for multiple "links"
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     });

//   });
// });

// tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  if (!clicked) return;

  //Deativate Tab
  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove("operations__content--active"));

  //Activate Tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});


// menu fade animation component

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

// passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
