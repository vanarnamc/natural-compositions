let song, amp;

let volumeAmp= 1800;

function preload() {  
  song = loadSound('audio/BlackStonePond.mp3');
}

function setup() {
  pixelDensity(5);

  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();

}

function draw() {
  background(238,238,238, 10);
  let vol = amp.getLevel();
  ellipse(height/2, width/2, vol*volumeAmp, vol*volumeAmp);
  console.log(height)



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