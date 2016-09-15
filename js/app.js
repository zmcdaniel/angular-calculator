console.log('app.js was loaded.');

var calc = angular.module("SimpleCalc", []);

calc.controller('HomeCtrl', ['$scope', function($scope) {

    $scope.displayNumber = '';
    $scope.number = 0;
    $scope.toCalculate = [];
    $scope.operator = '';

    $scope.zeroButton = function() {
        console.log(displayNumber);
        $scope.displayNumber = '0' + $scope.displayNumber;
    }
    $scope.oneButton = function() {
        console.log(displayNumber);
        $scope.displayNumber = '1' + $scope.displayNumber;
    }
    $scope.twoButton = function() {
        console.log('2');
        $scope.displayNumber = '2' + $scope.displayNumber;
    }
    $scope.threeButton = function() {
        console.log('3');
        $scope.displayNumber = '3' + $scope.displayNumber;
    }
    $scope.fourButton = function() {
        console.log('4');
        $scope.displayNumber = '4' + $scope.displayNumber;
    }
    $scope.fiveButton = function() {
        console.log('5');
        $scope.displayNumber = '5' + $scope.displayNumber;
    }
    $scope.sixButton = function() {
        console.log('6');
        $scope.displayNumber = '6' + $scope.displayNumber;
    }
    $scope.sevenButton = function() {
        console.log('7');
        $scope.displayNumber = '7' + $scope.displayNumber;
    }
    $scope.eightButton = function() {
        console.log('8');
        $scope.displayNumber = '8' + $scope.displayNumber;
    }
    $scope.nineButton = function() {
        console.log('9');
        $scope.displayNumber = '9' + $scope.displayNumber;
    }

    $scope.clearButton = function() {
        console.log('Clearing');
        $scope.displayNumber = '0';
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
