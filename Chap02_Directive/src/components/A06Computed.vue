<template>
  <h3>A06 Computed</h3>

  <div class="input-group">
    ref는 View의 요소를 참조할 필요가 있는 경우 사용 
    evt가 발생된 자신을 참조 => evt.target
    <input type="text" name="search" class="form-control" ref="searchRef">
    <div class="input-group-append">
      <button class="btn btn-primary" @click="search">SEARCH</button>
    </div>
  </div>
  <br>

  <table class="table">
    <thead>
      <tr>
        <th>번호</th><th>국가명</th><th>수도</th><th>지역</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in searchData" :key="item.no">
        <td>{{ item.no }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.capital }}</td>
        <td>{{ item.region }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const data = {
  countryname : "",
  countries : [
    { no:1,  name : "미국", capital : "워싱턴DC", region:"america" },
    { no:2,  name : "프랑스", capital : "파리", region:"europe" },
    { no:3,  name : "영국", capital : "런던", region:"europe" },
    { no:4,  name : "중국", capital : "베이징", region:"asia" },
    { no:5,  name : "태국", capital : "방콕", region:"asia" },
    { no:6,  name : "모로코", capital : "라바트", region:"africa" },
    { no:7,  name : "라오스", capital : "비엔티안", region:"asia" },
    { no:8,  name : "베트남", capital : "하노이", region:"asia" },
    { no:9,  name : "피지", capital : "수바", region:"oceania" },
    { no:10,  name : "솔로몬 제도", capital : "호니아라", region:"oceania" },
    { no:11,  name : "자메이카", capital : "킹스턴", region:"america" },
    { no:12,  name : "나미비아", capital : "빈트후크", region:"africa" },
    { no:13,  name : "동티모르", capital : "딜리", region:"asia" },
    { no:14,  name : "멕시코", capital : "멕시코시티", region:"america" },
    { no:15,  name : "베네수엘라", capital : "카라카스", region:"america" },
    { no:16,  name : "서사모아", capital : "아피아", region:"oceania" }
  ]
}
export default {
  data(){
    return{
      data,
    }
  },
  methods:{
    search() {
      const searchValue = this.$refs.searchRef.value;
      //const searchValue = document.querySelector('input[name="search"]').value;
      this.data.countryname = searchValue;
    },
    
  },
  computed:{
    searchData(){
      const newData = this.data.countries.filter((item) => {
        if(item.name.includes(this.data.countryname)) return true;
        else return false;
      });
      return newData;
    }
  }
}
</script>
