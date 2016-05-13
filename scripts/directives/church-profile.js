(function(){
    var app = angular.module('church-profile-directives', []);

    app.directive("churchTitle", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/churchProfile/church-title.html"
      };
    });

    // This directive populates the header with favorite, name, diocese, state, address, and mass times
    app.directive("churchInfo", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/churchProfile/church-info.html"
      };
    });

    // Need to make this populate from the JSON data
    app.directive('churchFavorite', function() {
      return {
        scope: true,
        restrict: 'E',
        templateUrl: "../directives/churchProfile/church-favorite.html",
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
        templateUrl: "../directives/churchProfile/church-sunday-mass-times.html"
      };
    });

    app.directive("churchWeekdayMassTimes", function() {
      return {
        restrict: 'A',
        templateUrl: "../directives/churchProfile/church-weekday-mass-times.html"
      };
    });

    app.directive("churchReviews", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/churchProfile/church-reviews.html"
      };
    });

    app.directive("churchDetails", function() {
      return {
        restrict:"A",
        templateUrl: "../directives/churchProfile/church-details.html"
      };
    });

    app.directive("churchTabs", function() {
      return {
        restrict: "E",
        templateUrl: "../directives/churchProfile/church-tabs.html",
      };
    });

    app.directive("churchGallery", function() {
      return {
        restrict: "E",
        templateUrl: "../directives/churchProfile/church-gallery.html",
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
        templateUrl: "../directives/churchProfile/add-church.html"
      };
    });

    app.directive("addChurchForm", function() {
      return {
        restrict: 'E',
        templateUrl: "../directives/churchProfile/add-church-form.html"
      };
    });


  })();
