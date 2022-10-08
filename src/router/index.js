import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/HomePage.vue'
import NotFound from '@/views/404Page/index.vue'
import LoginPage from '@/views/loginPage/index.vue'

const routes = [
    {
        path: '',
        component: Home,
    },
    {
        path:'/login',
        name:'login',
        component: LoginPage
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router