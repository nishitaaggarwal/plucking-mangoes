
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy1,ground1,tree1,mango1,mango2,mango3,mango4,mango5,stone1,rope1
function preload()
{
		
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy1=new boy(150,550,)
	mango1=new mango(650,370)
	mango2=new mango(690,390)
	mango3=new mango(610,360)
	mango4=new mango(630,400)
	mango5=new mango(690,430)
ground1=new ground(500,610)
tree1= new tree(650,470)
stone1= new stone(100,500)
rope1 = new rope(stone1.body,{x:130, y:480});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  boy1.display();
  tree1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  ground1.display()
  stone1.display()
  rope1.display()


  drawSprites();

}
function mouseDragged(){
 
Body.setPosition(stone1.body,{x: mouseX , y: mouseY});
 
  }


  
function mouseReleased(){
 rope1.fly();
  }



