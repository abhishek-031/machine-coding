import { initZoom } from "./zoom-feature.js";

document.getElementById("app").innerHTML = ``;

const zoom = document.querySelector("#zoom");

initZoom(zoom, "image.png");
