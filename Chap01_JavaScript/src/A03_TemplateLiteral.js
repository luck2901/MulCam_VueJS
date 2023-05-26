// ES6
// 보간법. 바인딩 표현식 => Vue에서는 ${} => {{}} 형태로 사용
const name = 'NolBu';
console.log('My Name is ' + name);
console.log(`My Name is ${name}`);
console.log('');

// 'Total: ' + 10 => 'Total: 10' + 20 => 'Total: 1020'
console.log('Total: ' + 10 + 20);

// 보간법 내부에서는 연산자는 사용이 가능하다.
console.log(`Total: ${10 + 20}`);
console.log('');

let obj = {
  name: 'HungBu',
  age: 25,
  child: ['one', 'two'],
  info: {
    tel: '010-1234-5678',
    add: 'Seoul',
  },
  toString: function () {
    console.log(this.name + '님의 나이는 ' + this.age + '세 입니다\n' + this.name + '님은 ' + this.info.add + '에 거주합니다.');

    // ES6 - tempate 문자열
    console.log(`${this.name}님의 나이는 ${this.age}세 입니다
${this.name}님은 ${this.info.add}에 거주합니다.`);
  },
};

obj.toString();
