/**
 * User hefeng
 * Date 2016/7/26
 */
app.controller("HelloCtrl", function($scope, $timeout) {
	$scope.sayhi = "hello angular";
	console.log("$>>>", $timeout);
});
