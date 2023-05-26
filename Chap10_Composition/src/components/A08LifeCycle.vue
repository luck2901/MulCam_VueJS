<template>
  <h3>A08 LifeCycle</h3>
  <div>  
    Num: {{num}}<br>
    <button v-on:click="increase()">+1</button>
    <button v-on:click="decrease()">-1</button>
    <br>
  </div>
</template>

<script setup>
  import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured} from 'vue'
  // data, event 초기화(beforeCreate, created) => setUp
  const num = ref(0);

  const increase = () => num.value += 1;
  const decrease = () => num.value -= 1;

  // DOM 생성 전
  onBeforeMount( () => {                  // beforeMount
    console.log('1. onBeforeMount')
  });
  onMounted( () => {                      // mounted
    console.log('2. onMounted')
  });

  // state 변경 전
  onBeforeUpdate( () => {                 // beforeUpdate
    console.log('3. onBeforeUpdate')
  });
  // state 변경 후
  onUpdated( () => {                      // updated
    console.log('4. onUpdated')
  });

  onBeforeUnmount( () => {                // beforeUnmount()
    console.log('5. onBeforeUnmount')
  });
  onUnmounted( () => {                    // unmounted()
    console.log('6. unMounted')
  });

  onErrorCaptured( (err, vm, info) => {   // errorCaptured
    console.log(err)
  });
</script>
