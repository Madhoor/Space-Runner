var sky, sky1;
var flame, flame1
var player, player1;
var alien1, alien2, alieng1, alieng2;
var alien1img, alien2img;
var health1, health2;
var missile, missileimg1, missileg;



var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload() {

  sky1 = loadImage("images/background.png")
  flame1 = loadAnimation("images/flames/flame-page01.jpeg", "images/flames/flame-page02.jpeg", "images/flames/flame-page03.jpeg", "images/flames/flame-page04.jpeg", "images/flames/flame-page05.jpeg", "images/flames/flame-page06.jpeg", "images/flames/flame-page07.jpeg", "images/flames/flame-page08.jpeg", "images/flames/flame-page09.jpeg", "images/flames/flame-page10.jpeg", "images/flames/flame-page11.jpeg", "images/flames/flame-page12.jpeg", "images/flames/flame-page13.jpeg", "images/flames/flame-page14.jpeg", "images/flames/flame-page15.jpeg", "images/flames/flame-page16.jpeg", "images/flames/flame-page17.jpeg", "images/flames/flame-page18.jpeg", "images/flames/flame-page19.jpeg", "images/flames/flame-page20.jpeg", "images/flames/flame-page21.jpeg", "images/flames/flame-page22.jpeg", "images/flames/flame-page23.jpeg", "images/flames/flame-page24.jpeg", "images/flames/flame-page25.jpeg", "images/flames/flame-page26.jpeg", "images/flames/flame-page27.jpeg", "images/flames/flame-page28.jpeg", "images/flames/flame-page29.jpeg", "images/flames/flame-page30.jpeg", "images/flames/flame-page31.jpeg", "images/flames/flame-page32.jpeg", "images/flames/flame-page33.jpeg", "images/flames/flame-page34.jpeg");


  player1 = loadImage("images/you.jpg")
  alien1img = loadImage("images/alien1.jpg")
  alien2img = loadImage("images/alien2.jpg")

  missileimg1 = loadImage("images/missile.jpg")




}

function setup() {
  createCanvas(700, 700);

  sky = createSprite(width / 2, height / 3);
  sky.addImage(sky1)
  sky.scale = 1.6
  sky.velocityY = 5

  player = createSprite(350, 540)
  player.addImage(player1);
  player.scale = 0.3



  flame = createSprite(350, 660);
  flame.addAnimation("flame", flame1);
  flame.scale = 0.3

  alieng1 = new Group();
  alieng2 = new Group();

  health2 = 2;
  missileg = new Group();

}

function draw() {
  background(0);
  health1 = 1;
 




  if (gameState === PLAY) {
    player.depth = player.depth + 1;
    player.x = mouseX;
    flame.x = mouseX;


    if (sky.y > height / 1.3) {
      sky.y = height / 3.8
    }
    if (frameCount % 210 === 0) {
      spawning()
    }
    if (frameCount % 310 === 0) {
      spawning2()
    }
    if (keyDown("space")) {
      missilec();
    }




    if (alieng1.isTouching(missileg)) {
      missileg.destroyEach();
      health1 = health1 - 1
    }

    if (alieng2.isTouching(missileg)) {
      health2 = health2 - 1
    }
    

    //console.log(health1);
    console.log(health2);

    if (health1 === 0) {
      alieng1.destroyEach();
    }
   
    if (health2 === 0) {
      alieng2.destroyEach();
      missileg.destroyEach();
      health2 = 2;
    }









    drawSprites();
  }
}


function spawning() {


  alien1 = createSprite(Math.round(random(width / 8, width - 100)), 0);
  alien1.velocityY = 2;
  alien1.addImage(alien1img);
  alien1.lifetime = height / alien1.velocityY;
  alieng1.add(alien1);
}

function spawning2() {

  alien2 = createSprite(Math.round(random(width / 8, width - 100)), 0);
  alien2.velocityY = 2;
  alien2.addImage(alien2img);
  alien2.lifetime = height / alien1.velocityY;
  alieng2.add(alien2);
}

function missilec() {
  missile = createSprite(200, 540);
  missile.velocityY = -6;
  missile.addImage(missileimg1);
  missile.scale = 0.12;
  missile.lifetime = height / missile.velocityY;
  missile.x = player.x;
  missileg.add(missile);
}