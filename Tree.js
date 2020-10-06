class Tree {
constructor(x,y){

    var options={
        isStatic:true
    }

    this.body=Bodies.rectangle(x,y,options);
    this.image=loadImage("tree.png");
    console.log(this.body);
    //World.add(world,this)
}
display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,500,500);
}
}