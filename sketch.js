
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var wall1,wall2,wall3;

function setup() {
    var canvas = createCanvas(1364,620)
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,610);
	paperObject = new paper(200,450,50);
	groundObject=new ground(width/2,620,width,40);
	bin = new Bin(1200,530,140,140);
	//Create a Ground
	 
	wall1 = new walls(1360,height/2,20,650);
    wall2 = new walls(width/2,0,1390,20);
	wall3 = new walls(0,width/2,20,650);

	

	//var render = Render.create({
	//  element: document.body,
	  //engine: engine,
	//  options: {
	//    width: 1200,
	//    height: 700,
	 //   wireframes: false
	//  }
//	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(240);
    
  
  
  groundObject.display();
  bin.display();
 paperObject.display();

  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





