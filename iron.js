class Iron{
	constructor(x,y)
	{var options={
		restitution:0.8,
		friction:3,
		density:30
	}
	// assign options to the rubber ball
		
		this.body=Bodies.rectangle(x, y, 40,40, options)
        this.width =40;
        this.height = 40;
        World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("white");
			fill("black");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.height,this.width)
			pop()
	}

}