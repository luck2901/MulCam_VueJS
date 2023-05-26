<template>
  <div class = "m-3">
    <h1>Chap04 Component</h1>
    <!-- <A10ErrorCaputurd></A10ErrorCaputurd>
    <A09VModel></A09VModel>
    <A08VModel></A08VModel>
    <A07VModel></A07VModel>
    <A06Suspense></A06Suspense>
    <A05Suspense></A05Suspense>
    <A04Teleport></A04Teleport>
    <A03Teleport></A03Teleport>
    <A02DynamicComp></A02DynamicComp>
    <A01DynamicComp></A01DynamicComp> -->
    <A11WarnHandler></A11WarnHandler>
  </div>

</template>

<script>
// import A01DynamicComp from './components/A01DynamicComp.vue';
// import A02DynamicComp from './components/A02DynamicComp.vue';
// import A03Teleport from './components/A03Teleport.vue';
// import A04Teleport from './components/A04Teleport.vue';
// import A05Suspense from './components/A05Suspense.vue';
// import A06Suspense from './components/A06Suspense.vue';
// import A07VModel from './components/A07VModel.vue';
// import A08VModel from './components/A08VModel.vue';
// import A09VModel from './components/A09VModel.vue';
// import A10ErrorCaputurd from './components/A10ErrorCaputurd.vue';
import A11WarnHandler from './components/A11WarnHandler.vue';


export default {
  name: "App",
  components: {
    // A01DynamicComp,
    // A02DynamicComp,
    // A03Teleport,
    // A04Teleport,
    // A05Suspense,
    // A06Suspense,
    // A07VModel,
    // A08VModel,
    // A09VModel,
    // A10ErrorCaputurd,
    A11WarnHandler
},
errorCaptured(err,vm,info){
    console.log('----- App -----');
    console.log(err);
    console.log(vm);    // Error가 발생된 Component
    console.log(info);  // vue에서 제공해주는 안내 문구

    vm.isError = false; // Error가 밸생된 컴퍼넌트의 변수를 직접 조작
    
    //main.js로 전파 할 것인가
    return true;
  }
};
</script>
