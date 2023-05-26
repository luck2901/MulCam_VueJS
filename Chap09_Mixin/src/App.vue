<template>
  <div class="m-3">
    <h1>Chap07 Vue CLI</h1>

    <A03Plusins></A03Plusins><br />
    <A02Mixin></A02Mixin><br />
    <A01Directive></A01Directive>
  </div>
</template>

<script>
import A01Directive from './components/A01Directive.vue'
import A02Mixin from './components/A02Mixin.vue'
import A03Plusins from './components/A03Plusins.vue'

export default {
  name: 'App',
  components: {
    A01Directive, A02Mixin, A03Plusins
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
