class Bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            density:0.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage('bob.png');
        World.add(world,this.body);
    }
    display(){
  
        var pos = this.body.position;
  
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill("pink");
        image(this.image,0,0,this.r,this.r);
        pop();
    }
  }