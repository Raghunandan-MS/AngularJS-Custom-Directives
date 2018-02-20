var app = angular.module("appExample5" , ['ngRoute']);

app.controller("ControllerExample5" , function($scope){

	$scope.person = {name: "Alexis Sanchez", address: "123 Manchester Street"};

	$scope.changeDetails = function()
	{
		$scope.person.name = "Paul Pogba";
		$scope.person.address = "Some Street";
	}

});

app.directive("nameDirective" , function(){

	return{

		scope: {

			someaction: "&",
			name: "@",
			address: "@"

		},

			template: "<div> {{name}} - {{address}} </div>" + 
					  "<button ng-click = 'someaction()'> Change Details </button>" 

	};

});