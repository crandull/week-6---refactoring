let wheel1x = 270;
let wheel2x = 330;
let rectx = 260;

let wheel1x_2 = rectx + 10;
let wheel2x_2 = rectx + 70;

let offset = 2;

function mousePressed() {
  console.log(mouseX, mouseY);
}

function setup() {
  createCanvas(600, 310);
}

function draw() {
  background(0);

  //draw pink rectangle - street
  fill(255, 0, 175);
  rect(0, 287, 600, 30);

  drawSkateboard();

  moveLeft();
  moveRight();
}

function drawSkateboard() {
  fill(0, 255, 0);
  circle(wheel1x, 276, 15);
  circle(wheel2x, 276, 15);
  rect(rectx, 260, 80, 10);
}

//WHEN MOUSE HOVERS OVER LEFT ARROW, MOVE LEFT
function moveLeft() {
  if (mouseX > 200 && mouseX < 300 && mouseY > 30 && mouseY < 100) {
    console.log("move left");
    wheel1x -= offset;
    wheel2x -= offset;
    rectx -= offset;

    PinkButtonLeft();
  } else {
    YellowButtonLeft();
  }
}

//WHEN MOUSE HOVERS OVER RIGHT ARROW, MOVE RIGHT
function moveRight() {
  if (mouseX > 300 && mouseX < 400 && mouseY > 30 && mouseY < 100) {
    console.log("move right");
    wheel1x += offset;
    wheel2x += offset;
    rectx += offset;

    PinkButtonRight();
  } else {
    YellowButtonRight();
  }
}

function PinkButtonLeft() {
  fill(255, 0, 175);
  rect(200, 30, 100, 60);
  fill(0);
  triangle(222, 60, 244, 47, 244, 76);
  rect(244, 56, 25, 10);
}

function YellowButtonLeft() {
  fill(234, 255, 0);
  rect(200, 30, 100, 60);
  fill(0);
  triangle(222, 60, 244, 47, 244, 76);
  rect(244, 56, 25, 10);
}

function PinkButtonRight() {
  fill(255, 0, 175);
  rect(300, 30, 100, 60);
  fill(0);
  triangle(374, 60, 356, 47, 356, 76);
  rect(331, 56, 25, 10);
}

function YellowButtonRight() {
  fill(234, 255, 0);
  rect(300, 30, 100, 60);

  fill(0);
  triangle(374, 60, 356, 47, 356, 76);
  rect(331, 56, 25, 10);
}
