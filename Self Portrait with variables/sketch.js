// self portraiit with variables

var faceSize = 400;

function setup() {

	createCanvas(600, 400);
}


function draw() {

	background("LAVENDER");

	fill("blue")
	rect(1, 200, 800, 200); // Right bottom box of the Dom.Rep
	stroke("white")
	noFill();
	strokeWeight(9);


	fill("red") 
	rect(1, 200, 290, 200); //Left bottom box
	stroke("white")
	noFill();
	strokeWeight(9);


	fill("blue")
	rect(1, 1, 290, 200); // Left top box
	stroke("white")
	noFill();
	strokeWeight(9)

	fill("red")
	rect(290, 1, 350, 200);
	stroke("white")
	noFill();
	strokeWeight(9)

	fill("white")
	ellipse(300, 200, faceSize, faceSize/2);



}
