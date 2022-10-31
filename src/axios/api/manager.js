import axios from '@/axios/index.js';

// 接口库

// 登录请求 
export function login(username, password) {
    return axios.post("/admin/login", {
        username,
        password
    })
}

// 获取用户信息
export function getInfo() {
    return axios.post('/admin/getinfo')
}

