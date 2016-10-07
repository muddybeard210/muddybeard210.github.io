'use strict';

require('./nav.scss');
const angular = require('angular');
const contactApp = angular.module('contactApp');

contactApp.component('appNav', {
  template: require('./nav.html')
});
