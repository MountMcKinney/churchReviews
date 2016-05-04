(function() {
  var app = angular.module('churchList', ['list-directives', 'profile-directives']);

app.controller('ListController', ['$http',function($http){
    var list = this;

    list.churches = [];

    $http.get('scripts/church-list.json').success(function(data){
      list.churches = data;
    });
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(church) {
      church.reviews.push(this.review);

      this.review = {};
    };
  });
})();
