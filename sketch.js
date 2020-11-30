

var fixedRect;

var movingRect;

function setup() {
  createCanvas(1200,800);

  //Creating sprites for both fixed & moving rectangle
  //fixedRect = createSprite(200, 200, 50, 80);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "yellow"
  //fixedRect.velocityX = 5
  fixedRect.velocityY = 5
  
  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green"
  //movingRect.velocityX = -5
  movingRect.velocityY = -5
}

function draw() {
  background(255,255,255);  

  //console.log(movingRect.x - fixedRect.x); //fixedRect/2 = 25 , movingRect/2 = 40
  //console.log(movingRect.x - fixedRect.Rect)
  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 ){
    movingRect.velocityX *= (-1);
    fixedRect.velocityX *= (-1);
  }

  if(movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor =  "red"
    movingRect.velocityY *= (-1);
    fixedRect.velocityY *= (-1);
  }
  
 drawSprites();
}