var bullet,wall;
var speed,weight
var thickness;

function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet=createSprite(50,200,30,30)
  wall=createSprite(600,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(255,255,255);
  bullet.velocityX=speed;
  drawSprites();

  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)) {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10) {
      wall.ShapeColor=color(255,0,0);
    }

    if(damage<10) {
      wall.shapeColor=color(0,255,0);
    }
  }
}

function hasCollided(Lbullet, Lwall) {
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true
  }
  return false
}