import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/css/font.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
