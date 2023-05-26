<template>
  <h3>A05 Method</h3>

  <div>
    <h5>1. Method</h5>

    method에서 정의한 함수가 Arrow 함수도 동작. 다만 this에 주의<br>
    onAdd: {{ onAdd(10,20) }}<br>
    <br>
    
    Name: {{name}}
    <input type="text" name="name" class="form-control" :value="name" v-on:input="(evt) =>changeString(evt)">
    Address: {{address}}
    <input type="text" name="address" class="form-control" :value="address" v-on:input="changeString">
    Num: {{num}}
    <input type="text" name="num" class="form-control" :value="num" v-on:input="changeNumber">
  </div>
  <br>

  <div>
    <h5>2. Computed</h5>
    Computed: {{ sumComputed }}<br>
    Methods: {{ sumMethod() }}<br>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      num: 10,
      address : 'seoul'
    }
  },
  methods: {
    // 일반적인 반환값을 가지는 함수. 바인딩의 대상이 될 수 있다.
    onAdd : (a,b) => `${a} + ${b} = ${a+b}`,

    changeString(evt){
      const value = evt.target.value.trim();
      if(value.length !== 0){
        this[evt.target.name] = value;
      }
    },

    changeNumber(evt) {
      let value = Number(evt.target.value);
      if(isNaN(value)){
        value=0;
      }
      this[evt.target.name] = value;
    },

    sumMethod() {
      console.log('계산중...');
      let total = 0;
      for(let i  = 0; i<= this.num; i++){
        total+=i;
      }
      return total;
    }
  },
  // "계산된 속성"이라 한다. 
  // 함수 내부에서 사용된 data의 값이 변경된 경우만 새롭게 호출된다.
  // 매개변수를 받을 수 없다.
  // 매개변수가 있는 경우 method의 함수와 동일하게 매번 호출된다.
  // 정의는 함수 형태이지만 view에서는 변수(프로퍼티)처럼 사용한다.
  // 즉 data의 값을 기반으로 새로운 값이 필요한 경우 사용
  computed: {
    sumComputed() {
      console.log('sumComputed 계산중...');
      let total = 0;
      for(let i  = 0; i<= this.num; i++){
        total+=i;
      }
      return total;
    }
  },
  //참조만 할 목적의 값을 정의
  arr : () => [10,20],
}
</script>
