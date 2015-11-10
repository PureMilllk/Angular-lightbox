var app = angular.module('demoapp', ['angularLightbox']);

app.controller('ctrl', ['$scope', function($scope){

	$scope.lightboxImages = [
		{
			src: "images/1.png"
		},
		{
			src: "images/2.png"
		},
		{
			src: "images/3.png"
		},
		{
			src: "images/4.png"
		},
		{
			src: "images/5.png"
		},
		{
			src: "images/6.png"
		},
		{
			src: "images/7.png"
		},
		{
			src: "images/8.png"
		},
		{
			src: "images/9.png"
		},
		{
			src: "images/10.png"
		},
	];
}]);
