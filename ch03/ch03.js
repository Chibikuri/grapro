function setup(){
	//initialize
    createCanvas(600, 600);	
    // background(200, 200, 200);
    // blendMode(LIGHTEST);
}

var pos = 0;
function draw(){
    background(30, 128, 180, 20);
    pos = pos + 1;
    fill(pos, 256 - pos, 128 + pos/2);
    circle(pos-random(100), pos-random(100), pos*0.01);
    circle(pos-random(100), pos-random(100), pos*0.02);
    circle(pos-random(100), pos-random(100), pos*0.03);
    circle(pos-random(100), pos-random(100), pos*0.04);
    fill(256 - pos, pos, 128 + pos/2)
    circle(width - pos-random(100), pos-random(100), pos*0.01);
    circle(width - pos-random(100), pos-random(100), pos*0.02);
    circle(width - pos-random(100), pos-random(100), pos*0.03);
    circle(width - pos-random(100), pos-random(100), pos*0.04);
}

function shootingstars(){
    circle(width - pos, pos, pos*0.1);
    sleep(1);
    circle(width - pos, pos, pos*0.1);
    sleep(1);
    circle(width - pos, pos, pos*0.1);
    sleep(1);
    circle(width - pos, pos, pos*0.1);
    sleep(1);}
