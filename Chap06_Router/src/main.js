import { createApp } from 'vue';
import App from './App.vue';

// npm i vue-router
// 폴더 내부에서 import 해야 할 파일이 index라면 생략 가능
import router from './router';

// bootstrap 추가
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
