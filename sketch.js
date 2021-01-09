var gameState = 0;

 var boy , boyImg;
 var choc,chocImg;
 var mom , momImg;
 var edges;
 var choc2;
 var stage2, s2img;

function preload(){
  boyImg = loadImage ("boy.gif");  
  chocImg = loadImage("choc.png");
  momImg = loadImage("mom.webp");
  s2img = loadImage("download.png");
}

function setup(){
   
   createCanvas(1200,600);
  
   edges = createEdgeSprites();
   
   boy = createSprite(100,450,20,50);
   boy.addImage(boyImg);
   boy.scale = 0.5;
   
   stage2=createSprite(500,300,50,50);
   stage2.addImage(s2img);
   stage2.visible = false;

   choc = createSprite(800,50,20,50);
   choc.addImage(chocImg);
   choc.scale = 0.4;
  
   mom = createSprite(800,200,20,50);
   mom.addImage(momImg);
   mom.scale = 0.5
   mom.velocityX = -3;

   

    
}

function draw(){
    background("white");
    if (keyDown("Up")){
       boy.y = boy.y-5;
    }
    
    if (keyDown("Down")){
        boy.y = boy.y+5;
     }
     if (keyDown("right")){
        boy.x = boy.x+5;
     }

     if (keyDown("left")){
        boy.x= boy.x-5;
     }
     mom.bounceOff(edges);
     boy.collide(edges);

     if(gameState ===0){
      if(boy.isTouching(mom)){
         boy.destroy();
         textSize(34);
         mom.destroy();
         choc.destroy();
         text("YOU GOT CAUGHT, GAME OVER",500,500);
        
      }
 
      if(boy.isTouching(choc)){
         choc.destroy();
         mom.visible=false;
         boy.visible=false;
         textSize(34);
         text("Have fun Eating choclate,lets try to get some more!!",250,200)
         stage2.visible = true;
      }
     }
      if(gameState===1){
         background("lime");
         stage2.visible = false;
         textSize(34);
         text("LETS HAVE ONE MORE CHOC",500,500);
         mom.visible=true;
         boy.visible=true;
         
         choc2 = createSprite(1100,100,10,10);
         
      


     }
     
     
         
         if(mousePressedOver(stage2)){
               reset();

         }
 
    drawSprites();
}
function reset(){

   gameState=1;
}