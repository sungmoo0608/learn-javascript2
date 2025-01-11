'use strict';

for (let i = 1; i <= 9; i++) {
  console.log('1 증가 반복 진행중입니다.');
  console.log(i);
}

console.log('======================');

for (let i = 1; i <= 9; i++) {
  if (i % 2 == 0) {
    console.log('짝수 :', i);
  }
}

console.log('======================');

for (let i = 1; i <= 9; i += 2) {
  console.log('2 증가 반복 진행중입니다.');
  console.log(i);
}

console.log('======================');

for (let i = 20; i >= 1; i -= 3) {
  console.log('3 감소 반복 진행중입니다.');
  console.log(i);
}
