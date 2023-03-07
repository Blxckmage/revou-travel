const slider = document.querySelector(".slider");
const images = [
  "./assets/img/travel-1.jpg",
  "./assets/img/travel-2.jpg",
  "./assets/img/travel-3.jpg",
];

let index = 0;
const interval = 5000; // 5 seconds

slider.src = images[index];
setInterval(() => {
  index = (index + 1) % images.length;
  slider.src = images[index];
}, interval);
