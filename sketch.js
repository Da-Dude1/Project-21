var car,wall, thickness
var speed, weight 

function setup() {
  createCanvas(1000,400);
  
  car=createSprite(50, 200, 50, 50);

  thickness=random(22,83)

  wall=createSprite(900,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)

  speed=random(223,321)
  weight=random(30,52)

  car.velocityX=speed
}

function draw() {
  background(255,255,255); 
  
  if (hasCollided(car,wall)) {
    
  }
  
  drawSprites();
}

function hasCollided (bullet,wall){
  carRightEdge=car.x+car.width
  wallLeftEdge=wall.x
  
  if (carRightEdge>=wallLeftEdge) {
    return true
  }
  return false
}