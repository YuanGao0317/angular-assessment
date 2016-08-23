'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use('/libs', express.static(__dirname + "/node_modules"));
app.use(express.static(__dirname + "/js"));

// Server Entrance
app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function() {
	console.log('Server started at http://localhost:' + app.get('port'));
});