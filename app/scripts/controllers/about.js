'use strict';

/**
 * @ngdoc function
 * @name blwebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blwebApp
 */
angular.module('blwebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
