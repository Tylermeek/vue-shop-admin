import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'
import router from '@/router/index.js'
import store from '@/store'


// 创建实例
const app = createApp(App)

// 使用router
app.use(router)
// 使用vuex
app.use(store)

// 导入全局路由守卫
import '@/permission.js'

app.mount('#app')
