(function(){
    var app = angular.module('search-results-directives', []);

    app.directive("searchResults", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/searchResults/search-results.html"
      };
    });


  })();
