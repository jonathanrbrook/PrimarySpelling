'use strict';

var app = angular.module("app", []);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/',
        {
            templateUrl:"templates/welcome.html"
        })
        .when('/pizza',
        {
            template:"yum!!!"
        })
        .when('/read/:listName', {
            templateUrl:"templates/read.html",
            controller: "ReadController"
        })
        .when('/listen/:listName', {
            templateUrl:"templates/listen.html",
            controller: "ReadController"
        })
        .otherwise({redirectTo: '/'});

        //$locationProvider.html5Mode(true).hashPrefix('!');
});

app.controller("TestController", function ($scope) { $scope.debugOutput = "debugging the page!!!"});


