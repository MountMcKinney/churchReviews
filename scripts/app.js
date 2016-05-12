(function() {
  var app = angular.module('churchList', ['ngAnimate', 'ui.bootstrap', 'list-directives', 'profile-directives']);

  app.controller('ListController', ['$http',function($http){
    var list = this;

    list.churches = [];

    $http.get('scripts/church-list.json').success(function(data){
      list.churches = data;
    });
  }]);

  app.controller('ChurchRatingCtrl', function ($scope) {
    $scope.rate = 3;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  });

  app.controller('ReviewController', function($scope) {
    this.review = {};

    this.addReview = function(church) {
      church.reviews.push(this.review);

      this.review = {};
    };
  });

})();
