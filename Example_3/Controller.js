var app = angular.module("appExample3" , ['ngRoute']);

app.controller("ControllerExample3" , function($scope){

	$scope.person = {firstname: "Alexis Sanchez", address: "123 Manchester Street"};

});

app.directive("nameDirective" , function(){

	return{

		restrict: 'AE',

		scope: {

			first: "@",
			address: "@"

		},

		template: "<div> Name : {{first}} <br/> Address: {{address}}</div>"

	};

});