<template>
  <div class="mainBody">
    <el-row class="container">
      <el-col :lg="2" :md="2" :sm="2" :xs="2">
      </el-col>
      <el-col :lg="12" :md="14" :sm="14" :xs="20" class="formBox">
        <div class="logo">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
              width="4vh" height="4vh" viewBox="0 0 46 25">
              <defs>
                <linearGradient x1="0" y1="0" x2="1.0199999809265137" y2="1.0099999904632568" id="master_svg0_5_40242">
                  <stop offset="0%" stop-color="#FF3D57" stop-opacity="1" />
                  <stop offset="100%" stop-color="#FF8A48" stop-opacity="1" />
                </linearGradient>
              </defs>
              <g style="mix-blend-mode:passthrough">
                <path
                  d="M15.2189,0.0842024C15.4836,0.0304871,15.7511,0.00290353,16.0186,0L16.1131,0C17.7216,0.0166953,19.3139,0.912434,20.1375,2.27709C20.8024,3.37898,21.3981,4.52443,22.0262,5.64882C22.78,7.00041,23.5352,8.352,24.2904,9.70287C24.3144,9.74642,24.3511,9.78199,24.4167,9.86619C24.6736,9.41615,24.915,8.99731,25.1521,8.57485C26.1699,6.76377,27.1933,4.9556,28.2011,3.13872C28.5858,2.44695,28.957,1.75518,29.5661,1.23255C30.2388,0.656924,30.9947,0.285272,31.8543,0.108156C34.031,-0.342617,36.1744,0.924774,37.1639,2.82005C38.3059,5.00423,39.5559,7.12817,40.7585,9.2775C41.1495,9.97508,41.5419,10.6726,41.9322,11.3717C41.9513,11.4043,41.9605,11.4435,42,11.5452C41.4114,10.9928,40.8107,10.5964,40.1205,10.3453C38.8543,9.88434,37.6171,9.96056,36.3989,10.5209C35.2068,11.0683,34.4516,12.0402,33.8284,13.1864C32.5954,15.4482,31.313,17.6825,30.0524,19.9291C29.5429,20.8365,29.058,21.7569,28.523,22.6468C27.7763,23.8888,26.6724,24.6074,25.282,24.897C23.1414,25.3413,20.9548,24.1153,19.9851,22.1699C19.3456,20.8865,18.5954,19.6613,17.8924,18.412C17.3123,17.3791,16.7293,16.3483,16.1477,15.3168C16.1329,15.2907,16.1124,15.2697,16.0489,15.1811C15.8209,15.5796,15.6155,15.9331,15.4137,16.2903C14.6091,17.7079,13.849,19.156,12.9907,20.5396C12.0012,22.1365,10.6136,23.295,8.93174,24.0775C7.45312,24.7657,5.90038,25.08,4.28484,24.9827C2.85491,24.897,1.49486,24.508,0.226558,23.806C0.155979,23.7668,0.0959871,23.7102,0,23.6391C0.244202,23.1985,0.482759,22.7651,0.723432,22.3318C1.75529,20.4808,2.78292,18.6276,3.81902,16.7795C4.7683,15.0838,5.7317,13.3976,6.68098,11.7027C8.0001,9.34574,9.31075,6.98372,10.6299,4.62677C11.0858,3.81233,11.5255,2.98338,12.0266,2.19797C12.7797,1.01696,13.8765,0.35786,15.2189,0.0842024ZM40.5916,15.0117C40.6339,15.0087,40.6754,15.0109,40.7177,15.0087C40.8155,15.0036,40.9132,15,41.0109,15C41.0445,15,41.0773,15,41.1101,15.0007C41.1145,15.0007,41.1181,15.0007,41.1225,15.0015C41.28,15.0051,41.4376,15.0175,41.5944,15.0364C41.6374,15.0415,41.6789,15.0503,41.7212,15.0561C41.8255,15.0714,41.9291,15.0875,42.0312,15.11C42.1559,15.1355,42.2777,15.1683,42.398,15.2026C42.4104,15.2055,42.4228,15.2092,42.4352,15.2128C43.8931,15.6428,45.0497,16.698,45.6105,18.0746C45.868,18.681,45.9978,19.3266,46,19.9745C46.0014,20.6231,45.8745,21.2731,45.6193,21.8897C45.5909,21.9589,45.558,22.0245,45.5267,22.0908C45.4953,22.1586,45.4676,22.2278,45.4326,22.2934C45.2423,22.6636,45.0038,23.0032,44.7296,23.3115C43.7538,24.4243,42.3915,24.9993,41.0117,25L41.0051,25C40.5259,25,40.0453,24.93,39.5779,24.7901C39.5625,24.7857,39.548,24.7806,39.5334,24.7748C39.4072,24.7369,39.2818,24.6947,39.1593,24.6458C39.0418,24.5999,38.9288,24.5474,38.8165,24.4921C38.7932,24.4811,38.7684,24.4717,38.7457,24.4593C37.6511,23.9105,36.7832,22.9624,36.334,21.7847C36.3187,21.7454,36.3041,21.706,36.2895,21.6674C36.2662,21.6025,36.245,21.5369,36.2246,21.4706C36.1903,21.3635,36.1604,21.2527,36.1342,21.1405C36.1276,21.1099,36.1188,21.08,36.1123,21.0494C35.8716,19.9351,36.0007,18.635,36.6665,17.496C37.3907,16.2323,38.7939,15.1355,40.5916,15.0117Z"
                  fill-rule="evenodd" fill="url(#master_svg0_5_40242)" fill-opacity="1" />
              </g>
            </svg>
          </span>
          <span>meher</span>
        </div>
        <div class="loginBox">
          <span class="title">Sign in to meher</span>
          <div class="option">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
              width="41" height="41" viewBox="0 0 41 41">
              <g style="mix-blend-mode:passthrough">
                <g style="opacity:0.25;mix-blend-mode:passthrough">
                  <path
                    d="M34.5,41L6.5,41Q3.80761,41,1.90381,39.0962Q0,37.1924,0,34.5L0,6.5Q0,3.80761,1.90381,1.90381Q3.80761,0,6.5,0L34.5,0Q37.1924,0,39.0962,1.90381Q41,3.80761,41,6.5L41,34.5Q41,37.1924,39.0962,39.0962Q37.1924,41,34.5,41ZM34.5,40Q36.7782,40,38.3891,38.3891Q40,36.7782,40,34.5L40,6.5Q40,4.22182,38.3891,2.61091Q36.7782,1,34.5,1L6.5,1Q4.221830000000001,1,2.61091,2.61091Q1,4.22182,1,6.5L1,34.5Q1,36.7782,2.61091,38.3891Q4.22182,40,6.5,40L34.5,40Z"
                    fill="#8291A9" fill-opacity="1" />
                </g>
                <g style="mix-blend-mode:passthrough">
                  <path
                    d="M24.85,12.5L22.3,12.5C19.95279,12.5,18.05,14.40279,18.05,16.75L18.05,19.3L15.5,19.3L15.5,22.7L18.05,22.7L18.05,29.5L21.45,29.5L21.45,22.7L24,22.7L24.85,19.3L21.45,19.3L21.45,16.75C21.45,16.28056,21.83056,15.9,22.3,15.9L24.85,15.9L24.85,12.5Z"
                    fill-rule="evenodd" fill="#0081FF" fill-opacity="1" />
                </g>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
              width="41" height="41" viewBox="0 0 41 41">
              <g style="mix-blend-mode:passthrough">
                <g style="opacity:0.25;mix-blend-mode:passthrough">
                  <path
                    d="M34.5,41L6.5,41Q3.80761,41,1.90381,39.0962Q0,37.1924,0,34.5L0,6.5Q0,3.80761,1.90381,1.90381Q3.80761,0,6.5,0L34.5,0Q37.1924,0,39.0962,1.90381Q41,3.80761,41,6.5L41,34.5Q41,37.1924,39.0962,39.0962Q37.1924,41,34.5,41ZM34.5,40Q36.7782,40,38.3891,38.3891Q40,36.7782,40,34.5L40,6.5Q40,4.22182,38.3891,2.61091Q36.7782,1,34.5,1L6.5,1Q4.221830000000001,1,2.61091,2.61091Q1,4.22182,1,6.5L1,34.5Q1,36.7782,2.61091,38.3891Q4.22182,40,6.5,40L34.5,40Z"
                    fill="#8291A9" fill-opacity="1" />
                </g>
                <g style="mix-blend-mode:passthrough">
                  <path
                    d="M29.8219,13.50854677C29.0244,14.071093,28.1413,14.50135,27.2068,14.78275C26.1794,13.601437,24.5238,13.187176000000001,23.0612,13.745443C21.5985,14.30371,20.63995,15.71575,20.66093,17.28119L20.66093,18.114C17.68835,18.19108,14.87458,16.77481,13.16562,14.341359C13.16562,14.341359,9.83438,21.836669999999998,17.32969,25.1679C15.61453,26.3322,13.57133,26.9159,11.5,26.8335C18.99531,30.9976,28.1562,26.8335,28.1562,17.2562C28.1555,17.02422,28.1332,16.79282,28.0896,16.56497C28.9396,15.72674,29.5394,14.66841,29.8219,13.50854677Z"
                    fill-rule="evenodd" fill="#0081FF" fill-opacity="1" />
                </g>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"
              width="41" height="41" viewBox="0 0 41 41">
              <g style="mix-blend-mode:passthrough">
                <g style="opacity:0.25;mix-blend-mode:passthrough">
                  <path
                    d="M34.5,41L6.5,41Q3.80761,41,1.90381,39.0962Q0,37.1924,0,34.5L0,6.5Q0,3.80761,1.90381,1.90381Q3.80761,0,6.5,0L34.5,0Q37.1924,0,39.0962,1.90381Q41,3.80761,41,6.5L41,34.5Q41,37.1924,39.0962,39.0962Q37.1924,41,34.5,41ZM34.5,40Q36.7782,40,38.3891,38.3891Q40,36.7782,40,34.5L40,6.5Q40,4.22182,38.3891,2.61091Q36.7782,1,34.5,1L6.5,1Q4.221830000000001,1,2.61091,2.61091Q1,4.22182,1,6.5L1,34.5Q1,36.7782,2.61091,38.3891Q4.22182,40,6.5,40L34.5,40Z"
                    fill="#8291A9" fill-opacity="1" />
                </g>
                <g style="mix-blend-mode:passthrough">
                  <path
                    d="M16.86842,14.18421Q16.86842,15.296050000000001,16.08223,16.08223Q15.296050000000001,16.86842,14.18421,16.86842Q13.07237,16.86842,12.286187,16.08223Q11.5,15.296050000000001,11.5,14.18421Q11.5,13.07237,12.286187,12.286187Q13.07237,11.5,14.18421,11.5Q15.296050000000001,11.5,16.08223,12.286187Q16.86842,13.07237,16.86842,14.18421ZM14.86842,14.18421Q14.86842,13.9008,14.66802,13.7004Q14.46762,13.5,14.18421,13.5Q13.9008,13.5,13.7004,13.7004Q13.5,13.9008,13.5,14.18421Q13.5,14.46762,13.7004,14.66802Q13.9008,14.86842,14.18421,14.86842Q14.46762,14.86842,14.66802,14.66802Q14.86842,14.46762,14.86842,14.18421ZM25.9741,29.5001L29.3426,29.5001L30.3426,28.5001L30.3426,22.6054Q30.3426,20.098280000000003,28.5698,18.32551Q26.797,16.55273,24.2899,16.55273Q21.782899999999998,16.55273,20.010080000000002,18.32551Q18.2373,20.098280000000003,18.2373,22.6054L18.2373,28.5001L19.2373,29.5001L22.6057,29.5001L23.6057,28.5001L23.6057,22.6054Q23.6057,22.322,23.8061,22.1216Q24.006500000000003,21.9212,24.2899,21.9212Q24.5733,21.9212,24.773699999999998,22.1216Q24.9741,22.322,24.9741,22.6054L24.9741,28.5001L25.9741,29.5001ZM15.86842,17.39453L16.86842,18.39453L16.86842,28.4998L15.86842,29.4998L12.5,29.4998L11.5,28.4998L11.5,18.39453L12.5,17.39453L15.86842,17.39453ZM28.3426,27.5001L28.3426,22.6054Q28.3426,20.92671,27.1556,19.73972Q25.968600000000002,18.55273,24.2899,18.55273Q22.6113,18.55273,21.42429,19.73972Q20.237299999999998,20.92671,20.237299999999998,22.6054L20.237299999999998,27.5001L21.6057,27.5001L21.6057,22.6054Q21.6057,21.49353,22.3919,20.707340000000002Q23.1781,19.92116,24.2899,19.92116Q25.4018,19.92116,26.188000000000002,20.707340000000002Q26.9741,21.49353,26.9741,22.6054L26.9741,27.5001L28.3426,27.5001ZM13.5,19.39453L13.5,27.4998L14.86842,27.4998L14.86842,19.39453L13.5,19.39453Z"
                    fill-rule="evenodd" fill="#0081FF" fill-opacity="1" />
                </g>
              </g>
            </svg>
          </div>
          <span class="font-mono tracking-widest text-lg font-semibold text-gray-500">or use your email account</span>
          <div class="input">
            <el-form :model="userInfo" ref="ruleFormRef" :rules="rules">
              <el-form-item prop="email">
                <el-input v-model="userInfo.email" placeholder="email" />
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="userInfo.password" type="password" placeholder="password" show-password
                  @keyup.enter="submitForm(ruleFormRef)" />
              </el-form-item>
              <el-form-item>
                <span class="font-mono tracking-wild text-lg text-gray-500 text-center">forget your password?
                </span>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)" :loading="submitLoading">Sign in</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-col>
      <el-col :lg="8" :md="6" :sm="6" :xs="0" class="textBox">
        <el-button type="primary" @click="toSginUp">Sign up</el-button>
        <span class="text-4xl font-mono font-600 text-light-300">Welcome to Meher Admin Ui Kit!</span>
        <span class="text-xl font-medium text-light-300">Enter your personal details and start journey with us</span>
      </el-col>
      <el-col :lg="2" :md="2" :sm="2" :xs="2">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { login } from '@/axios/api/manager.js'
