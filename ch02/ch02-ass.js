function setup(){
	//initialize
	createCanvas(600, 600)	
}
function draw(){
    // background(255, 255, 255);
    background(0, 0, 0);
    fill(0, 0, 0, 0);
    c = color(255, 255, 255, 1)
    fill(c)
    // circle(300, 300, 300);
    // ellipse(300, 300, 150, 130);
    Ear()
}

function Ear(){
    var conx = 110;
    var cony = 20;
    var xc = 40;
    var yc = 215;
    var hc = 150;
    blendMode(DIFFERENCE);
    circle(conx +　2*xc, cony + yc, hc);
    circle(conx + 4*xc, cony + yc, hc);
    circle(conx + 3*xc, cony + yc+xc*Math.sqrt(3), hc);
}
