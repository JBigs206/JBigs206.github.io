'use strict';

/**
 * @ngdoc overview
 * @name jbigs206githubioApp
 * @description
 * # jbigs206githubioApp
 *
 * Main module of the application.
 */

angular
  .module('jbigs206githubioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/projects.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/paybud', {
        templateUrl: 'views/project_samples/paybud.html',
        controller: 'PaybudCtrl',
        controllerAs: 'paybud'
      })
      .when('/ecl', {
        templateUrl: 'views/project_samples/ecl.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/aroma_yogini', {
        templateUrl: 'views/project_samples/aroma_yogini.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/jsi', {
        templateUrl: 'views/project_samples/jsi.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/old_ekg', {
        templateUrl: 'views/project_samples/old_ekg.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
