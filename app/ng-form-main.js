/**
 * User hefeng
 * Date 2016/7/26
 */
angular.module("NgFormApp", [
	'ngMessages'
])
	// signUpController
	.controller("signUpController", function($scope) {
		$scope.signup = {
			name: "Richard"
		};

		$scope.signUpForm = function() {
			console.log("signUpForm");
		}
	})

;

