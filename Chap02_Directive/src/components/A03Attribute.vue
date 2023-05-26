<template>
  <h3>A03 Attribute Directive</h3>

  <div >
    <h5>1. 속성 바인딩</h5>
    <input type="text" class="form-control" value="{{ name }}">
    <input type="text" class="form-control" v-bind:value="name">
    <input type="text" class="form-control" :value="name">
    <!-- //변수명 대신 실질적인 값으로 바인딩의 값을 지정할 수 잇음 
    :class="'form-control'" => 문자 'form-control'
    :class="7" => 숫자 7이 대입된다
    :class="'7'" => 문자 7이 대입된다
    -->
    <input type="text" :class="'form-control'" :value="name">
    
    <div v-bind:style="myStyle">Hello World</div>

    <!-- 여러 속성을 Object 객체로 정의하고 그 정의된 값을 일괄 적용하고자 하는 경우 -->
    <input v-bind="attrs">
  </div>
  <br>

  <div >
    <h5>2. 양방향 바인딩</h5>
    <!-- View(template)에서 지정된 변수의 값을 변경하면 즉각 data의 값이 변경된다.
    또한 data의 값이 변경되면 View(template)이 변경된 값으로 즉시 반영된다. -->
    <input type="text" class="form-control" v-model="name">
    <input type="text" class="form-control" v-model="name">

    <!-- 리액트에서 사용하는 방법 - 사용자가 함부로 못 바꾸게 할 수 있다 -->
    <input type="text" class="form-control" v-bind:value="name" v-on:input="changeName">
    Name: 
  </div>
  <br>

  <div class="row">
    <div class="col-6">
      <select class="form-control" v-model="direction">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input type="text" class="form-control" v-model="size">
    </div>
  </div>
  <br>
  <img src="./images/tree.jpg" alt="Tree" v-bind:[direction]="size">
</template>

<script>
export default {
  data() {
    return {
      name: "NolBu",
      myStyle:{background : 'lightgray', padding:'10px', fontWeight:'bold'},
      attrs : {class :'form-control', type:'text' , value:'Hello World'},
      direction:'width',
      size : 200,
    };
  },
  methods : {
    changeName(evt) {
      //eslint-disable-next-line no-constant-condition
      if(true){
        this.name = evt.target.value;
      }
    }
  }
}
</script>
