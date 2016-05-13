// (function(){
//     var app = angular.module('churchSearchResults', []);
//     app.config(['$routeProvider',
//     function($routeProvider) {
//       $routeProvider.
//         when('/searchResults', {
//           templateUrl: 'searchResults/search-results.html',
//           controller: 'ListController'
//         }).
//         // when('/phones/:phoneId', {
//         //   templateUrl: 'partials/phone-detail.html',
//         //   controller: 'PhoneDetailCtrl'
//         // }).
//         otherwise({
//           redirectTo: '/'
//         });
//
//         var phonecatControllers = angular.module('phonecatControllers', []);
//
//         phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
//           function ($scope, $http) {
//             $http.get('phones/phones.json').success(function(data) {
//               $scope.phones = data;
//             });
//
//             $scope.orderProp = 'age';
//           }]);
//
//         phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
//           function($scope, $routeParams) {
//             $scope.phoneId = $routeParams.phoneId;
//           }]);
//   }]);
