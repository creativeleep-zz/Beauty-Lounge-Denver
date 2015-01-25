'use strict';

/**
 * @ngdoc function
 * @name blwebApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the blwebApp
 */
angular.module('blwebApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
