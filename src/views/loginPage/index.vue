<template>
  <div style="background: #DBE7EE;height:100vh">
    <el-row class="container">
      <el-col :span="2"></el-col>
      <el-col :span="12" class="formBox"></el-col>
      <el-col :span="8" class="textBox"> </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "loginPage",
};
</script> 

<style scoped lang='less'>
.container {
  min-width: 100%;
  height: 60vh;
  position: relative;
  top:20vh;
  .formBox{
    border-radius: 8px 0 0 8px;
    background-color: #fff;
  }
  .textBox {
    border-radius: 0 8px 8px 0;
    background: linear-gradient(180deg, #ff3d57 0%, #ff8a48 101%);
  }
}
</style>
