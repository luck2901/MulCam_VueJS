<template>
  <tr>
    <td>{{ todo.id }}</td>
    <td><span :class="{[$style.done]: todo.done}">{{ todo.text }}</span></td>
    <td>
      <button class="btn btn-primary" @click="updateTodo(todo.id)">Complete</button>
    </td>
    <td>
      <button class="btn btn-danger"  @click="deleteTodo(todo.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    updateTodo(id) {
      this.$store.commit('todoStore/updateTodo', id);
    },
    deleteTodo(id) {
      this.$store.commit('todoStore/deleteTodo', id);
    }
  }
}
</script>

<style module>
  .done { text-decoration: line-through; }
</style>