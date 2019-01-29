angular.module('app', []) // '[]' passes additional funcitonality to the app
    .controller('mainCtrl', ['$scope', function($scope) {
        $scope.stuff = "<p>" + "hello world!!!!!" + '</p>';
    }]); //defines controller and the name of the function
