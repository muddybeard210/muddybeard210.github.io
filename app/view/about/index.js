'use strict';

require('./about.scss');

const angular = require('angular');
const contactApp = angular.module('contactApp');

contactApp.controller('AboutController', ['$log', AboutController]);

function AboutController($log) {
  $log.debug('entered AboutController');

}
