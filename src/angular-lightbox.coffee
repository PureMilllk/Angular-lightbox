"use strict"

this.angular.module "angularLightbox", []
	.directive "lbCellRoot", [
		->
			link = (scope, element, attrs) ->
				element.css 
					listStyle: "none"
					margin: "0 auto"
					padding: "0"
					display: "block"
					maxWidth: "780px"
					textAlign: "center"
				return
			link: link
	]
	.directive "lbCellRoom", [
		->
			link = (scope, element, attrs) ->
				element.css
					display: "inline-block"
					padding: "8px"
					background: "white"
					margin:"10px"
				return
			link: link
	]
	.directive "lbCellAnchor", [
		"$window"
		"$compile"
		($window, $compile) ->
			link = (scope, element, attrs) ->
				element.css
					textDecoration: "none"
				scope.removeElem = (elem) ->
					elem.remove()
					return
				element.on "click", (event) ->
					event.preventDefault()
					overlay = $compile("<div lb-overlay></div>") scope
					body = $window.document.querySelector "body"
					$window.angular.element body
						.append overlay
					overlayImg = $compile("<img lb-overlay-img />") scope
					overlay.append overlayImg
					overlayImg.attr "src",scope.lb.src
					return
				return
			link: link
	]
	.directive "lbCellImg", [
		->
			link = (scope, element, attrs) ->
				element.css
					display: "block"
					width: "100px"
				return
			link: link
	]
	.directive "lbOverlay", [
		->
			link = (scope, element, attrs) ->
				element.css
					position: "absolute"
					top: "0"
					left: "0"
					zIndex: "0"
					textAlign: "center"
					width: "100%"
					height: "100%"
					backgroundColor: "rgba(0,0,0,.5)"
				element.on "click",() ->
					scope.removeElem element
					return
				return
			link: link
	]
	.directive "lbOverlayImg", [
		->
			link = (scope, element, attrs) ->
				element.css
					marginTop: "10%"
				return
			link: link
	]
	.directive "lbCell", [
		->
			restrict = "AE"
			template = '
				<li lb-cell-room ng-repeat="lb in lightboxImgs">
					<a lb-cell-anchor href="">
						<img lb-cell-img src="{{lb.src}}" alt="{{lb.alt}}">
					</a>
				</li>
			'
			scope = 
				lightboxImgs: "="
			replace = true

			restrict: restrict
			template: template
			replace: replace
			scope: scope
	]