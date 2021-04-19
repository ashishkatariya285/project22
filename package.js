class Package{
constructor(x,y,width,height){
var options={
    'restitution':1.0
}
this.body=Bodies.rectangle(x,y,10,10,options)
this.height=10;
this.width=10;
World.add(world,this.body)
}
display(){
    var pos=this.body.position;
    var angle=this.body.position;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    rect(pos.x,pos.y,width,height)
    pop();
}


}