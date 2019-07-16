// This is simulation for density matrix.
var resolution = 7;
var init_table_i = Array(10).fill().map(v => Math.floor(Math.random() * (Math.pow(2, resolution)+1) ));
var init_table_j = Array(10).fill().map(v => Math.floor(Math.random() * (Math.pow(2, resolution)+1) ));
var lifegame = function(p){
  var state = []
  
  var width = 512;
  var height = 512;
  p.setup = function(){
    p.createCanvas(width, height);
    p.frameRate(10);
    p.background(0);
    for(var i=0; i<Math.pow(2, resolution);i++){
      substate = []
      for(var j=0; j<Math.pow(2, resolution); j++){
        if(initial(i, j)){
          substate.push(1)
        }else{
          substate.push(0)
        }
      }
      state.push(substate)
    }
  }

  p.draw = function(){
    p.background(0, 0, 0, 20);
    var upwidth = width/Math.pow(2, resolution)
    for(var sth = 1; sth < Math.pow(2, resolution)-1; sth++){
      for(var stw = 1; stw < Math.pow(2, resolution)-1; stw++){
        var nearsum = state[sth-1][stw-1] + state[sth-1][stw] + state[sth-1][stw+1] + state[sth][stw-1]+ state[sth][stw+1] + state[sth+1][stw-1] + state[sth+1][stw] + state[sth+1][stw+1]
        // console.log(nearsum)
        switch(nearsum){
          case 0:
            state[sth][stw] = 0;
            break;
          
          case 1:
            state[sth][stw] = 0;
            break;

          case 2:
            if(state[sth][stw] == 1){
              state[sth][stw] = 1;
            }
            break;

          case 3:
            state[sth][stw] = 1;
            break;

          case 5:
              var num = p.int(p.random(-2, 2))
              // var num2 = p.int(p.random(-2, 2))
              // console.log(num)
  
              state[sth+num][stw+num] = 0;
              // state[sth+num2][stw+num2] =0;
              break;

          default:
            state[sth][stw] = 0;
            break;

        }
        var col = p.map(state[sth][stw], 0, 1, 0, 255)
        // var col = map(nearsum, 0, 4, 0, 255)
        p.fill(32, 10, col);
        p.stroke(0);
        p.rect(stw+(upwidth*(stw-1)), sth+(upwidth*(sth-1)), stw+(upwidth*stw), sth+(upwidth*sth));
      }
    }
    // console.log(state)
  }

  function initial(i, j){
    if(i%50==0){
      return true;
    }else{
      return false;
    }
  }
}
var explain = function(p){
  p.setup = function(){
    var canv = p.createCanvas(680, 200);
    p.background(20);
  }
  p.draw = function(){
    // outline
    p.stroke(255, 255, 255);
    p.noFill();
    p.rect(40, 40, 120, 120);
    for(var k=40; k<=120; k+=40){
      for(var h=40; h<=120; h+=40){
        p.rect(k, h, 40, 40);
      }
    } 
    for(var k=200; k<=280;  k+=40){
      for(var h=40; h<=120; h+=40){
        p.rect(k, h, 40, 40);
      }
    }
    for(var k=360; k<=440;  k+=40){
      for(var h=40; h<=120; h+=40){
        p.rect(k, h, 40, 40);
      }
    }
    for(var k=520; k<=600;  k+=40){
      for(var h=40; h<=120; h+=40){
        p.rect(k, h, 40, 40);
      }
    }
    // blue
    p.fill(32, 10, 255);
    p.rect(40, 40, 40, 40);
    p.rect(80, 120, 40, 40);

    p.rect(200, 40, 40, 40);
    p.rect(360, 40, 40, 40);
    p.rect(440, 40, 40, 40);
    p.rect(400, 120, 40, 40);
    p.rect(520, 40, 40, 40);
    p.rect(560, 40, 40, 40);
    p.rect(600, 40, 40, 40);
    p.rect(520, 80, 40, 40);
    p.rect(560, 120, 40, 40);

    // yellow
    p.fill(220, 190, 0);
    p.rect(280, 40, 40, 40);
    p.rect(280, 80, 40, 40);
    p.rect(200, 120, 40, 40);
    p.rect(240, 120, 40, 40);

    // red
    p.fill(200, 20, 20);
    p.rect(80, 80, 40, 40);
    p.rect(240, 80, 40, 40);
    p.rect(400, 80, 40, 40);
    p.rect(560, 80, 40, 40);

    // text
    p.fill(255);
    p.textSize(30);
    p.text('Survive', 45, 190);
    p.text('Die', 240, 190);
    p.text('Populate', 360, 190);
    p.text('Kill', 540, 190);
  }
}