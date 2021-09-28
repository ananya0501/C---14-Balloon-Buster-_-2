//creating the variables
var scene, sceneImage;
var bow, bowImage;
var arrow, arrowImage, arrowGroup;
var pinkB, pink_balloonImage, pinkB_Group;
var blueB, blue_balloonImage, blueB_Group;
var greenB, green_balloonImage, greenB_Group;
var redB, red_balloonImage, redB_Group;
var edges;
var score = 0;

function preload()
{  
  //loading the background, bow, arrow, pinkB, blueB, greenB & redB images
  sceneImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  red_balloonImage = loadImage("red_balloon0.png");
}

function setup() 
{
  //creating the canvas
  createCanvas(400, 400);

  //making the edges as sprites
  edges = createEdgeSprites();
  
  //creating the scene
  scene = createSprite(0,0,400,400);
  scene.addImage(sceneImage);
  scene.scale = 2.5
  
  // creating the bow 
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //creating the groups for arrows & balloons
  arrowGroup = new Group();  
  pinkB_Group = new Group();
  blueB_Group = new Group();
  greenB_Group = new Group();
  redB_Group = new Group();
}

function draw()
{
  // making the ground move
  scene.velocityX = -3
  
  //resetting the scene
  if (scene.x < 0)
  {
    scene.x = scene.width/2;
  }
  
  //making the bow move
  bow.y = World.mouseY
  
  // releasing the arrow when space key is pressed
  if (keyDown("Space")) 
  {
    createArrow();  
  }
  
  //creating continuous enemies

  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) 
  {
    if (select_balloon == 1) 
    {
      pinkBalloon();
    } 
    else if (select_balloon == 2)
    {
      blueBalloon();
    } 
    else if (select_balloon == 3) 
    {
      greenBalloon();
    } 
    else 
    {
      redBalloon();
    }
  }
  
  //destroying the balloons & arrows when they touch each other 

  if (arrowGroup.isTouching(pinkB_Group))
  {
    pinkB_Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }

  if (arrowGroup.isTouching(blueB_Group)) 
  {
    blueB_Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+2;
  }

  if (arrowGroup.isTouching(greenB_Group)) 
  {
    greenB_Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+3;
  }

  if (arrowGroup.isTouching(redB_Group)) 
  {
    redB_Group.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }

  drawSprites();

  //displaying the score
  text("Score: "+ score, 300,50);
}

// creating the function for spawning arrows
function createArrow() 
{
 arrow = createSprite(100, 100, 60, 10);
 arrow.addImage(arrowImage);
 arrow.scale = 0.3;
 arrow.x = 360;
 arrow.y = bow.y;
 arrow.velocityX = -4;
 arrow.lifetime = 100;
 arrow.debug = false;
 arrow.setCollider("circle",0,0,2);

//adding the sprite "arrow" to the group
 arrowGroup.add(arrow);
}

// creating the function for spawning balloons

function pinkBalloon() 
{
  pinkB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkB.addImage(pink_balloonImage);
  pinkB.scale = 1;
  pinkB.velocityX = 3;
  pinkB.lifetime = 150;
  
  //adding the sprite "pinkB" to the group
  pinkB_Group.add(pinkB);
}

function blueBalloon() 
{
  blueB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueB.addImage(blue_balloonImage);
  blueB.scale = 0.1;
  blueB.velocityX = 3;
  blueB.lifetime = 150;
  
//adding the sprite "blueB" to the group
  blueB_Group.add(blueB);
}

function greenBalloon() 
{
  greenB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenB.addImage(green_balloonImage);
  greenB.scale = 0.1;
  greenB.velocityX = 3;
  greenB.lifetime = 150;

  //adding the sprite "greenB" to the group
  greenB_Group.add(greenB);
}

function redBalloon() 
{
  redB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redB.addImage(red_balloonImage);
  redB.velocityX = 3;
  redB.scale = 0.1
  redB.lifetime = 150;

 //adding the sprite "redB" to the group
  redB_Group.add(redB);
}