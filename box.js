class Box{
    constructor(){
        var options ={
            restitution: 0.8,
            friction:0.3,
            density:1.3

        }
        this.body = Bodies.rectangle(200,100,50,50, options);
        this.width=50;
        this.height= 50;
        World.add(myworld,this.body)
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill ("pink")
        rect(pos.x,pos.y,this.width,this.height)
    }

}