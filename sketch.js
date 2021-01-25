var PLAY =1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var ground,groundImage;

var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);

  
  
  monkey = createSprite(70,370,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(70,430,1200,20);
  ground.x = ground.width /2;
  
  obstaclesGroup = createGroup();
  FoodGroup = createGroup();
  
  
  score = 0;
  
  
  
  
  
}


function draw() {
  
background("lightBlue");
  
  text("Score :"+score,480,50);
  
  
  if(gameState === PLAY){
     
    score = score + Math.round(getFrameRate()/60)
    if(keyDown("space") && monkey.y>300){
      monkey.velocityY=-12;
    }
    monkey.velocityY = monkey.velocityY+0.8;
    monkey.collide
     
    if(obstaclesGroup.isTouching(monkey)){
    gameState = END;
    
     }
    spawnBanana();
  spawnObstacles();
    
    if(FoodGroup.isTouching(monkey)){
      
      FoodGroup.destroyEach();
      score =score + 10;
      
    }
    
    
    
    
    
     
     }
  else if(gameState === END){
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    
    FoodGroup.setVelocityXEach(0);
    FoodGroup.setLifetimeEach(-1)
    
    
    
  }
              
  
  
  
  
  
  
              
  
              
              
               
  
    
  
  
  
  monkey.collide(ground);
  
  drawSprites();
}

function spawnObstacles(){
  
  if(frameCount % 120 === 0){
    
    var obstacle = createSprite(600,382,20,20);
    obstacle.velocityX =-(12 + score/100);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    
    
    obstaclesGroup.add(obstacle);
  }
  
 
  
}


function spawnBanana(){
  
  if (frameCount % 80 === 0){
    var fruit = createSprite(800,Math.round(random(120,250)),20,20)
    
    fruit.addImage(bananaImage);
    fruit.scale=0.2;
    fruit.velocityX=-(12 + score/100);
    
     FoodGroup.add(fruit);
    
  }
 
  
  
}










