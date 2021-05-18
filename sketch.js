   var fish, fI, shark, shA;
   var bg1, bg2, bg3, bg4;
   var ob1, ob2, ob3, ob4, ob5, ob6;
   var ob7, ob8, ob9, ob10, ob11, ob12;
   var chest, chI, heart, hI;
   var shield, shI;
   var INV1, INV2, INV3, INV4;
   var obstaclesGroup, heartGroup, chestGroup, shieldGroup;
   var coins = 0;
   var life = 3;

   var START = 0;
   var PLAY = 1;
   var END = 2;
   
   var gameState = PLAY;

   var scrollSpeed = 10;
   var scrollSpeed2 = 10;

   var x1 = 0;
   var x2;

   var x3 = 0;
   var x4;

   var x5 = 0;
   var x6;

   var x7 = 0;
   var x8;


 function preload(){
     bg1 = loadImage("background/background1.png");
     bg2 = loadImage("background/background2.png");
     bg3 = loadImage("background/background3.png");
     bg4 = loadImage("background/background4.png");

     fI = loadAnimation("fish/fish1.png", "fish/fish2.png", "fish/fish3.png", "fish/fish4.png",
                       "fish/fish7.png", "fish/fish8.png", "fish/fish9.png", "fish/fish10.png");

     shA = loadAnimation("shark/shark1.png", "shark/shark2.png", "shark/shark3.png",
                         "shark/shark4.png", "shark/shark5.png", "shark/shark6.png",
                         "shark/shark7.png", "shark/shark8.png");

     ob1 = loadImage("obstacles/Anchor.png");
     ob2 = loadImage("obstacles/Barrel_1.png");
     ob3 = loadImage("obstacles/plastic bag.png");
     ob4 = loadImage("obstacles/bottle.png");
     ob5 = loadImage("obstacles/Stone_4.png");
     ob6 = loadImage("obstacles/Net.png");

     ob7 = loadImage("obstacles/Barrel_2.png");
     ob8 = loadImage("obstacles/Mast.png");
     ob9 = loadImage("obstacles/Seaweed_1.png");
     ob10 = loadImage("obstacles/Steering-wheel.png");
     ob11 = loadImage("obstacles/Stone_1.png");
     ob12 = loadImage("obstacles/Stone_5.png");

     chI = loadImage("chest.png");
     hI = loadImage("Heart.png");
     shI = loadImage("Shield.png");
}


 function setup(){
     createCanvas(windowWidth, windowHeight);

     fish = createSprite(450, height - 75, 20, 20);
     fish.addAnimation("swim", fI);
     fish.scale = 0.2;

     shark = createSprite(150, height - 100, 20, 20);
     shark.addAnimation("eat", shA);
     shark.scale = 0.4;

     INV1 = createSprite(100, height - 15, 500, 10);
     INV1.visible = false;   
     
     INV2 = createSprite(500, height - 25, 100, 10);
     INV2.visible = false;

     INV3 = createSprite(100, -5, 500, 10);
     INV3.visible = false;

     INV4 = createSprite(500, 25, 100, 10);
     INV4.visible = false;

     obstaclesGroup = new Group();
     heartGroup = new Group();
     chestGroup = new Group();
     shieldGroup = new Group();

     x2 = width;
     x4 = width;
     x6 = width;
     x8 = width;
}


 function draw(){
     
    background("cyan");

  if(gameState === PLAY){

  if(keyCode === 38){
    fish.y = fish.y - 5;
}
  
  if(keyCode === 40){
    fish.y = fish.y + 5;
}
    shark.y = fish.y;

    elements();
    spawnObstacles();
    
  if(frameCount <= 1000){
    scrollBackground1();
}
  if(frameCount >= 1000 && frameCount <= 2000){
     scrollBackground2();
}    
     
  if(frameCount > 2000 && frameCount <= 3000){
     scrollBackground3();   
}

  if(frameCount > 3000 && frameCount <= 4000){
     scrollBackground4();
}

  if(frameCount > 4000 && frameCount <= 6000){
     scrollBackground1();
}

  if(frameCount > 6000 && frameCount <= 8000){
     scrollBackground2();
}    
    
 if(frameCount > 8000 && frameCount <= 10000){
     scrollBackground3();   
}

 if(frameCount > 10000){
     scrollBackground4();
}

  if(obstaclesGroup.isTouching(fish)){
     life = life - 1;
     obstaclesGroup[0].destroy();
}

  if(obstaclesGroup.isTouching(fish) && life === 0){
     gameState = END;
}

  if(heartGroup.isTouching(fish)){
     life = life + 1;
     heartGroup[0].destroy();

}

  if(chestGroup.isTouching(fish)){
     coins = coins + 50;
     chestGroup[0].destroy();
}
}

if(gameState === END){
     obstaclesGroup.destroyEach();
     heartGroup.destroyEach();
     shieldGroup.destroyEach();
     chestGroup.destroyEach();

  if(frameCount <= 1000){
     scrollSpeed = 0;
     x1 = 0;
     x2 = 0;
     scrollBackground1();
}

  if(frameCount >= 1000 && frameCount <= 2000){
     scrollSpeed2 = 0;
     x3 = 0;
     x4 = 0;
     scrollBackground2();
}

  if(frameCount >= 2000 && frameCount <= 3000){
     scrollSpeed2 = 0;
     x5 = 0;
     x6 = 0;
     scrollBackground3();
}

  if(frameCount >= 3000 && frameCount <= 4000){
     scrollSpeed2 = 0;
     x7 = 0;
     x8 = 0;
     scrollBackground4();
}
}

     shark.collide(INV1);
     shark.collide(INV3);
     fish.collide(INV2);
     fish.collide(INV4);
    
     drawSprites();    


     fill("yellow");

     textFont("magneto");
     textSize(30);
     text("Coins: " + coins, width - 200, 50);
     
     textSize(30);
     text("Lives: " + life, width - 200, 100);

}


 function scrollBackground1(){
  
     image(bg1, x1, 0, width, height);
     image(bg1, x2, 0, width, height);

     x1 -= scrollSpeed;
     x2 -= scrollSpeed;
  

  if (x1 <= -width){    
     x1 = width;           
}

  if(x2 <= -width){
     x2 = width;
}
}


 function scrollBackground2(){
 
     image(bg2, x3, 0, width, height);
     image(bg2, x4, 0, width, height);

     x3 -= scrollSpeed2;
     x4 -= scrollSpeed2;
 
  if (x3 <= -width){    
     x3 = width;           
}

  if(x4 <= -width){
     x4 = width;
}
}
 

 function scrollBackground3(){

     image(bg3, x5, 0, width, height);
     image(bg3, x6, 0, width, height);

     x5 -= scrollSpeed2;
     x6 -= scrollSpeed2;

  if (x5 <= -width){    
     x5 = width;           
}

  if(x6 <= -width){
     x6 = width;
}
}
 

