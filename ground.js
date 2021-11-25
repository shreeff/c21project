class Ground{
    constructor(x,y,w,h){
      //global variables
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    
    let options = {
      isStatic:true
    }
    
    // create Bodies
    this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    //add to world
    
    World.add(world,this.body);
    }
    
    show(){
    
      push()
      translate(this.body.position.x,this.body.position.y)
      fill("brown")
      rect(0,0, this.w, this.h)
      pop()
    }
    
    
    
    }
    