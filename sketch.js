let song, amp;
let shape;
let volumeAmp= 1800;
let arcHeight=8.2;

//text
let ready= false;

let str = 'BLACKSTONE POND PRESS TO BEGIN BLACKSTONE POND PRESS TO BEGIN ';

let startAngle =    0;     // angle where text should start
let distanceAngle = 360;   // how far (in degrees) text will go
let rotateSpeed=.006;
let radius;                // set dynamically in setup()
let font;

let sinSpeed1=.006;

function preload() {  
  song = loadSound('audio/BlackStonePond.mp3');
}

function setup() {
  pixelDensity();
  //background(255);
  createCanvas(windowWidth, windowHeight);
  amp = new p5.Amplitude();

  amp.smooth(5);
 
  song.setVolume(.3)
  radius = min(width,height) / 3;
  textSize(radius*.15);
  textAlign(CENTER, BASELINE);
  background(112);
}

function draw() {
  cursor(HAND);
  if (ready){ //happens after mousepressed
  cursor(ARROW);
  angleMode(DEGREES);
  translate(width/2,height/2);
  //background(112, 112, 112, 10);
  background(192,192,192,5);
  let vol = amp.getLevel();
  let l1= vol*4500;
  let size= vol*volumeAmp*arcHeight;
  let sizeHeight= map(size, 0, volumeAmp, 0, height);
  //ellipse(windowWidth/2, windowHeight/2, vol*volumeAmp, vol*volumeAmp);
  noFill();
  arc(0, 0, sizeHeight, sizeHeight, l1, l1+900);
  if(vol>.01){
  stroke(random(0,255));
  }
  rotate(frameCount*vol);
  arc(0, 0, sizeHeight, sizeHeight, vol*4500, vol*3500);
  rotate(vol*300);
  arc(0, 0, sizeHeight, sizeHeight, vol*7500, 570);

  strokeWeight(random(.01,1.5));
  }
  else{ //TEXT DISPLAY
    background(192);
    translate(width/2,height/2);
    rotate(radians(millis()*rotateSpeed));
    textDisplay(1);
  }


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function textDisplay(x){
  // calculate the angle between each letter

  rotate(radians(frameCount));
  let angleBetweenLetters = radians(distanceAngle) / str.length;

  scale(sin(frameCount*sinSpeed1)*x);
  // display the text!
  push();
  rotate(radians(startAngle));         // rotate to where text starts
  for (let i=0; i<str.length; i++) {   // go through each letter in the text
    push();
    rotate(i * angleBetweenLetters);   // rotate to angle
    translate(0,-radius);              // and translate to edge of circle
    fill(0);
    noStroke();
    text(str[i], 0,0);                 // draw character at location
    pop();
  }
  pop();
}


function mousePressed() {
  if (!ready) {
    // initializeAudio();
    ready = true;
    song.loop();
    background(192);


  }
}