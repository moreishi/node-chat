module.exports = function(io) {

	var users = [];
	var online_users = 0;

	io.on('connection', function(client) {

		client.on('disconnect', function() {
	      	console.log('Got disconnect!');

	      	users.map(function(val, index) {
	      		if (val.id === client.id) users.pop[index];
	      	});

	      	online_users--;
	    });

		client.on('join', function(data) {
			var _data = {id:client.id, name: data};
			users.push(_data);
			online_users++;
	    });

	    client.on('message', function(data) {
	    	var user = {};

	    	users.map(function(val, index) {
	      		if (val.id === client.id) user = val;
	      	});

	    	var _data = { user: user, message: data }

	        client.broadcast.emit('broadcast', _data);
	    });
		
	});

}