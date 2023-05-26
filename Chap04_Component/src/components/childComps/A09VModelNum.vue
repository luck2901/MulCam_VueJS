<template>
  <div>
    : {{ labelName }}
    <input type="text" class="form-control" :value="num" @input="changeNum">
  </div>
</template>

<script>
export default {
  props:['labelName','num','numModifiers'],
  methods:{
    changeNum(evt) {
      let value = evt.target.value;
      if(this.numModifiers && this.numModifiers.upper){
        value=value.toUpperCase();
      }
      this.$emit('update:num', value);
    }
  }
}
</script>
