// JavaScript에서는 값이
// '', 0, null, undefined, Nan, false
// 면 모두 false로 취급한다
const value = '';

if(value) {
  console.log('값 있음');
}else{
  console.log('값 없음');
}

// node로는 테스트 안됨.
// if(addEventListener) console.log('지원 함');
// else console.log('지원 안함');

const arr = new Array();
const user = new Object();
const num = 100;
const func = function(){};

console.log(num.constructor);
console.log(arr.constructor);
console.log(user.constructor);
console.log(func.constructor);