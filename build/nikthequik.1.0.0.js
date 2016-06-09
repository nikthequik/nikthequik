/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	$(function(){
		//Perform only on screens above 842px
		if ($(window).width() > 842) {
			
			$('#story').hover(function() {
				$('#michigan, #nmu').stop().fadeIn(1000);
				
				},
				function() {
				$('#michigan, #nmu').stop().fadeOut("fast");
				});
			//On hover make image appear
			$('.push').hover(function() {
				$(this).siblings('img').stop().slideToggle("slow");
				},
				function() {
				$(this).siblings('img').stop().slideToggle("slow");
				});
		}
	
		//Perform only on screens below 842px
		else {
	
		}
	});

/***/ }
/******/ ]);
//# sourceMappingURL=nikthequik.1.0.0.js.map