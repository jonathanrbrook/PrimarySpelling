var app = angular.module('demo', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/one', {
            templateUrl:'page1.html'
        })
        .when('/two', {
            templateUrl:'page2.html'
        })
        .otherwise({
            redirectTo:'/one'
        });
});

app.controller('MainCtrl', function($scope, $rootScope, $location) {
    $scope.go = function(path) {
        $location.path(path);
    }
});