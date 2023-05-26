// 개별 요소를 불러와 사용 (확장자 .js 꼭 붙여야함) => import
// { } 내부의 이름은 export 이름과 동일해야 한다
import { name, num, arr, user, add } from './A10_ExportOne.js';

console.log(name, num, arr[0], arr[100], user.name, user.ABC);
console.log(add(10, 30));

// default로 export된 요소는 불러오는 곳에서 임의의 이름으로 참조 가능
import two from './A10_ExportTwo.js';
// console.log(two);
console.log(two.x);
console.log(two.onAdd());
console.log(two.min(10, 20));
console.log(two.getName());
