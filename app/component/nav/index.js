'use strict';

require('./nav.scss');
const angular = require('angular');
const contactApp = angular.module('contactApp');

contactApp.component('appNav', {
  template: require('./nav.html'),
  controller: 'NavController',
  controllerAs: 'navCtrl'
});


contactApp.controller('NavController', ['$log', '$location', NavController]);

function NavController($log) {
  $log.debug('smello');
}
