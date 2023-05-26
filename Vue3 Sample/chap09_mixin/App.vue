<template>
  <div class="card-body">
    <h1>Chap07 Vue CLI</h1>

    <A01Directive></A01Directive>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import A01Directive from './components/A01Directive.vue'

export default {
  name: 'App',
  components: {
    A01Directive, 
  },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: {name: 'HungBu', age: 30}
    }
  },
  methods: {
    onAdd: (x, y) => `${x} + ${y} = ${x + y}`
  }
}
</script>

<style>

</style>
