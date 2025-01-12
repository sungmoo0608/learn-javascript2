'use strict';

const select = document.querySelector('select');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  console.log(select.value);
  let result2;
  result2 =
    select.value == 'foot'
      ? '축구를 선택하셨네요'
      : '축구를 선택하지 않았네요.';
  alert(result2);
});

console.log('=========================================');

let result;

result = 3 > 2 ? 'true' : 'false';

console.log(result);

console.log('=========================================');

let result1;

result1 = 3 < 2 ? 'true' : 'false';

console.log(result1);

console.log('=========================================');
