// This is simulation for density matrix.  
var width = 512;
var qubit = 5;
var circheight = 40*(qubit+4)

var matrixdraw = function(p){
  var state = [];
  var height = 512;
  p.setup = function(){
    p.createCanvas(width, height);
    p.background(0);
    for(var i=0; i<Math.pow(2, qubit);i++){
      substate = []
      for(var j=0; j<Math.pow(2, qubit); j++){
        substate.push(Math.round(p.random(255)))
      }
      state.push(substate)
    }
  }

  p.draw = function(){
  // console.log(state)
    var upwidth = width/Math.pow(2, qubit)
    for(var sth = 0; sth < Math.pow(2, qubit); sth++){
      for(var stw = 0; stw < Math.pow(2, qubit); stw++){
        p.fill(state[sth][stw], 14, 10);
        p.stroke(0);
        p.rect(stw+(upwidth*stw), sth+(upwidth*sth), stw+(upwidth*(stw+1)), sth+(upwidth*(sth+1)));
      }
    }
  }
}

var qcircuit = function(p) {
  p.setup = function() {
    p.createCanvas(width, circheight);
    p.background(200);
  };

  p.draw = function() {
    for(var c=40; c < qubit*40; c += 40){
      p.stroke(0);
      p.line(10, c, width-10, c);
    }
  };
};