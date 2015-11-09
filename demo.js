var app = angular.module('demoapp', ['angularLightbox']);

app.controller('ctrl', ['$scope', function($scope){

	$scope.lightboxImages = [
		{
			src: "images/refferal_machine.png"
		},
		{
			src: "images/space-juice.png"
		},
		{
			src: "images/education.png"
		},
		{
			src: "images/copy_mcrepeatsalot.png"
		},
		{
			src: "images/sebastian.png"
		},
		{
			src: "images/skill-polish.png"
		},
		{
			src: "images/chuck.png"
		},
		{
			src: "images/library.png"
		},
		{
			src: "images/boat.png"
		},
		{
			src: "images/illustrator_foundations.png"
		},
	];
}])
