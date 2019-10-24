
var Puppy, pup;
var PuppyX = 0;
var textStroke = 8;
var textStrokeSpeed = 1;

	function preload(){
		Puppy = loadImage("Puppy.jpg");
		pup = loadImage("pup.jpg");
	}

function setup (){

	 var canvas = createCanvas(640,700);
	 canvas.drawingContext.miterLimit = 2;

	 x = width - 50;
	 y = 20;
	 

}


function draw (){

	background ("black");

	var PuppyY = 0;
	var pupY = height/2;

	var PuppyY = 0;
	var pupY = height/2;

	
	image(Puppy, 0, PuppyY, width, height/2);
	image(pup, 0, pupY, width, height/2);


	var caption = "I'm a puppy";

	image(Puppy, mouseX, mouseY);


	if (mouseX > width/2 && mouseY < height/2){
			caption = "I'm chilling!";	
		} else if (mouseX < width/2 && mouseY > height/2){
			caption = "Tired!";
		} else if (mouseY > height/2){
			caption = "See Ya!";
		}
		
		
		textAlign(CENTER);
		// var caption = "I'm relaxed";

		

		textAlign(CENTER, CENTER);
		textSize(70);
		textFont("Helvetica");
		fill("white");
		stroke("black");
		strokeWeight(6);

		text(caption, width/2, height/2);

	}
	
	
	


