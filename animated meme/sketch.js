/* Animated meme 
	10/22/2019
*/

var Puppy, pup;
var PuppyX = 0;
var textStroke = 8;
var textStrokeSpeed = 1;

var textRotation = 10;
var PuppyScale = 0.01;




	function preload(){
		Puppy = loadImage("Puppy.jpg");
		pup = loadImage("pup.jpg");
	}

function setup (){

	 var canvas = createCanvas(640,700);
	 canvas.drawingContext.miterLimit = 2;

	 x = width, 50;
	 y = 20;


	
}


function draw (){

	background ("black");


	var PuppyY = 0;
	var pupY = height/2;

	if (mouseIsPressed) {
		PuppyY = height/2;
		pupY = 0;
	}

	image(Puppy, PuppyX, PuppyY, width, height/2);




	image(Puppy, 0, PuppyY, 0, height/2);
	image(Puppy, 330, PuppyY, 0, height/2);


	image(pup, 0, pupY, width, height/2);
	image(pup, 320, pupY, 0, height/2);

	var caption = "I'm a puppy";

	translate(10, 10);
	image(Puppy, mouseX, mouseY);

	// Hover over the image //




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
		strokeWeight(8);


		translate(width/2, height/2);
		rotate(textRotation);
		textRotation += PI * 0.01;

		text(caption, 0, 0);

	}




