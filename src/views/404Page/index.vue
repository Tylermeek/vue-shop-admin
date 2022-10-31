<template>
  <div class="root">
    <el-row>
      <el-col :span="2"></el-col>
      <el-col :span="20" class="container">
        <el-result icon="error">
          <template #extra>
            <p class="">Whooops, that page is gone.</p>
            <span class="block">Just kidding, looks like we have an internal issue,
              please try again in couple minutes</span>
            <el-button type="primary" @click="$router.push('/')">Back to Home</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
  </div>
</template>

<script>
import '@/utils/flexible.js'

export default {
  // 组件名称
  name: "NotFound",
};
</script> 

<style scoped lang='less'>
.root {
  min-height: 100vh;
  min-width: 100vh;
  background-image: url(public/404_Error.png);

  .container {
    height: 80vh;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 10px 30px 0px #FF3D57;
    margin: 10vh;
    position: relative;

    .el-result {

      position: absolute;
      bottom: 20%;
      display: flex;
      justify-content: center;
      width: 100%;
    }

    p {
      /* Whooops, that page i */
      font-family: Poppins-Bold;
      font-size: 30px;
      font-weight: bold;
      line-height: 6vh;
      letter-spacing: 0px;
      color: #000000;
    }

    span {
      /* Just kidding, looks */

      font-family: Poppins-Medium;
      font-size: 14px;
      font-weight: 500;
      line-height: 5vh;
      text-align: center;
      letter-spacing: 0px;
      color: #8291A9;
    }

    .el-button {
      /* Button background */
      width: 10vw;
      height: 3vh;
      border-radius: 6px;
      background: #0081FF;
      box-shadow: 0px 4px 8px 0px rgba(0, 129, 255, 0.48);
    }
  }
}
</style>
