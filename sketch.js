var Asteroid1, Asteroid2, Asteroid3
var backgroundImg
var SpaceShip
var bullet,bullet2


var gameState = 0 
var score = 0




function preload(){
  Asteroid1Img = loadImage("assets/Asteroids.png")
  Asteroid2Img = loadImage("assets/Asteroids 2.png")
  Asteroid3Img = loadImage("assets/Asteroids3.png")
  bgImg = loadImage("assets/Background.png")
  SpaceShipImg = loadImage("assets/SpaceShip.png")
  laserImg = loadImage("assets/laser.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1

  SpaceShip = createSprite(700, 700)
  SpaceShip.scale = 0.15
  SpaceShip.addImage(SpaceShipImg);
  SpaceShip.debug = true
  SpaceShip.setCollider("circle")

  textSize(50);
  fill("white")
  text("Score: "+score, 20,20)

  AsteroidGroup = new Group()
  bulletGroup = new Group()

  var rand = Math.round(random())
  console.log(rand)
}

function draw() {
  background(255,255,255);



if (gameState === 0){

  if(keyDown("RIGHT_ARROW")){
    SpaceShip.x = SpaceShip.x+30
  }
  if(keyDown("LEFT_ARROW")){
   SpaceShip.x = SpaceShip.x-30
  }
  if(keyDown("UP_ARROW")){
    SpaceShip.y = SpaceShip.y-30
  }  
  if(keyDown("DOWN_ARROW")){
    SpaceShip.y = SpaceShip.y+30
  }

  if(keyDown("space")){
shoot();
  }
 
if(AsteroidGroup.isTouching(bulletGroup)){
AsteroidGroup.destroyEach()
bulletGroup.destroyEach()
score=score+1
}

if(AsteroidGroup.isTouching(SpaceShip)){
  gameState = 1
}
  
if (gameState===1){
  
}
  Asteroids();
  drawSprites();
}

function Asteroids (){
  if(frameCount%10===0){
    Asteroid1 = createSprite(500,500,40,40)
    Asteroid1.y = Math.round(random(20, 20));
    Asteroid1.x = Math.round(random(20, 1000))
    

    Asteroid1.addImage(Asteroid1Img)
    Asteroid1.scale = 0.15
    Asteroid1.velocityY = 10
    Asteroid1.debug= true

   
    Asteroid1.lifetime = 400

    AsteroidGroup.add(Asteroid1)
  }

}
}

function shoot(){
  bullet = createSprite(10,20)
  bullet.scale=0.05
  bullet.velocityY = -20
  bullet.addImage(laserImg)
  bullet.x = SpaceShip.x- 47
  bullet.y = SpaceShip.y- 45

  bullet2 = createSprite(10,20)
  bullet2.scale=0.05;
  bullet2.velocityY = -20
  bullet2.addImage(laserImg)
  bullet2.x = SpaceShip.x+ 47
  bullet2.y = SpaceShip.y- 45

  bulletGroup.add(bullet,bullet2);


}
