// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Basic Pitch Detection
=== */

let audioContext;
let mic;
let pitch;
let freq;

function setup() {
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  createCanvas(510, 510);
  background(255);
}

function startPitch() {
  pitch = ml5.pitchDetection('./model/', audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  select('#status').html('Model Loaded');
  getPitch();
}
function draw(){
  // background(freq%256, freq%128, freq%64, 20);
  background(255, 255, 255)
    for(var j = 0; j < width-10; j = j + 40){
    fill(freq%256+30, freq%128+20, freq%64+10);
    circle(j+11, height - 11, 10);
  }
 
  for(var i = 0; i < width-10; i = i + 40){
    fill(freq%256+30, freq%128+20, freq%64+10);
    circle(i+11, height - random(i)*(freq)%height - 11, 10);
  }
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      select('#result').html(frequency);
      freq = frequency;
    } else {
      select('#result').html('No pitch detected');
      freq = 0;
    }
    getPitch();
  })
}