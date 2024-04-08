const ProgressBar = {
  init(container, getProgress) {
    let progressBarContainer = document.createElement("div");
    let progressBar = document.createElement("div");
  

    progressBarContainer.classList.add("progress-bar-container")
    progressBar.classList.add("progress-bar");

    progressBarContainer.appendChild(progressBar);
    container.appendChild(progressBarContainer);

    requestAnimationFrame(function updateProgress() {
      let progress = getProgress();
      progressBar.style.width = `${progress}%`;

      requestAnimationFrame(updateProgress);
    })
  },

}

function initProgressBar(container, getProgress) {
  let progressBar = Object.create(ProgressBar);
  progressBar.init(container, getProgress);
}

export {
  initProgressBar
}