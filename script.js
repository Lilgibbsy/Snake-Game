let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 200;
cnv.height = 200;

let snake = [
  { x: 100, y: 100 },
  { x: 90, y: 100 },
  { x: 80, y: 100 },
  { x: 70, y: 100 },
  { x: 60, y: 100 },
];

let dx = 10;
let dy = 0;

let score = 0;

const boardColour = "gray";
const boardBorder = "black";
const snakeColour = "red";
const snakeBorder = "black";
genFood();
setInterval(animate, 100);
function animate() {
  if (collisionDetected()) return;
  changeDirection = false;
  clearCanvas();
  moveSnake();
  drawSnake();
  collisionDetected();
  drawFood();
}
