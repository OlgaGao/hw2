function setup() {
  createCanvas(400, 400);
  background(255,255,255);
  frameRate(30);
}
var crazy1=30
var crazy1speed=5;
var bigdot1=30;
var bdspeed=3;
var bbq=100;
var bbqs=15;


function draw() {
  background(0);
  fill(255,255,255);
  circle(crazy1,crazy1,60);
  crazy1=crazy1+crazy1speed;
  
  
  circle(70,bbq,100);
  bbq=bbq+bbqs;
  noFill();
  stroke(255);
  circle(bigdot1,50,300);
  bigdot1=bigdot1+bdspeed;

  if(crazy1>=400){
    crazy1speed=-5;
  }
  if(crazy1<=0){
    crazy1speed=+5;
  }
  if(bigdot1>=370){
    bdspeed=-3;
  }
if(bigdot1<=170){
  bdspeed=3;
}
  if(bbq>=360){
    bbqs=-15;
  }
  if(bbq<=0){
    bbqs=15;
  }
}

function mousePressed(){
  fill(210,240,222);
  rect(mouseY,200,mouseX,70);
  
}
