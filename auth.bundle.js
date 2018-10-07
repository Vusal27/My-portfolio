/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _parallax = __webpack_require__(/*! ./modules/parallax.js */ \"./src/assets/scripts/modules/parallax.js\");\n\nvar _preloader = __webpack_require__(/*! ./modules/preloader.js */ \"./src/assets/scripts/modules/preloader.js\");\n\nvar _flip = __webpack_require__(/*! ./modules/flip.js */ \"./src/assets/scripts/modules/flip.js\");\n\n(0, _parallax.parallaxfunc)();\n\n(0, _preloader.preloaderfunc)();\n\n(0, _flip.flipfunc)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBSUE7O0FBSUE7O0FBTkE7O0FBSUE7O0FBR0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcmFsbGF4ZnVuYyB9IGZyb20gXCIuL21vZHVsZXMvcGFyYWxsYXguanNcIjtcclxuXHJcbnBhcmFsbGF4ZnVuYygpO1xyXG5cclxuaW1wb3J0IHsgcHJlbG9hZGVyZnVuYyB9IGZyb20gXCIuL21vZHVsZXMvcHJlbG9hZGVyLmpzXCI7XHJcblxyXG5wcmVsb2FkZXJmdW5jKCk7XHJcblxyXG5pbXBvcnQgeyBmbGlwZnVuYyB9IGZyb20gXCIuL21vZHVsZXMvZmxpcC5qc1wiO1xyXG5mbGlwZnVuYygpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/flip.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/flip.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction flipfunc() {\n    var flip = document.querySelector('.flip');\n    var authButton = document.querySelector('.auth');\n    var mainPage = document.querySelector('.nav__link--main--page');\n\n    authButton.addEventListener('click', addClass);\n    mainPage.addEventListener('click', removeClass);\n\n    function addClass() {\n        flip.classList.add(\"active\");\n        authButton.classList.add(\"auth--none\");\n    }\n    function removeClass() {\n        flip.classList.remove(\"active\");\n        authButton.classList.remove(\"auth--none\");\n    }\n}\nmodule.exports = { flipfunc: flipfunc };\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9mbGlwLmpzPzdiMmQiXSwibmFtZXMiOlsiZmxpcGZ1bmMiLCJmbGlwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXV0aEJ1dHRvbiIsIm1haW5QYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEIsUUFBTUMsT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsUUFBTUMsYUFBYUYsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtBQUNBLFFBQU1FLFdBQVdILFNBQVNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQWpCOztBQUVBQyxlQUFXRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ0MsUUFBckM7QUFDQUYsYUFBU0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNFLFdBQW5DOztBQUVBLGFBQVNELFFBQVQsR0FBb0I7QUFDaEJOLGFBQUtRLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixRQUFuQjtBQUNBTixtQkFBV0ssU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsWUFBekI7QUFDSDtBQUNELGFBQVNGLFdBQVQsR0FBdUI7QUFDbkJQLGFBQUtRLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixRQUF0QjtBQUNBUCxtQkFBV0ssU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEIsWUFBNUI7QUFDSDtBQUNKO0FBQ0RDLE9BQU9DLE9BQVAsR0FBZSxFQUFFYixrQkFBRixFQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvZmxpcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZsaXBmdW5jKCkge1xyXG4gICAgY29uc3QgZmxpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGlwJyk7XHJcbiAgICBjb25zdCBhdXRoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF1dGgnKTtcclxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fbGluay0tbWFpbi0tcGFnZScpO1xyXG5cclxuICAgIGF1dGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRDbGFzcyk7XHJcbiAgICBtYWluUGFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUNsYXNzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDbGFzcygpIHtcclxuICAgICAgICBmbGlwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgYXV0aEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYXV0aC0tbm9uZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKCkge1xyXG4gICAgICAgIGZsaXAuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBhdXRoQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhdXRoLS1ub25lXCIpO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzPXsgZmxpcGZ1bmMgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/flip.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/parallax.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/modules/parallax.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nfunction parallaxfunc() {\n    var parallaxContainer = document.querySelector('.parallax');\n    var layers = document.querySelector('.parallax__layer');\n\n    var movelayers = function movelayers(e) {\n        var initialX = window.innerWidth / 2 - e.pageX;\n        var initialY = window.innerHeight / 2 - e.pageY;\n\n        var divider = 0.03;\n        var positionX = initialX * divider;\n        var positionY = initialY * divider;\n        var bottomPosition = window.innerHeight / 2 * divider;\n        var image = layers.firstElementChild;\n\n        image.style.bottom = '-' + bottomPosition + 'px';\n        layers.style.transform = 'translate(' + positionX + 'px, ' + positionY + 'px)';\n    };\n    window.addEventListener('mousemove', movelayers);\n};\nparallaxfunc();\nexports.parallaxfunc = parallaxfunc;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wYXJhbGxheC5qcz9jNjZkIl0sIm5hbWVzIjpbInBhcmFsbGF4ZnVuYyIsInBhcmFsbGF4Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwibW92ZWxheWVycyIsImluaXRpYWxYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImUiLCJwYWdlWCIsImluaXRpYWxZIiwiaW5uZXJIZWlnaHQiLCJwYWdlWSIsImRpdmlkZXIiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJib3R0b21Qb3NpdGlvbiIsImltYWdlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdHlsZSIsImJvdHRvbSIsInRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQixRQUFNQyxvQkFBb0JDLFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBMUI7QUFDQSxRQUFNQyxTQUFTRixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFmOztBQUVBLFFBQU1FLGFBQWEsU0FBYkEsVUFBYSxJQUFLO0FBQ3BCLFlBQU1DLFdBQVlDLE9BQU9DLFVBQVAsR0FBb0IsQ0FBckIsR0FBMEJDLEVBQUVDLEtBQTdDO0FBQ0EsWUFBTUMsV0FBWUosT0FBT0ssV0FBUCxHQUFxQixDQUF0QixHQUEyQkgsRUFBRUksS0FBOUM7O0FBRUEsWUFBTUMsVUFBVSxJQUFoQjtBQUNBLFlBQU1DLFlBQVlULFdBQVdRLE9BQTdCO0FBQ0EsWUFBTUUsWUFBWUwsV0FBV0csT0FBN0I7QUFDQSxZQUFNRyxpQkFBa0JWLE9BQU9LLFdBQVAsR0FBcUIsQ0FBdEIsR0FBMkJFLE9BQWxEO0FBQ0EsWUFBTUksUUFBUWQsT0FBT2UsaUJBQXJCOztBQUVBRCxjQUFNRSxLQUFOLENBQVlDLE1BQVosU0FBeUJKLGNBQXpCO0FBQ0FiLGVBQU9nQixLQUFQLENBQWFFLFNBQWIsa0JBQXNDUCxTQUF0QyxZQUFzREMsU0FBdEQ7QUFDSCxLQVpEO0FBYUFULFdBQU9nQixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ2xCLFVBQXJDO0FBQ0g7QUFDREw7UUFDU0EsWSxHQUFBQSxZIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcGFyYWxsYXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBwYXJhbGxheGZ1bmMoKSB7XHJcbiAgICBjb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpO1xyXG4gICAgY29uc3QgbGF5ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4X19sYXllcicpO1xyXG5cclxuICAgIGNvbnN0IG1vdmVsYXllcnMgPSBlID0+IHtcclxuICAgICAgICBjb25zdCBpbml0aWFsWCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIDIpIC0gZS5wYWdlWDtcclxuICAgICAgICBjb25zdCBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAtIGUucGFnZVk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZGl2aWRlciA9IDAuMDM7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcclxuICAgICAgICBjb25zdCBib3R0b21Qb3NpdGlvbiA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyAyKSAqIGRpdmlkZXI7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBsYXllcnMuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgICAgIGltYWdlLnN0eWxlLmJvdHRvbSA9IGAtJHtib3R0b21Qb3NpdGlvbn1weGA7XHJcbiAgICAgICAgbGF5ZXJzLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtwb3NpdGlvblh9cHgsICR7cG9zaXRpb25ZfXB4KWA7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZWxheWVycylcclxufTtcclxucGFyYWxsYXhmdW5jKCk7XHJcbmV4cG9ydCB7IHBhcmFsbGF4ZnVuYyB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/parallax.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/preloader.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/modules/preloader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction preloaderfunc() {\n    document.body.onload = function () {\n        setTimeout(function () {\n            var preloader = document.querySelector(\".preloader\");\n            if (!preloader.classList.contains(\"preloader--none\")) {\n                preloader.classList.add(\"preloader--none\");\n            }\n        }, 2000);\n    };\n}\n\nmodule.exports = { preloaderfunc: preloaderfunc };\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9wcmVsb2FkZXIuanM/MGEwOSJdLCJuYW1lcyI6WyJwcmVsb2FkZXJmdW5jIiwiZG9jdW1lbnQiLCJib2R5Iiwib25sb2FkIiwic2V0VGltZW91dCIsInByZWxvYWRlciIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQkMsYUFBU0MsSUFBVCxDQUFjQyxNQUFkLEdBQXVCLFlBQVc7QUFDOUJDLG1CQUFXLFlBQVc7QUFDbEIsZ0JBQUlDLFlBQVlKLFNBQVNLLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBaEI7QUFDQSxnQkFBSSxDQUFDRCxVQUFVRSxTQUFWLENBQW9CQyxRQUFwQixDQUE2QixpQkFBN0IsQ0FBTCxFQUFzRDtBQUNsREgsMEJBQVVFLFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLGlCQUF4QjtBQUNIO0FBQ0osU0FMRCxFQUtHLElBTEg7QUFNSCxLQVBEO0FBUUg7O0FBRURDLE9BQU9DLE9BQVAsR0FBZSxFQUFFWCw0QkFBRixFQUFmIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvcHJlbG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHJlbG9hZGVyZnVuYygpIHtcclxuICAgIGRvY3VtZW50LmJvZHkub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlbG9hZGVyXCIpO1xyXG4gICAgICAgICAgICBpZiggIXByZWxvYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmVsb2FkZXItLW5vbmVcIikpIHtcclxuICAgICAgICAgICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVyLS1ub25lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzPXsgcHJlbG9hZGVyZnVuYyB9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/preloader.js\n");

/***/ })

/******/ });