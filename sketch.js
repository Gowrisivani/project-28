const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyimg = loadImage("boy.png");

	treeIMG= loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	tree = new Tree(550,410);

	stone = new Stone (50,520,30);

	mango1= new Mango(430,330,30); 
	mango2= new Mango(510,240,30);
	mango3= new Mango(610,340,30); 
	mango4= new Mango(530,315,30); 
	mango5= new Mango(627,260,30); 
	mango6= new Mango(670,300,30); 
	mango7= new Mango(730,337,30);

	boy = createSprite (100,590,20,20)
	boy.addImage(boyimg);
	boy.scale=0.1;
	ground = new Ground(400,650,800,10);

	slingShot = new Slingshot(stone.body, { x: 50 , y: 530});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  strokeWeight(4);

  tree.display();

  stone.display();

  boy.display();

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  slingShot.display();

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
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
	 if(keyCode === 32){
		  Matter.Body.setPosition(stone.body, {x: 50, y:590});
		   slingShot.Attach(stone.body); 
		} 
	}
	function detectCollision(lstone,lmango){
		 mangoBodyPosition= lmango.body.position; 
		 stoneBodyPosition= lstone.body.position;
		  var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
		   if(distance<=lmango.radius +lstone.radius){
				Matter.Body.setStatic(lmango.body, false);
			 } 
		}
