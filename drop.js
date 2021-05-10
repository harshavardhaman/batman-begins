class Drop {
    constructor(x,y) {
      var options = {
          restitution:0.7,
          friction:0.8
      }
      this.body = Bodies.circle(x,y,3,options);
      this.width = 3;
      this.height = 5;
      
      World.add(world, this.body);
    }
    display(){
    
 
        
          var pos =this.body.position;
          ellipseMode(RADIUS);
          fill("blue");
          ellipse(pos.x, pos.y, this.width, this.height);
       
        
    }
  };
