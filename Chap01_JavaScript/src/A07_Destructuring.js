// 디스트럭처링 => 구조화 분해
const obj = {
  name: 'NolBu',
  age: 30,
};

// const name = obj.name;
// const age = obj.age;

// 객체는 {}에 오브젝트 객체의 키와 동일한 이름으로 변수를 선언한다
const { name, age } = obj;
console.log(name, age);
console.log('');

// 2. 변수가 이미 사용되어 있다면 별칭(alias)를 이용
const { name: nickname, age: num } = obj;
console.log(nickname, num);

// 3. default 값을 할당 할 수 있다.
const { name: x = 'Unknown', age: y = 10, address = 'Seoul' } = obj;
console.log(x, y, address);
console.log('');

const ary = ['A', 'B', 'C'];
// 배열은 별칭 사용 불가. 변수명은 중복되지 않은 임의의 변수명으로 설정한다
const [a, b, c] = ary;
console.log(a, b, c);

// 일부 요소만 참조 가능
const [, , c1] = ary;
console.log(c1);

const [a2, , c2, d2 = 100] = ary;
console.log(a2, c2, d2);
console.log('');

// 원본은 변경되지 않는다
console.log(obj, ary);
