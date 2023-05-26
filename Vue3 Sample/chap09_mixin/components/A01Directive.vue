<template>
  <div>
    <h3>A01 Custom Directive</h3>

    <div>
      Name: <input type="text" class="form-control">
    </div>
    <br>

    <div>
      Vue is a framework and ecosystem that covers most of the common features needed in frontend development. 
      But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. 
      With that in mind, Vue is designed to be flexible and incrementally adoptable. 
      Depending on your use case, Vue can be used in different ways:<br>
    </div>
    <br>
    
    <div>
      <span>Vue is a framework</span> and ecosystem that covers most of the common features needed in frontend development. 
      <span>But the web is extremely diverse</span> - the things we build on the web may vary drastically in form and scale. 
      <span>With that in mind</span>, Vue is designed to be flexible and incrementally adoptable. 
      <span>Depending</span> on your use case, Vue can be used in different ways:<br>
    </div>

    <button @click="changeCheck">{{isChecked ? 'HIDE' : 'SHOW'}}</button>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      isChecked: true,
    }
  },
  methods: {
    changeCheck() {
      this.isChecked = !this.isChecked;
    }
  }
}
</script>
<style scoped>
  
</style>
