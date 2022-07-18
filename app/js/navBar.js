/*
  Opening and Closing of Navbar Links on Mobile Screens
*/
const menuButton = document.getElementById("nav-menu"),
  navLinks = document.getElementById("nav-links"),
  navClose = document.getElementById("nav-close"),
  navOverlay = document.getElementById("nav-overlay");

function showNavLinks() {
  navOverlay.classList.add("nav-show");
  navLinks.classList.add("nav-show");
}

function closeNavLinks() {
  navOverlay.classList.remove("nav-show");
  navLinks.classList.remove("nav-show");
}

menuButton.addEventListener("click", showNavLinks);
navClose.addEventListener("click", closeNavLinks);
navOverlay.addEventListener("click", closeNavLinks);
