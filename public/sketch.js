var socket;
socket = io.connect('localhost:3000');


function setup() {
	createCanvas(1000, 1000);
	background(51);
	socket.on('mouse', newDrawing);
	socket.on('listerSocket', listerSocket);
}


function newDrawing(data) {
	noStroke();
	fill(255, 0, 100);
	ellipse(data.x, data.y, 36 ,36);
}

function listerSocket(data) {
	console.log(data.id);
}

function mouseDragged() {
	console.log(mouseX+ ','+mouseY);
	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 36 ,36);
}



function draw() {

}