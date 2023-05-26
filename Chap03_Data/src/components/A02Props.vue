<template>
  <h3>A02 Props</h3>

  <A02PropsChild name="NolBu" :age="20" :add="address" :arr="arr" :user="user" :onAdd="onAdd" isChecked></A02PropsChild>
</template>

<script>
import A02PropsChild from './childcomps/A02PropsChild.vue';
export default {
  components: { A02PropsChild },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: {name: 'HungBu', age: 30}
    }
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`
    },
    validator : (value) => typeof value(1,2) === "string"
  }
}
</script>
