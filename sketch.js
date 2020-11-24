
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 score = 0;
}



function setup() {
createCanvas(400, 400);
  
monkey=createSprite(80, 315, 20, 20);
monkey . addAnimation( "moving", monkey_running);
monkey.scale=0.1;

ground = createSprite (400, 350, 900, 10);
ground. velocityX=-4;
//ground. x=ground. width/2;
  
obstacleGroup = new Group;
bananaGroup = new Group;
//if (banana.collide=(monkey)) {
//score=200;
//}


  obstacleGroup = new Group();
  bananaGroup = new Group();
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true

}


function draw() {
 background(180);
  //displaying score
  text("Score: "+ score, 300,50);
     score = score + Math.round(getFrameRate()/60);
 

spawnObstacle();
spawnbanana();
     
   if (ground.x < 0){
     ground.x = ground.width/2;
    }

 if(keyDown("space")&& monkey.y >= 280) {
        monkey.velocityY = -8;
    }
    
    //add gravity
   monkey.velocityY = monkey.velocityY + 0.5

 monkey.collide(ground);



console. log (monkey. y);
spawnObstacle.depth = monkey.depth;
//monkey.depth= monkey.depth+1;
 drawSprites();
   
}
 function spawnObstacle(){
   if (frameCount % 100 === 0){
    obstacle = createSprite(400,330,10,40);
  obstacle.velocityX=-5;
    obstacle.addImage(obstacleImage);
     obstacle.scale=0.1
   obstacleGroup.add (obstacle);
    }
 }
   function  spawnbanana () {
  if (frameCount % 100 === 0){
  banana = createSprite(400,220,10,40);
  banana.velocityX=-5;
  banana.addImage(bananaImage);
  banana.scale=0.1
  bananaGroup.add (banana);  
}


 }
  





