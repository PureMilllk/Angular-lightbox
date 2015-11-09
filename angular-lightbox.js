/**
* @license Angular Lightbox
* (c) 2015 PureMilllk
* License: ISC
* Github: https://github.com/PureMilllk/Angular-lightbox
*/

;(function(angular, undefined){'use strict';

angular.module('angularLightbox', [])

	.directive('ngLightbox', ['$window', function($window){

		return {
			require: 'ngLightbox',
       		restrict: 'A',
       		controller: ['$scope', '$log', function($scope, $log){
       			$log.log($scope);
       			$scope.innerScopeHelperFunc = function(src){
       				var modalElem = document.createElement("div");
       				var img = document.createElement("img");
       				img.src = src;
       				modalElem.appendChild(img);
       				document.body.appendChild(modalElem);
       				modalElem.style.position = "absolute";
       				//modalElem.style.display = "table";
       				modalElem.style.backgroundColor = "rgba(0,0,0,0.5)";
       				modalElem.style.zIndex = "1000";
       				modalElem.style.width = "100%";
       				modalElem.style.height = "100%";
       				modalElem.style.top = "0";
       				modalElem.style.left = "0";
       				modalElem.style.textAlign = "center";
       				modalElem.setAttribute('ng-click','outterScopeCloseHelperFunc()');
       				img.style.marginTop = "50px";
       				//img.style.display = "table-cell";
       				//img.style.verticalAlign = "middle";

       			};

       		}]
		};

	}])

	.directive('lbCell', ['$window', function($window){

		return {
			require: 'lbCell',
			restrict: 'AE',
			template: '\
				<li ng-repeat="lb in lbImgs">\
					<a href="" ng-click="innerScopeHelperFunc(lb.src);">\
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