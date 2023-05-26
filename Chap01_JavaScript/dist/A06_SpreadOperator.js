"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _console, _console2;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// ES6
// spread operator =>
// 배열, 유사배열, 객체의 각 요소값을 개별 요소로 취급해 준다
console.log([10, 11, 100]);
console.log([10, 11, 100][0], [10, 11, 100][1], [10, 11, 100][2]);
(_console = console).log.apply(_console, [10, 11, 100]);
console.log('NolBu');
(_console2 = console).log.apply(_console2, _toConsumableArray('NolBu'));
console.log('');

// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e) {
  console.log("a => ".concat(a));
  console.log("b => ".concat(b));
  console.log("c => ".concat(c));
  console.log("d => ".concat(d));
  console.log("e => ".concat(e));
  for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
    rest[_key - 5] = arguments[_key];
  }
  console.log("rest => ".concat(rest, " / ").concat(rest.length));
}
spreadFun(0, [10, 20, 30], 40, [50, 60, 70]);
console.log('');

// 배열 합치기.
var aryOne = [10, 20, 30];
var aryTwo = [1, 2, 3, aryOne];
console.log(aryTwo);
console.log('');

// Object
var objOne = {
  id: 1,
  name: 'NolBu'
};

// 객체는 중복된 키가 있을 수 있으므로 중복된 키는 나중에 온 값으로 덮어쓴다
var objTwo = _objectSpread({
  id: 2,
  address: 'Seoul'
}, objOne);
console.log(objTwo);
console.log(objOne);
console.log('');

// 원래 값을 유지하려면 먼저 푼다
var objThree = _objectSpread(_objectSpread({}, objOne), {}, {
  id: 3,
  address: 'InChen'
});
console.log(objThree);