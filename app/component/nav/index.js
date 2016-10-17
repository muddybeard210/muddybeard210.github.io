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

function NavController() {
  $(window).scroll(function(){
    if($(this).scrollTop() > 1) {
      $('.contactBtns i').css("font-size", "50px");
      // $('.contactBtns').css("position", "fixed");

    } else {
      $('.contactBtns i').css("font-size", "100px");
      // $('.contactBtns').css("position", "relative");

    }

  });
}
