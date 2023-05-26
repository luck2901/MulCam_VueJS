<template>
  <h3>A03 Emits</h3>  

  <div>
    Counter: {{ num }}<br>
    <br>
    Object: {{ item.name }} / {{ item.arr && item.arr[0] }} / {{ item.user && item.user.name }}<br>
  </div>

  <hr>

  <A03EmitChild @numEvent = "getNumber" @objEvent = "getObject"></A03EmitChild>
</template>

<script>
import A03EmitChild from './childcomps/A03EmitChild.vue';
export default {
  components: { A03EmitChild },
  data() {
    return {
      num : '',
      item : {}
    }
  },
  methods: {
    // 매개변수가 $efmit에서 전달한 실질적인 값이다.
    getNumber(evt){
      // console.log(evt);
      this.num = evt;
    },
    getObject(data) {
      this.item = data;
    }
  }
}
</script>
