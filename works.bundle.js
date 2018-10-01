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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/works.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/modules/blur.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/blur.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction blurfunc() {\n    var blur = function () {\n        var wrapper = document.querySelector('.what-about__connect'),\n            blur = document.querySelector('.what-about__blur');\n\n        return {\n            set: function set() {\n                var imgWidth = document.querySelector('.what-about').offsetWidth,\n                    posLeft = -wrapper.offsetLeft,\n                    posTop = -wrapper.offsetTop,\n                    blurCSS = blur.style;\n\n                blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';\n                blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';\n            }\n        };\n    }();\n\n    blur.set();\n\n    window.onresize = function () {\n        blur.set();\n    };\n}\nmodule.exports = { blurfunc: blurfunc };\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibHVyLmpzPzU3NDYiXSwibmFtZXMiOlsiYmx1cmZ1bmMiLCJibHVyIiwid3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNldCIsImltZ1dpZHRoIiwib2Zmc2V0V2lkdGgiLCJwb3NMZWZ0Iiwib2Zmc2V0TGVmdCIsInBvc1RvcCIsIm9mZnNldFRvcCIsImJsdXJDU1MiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwid2luZG93Iiwib25yZXNpemUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEIsUUFBSUMsT0FBUSxZQUFZO0FBQ3BCLFlBQUlDLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWQ7QUFBQSxZQUNJSCxPQUFPRSxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQURYOztBQUdJLGVBQU87QUFDSEMsaUJBQUssZUFBWTtBQUNiLG9CQUFJQyxXQUFXSCxTQUFTQyxhQUFULENBQXVCLGFBQXZCLEVBQXNDRyxXQUFyRDtBQUFBLG9CQUNJQyxVQUFVLENBQUNOLFFBQVFPLFVBRHZCO0FBQUEsb0JBRUlDLFNBQVMsQ0FBQ1IsUUFBUVMsU0FGdEI7QUFBQSxvQkFHSUMsVUFBVVgsS0FBS1ksS0FIbkI7O0FBS0FELHdCQUFRRSxjQUFSLEdBQXlCUixXQUFXLElBQVgsR0FBa0IsR0FBbEIsR0FBd0IsTUFBakQ7QUFDQU0sd0JBQVFHLGtCQUFSLEdBQTZCUCxVQUFVLElBQVYsR0FBaUIsR0FBakIsR0FBdUJFLE1BQXZCLEdBQWdDLElBQTdEO0FBQ0g7QUFURSxTQUFQO0FBV1AsS0FmVyxFQUFaOztBQWlCQVQsU0FBS0ksR0FBTDs7QUFFQVcsV0FBT0MsUUFBUCxHQUFrQixZQUFZO0FBQzFCaEIsYUFBS0ksR0FBTDtBQUNILEtBRkQ7QUFHSDtBQUNEYSxPQUFPQyxPQUFQLEdBQWUsRUFBRW5CLGtCQUFGLEVBQWYiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibHVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYmx1cmZ1bmMoKSB7XHJcbiAgICB2YXIgYmx1ciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2hhdC1hYm91dF9fY29ubmVjdCcpLFxyXG4gICAgICAgICAgICBibHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndoYXQtYWJvdXRfX2JsdXInKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nV2lkdGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2hhdC1hYm91dCcpLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NMZWZ0ID0gLXdyYXBwZXIub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zVG9wID0gLXdyYXBwZXIub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBibHVyQ1NTID0gYmx1ci5zdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYmx1ckNTUy5iYWNrZ3JvdW5kU2l6ZSA9IGltZ1dpZHRoICsgJ3B4JyArICcgJyArICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICBibHVyQ1NTLmJhY2tncm91bmRQb3NpdGlvbiA9IHBvc0xlZnQgKyAncHgnICsgJyAnICsgcG9zVG9wICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuXHJcbiAgICBibHVyLnNldCgpO1xyXG5cclxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBibHVyLnNldCgpO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzPXsgYmx1cmZ1bmMgfTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blur.js\n");

/***/ }),

/***/ "./src/assets/scripts/works.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/works.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _blur = __webpack_require__(/*! ./modules/blur.js */ \"./src/assets/scripts/modules/blur.js\");\n\n(0, _blur.blurfunc)();\n\n// import Vue from 'vue';\n// import { sliderfunc } from \"./modules/slider.js\";\n// sliderfunc();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvd29ya3MuanM/OGMzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9hc3NldHMvc2NyaXB0cy93b3Jrcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJsdXJmdW5jIH0gZnJvbSBcIi4vbW9kdWxlcy9ibHVyLmpzXCI7XHJcblxyXG5ibHVyZnVuYygpO1xyXG5cclxuLy8gaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG4vLyBpbXBvcnQgeyBzbGlkZXJmdW5jIH0gZnJvbSBcIi4vbW9kdWxlcy9zbGlkZXIuanNcIjtcclxuLy8gc2xpZGVyZnVuYygpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/works.js\n");

/***/ })

/******/ });