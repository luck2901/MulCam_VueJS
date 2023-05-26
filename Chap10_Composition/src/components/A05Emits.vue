<template>
  <h3>A05 Emits</h3>  

  <div>
    Name: {{ name }}<br>
    <br>
    Object: {{ num }}<br>
      Name: <br />
      etc: <br />

      <button>Func</button>
  </div>

  <hr>

  <A05EmitChild   @sendNameEvent="getName" @sendDataEvent="getData"></A05EmitChild>
</template>

<script setup>
  import { ref } from 'vue';
  import A05EmitChild from './childComps/A05EmitChild.vue'

  const name = ref('');
  const num = ref(0);

  const getName = (evt) => {
    // console.log(evt.value);    // ref
    name.value = evt.value;
  };
  const getData = (evt) => {      // reactive
    console.log(evt.num);
    console.log(evt.arr[0]);
    console.log(evt.user.name);

    num.value = evt.num;
  };

</script>
