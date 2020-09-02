
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

      roof=new roof(350,150,530,25);

	rope1=new rope(bobObject1.body,roofObject.body,+bob1Diameter*2,0);
	rope2=new rope(bobObject2.body,roofObject.body,+bob2Diameter*2,0);
	rope3=new rope(bobObject3.body,roofObject.body,+bob3Diameter*2,0);
	rope4=new rope(bobObject4.body,roofObject.body,+bob4Diameter*2,0);
	rope5=new rope(bobObject5.body,roofObject.body,+bob5Diameter*2,0);

	bob1=new bob(100,200,30);
	bob2=new bob(200,200,30);
	bob3=new bob(300,200,30);
	bob4=new bob(400,200,30);
	bob5=new bob(500,200,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject.body,bobObject.body.position,{x:85,y:-85});
  
	}
}



