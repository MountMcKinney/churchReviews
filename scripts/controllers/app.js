(function() {
  var app = angular.module('churchSearch', ['ngAnimate', 'ui.bootstrap', 'profile-directives', 'church-profile-directives', 'sign-in-directives', 'sign-up-directives', 'contact-directives', 'search-results-directives', 'search-directives']);

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

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(church) {
      church.reviews.push(this.review);

      this.review = {};
    };
  });

  app.controller('ChurchCreationController', function() {
    this.church = {};

    this.addChurch = function(newchurch) {
      newchurch.push(this.church);

      this.church = {};
    };
  });

  app.controller('CollapseDemoCtrl', function ($scope) {
    $scope.isCollapsed = true;
  });

  app.controller('TypeaheadCtrl', function($scope, $http) {
    var _selected;

    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // $scope.states = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],

    $scope.stateOptions = {
      debounce: {
        default: 500,
        blur: 250
      },
      getterSetter: true
    };

  });

})();
