
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	stone1 = new Stone(700,320,70,70);
    stone2 = new Stone(920,320,70,70);
    stone3 = new Stone (810, 350);
    stone4 = new Stone(810,260,300, PI/2);
	stone5 = new Stone(700,240,70,70);
   
	mango1 = new Mango(920,240,70,70);
    mango2 = new Mango(810, 220);
	mango3 =  new Mango(810,180,300, PI/2);
	mango4 = new Mango(810,160,70,70);
    mango5 = new Mango(760,120,150, PI/7);

}


function draw() {
  rectMode(CENTER);
  background(0);

  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();


  detectollasion(stone1,mango1);
  detectollasion(stone2,mango2);
  detectollasion(stone3,mango3);
  detectollasion(stone4,mango4);
  detectollasion(stone5,mango5);
 
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectollasion(lstone,lmango){

mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(mangoBodyPosition.y,mangoBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x)
	if(distance <= lmango +lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
	

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		launcherObject.attach(stone.body)
	}
}