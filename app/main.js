/**
 * User hefeng
 * Date 2016/7/26
 */
angular.module("app", [
	'ngRoute', 'ngMessages'
])
	/**
	 * 配置app
	 */
	.config(function($routeProvider) {
		/*$routeProvider.when('/', {templateUrl: 'index.html'});
		$routeProvider.when('/ng-test', {templateUrl: 'ng-test.html'});
		$routeProvider.when('/ng-form', {templateUrl: 'ng-form.html'});
		$routeProvider.when('/ng-controller', {templateUrl: 'ng-controller.html'});*/

		$routeProvider
			.when('/ng-test', {
				templateUrl: 'ng-test.html',
				controller: ''
			})
			.when('/ng-form', {
				templateUrl: 'ng-form.html',
				controller: '',
				resolve: {
					// I will cause a 1 second delay
					delay: function($q, $timeout) {
						/*var delay = $q.defer();
						$timeout(delay.resolve, 3000);
						return delay.promise;*/
					}
				}
			})
			.otherwise({
				redirectTo: '/index.html'
			});
	})

	// hello controller
	/*.controller("HelloController", function($scope, $http, $timeout) {
		$scope.sayhi = "hello angular!";
		console.log("$http", $http);
		console.log("$timeout", $timeout);
	})

	// signUpController
	.controller("signUpController", function($scope) {
		$scope.signup = {
			name: "Richard"
		};

		$scope.signUpForm = function() {
			console.log("signUpForm");
		}
	})*/
;

