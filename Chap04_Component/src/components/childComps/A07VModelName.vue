<template>
  <div>
    : {{ label }}
    <input type="text" class="form-control" :value="modelValue" @input="changeValue">
  </div>
</template>

<script>
export default {
  emits : ['update:modelValue'],
  props:['label', 'modelValue'],
  methods:{
    changeValue(evt) {
      this.$emit('update:modelValue', evt.target.value )
    }
  }
}
</script>
