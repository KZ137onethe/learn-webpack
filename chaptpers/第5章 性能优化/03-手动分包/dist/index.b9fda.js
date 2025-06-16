/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js":
/*!*********************************************************************************************************!*\
  !*** delegated ../../node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js from dll-reference gsap ***!
  \*********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = (__webpack_require__(/*! dll-reference gsap */ "dll-reference gsap"))(515);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"../../node_modules/.pnpm/gsap@3.13.0/node_modules/gsap/index.js\");\n\r\nconst appEl = document.querySelector(\"#app\");\r\n\r\nconst divEl = document.createElement(\"div\");\r\ndivEl.className = \"title\";\r\ndivEl.textContent = \"Hello World!\";\r\nObject.assign(divEl.style, {\r\n  width: \"fit-content\",\r\n});\r\nappEl.appendChild(divEl);\r\n\r\nconst div2El = document.createElement(\"div\");\r\ndiv2El.className = \"text\";\r\ndiv2El.textContent = \"I'm is coder\";\r\nObject.assign(div2El.style, {\r\n  width: \"fit-content\",\r\n});\r\nappEl.appendChild(div2El);\r\n\r\n// 动画\r\nconst tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\r\ntl.fromTo(\r\n  \".title\",\r\n  { x: 0, duration: 2, color: \"black\" },\r\n  { x: 600, duration: 2, color: \"#9ebc19\" },\r\n  0.5\r\n).fromTo(\r\n  \".text\",\r\n  { x: 0, duration: 2, color: \"black\" },\r\n  { x: 600, duration: 2, color: \"#c67915\" },\r\n  \"-=1\"\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGxlYXJuLXdlYnBhY2svMDUtMDMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuY29uc3QgYXBwRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKTtcclxuXHJcbmNvbnN0IGRpdkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2RWwuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xyXG5kaXZFbC50ZXh0Q29udGVudCA9IFwiSGVsbG8gV29ybGQhXCI7XHJcbk9iamVjdC5hc3NpZ24oZGl2RWwuc3R5bGUsIHtcclxuICB3aWR0aDogXCJmaXQtY29udGVudFwiLFxyXG59KTtcclxuYXBwRWwuYXBwZW5kQ2hpbGQoZGl2RWwpO1xyXG5cclxuY29uc3QgZGl2MkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2MkVsLmNsYXNzTmFtZSA9IFwidGV4dFwiO1xyXG5kaXYyRWwudGV4dENvbnRlbnQgPSBcIkknbSBpcyBjb2RlclwiO1xyXG5PYmplY3QuYXNzaWduKGRpdjJFbC5zdHlsZSwge1xyXG4gIHdpZHRoOiBcImZpdC1jb250ZW50XCIsXHJcbn0pO1xyXG5hcHBFbC5hcHBlbmRDaGlsZChkaXYyRWwpO1xyXG5cclxuLy8g5Yqo55S7XHJcbmNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xyXG50bC5mcm9tVG8oXHJcbiAgXCIudGl0bGVcIixcclxuICB7IHg6IDAsIGR1cmF0aW9uOiAyLCBjb2xvcjogXCJibGFja1wiIH0sXHJcbiAgeyB4OiA2MDAsIGR1cmF0aW9uOiAyLCBjb2xvcjogXCIjOWViYzE5XCIgfSxcclxuICAwLjVcclxuKS5mcm9tVG8oXHJcbiAgXCIudGV4dFwiLFxyXG4gIHsgeDogMCwgZHVyYXRpb246IDIsIGNvbG9yOiBcImJsYWNrXCIgfSxcclxuICB7IHg6IDYwMCwgZHVyYXRpb246IDIsIGNvbG9yOiBcIiNjNjc5MTVcIiB9LFxyXG4gIFwiLT0xXCJcclxuKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "dll-reference gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = gsap;

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
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;