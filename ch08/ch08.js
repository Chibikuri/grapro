var hadamard = 1/Math.sqrt(2)*[[1, 1], [1, -1]];
var num = 10;
function setup(){
	createCanvas(500, 500);
}

function draw(){
	var shapex = []
	var shapey = []
	var fib = []
	background(0, 0, 0, 20);
	for(var i=0;i < num; i++){
		shapex.push(timestamp(i))
		shapey.push(timestamp(i))
	}
	
	for(var j=0;j < num; j++){
		for(var k=num; k >0; k--){
			stroke(255, 255, 255, 20);
			noFill()
			// bezier(shapex[j], shapey[j], shapex[k], shapey[j], shapex[k], shapey[k], shapex[j], shapey[k])
			bezier(shapex[j], shapey[k], width/2, height/2, shapex[k], shapey[j], width/2, height/2);
		}
	}
}

function timestamp(n){
	// n = n + Date.now()
	n = (n + window.performance.now()) % 500
	console.log(n)
	return n
}