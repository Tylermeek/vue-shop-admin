import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress"
import 'nprogress/nprogress.css' //这个样式必须引入


import Home from '@/views/HomePage.vue'
import NotFound from '@/views/404Page/index.vue'
import LoginPage from '@/views/loginPage/index.vue'
import registerPage from '@/views/registerPage/index.vue'
import dashBoard from '@/views/dashBoard/index.vue'
import goodsPage from '@/views/GoodsManage/goodsPage.vue'

const routes = [
    {
        path: '',
        component: Home,
        redirect: '/dashBoard',
        meta:{title:'home',path:'/'},
        children:[
            {
                path: '/dashBoard',
                name: 'dashBoard',
                component: dashBoard,
                meta:{title: 'dashBoard'}
            },
            {
                path: '/goodsManage',
                redirect:'/goodsManage/goods',
                meta:{title:'goodsManage',path:'/goodsManage'},
                children:[
                    {
                        path:'/goodsManage/goods',
                        name:'goods',
                        component: goodsPage,
                        meta:{title: 'goods'}
                    },
                    {
                        path:'/goodsManage/category',
                        name:'category',
                        component: goodsPage,
                        meta:{title: 'category'}
                    }
                ]
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

router.beforeEach(()=>{
    NProgress.start()
})

router.afterEach(()=>{
    NProgress.done()
})
export default router