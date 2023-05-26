<template>
  <h3>A10 Error</h3>
    
  <hr>

  <A10ErrorChild></A10ErrorChild>
</template>

<script>
import A10ErrorChild from './childComps/A10ErrorChild.vue'

export default {
  components: {A10ErrorChild},
  // 자신의 에러가 아닌 하위 컴퍼넌트의 에러를 모두 잡아 처리할 목적으로 정의
  errorCaptured(err,vm,info){
    console.log('----- A10 ErrorCaptured -----');
    console.log(err);
    console.log(vm);    // Error가 발생된 Component
    console.log(info);  // vue에서 제공해주는 안내 문구

    vm.isError = false; // Error가 밸생된 컴퍼넌트의 변수를 직접 조작
    
    return true;
  }
}
</script>
