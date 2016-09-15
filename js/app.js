console.log('app.js was loaded.');

var calc = angular.module("SimpleCalc", []);

calc.controller('HomeCtrl', ['$scope', function($scope) {

    $scope.result = '0';
    $scope.toCalculate = [];

    $scope.zeroButton = function() {
        console.log('0');
        $scope.result = '0' + $scope.result;
    }
    $scope.oneButton = function() {
        console.log('1');
        $scope.result = '1' + $scope.result;
    }
    $scope.twoButton = function() {
        console.log('2');
        $scope.result = '2' + $scope.result;
    }
    $scope.threeButton = function() {
        console.log('3');
        $scope.result = '3' + $scope.result;
    }
    $scope.fourButton = function() {
        console.log('4');
        $scope.result = '4' + $scope.result;
    }
    $scope.fiveButton = function() {
        console.log('5');
        $scope.result = '5' + $scope.result;
    }
    $scope.sixButton = function() {
        console.log('6');
        $scope.result = '6' + $scope.result;
    }
    $scope.sevenButton = function() {
        console.log('7');
        $scope.result = '7' + $scope.result;
    }
    $scope.eightButton = function() {
        console.log('8');
        $scope.result = '8' + $scope.result;
    }
    $scope.nineButton = function() {
        console.log('9');
        $scope.result = '9' + $scope.result;
    }

    $scope.clearButton = function() {
        console.log('Clearing');
        $scope.result = '0';
    }

    $scope.addButton = function() {
        console.log('Adding');
        $scope.toCalculate.push($scope.result);
        console.log($scope.toCalculate);
        $scope.operator = "+";
        $scope.result = '';
    }
    $scope.subtractButton = function() {
        console.log('Subtracting');
        $scope.toCalculate.push($scope.result);
        console.log($scope.toCalculate);
        $scope.operator = "-";
        $scope.result = '';
    }
    $scope.multiplyButton = function() {
        console.log('Multiplying');
        $scope.toCalculate.push($scope.result);
        console.log($scope.toCalculate);
        $scope.operator = '*';
        $scope.result = '';
    }
    $scope.divideButton = function() {
        console.log('Dividing');
        $scope.toCalculate.push($scope.result);
        console.log($scope.toCalculate);
        $scope.operator = '/';
        $scope.result = '';
    }

    $scope.equalsButton = function () {
        console.log('Equals');

        for (var i=0; i<$scope.toCalculate.length; i++) {

        }
        // if ($scope.operator = '+') {
        //     console.log('You added junk!');
        // } else if ($scope.operator = '-') {
        //     console.log('You subtracted junk!');
        // } else if ($scope.operator = '*') {
        //     console.log('You multiplied junk!');
        // } else if ($scope.operator = '/') {
        //     console.log('You divided junk!');
        // }
    }

}]);
