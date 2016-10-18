/**
 * User hefeng
 * Date 2016/7/26
 */
angular.module("App.TestPackage", [], function($provide) {
	/*$provide.provider("TestServiceProvider", function() {
		this.$get = function() {
			return {
				title: "hello",
				message: "Richard"
			}
		};
	})*/
})
	// config
	.config(function(testMyProviderProvider, testMyFactoryProvider) {

		//testMyProviderProvider.setName("Richard.he");

		testMyProviderProvider.name = "Richard.he";
		testMyFactoryProvider.name = "Richard.he";

		/*$provide.provider("TestServiceProvider2", function() {
			this.$get = function() {
				return {
					title: "hello2",
					message: "Richard2"
				}
			}
		});

		$provide.factory("TestFactoryProvider", function() {
			return "hello Richard";
		})*/
	})

	// provider
	// return string/object
	.provider("testMyProvider", function() {
		this.name = "hefeng";

		this.$get = function() {
			var that = this;

			return {
				getName: function() {
					return that.name;
				},

				setName: function(name) {
					that.name = name;
				}
			}
		};
	})

	// factory
	// return string/object
	.factory("testMyFactory", function() {
		this.name = "testMyFactory";
		return "test my factory" + this.name;
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
		testMyProvider, testMyFactory, testMyService
		//TestServiceProvider, TestServiceProvider2, TestFactoryProvider
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

		testMyProvider.setName("he xiao feng");
		console.log(testMyProvider.getName());
		console.log(testMyFactory);
		console.log(testMyService.title, testMyService.message);

		//console.log(TestServiceProvider.title, TestServiceProvider.message);
		//console.log(TestServiceProvider2.title, TestServiceProvider2.message);
	})
;
