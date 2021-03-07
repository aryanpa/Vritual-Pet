class Food{
constructor(){

this.foodStock = 0;
this.lastFed;
this.milk = loadImage("Images/Milk.png");

}

getFoodStock(){

var foodRef = database.ref('food');
  foodRef.on("value", function(data){

foodRef = data.val();

});

}

updateFoodStock(state){

  database.ref("/").update({

    food: state
    
    });

}

detuctFood(){


    
}

display(){

var x = 80, y = 100

imageMode(CENTER);
image(this.milk,720,220,70,70);

if(this.foodStock!=0){
  for(var i=0;i<this.foodStock;i++){
    if(i%10==0){

       x = 80;
       y = y+50;

    }

image(this.milk,x,y,50,50);
x = x+30;

  }
 }
}


}