class Stone {
    constructor(x, y, r) {
        var options = {
            isStatic : false,
            'restitution':0,
            'friction':1,
            'density':1.2,
            isStatic : true 
        }
        this.x = x
        this.y = y
        this.r = r
        this.image = loadImage("sprites/stone.png") 
        this.body = Bodies.circle(this.x,this.y, this.r,options);
       
        World.add(world,this.body);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display()
    {
        var pos = this.body.position
        

        push()
        translate(pos.x,pos.y)
        strokeWeight(3)
        fill("255,0,255")
        imageMode(RADIUS);
        image(this.image,0,0,this.r,this.r);
        pop()



    }






}

