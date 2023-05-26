<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="todoRef"
        :value="text" @input="(evt) => changeText(evt.target.value)"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1"
          @click.prevent="sendData">Submit</button>
      </div>
    </div>  
  </form>
</template>

<script>
export default {
  computed: {
    text() {
      return this.$store.state.todoStore.text
    }
  },
  methods: {
    changeText(text) {
      this.$store.commit('todoStore/changeText', text)
    },
    addTodo(text) {
      this.$store.commit('todoStore/addTodo', text);
    },
    sendData() {
      this.addTodo(this.text);
      this.changeText('');
      this.$refs.todoRef.focus();
    }
  }
}
</script>

<style scoped>

</style>