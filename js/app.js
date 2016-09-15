console.log('app.js was loaded.');

var calc = angular.module("SimpleCalc", []);

calc.controller('HomeCtrl', ['$scope', function($scope) {
    $scope.result = 0;

    $scope.sevenButton = function() {
        $scope.result = 7 + $scope.result;
    }
}]);
