<template>
  <h3>A13 Style & Class</h3>
    
  <div style="color: orange; font-size: 24pt;">{{hello}}</div>
  <div v-bind:style="{color:'orange', 'font-size':'24pt'}">{{hello}}</div>
  <div :style="{color:'orange', fontSize:'24pt'}">{{hello}}</div>
  <div :style="myStyle">{{hello}}</div>
  <br>
  <h3>Class Binding</h3>

  <div class="one" :class="'two'">{{hello}}</div>
  <div class="one" :class="['two','three']">{{hello}}</div>
  <div class="one" :class="classOne1">{{hello}}</div>
  <br>

  <div class="one" :class="{'two':check,'three':true}">{{hello}}</div>
  <div class="one" :class="{classOne1:check}">{{hello}}</div>
  <input type="checkbox" v-model="check"> Check<br />
  <br>

  <input type="text" class="form-control" v-model="num" :class="warn"/>  
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!!',
      check: true,
      classOne1:'two three',
      num : 10,
    }
  },
  computed:{
    myStyle: () => ({color:'orange', fontSize: '24pt'}),
    warn() {
      if(this.num < 0 || this.num > 100) return {warning : true}
      else return {warning: false}
    }
  }
}
</script>

<!-- 현재 컴포넌트에만 사용할 수 있는 CSS로 등록된다. 컴퍼넌트에 코드가 추가된다 -->
<style scoped>
  .one { color: orange; }
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
  .warning {background-color: orange; color: gray; }
</style>
