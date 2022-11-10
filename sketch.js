function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(mouseX,mouseY, 50);
  circle(mouseX,mouseY, 50);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}