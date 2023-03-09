// Auto Slide
const images = [
  "./assets/img/travel-1.jpg",
  "./assets/img/travel-2.jpg",
  "./assets/img/travel-3.jpg",
];

let currentImageIndex = 0;
const header = document.querySelector("header");

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  header.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${images[currentImageIndex]}")`;
}, 5000);

// Mobile
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-nav");

menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");
  console.log("clicked");
});
