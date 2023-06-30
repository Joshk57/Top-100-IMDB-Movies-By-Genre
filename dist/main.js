/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_fetch_movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/fetch_movies */ \"./src/scripts/fetch_movies.js\");\n// import Example from './scripts/example';\n// import ActionMovies from \"./scripts/action_movies\"\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const main = document.getElementById('main');\n  // console.log(fetchMovies(\"Action\"))\n  // console.log(\"Hello World!\")\n\n  // fetchActionMovies()\n\n  const actionBtn = document.querySelector(\"#actionBtn\");\n  actionBtn.addEventListener(\"click\", () => {\n    (0,_scripts_fetch_movies__WEBPACK_IMPORTED_MODULE_0__.fetchMovies)(\"Action\");\n  });\n  const adventureBtn = document.querySelector(\"#adventureBtn\");\n  adventureBtn.addEventListener(\"click\", () => {\n    (0,_scripts_fetch_movies__WEBPACK_IMPORTED_MODULE_0__.fetchMovies)(\"Adventure\");\n  });\n  const animationBtn = document.querySelector(\"#animationBtn\");\n  animationBtn.addEventListener(\"click\", () => {\n    (0,_scripts_fetch_movies__WEBPACK_IMPORTED_MODULE_0__.fetchMovies)(\"Animation\");\n  });\n  const fantasyBtn = document.querySelector(\"#fantasyBtn\");\n  fantasyBtn.addEventListener(\"click\", () => {\n    (0,_scripts_fetch_movies__WEBPACK_IMPORTED_MODULE_0__.fetchMovies)(\"fantasyBtn\");\n  });\n  const horrorBtn = document.querySelector(\"#horrorBtn\");\n  horrorBtn.addEventListener(\"click\", () => {\n    (0,_scripts_fetch_movies__WEBPACK_IMPORTED_MODULE_0__.fetchMovies)(\"Horror\");\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ29EO0FBR3BEQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFHaEQsTUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUM7RUFDQTs7RUFFQTs7RUFFQSxNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLFlBQVksQ0FBQztFQUN0REQsU0FBUyxDQUFDSCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUV0Q0Ysa0VBQVcsQ0FBQyxRQUFRLENBQUM7RUFDekIsQ0FBQyxDQUFDO0VBRUYsTUFBTU8sWUFBWSxHQUFHTixRQUFRLENBQUNLLGFBQWEsQ0FBQyxlQUFlLENBQUM7RUFDNURDLFlBQVksQ0FBQ0wsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDekNGLGtFQUFXLENBQUMsV0FBVyxDQUFDO0VBQzVCLENBQUMsQ0FBQztFQUVGLE1BQU1RLFlBQVksR0FBR1AsUUFBUSxDQUFDSyxhQUFhLENBQUMsZUFBZSxDQUFDO0VBQzVERSxZQUFZLENBQUNOLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ3pDRixrRUFBVyxDQUFDLFdBQVcsQ0FBQztFQUM1QixDQUFDLENBQUM7RUFFRixNQUFNUyxVQUFVLEdBQUdSLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUN4REcsVUFBVSxDQUFDUCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUN2Q0Ysa0VBQVcsQ0FBQyxZQUFZLENBQUM7RUFDN0IsQ0FBQyxDQUFDO0VBRUYsTUFBTVUsU0FBUyxHQUFHVCxRQUFRLENBQUNLLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDdERJLFNBQVMsQ0FBQ1IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDdENGLGtFQUFXLENBQUMsUUFBUSxDQUFDO0VBQ3pCLENBQUMsQ0FBQztBQUVOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSAnLi9zY3JpcHRzL2V4YW1wbGUnO1xuLy8gaW1wb3J0IEFjdGlvbk1vdmllcyBmcm9tIFwiLi9zY3JpcHRzL2FjdGlvbl9tb3ZpZXNcIlxuaW1wb3J0IHsgZmV0Y2hNb3ZpZXMgfSBmcm9tIFwiLi9zY3JpcHRzL2ZldGNoX21vdmllc1wiXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbiAgICAvLyBjb25zb2xlLmxvZyhmZXRjaE1vdmllcyhcIkFjdGlvblwiKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkIVwiKVxuXG4gICAgLy8gZmV0Y2hBY3Rpb25Nb3ZpZXMoKVxuXG4gICAgY29uc3QgYWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3Rpb25CdG5cIilcbiAgICBhY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblxuICAgICAgICBmZXRjaE1vdmllcyhcIkFjdGlvblwiKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYWR2ZW50dXJlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZHZlbnR1cmVCdG5cIilcbiAgICBhZHZlbnR1cmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZmV0Y2hNb3ZpZXMoXCJBZHZlbnR1cmVcIilcbiAgICB9KVxuXG4gICAgY29uc3QgYW5pbWF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbmltYXRpb25CdG5cIilcbiAgICBhbmltYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZmV0Y2hNb3ZpZXMoXCJBbmltYXRpb25cIilcbiAgICB9KVxuXG4gICAgY29uc3QgZmFudGFzeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmFudGFzeUJ0blwiKVxuICAgIGZhbnRhc3lCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZmV0Y2hNb3ZpZXMoXCJmYW50YXN5QnRuXCIpXG4gICAgfSlcblxuICAgIGNvbnN0IGhvcnJvckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9ycm9yQnRuXCIpXG4gICAgaG9ycm9yQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGZldGNoTW92aWVzKFwiSG9ycm9yXCIpXG4gICAgfSlcblxufSlcbiJdLCJuYW1lcyI6WyJmZXRjaE1vdmllcyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsImFjdGlvbkJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJhZHZlbnR1cmVCdG4iLCJhbmltYXRpb25CdG4iLCJmYW50YXN5QnRuIiwiaG9ycm9yQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fetch_movies.js":
/*!*************************************!*\
  !*** ./src/scripts/fetch_movies.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchMovies\": function() { return /* binding */ fetchMovies; }\n/* harmony export */ });\nasync function fetchMovies(arg) {\n  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';\n  const options = {\n    method: 'GET',\n    headers: {\n      'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',\n      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'\n    }\n  };\n  try {\n    const response = await fetch(url, options);\n    const result = await response.json();\n    // console.log(result)\n    let action_data = [];\n    result.forEach(ele => {\n      if (ele[\"genre\"].includes(arg)) {\n        let hash = {};\n        hash[\"title\"] = ele[\"title\"];\n        hash[\"rating\"] = ele[\"rating\"];\n        action_data.push(hash);\n      }\n    });\n    console.log(action_data);\n  } catch (error) {\n    console.error(error);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaF9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNPLGVBQWVBLFdBQVdBLENBQUNDLEdBQUcsRUFBRTtFQUNuQyxNQUFNQyxHQUFHLEdBQUcsNkNBQTZDO0VBQ3pELE1BQU1DLE9BQU8sR0FBRztJQUNaQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxPQUFPLEVBQUU7TUFDTCxnQkFBZ0IsRUFBRSxvREFBb0Q7TUFDdEUsaUJBQWlCLEVBQUU7SUFDdkI7RUFDSixDQUFDO0VBRUQsSUFBSTtJQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLEdBQUcsRUFBRUMsT0FBTyxDQUFDO0lBQzFDLE1BQU1LLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ3BDO0lBQ0EsSUFBSUMsV0FBVyxHQUFHLEVBQUU7SUFHcEJGLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxHQUFHLElBQUk7TUFDbEIsSUFBSUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDQyxRQUFRLENBQUNaLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLElBQUlhLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYkEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHRixHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzVCRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUdGLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDOUJGLFdBQVcsQ0FBQ0ssSUFBSSxDQUFDRCxJQUFJLENBQUM7TUFDMUI7SUFFSixDQUFDLENBQUM7SUFFRkUsT0FBTyxDQUFDQyxHQUFHLENBQUNQLFdBQVcsQ0FBQztFQUc1QixDQUFDLENBQUMsT0FBT1EsS0FBSyxFQUFFO0lBQ1pGLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDeEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRwcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZmV0Y2hfbW92aWVzLmpzPzE2NzAiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb3ZpZXMoYXJnKSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vaW1kYi10b3AtMTAwLW1vdmllcy5wLnJhcGlkYXBpLmNvbS8nO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdYLVJhcGlkQVBJLUtleSc6ICdhY2Q0ZDQxN2YzbXNoMjJjYmIyNjg4NjkxNjc2cDE2NWNmY2pzbjNmNTY2ZTIwYjg1YycsXG4gICAgICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ2ltZGItdG9wLTEwMC1tb3ZpZXMucC5yYXBpZGFwaS5jb20nXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgbGV0IGFjdGlvbl9kYXRhID0gW11cbiAgICAgICAgXG5cbiAgICAgICAgcmVzdWx0LmZvckVhY2goZWxlID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVbXCJnZW5yZVwiXS5pbmNsdWRlcyhhcmcpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhc2ggPSB7fVxuICAgICAgICAgICAgICAgIGhhc2hbXCJ0aXRsZVwiXSA9IGVsZVtcInRpdGxlXCJdXG4gICAgICAgICAgICAgICAgaGFzaFtcInJhdGluZ1wiXSA9IGVsZVtcInJhdGluZ1wiXVxuICAgICAgICAgICAgICAgIGFjdGlvbl9kYXRhLnB1c2goaGFzaClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbl9kYXRhKVxuXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImZldGNoTW92aWVzIiwiYXJnIiwidXJsIiwib3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImFjdGlvbl9kYXRhIiwiZm9yRWFjaCIsImVsZSIsImluY2x1ZGVzIiwiaGFzaCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/fetch_movies.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;