import { useRouter } from 'vue-router'
import { setCookie } from '@/utils/cookieManage.js'
import { toast } from '@/utils/toast.js'

export default {
  // 组件名称
  name: "loginPage",
  setup() {
    // 保存用户登录表单数据
    let userInfo = reactive({
      email: '',
      password: '',
    })

    // 保存路由实例
    const router = useRouter()
    // 保存表单ref，初始为空
    const ruleFormRef = ref('')
    // 设置提交按钮加载状态，初始为false
    const submitLoading = ref(false)

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (userInfo.password !== '') {
          if (!ruleFormRef.value) {
            return ruleFormRef.value.validateField('email', () => null)
          }
        }
        callback()
      }
    }

    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        if (userInfo.checkPass !== '') {
          if (!ruleFormRef.value) {
            return ruleFormRef.value.validateField('email', () => null)
          }
        }
        callback()
      }
    }

    const rules = reactive({
      email: [{ validator: validateEmail, trigger: "blur" }],
      password: [{ validator: validatePass, trigger: "blur" }]
    })

    const submitForm = (formEl) => {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          submitLoading.value = true
          login(userInfo.email, userInfo.password)
            .then(res => {
              // 提示成功
              toast('登录成功', 'success')
              // 存储Token
              setCookie(res.token)
              // 跳转到后台
              router.push('/')
            })
            .catch(err => {
              resetForm(formEl)
              // 对错误的提示，已经在拦截器之中包含了，无需添加
            })
            .finally(() => {
              submitLoading.value = !submitLoading
            })
        }
        else {
          // 提示失败
          toast('请输入账户密码', 'error')
          return false
        }
      })
    }
    const resetForm = (formEl) => {
      if (!formEl) return
      formEl.resetFields()
    }
    const toSginUp = () => {
            //跳转到注册页
            router.push('/register')
        }
    return {
      userInfo,
      rules,
      ruleFormRef,
      submitLoading,
      validatePass,
      validateEmail,
      submitForm,
      toSginUp,
    }
  }
};
</script> 

