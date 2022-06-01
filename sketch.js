
var trex,i4trex; 
var ground,i4ground;
var invu;
var cloud1,i4cloud1;




 function preload(){
i4trex = loadAnimation ("trex1.png","trex3.png","trex4.png"); 
i4ground =loadImage ("ground2.png"); 
i4cloud1= loadImage ("cloud.png"); 


}


function setup(){

createCanvas (800,800);
trex=createSprite (200,200,20,20);
trex.addAnimation ("run", i4trex);

ground=createSprite (200,200,200,50);
ground.addImage (i4ground);


invu= createSprite (200,205,90,5);
invu.visible= false; 




} 



function draw(){

background ("red"); 
ground.velocityX= -4; 
if (ground.x<0){
ground.x =ground.width / 2 
}

if (keyDown("space")){
trex.velocityY= -2; 
}

trex.velocityY = trex.velocityY +2
trex.collide (invu); 



clouds()

drawSprites();


}

function clouds(){

if(frameCount%40===0 ){
cloud1= createSprite (160,20,20,20); 
cloud1.addImage (i4cloud1);

cloud1.scale= 0.3 ; 
cloud1.velocityX = -4;

}
}    

