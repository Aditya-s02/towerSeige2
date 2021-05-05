class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,

      }
      this.block = loadImage("block.png")
      this.visibility =255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display(){
      var pos= this.body.position;
      if(this.body.speed<3){

      
      imageMode(CENTER);
     // rect(pos.x,pos.y,this.width, this.height);
      image(this.block,pos.x,pos.y,this.width,this.height);
      }
      else{
        World.remove(world,this.body)
        push ()
        this.visibility = this.visibility-4
        tint (255,this.visibility)
        image (this.block,this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
      }
      
    }
}