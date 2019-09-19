// self portrait 
 
	function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("white");
	noStroke();
	
	// face
	fill("plum");
	ellipse(200, 180, 350, 350);
	
	// eyes
	fill("navy");
	strokeWeight(5);
	ellipse(150, 150, 70, 70);
	ellipse(250, 150, 70, 70);
	fill("lavender");
	arc(200, 250, 100, 100, 0, PI)
	
	// pupils
	fill("lavender");
	ellipse(150, 150, 30, 30);
	ellipse(250, 150, 30, 30);

	// mouth
	stroke("navy");
	noFill()
	strokeWeight(5);
	arc(200, 250, 100, 100, 0, PI)



}






