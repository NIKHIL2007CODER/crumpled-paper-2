class Bin
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,

            		
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
        this.image = loadImage("dustbin2.png");
 		

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER);
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}
