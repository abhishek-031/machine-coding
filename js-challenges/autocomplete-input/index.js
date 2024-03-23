import { initAutoComplete } from "./autocomplete.js";

document.getElementById("app").innerHTML = ``;

const COUNTRIES = [
  "INDIA",
  "USA",
  "UAE",
  "UK",
  "INDIAN",
  "INDIAS"
]

const inputContainer = document.querySelector("#input-container")
function getResults(inputString) {
  return COUNTRIES.filter(c => c.toLowerCase().includes(inputString.toLowerCase()));
}
initAutoComplete(inputContainer, getResults);