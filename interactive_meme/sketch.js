
var puppy, kitten;

	function preload(){
		puppy = loadImage("puppy.jpg");
		kitten = loadImage("kitten.jpg");
	}

function setup (){
	 createCanvas (500,500);

	 canvas.drawingContext.miterLimit = 2;
	 

}


function draw (){

	background ("black");

	if (mouseIsPressed){
		image(puppy, 0, 0, width, height/2);
		image(kitten, 0, height/2, width, height/2);
	} else {
		image(puppy, 0, 0,);
		image(kitten, 0, 0, width, height/2);
		
		var caption = "I'm relaxed";

		if (mouseX > width/2 && mouseY < height/2){

			caption = "I'm relaxed";
		} else if (mouseX < width/2 && mouseY > height/2){

			caption = "Heyy";

		} else if (mouseY > height/2) {
			caption = "See Ya!";
		}


		textAlign(CENTER, CENTER);
		textSize(100);
		textFont("Helvetica");
		fill("white");
		stroke("black");
		strokeWeight(6);

		text(caption, width/2, height/2);


	}
	
	image(puppy, 0, 0, width, height);
	textSize(30);
	fill("white")
	text("When you are relaxed", 250, 20);
}

