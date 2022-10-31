<template>
  <div class="logoBox">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-shouxinxiangqing-dianshangshuju"></use>
    </svg>
    <span>电商后台管理</span>
  </div>
  <div class="userBox">
    <span>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </span>
    <span>{{userName}}</span>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>登出系统</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import store from '@/store/index.js'

import {
  ArrowDown,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue';

let userName = ref('')
// 获取用户名
const getName = () => {
  userName.value = store.state.userInfo.role.name;
}
onMounted(() => {
  getName()
})
</script> 

<style scoped lang='less'>
.logoBox {
  position: absolute;
  top: 0.225rem;
  left: 0;
  width: 3.125rem;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: .3125rem;
  line-height: .375rem;
  font-weight: 300;

  .icon {
    font-size: .375rem;
  }
}

.userBox {
  position: absolute;
  top: 0;
  right: 0.5rem;
  width: 2.125rem;
  height: .8125rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .el-icon {
    color: white;
  }
}
</style>
