var serial;
var portName = "COM3";
var sensorValue;


function setup() {
	createCanvas(640, 360);

	serial = new p5.SerialPort();
	serial.on('connected', serverConnected);
	serial.on('open', portOpen);
	serial.on('data', serialEvent);
	serial.on('error', serialError);
	serial.on('close', portClose);

	serial.open(portName);
}

function draw() {
	var c = map(sensorValue, 0, 1023, 0, 180);

	//Sky
	background(c, c,  c + 85);

	//Sun
	var y = map(sensorValue, 0, 1023, height, 0);
	fill('gold');
	noStroke();
	ellipse(width/2, y, 100);

	//ground
	fill(c, c + 75, c);
	rect(0, height * 0.75, width, height * 0.25);
}