'use strict';

require('./nav.scss');
const angular = require('angular');
const contactApp = angular.module('contactApp');
const $ = require('jquery');

contactApp.component('appNav', {
  template: require('./nav.html'),
  controller: 'NavController',
  controllerAs: 'navCtrl'
});


contactApp.controller('NavController', ['$log', '$location', '$animate', NavController]);

function NavController($log) {
  $log.debug('entering NavController');
}
