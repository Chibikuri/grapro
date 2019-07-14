function setup(){
	createCanvas(500, 500);
	background(255, 255, 255, 20);
}

var coln = 0;
function draw(){
	background("#fffacd");
	var colist = new Test(coln, width/2, height/2);
	var posx = colist.getposition('x');
	var posy = colist.getposition('y');
	for(var i=0; i<100; i++){
		X = width/2+mouseX/5-50;
		Y = height/2+mouseY/5-50;
		fill(colist.color[0]-2*i, colist.color[1]-2*i, colist.color[2]-2*i);
		circle(X, Y, 100-i);
		line(0, 0, X, Y);
		line(width, 0, X, Y);
		line(0, height, X, Y);
		line(width, height, X, Y);
	}
	coln ++;
}


class Test {
	constructor(ncolor, initpositionx, initpositiony){
		this.color = ncolor % 255;
		this.inix = initpositionx;
		this.iniy = initpositiony;
	}

	getcolor(){
		color = [random(this.color), random(this.color), random(this.color)]
		return color
	}
	getposition(x){
		if(x == 'x'){
			return this.inix;
		}else if(x =='y'){
			return this.iniy;
		}
	}

}

