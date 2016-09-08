/**
 * User hefeng
 * Date 2016/7/26
 */
app.controller("RepeatCtrl", function($scope) {
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
});
