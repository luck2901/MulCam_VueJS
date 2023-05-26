import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

// npm i axios

import * as myDir from './modules/directive'; // directive
// import { counterMixin } from './modules/mixin'   // mixin
import plugins from './modules/plugin'; // plugin

const app = createApp(App);

// directive
// 컴퍼넌트에서 사용할 때 "v-사용자지시자" 형태로 사용
app.directive('view', myDir.view);
app.directive('showHide', myDir.showHide);
app.directive('setColor', myDir.setColor);
app.directive('setArgs', myDir.setArgs);
app.directive('makeDOM', myDir.makeDOM);
app.directive('focus', {
  mounted(el) {
    el.focus();
  },
});

// mixin
// app.mixin(counterMixin);

// plugin
const defaultOptions = {
  greet: {
    en: { hi: 'Hello', greet: 'Good Morning' },
    ko: { hi: '안녕하세요', greet: '좋은 아침입니다.' },
  },
  color: 'orange',
};
app.use(plugins, defaultOptions);

// ErrorHandler
app.config.errorHandler = (err, vm, info) => {
  console.log('---------------- Main ---------------- ');
  console.log(err);
  console.log(vm);
  console.log(info);
};

app.config.warnHandler = (err, vm, info) => {
  console.log('---------------- Main ---------------- ');
  console.log(err);
  console.log(vm);
  console.log(info);
};

app.mount('#app');
