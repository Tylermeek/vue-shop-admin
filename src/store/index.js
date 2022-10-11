import { createStore } from 'vuex'
import { getInfo } from '@/axios/api/manager.js'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      userInfo:{}
    }
  },
  mutations: {
    setUserInfo(state,userInfo){
        state.userInfo = userInfo
    }
  },
  actions:{
    // 获取当前登录用户信息
    getInfo({ commit }){
      return new Promise((resolve, reject)=>{
        getInfo().then(res=>{
          commit('setUserInfo', res)
          resolve(res)
        }).catch(err => reject(err))
      })
    }
  }
})

export default store