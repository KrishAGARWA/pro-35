//Create variables here

var dog
var dogImage
var database
var position 
var dogHappy
function preload()
{
  dogImage=loadImage("dogImg.png")
  dogHappy=loadImage("dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImage)
dog.scale=0.2
database=firebase.database()
var petPosition=database.ref("Food")
petPosition.on("value",readPosition)

}


function draw() {  
if(keyWentDown(UP_ARROW)){
writePosition(position)
 dog.addImage(dogHappy)


}



  drawSprites();


}
function writePosition(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref("/").update({
    Food:x
  })
}

function readPosition(data){
position=data.val()


}

