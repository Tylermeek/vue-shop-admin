import router from './router/index.js'
import { getCookie } from '@/utils/cookieManage.js'
import { toast } from '@/utils/toast.js'
import store from './store/index.js'

router.beforeEach(async (to, from, next) => {

    const token = getCookie()
    // 没有登录并试图访问
    if(!token){
        if(to.path == '/register'){
            return next()
        }
        else if(to.path != '/login'){
            toast('请先登录','error')
            return next({name: 'login'})
        }
    }

    // 已经登录了却跳转登录页
    else if(token && to.path == '/login'){
        toast('请勿重复登录','error')
         return next({path: from.path || '/'})
    }
    
    // 如果带有token，获取用户信息
    else if(token){
        // 因为该方法返回的是一个promise对象，所以需要使用await解析
        await store.dispatch('getInfo')
    }
    next()
})