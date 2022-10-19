import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/HomePage.vue'
import NotFound from '@/views/404Page/index.vue'
import LoginPage from '@/views/loginPage/index.vue'
import registerPage from '@/views/registerPage/index.vue'
import dashBoard from '@/views/dashBoard/index.vue'

const routes = [
    {
        path: '',
        component: Home,
        redirect: '/dashBoard',
        children:[
            {
                path: '/dashBoard',
                name: 'dashBoard',
                component: dashBoard
            }
        ]
    },
    {
        path:'/login',
        name:'login',
        component: LoginPage
    },
    {
        path:'/register',
        name:'register',
        component: registerPage
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