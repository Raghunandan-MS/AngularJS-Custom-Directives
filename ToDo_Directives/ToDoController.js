var app = angular.module("todoApp" , ['ngRoute']);

app.controller("ToDoController" , function($scope){

	$scope.heading = "Notes Application";

	$scope.notes = [{title: "1st Note" , completed: false} , {title: "2nd Note" , completed: false}];

});

app.directive("todoDirective" , function(){

	return{

		restrict: 'E',

		scope: {

			heading: "@",
			notes: "=" 

		},

		template: "<div> Heading is : {{heading}} <br/>" +
				  "<div> Notes are mentioned below : <br/></div>" + 
				  "<ol ng-repeat = 'note in notes'> <li><input type='checkbox' ng-model = note.completed> {{note.title}} </li></ol>"

	};

});