function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
}

function draw() {
  background(255,255,224);
  noStroke();
  
  
  //red square
  fill(232,0,0);
  rect(30,0,150,65);
  
  //blue square
  fill(10,115,184);
  rect(30,65,150,165);
  
  //yellow square
  fill(255,231,13);
  rect(260,18,200,140);
  
  //black big square
  fill(0,0,0);
  rect(180,65,85,165);
  
  //small yellow square
  fill(255,231,13);
  rect(0,0,30,60);
  
  //red bottom
  fill(232,0,0);
  rect(180,230,285,100);
  
  //black small square
  fill(0,0,0);
  rect(360,158,40,172);
  
  //blue bottom
  fill(10,115,184);
  rect(180,330,130,70);
  
  
  stroke(0)
  strokeWeight(9)
  line(396,0,396,400);//right side
  
  line(261,0,261,330);//second right top
  
  line(30,0,30,400);//first left
  
  line(180,0,180,400);//middle one
  
  line(259,18,400,18)//top H
  
  line(259,158,400,158)//top 3H
  
  line(30,263,180,263)
  
  
  
  
   strokeWeight(11);
  
  
  line(0,62,265,62);//top second
  line(30,230,360,230);//middle horizontal line
  line(180,330,400,330);//under red bottom
  line(360,232,360,400);//second right bottom
  line(310,330,310,400);//third bottom

  
  


}
