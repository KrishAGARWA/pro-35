//Create variables here

var dog
var dogImage
var database
var position 

function preload()
{
  dogImage=loadImage("dogImg.png")
	//load images here
}

function setup() {
	createCanvas(500,500);
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImage)
dog.scale=0.2
database=firebase.database()
var petPosition=database.ref("pet/position")
petPosition.on("value",readPosition,showError)

}


function draw() {  
if(keyWentDown(UP_ARROW)){
writePostion(0,-1)



}



  drawSprites();


}
function writePosition(x,y){
   database.ref("pet/position").set({
x:position.x+x,
y:position.y+y

   })}


function readPosition(data){
position=data.val()
dog.x=position.x
dog.y=position.y

}

function showError(){

console.log("there is an error")

}

