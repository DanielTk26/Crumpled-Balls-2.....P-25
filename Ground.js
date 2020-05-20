class Ground{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(600,590,1200,15,options);
       this.width = 1200;
       this.height = 15;
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width, this.height);
      }
}