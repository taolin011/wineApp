import { createApp } from 'vue'
import App from './App.vue'

import routes from './router/index.js'
import pageBottom from './components/pageBottom/index.vue'
import Vue3TouchEvents from "vue3-touch-events";
const app=createApp(App)
app.use(routes)
app.use(Vue3TouchEvents);
app.component('pageBottom',pageBottom)
app.mount('#app')
