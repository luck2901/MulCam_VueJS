

<template>
  <div id="container">
    <h3>A02 Keep Alive</h3>
    <ul>
      <li v-for="item in name" :key="item">
        <a href="#"   @click="changeCurrent(item)">{{ item }}</a>
      </li>
    </ul>

    <!-- 2.X => keep-alive 태그 사용 -->
    <!-- exclude="A01BannerHome,A01BannerAbout" -->
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>

<script>
import A01BannerHome from './childComps/A01BannerHome.vue'
import A01BannerAbout from './childComps/A01BannerAbout.vue'
import A01BannerNews from './childComps/A01BannerNews.vue'

export default {
  components: {A01BannerHome, A01BannerAbout, A01BannerNews},
  data() {
    return {
      current: 'A01BannerHome',
      name: ['Home', 'About', 'News']
    }
  },
  methods: {
    changeCurrent(name) {
      this.current = 'A01Banner' + name;
    }
  },
}
</script>

<style scoped>
  #container { width: 900px; }
  #container > ul { margin: 0px; padding: 0px; }
  #container > ul li { list-style-type: none; float: left; line-height: 160%; width: 300px; height: 40px;}
  #container > ul li a { display: block; text-align: center; text-decoration: none; background-color: lightgray; color: #000; border: solid 1px Black; }
  #container > div { border: 1px solid #c0c0c0; border-top: none; padding: 15px; font-size: smaller; }
</style>
