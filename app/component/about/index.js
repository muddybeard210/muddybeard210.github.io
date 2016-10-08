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

contactApp.controller('AboutController', ['$log', '$location', '$rootScope', function($log, $location, $rootScope){
  $log.debug('yolo!!');
  $('.mainBox').on('click', function(){
    $('.mainBox').hide();
  });

  if ($location.path() === '/about'){
    $('.mainBox').fadeIn('fast');
  }

  $rootScope.$on('$locationChangeSuccess', function () {
    if ($location.path() === '/about'){
      $('.mainBox').fadeIn('fast');
      return;
    }
    $('.mainBox').hide();

  });


}]);
