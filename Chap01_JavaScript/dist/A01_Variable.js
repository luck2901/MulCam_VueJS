"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*eslint-disable*/

var nickname = 'NolBu';
console.log('name: ' + nickname + ' typeof: ' + _typeof(nickname));

// 1. 변수를 재 선언해도 에러 아님
var nickname = 10;
console.log('name: ' + nickname + ' typeof: ' + _typeof(nickname));
console.log('');

// 2. { }에서 범위(scope)를 갖지 않는다
var age = 10;
if (true) {
  var age = 'Hello World';
  console.log('IN age: ' + age + ' typeof: ' + (typeof nickagename === "undefined" ? "undefined" : _typeof(nickagename)));
}
console.log('OUT age: ' + age + ' typeof: ' + (typeof nickagename === "undefined" ? "undefined" : _typeof(nickagename)));
console.log('');
for (var i = 0; i < 3; i++) {
  for (var i = 0; i < 3; i++) {
    console.log(i);
  }
}

// 3. Global 영역을 오염시킨다
// alert('Hello World');            // OK

// var alert = 'Good Morning';      // OK
console.log(window);

// alert('A');                      // Error. 위가 활성화되면 함수가 아닌 변수다
console.log('');

// ES2015 (ES6)

// let => var 대신 이 키워드를 이용한다
var num = 100;
console.log('num: ' + num + ' typeof: ' + _typeof(num));

// 동적 타입 언어의 특성은 변경이 없음 -> 타입 변경된다
num = 'A';
console.log('num: ' + num + ' typeof: ' + _typeof(num));

// 1. 선언한 변수를 재 선언 할 수 없다
// let num = 'B';
// var num = 'B';
// const num = 'B';

// 2. 모든 { }에서 변수의 범위(scope)를 갖는다
if (true) {
  var _num = 20; // if 블럭 내부에서만 사용되는 지역변수가 된다
  console.log('IN num: ' + _num + ' typeof: ' + _typeof(_num));
}
console.log('OUT num: ' + num + ' typeof: ' + _typeof(num));
for (var k = 0; k < 3; k++) {
  for (var _k = 0; _k < 3; _k++) {
    console.log(_k);
  }
}

// 3. Global 영역을 오염시키지 않는다
// window 영역이 아닌 TDZ(선언과 초기화 사이)이라는 영역에 정의된다
var A = 'A';
console.log(window);
var alert = 'Alert TDZ';
console.log(alert);

// window.alert('Hello World'); // OK
console.log('');

// A00_Variable.js
console.log(x);
var x = 'Hello World';
console.log(x);
console.log('');
console.log(y);
// let y = 'Hello';     // Error. A00_Variable.js에서 사용중
console.log('');

// const  상수 정의
var MY_PI = 3.14145;
console.log('MY_PI: ' + MY_PI + ' typeof: ' + _typeof(MY_PI));

// 1. 값 변경 불가
// MY_PI = 3;       // Error

// 2. 재 선언 안됨
// var MY_PI = 10;
// let MY_PI = 10;
// const MY_PI = 10;

// 3. 선언과 동시에 초기화를 해야 한다
// const MY_NAME;

// 주의
var arr = [10, 11];
arr[0] = 20; // OK
console.log(arr);
// arr = [100, 200];      // Error
console.log('');
var user = {
  name: 'NolBu',
  age: 30
};
user.name = '흥부';
console.log(user);
// user = { address: 'Seoul' }