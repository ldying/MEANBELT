
app.controller('createController', function($scope, pollFactory, userFactory, $location) {
	$scope.newPoll = {};
	$scope.errors = [];

	userFactory.readUser(function(data) {
		$scope.user = data;
	})


	$scope.createPoll = function(newPoll, user) {
		newPoll.username = user.name;
		newPoll.user_id = user._id;
		$scope.errors = [];
		console.log(newPoll)
		pollFactory.createPoll(newPoll, function(data) {
			// userFactory.updateUserPolls(data, user, function(info) {});
			// $scope.Polls = data.data;
			if (data.errors) {
				if (data.errors.title) {
					$scope.errors.push({message: "Question must be at least 8 characters long."})
				}
				if (data.errors["opt1.text"]) {
					$scope.errors.push({message: "Option 1 must be at least 3 characters long."})
				}
				if (data.errors["opt2.text"]) {
					$scope.errors.push({message: "Option 2 must be at least 3 characters long."})
				}
				if (data.errors["opt3.text"]) {
					$scope.errors.push({message: "Option 3 must be at least 3 characters long."})
				}
				if (data.errors["opt4.text"]) {
					$scope.errors.push({message: "Option 4 must be at least 3 characters long."})
				}

			console.log($scope.errors)
			}else {

				$scope.newPoll = {};
				$location.path('/dashboard');
			}
		})
	}
})