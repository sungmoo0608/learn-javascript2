'use strict';

const inputType = document.querySelector('#typing');
const inputClick = document.querySelector('#push');

// const handleTyping = function () {
//   console.log('타이핑 되고 있어요!');
// };

// const handleClick = function () {
//   console.log('클릭되고 있어요!');
// };

// inputType.onkeydown = handleTyping;
// inputClick.onclick = handleClick;

console.log('-----------------------------');

inputType.onkeydown = function () {
  console.log('타이핑 되고 있어요!');
};

inputClick.onclick = function () {
  console.log('클릭되고 있어요!');
};
