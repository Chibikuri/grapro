function setup(){
    createCanvas(500, 500);
}

var ball_x = 250;
var ball_y = 250;
var ball_speed_x = 1;
var ball_speed_y = 1;
var flag = 3;
var wd = 3
function draw(){
    background(10, 0, 30, 20);
    flag = flag % 100
    for(var i=0;i<=flag%10; i++){
        fill(ball_x, ball_y, 20)
        circle(ball_x+random(-wd*i, wd*i), ball_y+random(-wd*i, wd*i), i%20);
    }
    
    if(ball_x + 5 > width || ball_x - 5 < 0){
        ball_speed_x = -ball_speed_x
        flag += 1;
    }
    if(ball_y + 5 > width || ball_y - 5 < 0){
        ball_speed_y = -ball_speed_y;
        flag += 1;
    }
    ball_x += ball_speed_x;
    ball_y += ball_speed_y;
    ball_speed_x += random(-0.5, 0.5);
    ball_speed_y += random(-0.5, 0.5);
}