class Stone{
	constructor(x,y)
	{var options={
		restitution:0.8,
		friction:0.9,
		density:12
	}
	// assign options to the rubber ball
		
		this.body=Bodies.rectangle(x, y, 40,40, options)
        this.width =40;
        this.height = 80;
        World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("orange");
			fill("brown");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.height,this.width)
			pop()
	}

}