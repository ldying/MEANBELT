app.controller('pollController', function($scope, $routeParams, pollFactory, userFactory) {
	var id = $routeParams.id;
	var poll_id = null;

	userFactory.readUser(function(data) {
		$scope.name = data;
	})
	
	pollFactory.getPoll(id, function(data) {
		poll_id = data._id;
		$scope.poll = data;
		
		
	})


	$scope.votePoll = function (poll, option) {
		// console.log(poll);
		// console.log(option)
		pollFactory.votePoll(poll, option, function (data) {
			$scope.polls = data;

		})
	}
})
