'use strict';

console.log(document.querySelector('h1'));
console.log(document.querySelector('p'));
console.log(document.querySelector('#text'));
console.log(document.querySelector('.paragraph'));

console.log('=======================================');

console.log(document.getElementById('text'));
console.log(document.getElementById('p'));

console.log('=======================================');

const h1 = document.querySelector('h1');
const text = document.getElementById('text');

console.log(h1.textContent);
h1.textContent = '헬로 키티!!';

text.textContent = '겟엘리먼트바이아이디이이잉~!!!!';
console.log(text.textContent);
