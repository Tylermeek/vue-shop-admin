import { useCookies } from '@vueuse/integrations/useCookies'

//设置Token的key
const tokenKey = 'admin-token'
// 创建实例
const cookie = useCookies()

// set function
export function setCookie(token){
    cookie.set(tokenKey, token)
}

// get function
 export function getCookie(){
    return cookie.get(tokenKey)
 }

//remove function
export function removeCookie(){
    cookie.remove(tokenKey)
} 