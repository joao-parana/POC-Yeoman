'use strict';
angular.module('pocYoApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
    }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
    }).otherwise({
        templateUrl: 'views/404.html',
        controller: 'MainCtrl'
    });
});
