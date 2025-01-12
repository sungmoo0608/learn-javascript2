'use strict';

const h1 = document.querySelector('h1');
const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const toggleBtn = document.querySelector('#toggle');

console.log(h1.classList);

addBtn.addEventListener('click', function () {
  h1.classList.add('text');
});

removeBtn.addEventListener('click', function () {
  h1.classList.remove('text');
});

toggleBtn.addEventListener('click', function () {
  h1.classList.toggle('text');
});
