'use strict';

angular.module('yoAngularFullStackApp', [
  'yoAngularFullStackApp.auth',
  'yoAngularFullStackApp.admin',
  'yoAngularFullStackApp.constants',
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
