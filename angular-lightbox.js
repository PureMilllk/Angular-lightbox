/**
* @license Angular Lightbox
* (c) 2015 PureMilllk
* License: ISC
* Github: https://github.com/PureMilllk/Angular-lightbox
*/

;(function(angular, undefined){'use strict';

	angular.module('angularLightbox', [])

	.service('lbClickHelper', [function () {
		this.clicked = false;
	}])

	// wrapper
	.directive('lbCellRoot', [function () {

		function link (scope, element, attrs) {
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
	.directive('lbCellRoom', ['$window', function ($window) {

		function link (scope, element, attrs) {
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
	.directive('lbCellAnchor', ['$window', '$compile', 'lbClickHelper', function($window, $compile, lbClickHelper){

		function link (scope, element, attrs) {
			element.css({
				textDecoration: "none",
			});
			scope.removeElem = function (elem) {
				elem.remove();
			};
			element.on('click', function(event){
				event.preventDefault();
				lbClickHelper.clicked = true;
				console.log(scope.lb.src);
				console.log(lbClickHelper.clicked);
				if (lbClickHelper.clicked) {
					var overlay = $compile('<div lb-overlay></div>')(scope);
					var body = $window.document.querySelector("body");
					angular.element(body).append(overlay);
					var overlayImg = $compile('<img lb-overlay-img />')(scope);
					overlay.append(overlayImg);
					overlayImg.attr('src',scope.lb.src);
				}
			});

		}

		return {
			link: link
		}

	}])

	// img
	.directive('lbCellImg', ['$window', function ($window) {

		function link (scope, element, attrs) {
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

	.directive('lbOverlay', ['$window', function ($window) {

		function link (scope, element, attrs) {
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
			element.on('click', function () {
				scope.removeElem(element);
			})
		}

		return {
			link: link
		}

	}])

	// overlay img
	.directive('lbOverlayImg', [function () {

		function link (scope, element, attrs) {
			element.css({
				marginTop: "10%"
			});
		}

		return {
			link: link
		}

	}])

	// merge
	.directive('lbCell', ['$window', function ($window) {

		function link (scope, element, attrs) {
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