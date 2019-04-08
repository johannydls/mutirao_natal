angular.module('mutirao-natal')

.controller('HomeCtrl', function($scope, $location, $localStorage) {
    $localStorage.location = $location.path();
    $scope.location = $location.path();
});