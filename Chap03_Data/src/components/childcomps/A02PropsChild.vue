<template>
  <h5>A02 Props Child Component</h5>
  <div>
    상위 컴퍼넌트가 하위 컴퍼넌트에게 데이터 전달은 속성을 이용한다<br>
    속성을 이용해 전달받은 값은 "읽기 전용"이다<br>
    <br>
    Name : {{name }}<br>
    Age : {{ age + 1 }}<br>
    Address : {{  add }}<br>
    Array : {{ arr[0] }} / {{ arr[1] }} // {{ arr[5] }}<br>
    User : {{ user.name }} /{{ user.age }} /{{ user.address }}<br>
    OnAdd : {{ onAdd(20,30) }}<br>
    isChecked: {{ isChecked }}

  </div>
</template>

<script>
export default {
  props : ['name','age','add','arr','user','onAdd','isChecked'],
  // props:{
  //   name: {type: String , required : true, default:'Unknown'},
  //   age : {type : Number},
  //   add : {type : [Number, String]},
  //   arr: {
  //     type : Array,
  //     default : () => [],                       //validator의 체크 대상이 된다.
  //     validator : (value) => value.length >= 2,
  //   },
  //   user: {
  //     type: Object,
  //     default : () => ({name: 'UN', age : 1}),   //validator의 체크 대상이 된다.
  //     validator : (value) => value.name && value.age,
  //   },
  //   onAdd : {
  //     type : Function,
  //     default() {       // 함수는 default 함수 자체가 default 값으로 사용된다.
  //       return '값이 정의되지 않았습니다.'
  //     }
  //   },
  //   isChecked : {
  //     type : Boolean,

  //   }
  // },
  data() {
    return {
    }
  }
}
</script>
