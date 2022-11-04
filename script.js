let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];

let dx = 10;
let dy = 0;

let score = 0;

const boardColour = "blue";
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
