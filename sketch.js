var backGround;

var spaceCraft, spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4;
var iss, issImage;

var hasDocked = false;

function preload(){

  spaceCraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spaceCraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spaceCraft3 = loadImage("Docking-undocking/spacecraft3.png")
  spaceCraft4 = loadImage("Docking-undocking/spacecraft4.png")

  issImage = loadImage("Docking-undocking/iss.png");

  backGround = loadImage("Docking-undocking/spacebg.jpg");

}

function setup() {

  createCanvas(800,400);

  spaceCraft = createSprite(random(100, width- 100), height - 40);
  spaceCraft.addImage("craft", spaceCraft1);
  spaceCraft.scale = 0.1;

  iss = createSprite(width/2, height/2);
  iss.addImage("iss", issImage);
  iss.scale = 0.7;

}

function draw() {

  background(backGround);  

  if(!hasDocked){

    spaceCraft.x = round(random(spaceCraft.x + 2, spaceCraft.x - 2));

    if(keyDown("left")){

      spaceCraft.x = spaceCraft.x - 3;
      spaceCraft.addImage("craft", spaceCraft4);

    }

    if(keyDown("right")){

      spaceCraft.x = spaceCraft.x + 3;
      spaceCraft.addImage("craft", spaceCraft3);

    }

    if(keyDown("up")){

      spaceCraft.y = spaceCraft.y - 3;
      spaceCraft.addImage("craft", spaceCraft2);

    }

    if(keyDown("down")){

      spaceCraft.addImage("craft", spaceCraft1);

    }

    if(spaceCraft.x < 360 && spaceCraft.x > 340 && spaceCraft.y > 250 && spaceCraft.y < 260){

      hasDocked = true;

    }

  }

  if(hasDocked === true){
    
    textSize(50);
    fill("white");
    stroke(254, 254, 254);
    strokeWeight(2);

    text("Docking Complete", width/2 - 200, height - 100);

    spaceCraft.addImage("craft", spaceCraft1);
    spaceCraft.x = 350;
    spaceCraft.y = 245;

  }

  drawSprites();

}