<template>
  <h3>A06 Provide</h3>

  <div>
    Name: {{name}}<br>
    User: {{user.name}} / {{user.age}}<br>
    Obj: {{obj.name}} / {{obj.age}} / {{obj.arr[0]}} / {{obj.user.name}}
  </div>
  
  <hr>

  <A06Inect></A06Inect>
</template>

<script setup>
  import { reactive, ref, provide } from 'vue';
  import A06Inect from './childComps/A06Inect.vue'

  const name = ref('NolBu');
  const user = ref({name: '흥부', age: 20});

  const obj = reactive({
    name: '놀부',
    age: 30,
    arr: [1,2],
    user: {name: 'HungBu', age: 10}
  })

  const changeName = () => name.value = 'HungBu';
  const changeUser = () => {
    user.value.name = 'BangJa',
    user.value.age = 100;
  };

  const changeObjName = () => obj.name = 'HangDan';
  const changeObjAge = () => obj.age = 1000;
  const changeArr = () => obj.arr[0] = 2000;
  const changeObj = (x) => obj.user.name = x;

  provide('name', name);
  provide('user', user);
  provide('obj', obj);
  provide('action', {changeName, changeUser, changeObjName, changeObjAge, changeArr, changeObj});
</script>

