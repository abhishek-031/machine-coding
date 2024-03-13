import Stars from "./stars.js";

document.getElementById("app").innerHTML = ``;

Stars(5, document.querySelector("#star-rating-1"), (rating) => console.log(`User selected ${rating} stars`));