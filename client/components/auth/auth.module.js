'use strict';

angular.module('yoAngularFullStackApp.auth', [
  'yoAngularFullStackApp.constants',
  'yoAngularFullStackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
