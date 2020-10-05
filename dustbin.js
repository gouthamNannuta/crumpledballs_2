class Dustbin{
    constructor(x, y, width, height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.img = loadImage('vscode/dustbingreen.png');

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img,0,0,this.width,this.height);
        
        pop();
    }
}