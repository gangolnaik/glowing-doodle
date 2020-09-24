const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone,tree,boy;
var gardenImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var rubberBand;

function preload()
{
	boy = loadImage("boy.png");
	gardenImg = loadImage("garden.jpg");
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,640,1400,30);
	stone = new Stone(100,100,41);
//	tree = new Tree(1150,330,350,600);
	tree = new Tree(1050,330);
	mango1 = new Mango(1010,330,40);
	mango2 = new Mango(1100,330,40);
	mango3 = new Mango(965,240,40);
	mango4 = new Mango(1050,150,40);
	mango5 = new Mango(1020,174,40);
	mango6 = new Mango(1130,250,40);
	mango7 = new Mango(1053,210,40);
	mango8 = new Mango(1100,240,40);

  	rubberBand = new RubberBand(stone.body,{x:230,y:400})





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gardenImg);

  image(boy,200,340,200,300);
  ground.display();
  tree.display();

  stone.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  rubberBand.display();
  fill("blue");
  textSize(40);
  text("Press Space To Play Again",200,200);
  drawSprites();

  
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rubberBand.fly();   
}
function detectCollision(){
  if(stone.x - mango1.x < mango1.width/2 + stone.width/2 &&
    mango1.x - stone.x < mango1.width/2 + stone.width/2 &&
    mango1.y - stone.y < mango1.height/2 + stone.height/2 &&
    stone.y - mango1.y < mango1.height/2 + stone.height/2) {
        mango1.isStatic = false;
  }
  if(stone.x - mango2.x < mango2.width/2 + stone.width/2 &&
    mango2.x - stone.x < mango2.width/2 + stone.width/2 &&
    mango2.y - stone.y < mango2.height/2 + stone.height/2 &&
    stone.y - mango2.y < mango2.height/2 + stone.height/2) {
        mango2.isStatic = false;
  }
  if(stone.x - mango3.x < mango3.width/2 + stone.width/2 &&
    mango3.x - stone.x < mango3.width/2 + stone.width/2 &&
    mango3.y - stone.y < mango3.height/2 + stone.height/2 &&
    stone.y - mango3.y < mango3.height/2 + stone.height/2) {
        mango3.isStatic = false;
  }
  if(stone.x - mango4.x < mango4.width/2 + stone.width/2 &&
    mango4.x - stone.x < mango4.width/2 + stone.width/2 &&
    mango4.y - stone.y < mango4.height/2 + stone.height/2 &&
    stone.y - mango4.y < mango4.height/2 + stone.height/2) {
        mango4.isStatic = false;
  }
  if(stone.x - mango5.x < mango5.width/2 + stone.width/2 &&
    mango5.x - stone.x < mango5.width/2 + stone.width/2 &&
    mango5.y - stone.y < mango5.height/2 + stone.height/2 &&
    stone.y - mango5.y < mango5.height/2 + stone.height/2) {
        mango5.isStatic = false;
  }
  if(stone.x - mango6.x < mango6.width/2 + stone.width/2 &&
    mango6.x - stone.x < mango6.width/2 + stone.width/2 &&
    mango6.y - stone.y < mango6.height/2 + stone.height/2 &&
    stone.y - mango6.y < mango6.height/2 + stone.height/2) {
        mango6.isStatic = false;
  }
  if(stone.x - mango7.x < mango7.width/2 + stone.width/2 &&
    mango7.x - stone.x < mango7.width/2 + stone.width/2 &&
    mango7.y - stone.y < mango7.height/2 + stone.height/2 &&
    stone.y - mango7.y < mango7.height/2 + stone.height/2) {
        mango7.isStatic = false;
  }
  if(stone.x - mango8.x < mango8.width/2 + stone.width/2 &&
    mango8.x - stone.x < mango8.width/2 + stone.width/2 &&
    mango8.y - stone.y < mango8.height/2 + stone.height/2 &&
    stone.y - mango8.y < mango8.height/2 + stone.height/2) {
        mango8.isStatic = false;
  }
}