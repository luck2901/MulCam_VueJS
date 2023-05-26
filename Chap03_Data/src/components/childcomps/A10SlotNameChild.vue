


<template>
  <h5>A10 Slot Named</h5>

  <div class="row card-body">
    <div class="col-12 border">
      <slot name="header">Header</slot>
    </div>
    <div class="col-4 border">
      <slot name="left">Left</slot>
    </div>
    <div class="col-8 border">
      <slot name="content">Content</slot>
    </div>
    <div class="col-12 border">
      <slot name="footer">Footer</slot>
    </div>

    <div class="col-12">
      <slot>Default</slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
  .border { border: 1px solid lightgray; }
</style>

