var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.set('views', path.join(__dirname, './client'));


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

var server = app.listen(8000, function() {
	console.log("SURVEY POLLS EXAM on port 8000");
});