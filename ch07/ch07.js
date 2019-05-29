var balls_x = []
var balls_y = []
var speedxs = []
var speedys = []
var num = 1;
// var dev = 200;
function setup(){
	createCanvas(500, 500);

}
function draw(){
	// background(r[counter % 255], g[counter%255], b[counter%255], 20);
	for(var i=0; i<num;i++){
		posX = random(width);
		posY = random(height);
		speedX = random(-3, 3);
		speedY = random(-3, 3);
		balls_x.push(posX)
		balls_y.push(posY)
		speedxs.push(speedX)
		speedys.push(speedY)
	}
	background(0, 0, 0, 20);
	for(var j=0; j < num; j++){
		balls_x[j] = balls_x[j] + speedxs[j]
		balls_y[j] = balls_y[j] + speedys[j]
	}
	
	for(var j=0; j<num; j++){

		if (balls_x[j] < 0 || balls_x[j]> width) {
			speedxs[j] = -1.0*speedxs[j]
		};
		if (balls_y[j] < 0 || balls_y[j] > width) {
			speedys[j] = -1.0*speedys[j]
		};
		fill(balls_x[j], balls_y[j], 10);
		// circle(balls_x[j], balls_y[j], 5);
		for(var l=0; l<num; l++){
			var d = dist(balls_x[j], balls_y[j], balls_x[l], balls_y[l]);
			if(d < 50){
				stroke(balls_x[j], balls_y[j], 200, 10);
				noFill()
				bezier( balls_x[j], balls_x[j], width/2, height/2,balls_x[l], balls_y[l], width/2, height/2);
			}	
		}
	}
	num++;
	num = num%200;
}
