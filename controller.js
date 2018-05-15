var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'login.html'
	})
	.when('/dashboard', {
		resolve: {
			"check": function($location, $rootScope) {
				if(!$rootScope.loggedIn){
					$location.path('/');
				}
				else {
				}
			}
			templateUrl: 'dashboard.html'

		}
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller("loginController" function($scope, $location, $rootScope) {
	$scope.submit = function() {
		if($scope.username == 'testapis@tuten.cl' && $scope.password == '1234') {
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		}
		else{

		}
	};	
};