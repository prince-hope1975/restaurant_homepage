/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exports.js":
/*!************************!*\
  !*** ./src/exports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "newDiv": () => (/* binding */ newDiv),
/* harmony export */   "about": () => (/* binding */ about),
/* harmony export */   "contactUs": () => (/* binding */ contactUs),
/* harmony export */   "newP": () => (/* binding */ newP),
/* harmony export */   "newHeadline": () => (/* binding */ newHeadline),
/* harmony export */   "newImg": () => (/* binding */ newImg),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const home = document.querySelector(".Home");

const content = document.querySelector(".content");
const newDiv = () => {
  return document.createElement("div");
};
const about = document.querySelector(".about");
const contactUs = document.querySelector(".contact");
const newP = () => {
  return document.createElement("p");
};
const newHeadline = () => {
  return document.createElement("h1");
};
const newImg = () => {
  return document.createElement("img");
};

const data = [
  "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1630257574237-000f3906615b?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1630349239323-8fd2f2479276?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1630247777212-2eccd61b0066?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1630261234624-7818cd9f680c?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
  "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exports.js */ "./src/exports.js");

console.log(_exports_js__WEBPACK_IMPORTED_MODULE_0__.home)


// import "./style.css"


const images = _exports_js__WEBPACK_IMPORTED_MODULE_0__.default.map((items)=>{
  const img = (0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.newImg)()
  const div =  (0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
  img.src = items

  div.appendChild(img)
  div.classList.add("containers")
  return div
})


// home.style.backgroundColor = "green"

_exports_js__WEBPACK_IMPORTED_MODULE_0__.home.addEventListener("click", () => {
  _exports_js__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = "";
  const newD = (0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)();
  const _P = (0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.newP)();
  const h1 =(0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.newHeadline)()
  h1.textContent ="The Odin company"
  _P.textContent =
    "welcome to the odin project created by yours truely, \n Prince charles amacheree";
    newD.appendChild(h1)
  newD.appendChild(_P);
  _exports_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(newD);

  console.log("fuck the world");
});
_exports_js__WEBPACK_IMPORTED_MODULE_0__.about.addEventListener("click", ()=>{
  _exports_js__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = "";
  
  console.log(images)


  images.forEach((item)=>{
    _exports_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(item)
  })


})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7QUFFQTtBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7VUMxQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNHc0I7QUFDdEIsWUFBWSw2Q0FBSTs7O0FBR2hCOzs7QUFHQSxlQUFlLG9EQUFRO0FBQ3ZCLGNBQWMsbURBQU07QUFDcEIsZUFBZSxtREFBTTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQSw4REFBcUI7QUFDckIsRUFBRSwwREFBaUI7QUFDbkIsZUFBZSxtREFBTTtBQUNyQixhQUFhLGlEQUFJO0FBQ2pCLFlBQVksd0RBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNERBQW1COztBQUVyQjtBQUNBLENBQUM7QUFDRCwrREFBc0I7QUFDdEIsRUFBRSwwREFBaUI7QUFDbkI7QUFDQTs7O0FBR0E7QUFDQSxJQUFJLDREQUFtQjtBQUN2QixHQUFHOzs7QUFHSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9ob21lcGFnZS8uL3NyYy9leHBvcnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRfaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRfaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Ib21lXCIpO1xuXG5leHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmV4cG9ydCBjb25zdCBuZXdEaXYgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xufTtcbmV4cG9ydCBjb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXRcIik7XG5leHBvcnQgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xuZXhwb3J0IGNvbnN0IG5ld1AgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbn07XG5leHBvcnQgY29uc3QgbmV3SGVhZGxpbmUgPSAoKSA9PiB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG59O1xuZXhwb3J0IGNvbnN0IG5ld0ltZyA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG59O1xuXG5jb25zdCBkYXRhID0gW1xuICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkzNjQyNTMyMDA5LTZiYTcxZTIyZjQ2OD9peGlkPU1ud3hNakEzZkRGOE1IeGxaR2wwYjNKcFlXd3RabVZsWkh3eGZIeDhaVzU4TUh4OGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwMCZxPTYwXCIsXG4gIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzAyNTc1NzQyMzctMDAwZjM5MDY2MTViP2l4aWQ9TW53eE1qQTNmREI4TUh4bFpHbDBiM0pwWVd3dFptVmxaSHd5Zkh4OFpXNThNSHg4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzAwJnE9NjBcIixcbiAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMDM0OTIzOTMyMy04ZmQyZjI0NzkyNzY/aXhpZD1Nbnd4TWpBM2ZEQjhNSHhsWkdsMGIzSnBZV3d0Wm1WbFpId3pmSHg4Wlc1OE1IeDhmSHclM0QmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03MDAmcT02MFwiLFxuICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjMwMjQ3Nzc3MjEyLTJlY2NkNjFiMDA2Nj9peGlkPU1ud3hNakEzZkRCOE1IeGxaR2wwYjNKcFlXd3RabVZsWkh3MGZIeDhaVzU4TUh4OGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwMCZxPTYwXCIsXG4gIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzAyNjEyMzQ2MjQtNzgxOGNkOWY2ODBjP2l4aWQ9TW53eE1qQTNmREI4TUh4bFpHbDBiM0pwWVd3dFptVmxaSHcxZkh4OFpXNThNSHg4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzAwJnE9NjBcIixcbiAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDM1MzQzNjI5NC0wZGJkNGJkYWM4NDU/aXhpZD1Nbnd4TWpBM2ZERjhNSHhsWkdsMGIzSnBZV3d0Wm1WbFpIdzJmSHg4Wlc1OE1IeDhmSHclM0QmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03MDAmcT02MFwiLFxuXTtcbmV4cG9ydCBkZWZhdWx0IGRhdGFcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRhdGEse1xuICBob21lLFxuICBjb250ZW50LFxuICBuZXdEaXYsXG4gIGFib3V0LFxuICBjb250YWN0VXMsXG4gIG5ld1AsXG4gIG5ld0hlYWRsaW5lLFxuICBuZXdJbWcsXG59IGZyb20gXCIuL2V4cG9ydHMuanNcIjtcbmNvbnNvbGUubG9nKGhvbWUpXG5cblxuLy8gaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuXG5cbmNvbnN0IGltYWdlcyA9IGRhdGEubWFwKChpdGVtcyk9PntcbiAgY29uc3QgaW1nID0gbmV3SW1nKClcbiAgY29uc3QgZGl2ID0gIG5ld0RpdigpXG4gIGltZy5zcmMgPSBpdGVtc1xuXG4gIGRpdi5hcHBlbmRDaGlsZChpbWcpXG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyc1wiKVxuICByZXR1cm4gZGl2XG59KVxuXG5cbi8vIGhvbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiXG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBuZXdEID0gbmV3RGl2KCk7XG4gIGNvbnN0IF9QID0gbmV3UCgpO1xuICBjb25zdCBoMSA9bmV3SGVhZGxpbmUoKVxuICBoMS50ZXh0Q29udGVudCA9XCJUaGUgT2RpbiBjb21wYW55XCJcbiAgX1AudGV4dENvbnRlbnQgPVxuICAgIFwid2VsY29tZSB0byB0aGUgb2RpbiBwcm9qZWN0IGNyZWF0ZWQgYnkgeW91cnMgdHJ1ZWx5LCBcXG4gUHJpbmNlIGNoYXJsZXMgYW1hY2hlcmVlXCI7XG4gICAgbmV3RC5hcHBlbmRDaGlsZChoMSlcbiAgbmV3RC5hcHBlbmRDaGlsZChfUCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3RCk7XG5cbiAgY29uc29sZS5sb2coXCJmdWNrIHRoZSB3b3JsZFwiKTtcbn0pO1xuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgXG4gIGNvbnNvbGUubG9nKGltYWdlcylcblxuXG4gIGltYWdlcy5mb3JFYWNoKChpdGVtKT0+e1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgfSlcblxuXG59KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9