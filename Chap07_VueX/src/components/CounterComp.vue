<template>
  <div>
    <h3>{{ $store.state.storeName }}</h3>

    <div>
      Num: {{ $store.state.cnt }}<br>
      <button   @click="increase(2)">+</button>
      <button   @click="decrease">-</button>
    </div>
    <br>

    <div>
      Size: {{ $store.getters.contactSize }}<br>
      Item: {{ item.no }} / {{ item.name }}<br>
    </div>
</div>
</template>

<script>
export default {
  computed: {
    item() {
      return this.$store.getters.getFirst
    },
    two() {
      const func = this.$store.getters.getItem;
      return func(1002);
    }
  },
  methods: {
    increase(value) {
      this.$store.commit('increase', value);
    },
    decrease() {
      // this.$store.commit('decrease');
      this.$store.dispatch('decreaseAction')
    }
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>