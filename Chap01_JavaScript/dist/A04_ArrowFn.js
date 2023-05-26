"use strict";

// 함수 리터럴. 함수 표현식
var onAdd = function onAdd(x, y) {
  console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
};
var onMin = function onMin(x, y) {
  return "".concat(x, " - ").concat(y, " = ").concat(x - y);
};
onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// ES6.
// 함수 리터럴 방식만 변경 가능
// 1. function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
var one = function one(x, y) {
  console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
};
one(10, 20);

// 2. 함수의 { }의 내부에 구문이 1줄인 경우 {}와 return을 생략하고 1줄에 기술 가능
// 한 줄 이상이면 반드시 { }로 묶어야 한다
// => 다음이 실행 구문이면 실행
// => 다음이 값으로 평가되면 return을 자동으로 붙여 리턴값으로 취급해 준다
var two = function two(x, y) {
  return console.log("".concat(x, " + ").concat(y, " = ").concat(x + y));
};
two(10, 20);
var three = function three(x, y) {
  return "".concat(x, " + ").concat(y, " = ").concat(x + y);
};
console.log(three(10, 20));

// 3. 매개변수가 1개면 ()를 생략할 수 있다
//  ** => ES6에서 추가됨. 자승
var four = function four(x) {
  return Math.pow(2, x);
};
console.log(four(3)); // 2 * 2 * 2
console.log('');

// 4. 모든 함수는 매개변수에 기본 값을 가질 수 있다
var five = function five() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "".concat(x, " / ").concat(y, " = ").concat(x / y);
};
console.log(five());
five(10, 2);
console.log('');

// 5. Arrow 함수는 this가 존재하지 않는다
var user = {
  name: 'NolBu',
  age: 20,
  info: function info() {
    console.log("".concat(this.name, " / ").concat(this.age));
  }
};
user.info();