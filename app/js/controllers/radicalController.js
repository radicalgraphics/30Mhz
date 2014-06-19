'use strict';
 
/* Controllers Module for radicalApp application*/
var radicalControllerModule =  angular.module('radicalApp.controllers', []);
 
/*RadicalController: controller for authors*/
radicalControllerModule.controller('RadicalController', function($rootScope, $scope, $location,$routeParams) {
 
    $scope.appName="Radical Frontend";
    $scope.authorName = "Radical Graphics V.O.F.";
 
});