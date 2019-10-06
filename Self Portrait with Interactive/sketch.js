/* interactive self portrait 
	by katherine
	09/24/2019

*/

var y = 150;
var x = 271;
var eyeSize = 30;


	function setup() {
	createCanvas(640, 360);
	background("lavender");
}

function draw() {
	background("lavender");

	var s = width - mouseX; // reverses the direction

	var x = width/2;
	var y = height/2;
	ellipse(x, y, s);

	// uncomment to visualize these values
	// visualize();
	function visualize() {
		fill("plum");
		stroke('plum');
		line(x + s/5, y, x - s/5, y);
		text(s, x, y - 50);
	}

	var r = 0; // red;
	var g = mouseX; // green
	var b = mouseY; // blue
	fill(r, g, b);

	var x = width / 2;
	var y = height / 2;
	var s = width / 2;


	var eyeSize = 30;
	var faceColor = "lavender";


	noStroke();
	fill(faceColor);

	ellipse(200, 200, 350, 350); // face

	
	// face
	fill("plum");
	var r = 0; // red;
	var g = mouseX; // green
	var b = mouseY; // blue
	fill(r, g, b);
	ellipse(200, 180, 200, 200);

	
	// eyes
	fill("navy");
	ellipse(150, 150, eyeSize); // left eye
	ellipse(250, 150, eyeSize); // right eye
	fill("lavender");
	arc(400, 250, 100, 100, 0, PI)
	
	// pupils
	fill(faceColor);
	ellipse(150, 150, eyeSize / 2); // left pupil
	ellipse(250, 150, eyeSize / 2); // right pupil

	// mouth
	stroke("navy");
	noFill()
	strokeWeight(2);
	fill("lavender");
	arc(200, 210, 100, 100, 0, PI)


}
