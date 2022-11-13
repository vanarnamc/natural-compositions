let song, amp;

let volumeAmp= 1800;

function preload() {  
  song = loadSound('audio/BlackStonePond.mp3');
}

function setup() {
  pixelDensity();

  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();
  angleMode(DEGREES);


}

function draw() {
  background(238,238,238, 2);
  let vol = amp.getLevel();
  //ellipse(windowWidth/2, windowHeight/2, vol*volumeAmp, vol*volumeAmp);
  noFill();
  arc(width/2, windowHeight/2, vol*volumeAmp, vol*volumeAmp, vol*4500, 270);
  arc(width/2, windowHeight/2, vol*volumeAmp, vol*volumeAmp, vol*4500, -170);
rotate(vol*5);
strokeWeight(random(1,2));




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