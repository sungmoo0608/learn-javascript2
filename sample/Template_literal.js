'use strict';

let str = '문자열';
console.log(str);

str = `백틱 문자열!!??`;
console.log(str);

console.log('************************');

let number = 21;
let player = '안드레아 피를로';

console.log(`제가 좋아하는 축구선수는 ${player}, 그의 등번호는 ${number}`);

console.log('************************');

let number1 = 21;
let player1 = prompt('좋아하는 축구 선수는?');

console.log(`제가 좋아하는 축구선수는 ${player1}, 그의 등번호는 ${number1}`);

console.log('************************');

let number2 = 21;

console.log(
  `제가 좋아하는 축구선수는 ${prompt(
    '좋아하는 축구 선수는?'
  )}, 그의 등번호는 ${number1}`
);
