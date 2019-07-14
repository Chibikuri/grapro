function setup(){
	createCanvas(500, 500);
	background(255, 255, 255, 20);
}
var aoff = 0.0;
var boff = 0.0;
var posffa = 0.0;
var posffb = 0.0;
var positionX = 0.0;

function draw(){
	background(0, 0, 0, 20);
	noiseval = noise(aoff);
	noisevalb = noise(boff);
	psvala = noise(posffa);
	psvalb = noise(posffb);
	vals = map(noiseval, 0, 1, 0, width/2);
	valb = map(noisevalb, 0, 1, 0, width/2);
	valpa = map(psvala, 0, 1, 0, width);
	valpb = map(psvalb, 0, 1, 0, height);
	

	// blendMode(ADD)
	fill(vals+50, vals+10, 10);
	circle(width/2, height/2, vals);
	fill(10, vals, vals);
	circle(positionX%300+100, height/2, 10);
	aoff += 0.008;
	boff += 0.01;
	posffa += 0.01;
	posffb += 0.01;
	positionX+=1;
}