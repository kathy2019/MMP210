// self portraiit with variables


function setup() {
	createCanvas(640, 360);
	background("lavender");

	var eyeSize = 30;
	var faceColor = "lavender";


	noStroke();
	fill(faceColor);
	ellipse(200, 200, 350, 350); // face

	
	// face
	fill("plum");
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
