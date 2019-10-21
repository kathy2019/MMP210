
var puppy, kitten;

	function preload(){
		puppy = loadImage("puppy.jpg");
		pupyy2 = loadImage("puppy2.jpg");
	}

function setup (){

	 var canvas = (640,350);
	 

}


function draw (){

	background ("black");

	if (mouseIsPressed){
		image(puppy, 200, 200, width, height/2);
		image(kitten, 0, height/2, width, height/2);
	} else {
		image(puppy, 0, 0, 500, 650);
		image(kitten, 0, 0, width, height/2);
		
		textAlign(RIGHT);
		var caption = "I'm relaxed";

		if (mouseX > width/2 && mouseY < height/2){

			caption = "Chilling";
		} else if (mouseX < width/2 && mouseY > height/2){

			caption = "Heyy";

		} else if (mouseY > height/2) {
			caption = "See Ya!";
		}


		textAlign(CENTER, CENTER);
		textSize(50);
		textFont("Helvetica");
		fill("white");
		stroke("black");
		strokeWeight(6);

		text(caption, width/2, height/2);


	}

	
	
	
}

