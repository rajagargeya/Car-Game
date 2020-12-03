var wall, car;
function setup() {
  createCanvas(800,400);
  wall = createSprite(790, 200, 20, 150);
  wall.shapeColor = "brown";
  wall.debug = false;
  
  car = createSprite(400, 400, 20, 20);
  car.shapeColor = "yellow";
  car.debug = false;
}

function draw() {
  background("black");  
  car.x = World.mouseX;
  car.y = World.mouseY;
  /*
  if(your code should be here) {
     
     }
  else {
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }
  */
  if(wallx-car-x<(car.width+wall.width)/2)
    {
      car.velocityX=0;
      var deformation=0*
    }
  drawSprites();
}