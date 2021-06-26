var rect1,rect2
function setup() {
  createCanvas(1200,800);
rect1=createSprite(600, 400, 50, 80);
rect2=createSprite(400,200,80,30)
rect1.shapeColor="pink";
rect2.shapeColor="pink";
}

function draw() {
  background("black"); 

  rect2.x=mouseX;
  rect2.y=mouseY;

  if(rect1.x-rect2.x<rect1.width/2+rect2.width/2
    && rect2.x-rect1.x<rect1.width/2+rect2.width/2
    && rect2.y-rect1.y<rect1.height/2+rect2.height/2
  && rect1.y-rect2.y<rect1.height/2+rect2.height/2
    ){
      rect1.shapeColor="blue";
      rect2.shapeColor="blue";
  }
  else{
    rect1.shapeColor="pink";
    rect2.shapeColor="pink";
  }
  drawSprites();
}