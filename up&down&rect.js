function setup() {
  createCanvas(400, 400);
  frameRate(30);
}
var ballX=30;
var ballSpeed=3;
var ballX2=370;
var ballSpeed2=5;
var rect1=30
var rect1Speed=4

function draw() {
  background(220);
  fill(225,225,0)
  ellipse(30,ballX,30);
  fill(255,0,0,50)
  ellipse(mouseX,ballX2,40);
  fill(100);
  rect(mouseY,rect1,80,100);

  ballX=ballX+ballSpeed;
  ballX2=ballX2+ballSpeed2;
  rect1=rect1+rect1Speed;
  if(ballX>=400){
  
    ballSpeed=-3;
  }
  if(ballX2>=400){
    ballSpeed2=-5;
  }
  
  if(ballX<=0){
    ballSpeed=3;
  }
  if(ballX2<=0){
    ballSpeed2=5;
  }
  if(rect1>=300){
    rect1Speed=-4
  }
  if(rect1<=20){
    rect1Speed=4;
  }
}
function mousePressed() {
  background(225,210,119);
}
