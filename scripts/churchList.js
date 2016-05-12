(function(){
    var app = angular.module('list-directives', []);

    app.directive("churchTitle", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/searchResults/church-title.html"
      };
    });

    // This directive populates the header with favorite, name, diocese, state, address, and mass times
    app.directive("churchInfo", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/searchResults/church-info.html"
      };
    });

    // Need to make this populate from the JSON data
    app.directive('churchFavorite', function() {
      return {
        scope: true,
        restrict: 'E',
        templateUrl: "../directives/searchResults/church-favorite.html",
        link: function(scope, elem) {
          elem.bind('click', function() {
            scope.$apply(function(){
              scope.church.favorite = !scope.church.favorite;
            });
          });
        },
        controller: function() {
          this.church = {
            favorite: false,
          };
        }
      };
    });

    app.directive("churchSundayMassTimes", function() {
      return {
        restrict: 'A',
        templateUrl: "../directives/searchResults/church-sunday-mass-times.html"
      };
    });

    app.directive("churchWeekdayMassTimes", function() {
      return {
        restrict: 'A',
        templateUrl: "../directives/searchResults/church-weekday-mass-times.html"
      };
    });

    app.directive("churchReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/searchResults/church-reviews.html"
      };
    });

    app.directive("churchDetails", function() {
      return {
        restrict:"A",
        templateUrl: "../directives/searchResults/church-details.html"
      };
    });

    app.directive("churchTabs", function() {
      return {
        restrict: "E",
        templateUrl: "../directives/searchResults/church-tabs.html",
      };
    });

    app.directive("churchGallery", function() {
      return {
        restrict: "E",
        templateUrl: "../directives/searchResults/church-gallery.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
          };
        },
        controllerAs: "gallery"
      };
    });

    app.directive("addChurch", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/searchResults/add-church.html"
      };
    });


  })();
