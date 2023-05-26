"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.num = exports.name = exports.arr = exports.add = void 0;
// A10_ExportOne.js

// export => 외부 파일에서 개별 요소로 사용할 수 있도록 허용
var name = 'A10 ExportOne';
exports.name = name;
var num = 100;
exports.num = num;
var arr = [10, 20];
exports.arr = arr;
var user = {
  name: 'A',
  age: 10
};
exports.user = user;
var onAdd = function onAdd(x, y) {
  return "".concat(x, " + ").concat(y, " = ").concat(x + y);
};

// 자신의 변수, 함수 마음대로 사용 가능
exports.add = onAdd;
console.log('ONE => ', name);

// 묶어서 export도 가능.