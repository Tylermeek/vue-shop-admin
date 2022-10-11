import axios from '@/axios/index.js';

// 接口库
export function login(username, password) {
    return axios.post("/admin/login", {
        username,
        password
    })
}

export function getInfo(){
    return axios.post('/admin/getinfo')
}