const Engine=Matter.Engine ;
const World = Matter.World;
const Bodies= Matter.Bodies;

var myengine, myworld;
var body ;
var box;
function setup() {

  myengine=Engine.create();
  myworld= myengine.world;
  
  createCanvas(400,400)
  box = new Box();
  Engine.run(myengine);


}

function draw() {

  background("black");  
  box.display();

}