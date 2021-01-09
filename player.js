class Player{
    contructor (x,y)
    {
    
        this.x = x;
        this.y = y;
        this.width = 20;
        this.body = Bodies.rectangle(x,y,20,50,options)
        this.height = 50;
        this.image = loadImage("img.jpg");
        World.add(world,this.body)
            }
    display(){
        imageMode(CENTER);
        rect (this.x,this.y,20,50);
    
    }
}