let song, amp;
let shape;
let volumeAmp= 1800;
let arcHeight=2.2;
function preload() {  
  song = loadSound('audio/BlackStonePond.mp3');
}

function setup() {
  pixelDensity();
  background(238,238,238);
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  angleMode(DEGREES);
}

function draw() {
  translate(width/2,height/2);
  background(238,238,238, 10);
  let vol = amp.getLevel();
  let l1= vol*4500;
  let size= vol*volumeAmp*arcHeight;
  let sizeHeight= map(size, 0, volumeAmp, 0, height);
  //ellipse(windowWidth/2, windowHeight/2, vol*volumeAmp, vol*volumeAmp);
  noFill();
  arc(0, 0, sizeHeight, sizeHeight, l1, l1+900);

  rotate(frameCount*vol);
  arc(0, 0, sizeHeight, sizeHeight, vol*4500, vol*3500);
  rotate(vol*300);
  arc(0, 0, sizeHeight, sizeHeight, vol*7500, 570);
  // rotate(frameCount);

  strokeWeight(random(.01,1.5));




}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    // background(255, 0, 0);
  } else {
    song.loop();
    // background(0, 255, 0);
  }
}