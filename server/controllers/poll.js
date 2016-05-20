var mongoose = require('mongoose');
var Poll = mongoose.model('Polls');

module.exports = (function() {
	return {
		create: function(req, res) {
			var newPoll = new Poll(req.body);
			newPoll.save(function(err, info) {
				if(err){
					console.log("Poll 10 new", err)
					res.json(err);
				} else {
					Poll.find({}, function(err, data) {
						if(err){
							console.log("Poll 14", err);
						}
						else
							var data = {data: data, info: info}
							res.json(data);
					})
				}
			})
		},

		read: function(req, res) {
			Poll.find({}, function(err, data) {
				if(err)
					console.log("Poll 25", err)
				else
					res.json(data)
			})
		},

		getOne: function(req, res) {
			Poll.findOne({_id: req.params.id}, function(err, data) {
				if(err)
					console.log("Poll 34", err)
				else
					res.json(data);
			})
		},
		delete: function(req, res){
			Poll.remove({_id: req.params.id}, function(err, poll){
				if(err){
					console.log(err);
					console.log('looks like we have an error in remove poll Controller');
				} else {
					res.json(poll);
				}
			})
		},

		vote1: function(req, res) {
			console.log("params:", req.params)
			console.log(req.body)
			console.log("score",req.body.score)
			
			Poll.findOneAndUpdate({_id: req.params.id}, {opt1: req.body },function(err, data){
					if(err)
						console.log("Poll controller error", err)
					else
						console.log(data);
						res.json(data);
				}
			)
		},
		vote2: function(req, res) {
			console.log("params:", req.params)
			console.log(req.body)
			console.log("score",req.body.score)
			
			Poll.findOneAndUpdate({_id: req.params.id}, {opt2: req.body },function(err, data){
					if(err)
						console.log("Poll controller error", err)
					else
						console.log(data);
						res.json(data);
				}
			)
		},
		vote3: function(req, res) {
			console.log("params:", req.params)
			console.log(req.body)
			console.log("score",req.body.score)
			
			Poll.findOneAndUpdate({_id: req.params.id}, {opt3: req.body },function(err, data){
					if(err)
						console.log("Poll controller error", err)
					else
						console.log(data);
						res.json(data);
				}
			)
		},
		vote4: function(req, res) {
			console.log("params:", req.params)
			console.log(req.body)
			console.log("score",req.body.score)
			
			Poll.findOneAndUpdate({_id: req.params.id}, {opt4: req.body },function(err, data){
					if(err)
						console.log("Poll controller error", err)
					else
						console.log(data);
						res.json(data);
				}
			)
		},

	}
})();
