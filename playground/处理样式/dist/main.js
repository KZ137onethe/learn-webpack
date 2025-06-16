/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/index.css":
/*!******************************!*\
  !*** ./src/assets/index.css ***!
  \******************************/
/***/ ((module) => {


    const style = document.createElement("style");
    style.innerHTML = `body {
  margin: 0;
  padding: 0;
  background-color: antiquewhite;
}`;
    document.head.appendChild(style);
    module.exports = `body {
  margin: 0;
  padding: 0;
  background-color: antiquewhite;
}`
  

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let content = __webpack_require__(/*! ./assets/index.css */ "./src/assets/index.css")

console.log('content =>', content)
})();

/******/ })()
;
//# sourceMappingURL=main.js.map