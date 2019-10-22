// Meme 
 
var drunk;
	function preload(){
		drunk = loadImage("drunk.jpg")
	}

function setup (){
	createCanvas (640,360);
}

function draw (){
	background ("firebrick");

	textSize(80);
	fill("white");
	strokeWeight(15);
	textStyle("Normal");
	textDont("helvetica");
	textAlign("center");
	text("When you are relaxed");
}

