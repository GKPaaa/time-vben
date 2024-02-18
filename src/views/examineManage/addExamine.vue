<template>
  <div v-if="!isExamine">
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        新建审批
      </div>
      <div class="pr-24">
        <el-button @click="addstaff(ruleFormRef)">
          <el-icon color="#1890FF">
            <Position />
          </el-icon> &nbsp;
          确认提交
        </el-button>
      </div>
    </div>
    <div class="ma-0240 bg-f br-4 pl-24 pt-32 pb-36  pr-24">
      <div class="title">基础信息</div>
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="100px">
        <div class="df  jc-sb">
          <div class="w-30p">
            <el-form-item label="审批单号:" prop="name">
              <el-input disabled v-model="form.name" />
            </el-form-item>
            <el-form-item label="审批类型:">
              <el-select style="width: 100%;" v-model="form.name" placeholder="请选择" clearable>
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="发起时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a date" />
            </el-form-item>
            <el-form-item label="提交人:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="审批人:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="审批描述:">
              <el-input v-model="form.name" type="textarea" />
            </el-form-item>

          </div>
        </div>
      </el-form>
    </div>
  </div>
  <div v-else>
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        审批信息
      </div>
      <div class="pr-24">
        <el-button @click="reject">
          <el-icon color="#1890FF">
            <CircleClose />
          </el-icon> &nbsp;
          驳回审批
        </el-button>
        <el-button @click="pass">
          <el-icon color="#1890FF">
            <Position />
          </el-icon> &nbsp;
          通过审批
        </el-button>
      </div>
    </div>
    <div class="ma-0240 bg-f br-4 pl-24 pt-32 pb-36  pr-24">
      <div class="title">基础信息</div>
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="100px">
        <el-form-item label="审批单号:" prop="name">
          <p class="cl-26 fs-14">90.08.0222.v0001</p>
        </el-form-item>
        <el-form-item label="审批类型:">
          审批类型
          <p class="cl-26 fs-14">90.08.0222.v0001</p>
        </el-form-item>
        <el-form-item label="发起时间:">
          <p class="cl-26 fs-14">2023-12-01</p>
        </el-form-item>
        <el-form-item label="提交人:">
          <p class="cl-26 fs-14">提交人名称</p>
        </el-form-item>
        <el-form-item label="审批人:">
          <p class="cl-26 fs-14">审批人名称</p>
        </el-form-item>
        <el-form-item label="审批描述:">
          <p class="cl-26 fs-14 lh-16">
            审批描述审批描述审批描述审批描述
          </p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import type { FormInstance } from 'element-plus'
import {
  Back, Position, CircleClose
} from '@element-plus/icons-vue'
const form = ref({
  name: '',
  sex: '',
})
// 表单校验
const rules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
    trigger: 'change',
  },],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ],
})
const isExamine: any = ref(false)
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
onBeforeMount(() => {
  router.currentRoute.value.query.isExamine ? isExamine.value = true : isExamine.value = false
})

// 返回上一级
const back = () => {
  router.push({
    name: "examineManage"
  })
}
// 确定新增审批提交
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
// 驳回审批
const reject = () => {
  console.log('驳回审批');
}
// 通过审批
const pass = () => {
  console.log('通过审批');
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