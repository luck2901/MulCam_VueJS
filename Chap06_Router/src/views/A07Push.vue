<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attr')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button   @click="goURL({name: 'attrs'})">A02Attr</button>
      <button   @click="goURL({name: 'params', params: {no: 1001, name: 'ABC'}})">Params</button>
      <button   @click="goURL({name: 'query', query: {no: 1001, name: 'DEF', address: 'Seoul'}, hash: '#MIDDLE'})">Query</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
export default {
  methods: {
    back: function(){
      // this.$router.back();
      this.$router.go(-1);
    },
    forward: function() {
      // this.$router.forward();
      this.$router.go(1);
    },
    goHome: function() {
      this.$router.push('/');
    },
    goURL: function(url) {
      this.$router.push(url);
    },
  },
  created() {
    // console.log(this.$router);
  },
  beforeRouteEnter(to, from) {
    // 각 컴퍼넌트에서 설정
    console.log('----------- beforeRouteEnter -----------');
      const session = window.sessionStorage;
      if (session.getItem('tel')) return true;
      else return false;
  },
  beforeRouteLeave(to, from) {
    // 이 뷰에서 다른 뷰로 이동 가능 / 불가 결정
    console.log('----------- beforeRouteLeave -----------');
      const session = window.sessionStorage;
      if (session.getItem('job')) return true;
      else return false;
  }
}
</script>