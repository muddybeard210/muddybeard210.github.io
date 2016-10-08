'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');


// angular modules
angular.module('contactApp', [ngRoute])
.config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider){
  $routeProvider
  .when('/about', {
    template: require('./view/about/about.html'),
    controller: 'AboutController',
    controllerAs: 'aboutCtrl',
  })
  .otherwise({
    redirectTo:'/home',
  });
}]);

// angular services

// angular components
require('./component/main');
require('./component/nav');
require('./view/about');
