import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

// npm i axios bootstrap vue-router vuex
const app = createApp(App)
app.use(store)
app.use(router)
app.config.unwrapInjectedRef = true;
app.mount('#app')
