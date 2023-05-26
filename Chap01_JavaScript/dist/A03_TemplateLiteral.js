"use strict";

// ES6
// 보간법. 바인딩 표현식 => Vue에서는 ${} => {{}} 형태로 사용
var name = 'NolBu';
console.log('My Name is ' + name);
console.log("My Name is ".concat(name));
console.log('');

// 'Total: ' + 10 => 'Total: 10' + 20 => 'Total: 1020'
console.log('Total: ' + 10 + 20);

// 보간법 내부에서는 연산자는 사용이 가능하다.
console.log("Total: ".concat(10 + 20));
console.log('');
var obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul'
  },
  toString: function toString() {
    console.log(this.name + '님의 나이는 ' + this.age + '세 입니다\n' + this.name + '님은 ' + this.info.add + '에 거주합니다.');

    // ES6 - tempate 문자열
    console.log("".concat(this.name, "\uB2D8\uC758 \uB098\uC774\uB294 ").concat(this.age, "\uC138 \uC785\uB2C8\uB2E4\n").concat(this.name, "\uB2D8\uC740 ").concat(this.info.add, "\uC5D0 \uAC70\uC8FC\uD569\uB2C8\uB2E4."));
  }
};
obj.toString();