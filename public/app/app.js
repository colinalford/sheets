angular.module('app', [])

.controller('mainController', function($scope) {
  $scope.subscribe = {};
  $scope.subscribe.plan = 3;
  $scope.subscribe.email = 'example@email.com';
  $scope.subscribe.password = 'Enter password'
});
