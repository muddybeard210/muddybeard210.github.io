/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n// webpack assets\n\n__webpack_require__(1);\n__webpack_require__(2);\n\n// npm modules\nvar angular = __webpack_require__(13);\n\n// angular modules\nangular.module('demoApp', []);\n\n// angular services\n\n// angular components\n__webpack_require__(15);\n__webpack_require__(19);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/entry.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/entry.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__.p + \"index.html\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/file-loader?name=[name].[ext]!./app/html/index.html\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/html/index.html?./~/file-loader?name=%5Bname%5D.%5Bext%5D");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/scss/base.scss\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/scss/base.scss?");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	eval("__webpack_require__(14);\nmodule.exports = angular;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/angular/index.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/angular/index.js?");

/***/ },
/* 14 */
/***/ function(module, exports) {


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(16);\n\nvar angular = __webpack_require__(13);\n\nangular.module('demoApp').directive('appMain', function () {\n  return {\n    restrict: 'E',\n    replace: true,\n    template: __webpack_require__(18),\n    controller: [MainController],\n    controllerAs: 'mainCtrl',\n    bindToController: true,\n    scope: {}\n  };\n});\n\nfunction MainController() {\n  this.example = 'hello world';\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/index.js\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/index.js?");

/***/ },
/* 16 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/main.scss\n ** module id = 16\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/main.scss?");

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	eval("module.exports = \"<main class=\\\"app-main\\\">\\n  <h1> {{mainCtrl.example}} </h1>\\n</main>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/main/main.html\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/main/main.html?");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(20);\nvar angular = __webpack_require__(13);\nvar demoApp = angular.module('demoApp');\n\ndemoApp.component('appNav', {\n  template: __webpack_require__(22)\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/nav/index.js\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/nav/index.js?");

/***/ },
/* 20 */
/***/ function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/nav/nav.scss\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/nav/nav.scss?");

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	eval("module.exports = \"<nav class=\\\"app-nav\\\">\\n  <ul>\\n    <li> <a href=\\\"#\\\">About</a> </li>\\n    <li> <a href=\\\"#\\\">Projects</a> </li>\\n    <li> <a href=\\\"#\\\">Home</a> </li>\\n\\n  </ul>\\n</nav>\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./app/component/nav/nav.html\n ** module id = 22\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./app/component/nav/nav.html?");

/***/ }
/******/ ]);