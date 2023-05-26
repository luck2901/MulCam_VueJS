<template>
  <h3>A06 Suspense - Vue3</h3>
  <!-- <Suspense>
    //정상로드된 경우
    <template #default>
      <A01BannerAbout></A01BannerAbout>
    </template>
    <template #fallback>
      <h5> Loading...</h5>
    </template>
  </Suspense> -->

  <A01BannerAbout></A01BannerAbout>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import LoadComp from './childComps/LoadComp.vue';
import ErrorComp from './childComps/ErrorComp.vue';

const A01BannerAbout = defineAsyncComponent({
  loader() {
    return new Promise((resolve, reject) => {
      setTimeout((flag) => {
        if(flag) resolve(import('./childComps/A01BannerAbout.vue'));
        else reject(new Error('파일을 로드할 수 없습니다.'))
      },2000, true)
    })
  },
  delay : 1500,
  loadingComponent: LoadComp,
  errorComponent : ErrorComp,
  suspensible : false,    // 태그보다 위에 설정한 loadingComponent를 우선 사용.
  timeout : 5000, // 5초 이내에 표시되지 않으면 error
  onError(err, retry, fail, cnt){
    console.log(cnt);   // 재시도 횟수
    if(err && cnt <= 3){
      retry();          // 재 시도
    }else{
      fail();           // 실패 처리
    }
  }
});
export default {
  components: {A01BannerAbout},
}
</script>

<style scoped>
  .dialog { position: fixed; top: 50px; left: 30%; width: 600px; height: 200px; z-index: 99999; border: 1px solid gray; background-color: white; padding: 10px; }
</style>
