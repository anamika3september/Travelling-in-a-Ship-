var ship 
var shipimage
var sea 
var seaimage 

function preload(){
  shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  seaimage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,200);
  sea = createSprite(200,100,400,20);
  sea.addImage(seaimage);
  sea.scale = 0.2;
createEdgeSprites();    
ship = createSprite(75,110,20,50);
  ship.addAnimation("image1",shipimage);
  ship.scale = 0.175;
  sea.velocityX = -1;
 
}

function draw() {
  background("blue");

  if (sea.x <=0) {
   sea.x = 300
  }

 drawSprites()
}

