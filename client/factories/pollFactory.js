app.factory('pollFactory', function($http) {
	var factory = {};
	var currentUser = null;
	var polls = [];

	factory.createPoll = function(newPoll, callback) {
		$http.post('/polls', newPoll).success(function(data) {
			console.log(data)
			callback(data);

		})
	}

	factory.readPolls = function(callback) {
		$http.get('/polls').success(function(data) {
			polls = data;
			callback(polls);
		})
	}

	factory.getPoll = function(id, callback) {
		$http.get('/polls/'+id).success(function(data) {
			callback(data);
		})
	}

	factory.setUser = function(user, callback) {
		this.currentUser = user;
		callback(currentUser);
	}

	factory.getUser = function(data, callback) {
		this.currentUser = data;
		callback(currentUser);
	}

	factory.removePoll = function(poll, callback){
		$http.delete('/polls/' + poll._id).then(function(data){
			console.log(data);
			polls.splice(polls.indexOf(poll), 1);
			callback(polls);
		})
	}
	factory.votePoll = function(poll, option, callback) {
		// console.log("in poll fact", poll)
		id = poll._id
		option.score++
		console.log(option)
		$http.post('/polls/'+id+'/vote/'+option.optid, option).success(function(data) {
			callback(data);
		})
	}

	return factory;
})