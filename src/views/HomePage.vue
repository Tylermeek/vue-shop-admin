<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container class="mainBox">
        <el-aside>
          <Aside></Aside>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="index" :to="{ path: item.meta.path }">
              {{item.meta.title}}
            </el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from '@/components/Header/index.vue';
import Aside from '@/components/Aside/index.vue';

import { useRouter } from "vue-router";
import '@/utils/flexible.js'
import { watch, ref, onMounted } from 'vue';

let breadcrumbData = ref([])

let router = useRouter()
// 监听路由变化 并且把路由路径放置数组中

watch(router.currentRoute, () => {
  getBreadcrumb();
})

const getBreadcrumb = () => {
  breadcrumbData.value = router.currentRoute.value.matched
  console.log(breadcrumbData);
}

onMounted(() => {
  getBreadcrumb()
})

</script> 

<style scoped lang='less'>
.common-layout {
  min-height: 100vh;
  background-color: #f3f4f6;
  ;

  .el-aside {
    position: fixed;
    top: .8125rem;
    left: 0;
    width: 3.125rem;
    height: 100%;
    --tw-bg-opacity: 1;
    background-color: rgba(253, 253, 253, var(--tw-bg-opacity));
  }

  .el-header {
    height: .8125rem;
    width: 100%;
    background-color: rgb(67, 56, 202);
    position: fixed;
    top: 0;
    left: 0;
  }

  .el-main {
    width: 86%;
    margin: 0.4rem 0.125rem;
    position: fixed;
    left: 3.125rem;
    top: .8125rem;
    bottom: 0;
    margin-bottom: 0;
    padding: 0;

    .el-breadcrumb {
      position: fixed;
      top: 0.82rem;
      left: 3.4rem;
      height: .35rem;
      line-height: .35rem;
      font-size: .15rem;

    }
  }
}
</style>
