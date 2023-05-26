<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" ref="todoRef"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1">Submit</button>
      </div>
    </div>  
  </form>
</template>

<script>
export default {
  props : ['addTodo'],
  data() {
    return {
      
    }
  }
}
</script>
