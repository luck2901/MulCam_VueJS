


<template>
  <h3>A06 TodoList</h3>

  <A06TodoListForm :addTodo="addTodo"></A06TodoListForm>
  <A06TodoListTable 
    :todoList="todoList" 
    :updateTodo="updateTodo"
    :deleteTodo="deleteTodo"></A06TodoListTable>
</template>

<script>
import A06TodoListForm from './childcomps/A06TodoListForm.vue'
import A06TodoListTable from './childcomps/A06TodoListTable.vue'

const todoList = [
  { id: 1, text: '첫 번째 할 일', done: true },
  { id: 2, text: '두 번째 할 일', done: false },
  { id: 3, text: '세 번째 할 일', done: false },
];

export default {
  components: { A06TodoListForm, A06TodoListTable },
  data() {
    return {
      todoList,
      id: 4,
    }
  },
  methods: {
    updateTodo(id) {
      // this.todoList[id].done = !this.todoList[id].done;
      const todo = this.todoList.find( (todo) => (todo.id === id) ? true : false)
      todo.done = !todo.done;
    },
    deleteTodo(id) {
      const idx = this.todoList.findIndex( (todo) => (todo.id === id) ? true : false)
      this.todoList.splice(idx, 1);
    },
    addTodo(text) {
      const todo = {id: this.id++, text, done: false};
      this.todoList.push(todo);
    },
  }
}
</script>


