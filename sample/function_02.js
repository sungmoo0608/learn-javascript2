'use strict';

function noReturn() {
  console.log('아무것도 반환하지 않는닷!');
}

const result = noReturn();
console.log(result);

console.log('==========================');

function thereIsReturn() {
  console.log('반환한다, 무언가를!');
  return 10;
}

const result1 = thereIsReturn();
console.log(result1);

console.log('==========================');

function thereIsReturn1() {
  console.log('반환한다, 무언가를!');
  let num = 77;
  return num;
}

const result2 = thereIsReturn1();
console.log(result2);
