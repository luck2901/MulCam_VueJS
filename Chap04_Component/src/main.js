import { createApp } from "vue";
import App from "./App.vue";

// bootstrap 추가
import "bootstrap/dist/css/bootstrap.min.css";


const app = createApp(App)

// Error 처리
app.config.errorHandler = (err, vm, info) => {
    console.log('----- main -----');
    console.log(err);
    console.log(vm);    // Error가 발생된 Component
    console.log(info);  // vue에서 제공해주는 안내 문구
}

// warn 처리는 컴퍼넌트에서 처리 할 수 없음
// main에서 일괄 처리한다
app.config.warnHandler = (err, vm, info) => {
    console.log('----- main warn-----');
    console.log(err);
    console.log(vm);    // Error가 발생된 Component
    console.log(info);  // vue에서 제공해주는 안내 문구
}
app.mount("#app");
