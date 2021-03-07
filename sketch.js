const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var dog,sadDog,happyDog;
var feed,addFood;
var food1;

var database;
var feedTime,lastFed;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();
 
  feedTime = database.ref('FeedTime');
  feedTime.on("value", function(data){

lastFed = data.val();

  });

  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food1 = new Food(720,220,70,70);

  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock




//function to update food stock and last fed time

function feedDog(){

  dog.addImage(happyDog);
  
  if(food1.getFoodStock() <= 0){
  
  food1.updateFoodStock(food1.getFoodStock()*0);
  
  }else{
  
    food1.updateFoodStock(food1.getFoodStock()-1);
  
   }
  
  }

//function to add food in stock

function addFoods(){

food1++

database.ref('food').update({

  food:food1

})

}
