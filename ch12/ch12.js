var position;
var radius = 10;
var objectpos;
var particles = [];
var pvelocity = [];
var nums = 10;

function setup(){
  createCanvas(500, 500);
  rad = radius;
  for(var i=0; i < nums; i++){
    particles[i] = createVector(random(width), random(height));
    pvelocity[i] = createVector(random(-1, 1), random(-1, 1));

  }
}

function draw(){
  var hit;
  for(var j=0; j< nums; j++){
    background(0, 0, 0, 20);
    for(var k=0; k<nums; k++){
      hit = collideCircleCircle(particles[j].x, particles[j].y, rad*2, particles[k].x, particles[k].y, rad*2);
      if(j != k){
        if(hit){
          var rebound = p5.Vector.sub(particles[j], particles[k]);
          rebound.normalize();
          rebound.mult(pvelocity[j].mag());
          pvelocity[j] = rebound;
        }
    
        if(hit){
          fill(220, 20, 200);
        }else{
          fill(255);
        }

        particles[j].add(pvelocity[j]);
        // add, sub, mul, div
        if(particles[j].x >= width - radius || particles[j].x <= radius){
          pvelocity[j].x = -pvelocity[j].x;
        }else if(particles[j].y >= height - radius || particles[j].y <= radius){
          pvelocity[j].y = -pvelocity[j].y;
        }
        circle(particles[k].x, particles[k].y, radius*2);
        if (hit){
          for(var partic = 0; partic < 100 ; partic++){
            circle(particles[k].x+partic*random(), particles[k].y+partic*random(), 6);
          }
        }
      }
    }
  }
}