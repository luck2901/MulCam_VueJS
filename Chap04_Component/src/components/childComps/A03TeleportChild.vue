<template>
  <form>
    <button @click="changeView('one', true)">ONE SHOW</button>
    <button @click="changeView('two', true)">TWO SHOW</button>
  </form>


  <!-- public에 있는 index.html에 id로 popup이 지정된 요소의 위치로 이동 -->
  <Teleport to="#popup" >
    <div class="dialog" v-if="one">
      <h5>Home Component</h5>
      <p>
        Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. 
        It builds on top of standard HTML, CSS and JavaScript, and provides a declarative and 
        component-based programming model that helps you efficiently develop user interfaces, be it simple or complex.<br>
      </p>
      <button @click="changeView('one', false)">HIDE</button>
    </div>
  </Teleport>

  <Teleport to="#popup" >
    <div class="dialog" v-if="two">
      <h5>News Component</h5>
      <p>
        With Options API, we define a component's logic using an object of options such as data, methods, and mounted.
        Properties defined by options are exposed on this inside functions, which points to the component instance
      </p>
      <button @click="changeView('two', false)">HIDE</button>
    </div>
  </Teleport>

</template>

<script>
export default {
  data() {
    return { 
     one : false,
     two : false
    }
  },
  methods: {
    changeView(name, check){
      this[name] = check;
    }
  }
}
</script>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }  
</style>
