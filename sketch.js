var fx;
var mx;

function setup() {
  createCanvas(1200,800);

  fx=createSprite(600,400,50,80);
  fx.debug=true;
  fx.shapeColor="red";

  mx =createSprite(100,100,50,50);
  mx.debug=true;
  mx.shapeColor="red";

}

function draw() {
  background(0,0,0); 
  
  mx.x=World.mouseX;
  mx.y=World.mouseY;

  if(mx.x-fx.x<fx.width/2+mx.width/2
    && fx.x-mx.x<fx.width/2+mx.width/2){
    mx.shapeColor="violet";
    fx.shapeColor="violet";
  }
  else{
    mx.shapeColor="red";
    fx.shapeColor="red";
  }

  drawSprites();
}