const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,body
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var options={
    isStatic:true
  }
  body = Bodies.rectangle(100,200,400,20,options)
  World.add(world,body)
  var options1={
restitution:5.0
  }
  ball = Bodies.circle(100,100,50,options1)
  World.add(world,ball)
}
function draw() {
  background(255,255,255);  
Engine.update(engine)
rect(body.position.x,body.position.y,400,20)
ellipse(ball.position.x,ball.position.y,50)
}