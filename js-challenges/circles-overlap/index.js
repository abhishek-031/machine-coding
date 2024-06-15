document.getElementById("app").innerHTML = ``;

let canvas = document.querySelector(".canvas-board");

let context = canvas.getContext("2d", {willReadFrequently: true})
context.canvas.height = window.innerHeight
context.canvas.width = window.innerWidth
let top = canvas.offsetTop;
let circleCenter = {
  x: 0,
  y: 0,
};
let state = []
let clicked = false;
let pastState = null;
let circles = []

canvas.addEventListener("mousedown", (e) => {
  clicked=true
  circleCenter = {
    x: e.x,
    y: e.y - top
  }
  pastState = context.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight)
})

canvas.addEventListener("mousemove", (e) => {
  if(clicked) {
    getDataAndDraw(e.x, e.y)
  }
})

function getDataAndDraw(x, y) {
  let b = Math.abs(circleCenter.x - x);
  let p = Math.abs(circleCenter.y - y + top);
  let radius = Math.floor(Math.sqrt(b*b + p*p))
  // drawCircle(50,50,10, "red")
  drawCircle(circleCenter.x, circleCenter.y, radius, "red")
  if(!clicked) {
    state.push(context.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight))
  }
}

canvas.addEventListener("mouseup", (e) => {
  clicked = false
  getDataAndDraw(e.x, e.y)
})

function undo() {
  if(state.length > 1) {
    state.pop();
    let current = state[state.length-1];
    context.putImageData(current, 0,0);
  } else {
    context.fillRect(0,0,canvas.innerWidth, canvas.innerHeight)
  }
}

// document.querySelector("#undo").addEventListener("click", undo)

function drawCircle(x, y, radius, color) {
  let bgcolor = color
  if(clicked) {
    if(pastState)
    context.putImageData(pastState, 0,0);
    else
    context.fillRect(0,0,canvas.innerWidth, canvas.innerHeight)
  } else {
    let colliding = circles.some(circle => {
      let b = Math.abs(circle.x - x);
      let p = Math.abs(circle.y - y);
      let distance = Math.floor(Math.sqrt(b*b + p*p))
      return (distance <= radius+circle.radius)
    })
    circles.push({
      x,y,radius
    })
    if(colliding) bgcolor = "green"
  }

  context.beginPath();
  context.arc(x,y, radius, 0, 2*Math.PI);
  context.fillStyle = bgcolor;
  context.fill();
  context.closePath()
}