


<template>
  <div>
    {{ label }}: 
    <input type="text" class="form-control"   
      :value="modelValue"  @input="(evt) => $emit('update:modelValue', evt.target.value)">
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: ['label', 'modelValue']
}
</script>


