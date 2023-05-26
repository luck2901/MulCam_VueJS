// 일반 함수.
function fn() {
  console.log('funcion');
}
fn();

/* 이런 식으로는 사용불가
    fn() => {
    }
  */

const arr = [10, 11, 100, 101, 1000];

// 익명함수(이름이 없는 함수)
// console.log(arr);
let total = 0;
// [10, 11, 100, 101, 1000]
arr.forEach(function (item, index, arr) {
  // console.log(item, index, arr);
  total = total + item;
});
console.log(total);

total = 0;
arr.forEach((item) => (total += item));
console.log(total);

// map
// 배열 순환. 순환하는 값을 기반으로 조작한 값이 리턴되면
// 리턴된 값을 기반으로 새로운 배열을 생성한다 (불변성 - 수정 목적으로 사용)
let newArr = arr.map(function (item, index, arr) {
  if (item % 2 === 0) return item * 2;
  else return item * 3;
});
console.log(newArr);
console.log(arr);

// 삼항 연산자를 이용
newArr = arr.map((item) => (item % 2 === 0 ? item * 2 : item * 3));
console.log('');

// filter
// 배열 순환. 순환하는 값을 기반으로 설정한 조건이 참이면 참인 요소의 값을 새로운 배열에 추가
// 거짓이면 추가하지 않음 (불변성 - 걸러낼 목적 - 삭제 목적으로 사용)
newArr = arr.filter(function (item, index, arr) {
  if (item % 2 === 0) return true; // 이 조건이 만족되는 요소값을 newArr에 추가
  else return false;
});
console.log(newArr);
console.log(arr);

newArr = arr.filter((item) => (item % 2 === 0 ? true : false));
console.log(newArr);
console.log('');

const objArr = [
  { id: 1, name: 'NolBu', age: 30 },
  { id: 2, name: 'HungBu', age: 25 },
  { id: 3, name: 'HangDan', age: 20 },
];

// function getItem(id) {
//   return objArr[id];
// }
// console.log(getItem(3));

// 실질적인 값을 돌려준다
const getItem = (id) => {
  return objArr.find((item) => (item.id === id ? true : false));
};

console.log(getItem(3));

// 위치하는 index 번호를 돌려준다
const getIndex = (id) => {
  return objArr.findIndex((item) => (item.id === id ? true : false));
};

console.log(getIndex(3));
