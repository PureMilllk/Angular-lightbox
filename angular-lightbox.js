/**
* @license Angular Lightbox
* (c) 2015 PureMilllk
* License: ISC
* Github: https://github.com/PureMilllk/Angular-lightbox
*/

;(function(angular, undefined){'use strict';

	angular.module('angularLightbox', [])

	// wrapper
	.directive('lbCellRoot', ['$window', function($window){

		function link(scope, element, attrs){
			element.css({
				listStyle:"none",
				margin: "0 auto",
				padding: "0",
				display: "block",
				maxWidth: "780px",
				textAlign: "center",
			});
		}

		return {
			link: link
		}

	}])

	// list item
	.directive('lbCellRoom', ['$window', function($window){

		function link(scope, element, attrs){
			element.css({
				display: "inline-block",
				padding: "8px",
				background:"white",
				margin:"10px",
			});
		}

		return {
			link: link
		}
	}])

	// anchor
	.directive('lbCellAnchor', ['$window', function($window){

		function link(scope, element, attrs){
			element.css({
				textDecoration: "none",
			});
			element.on('click', function(event){
				event.preventDefault();
				console.log(scope.lb.src);
			});
		}

		return {
			link: link
		}

	}])

	// img
	.directive('lbCellImg', ['$window', function($window){

		function link(scope, element, attrs){
			element.css({
				display: "block",
				width: "100px",
			});

		}

		return {
			link: link
		}

	}])

	// overlay

	.directive('lbOverlay', ['$window', function($window){

		function link(scope, element, attrs){
			element.css({
				position: "absolute",
				top: "0",
				left: "0",
				zIndex: "0",
				textAlign: "center",
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0,0,0,.5)"
			});
		}

		return {
			link: link
		}

	}])

	// overlay img

	// merge
	.directive('lbCell', ['$window', function($window){

		function link(scope, element, attrs){
		}

		var	restrict = 'AE',
			template = ' \
				<li lb-cell-room ng-repeat="lb in lightboxImgs"> \
					<a lb-cell-anchor href=""> \
						<img lb-cell-img src="{{lb.src}}" alt="{{lb.alt}}"> \
					</a> \
				</li>',
			scope = {
				lightboxImgs: "="
			},
			replace = true;

		// return static format
		return {
			restrict: restrict,
			template: template,
			replace: replace,
			scope: scope,
			link: link
		};
	}])

}.call(this, window.angular))