<template>
  <div class="bg-f">
    <!-- 侧边栏 start -->
    <el-menu :default-active="leftActive" :router="true" class="el-menu-vertical-demo" :collapse="props.isOpen"
      @open="handleOpen" @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <span class="iconfont mr-10 fs-16">&#xe644;</span>
          </el-icon>
          <span>
            订单管理系统
          </span>
        </template>
        <el-menu-item index="orderManage">订单管理</el-menu-item>
        <el-menu-item index="orderBoard">订单看板</el-menu-item>
        <!-- <el-menu-item index="1-4">物料管理</el-menu-item>
        <el-menu-item index="1-5">订单工价管理</el-menu-item>
        <el-menu-item index="1-6">订单报表</el-menu-item> -->
      </el-sub-menu>

      <!-- <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <Monitor />
          </el-icon>
          <span>
            订单管理系统
          </span>
        </template>
        <el-menu-item index="2-1">订单管理</el-menu-item>
        <el-menu-item index="2-4">物料管理</el-menu-item>
        <el-menu-item index="2-5">订单工价管理</el-menu-item>
        <el-menu-item index="2-6">订单报表</el-menu-item>
      </el-sub-menu> -->
      <el-menu-item index='messageManage'>
        <span class="iconfont  mr-10 fs-16">&#xe600;</span>
        <template #title>信发管理系统</template>
      </el-menu-item>
      <el-menu-item index="staffManage">

        <span class="iconfont  mr-10 fs-16">&#xe61b;</span>
        <template #title>员工管理</template>
      </el-menu-item>
      <el-menu-item index='equipManage'>
        <span class="iconfont  mr-10 fs-16">&#xe6f0;</span>
        <template #title>设备管理</template>
      </el-menu-item>

      <el-menu-item index='equipManage'>
        <span class="iconfont  mr-10 fs-16">&#xe625;</span>
        <template #title>门店管理</template>
      </el-menu-item>


      <el-sub-menu index="3">
        <template #title>
          <el-icon>
            <span class="iconfont mr-10 fs-16">&#xe622;</span>
          </el-icon>
          <span>
            系统管理
          </span>
        </template>
        <el-menu-item index="accountManage">用户管理</el-menu-item>
        <el-menu-item index="organizationManage">组织管理</el-menu-item>
        <el-menu-item index="labelManage">标签管理</el-menu-item>
        <el-menu-item index="dictManage">字典管理</el-menu-item>
        <el-menu-item index="roleManage">角色管理</el-menu-item>
        <el-menu-item index="accountInfo">用户信息</el-menu-item>
        <el-menu-item index="actionLog">操作日志</el-menu-item>
      </el-sub-menu>

      <el-menu-item index='carrierManage'>
        <span class="iconfont  mr-10 fs-16">&#xe624;</span>

        <template #title>运营商管理</template>
      </el-menu-item>


      <el-sub-menu index="4">
        <template #title>
          <el-icon>
            <span class="iconfont  mr-10 fs-16">&#xeac2;</span>
          </el-icon>
          <span>
            生产管理
          </span>
        </template>
        <el-menu-item index="processManage">工序管理</el-menu-item>
        <el-menu-item index="processflowManage">工序流程管理</el-menu-item>
      </el-sub-menu>
      <el-menu-item index='approvalManage'>

        <span class="iconfont  mr-10 fs-16">&#xe9d6;</span>
        <template #title>领料管理</template>
      </el-menu-item>
      <el-menu-item index='examineManage'>
        <span class="iconfont  mr-10 fs-16">&#xe680;</span>
        <template #title>审批管理</template>
      </el-menu-item>
    </el-menu>
    <!-- 侧边栏 end -->
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()
const leftActive: any = ref(null)
const props = defineProps(['isOpen'])
onBeforeMount(() => {
  leftActive.value = router.currentRoute.value.name
  switch (router.currentRoute.value.name) {
    case ('changeStaff'):
      leftActive.value = 'staffManage'
      break;
    case ('accountAdd'):
      leftActive.value = 'accountManage'
      break;
    case ('changeEquip'):
      leftActive.value = 'equipManage'
      break;
    case ('changeCarrier'):
      leftActive.value = 'carrierManage'
      break;
    case ('lookprocess'):
      leftActive.value = 'processManage'
      break;
    case ('releaseMessage'):
      leftActive.value = 'messageManage'
      break;
    case ('orderDetail'):
      leftActive.value = 'orderManage'
      break;
    case ('addExamine'):
      leftActive.value = 'examineManage'
      break;
    case ('addProcessflow'):
      leftActive.value = 'processflowManage'
      break;
    case ('orderAdd'):
      leftActive.value = 'orderManage'
      break;
  }
})

// 查询路由是否是左侧导航栏路由
const handleOpen = () => {
  return;
}
const handleClose = () => {
  return;
}

</script>

<style lang="scss" scoped></style>