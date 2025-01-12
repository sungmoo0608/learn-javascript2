'use strict';

const button = document.getElementById('push1');
const div = document.getElementById('area');

console.log(button);
console.log(div);

button.addEventListener('click', function () {
  console.log('div 생성 중');
  const newDiv = document.createElement('div');

  newDiv.style.backgroundColor = 'red';
  newDiv.style.width = '5rem';
  newDiv.style.height = '5rem';

  div.appendChild(newDiv);
});
