<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1">
      <el-icon>
        <icon-menu />
      </el-icon>
      <span>DashBoard</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>E-Commerce</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">Products</el-menu-item>
        <el-menu-item index="1-2">Orders</el-menu-item>
        <el-menu-item index="1-3">Invoice</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon>
        <document />
      </el-icon>
      <span>Calendar</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon>
        <setting />
      </el-icon>
      <span>E-mail</span>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon>
        <setting />
      </el-icon>
      <span>Chat</span>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon>
        <setting />
      </el-icon>
      <span>Contacts</span>
    </el-menu-item>
    <el-menu-item index="7">
      <el-icon>
        <setting />
      </el-icon>
      <span>TO DO</span>
    </el-menu-item>
    <el-menu-item index="8">
      <el-icon>
        <setting />
      </el-icon>
      <span>File Manager</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
// import {
//   Document,
//   Menu as IconMenu,
//   Location,
//   Setting,
// } from '@element-plus/icons-vue'
export default {
  // 组件名称
  name: 'Header',
  // components:[Document,IconMenu,Location,Setting]
}
</script> 

<style scoped lang='less'>

</style>
