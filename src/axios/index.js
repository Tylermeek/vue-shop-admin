import { getCookie } from '@/utils/cookieManage.js'
import { toast } from '@/utils/toast.js'

import axios from 'axios'
// 创建自定义axios实例
const service = axios.create({
    baseURL: '/api',
  })

//设置拦截器
// 添加请求拦截器
service.interceptors.request.use(function (config) {

  // 在发送请求之前将token加入请求头
  const token = getCookie()
  if(token){
    config.headers['token'] = token
    // config.headers["Set-Cookie"] = {HttpOnly,Secure,SameSite:None}
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据进行提前处理
  return response.data.data;
}, function (error) {
  // 对响应错误响应提示框
  toast(error.response.data.msg || '请求错误','error')
  return Promise.reject(error);
});


export default service