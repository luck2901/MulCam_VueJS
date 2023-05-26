<template>
  <h5>A05 Emits Child Component</h5>  

  <div>{{name}}</div>

  <div>
    <button>Name Inline</button>
    <button   @click="sendName">Name Event</button>
    <button   @click="sendData">Data</button>
  </div>

  <button   @click="changeName">Click</button>
</template>

<script setup>
  import { ref, defineEmits, reactive } from 'vue'

  // Custem Event 등록
  const emit = defineEmits(['sendNameEvent', 'sendDataEvent']);

  const name = ref('NolBu');
  const data = reactive({
    num: 100,
    arr: [10, 11],
    user: {name: 'HungBu', age: 20}
  });

  const sendName = () => emit('sendNameEvent', name);
  const sendData = () => emit('sendDataEvent', data);
  const changeName = () => name.value = 'Hello World';

  
</script>
