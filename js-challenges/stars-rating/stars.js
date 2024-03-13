/*
  - render count stars
  - have selected state
  - change selected state on clicking and call the callback function
  - show colored stars on hover but revert to last selected on removing hover
*/

function Stars(count, parent, changeCallback) {
  const starsContainer = document.createElement("div");
  starsContainer.classList.add("stars-container");
  let selectedStars = 0;
  let hoveredStars = 0;

  function renderStars() {
    starsContainer.innerHTML=""
    for(let i=0;i<count;i++) {
      const starI = document.createElement("span");
      starI.classList.add("star");
      starI.innerHTML = hoveredStars-1 >= i ? "★" : "☆";
      starI.dataset.rating = i+1;
  
      starsContainer.appendChild(starI)
    }
  }

  renderStars()
  starsContainer.addEventListener("click", function selectRating(e) {
    selectedStars = hoveredStars;
    changeCallback(selectedStars)
  })

  starsContainer.addEventListener("mouseout", function mouseLeave(e) {
    hoveredStars = selectedStars;
    renderStars()
  })

  starsContainer.addEventListener("mouseover", function mouseOverEvent(e) {
    if(e.target.tagName === "SPAN") {
      if(hoveredStars !== e.target.dataset.rating) {
        hoveredStars = e.target.dataset.rating
        renderStars()
      }
    }
  })
  parent.appendChild(starsContainer);
}

export default Stars;