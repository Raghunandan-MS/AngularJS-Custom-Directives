var app = angular.module("appExample2" , ['ngRoute']);

app.controller("ControllerExample2" , function($scope){

	$scope.person = {firstName: "Alexis" , lastName: "Sanchez" , address: "123 Manchester Street"};

});

app.directive("nameDirective" , function(){

	return{

		link: function($scope , element , $attr)
		{
			element.bind("click" , function(){

				element.html("You Clicked Me!");

			});

			element.bind("mouseenter" , function(){

				element.css("background-color" , "yellow");

			});

			element.bind("mouseleave" , function(){

				element.css("background-color" , "white");

			});
		}

	};

});