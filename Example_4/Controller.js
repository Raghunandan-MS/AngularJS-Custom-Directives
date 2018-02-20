var app = angular.module("appExample4" , ['ngRoute']);

app.controller("ControllerExample4" , function($scope){

	$scope.naomi = {name: "Naomi" , address: "1600 Amphitheater Drive"};
	$scope.igor = {name: "Igor" , address: "XYZ Street"};

});

app.directive("nameDirective" , function(){

	return{

		scope: {

			customer: "=info"
		},

		template: "<div> Name: {{customer.name}} <br/> Address: {{customer.address}} </div>"

	};
});