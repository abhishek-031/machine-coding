import { initTodos } from "./todos.js";

document.getElementById("app").innerHTML = ``;

const todosContainer = document.querySelector("#todos-container")
initTodos(todosContainer);
const todosContainer2 = document.querySelector("#todos-container2")
initTodos(todosContainer2);