<template>
  <div>
    <h3>Todo List</h3>

    <TodoForm></TodoForm>
    <TodoList></TodoList>
  </div>
</template>

<script>
  // const sampleTodos = [
  //     { id: 1, text: '첫 번째 할 일', done: true },
  //     { id: 2, text: '두 번째 할 일', done: false },
  //     { id: 3, text: '세 번째 할 일', done: false },
  // ];
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
  components: {TodoForm, TodoList}
}
</script>

<style scoped>

</style>