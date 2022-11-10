function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  circle(mouseX,mouseY, 50);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}