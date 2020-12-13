const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;
var boy;

function preload()
{
	boy1=loadImage("sprites/boy.png")
	tree1=loadImage("sprites/tree.png")
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
	var options={
	isStatic:true
}
	boy=Bodies.rectangle(200,390,50,50,options)
//	tree=Bodies.rectangle(1000,200,50,50,options)
	//World.add(world,tree)
	World.add(world,boy);
	stone=new Stone(250,325,40)

	mango1=new Mango(1050,350,40)
	mango2=new Mango(1110,300,40)
	mango3=new Mango(1200,250,40)
	mango4=new Mango(1300,375,40)
	mango5=new Mango(1420,325,40)
	mango6=new Mango(1320,300,40)
	mango7=new Mango(1200,360,40)

	ground=new Ground(750,680,1500,70)

	stone=new Stone(220,450,50)
	slingshot = new Slingshot(stone.body,{x:260, y:480});

	Engine.run(engine);
  
}


function draw() {

rectMode(CENTER);
background(125);
  
ground.display();

image(boy1,boy.position.x,boy.position.y,350,350)
image(tree1,1000,200,480,480)

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  slingshot.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
Matter.Body.setPosition(stone.body, {x:235 , y:320});
slingshot.attach(stone.body);

    }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	console.log(distance)
	if(distance<=lstone.r+lmango.r){
		Matter.Body.setStatic(lmango.body,false)

	}
}

