<template>
  <div class="m-3">
    <h1>Chap07 Vuex TodoList</h1>

    <TodoTemplate></TodoTemplate><br>
    <CounterComp></CounterComp>
  </div>
</template>

<script>
// npm i vuex
import CounterComp from './components/CounterComp.vue';
import TodoTemplate from './components/TodoTemplate.vue';

export default {
  components: { CounterComp, TodoTemplate },
}
</script>

<style scoped>

</style>
