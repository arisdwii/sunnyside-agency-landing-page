const header = document.querySelector("header");
const btnHamburger = document.querySelector(".btn-hamburger");
const headerNav = document.querySelector(".header-nav");
const headerOverlay = document.querySelector(".header-overlay");

window.addEventListener("scroll", () => {
  header.classList.toggle("scroll", scrollY > 10);
});

function headerMenu(element) {
  element.addEventListener("click", () => {
    btnHamburger.classList.toggle("active");
    headerNav.classList.toggle("open");
    document.body.classList.toggle("over-hide");
  });
}

headerMenu(btnHamburger);
headerMenu(headerOverlay);
