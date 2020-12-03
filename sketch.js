const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myengine,myworld,box,ball;
var ground;

function setup() {
  createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;

 
  
  var options={
    isStatic:true
  }
  var optionball={
    restitution:0.5
  }
  box=Bodies.rectangle(100,200,50,50,options);
  ball=Bodies.circle(200,200,30,optionball);
  ground = Bodies.rectangle(0,390,800,15,options);
  World.add(myworld,box);
  World.add(myworld,ball);
  World.add(myworld,ground);
 
}

function draw() {
  background("grey");  
  Engine.update(myengine);
  fill("blue");
  rectMode(CENTER);
  rect(box.position.x,box.position.y,50,50);
  fill("brown");
  rectMode(CORNER);
  rect(ground.position.x,ground.position.y,800,20);
  fill("pink");
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,30);

}