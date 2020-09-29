 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustBottom, dustLeft, dustRight;
var ground;
var dustbinImg;

function preload()
{

}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(70, 550, 17);

	dustBottom = new Dustbin(1350, 640, 180, 20);
	dustLeft = new Dustbin(1270, 530, 20, 200);
	dustRight = new Dustbin(1430, 530, 20, 200);

	dustbinImg = new DustbinImg(1350, 530, 200, 220);

	ground = new Ground(750, 645, 1500, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  Engine.update(engine);

  keyPressed();
  
	ground.display();
	
	dustRight.display();
	dustLeft.display();
	//dustBottom.display();
	dustbinImg.display();

	paper.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:0.7, y:-4});
	}
}



