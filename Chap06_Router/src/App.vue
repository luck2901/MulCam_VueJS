<template>
  <div class="m-3">
    <h1>Chap06 Router</h1>

    <div>
      <!-- 2.X => router-link -->
      <router-link to="/">INDEX</router-link> | 
      <RouterLink to="/A01Bind">BIND</RouterLink> | 
      <RouterLink :to="{path: '/A02Attr'}">A02Attr</RouterLink> | 
      <RouterLink :to="{name: 'attrs'}">A02Attr</RouterLink> | 
      <RouterLink to="/A03Params/1001/NolBu">A03 1001</RouterLink> | 
      <RouterLink :to="{path: '/A03Params/1002/HungBu'}">A03 1002</RouterLink> | 
      <RouterLink :to="{name: 'params', params: {no: 1003, name: '방자'}}">A03 1003</RouterLink> | 

      <RouterLink :to="{path: '/A04Props/1004/춘향'}">A04 1004</RouterLink> | 
      <RouterLink :to="{name: 'props', params: {no: 1005, name: '향단'}}">A04 1005</RouterLink> | 

      <RouterLink :to="{path: '/A05Contact'}">A05Contact</RouterLink> | 
      
      <!-- {path: ...} 형태로 사용하면 파라메터 붙지 않음 - 체크 해 볼것 -->
      <RouterLink to="/A06Query?no=1006&name=길동&address=Seoul#TOP">Query 1006</RouterLink> | 
      <RouterLink :to="{
        name: 'query', 
        query: {no: 1007, name: 'HungBu', address: 'Busan'}, 
        hash: '#BTN'}">Query 1007</RouterLink> | 

      <RouterLink :to="{name: 'push'}">A07Push</RouterLink> | 

      <RouterLink :to="{name: 'child'}">A08Child</RouterLink> | 

      <RouterLink to="/ABC">ABC</RouterLink> | 
    </div>
    <hr>

    <!-- 2.X => router-view -->
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  components: {
    
  },
};
</script>
