<template>
  <h3>A07 Watch</h3>

  <div>
    <input type="text" class="form-control" v-model="x"><br>
    <input type="text" class="form-control" v-model="y"><br>
    Total: {{total}} / <br >
    <br>

    <input type="text" class="form-control" v-model="name"><br>
    <table class="table">
      <thead>
        <tr><th>NO</th><th>NAME</th><th>TEL</th><th>ADDRESS</th></tr>
      </thead>
      <tbody>
        <tr v-for="item in contactList" :key="item.no">
          <td>{{ item.no }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.tel }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>

    <div v-show="isLoading">Loading....</div>
  </div>  
</template>

<script>

const baseURL = 'http://sample.bmaster.kro.kr/contacts_long/search/';

export default {
  data() {
    return {
      x: 10, 
      y: 20,
      total: 0,
      name: '',
      isLoading: false,
      contactList: []
    }
  },
  // data에 기술된 reactive 변수의 값은 변경되면 변경된 값을 기반으로
  // 화면 갱신 작업이 자동으로 이루어짐
  // 이러한 변경 작업을 미리 캐치해서 사전 작업이 필요한 경우  사용
  watch:{
    // data의 변수명과 동일한 이름으로 함수를 기술한다
    x(newVal, oldVal){
      console.log(newVal, typeof newVal, oldVal, typeof oldVal);
      let result = Number(newVal) + this.y;
      if(isNaN(result)) result = 0;
      this.total = result;
    },
    y() {
      // 값이 변경되면 무조건 getTotal() 메서드 실행
      this.getTotal();
    },
    name(value){
      if(value.length >= 2)
        this.getContactList();
    }
  },
  methods: {
    getTotal(){
      this.total = Number(this.x) + Number(this.y)
    },
    getContactList() {
      this.isLoading = true;
      fetch(baseURL + this.name)
      .then((resp) => resp.json())
      .then((data) => {
        this.isLoading = false;
        this.contactList = data;
        console.log(data);
      })
      .catch((error) => {
        this.isLoading = false;
        console.log(error)
      })
    }
  },
}
</script>
