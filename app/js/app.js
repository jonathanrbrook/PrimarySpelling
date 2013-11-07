var app = angular.module("Spelling", []);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/',
     {
     templateUrl:"templates/welcome.html",
     controller: "readController"
     });
    $locationProvider.html5Mode(true).hashPrefix('!');

});
