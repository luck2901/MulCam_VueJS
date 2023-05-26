<template>
  <h3>A04 Props Component</h3>

  <div>
    Name: {{ name }}<br>
    Num: {{ num + 1 }}<br>
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[10] }}<br>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  defineProps(['name', 'num', 'arr'])
  // defineProps({
  //   name: { type: String },
  //   num: { type: [Number, String]}
  // })
  
</script>
