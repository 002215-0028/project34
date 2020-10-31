//Create variables here
var dog, happyDog, database, foodS, foodStock;
function preload()
{
  //load images here
  dogImage = setImage("images/dogImg.png");
  dogHappy = setImage("images/dog.Img1.png")
}

function setup() {
	createCanvas(500, 500);
  var dog = createeSprite(250, 250, 20, 20);
  dog.addImage(dogImage);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);

  
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  drawSprites();
  //add styles here

}



