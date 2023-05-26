"use strict";

var _A10_ExportOne = require("./A10_ExportOne.js");
var _A10_ExportTwo = _interopRequireDefault(require("./A10_ExportTwo.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// 개별 요소를 불러와 사용 (확장자 .js 꼭 붙여야함) => import
// { } 내부의 이름은 export 이름과 동일해야 한다

console.log(_A10_ExportOne.name, _A10_ExportOne.num, _A10_ExportOne.arr[0], _A10_ExportOne.arr[100], _A10_ExportOne.user.name, _A10_ExportOne.user.ABC);
console.log((0, _A10_ExportOne.add)(10, 30));

// default로 export된 요소는 불러오는 곳에서 임의의 이름으로 참조 가능

// console.log(two);
console.log(_A10_ExportTwo["default"].x);
console.log(_A10_ExportTwo["default"].onAdd());
console.log(_A10_ExportTwo["default"].min(10, 20));
console.log(_A10_ExportTwo["default"].getName());