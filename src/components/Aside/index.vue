<template>
  <div class="menuContainer">
    <el-menu default-active="00" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened>
      <el-sub-menu v-for="item in menuList" :key="item.name" :index="item.order">
        <template #title>
          <span :class="['iconfont', `icon-${item.icon}`]"></span>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="childItem in item.child" :key="childItem.name" :index="childItem.order" @click="changePage(childItem)">
            <span :class="['iconfont', `icon-${childItem.icon}`]"></span>
            <span>{{ childItem.name }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
// store数据引入
import store from '@/store/index.js'

import router from '@/router/index.js'

import { ref, onMounted, reactive } from 'vue'

// 菜单栏折叠状态
const isCollapse = ref(false)

// 菜单列表数据
let menuList = reactive([])

// 获取用户信息下的菜单列表
const getMenuList = () => {
  let userMenus = store.state.userInfo.menus
  let length = userMenus.length
  for (let i = 0; i < length; i++) {
    let obj = new Object
    obj.name = userMenus[i].name
    obj.icon = userMenus[i].icon
    obj.order = `${i}`
    if (userMenus[i].child.length > 0) {
      obj.child = []
      let childsLength = userMenus[i].child.length
      for (let p = 0; p < childsLength; p++) {
        let childObj = new Object
        childObj.name = userMenus[i].child[p].name
        childObj.icon = userMenus[i].child[p].icon
        childObj.path = userMenus[i].child[p].frontpath
        if (childObj.path.split('/')[2] === 'list') {
          childObj.path = childObj.path.split('/')[1]
        }
        else if (childObj.path.split('/').length === 2) {
          childObj.path = childObj.path.split('/')[1]
        }
        else {
          childObj.path = childObj.path.split('/')[2]
        }
        childObj.order = `${i}${p}`
        obj.child.push(childObj)
      }
    }
    menuList.push(obj)
  }
  // 主动添加一个路由名
  menuList[0].child[0].path = 'dashBoard'
  console.log(menuList);
}

// 点击菜单栏进行路由跳转与更新面包屑
const changePage = (clickItem) => {
  // 路由跳转
  router.push({
    name: clickItem.path
  })
}

onMounted(() => {
  getMenuList()
})
</script> 

<style scoped lang='less'>
.menuContainer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  z-index: 60;
  top: .8125rem;
  overflow: auto;
  box-shadow: .025rem 0 .1rem #1d23290d;
  background-color: #fff;
}

.el-menu {
  width: 3.125rem;
  border: none;

  span {
    font-size: .175rem;
    line-height: .225rem;
    text-align: center;
  }

  .iconfont {
    font-size: .225rem;
    margin-right: .30rem;
  }

  .el-sub-menu {
    min-height: .7rem;
  }
}
</style>
