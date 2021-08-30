/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const getElements = () => {
    console.log(1)

  const tempDiv = document.createElement("section");
    tempDiv.classList.add = "red";
  
    console.log(5);
  const newDiv = document.createElement("div");

    console.log(newDiv,"hi");

  const newParagraph = document.createElement("p");
  console.log("hey")
  const newHeadline = document.createElement("h1");
  const newImg = document.createElement("img");
  const changeImgSrc = (passedArgument) => {

    newImg.src = passedArgument;
    return newImg;

  };

  return {
    tempDiv,
    newDiv,
    p: newParagraph,
    newImg,
    changeImgSrc,
    newHeadline,
  };
};

const addElement = (() => {
    console.log("hello World");

    const newElement = getElements();
    const {tempDiv} = newElement;
    console.log(tempDiv,"Hello");

    const newDiv = newElement.newDiv
    console.log("3");



    newDiv.innerHTML = "Hello"
    console.log(newDiv)
    newDiv.className ="red"
    tempDiv.appendChild(newDiv)
    document.body.appendChild(tempDiv)
})();
// window.onload = addElement

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRFbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygxKVxuXG4gIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICB0ZW1wRGl2LmNsYXNzTGlzdC5hZGQgPSBcInJlZFwiO1xuICBcbiAgICBjb25zb2xlLmxvZyg1KTtcbiAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnNvbGUubG9nKG5ld0RpdixcImhpXCIpO1xuXG4gIGNvbnN0IG5ld1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zb2xlLmxvZyhcImhleVwiKVxuICBjb25zdCBuZXdIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgbmV3SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgY2hhbmdlSW1nU3JjID0gKHBhc3NlZEFyZ3VtZW50KSA9PiB7XG5cbiAgICBuZXdJbWcuc3JjID0gcGFzc2VkQXJndW1lbnQ7XG4gICAgcmV0dXJuIG5ld0ltZztcblxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGVtcERpdixcbiAgICBuZXdEaXYsXG4gICAgcDogbmV3UGFyYWdyYXBoLFxuICAgIG5ld0ltZyxcbiAgICBjaGFuZ2VJbWdTcmMsXG4gICAgbmV3SGVhZGxpbmUsXG4gIH07XG59O1xuXG5jb25zdCBhZGRFbGVtZW50ID0gKCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvIFdvcmxkXCIpO1xuXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGdldEVsZW1lbnRzKCk7XG4gICAgY29uc3Qge3RlbXBEaXZ9ID0gbmV3RWxlbWVudDtcbiAgICBjb25zb2xlLmxvZyh0ZW1wRGl2LFwiSGVsbG9cIik7XG5cbiAgICBjb25zdCBuZXdEaXYgPSBuZXdFbGVtZW50Lm5ld0RpdlxuICAgIGNvbnNvbGUubG9nKFwiM1wiKTtcblxuXG5cbiAgICBuZXdEaXYuaW5uZXJIVE1MID0gXCJIZWxsb1wiXG4gICAgY29uc29sZS5sb2cobmV3RGl2KVxuICAgIG5ld0Rpdi5jbGFzc05hbWUgPVwicmVkXCJcbiAgICB0ZW1wRGl2LmFwcGVuZENoaWxkKG5ld0RpdilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBEaXYpXG59KSgpO1xuLy8gd2luZG93Lm9ubG9hZCA9IGFkZEVsZW1lbnRcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==