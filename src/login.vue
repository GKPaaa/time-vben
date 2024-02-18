<template>
  <div class="Smegma">
    <div class="loginbox">
      <div class="left">
        <div class="bg"></div>
      </div>
      <div class="right">
        <div class="title">
          <h2 class="cl-53 ">Welcome to Work Hours</h2>
        </div>
        <div>
          <el-input :prefix-icon="User" v-model="login.account" placeholder="请输入账号" class="input-with-select mb-10">
          </el-input>

          <el-input :prefix-icon="Lock" v-model="login.password" placeholder="请输入密码" class="input-with-select mb-12">
          </el-input>
          <el-button type="primary" color="#5373f8" :loading="login.isloading" @click="loginin" class="w-100p">{{
            login.txt
          }}</el-button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="loginInfo br-24 p-0160 df jc-ct ai-ct fl-dc ">

    <el-input v-model="login.account" placeholder="请输入账号" class="input-with-select mb-10">
      <template #prepend>
        <el-button :icon="User" />
      </template>
    </el-input>

    <el-input v-model="login.password" placeholder="请输入密码" class="input-with-select mb-12">
      <template #prepend>
        <el-button :icon="Lock" />
      </template>
    </el-input>
    <el-button type="primary" :loading="login.isloading" @click="loginin" class="w-100p">{{ login.txt }}</el-button>
  </div> -->
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { Ref, ref, onMounted } from 'vue'
import { useRouter } from "vue-router";
import { useUsersStore } from "./store/index";
import { HTTP_GET } from './utils/get'
import { HTTP_POST } from './utils/post'
const store = useUsersStore();
const router = useRouter()
type logintype = {
  account: string,
  password: string,
  isloading: boolean,
  txt: string
}
const login: Ref<logintype> = ref({
  account: '',
  password: '',
  isloading: false,
  txt: '登录'
})

onMounted(() => {
  let ur = "/tenant/get-id-by-name";
  let data = {
    name: '智慧门店'
  }
  HTTP_GET(data, ur).then((res: any) => {
    // localStorage.setItem('Tenant-id', res.data.data)
    store.setTenantId(res.data.data)
  })
  // service({
  //   method: 'get',
  //   url: "/tenant/get-id-by-name?name=" + encodedTerm,
  // })
})

const loginin = async (): Promise<void> => {
  let url = '/auth/login'
  let data = {
    username: login.value.account,
    password: login.value.password
  }
  // await HTTP_POST(data, url).then((res: any) => {
  //   store.setAuthorization(res.data.data.accessToken, res.data.data.refreshToken)
  // })
  // login.value.isloading = true
  // login.value.txt = '正在登录，请稍等...'
  // let url1 = '/auth/get-permission-info'
  // await HTTP_GET('', url1).then((res: any) => {
  //   store.setuserName(res.data.data.user.nickname)
  // })

  await router.push({ name: 'home' })

}
</script>

<style lang="scss" scoped>
.loginInfo {
  position: absolute;
  top: 50%;
  right: 5vw;
  margin-top: -20vh;
  width: 30vw;
  height: 40vh;
  // opacity: 0;
  background-color: #fff;
  animation: loginshow 0.5s linear 0s 1 normal forwards;
  box-shadow: 0 0 10px 5px #ddd;
}

.loginbox {
  width: 700px;
  border-radius: 20px;
  height: 400px;
  background-color: #fff;
  display: flex;
  transition: all 1.0s ease;

  .left {
    width: 350px;
    height: 400px;
    border-radius: 20px 0 0 20px;
    background-color: #F0F5FF;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1.0s ease;

    .bg {
      width: 320px;
      height: 320px;
      background-image: url(./assets/login/left.png);
      background-size: 100% 100%;
    }

  }

  .right {
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    padding: 0 30px;
    transition: all 1.0s ease;

    .title {
      margin: 70px 0 50px 0;
    }
  }
}

@media screen and (max-width: 900px) {
  .loginbox {
    width: 350px;
    height: 300px;

    .left {
      width: 0;
      height: 0;
      opacity: 0;
    }

    .right {
      height: 300px;

      .title {
        margin: 50px 0 30px 0;
      }
    }
  }
}

// @keyframes loginshow {
//   0% {
//     opacity: 0;
//   }

//   50% {
//     opacity: 0;
//   }

//   100% {
//     opacity: 1;
//   }
// }

.Smegma {
  width: 100vw;
  height: 100vh;
  background-color: #5373f8;
  display: flex;
  align-items: center;
  justify-content: center;
  // animation-name: LeftToRight;
  // /* 2、动画持续时间 */
  // animation-duration: 0.4s;
  // /* 3、动画执行速度 */
  // animation-timing-function: linear;
  // /* 4、等待时长 */
  // animation-delay: 0.4;
  // /* 5、设置动画播放次数 */
  // // animation-iteration-count: infinite;
  // /* 6、设置动画是否反向播放 */
  // // animation-direction: alternate;
  // /* 7、动画结束时应用最后一帧 */
  // animation-fill-mode: forwards;
  // /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}


// @keyframes LeftToRight {
//   0% {}

//   25% {
//     background-color: skyblue;
//     width: 80vw;
//   }

//   100% {
//     background-color: #409eff;
//     width: 50vw;

//   }
// }
</style>