var r = [];
var g = [];
var b = [];
var width = 500;
var height = 500;
function setup(){
	createCanvas(500, 500);
	for(var i=0;i<width;i++){
		r[i] = i%255;
		g[i] = i%64+10;
		b[i] = i%128+20;
	}
}
var rad = 10;
var counter = 0;
var p_ball_num = 1;
var ball_num = 1;
var ball_xs = [width/2];
var ball_ys = [height/2];
var ball_x_sp = [1.01];
var ball_y_sp = [1.02];
function draw(){
	// background(r[counter % 255], g[counter%255], b[counter%255], 20);
	background(0, 0, 0, 20);
	p_ball_num = ball_num;
	
	for(var j=0; j<=ball_num;j++){
		stroke(r[counter%255], g[counter%255], b[counter%255])
		line(width/2, height/2, ball_xs[j], ball_ys[j]);
		fill(r[counter%255], g[counter%255], b[counter%255]);
		circle(ball_xs[j], ball_ys[j], rad);
		ball_xs[j] = ball_xs[j] * random(-2, 2) * ball_x_sp[j];
		ball_ys[j] = ball_ys[j] * random(-2, 2) * ball_y_sp[j];
		if(ball_xs[j] + rad/2 > width||ball_xs[j] - rad/2 < 0){
			ball_x_sp[j] = -ball_x_sp[j];
			ball_xs.push(width/2);
			ball_ys.push(height/2);
			ball_xs[j] = width/2;
			ball_ys[j] = height/2;
			ball_num++;
		} else if(ball_ys[j] + rad/2 > height||ball_ys[j] - rad/2 < 0){
			ball_y_sp[j] = -ball_y_sp[j];
			ball_xs.push(width/2);
			ball_ys.push(height/2);
			ball_xs[j] = width/2;
			ball_ys[j] = height/2;
			ball_num++;
		}
	}
	dif_ball = ball_num - p_ball_num;
	for(var k=0;k<dif_ball;k++){
		ball_x_sp.push(random(-0.5, 1.5));
		ball_y_sp.push(random(-0.5, 1.5));
	}
	counter++;
}
