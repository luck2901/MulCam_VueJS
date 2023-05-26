<template>
  <h3>A01 Ref</h3>  

  <div>
    Name: {{ name }} <br />
    String: {{ str }}<br />
    Number: {{ num + 1 }}<br />
    Boolean: {{ check }}<br />
    Array: <span v-for="(item, idx) in arr" :key="idx">{{ item }}, </span><br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    Function: {{ onAdd(10, 20) }}<br />
  </div>
  <br />

  <div>
    <button   @click="changeName">Name</button>
    
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

  <div>
    <input type="text" class="form-control" ref="inputRef"/>
  </div>
</template>

<script setup>
  /* eslint-disable no-unused-vars */

  import { onMounted, ref, isRef } from 'vue';

  // 참조만 가능한 변수
  let name = 'Hello World';
  const changeName = () => name = 'Good Morning';

  // reactive data
  // template에서는 변수명으로 호출
  const str = ref("Hello World");
  const num = ref(10);
  const check = ref(true);
  const arr = ref([10, 100]);
  const user = ref({name: 'NolBu', age: 10});
  const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

  // 변경 메서드
  // ref 변수는 "변수명.value"로 참조한다
  const changeStr = () => str.value = 'Good Evening';
  const changeNum = (x) => num.value = x;
  const changeCheck = () => check.value = !check.value;

  const addArray = () => {
    const random = Math.ceil(Math.random() * 100);
    arr.value.push(random);
  }
  const updateArray = (index, value) => arr.value[index] = value;
  const deleteArray = (index) => arr.value.splice(index, 1);

  const addObject = (key, value) => user.value[key] = value;
  const updateObject = (key, value) => user.value[key] = value;
  const deleteObject = (key) => delete user.value[key];

  // DOM 참조
  const inputRef = ref(null);

  // lifeCycle
  onMounted(() => inputRef.value.style.background = 'orange')

  // console.log(isRef(name));   // false
  // console.log(isRef(num));    // true

</script>
