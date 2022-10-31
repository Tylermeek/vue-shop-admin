import axios from '@/axios/index.js';

// 接口库

// 首页第一行数据请求 
export function firstLine() {
    return axios.get("/admin/statistics1")
}

// 首页订单详情图表数据
export function detailChart(type) {
    return axios.get('/admin/statistics3' ,{  //params参数必写 , 如果没有参数传{}也可以
        params: {  
            type
        }
    })
}

// 首页店铺及商品提示、交易提示数据
export function dataShow() {
    return axios.get('/admin/statistics2')
}
