<template>
  <div>
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        发布
      </div>
      <div class="pr-24">
        <el-button @click="addstaff(ruleFormRef)">
          <el-icon color="#1890FF">
            <Position />
          </el-icon> &nbsp;
          确认发布
        </el-button>
      </div>
    </div>
    <div class="ma-0240 bg-f br-4 pl-24 pt-32 pb-36  pr-24 mb-16">
      <div class="title">资源</div>
      <el-image style="width: 100px; height: 100px"
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" fit="cover" />



    </div>

    <div class="m-24 bg-f br-4 pl-24 pt-32 pb-36  pr-24">
      <div class="title">基本信息</div>
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="130px">
        <div class="df jc-sb">
          <div class="w-30p">
            <el-form-item label="轮播节目名称:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="发布任务:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="播放时间段:">
              <el-time-picker v-model="form.name" is-range range-separator="To" start-placeholder="Start time"
                end-placeholder="End time" />
            </el-form-item>
          </div>
          <div class="w-30p">
            <el-form-item label="播放模式:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="结束日期:">
              <el-date-picker style="width: 100%;" value-format="YYYY-MM-DD" v-model="form.name" type="date"
                placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="是否配置菜品价格:">
              <el-switch v-model="form.check" />
            </el-form-item>
          </div>
          <div class="w-30p">
            <el-form-item label="播放优先级:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="生效日期:">
              <el-date-picker style="width: 100%;" value-format="YYYY-MM-DD" v-model="form.name" type="date"
                placeholder="Pick a day" />
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>

    <div class="ma-0240 bg-f br-4 pl-24 pt-32 pb-36  pr-24">

      <div class="title jc-sb">
        <div>设备信息</div>
        <div>
          <el-select v-model="table.type" placeholder="请选择">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
          <el-button class="ml-12">
            <el-icon color="#1890FF">
              <Plus />
            </el-icon>&nbsp;
            新增发布设备
          </el-button>
        </div>
      </div>
      <el-table height="360" :data="table.data" style="width: 100%;">
        <el-table-column type="selection" width="50" />
        <el-table-column prop="name" width="55" label="序号" />
        <el-table-column prop="name" label="设备序列号" />
        <el-table-column prop="name" label="设备名" />
        <el-table-column prop="name" label="屏幕编号" />
        <el-table-column prop="name" label="门店名称" />
        <el-table-column prop="date" label="设备状态" />
        <el-table-column prop="name" label="屏幕类型" />
        <el-table-column fixed="right" width="200" prop="address" label="操作">
          <template #default="">
            <el-button link type="primary">编辑</el-button>
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Back, Plus, Position
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const form = ref({
  name: '',
  check: false,
})
// 表单校验
const rules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
    trigger: 'change',
  }]
})
const table = ref({
  type: '',
  data: [{
    name: 11,
    date: 2023 - 10.10,
    address: '112233221'
  }],
})
// 返回表格
const back = () => {
  router.push({ name: 'messageManage' })
}

// 确定发布
const addstaff = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })

}
</script>

<style lang="scss" scoped>
.title {
  padding-left: 14px;
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