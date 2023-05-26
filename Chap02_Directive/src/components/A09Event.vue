<template>
  <h3>A09 Event</h3>

  Num: {{num}}<br>
  <button v-on:click="num++">+1</button>
  <button v-on:click="decrease()">-1</button>
  <button v-on:click.once="decrease">once</button>
  
  <!-- altKey, shiftKey, ctrlKey, metaKey, left, midle, right -->
  <button v-on:click.shift ="decrease">Key</button>

  <!-- 이벤트 객체를 매개변수로 전달하지 않는 경우
  이벤트 객체 이외의 값을  순차적으로 전달하면 된다. -->
  <button @click="increase(2, 'Two')">Event 2</button>

  <!-- JavaScript의 event를 재 정의한 $event객체를 매개변수로 전달 -->
  <button @click=" increaseEvent($event, 3, 'Three')">Event 3</button>
  <button @click="(evt) => increaseEvent(evt, 4, 'Four')">Event 4</button>
  <br>
  <br>
  
  <div id="container" @click="outer">
  <div id="inner" @click="innerOne">ONE</div>
  <div id="inner" @Click.stop="innerTwo">TWO</div>
  </div>
  <br>
  <br>

  <!-- DOM  요소가 가지고 있는 자바스크립트 코드를 실행 안함 -->
  <div>
      <a href="http://www.daum.net"  @click="daum">DAUM</a> |
      <a href="http://www.naver.com" @click.prevent="naver">NAVER</a> |
  </div>
  <br>

  <!-- keydown, keyup, keypress -> 누르고 있는 동안 -->
  <input type="text" class="form-control" @keyup="keyUpEvent"><br>
  <input type="text" class="form-control" @keyup.shift.a="keyUpTwo"><br>
  
  esc: <input type="text" class="form-control"    v-model="name" @keyup.esc="escEvent"/><br>
  Enter: <input type="text" class="form-control"  v-model="msg" @keyup.enter="enterEvent"/><br>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      name: 'Guest',
      msg: ''
    }
  },
  methods: {
    decrease: function(evt) {
      console.log(evt)
      this.num--;
    },
    increase: function(num) {
      this.num = this.num + num
    },
    increaseEvent: function(evt, num, name) {
      this.num = this.num + num
      console.log(evt.target);
      console.log(name);
    },
    outer(evt) {
      console.log(evt.target);
      console.log(evt.currentTarget);
    },
    innerOne(evt) {
      console.log(evt.target);
      console.log(evt.currentTarget);

      //eslint-disable-next-line no-constant-condition
      if(true){
        evt.stopPropgation();
      }
    },
    innerTwo(evt) {
      console.log(evt.target);
      console.log(evt.currentTarget);
    },
    daum(evt){
      evt.preventDefault();
      console.log('Daum');
    },
    naver(){
      console.log('Naver');
    },
    keyUpEvent(evt){
      const key = evt.key;
      const code = evt.code;
      const keyCode = evt.keyCode;
      console.log(`Key: ${key}, Code: ${code}, keyCode:${keyCode}`);

      if(keyCode === 13) alert("Hello World");
      if(keyCode === 65 && evt.shiftKey) location.assign('http://google.com')
    },
    keyUpTwo(){
      location.assign('http://daum.net')
    },
    escEvent(){
      if(this.name.trim().length < 5){
        alert('5글자 이상 입력해주세용')
        this.name = '';
      }
    },
    enterEvent(){
      if(this.msg.trim().length < 5){
        alert('5글자 이상 입력해주세용')
        this.msg = '';
      }else{
        // 서버에 전송
        console.log(this.msg);
      }
    },
  }
}
</script>

<style scoped>
  #container { width: 300px; height: 150px; border: 1px solid gray; display: flex; justify-content: center; align-items: center;}
  #inner { width: 100px; height: 100px; background: orange; padding: 10px; margin: 10px; text-align: center; display: flex; justify-content: center; align-items: center;}
</style>