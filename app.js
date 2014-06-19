'use strict';
 
angular.module('radicalApp', [ 'radicalApp.controllers', 'ui.bootstrap']).
 
  config(['$routeProvider', function($routeProvider,RadicalController) {
 
    $routeProvider.when('/', { controller: 'RadicalController'});
 
    $routeProvider.otherwise({redirectTo: '/'});
 
  }]);