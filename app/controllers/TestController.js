/**
 * User hefeng
 * Date 2016/7/26
 */
angular.module("App.TestPackage", [], function($provide) {
	$provide.provider("TestServiceProvider", function() {
		this.$get = function() {
			return {
				title: "hello",
				message: "Richard"
			}
		};
	})
})
	.config(function($provide) {
		$provide.provider("TestServiceProvider2", function() {
			this.$get = function() {
				return {
					title: "hello2",
					message: "Richard2"
				}
			}
		});

		$provide.factory("TestFactoryProvider", function() {
			return "hello Richard";
		})
	})
	.controller("TestController", function($scope, TestServiceProvider, TestServiceProvider2, TestFactoryProvider) {
		$scope.items = [
			{
				title: "ngSanitize",
				size: "10",
				desc: "Use ngSanitize to securely parse and manipulate HTML data in your application."
			},{
				title: "ngMock",
				size: "12",
				desc: "Use ngMock to inject and mock modules, factories, services and providers within your unit tests."
			},{
				title: "ngTouch",
				size: "103",
				desc: "Use ngTouch when developing for mobile browsers/devices."
			}
		];

		$scope.removeItem = function(index) {
			$scope.items.splice(index, 1);
		};

		console.log(TestServiceProvider.title, TestServiceProvider.message);
		console.log(TestServiceProvider2.title, TestServiceProvider2.message);
		console.log(TestFactoryProvider);
	})
;
