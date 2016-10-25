'use strict';

require('./projects.scss');

const angular = require('angular');
const contactApp = angular.module('contactApp');
const $ = require('jquery');

contactApp.controller('ProjectsController', ['$log', ProjectsController]);

function ProjectsController($log) {
  $log.debug('entered ProjectsController');
}
