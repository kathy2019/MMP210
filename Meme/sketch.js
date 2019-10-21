
var puppy;

	function preload(){
		puppy = loadImage("Puppy.jpg")
	}

function setup (){
	 createCanvas (640,360);
	 

}


function draw (){

	
	background ("white");
	image(puppy, 100, 50, width, height);
	textSize(45);
	fill("white")
	textAlign(CENTER);
	text("When you are relaxed", 500, 100);
}

