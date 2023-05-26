<template>
  <h5>A03 Emits Child Component</h5>  

  <div>
    <button @click="sendNumber">Num</button>
    <button @click="sendObject">Data</button>
  </div>

</template>

<script>

export default {
  // 네이티브 이벤트와 구별하기 위해 정의/.
  // 즉 아래에 정의한 사용자 정의 이벤트를 이 컴퍼넌트에서 사용한다고 알림 역할.
  emits : ['numEvent','objEvent'],
  data() {
    return {
      num: 10,
      name: 'NolBu',
      arr: [10, 20],
      user: {name: 'HungBu', age: 20}
    }
  },
  methods: {
    sendNumber() {
      // 하위 데이터를 상위로 전달하는 방식은 이벤트 방식 "$emit "을 이용
      // $emit('이벤트명', 전달할 값, ...)
      this.$emit('numEvent', this.num);
    },
    sendObject() {
      const sendData = {
        name : this.name,
        arr : this.arr,
        user : this.user,
        onAdd : (x,y) => x+ y,
      };
      this.$emit('objEvent', sendData)
    }
  },
  mounted() {
    this.sendObject();
  },
  // 자식에서 관리하는 data 변수의 값이 변경되면 상위에 다시 값 전달
  // 상위 컴포넌트는 그 값을 기반으로 새로운 값으로 리 렌더링
  updated() {
    this.sendObject();
  }
}
</script>
