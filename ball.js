class Ball{
    constructor(x, y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius =20;
        this.image = loadImage('paper.png')
        
        World.add(world, this.body);
  this.image.resize(10,10);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
       
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image,0,0,40,40,1);
        pop();
    }
}