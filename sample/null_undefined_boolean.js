'use strict';

let data; // 선언은 했지만 정의는 X
console.log(data); //???

data = 'Hello'; // 문자열로 초기화!
console.log(data); // ???

data = null; // 아무것도 없다. 무소유
console.log(data);

console.log('==========================');

let data1 = true;
console.log(typeof data1);

data1 = false;
console.log(typeof data1);

data1 = True;
console.log(typeof data1);
