var bath,gym,brush,drink,move;
var bathImg,gymImg,brushImg,drinkImg,moveImg;
var background,sleep,eat;
var backgroundImg,sleepImg,eatImg;

function preload(){    
   
bgImg = loadImage("images/iss.png");
sleepImg = loadAnimation("images/sleep.png");
brushImg = loadAnimation("images/brush.png");
gymImg = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
eatImg = loadAnimation("images/eat1.png","images/eat2.png");
drinkImg = loadAnimation("images/drink1.png","images/drink2.png");
moveImg = loadAnimation("images/move.png","images/move1.png");
bathImg = loadAnimation("images/bath1.png","images/bath2.png");
}

function setup(){
createCanvas(600,600);

// create background here
bg = createSprite(250,150);
bg.addImage("iss.png",bgImg);
bg.scale=0.1;

// create  boy here
astronaunt = createSprite(300,230);
astronaunt.addAnimation("sleeping",sleep);
}

function draw(){

if(keyDown("UP_ARROW")){
astronaunt.addAnimation("brushing",brush);
astronaunt.changeAnimation("brushing");
astronaunt.y = 350;
astronaunt.VelocityX = 0;
astronaunt.VelocityY = 0;
}

if(keyDown("DOWN_ARROW")){
    astronaunt.addAnimation("gymming",gym);
    astronaunt.changeAnimation("gymming");
    astronaunt.y = 350;
    astronaunt.VelocityX = 0;
    astronaunt.VelocityY = 0;
    }

    if(keyDown("LEFT_ARROW")){
        astronaunt.addAnimation("eating",eat);
        astronaunt.changeAnimation("eating");
        astronaunt.y = 350;
        astronaunt.VelocityX = 0;
        astronaunt.VelocityY = 0;
        }

        if(keyDown("RIGHT_ARROW")){
           astronaunt.addAnimation("bathing",bath);
            astronaunt.changeAnimation("bathing");
            astronaunt.y = 350;
            astronaunt.VelocityX = 0;
            astronaunt.VelocityY = 0;
            }      

            if(keyDown("m")){
                astronaunt.addAnimation("moving",move);
                 astronaunt.changeAnimation("moving");
                 astronaunt.y = 350;
                 astronaunt.VelocityX = 0;
                 astronaunt.VelocityY = 0;
                 }      

drawSprites();
}