


<template>
  <h3>A07 v-model</h3>
    
  Name: {{name}}<br>
  Age: {{age + 100}}<br>
  Num: {{num + 100}}<br>
  <hr>

  <A07VModelName label="Name" :modelValue="name"  @update:modelValue="changeName"></A07VModelName><br />
  <A07VModelNum label="Age"   v-model="num"></A07VModelNum>
</template>

<script>
import A07VModelName from './childComps/A07VModelName.vue'
import A07VModelNum from './childComps/A07VModelNum.vue'

export default {
  components: {A07VModelName, A07VModelNum},
  data() {
    return {
      name: 'NolBu',
      num: 10,
      age: 30,
    }
  },
  methods: {
    getNumber(data) {
      this.num = Number(data);
    },
    changeName(evt) {
      this.name = evt;
    }
  }
}
</script>


