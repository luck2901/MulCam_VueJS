<template>
  <div>
    : {{ label }}
    <input type="text" class="form-control" :value="modelValue" @input="changeName" >
  </div>
</template>

<script>
export default {
  props : ['labelName', 'modelValue', 'modelModifiers'],
  methods:{
    changeName(evt) {
      let value = evt.target.value;
      if(this.modelModifiers && this.modelModifiers.upper){
        value=value.toUpperCase();
      }
      this.$emit('update:modelValue', value);
    }
  }
}
</script>
