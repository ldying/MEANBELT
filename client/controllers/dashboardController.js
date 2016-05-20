
app.controller('dashboardController', function($scope, pollFactory, userFactory) {
	// $scope.polls = [];

	userFactory.readUser(function(data) {
		$scope.user = data;
	})


	pollFactory.readPolls(function(data) {
		$scope.polls = data;
	})	

	$scope.removePoll = function (poll) {
		console.log(poll);
		pollFactory.removePoll(poll, function (data) {
			
		})
	}
})