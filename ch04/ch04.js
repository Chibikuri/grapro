function setup(){
    createCanvas(500, 500);

}

var pos = 30;
function draw(){
    background(10, 0, 30, 30);
    var xa, ya, xb, yb;
    var pax, pay, pbx, pby;
    stroke(0, 128, 256);
    translate(random(width), random(height), 0);
    for(var theta = 0.0; theta < TWO_PI; theta += 0.1){
        xa = 15.0 * cos(theta)*sin(theta);
        ya = 15.0 * cos(theta)/sin(theta);
        xb = 15.0 * cos(theta)/sin(theta);
        yb = 15.0 * cos(theta)*sin(theta);

        if(theta != 0.0){
            line(pax, pay, xa, ya);
            line(pbx, pby, xb, yb);
        }
        pax = xa;
        pay = ya;
        pbx = xb;
        pby = yb;
    }
}