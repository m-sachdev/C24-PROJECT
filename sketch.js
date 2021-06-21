
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,600,10)
ground = new Ground(400,600,800,20)

leftSide = new Dustbin(550,620,20,100)
bottomSide = new Dustbin(610,660,100,20)
rightSide = new Dustbin(670,620,20,100)



	Engine.run(engine);
}
paper.display();
ground.display();
leftSide.display();
bottomSide.display();
rightSide.display();


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keypressed()
if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y: -15})

}

