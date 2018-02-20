var app = angular.module("appExample6" , ['ngRoute']);

app.controller("ControllerExample6" , function($scope){

	$scope.name = "Tobias";

});

app.directive("nameDirective" , function(){

	return{

		restrict: 'EA', 
		transclude: true,
		scope: {},
		link: function(scope)
		{
			scope.name = "Jeff";
		},

		template: "<div ngTransclude> </div>" + "<div> Checkout the new Contents {{name}} </div>"	
	};

});