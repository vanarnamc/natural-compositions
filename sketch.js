let song, amp;

function preload() {  
  song = loadSound('audio/BlackStonePond.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();

}

function draw() {
  let vol = amp.getLevel();
  ellipse(height/2, width/2, vol*windowWidth, vol*windowHeight);
  //console.log(vol)


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.loop();
    background(0, 255, 0);
  }
}