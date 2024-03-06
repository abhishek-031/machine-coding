document.getElementById("app").innerHTML = ``;

(function stars(n) {
  const starsElement = document.createElement("div");
  starsElement.classList.add("stars");
  starsElement.addEventListener("mouseout", function mouseouthandler(e) {
    fillStars(selectedStars);
  });
  const starsArray = [];
  let selectedStars = 0;

  function fillStars(n) {
    if (starsArray.length) {
      for (let i = 0; i < starsArray.length; i++) {
        if (i < n) {
          starsArray[i].classList.add("star-filled");
        } else {
          starsArray[i].classList.remove("star-filled");
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    const starElement = document.createElement("div");
    starElement.classList.add("star");
    starElement.dataset["index"] = i + 1;
    starElement.addEventListener("mouseover", function handler(e) {
      fillStars(i + 1);
    });
    starElement.addEventListener("click", function handler(e) {
      selectedStars = i + 1;
    });
    starsArray.push(starElement);
    starsElement.appendChild(starElement);
  }

  document.body.appendChild(starsElement);
})(3);
