<template>
  <h3>A08 v-model</h3>
    
  Name: {{msg}}<br>
  Age: {{age + 100}}<br>
  Num: {{num + 100}}<br>
  <hr>

  <A08VModelChild Label="Name" v-model:name="msg" v-model:num="num" v-model:age="age"></A08VModelChild>
</template>

<script>
import A08VModelChild from './childComps/A08VModelChild.vue'

export default {
  components: {A08VModelChild},
  data() {
    return {
      msg: 'NolBu',
      age: 30,
      num: 10
    }
  }
}
</script>
