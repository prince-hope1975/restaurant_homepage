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
/* harmony export */   "link": () => (/* binding */ link),
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
const link =()=>{
    return document.createElement("a");
}
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
_exports_js__WEBPACK_IMPORTED_MODULE_0__.contactUs.addEventListener("click", ()=>{
  const newLink  = (0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.link)()
  const div = (0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.newDiv)()
  newLink.href = "https://github.com/prince-hope1975/restaurant_homepage";
  newLink.textContent="Link to my github profile here"
  const _P = (0,_exports_js__WEBPACK_IMPORTED_MODULE_0__.newP)()
  _P.textContent= "Contact Me with the link below"
  div.appendChild(_P)
  div.appendChild(newLink)
  _exports_js__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = "";
  _exports_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(div)
  

})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87O0FBRUE7QUFDQTtBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7O1VDN0JuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDSXNCO0FBQ3RCLFlBQVksNkNBQUk7OztBQUdoQjs7O0FBR0EsZUFBZSxvREFBUTtBQUN2QixjQUFjLG1EQUFNO0FBQ3BCLGVBQWUsbURBQU07QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUEsOERBQXFCO0FBQ3JCLEVBQUUsMERBQWlCO0FBQ25CLGVBQWUsbURBQU07QUFDckIsYUFBYSxpREFBSTtBQUNqQixZQUFZLHdEQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFtQjs7QUFFckI7QUFDQSxDQUFDO0FBQ0QsK0RBQXNCO0FBQ3RCLEVBQUUsMERBQWlCOztBQUVuQjs7O0FBR0E7QUFDQSxJQUFJLDREQUFtQjtBQUN2QixHQUFHOzs7QUFHSCxDQUFDO0FBQ0QsbUVBQTBCO0FBQzFCLG1CQUFtQixpREFBSTtBQUN2QixjQUFjLG1EQUFNO0FBQ3BCO0FBQ0E7QUFDQSxhQUFhLGlEQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMERBQWlCO0FBQ25CLEVBQUUsNERBQW1CO0FBQ3JCOztBQUVBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X2hvbWVwYWdlLy4vc3JjL2V4cG9ydHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRfaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkhvbWVcIik7XG5cbmV4cG9ydCBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuZXhwb3J0IGNvbnN0IG5ld0RpdiA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG59O1xuZXhwb3J0IGNvbnN0IGxpbmsgPSgpPT57XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xufVxuZXhwb3J0IGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbmV4cG9ydCBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XG5leHBvcnQgY29uc3QgbmV3UCA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xufTtcbmV4cG9ydCBjb25zdCBuZXdIZWFkbGluZSA9ICgpID0+IHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbn07XG5leHBvcnQgY29uc3QgbmV3SW1nID0gKCkgPT4ge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbn07XG5cbmNvbnN0IGRhdGEgPSBbXG4gIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTM2NDI1MzIwMDktNmJhNzFlMjJmNDY4P2l4aWQ9TW53eE1qQTNmREY4TUh4bFpHbDBiM0pwWVd3dFptVmxaSHd4Zkh4OFpXNThNSHg4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzAwJnE9NjBcIixcbiAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMDI1NzU3NDIzNy0wMDBmMzkwNjYxNWI/aXhpZD1Nbnd4TWpBM2ZEQjhNSHhsWkdsMGIzSnBZV3d0Wm1WbFpId3lmSHg4Wlc1OE1IeDhmSHclM0QmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03MDAmcT02MFwiLFxuICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNjMwMzQ5MjM5MzIzLThmZDJmMjQ3OTI3Nj9peGlkPU1ud3hNakEzZkRCOE1IeGxaR2wwYjNKcFlXd3RabVZsWkh3emZIeDhaVzU4TUh4OGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwMCZxPTYwXCIsXG4gIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MzAyNDc3NzcyMTItMmVjY2Q2MWIwMDY2P2l4aWQ9TW53eE1qQTNmREI4TUh4bFpHbDBiM0pwWVd3dFptVmxaSHcwZkh4OFpXNThNSHg4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzAwJnE9NjBcIixcbiAgXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYzMDI2MTIzNDYyNC03ODE4Y2Q5ZjY4MGM/aXhpZD1Nbnd4TWpBM2ZEQjhNSHhsWkdsMGIzSnBZV3d0Wm1WbFpIdzFmSHg4Wlc1OE1IeDhmSHclM0QmaXhsaWI9cmItMS4yLjEmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz03MDAmcT02MFwiLFxuICBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM0MzUzNDM2Mjk0LTBkYmQ0YmRhYzg0NT9peGlkPU1ud3hNakEzZkRGOE1IeGxaR2wwYjNKcFlXd3RabVZsWkh3MmZIeDhaVzU4TUh4OGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTcwMCZxPTYwXCIsXG5dO1xuZXhwb3J0IGRlZmF1bHQgZGF0YVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGF0YSx7XG4gIGhvbWUsXG4gIGxpbmssXG4gIGNvbnRlbnQsXG4gIG5ld0RpdixcbiAgYWJvdXQsXG4gIGNvbnRhY3RVcyxcbiAgbmV3UCxcbiAgbmV3SGVhZGxpbmUsXG4gIG5ld0ltZyxcbn0gZnJvbSBcIi4vZXhwb3J0cy5qc1wiO1xuY29uc29sZS5sb2coaG9tZSlcblxuXG4vLyBpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cblxuY29uc3QgaW1hZ2VzID0gZGF0YS5tYXAoKGl0ZW1zKT0+e1xuICBjb25zdCBpbWcgPSBuZXdJbWcoKVxuICBjb25zdCBkaXYgPSAgbmV3RGl2KClcbiAgaW1nLnNyYyA9IGl0ZW1zXG5cbiAgZGl2LmFwcGVuZENoaWxkKGltZylcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJzXCIpXG4gIHJldHVybiBkaXZcbn0pXG5cblxuLy8gaG9tZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCJcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IG5ld0QgPSBuZXdEaXYoKTtcbiAgY29uc3QgX1AgPSBuZXdQKCk7XG4gIGNvbnN0IGgxID1uZXdIZWFkbGluZSgpXG4gIGgxLnRleHRDb250ZW50ID1cIlRoZSBPZGluIGNvbXBhbnlcIlxuICBfUC50ZXh0Q29udGVudCA9XG4gICAgXCJ3ZWxjb21lIHRvIHRoZSBvZGluIHByb2plY3QgY3JlYXRlZCBieSB5b3VycyB0cnVlbHksIFxcbiBQcmluY2UgY2hhcmxlcyBhbWFjaGVyZWVcIjtcbiAgICBuZXdELmFwcGVuZENoaWxkKGgxKVxuICBuZXdELmFwcGVuZENoaWxkKF9QKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdEKTtcblxuICBjb25zb2xlLmxvZyhcImZ1Y2sgdGhlIHdvcmxkXCIpO1xufSk7XG5hYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGNvbnNvbGUubG9nKGltYWdlcylcblxuXG4gIGltYWdlcy5mb3JFYWNoKChpdGVtKT0+e1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbSlcbiAgfSlcblxuXG59KVxuY29udGFjdFVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICBjb25zdCBuZXdMaW5rICA9IGxpbmsoKVxuICBjb25zdCBkaXYgPSBuZXdEaXYoKVxuICBuZXdMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmluY2UtaG9wZTE5NzUvcmVzdGF1cmFudF9ob21lcGFnZVwiO1xuICBuZXdMaW5rLnRleHRDb250ZW50PVwiTGluayB0byBteSBnaXRodWIgcHJvZmlsZSBoZXJlXCJcbiAgY29uc3QgX1AgPSBuZXdQKClcbiAgX1AudGV4dENvbnRlbnQ9IFwiQ29udGFjdCBNZSB3aXRoIHRoZSBsaW5rIGJlbG93XCJcbiAgZGl2LmFwcGVuZENoaWxkKF9QKVxuICBkaXYuYXBwZW5kQ2hpbGQobmV3TGluaylcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdilcbiAgXG5cbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=