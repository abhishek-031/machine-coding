const Popover = {
  init(container, header, content, footer) {

  }
}

function initPopover(container = document, content = "", header = "", footer = "") {
  // const popover = Object.create(Popover);
  // popover.init(container, header, content, footer);
  let cross = document.querySelector("#cross")
  let popup = document.querySelector("#popup")
  let button = document.querySelector("#open-popup")

  popup.addEventListener("click", (e) => {
    if(e.target.id === "popup") {
      popup.classList.toggle("showing");
      // popup.classList.add("hidden")
    }
  })

  button.addEventListener("click", () => {
    // popup.classList.remove("hidden")
    popup.classList.toggle("showing")
  })

  cross.addEventListener("click", () => {
    popup.classList.toggle("showing");
    // popup.classList.add("hidden")
  })
}

export {
  initPopover
}