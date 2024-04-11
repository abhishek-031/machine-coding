document.getElementById("app").innerHTML = ``;

let accordion = document.querySelector("#accordion")
accordion.addEventListener("click", (e) => {
  accordion.classList.toggle("accordion-expanded")
})