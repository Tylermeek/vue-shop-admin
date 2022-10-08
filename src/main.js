import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'
import router from './router'


// 创建实例
const app = createApp(App)

// 使用router
app.use(router)

app.mount('#app')
