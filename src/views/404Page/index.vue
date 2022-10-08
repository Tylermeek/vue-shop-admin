<template>
  <el-result
    icon="error"
    title="Error Tip"
    sub-title="你找的页面不见了"
  >
    <template #extra>
      <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
    </template>
  </el-result>
</template>

<script>
export default {
  // 组件名称
  name: "NotFound",
};
</script> 

<style scoped lang='less'>
</style>
