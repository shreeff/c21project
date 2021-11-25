var ball;
var g1, g2,g3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
ball=Matter.Bodies.circle(100,100,9,ball_options)
World.add(world,ball)
	
g1=new Ground(width/2,670,width,20);
g2=new Ground(1100,600,20,120);
g3=new Ground(1400,600,20,120);
Engine.run(engine);
  
console.log(ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  g1.show();
  g2.show();
  g3.show();
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
 
}
function keyPressed (){
if (keyCode === UP_ARROW ){
	Matter.Body.applyForce(ball,ball.position,{x:18,y:-18});
}


}


