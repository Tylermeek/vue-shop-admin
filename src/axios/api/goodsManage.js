import axios from '@/axios/index.js';

// 接口库

// 商品列表 数据
export function goodsData(page,tab,title,category_id,limit = 10) {
    return axios.get(`/admin/goods/${page}`,{  //params参数必写 , 如果没有参数传{}也可以
        params: {  
            tab,
            title,
            category_id,
            limit
        }
    })
}
