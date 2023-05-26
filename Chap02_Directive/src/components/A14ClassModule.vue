


<template>
  <h3>A14 Class Module</h3>

  <div :class="$style.one">{{hello}}</div>
  <div :class="[$style.one, $style.two]">{{hello}}</div>
  <br>

  <div :class="classOne">{{hello}}</div>
  <div :class="{ [$style.one]: true, [$style.two]: isChecked}">{{hello}}</div>
  <div :class="{ [classOne]: true, [classTwo]: isChecked}">{{hello}}</div>
  <input type="checkbox"  v-model="isChecked"> Check<br />
  <br>
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!!',
      isChecked: true,
      num: 0,
    }
  },
  computed: {
    classOne() {
      return this.$style.one
    },
    classTwo() {
      return this.$style.two
    },
  },
  mounted(){
    console.log(this.$style);
  }
}
</script>

<!-- 
  scoped => 각 컴퍼넌트에 data-hash 형태로 변경 후 속성 참조 형태의 CSS 적용
  module => 기술한 CSS의 class 요소를 변수 형태로 사용할 수 있도록 해 준다 
-->
<style module>
    .one { color: orange; }
    .two { font-size: 24pt; }
    .three { font-weight: bold; }
</style>


