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
	// config
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

	// provider
	// return string/object
	.provider("testMyProvider", function() {
		this.$get = function() {
			return "test my provider"
		}
	})

	// factory
	// return string/object
	.factory("testMyFactory", function() {
		return "test my factory";
	})

	// service
	// return object
	.service("testMyService", function() {
		return {
			title: "test",
			message: "my service"
		};
	})

	// controller
	.controller("TestController", function(
		$scope,
		testMyProvider, testMyFactory, testMyService,
		TestServiceProvider, TestServiceProvider2, TestFactoryProvider
	) {
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


		console.log(testMyProvider);
		console.log(testMyFactory);
		console.log(testMyService.title, testMyService.message);

		console.log(TestServiceProvider.title, TestServiceProvider.message);
		console.log(TestServiceProvider2.title, TestServiceProvider2.message);
	})
;
