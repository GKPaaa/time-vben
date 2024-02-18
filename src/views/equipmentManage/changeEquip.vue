<template>
  <div>
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        新增设备
      </div>
      <div class="pr-24">
        <el-button @click="addstaff(ruleFormRef)">
          <el-icon color="#1890FF">
            <Management />
          </el-icon> &nbsp;
          保存
        </el-button>
        <el-button @click="reset(ruleFormRef)">
          <el-icon color="#1890FF">
            <CircleClose />
          </el-icon> &nbsp;
          取消
        </el-button>
      </div>
    </div>

    <div class="ma-0240 bg-f br-4 pl-24 pt-32 pb-36  pr-24">
      <div class="title">基本信息</div>
      <el-form ref="ruleFormRef" style="width:30%;" :rules="rules" :model="form" label-width="130px">
        <el-form-item label="门店名称:" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="门店编码:" prop="password">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="设备类型:" prop="staff">
          <el-select class="w-100p" v-model="form.staff" placeholder="请选择">
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>
        <el-form-item label="序列号:" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="在线状态:" prop="staff">
          <el-select class="w-100p" v-model="form.staff" placeholder="请选择">
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>
        <el-form-item label="配方更新事件:">
          <el-date-picker style="width: 100%;" v-model="form.time" type="date" placeholder="Pick a date" clearable />
        </el-form-item>
        <el-form-item label="设备激活事件:">
          <el-date-picker style="width: 100%;" v-model="form.time" type="date" placeholder="Pick a date" clearable />
        </el-form-item>
        <el-form-item label="上线/离线事件:">
          <el-date-picker style="width: 100%;" v-model="form.time" type="date" placeholder="Pick a date" clearable />
        </el-form-item>
        <el-form-item label="门店编码:" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Back, Management, CircleClose
} from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
const router = useRouter()

const ruleFormRef = ref<FormInstance>()
const form = ref({
  name: '',
  sex: '',
  obj: '',
  student: '',
  time: '',
  worktime: '',
  phone: '',
  id: '',
  img: {},
  filelist: [],
  desc: '',
  power: '',
  staff: ''

})
// 表单校验
const rules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
  },],
  sex: [
    {
      required: true,
      message: '请选择性别',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
    }
  ],
  staff: [
    {
      required: true,
      message: '请选择所属运营商/员工',
    }
  ]

})
const back = () => {
  router.push({
    name: 'equipManage'
  })
}
// 确定新增
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
// 取消
const reset = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
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