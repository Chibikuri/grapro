var num = 10;
var count = 0;
var interbal = 1000;
function setup(){
	createCanvas(500, 500);
}

function draw(){
	var r = [];
	var g = [];
	var b = [];
	var shapex = [];
	var shapey = [];
	background(0, 0, 0, 20);
	for(var i=0;i < num; i++){
		r.push((i*100)%255);
		g.push((i*200)%255);
		b.push((i*300)%255);
		shapex.push(stamp(i, count));
		shapey.push(stamp(i, count));
	}
	noFill()
	for(var j=0;j < num; j++){
		stroke(r[j], g[j], b[j], 20);
		for(var k=0; k <num; k++){
			bezier(0, height, shapex[j], shapey[k], shapex[k], shapey[j],  width, 0);
			bezier(0, 0, shapex[j], shapey[k], shapex[j], shapey[k], height, height);
		}
	}
	count++;
}

function stamp(n, count){
	return (n * count) % interbal
}
