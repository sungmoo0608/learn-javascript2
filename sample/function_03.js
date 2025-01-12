'use strict';

function sayAnything() {
  console.log('아무 말이나 하자!');
}
sayAnything('ㅁㄴㅇㄻㄴㅇㄹ');
sayAnything('ㅁㄴㅇㄻㄴㅇㄹ555');

console.log('========================');

function sayAnything1(ant) {
  console.log(ant);
}
sayAnything1('값이 들어가나여');
sayAnything1('값이 들어갑니다~!! 신기합니다~!!');

console.log('========================');

function sayAnything2(ant, number) {
  for (let i = 0; i < number; i++) {
    console.log(ant);
  }
}
sayAnything2('자축인묘 진사오미 신유술해', 6);
sayAnything2('꾸러기 수비대', 15);

console.log('========================');

function oddEven(number) {
  if (number % 2 == 1) {
    return '홀수';
  } else {
    return '짝수';
  }
}

console.log(oddEven(10));
console.log(oddEven(7));
