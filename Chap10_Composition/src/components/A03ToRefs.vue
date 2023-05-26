<template>
  <h3>A03 ToRefs</h3>  

  <div>
    Name: {{ name }}<br />
    String: {{ data.str }} / {{ str }}<br />
    Number: {{ data.num + 1 }} / {{ num + 1 }}<br />
    Boolean: {{ data.check }} / {{ check }}<br />
    Array: <span v-for="(item, idx) in data.arr" :key="idx">{{ item }}, </span><br />
    Array: <span v-for="(item, idx) in arr" :key="idx">{{ item }}, </span><br />
    User: {{ data.user.name }} / {{ data.user.age }} / {{ data.user.address }}<br />
    Function: {{ onAdd(10, 20) }} <br />
  </div>
  <br />

  <div>
    <button>Name</button>
    
    <button   @click="changeStr">String</button>
    <button   @click="changeNum(30)">Number</button>
    <button   @click="changeCheck">Boolean</button>

    <button   @click="addArray">Add Array</button>
    <button   @click="updateArray(1, 2000)">Update Array</button>
    <button   @click="deleteArray(1)">Delete Array</button>

    <button   @click="addObject('address', 'Seoul')">Add Object</button>
    <button   @click="updateObject('address', 'Busan')">Update Object</button>
    <button   @click="deleteObject('address')">Delete Object</button>
  </div>
  <br />
</template>

<script setup>
  /* eslint-disable no-unused-vars */
  import { isReactive, isRef, reactive, ref, toRef, toRefs } from 'vue';

  const name = ref('NolBu');
  const data = reactive({
    str: 'Hello World',
    num: 10,
    check: true, 
    arr: [10, 11],
    user: {name: 'HungBu', age: 20}
  })

  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // 변경 메서드
  // reactive 변수는 "변수명.속성명" 형태로 참조한다
  const changeStr = () => data.str = 'Good Evening';
  const changeNum = (x) => data.num = x;
  const changeCheck = () => data.check = !data.check;

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    data.arr.push(random);
  }
  const updateArray = (index, value) => data.arr[index] = value;
  const deleteArray = (index) => data.arr.splice(index, 1);

  const addObject = (key, value) => data.user[key] = value;
  const updateObject = (key, value) => data.user[key] = value;
  const deleteObject = (key) => delete data.user[key];

  // template에서 사용하기 쉽도록 data를 빼서 정의하자
  const str = toRef(data, 'str');

  // 한번에 분리
  const { num, check, arr } = toRefs(data);

  console.log(isRef(str));        // true
  console.log(isReactive(str));   // false
</script>
