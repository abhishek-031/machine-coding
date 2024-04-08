import { initProgressBar } from "./progress-bar.js";

document.getElementById("app").innerHTML = ``;

let app = document.getElementById("progress1");

let progress = 0;
function getProgress() {
  progress = progress < 100 ? progress + Math.random()*0.5 : 100;
  return progress
}

initProgressBar(app, getProgress);