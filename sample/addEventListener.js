'use strict';

const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');

const handleClick = function () {
  console.log('나를 눌렀구나?');
};

btn2.addEventListener('click', handleClick);
btn2.addEventListener('click', function () {
  console.log('추가 등록?');
});

btn2.removeEventListener('click', handleClick);

console.log('*********************');

const handleClick1 = function (event) {
  console.log(event.target);
};

btn1.addEventListener('click', handleClick1);
btn3.addEventListener('click', handleClick1);
