'use strict';

angular.module('bApp', [
    'bApp.auth',
    'bApp.admin',
    'bApp.geolocation',
    'bApp.MainController',
    'bApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
