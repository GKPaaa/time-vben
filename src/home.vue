
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="bg-1890 df ai-ct jc-sb">

        <div class="df ai-ct h-100p">
          <div class="cl-f mr-16 fs-26 fsy-i fw-700">智慧工时</div>

          <el-icon v-if="isCollapse" :size="26" class="pointer" color="#fff" @click="isCollapse = false">
            <Expand />
          </el-icon>
          <el-icon v-else :size="26" class="pointer" color="#fff" @click="isCollapse = true">
            <Fold />
          </el-icon>
        </div>
        <div class="df ai-ct">
          <div class="avater">
            <el-icon size="26" color="#666">
              <Avatar />
            </el-icon>
          </div>
          <span class="cl-f "> {{ store.username }}</span>
          <div class="logout" @click="logout">
            <el-icon style="transform:rotate(270deg);" size="16" color="#fff">
              <Download />
            </el-icon>
            退出登录
          </div>
        </div>
      </el-header>
      <el-container class="h-content">
        <Left :isOpen='isCollapse'></Left>
        <el-container>
          <el-main>
            <el-config-provider :locale="zhCn">
              <router-view v-slot="{ Component }" :duration="300">
                <transition name="fade" enter-active-class="animate__animated  animate__fadeIn">
                  <component :is="Component" />
                </transition>
              </router-view>
            </el-config-provider>
          </el-main>
          <el-footer class="df ai-ct jc-ct">@Copyright 郭郭郭郭郭</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Left from "./component/left.vue";
import { ref, onBeforeMount } from "vue";
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { Avatar } from '@element-plus/icons-vue'
const isCollapse = ref(false)
import { useRouter } from "vue-router";
import { useUsersStore } from "./store/index";
const store = useUsersStore();
const router = useRouter()
import {
  Expand,
  Fold,
  Download
} from '@element-plus/icons-vue'
onBeforeMount(() => {
  console.log('store', store.username);
})
const logout = () => {
  router.push({
    name: "login"
  })
  localStorage.clear()
  store.setuserName('')
  console.log('store', store.username);
}
</script>

<style scoped lang="scss">
.avater {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
}

.logout {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #fff;
  margin-left: 16px;
}

.common-layout {
  background-color: #f5f5f5;
  min-width: 1600px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>