import { initGame } from "./tictactoe.js";

document.getElementById("app").innerHTML = ``;

const gameElement = document.querySelector("#game");
initGame(gameElement)