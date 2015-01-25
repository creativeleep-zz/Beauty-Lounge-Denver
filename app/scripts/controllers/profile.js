'use strict';

/**
 * @ngdoc function
 * @name blwebApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the blwebApp
 */
angular.module('blwebApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
