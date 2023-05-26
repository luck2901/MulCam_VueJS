<template>
  <div>
    : {{ label }}
      <input type="text" class="form-control"
      :value="name" @input="(evt) => $emit('update:name', evt.target.value)">
    Age: 
      <input type="text" class="form-control"
      :value="age" @input="(evt) => $emit('update:age', evt.target.value)">
    Num: 
      <input type="text" class="form-control"
      :value="num" @input="(evt) => $emit('update:num', evt.target.value)">
  </div>
</template>

<script>
export default {
  emits : ['update:name','update:age','update:num'],
  // v-model:name 의 인수값으로 값을 주입받을 수 있음
  props : ['label', 'name','num','age']
}
</script>

