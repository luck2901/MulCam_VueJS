<template>
  <h5>A04 Ref Props Child Component</h5>  

  <div>
    <input type="text" class="form-control"   :value="name" ref = "nameRef">
    <input type="text" class="form-control"   :value="age">
    <button @click="changeName" ref="btnRef">Click</button>
  </div>
  <br>

</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      age: 30
    }
  },
  methods: {
    changeAge(age) {
      this.age = age;
    },
    changeName() {
      this.$refs.nameRef.style.background = 'lightgray';
    }
  }
}
</script>
