//*p5 sketch*//

function setup() {
    createCanvas(640, 360);


    

    function draw() {
    var c = map(sensorValue, 0, 1023, 0, 180);
   
    // sky
    background(c, c, c + 85);
    
    var y = map(sensorValue, 0, 1023, height, 10);
    
    fill('pink');
    noStroke();
    ellipse(500, y, 50);
