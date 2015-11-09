/**
* @license Angular Lightbox
* (c) 2015 PureMilllk
* License: ISC
* Github: https://github.com/PureMilllk/Angular-lightbox
*/

;(function(angular, undefined){'use strict';

angular.module('angularLightbox', [])

	.directive('ngLb', ['$window', function($window){

		return {
			require: 'ngLb',
       		restrict: 'A',
       		controller: ['$scope', '$log', function($scope, $log){
       			$log.log($scope);


       		}]
		};

	}])

	.directive('lbCell', ['$window', function($window){

		return {
			require: 'lbCell',
			restrict: 'AE',
			template: '\
				<li ng-repeat="lb in lbImgs">\
					<a href="{{lb.src}}">\
						<img src="{{lb.src}}" alt="{{lb.alt}}">\
					</a>\
				</li>',
			replace: true,
			scope: {
				lbImgs: "="
			}

		};
	}])

}.call(this, window.angular))