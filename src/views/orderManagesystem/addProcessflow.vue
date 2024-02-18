<template>
  <div id="addprocessflow">
    <div class="topName">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        工序流程详情
      </div>
    </div>
    <div class="ma-0240">
      <el-form ref="ruleFormRef" style="width: 100%;" :model="info.form" label-width="100px">
        <div class="bg-f br-4 mb-16 p-24">
          <div class="title">基础信息</div>
          <div class="df">
            <div class="w-30p">
              <el-form-item label="产品代码:" prop="name">
                裸管组织切割
              </el-form-item>
              <el-form-item label="工序名称:" prop="name">
                工序类型名字
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="订单类型:" prop="name">
                THG02
              </el-form-item>
              <el-form-item label="工序总数:" prop="name">
                y
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="工序流程id:" prop="name">
                正常
              </el-form-item>
              <el-form-item label="是否绑定:" prop="name">
                y
              </el-form-item>
            </div>
          </div>
        </div>

      </el-form>
      <div class="bg-f br-4 p-24 mb-16">
        <div class="title">工序流程</div>
        <div class="df fw-w">
          <div class="step"></div>
          <div class="step"></div>
          <div class="step"></div>
        </div>
      </div>
      <div class="bg-f br-4 p-24">
        <div class="title">工序设置</div>
        <el-table height="280" :data="set.table.data" style="width: 100%">
          <el-table-column type="index" width="60" label="序号" />
          <el-table-column prop="name" label="工序名称" />
          <el-table-column prop="name" label="工序编码" />
          <el-table-column prop="name" label="工序时间（秒）" />
          <el-table-column prop="name" label="这算系数" />
        </el-table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Back
} from '@element-plus/icons-vue'
const router = useRouter()
const info = ref({
  form: {
    name: '',
    type: '1'
  }
})
const set = ref({
  table: {
    data: []
  }
})
const back = () => {
  router.push({
    name: 'processflowManage'
  })
}
</script>

<style lang="scss" scoped>
.step {
  min-width: 120px;
  /* 设置长方形的宽度 */
  height: 40px;
  /* 设置长方形的高度 */
  background-color: #479FFF;
  color: #fff;
  margin-right: 3px;
}




.title {
  padding-left: 14px;
  width: 200px;
  height: 24px;
  font-size: 16px;
  color: #262626;
  position: relative;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 24px;

  &::before {
    content: '';
    width: 6px;
    height: 24px;
    background-color: #1890FF;
    position: absolute;
    left: 0;
  }
}
</style>