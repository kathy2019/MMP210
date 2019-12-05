var slideNumber = 0;
var totalSlides = 3;

var nextBtnX = 700;
var nextBtnY = 500;
var nextBtnSize = 70;

var prevBtnX = 150;
var prevBtnY = 500;
var prevBtnW = 50;
var prevBtnH = 50;
var prevBtnSize = 70;

var Happyface;
var Sadface;

function preload() {
    Happyface = loadImage("happyface.jpg");
    Sadface = loadImage("sademoji.jpg")
}

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background("#E9967A");
 
    if (slideNumber == 0) {
        // content for slide number 0
        fill("#CD5C5C");
        textSize(50);
        textAlign(CENTER, CENTER);
        text("Final Project Pitch", width/2, height/2);
        
        textSize(30);
        text("by Katherine", width/2, height/2 + 50);
        
    } else if (slideNumber == 1) {
        // content for slide number 1
        
        fill(255);
        textSize(50);
        textAlign(CENTER, CENTER);
        text("IR Sensor", width/2, 200);
        
        
        rect(300, 300, 200, 100);
        fill(0);
        
        
        textSize(16);
        textAlign(TOP, CENTER);
        text(" The person hovers over the IR Sensor and it will change the mood.", width/2, height - 100);
    
    } else if (slideNumber == 2) {
        
        // theme
        image(Happyface, 0, 0, width, height);
        image(Sadface, 0, 0, width, height);
        text("Mood", width/2, height/2);


    }
    
    
    /* drawing buttons */
    
    // next btn
    if (slideNumber < totalSlides - 1) {
        fill(255);
        noStroke();
        ellipse(nextBtnX, nextBtnY, nextBtnSize);
        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text("Next", nextBtnX, nextBtnY);
    }
    
    
    // prev btn
    if (slideNumber > 0) {
       fill(255);
        noStroke();
        ellipse(prevBtnX, prevBtnY, prevBtnW, prevBtnH);
        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text("Previous", prevBtnX + 10, prevBtnY + 10);  
    }
   
    
}

function mousePressed() {
    
    // next btn
    var d = dist(mouseX, mouseY, nextBtnX, nextBtnY);
    if (d < nextBtnSize/2 && slideNumber < totalSlides - 1) {
        slideNumber++;    
    }
    
    // prev btn
    if (mouseX > prevBtnX &&
       mouseX < prevBtnX + prevBtnW &&
       mouseY > prevBtnY &&
       mouseY < prevBtnY + prevBtnH &&
       slideNumber > 0) {
        slideNumber--;    
    }
}