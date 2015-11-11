/*! angular-lightbox - v1.0.1 - 2015-11-11
* https://github.com/PureMilllk/Angular-lightbox#readme
* Copyright (c) 2015 ; Licensed  */
(function() {
  "use strict";
  this.angular.module("angularLightbox", []).directive("lbCellRoot", [
    function() {
      var link;
      link = function(scope, element, attrs) {
        element.css({
          listStyle: "none",
          margin: "0 auto",
          padding: "0",
          display: "block",
          maxWidth: "780px",
          textAlign: "center"
        });
      };
      return {
        link: link
      };
    }
  ]).directive("lbCellRoom", [
    function() {
      var link;
      link = function(scope, element, attrs) {
        element.css({
          display: "inline-block",
          padding: "8px",
          background: "white",
          margin: "10px"
        });
      };
      return {
        link: link
      };
    }
  ]).directive("lbCellAnchor", [
    "$window", "$compile", function($window, $compile) {
      var link;
      link = function(scope, element, attrs) {
        element.css({
          textDecoration: "none"
        });
        scope.removeElem = function(elem) {
          elem.remove();
        };
        element.on("click", function(event) {
          var body, overlay, overlayImg;
          event.preventDefault();
          overlay = $compile("<div lb-overlay></div>")(scope);
          body = $window.document.querySelector("body");
          $window.angular.element(body).append(overlay);
          overlayImg = $compile("<img lb-overlay-img />")(scope);
          overlay.append(overlayImg);
          overlayImg.attr("src", scope.lb.src);
        });
      };
      return {
        link: link
      };
    }
  ]).directive("lbCellImg", [
    function() {
      var link;
      link = function(scope, element, attrs) {
        element.css({
          display: "block",
          width: "100px"
        });
      };
      return {
        link: link
      };
    }
  ]).directive("lbOverlay", [
    function() {
      var link;
      link = function(scope, element, attrs) {
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
        element.on("click", function() {
          scope.removeElem(element);
        });
      };
      return {
        link: link
      };
    }
  ]).directive("lbOverlayImg", [
    function() {
      var link;
      link = function(scope, element, attrs) {
        element.css({
          marginTop: "10%"
        });
      };
      return {
        link: link
      };
    }
  ]).directive("lbCell", [
    function() {
      var replace, restrict, scope, template;
      restrict = "AE";
      template = '<li lb-cell-room ng-repeat="lb in lightboxImgs"> <a lb-cell-anchor href=""> <img lb-cell-img src="{{lb.src}}" alt="{{lb.alt}}"> </a> </li>';
      scope = {
        lightboxImgs: "="
      };
      replace = true;
      return {
        restrict: restrict,
        template: template,
        replace: replace,
        scope: scope
      };
    }
  ]);

}).call(this);
