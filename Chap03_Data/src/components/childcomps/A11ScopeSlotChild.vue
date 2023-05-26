


<template>
  <h5>A11 Scoped Slot</h5>

  <div>
    자식 컴퍼넌트의 데이터를 부모 컴퍼넌트에서 조작.
  </div>

  <div>
    <input type="text" class="form-control" v-model.number="kor">
    <input type="text" class="form-control" v-model.number="eng">
  </div>

  <!-- slot props라 한다. name 속성을 값 전달로 사용하면 안됨 -->
  <slot :kor="kor" :eng="eng" :user="user"></slot>
  <slot name="jumsu" :kor="kor" :eng="eng" :user="user"></slot>

</template>

<script>
export default {
  data() {
    return {
      kor: 90,
      eng: 70,
      user: {name: 'HungBu', age: 20},
    }
  },
  methods: {
    changeKor(kor) {
      this.kor = kor;
    }
  }
}
</script>


