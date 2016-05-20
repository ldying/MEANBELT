var poll = require('./../controllers/poll.js');
var user = require('./../controllers/user.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/user', function(req, res) {
		user.read(req, res);
	});

	app.post('/user', function(req, res) {
		user.create(req, res);
	})



	app.get('/polls', function(req, res) {
		poll.read(req, res);
	})

	app.get('/polls/:id', function( req, res) {
		poll.getOne(req, res);
	})

	app.post('/polls', function(req, res) {
		poll.create(req, res);
	})

	app.post('/polls/:id/vote/1', function(req, res) {
		poll.vote1(req, res);
	})

	app.post('/polls/:id/vote/2', function(req, res) {
		poll.vote2(req, res);
	})

	app.post('/polls/:id/vote/3', function(req, res) {
		poll.vote3(req, res);
	})

	app.post('/polls/:id/vote/4', function(req, res) {
		poll.vote4(req, res);
	})

	app.delete('/polls/:id', function(req, res) {
		poll.delete(req, res);
	})



}