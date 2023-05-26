"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.z = exports["default"] = void 0;
var app = function app() {
  var x = 10;
  var y = 20;
  var appName = 'App';
  var onAdd = function onAdd() {
    return "".concat(x, " + ").concat(y, " = ").concat(x + y);
  };
  var onMin = function onMin(x, y) {
    return "".concat(x, " - ").concat(y, " = ").concat(x - y);
  };
  var getName = function getName() {
    return appName;
  };
  return {
    x: x,
    onAdd: onAdd,
    min: onMin,
    getName: getName
  };
};

// 파일에서 1개의 요소만 지정할 수 있다.
var _default = app;
exports["default"] = _default;
var z = 100;
exports.z = z;