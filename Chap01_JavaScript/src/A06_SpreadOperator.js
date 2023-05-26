// ES6
// spread operator =>
// 배열, 유사배열, 객체의 각 요소값을 개별 요소로 취급해 준다
console.log([10, 11, 100]);
console.log([10, 11, 100][0], [10, 11, 100][1], [10, 11, 100][2]);
console.log(...[10, 11, 100]);

console.log('NolBu');
console.log(...'NolBu');
console.log('');

// ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷
function spreadFun(a, b, c, d, e, ...rest) {
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
  console.log(`d => ${d}`);
  console.log(`e => ${e}`);
  console.log(`rest => ${rest} / ${rest.length}`);
}

spreadFun(0, [10, 20, 30], 40, [50, 60, 70]);
console.log('');

// 배열 합치기.
const aryOne = [10, 20, 30];
const aryTwo = [1, 2, 3, aryOne];
console.log(aryTwo);
console.log('');

// Object
const objOne = {
  id: 1,
  name: 'NolBu',
};

// 객체는 중복된 키가 있을 수 있으므로 중복된 키는 나중에 온 값으로 덮어쓴다
const objTwo = {
  id: 2,
  address: 'Seoul',
  ...objOne,
};
console.log(objTwo);
console.log(objOne);
console.log('');

// 원래 값을 유지하려면 먼저 푼다
const objThree = {
  ...objOne,
  id: 3,
  address: 'InChen',
};
console.log(objThree);
