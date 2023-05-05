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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  fetchMovieCast();\n  const main = document.getElementById('main');\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n});\nasync function fetchMovieCast() {\n  const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0111161/cast/';\n  const options = {\n    method: 'GET',\n    headers: {\n      'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',\n      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'\n    }\n  };\n  try {\n    const response = await fetch(url, options);\n    const result = await response.json();\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0M7QUFHeENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREMsY0FBYyxDQUFDLENBQUM7RUFFaEIsTUFBTUMsSUFBSSxHQUFHSCxRQUFRLENBQUNJLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUMsSUFBSUwsd0RBQU8sQ0FBQ0ksSUFBSSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLGVBQWVELGNBQWNBLENBQUEsRUFBRztFQUM1QixNQUFNRyxHQUFHLEdBQUcsb0VBQW9FO0VBQ2hGLE1BQU1DLE9BQU8sR0FBRztJQUNkQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxPQUFPLEVBQUU7TUFDUCxnQkFBZ0IsRUFBRSxvREFBb0Q7TUFDdEUsaUJBQWlCLEVBQUU7SUFDckI7RUFDRixDQUFDO0VBRUQsSUFBSTtJQUNGLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNMLEdBQUcsRUFBRUMsT0FBTyxDQUFDO0lBQzFDLE1BQU1LLE1BQU0sR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBQ3BDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDO0VBQ3JCLENBQUMsQ0FBQyxPQUFPSSxLQUFLLEVBQUU7SUFDZEYsT0FBTyxDQUFDRSxLQUFLLENBQUNBLEtBQUssQ0FBQztFQUN0QjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdHByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBmZXRjaE1vdmllQ2FzdCgpXG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuICAgIG5ldyBFeGFtcGxlKG1haW4pXG59KVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaE1vdmllQ2FzdCgpIHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9tb3ZpZXNtaW5pZGF0YWJhc2UucC5yYXBpZGFwaS5jb20vbW92aWUvaWQvdHQwMTExMTYxL2Nhc3QvJztcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJ2FjZDRkNDE3ZjNtc2gyMmNiYjI2ODg2OTE2NzZwMTY1Y2ZjanNuM2Y1NjZlMjBiODVjJyxcbiAgICAgICAgJ1gtUmFwaWRBUEktSG9zdCc6ICdtb3ZpZXNtaW5pZGF0YWJhc2UucC5yYXBpZGFwaS5jb20nXG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmZXRjaE1vdmllQ2FzdCIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsInVybCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(htmlElement) {\n    this.htmlElement = htmlElement;\n    this.htmlElement.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.htmlElement.addEventListener('click', this.handleClick);\n  }\n  handleClick() {\n    this.htmlElement.children[0].innerText = \"Ouch\";\n  }\n}\n// const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0111161/cast/';\n// const options = {\n// \tmethod: 'GET',\n// \theaders: {\n// \t\t'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',\n// \t\t'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'\n// \t}\n// };\n\n// try {\n// \tconst response = await fetch(url, options);\n// \tconst result = await response.json();\n// \tconsole.log(result);\n// } catch (error) {\n// \tconsole.error(error);\n// }\n\nasync function fetchMovieCast() {\n  const url = 'https://moviesminidatabase.p.rapidapi.com/movie/id/tt0111161/cast/';\n  const options = {\n    method: 'GET',\n    headers: {\n      'X-RapidAPI-Key': 'acd4d417f3msh22cbb2688691676p165cfcjsn3f566e20b85c',\n      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'\n    }\n  };\n  try {\n    const response = await fetch(url, options);\n    const result = await response.text();\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsV0FBVyxFQUFFO0lBQ3JCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxTQUFTLEdBQUcsd0JBQXdCO0lBRXJELElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ0gsV0FBVyxDQUFDSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7RUFDaEU7RUFHQUEsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDRixXQUFXLENBQUNLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHLE1BQU07RUFDbkQ7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZUMsY0FBY0EsQ0FBQSxFQUFHO0VBQzVCLE1BQU1DLEdBQUcsR0FBRyxvRUFBb0U7RUFDaEYsTUFBTUMsT0FBTyxHQUFHO0lBQ2RDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLE9BQU8sRUFBRTtNQUNQLGdCQUFnQixFQUFFLG9EQUFvRDtNQUN0RSxpQkFBaUIsRUFBRTtJQUNyQjtFQUNGLENBQUM7RUFFRCxJQUFJO0lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0wsR0FBRyxFQUFFQyxPQUFPLENBQUM7SUFDMUMsTUFBTUssTUFBTSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLENBQUM7SUFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUM7RUFDckIsQ0FBQyxDQUFDLE9BQU9JLEtBQUssRUFBRTtJQUNkRixPQUFPLENBQUNFLEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3RCO0FBQ0Y7QUFHRiwrREFBZXBCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0cHJvamVjdC8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3RvcihodG1sRWxlbWVudCkge1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gaHRtbEVsZW1lbnRcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5pbm5lckhUTUwgPSBcIjxoMT5JdCdzIEFMSVZFISEhPC9oMT5cIlxuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2spXG4gICAgfVxuXG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5odG1sRWxlbWVudC5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2hcIlxuICAgIH1cbiAgICBcbn1cbi8vIGNvbnN0IHVybCA9ICdodHRwczovL21vdmllc21pbmlkYXRhYmFzZS5wLnJhcGlkYXBpLmNvbS9tb3ZpZS9pZC90dDAxMTExNjEvY2FzdC8nO1xuLy8gY29uc3Qgb3B0aW9ucyA9IHtcbi8vIFx0bWV0aG9kOiAnR0VUJyxcbi8vIFx0aGVhZGVyczoge1xuLy8gXHRcdCdYLVJhcGlkQVBJLUtleSc6ICdhY2Q0ZDQxN2YzbXNoMjJjYmIyNjg4NjkxNjc2cDE2NWNmY2pzbjNmNTY2ZTIwYjg1YycsXG4vLyBcdFx0J1gtUmFwaWRBUEktSG9zdCc6ICdtb3ZpZXNtaW5pZGF0YWJhc2UucC5yYXBpZGFwaS5jb20nXG4vLyBcdH1cbi8vIH07XG5cbi8vIHRyeSB7XG4vLyBcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbi8vIFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gXHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuLy8gfSBjYXRjaCAoZXJyb3IpIHtcbi8vIFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG4vLyB9XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoTW92aWVDYXN0KCkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL21vdmllc21pbmlkYXRhYmFzZS5wLnJhcGlkYXBpLmNvbS9tb3ZpZS9pZC90dDAxMTExNjEvY2FzdC8nO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnYWNkNGQ0MTdmM21zaDIyY2JiMjY4ODY5MTY3NnAxNjVjZmNqc24zZjU2NmUyMGI4NWMnLFxuICAgICAgICAnWC1SYXBpZEFQSS1Ib3N0JzogJ21vdmllc21pbmlkYXRhYmFzZS5wLnJhcGlkYXBpLmNvbSdcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTtcblxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImh0bWxFbGVtZW50IiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwiZmV0Y2hNb3ZpZUNhc3QiLCJ1cmwiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

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