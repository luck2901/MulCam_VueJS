<template>
  <h3>A11 Refs</h3>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" name="msg" ref = "msgRef">
      <button type="submit" class="btn btn-danger" @click.prevent="changeMessage">ADD</button>
    </div>
  </form>
  <br>

  <div>
    Message: {{message}}
  </div>  
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World'
    }
  },
  methods: {
    changeMessage(/* evt */){
      // 순수 자바스크립트 방식으로 참조
      // const one = document.querySelector('input[name="msg"]');
      // console.log(one);
      // console.log(evt.target);
      // console.log(this.$refs.msgRef)

      // refs는 View 요소에 특정 HTML 요소를 참조할 목적으로 사용한다
      // 이벤트가 발생된 객체 자신에 대한 참조는 evt.target으로 참조하고
      // 그 외의 요소는 $refs로 참조
      this.message = this.$refs.msgRef.value;
    }
  }
}
</script>
