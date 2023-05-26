<template>
  <div class="m-3">
    <h1>Chap01 Directive</h1>
    <A14Currency></A14Currency>
    <!-- <A14ClassModule></A14ClassModule> -->
    <!-- <A13StyleClass></A13StyleClass> -->
    <!-- <A12ArrayObject></A12ArrayObject> -->
    <!-- <A11Refs></A11Refs> -->
    <!-- <A10Form></A10Form> -->
    <!-- <A09Event></A09Event> -->
    <!-- <A08LifeCycle></A08LifeCycle> -->
    <!-- <A07Watch></A07Watch>
    <A06Computed></A06Computed>
    <A05Method></A05Method>
    <A04MakeDOM></A04MakeDOM>
    <A03Attribute></A03Attribute>
    <A02Binding></A02Binding>
    <myComp></myComp> -->
  </div>
</template>

<script>
// import myComp from "./components/A01Components.vue";
// import A02Binding from "./components/A02Binding.vue";
// import A03Attribute from "./components/A03Attribute.vue";
// import A04MakeDOM from "./components/A04MakeDOM.vue";
// import A05Method from "./components/A05Method.vue";
// import A06Computed from "./components/A06Computed.vue";
// import A07Watch from "./components/A07Watch.vue";
// import A08LifeCycle from "./components/A08LifeCycle.vue";
// import A09Event from "./components/A09Event.vue";
// import A10Form from "./components/A10Form.vue";
// import A11Refs from './components/A11Refs.vue'
// import A12ArrayObject from './components/A12ArrayObject.vue'
// import A13StyleClass from './components/A13StyleClass.vue'
// import A14ClassModule from './components/A14ClassModule.vue'
import A14Currency from './components/A14Currency.vue'
export default {
  name: "App",
  components: {
    // myComp,
    // A02Binding,
    // A03Attribute,
    // A04MakeDOM,
    // A05Method,
    // A06Computed,
    // A07Watch,
    //A08LifeCycle
    // A09Event
    // A10Form,
    // A11Refs,
    // A12ArrayObject,
    // A13StyleClass,
    // A14ClassModule
    A14Currency
},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
