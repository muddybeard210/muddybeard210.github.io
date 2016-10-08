'use strict';

require('./about.scss');

const angular = require('angular');
const contactApp = angular.module('contactApp');
const $ = require('jquery');

contactApp.directive('appAbout', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./about.html'),
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
    bindToController: true,
    scope: {}
  };
});

contactApp.controller('AboutController', ['$log', function($log){
  $log.debug('yolo!!');
  $('.mainBox').on('click', function(){
    $('.mainBox').hide();
  });

}]);
