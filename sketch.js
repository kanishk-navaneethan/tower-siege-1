const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

slingshot = new SlingShot(polygon.body,{x:200, y:50});

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  stand4 = new Stand(450,300,150,50);
  stand5 = new Stand(500,200,200,10);
 
  //level one
  smallblock = new Block(300,275,30,40);
  console.log(block1);
  smallblock2 = new Block(430,300,20,30);
  smallblock3 = new Block(460,300,20,30);
  smallblock4 = new Block(490,300,20,30);
  smallblock5 = new Block(420,300,20,30);
  smallblock6 = new Block(550,300,20,30);
  smallblock7 = new Block(580,300,20,30);
  //level two
  smallblock8 = new Block(430,275,20,30);
  smallblock9 = new Block(460,275,20,30);
  smallblock10 = new Block(490,275,20,30);
  smallblock11 = new Block(520,275,20,30);
  smallblock12 = new Block(550,275,20,30);
  //level three
  smallblock13 = new Block(460,235,20,30);
  smallblock14 = new Block(490,235,20,30);
  smallblock15 = new Block(520,235,20,30);
  //top
  smallblock16 = new Block(490,200,20,30);
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  strokeWeight(2);
  stroke(15);
  fill("green");
  
  smallblock1.display();
  smallblock2.display();
  smallblock3.display();
  smallblock4.display();
  smallblock5.display();
  smallblock6.display();
  smallblock7.display();
  fill("yellow");
  smallblock8.display();
  smallblock9.display();
  smallblock10.display();
  smallblock11.display();
  smallblock12.display();
  fill("black");
  smallblock13.display();
  smallblock14.display();
  smallblock15.display();
  fill("red");
  block16.display();
  Slingshot.display
}
