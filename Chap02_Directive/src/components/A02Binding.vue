<template>
  <h3>{{ title }}(보간법)</h3>
  바인딩 식 내부에서는 식만 사용 가능<br />
  <br />

  <div>
    <h5>1. 일반적 바인딩</h5>
    일반적인 단방향 바인딩: {{ name }}<br />
    함수의 리턴값: {{ onAdd(10, 20) }}<br />
    함수의 리턴값: {{ onMin(10, 20) }}<br />
    함수의 리턴값: {{ getName() }}<br />
    배열: {{ arr[0] }} / {{ arr[1] }} / {{ arr[10] }}<br />
    객체: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
  </div>
  <br />

  <div>
    <h5>2. 바인딩 연산</h5>
    일반적 연산: {{ 10 + 20 }}<br />
    속성 참조: {{ arr.length }}<br />
    속성 참조 연산: {{ arr.length * 100 }}<br />
    비교 연산: {{ arr[0] > 10 }}<br />
    비교 연산: {{ arr[0] > 10 || arr[1] > 10 }}<br />
    삼항 연산: {{ name === "NolBu" ? "관리자" : "유저" }}<br />
  </div>
  <br />

  <div>
    <h5>3. 바인딩 관련 지시자</h5>
    <!-- v-지시자="변수명" 의 경우 "value" 은 변수를 의미한다 -->
    v-text: <span v-text="greet"></span><br />
    v-html: <span v-html="greet"></span><br />

    <!-- 한번 바인딩 후 값이 변경되더라도 재 렌더링 안함 -->
    v-once: <span v-once>{{ greet }}</span
    ><br />
    <!-- 중괄호 두개 사용하는 바인딩의 표현법을 일반 텍스트로 인식하도록 한다. -->
    v-pre: <span v-pre>{{ greet }}</span
    ><br />
    <br />
    <button v-on:click="changeGreet">Change</button>
    <button @click="changeGreet">Change</button>
    <br />
  </div>

  <div>Data에 존재하지 않는 변수: Data에 존재하지 않는 객체:</div>
</template>

<script>
export default {
  //Reactive Data => 값이 변경되면 변경된 값을 기반으로 Vue가 알아서 리 렌더링
  data() {
    return {
      title: "A02 Binding",
      name: "NolBu",
      arr: [10, 20],
      user: { name: "흥부", age: 30 },
      greet: "<b>Hello World</b>",
    };
  },
  //data의 값을 변경할 목적, Event Handler, 일반적인 함수 등이 여기에 정의
  methods: {
    onAdd(x, y) {
      console.log(this);
      const result = x + y;
      return `${x} + ${y} = ${result}`;
    },
    onMin: (x, y) => {
      console.log(this); //undefined(arrow 함수)
      return `${x} - ${y} = ${x - y}`;
    },
    getName() {
      // data 내부의 변수는 항상 this.변수명 형태로 참조
      return this.name;
    },
    changeGreet() {
      this.greet = "<b>Good Morging</b>";
    },
  },
};
</script>
