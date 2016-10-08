'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');

// angular modules
angular.module('contactApp', []);

// angular services

// angular components
require('./component/main');
require('./component/nav');
require('./component/about');
