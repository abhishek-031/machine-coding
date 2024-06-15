import { initCarousel } from "./carousel.js";
document.getElementById("app").innerHTML = ``;

let carousel = document.querySelector("#carousel");
let images = [
  "./assets/img1.png",
  "./assets/img2.png",
  "./assets/img3.png",
  "./assets/img4.png",
]
initCarousel(carousel, images, 1)


