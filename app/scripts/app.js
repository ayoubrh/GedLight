'use strict';

/**
 * @ngdoc overview
 * @name gedlightApp
 * @description
 * # gedlightApp
 *
 * Main module of the application.
 */
angular
  .module('gedlightApp', [
    'ngResource',
    'ngRoute',
    'angularTree',
    'angularTreeview'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
