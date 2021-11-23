//Grab Canvas
const canvas = document.getElementById("etch-a-sketch");

//Grab Context
const ctx = canvas.getContext("2d");

//Grab shake button
const shakeBtn = document.querySelector(".shake");

//Setup Canvas for drawing
//Defaults
const { width, height } = canvas;
const MOVE_AMOUNT = 20;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();

//Create random x and y
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//Draw on Canvas
function draw({ key }) {
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case "ArrowUp":
      y -= MOVE_AMOUNT;
      break;
    case "ArrowDown":
      y += MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      x -= MOVE_AMOUNT;
      break;
    case "ArrowRight":
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}
//Handle keys
function handleKeys(event) {
  if (event.key.includes("Arrow")) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

window.addEventListener("keydown", handleKeys);
shakeBtn.addEventListener("click", clearCanvas);

//Clear canvas function
function clearCanvas() {
  shakeBtn.style.backgroundColor = "white";
  canvas.classList.add("shake");
  canvas.addEventListener(
    "animationend",
    function () {
      canvas.classList.remove("shake");
      shakeBtn.style.backgroundColor = "chocolate";
      ctx.clearRect(0, 0, width, height);
    },
    { once: true }
  );
}
