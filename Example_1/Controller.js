var app = angular.module("myDirectiveModule" , ['ngRoute']);

app.controller("MainController" , function($scope){

	$scope.person = {name: "David" , address: "123 Tottenham Street"};

});

app.directive("divDirective" , function(){

	return{

		template : "<div> Name : {{person.name}}<br/>  Address: {{person.address}} </div>"

	}

});