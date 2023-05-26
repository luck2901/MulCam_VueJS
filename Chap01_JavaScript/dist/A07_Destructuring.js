"use strict";

// 디스트럭처링 => 구조화 분해
var obj = {
  name: 'NolBu',
  age: 30
};

// const name = obj.name;
// const age = obj.age;

// 객체는 {}에 오브젝트 객체의 키와 동일한 이름으로 변수를 선언한다
var name = obj.name,
  age = obj.age;
console.log(name, age);
console.log('');

// 2. 변수가 이미 사용되어 있다면 별칭(alias)를 이용
var nickname = obj.name,
  num = obj.age;
console.log(nickname, num);

// 3. default 값을 할당 할 수 있다.
var _obj$name = obj.name,
  x = _obj$name === void 0 ? 'Unknown' : _obj$name,
  _obj$age = obj.age,
  y = _obj$age === void 0 ? 10 : _obj$age,
  _obj$address = obj.address,
  address = _obj$address === void 0 ? 'Seoul' : _obj$address;
console.log(x, y, address);
console.log('');
var ary = ['A', 'B', 'C'];
// 배열은 별칭 사용 불가. 변수명은 중복되지 않은 임의의 변수명으로 설정한다
var a = ary[0],
  b = ary[1],
  c = ary[2];
console.log(a, b, c);

// 일부 요소만 참조 가능
var c1 = ary[2];
console.log(c1);
var a2 = ary[0],
  c2 = ary[2],
  _ary$ = ary[3],
  d2 = _ary$ === void 0 ? 100 : _ary$;
console.log(a2, c2, d2);
console.log('');

// 원본은 변경되지 않는다
console.log(obj, ary);