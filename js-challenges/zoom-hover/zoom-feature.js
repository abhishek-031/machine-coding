const Zoom = {
  init(container, imageSrc) {
    let imageElement = document.createElement("img");
    let zoomElement = document.createElement("div");
    let zoomedImage = document.createElement("img");

    zoomElement.classList.add("zoom-element")
    imageElement.src = imageSrc;
    zoomedImage.src = imageSrc;
    imageElement.classList.add("actual-image")

    imageElement.addEventListener("mousemove", (e) => {
      zoomElement.style.display = "block";
      let x = e.clientX - imageElement.offsetLeft;
      let y = e.clientY - imageElement.offsetTop;
      zoomedImage.style.transform = `translate(-${x*2.5}px, -${y*2.5}px)`
    })

    imageElement.addEventListener("mouseleave", (e) => {
      zoomElement.style.display = "none"
    })

    zoomElement.appendChild(zoomedImage);
    container.appendChild(imageElement);
    container.appendChild(zoomElement);
  }
}

function initZoom(container, imageSrc) {
  let zoom = Object.create(Zoom);
  zoom.init(container, imageSrc);
}

export {initZoom};