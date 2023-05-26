<template>
  <h3>A04 DOM Directive</h3>
  <br>

  <h5>1. v-show</h5>
  <div v-show="isChecked">
    v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다. v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
  </div>
  <br />

  <h5>2. v-if</h5>
  <div v-if="name==='nolbu'">
    Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.<br>
    v-if, v-else-if, v-else는 모두 인접한 태그로 기술해야한다.<br>
    중간에 다른 요소가 추가되면 에러<br>

    해당 요소만 추가되고 나머지는 DOM에서 삭제된다. 즉 매칭되는 요소만 동적 생성
  </div>
  <div v-else-if="name === 'hungbu'">
    v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다. 또한 여러 개를 사용할 수 있습니다.
  </div>
  <div v-else>
    v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다
  </div>
  <br>

  <h5>3. v-for</h5>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Kor</th>
        <th>Eng</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in students" v-bind:key="index">
        <td>{{ index + 1}}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.kor }}</td>
        <td>{{ item.eng }}</td>
      </tr>
    </tbody>
  </table>
  <br>

  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Kor</th>
        <th>Eng</th>
      </tr>
    </thead>
    <tbody>
      <!-- template은 컴파일 하면 사라짐 -->
      <template v-for="(item, index) in students" v-bind:key="index">
      <tr v-if="item.kor >= 90 ">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.kor }}</td>
        <td>{{ item.eng }}</td>
      </tr>
    </template>
    </tbody>
  </table>
  <br>

  <!-- Set 순환 -->
  <ul>
    <li v-for="(value,index) in mySet" :key="index">{{value}}</li>
  </ul>

   <!-- Map 순환 -->
  <ul>
    <li v-for="[key, value] in myMap" :key="key">
      {{key}}/{{value.name}}/{{ value.price }}/{{ value.maker }}
    </li>
  </ul>

   <!-- Object 순환 -->
  <ul>
    <li v-for="(value, key, idx) in students[0]" :key="key">
      {{value}}/{{key}}/{{idx}}
    </li>
  </ul> 

  <!-- // 1부터 지정한 수까지 1씩 증가하면서의 값으로 출력 -->
  <ul>
    <li v-for="value in 5" :key="value">{{ value }}</li>
  </ul>
  <div>
    <button class="btn btn-outline-primary btn-sm" @click="changeCheck">Check</button>
    <button class="btn btn-outline-primary btn-sm" @click="name ='nolbu'">IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name ='hungbu'">Else IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name ='abc'">Else</button><br>
  </div>  
</template>

<script>

const data = {
  students: [
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
    { name: 'NolBu', age: 50, kor: 90, eng: 90 },
    { name: 'HungBu', age: 40, kor: 70, eng: 60 },
  ]
}

export default {
  data(){
    return{
      isChecked : true,
      name : 'nolbu',
      students : data.students,
      myMap : new Map([
        ['Tv', {name: 'TV', price : 10000, maker:'LG'}],
        ['Phone', {name : 'PHONE', price : 20000, maker:'Samsung'}]
      ]),
      // Set은 중복된 데이터를 허용하지않음.
      mySet : new Set([
        10,11,100,200,300, 10, 11
      ])
    }
  },
  methods:{
    changeCheck(){
      this.isChecked = !this.isChecked
    }
  }
  
}
</script>
