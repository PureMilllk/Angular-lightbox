var app = angular.module('demoapp', ['angularLightbox']);

app.controller('ctrl', ['$scope', function($scope){

	$scope.lightboxImages = [
		{
			src: "public/images/1.png"
		},
		{
			src: "public/images/2.png"
		},
		{
			src: "public/images/3.png"
		},
		{
			src: "public/images/4.png"
		},
		{
			src: "public/images/5.png"
		},
		{
			src: "public/images/6.png"
		},
		{
			src: "public/images/7.png"
		},
		{
			src: "public/images/8.png"
		},
		{
			src: "public/images/9.png"
		},
		{
			src: "public/images/10.png"
		},
	];
}]);
