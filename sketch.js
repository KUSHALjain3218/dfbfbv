var hi,laser;
var gameState=1;
var score=0;
function preload(){
hi=loadImage("myy/c20.jpg")
shutle=loadImage("myy/rrr.png.png");
meteor=loadImage("myy/metreorr.png");
lase=loadImage("myy/laser1.png");
game1=loadImage("myy/game over image2.png");
game2=loadImage("myy/game over image1.png");
intro=loadSound("myy/Pacman_Introduction_Music-KP-826387403.mp3");
laserdd=loadSound("myy/Laser_Gun-Mike_Koenig-1975537935.mp3");
blast=loadSound("myy/Shotgun_Blast-Jim_Rogers-1914772763.mp3");
cheer1=loadSound("myy/Cheering 3-SoundBible.com-1680253418.mp3");
cheer2=loadSound("myy/Football_Crowd-GoGo-1730947850.mp3");
}


function setup() {
  createCanvas(500,889);
  edges=createEdgeSprites();
 
  if(gameState===1){
intro.play();
    button=createButton("LEVEL 1");
    button.position(250,444.5);
    button.mousePressed(()=>{
      gameState=2;
     
    })
    }
 
  metttGroup=createGroup();
 laserGroup=createGroup();
}

function draw() {
  background(hi);  
  drawSprites();
  
    if(gameState===2){
    
      rocket=createSprite(250,800,20,20);
      rocket.addImage("shutle crock",shutle);
      rocket.scale=(0.03);
      gameState=3;
      rocket.collide(edges);
      button.hide();
     
    }
   
    if(keyDown("space")){
      laser1();

    }
    for (var i=0; i<metttGroup.length;i++){
      if(metttGroup.get(i).isTouching(laserGroup)){
      metttGroup.get(i).destroy();
     blast.play();
    score=score+1;
     
      }
  }
  fill ("white")
textSize(30);
  text("score:"+score,230,40);
  //rocket.velocityX=0;
 // rocket.velocityY=0;

    
   
    
    if(keyDown("left")){
      rocket.velocityX=-5;
      
    }
    if(keyDown("right")){
      rocket.velocityX=5;
      
    }

    if(gameState===3){
    mettt();
  
    if(metttGroup.isTouching(rocket)){
      metttGroup.destroyEach();
      laserGroup.destroyEach();
      fill ("white")
      textSize(30);
      text("GAME OVER",125,400);
      gameState=4;
   }
 
    if(score===500){
gameState =5;


    }
if(gameState===4){
  metttGroup.destroyEach();
  laserGroup.destroyEach();
  dd12=createSprite(250,400,10,50)
dd12.addImage(game2)
dd12.scale=0.5;
cheer1.play();
}
if(gameState===5){
  metttGroup.destroyEach();
  laserGroup.destroyEach();
 dd11=createSprite(250,400,10,50)
dd11.addImage(game1)
dd11.scale=0.5;

cheer2.play();
}
    };
}
function mettt(){
  if(frameCount%10===0){
   met=createSprite(Math.round(random(450,5)),0,10,10,) 
   met.addImage("hi",meteor); 
  met.velocityY=5;
    met.scale=0.2;
metttGroup.add(met);
  }
}

function laser1(){
if(frameCount%10===0){
  laser = createSprite(rocket.x,rocket.y,20,20);
  laser.addImage("laser",lase)
  laser.scale=0.1;
  laser.velocity.y=-20;
  laserGroup.add(laser);
  laserdd.play();
}

}


