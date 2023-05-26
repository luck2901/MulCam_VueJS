


<template>
  <h3>A11 Scoped Slot</h3>

  <A11ScopeSlotChild>
    <!-- one이라는 변수가 <slot :kor=?.>등의 값을 Object 객체로 참조  -->
    <template v-slot="one">
      Kor: {{ one.kor }}<br>
      Eng: {{ one.eng }}<br>
      User: {{ one.user.name }} / {{ one.user.address }}<br>
    </template>
    <!-- name 속성은 slot을 구별할 목적으로 정의 -->
    <template v-slot:jumsu="one">
      Kor: {{ one.kor }}<br>
      Eng: {{ one.eng }}<br>
      User: {{ one.user.name }} / {{ one.user.address }}<br>
    </template>
  </A11ScopeSlotChild>
</template>

<script>
import A11ScopeSlotChild from './childcomps/A11ScopeSlotChild.vue'

export default {
  components: { A11ScopeSlotChild },
  data() {
    return {
      
    }
  }
}
</script>
