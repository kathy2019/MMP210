/* 
    p5 + arduino skecth
    11.12.2019
*/

var serial;
var portName = "/dev/tty.usbmodem14101";
var sensorValue;

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('close', serialError);
    serial.on('error', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log('connected');
}

function portOpen() {
    console.log('port open');
}

function portClose() {
    console.log('port close');
}

function serialError() {
    console.log('error');
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
        console.log(sensorValue);

}


function draw() {
    var c = map(sensorValue, 0, 1023, 0, 180);
    
    // sky
    background(c, c, c + 85);
    
    var y = map(sensorValue, 0, 1023, height, 10);
    
    fill('pink');
    noStroke();
    ellipse(500, y, 60);
    fill("red");
    triangle(30, 75, 58, y, 86, 75);
    rect(50, y, 55, 55);

}
