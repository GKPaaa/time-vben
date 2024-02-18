<template>
  <div>
    <div class="topName">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        订单详情
      </div>
    </div>
    <div class="ma-0240">
      <div class="bg-f br-4 mb-16 p-24">
        <div class="title">基础信息</div>
        <el-form ref="ruleFormRef" style="width: 100%;" :model="info.form" label-width="100px">
          <div class="df">
            <div class="w-30p">
              <el-form-item label="订单编码:" prop="name">
                48613134546513131215564
              </el-form-item>
              <el-form-item label="订单号:" prop="name">
                THG02
              </el-form-item>
              <el-form-item label="订单类型:" prop="name">
                订单类型名字
              </el-form-item>
              <el-form-item label="规格:" prop="name">
                订单规格名字
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="计划开单时间:" prop="name">
                工序类型名字
              </el-form-item>
              <el-form-item label="计划结单时间:" prop="name">
                正常
              </el-form-item>
              <el-form-item label="实际开单时间:" prop="name">
                正常
              </el-form-item>
              <el-form-item label="实际结单时间:" prop="name">
                正常
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="订单状态:" prop="name">
                状态
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <div class="bg-f mb-16 br-4 p-24">
        <div class="title">订单进度</div>
        <el-table :data="table.processData" style="width: 100%">
          <el-table-column prop="name" label="订单编号" />
          <el-table-column prop="name" v-for="(item) in 6" :key="item" label="标题一">
            <template #default="">
              <div>文案</div>
              <div class="w-120 bg-77 pl-6" style="padding: 10px 5px;">
                <p class="fs-16 cl-26">裸管组绕簧</p>
                <div class="fs-12 cl-26 lh-16">文案文案</div>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="bg-f mb-16 br-4 p-24">
        <div class="title">订单统计参数</div>
        <el-form ref="ruleFormRef" style="width: 100%;" :model="info.form" label-width="100px">
          <div class="df">
            <div class="w-30p">
              <el-form-item label="订单编码:" prop="name">
                48613134546513131215564
              </el-form-item>
              <el-form-item label="订单号:" prop="name">
                THG02
              </el-form-item>
              <el-form-item label="订单类型:" prop="name">
                订单类型名字
              </el-form-item>
              <el-form-item label="规格:" prop="name">
                订单规格名字
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="计划开单时间:" prop="name">
                工序类型名字
              </el-form-item>
              <el-form-item label="计划结单时间:" prop="name">
                正常
              </el-form-item>
              <el-form-item label="实际开单时间:" prop="name">
                正常
              </el-form-item>
              <el-form-item label="实际结单时间:" prop="name">
                正常
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="订单状态:" prop="name">
                状态
              </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      <div class="bg-f br-4 p-24">
        <div class="title">订单BOM</div>
        <el-table :data="table.bomData" max-height="230" style="width: 100%">
          <el-table-column type="index" width="60" label="序号" />
          <el-table-column prop="name" label="物料编号" />
          <el-table-column prop="name" label="物料名称" />
          <el-table-column prop="name" label="单位" />
          <el-table-column prop="name" label="数量" />

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
const table = ref({
  processData: [{
    name: 11,
    date: 2023 - 10.10,
    address: '112233221'
  }],
  bomData: [{
    name: 11,
    date: 2023 - 10.10,
    address: '112233221'
  }]

})
const back = () => {
  router.push({
    name: 'orderManage'
  })
}
</script>

<style lang="scss" scoped>
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