function setup(){
	//initialize
	createCanvas(800, 800)	
}
//1080p 2K
//2K * 4p ... 4K
//main part of script
//called 30 times
function draw(){
	background(120, 200, 330); //gray
    for(var i=0; i <= 100; i++){
        for(var j=30; j<= 100; j++){
            c = color(255*Math.random(), 255*Math.random(), 255*Math.random());
            circle(300+Math.random()*100, 300+Math.random()*100, Math.random()*10);
            fill(c)
            // sleep(0.0001);
        }
    }
    // c = color(1024*Math.random()%256, 512*Math.random()%256, 256*Math.random());
    // fill(c);
    // ellipse(120, 80, 110, 100);
    // fill(0, 0, 0);
    // circle(130, 130, 10);
   
}
