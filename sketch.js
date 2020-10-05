var  ball;
var side1,side2,bottom;
var ground,image,img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	


}
function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	side1=new Side(590,575,10,200);
    side2=new Side(775,575,10,200);
	bottom=new Dustbin(680,575,200,200);
	
	ground = new Ground(500,680,1200,20);
	World.add(world,ground);
	
	//Create the Bodies Here.

	ball=new Ball(100,600,40);
	//background(225);


	Engine.run(engine);
  
}

function draw() {
	background(225);
Engine.update(engine);

ball.display();
ground.display();
//side1.display();
//side2.display();
bottom.display();
drawSprites();

}

function keyPressed(){
	if(keyCode ===UP_ARROW){
Matter.Body.applyForce(ball.body, ball.body.position, {x:250,y:-305});

}
}




