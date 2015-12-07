angular.module('app', [])

.controller('main', function($scope) {
  $scope.data = {};
  $scope.data.user = 'John';
  $scope.data.email = 'john@butts.com'
});
