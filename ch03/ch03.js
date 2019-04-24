function setup(){
	//initialize
    createCanvas(600, 600);	
    // background(200, 200, 200);
    // blendMode(LIGHTEST);
}

var pos = 0;
var adj = 50;
var col = 0;
function draw(){
    col = col+1;
    pos = pos + 1;
    if(col < 300){
        background(col-120, 50, 110, 10);
    }else{
        background(180, 50, 110, 10);
    }
    center = 300
    if(pos < center){
        fill((pos%width), 256 - (pos%width), 128 + (pos%width)/2);
        circle(pos-random(100), pos-random(100), pos*0.01);
        circle(pos-random(100), pos-random(100), pos*0.02);
        circle(pos-random(100), pos-random(100), pos*0.03);
        circle(pos-random(100), pos-random(100), pos*0.04);
    }else{
        fill(256 - (pos%width), (pos%width), 128 + (pos%width)/2);
        circle(pos-random(100), pos-random(100), pos*0.01);
        circle(pos-random(100), pos-random(100), pos*0.03);
        fill(pos, 256 - pos, 128 + pos/2);
        circle(pos-random(100), pos-random(100), pos*0.02);
        circle(pos-random(100), pos-random(100), pos*0.04);
    }
    if(pos < center){
        fill(256 - (pos%width), (pos%width), 128 + (pos%width)/2);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.01);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.02);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.03);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.04)
    }else{
        fill((pos%width), 256 - (pos%width), 128 + (pos%width)/2);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.01);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.03);
        fill(256 - (pos%width), (pos%width), 128 + (pos%width)/2);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.02);
        circle(width + adj - pos-random(100), pos-random(100), pos*0.04);
    }
}