
import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from '../src/views/LayOut/LayOut.vue'
import router from './router'
import '@/assets/css/common.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
