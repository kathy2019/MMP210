
var Puppy;

	function preload(){
		Puppy = loadImage("Puppy.jpg")
	}

function setup (){
	 createCanvas (640,360);
	 

}


function draw (){

	
	background ("white");
	image(Puppy,50, 50,);
	textSize(45);
	fill("white")
	textAlign(CENTER);
	text("When you are relaxed", 500, 100);
}

