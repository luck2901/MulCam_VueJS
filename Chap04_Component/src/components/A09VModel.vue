<template>
  <h3>A09 v-model 수식자</h3>
    
  Name: {{name}}<br>
  Num: {{num}}<br>
  
  <hr>

  <A09VModelName  labelName="labelName" v-model.upper="name"></A09VModelName><br />
  <A09VModelNum   labelName="labelName" v-model:num.upper="num"></A09VModelNum>
</template>

<script>
import A09VModelName from './childComps/A09VModelName.vue'
import A09VModelNum from './childComps/A09VModelNum.vue'

export default {
  components: {A09VModelName, A09VModelNum},
  data() {
    return {
      name: 'NolBu',
      num: 10
    }
  }
}
</script>

