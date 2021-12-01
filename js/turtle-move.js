window.addEventListener("keydown", moveTurtle);
const turtle = document.querySelector(".turtle");
const speed = 15;
let x = 0,
  y = 0,
  rDeg = 0,
  yDeg = 0;

function moveTurtle(event) {
  if (event.key.includes("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y--;
        rDeg = -90;
        yDeg = 0;
        break;
      case "ArrowDown":
        y++;
        rDeg = 90;
        yDeg = 0;
        break;
      case "ArrowRight":
        x++;
        rDeg = 0;
        yDeg = 0;
        break;
      case "ArrowLeft":
        x--;
        yDeg = 180;
        rDeg = 0;
        break;
      default:
        break;
    }
    turtle.setAttribute(
      "style",
      `--x: ${x * speed}px; --y: ${y * speed}px;
     --yDeg: ${yDeg}deg; --rDeg: ${rDeg}deg`
    );
  }
}
