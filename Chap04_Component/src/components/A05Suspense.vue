<template>
  <h3>A05 Suspense - Vue3</h3>

  <Suspense>
    <!-- 정상로드된 경우 -->
    <template #default>
      <A01BannerAbout>

      </A01BannerAbout>
    </template>
    <template #fallback>
      <h5> Loading...</h5>
    </template>
  </Suspense>
  <!-- <A01BannerAbout></A01BannerAbout> -->
</template>

<script>
// import A01BannerAbout from './childComps/A01BannerAbout.vue';

import { defineAsyncComponent } from 'vue';

const A01BannerAbout = defineAsyncComponent(async() =>{
  // 시간 시연을 위해 정의 - 아무런 의미 없음.
    await new Promise((resolve) => setTimeout(resolve,2000))
    return import ('./childComps/A01BannerAbout.vue')
  }
)
export default {
  components: { A01BannerAbout },
  
}
</script>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>
