"use strict";

/* eslint-disable no-redeclare */
/* eslint-disable no-var */
(function () {
  // ES5. 함수 리터럴
  var yourHello = function yourHello() {
    return 1;
  };
  console.log('1 => ' + yourHello());
  {
    var _yourHello = function _yourHello() {
      return 2;
    };
    console.log('2 => ' + _yourHello());
  }
  console.log('3 => ' + yourHello());
  console.log('');

  // ES6. Function
})();