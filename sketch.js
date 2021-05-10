const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world 
var man,drops=[]
var manImage
function preload(){
  manImage=loadImage("images/Walking Frame/walking_1.png")  
}

function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(600,400);
    man=createSprite (300,175,20,20);
    man.scale=0.5
    man.addImage(manImage)
    ground=new Ground(300,350,600,20);
   
}

function draw(){
    background("black");
    Engine.update(engine);
    man.display();
    ground.display();
    drops.push(new Drop(random(0,600),random(0,200)))
    for(var i=0;i<drops.length;i++){
        drops[i].display();
    }
    drawSprites();
}   

