'use strict';

setTimeout(function () {
  console.log(1234);
}, 1000);

console.log('-------------------------------');

const button = document.querySelector('button');

let interID;
interID = setInterval(function () {
  console.log('ya~ya~ya~');
}, 1000);
console.log(interID);

button.addEventListener('click', function () {
  console.log('멈추기 동작');
  clearInterval(interID);
});
