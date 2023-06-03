
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options;
var ground

function preload()
{
	
}

function setup() {
	createCanvas(900, 400);


	engine = Engine.create();
	world = engine.world;
	
	ground.show();
	ground = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);

	//Create the Bodies Here.
	



	Engine.run(engine);
	World.add(world, "ball");
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
 	 

 	
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2, 	
	} 
	
	ellipse(100,100,15,15,ball_options);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		function hforce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
		}
	}

	function vForce(){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}

}

