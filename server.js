var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log('Server is running');

// socket.io
var socket = require('socket.io');
var io = socket(server);

io.on('connection', connectionMessage);

function connectionMessage(socket) {
	console.log('New client is connected: ' + socket.id);


	var data = {
		id: socket.id
	}
	socket.broadcast.emit('listerSocket', data);

	socket.on('mouse', mouseMsg);
	
	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data);
		console.log(data);
	}

}