<style scoped lang='less'>

.mainBody{
  background-image: url('/login/Sign_In.png');
  height:100vh;
}

.container {
  min-width: 100%;
  height: 60vh;
  position: relative;
  top: 20vh;

  .formBox {
    border-radius: 8px 0 0 8px;
    background-color: #fff;
    position: relative;

    .logo {
      position: absolute;
      top: 5%;
      left: 5%;
      width: 10vw;
      display: flex;
      align-items: center;
      font-size: 3vh;
    }

    .loginBox {
      height: 40vh;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .title {
        /* Sign in to Meher! */
        // position: absolute;
        // left: 16.5px;
        // top: 0px;
        font-family: Poppins-Bold;
        font-size: 30px;
        font-weight: bold;
        line-height: 42px;
        text-align: center;
        letter-spacing: 0px;
        color: #000000;
      }

      .option {
        margin: 25px 0;
        display: flex;
        justify-content: space-evenly;
      }

      .input {
        margin: 25px 0;

        .el-input {
          /* Email */
          /* Password */
          width: 90%;
          height: 40px;
          border-radius: 6px;
          background: #242A38;
          border: 1px solid #8291A9;
          margin: 10px 0;
        }
      }

      .el-button {
        /* Button background */
        width: 90%;
        height: 40px;
        border-radius: 6px;
        background: #0081FF;
        margin: 25px 0;
      }
    }
  }

  .textBox {
    border-radius: 0 8px 8px 0;
    background: linear-gradient(180deg, #ff3d57 0%, #ff8a48 101%);
    position: relative;

    .el-button {
      /* Sign up button */

      position: absolute;
      top: 5%;
      right: 10%;
      width: 82px;
      height: 40px;
      border-radius: 6px;
      background: #ffffff00;
      border: 1px solid #FFFFFF;
    }

    span {
      display: block;
      margin: 125px 40px;
    }
  }
}

:deep(.el-form-item__content) {
    justify-content: center;
  }
</style>
