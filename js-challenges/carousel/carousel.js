function initCarousel(container, images, imagesInViewport = 1.2) {
  let imagesContainer = container.querySelector(".carousel-content");
  for(let img of images) {
    let imgEl = document.createElement("img");
    imgEl.src = img;
    imgEl.classList.add("carousel-image");
    imagesContainer.appendChild(imgEl);
  }
}

export {
  initCarousel
}