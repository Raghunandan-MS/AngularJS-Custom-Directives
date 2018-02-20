var app = angular.module("transApp" , ['ngRoute']);

app.directive("myTransclusion" , function(){

	return {

	restrict: 'EA',

	scope:{},

	transclude: false,

	template: " <p><h1> Previous Content has been saved before this content !! </h1></p>"
};
});