var fixedRect,movingRect
function setup() {
  createCanvas(1200,400);
 fixedRect= createSprite(200, 100, 50, 50);
 fixedRect.shapeColor="green"
 movingRect= createSprite(200, 400, 50, 50);
 movingRect.shapeColor="green"

 fixedRect.velocityY = 5;
 movingRect.velocityY = -5;
}

function draw() {
  background(0);  
  //movingRect.x=mouseX
  //movingRect.y=mouseY
  
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.y- movingRect.y < fixedRect.height/2 + movingRect.height/2 ){

  fixedRect.velocityY = fixedRect.velocityY *(-1);
  movingRect.velocityY = movingRect.velocityY *(-1);
}
                                                                        
  drawSprites();
}