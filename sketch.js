//Create variables here
var dog,happyDogImg,dogImg;
var database;
var foodS,foodStock;



function preload(){


  dogImg = loadImage("images/dogImg.png");
    
  happyDogImg = loadImage("images/dogImg1.png");

}
function setup() {


  createCanvas(500, 500);
  

  dog = createSprite(250,250,2,2);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  


  background(46, 139, 87); 

  if(keyWentDown(UP_ARROW))
    
{
  
    writeStock(foodS);
    dog.addImage(happyDogImg);
   
      
}

if(keyWentDown(DOWN_ARROW))
    
{
  
    
    dog.addImage(dogImg);
   
      
}
  drawSprites();
  //add styles here

  textSize(20);
  fill("black")
  text(" Note : Press UP_ARROW Key To Feed Drago Milk!",10,50)

  text("Food Remaining :" +foodS,14,100);

}


function readStock(data)

{

    foodS = data.val();
   // foodObj.updateFoodStock(foodS)

}

function writeStock(x)

{

    if(x <= 0)
    
{

    x=0;

}

    else
    
{

    x=x-1;

}

    database.ref('/').update(
      
{

    Food:x

});

}







