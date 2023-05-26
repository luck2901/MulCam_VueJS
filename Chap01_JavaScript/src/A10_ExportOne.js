// A10_ExportOne.js

// export => 외부 파일에서 개별 요소로 사용할 수 있도록 허용
export const name = 'A10 ExportOne';
export const num = 100;
const arr = [10, 20];
const user = { name: 'A', age: 10 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

// 자신의 변수, 함수 마음대로 사용 가능
console.log('ONE => ', name);

// 묶어서 export도 가능.
export { arr, user, onAdd as add };
