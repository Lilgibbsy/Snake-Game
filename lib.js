function clearCanvas() {
  ctx.fillStyle = boardColour;
  ctx.strokeStyle = boardBorder;
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.strokeRect(0, 0, cnv.width, cnv.height);
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
  ctx.fillStyle = snakeColour;
  ctx.strokestyle = snakeBorder;
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

document.addEventListener("keydown", changeDirection);
function changeDirection(event) {
  const left = 65;
  const right = 68;
  const up = 87;
  const down = 83;

  if (changeDirection) return;
  changeDirection = true;
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (event.keyCode === left && !goingRight) {
    dx = -10;
    dy = 0;
  }
  if (event.keyCode === up && !goingDown) {
    dx = 0;
    dy = -10;
  }
  if (event.keyCode === right && !goingLeft) {
    dx = 10;
    dy = 0;
  }
  if (event.keyCode === down && !goingUp) {
    dx = 0;
    dy = 10;
  }
}

function collisionDetected() {
  for (let i = 4; i < snake.length; i++) {
    const hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
    if (hasCollided) return true;
  }
  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > cnv.width - 10;
  const hitToptWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > cnv.height - 10;

  return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
}

function randomFood(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function genFood() {
  foodX = randomFood(0, cnv.width - 10);
  foodY = randomFood(0, cnv.height - 10);
  snake.forEach(function hasSnakeEatenFood(part) {
    const hasEaten = part.x == foodX && part.y == foodY;
    if (hasEaten) genFood();
  });
}

function drawFood() {
  ctx.fillStyle = "lightgreen";
  ctx.strokeStyle = "darkgreen";
  ctx.fillRect(foodX, foodY, 10, 10);
  ctx.strokeRect(foodX, foodY, 10, 10);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;
  if (hasEatenFood) {
    score += 10;
    document.getElementById("score").innerHTML = `Score: ${score}`;
    genFood();
  } else {
    snake.pop();
  }
}
