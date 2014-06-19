'use strict';
 
angular.module('radicalApp', [ 'radicalApp.controllers']).
 
  config(['$routeProvider', function($routeProvider,RadicalController) {
 
    $routeProvider.when('/', { controller: 'RadicalController'});
 
    $routeProvider.otherwise({redirectTo: '/'});
 
  }]);