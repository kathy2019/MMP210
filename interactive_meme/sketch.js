
var Puppy, pup;

	function preload(){
		Puppy = loadImage("Puppy.jpg");
		pup = loadImage("pup.jpg");
	}

function setup (){

	 var canvas = createCanvas(640,640);
	 canvas.drawingContext.miterLimit = 2;

	 x = width - 50;
	 y = 20;
	 

}


function draw (){

	background ("black");

	var PuppyY = 0;
	var pupY = height/2;

	
	image(Puppy, 0, PuppyY, width, height/2);
	image(pup, 0, pupY, width, height/2);	

	var caption = "I'm a puppy";


	if (mouseX > width/2 && mouseY < height/2){
			caption = "I'm chilling";	
		} else if (mouseX < width/2 && mouseY > height/2){
			caption = "Tired";
		} else if (mouseY > height/2){
			caption = "See Ya!";
		}
		
		
		textAlign(RIGHT);
		// var caption = "I'm relaxed";

	


		textAlign(CENTER, CENTER);
		textSize(50);
		textFont("Helvetica");
		fill("white");
		stroke("black");
		strokeWeight(6);

		text(caption, width/2, height/2);

	}
	
	
	


