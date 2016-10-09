'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngAnimate = require('angular-animate');


// angular modules
angular.module('contactApp', [ngRoute, ngAnimate])
.config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider){
  $routeProvider
  .when('/about', {
    template: require('./view/about/about.html'),
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
  })
  .when('/projects', {
    template: require('./view/projects/projects.html'),
    controller: 'ProjectsController',
    controllerAs: 'projectCtrl',
  })
  .otherwise({
    redirectTo:'/home',
  });
}]);
// .animation('.reveal-animation', function() {
//   return {
//     enter: function(element, done) {
//       element.css('display', 'none');
//       element.fadeIn(2000, done);
//       return function() {
//         element.stop();
//       };
//     },
//     leave: function(element, done) {
//       element.fadeOut(2000, done);
//       return function() {
//         element.stop();
//       };
//     }
//   };
// });

// angular services

// angular components
require('./component/main');
require('./component/nav');
require('./view/about');
require('./view/projects');
