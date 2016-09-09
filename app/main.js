/**
 * User hefeng
 * Date 2016/7/26
 */
var app = angular.module("app", [
	//"app/ctrls/HellowController",
	//"app/ctrls/RepeatController"
]).controller("HelloController", function($scope) {
	$scope.sayhi = "hello angular!";
	//console.log("$watch", $watch);
});
