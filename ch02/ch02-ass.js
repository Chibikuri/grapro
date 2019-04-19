function setup(){
	//initialize
	createCanvas(600, 600)	
}
function draw(){
    // background(255, 255, 255);
    background(0, 0, 0);
    stroke(255, 255, 255);
    strokeWeight(2);
    noFill()
    circle(300, 300, 398);
    fill(255, 255, 255);
    blendMode(ADD);
    leftEar();
    rightEar();
    head();
    body();
    tail();
}

function leftEar(){
    var conx = 110;
    var cony = 30;
    var xc = 40;
    var yc = 215;
    var hc = 150;

    fill(255, 0, 0)
    circle(conx +　2*xc, cony + yc, hc);
    fill(0, 0, 255)
    circle(conx + 4*xc, cony + yc, hc);
    fill(0, 255, 0)
    circle(conx + 3*xc, cony + yc+xc*Math.sqrt(3), hc);
}

function rightEar(){
    var conx = 250;
    var cony = 30;
    var xc = 40;
    var yc = 215;
    var hc = 150;
    blendMode(ADD);
    fill(255, 0, 0)
    circle(conx +　2*xc, cony + yc, hc);
    fill(0, 255, 0)
    circle(conx + 4*xc, cony + yc, hc);
    fill(0, 0, 255)
    circle(conx + 3*xc, cony + yc+xc*Math.sqrt(3), hc);
}

function head(){
    fill(255, 255, 255);
    ellipse(300, 300, 160 , 140);
    rect(220, 265, 160, 100, 60);
}

function body(){
    fill(255, 255, 255);
    ellipse(300, 399, 80, 120);
    // circle(300, 400, 100)
    rect(260, 378, 80, 120, 20);
    // rotate(45)
    // ellipse(550, 44, 40, 40, 20)
}

function tail(){
    fill(0, 0, 255)
    circle(245, 417, 140);
    fill(0, 255, 0);
    circle(245, 417, 140);
    fill(255, 0, 0);
    for(var i=0; i< 10; i++){
        ellipse(270-i*3, 440+i, 30, 20);
    }
    for(var i=0; i< 10; i++){
        ellipse(240-i*3, 450-i, 30-i*0.7, 20-i*0.7);

    }
    for(var i=0; i<10; i++){
        ellipse(210-i*3, 440-i, 23-i, 13-i);
    }
}