function scrollBackground4(){

     image(bg4, x7, 0, width, height);
     image(bg4, x8, 0, width, height);

     x7 -= scrollSpeed2;
     x8 -= scrollSpeed2;

  if (x7 <= -width){    
     x7 = width;           
}

  if(x8 <= -width){
     x8 = width;
}
}

 


 function spawnObstacles(){
  if(frameCount % 160 === 0){
   var obstacle1 = createSprite(windowWidth, 50, 20, 20);
     obstacle1.velocityX = -10;

   var rand = Math.round(random(1, 12));

    switch(rand){
     case 1: obstacle1.addImage(ob1);
             obstacle1.scale = 0.5;
             obstacle1.y = 60;
             break;

     case 2: obstacle1.addImage(ob2);
             obstacle1.scale = 0.45;
             obstacle1.y = 100;
             break;

     case 3: obstacle1.addImage(ob3);
             obstacle1.scale = 0.2;
             obstacle1.y = 50;
             obstacle1.velocityX = -20;
             break;

     case 4: obstacle1.addImage(ob4);
             obstacle1.scale = 0.3;
             obstacle1.y = 50;
             obstacle1.velocityX = -20;
             break;

     case 5: obstacle1.addImage(ob5);
             obstacle1.scale = 1;
             obstacle1.y = 100;
             break;

     case 6: obstacle1.addImage(ob6);
             obstacle1.scale = 0.5;
             obstacle1.y = 50;
             break;

     case 7: obstacle1.addImage(ob7);
             obstacle1.scale = 0.5;
             obstacle1.y = 500;
             break;

     case 8: obstacle1.addImage(ob8);
             obstacle1.scale = 0.6;
             obstacle1.y = 400;
             break;

     case 9: obstacle1.addImage(ob9);
             obstacle1.scale = 0.75;
             obstacle1.y = 500;
             break;

     case 10: obstacle1.addImage(ob10);
              obstacle1.scale = 0.75;
              obstacle1.y = 500;
              break;

     case 11: obstacle1.addImage(ob11);
              obstacle1.scale = 0.75;
              obstacle1.y = 450;
              break;

     case 12: obstacle1.addImage(ob12);
              obstacle1.scale = 1;
              obstacle1.y = 450;
              break;
     default: break;
}
     obstacle1.lifetime = 700;
     obstaclesGroup.add(obstacle1);
}
}


 function elements(){
   if(frameCount % 400 === 0){
     chest = createSprite(windowWidth, windowHeight/2, 20, 20);
     chest.addImage(chI);
     chest.scale = 0.15;
     chest.velocityX = -10;
     chest.lifetime = 600;
     chestGroup.add(chest);
}
 
  if(frameCount % 900 === 0){
     shield = createSprite(windowWidth, windowHeight/2, 20, 20);
     shield.addImage(shI);
     shield.scale = 0.5;
     shield.velocityX = -15;
     shield.lifetime = 600;
     shieldGroup.add(shield);
}
 
  if(frameCount % 1200 === 0){
     heart = createSprite(windowWidth, windowHeight/2, 20, 20);
     heart.addImage(hI);
     heart.scale = 0.5;
     heart.velocityX = -20;
     heart.lifetime = 60;
     heartGroup.add(heart);
}
}