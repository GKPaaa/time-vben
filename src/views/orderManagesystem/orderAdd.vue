<template>
  <div>
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        添加订单
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


    <div class="m-24 bg-f p-24 br-4">
      <div class="title">基本信息</div>
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="100px">
        <div class="df jc-sb">
          <div class="w-30p">
            <el-form-item label="订单编码:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="订单号:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="订单类型:">
              <el-select style="width: 100%;" v-model="form.name" placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="规格:">
              <el-input v-model="form.name" />
            </el-form-item>





          </div>
          <div class="w-30p">
            <el-form-item label="计划开单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="计划接单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="实际开单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="实际接单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
          </div>
          <div class="w-30p">
            <el-form-item label="订单状态:">
              <el-select style="width: 100%;" v-model="form.name" placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>



    <div class="m-24 p-24 bg-f br-4">
      <div class="title">资源</div>
      <div>
        <el-table :data="table.data1" max-width="100%" style="width: 100%">
          <el-table-column type="index" width="55" label="序号" />
          <el-table-column prop="code" width="140" label="序号" />
          <el-table-column v-for="(item) in 6" min-width="130" :label="'标题' + item">
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
    </div>

    <div class="m-24 bg-f p-24 br-4">
      <div class="title">订单统计参数</div>
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="100px">
        <div class="df jc-sb">
          <div class="w-30p">
            <el-form-item label="订单编码:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="订单号:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="订单类型:">
              <el-select style="width: 100%;" v-model="form.name" placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="规格:">
              <el-input v-model="form.name" />
            </el-form-item>





          </div>
          <div class="w-30p">
            <el-form-item label="计划开单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="计划接单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="实际开单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
            <el-form-item label="实际接单时间:">
              <el-date-picker style="width: 100%;" v-model="form.name" type="date" placeholder="Pick a day" />
            </el-form-item>
          </div>
          <div class="w-30p">
            <el-form-item label="订单状态:">
              <el-select style="width: 100%;" v-model="form.name" placeholder="请选择">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>




    <div class="ma-0240  p-24 bg-f br-4">

      <div class="title jc-sb">
        <div>订单BOM</div>
        <div>
          <el-button class="ml-12" @click="addTable.show = true">
            <el-icon color="#1890FF">
              <Plus />
            </el-icon>&nbsp;
            添加
          </el-button>
        </div>
      </div>
      <el-table height="360" :data="table.data" style="width: 100%;">
        <el-table-column prop="name" width="55" label="序号" />
        <el-table-column prop="name" label="BOM序号" />
        <el-table-column prop="name" label="BOM编码" />
        <el-table-column prop="name" label="BOM名称" />
        <el-table-column prop="name" label="BOM类型" />
        <el-table-column prop="date" label="创建人" />
        <el-table-column prop="name" label="版本" />
        <el-table-column fixed="right" width="100" prop="address" label="操作">
          <template #default="">
            <el-button link type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>




    <!-- 添加 -->
    <el-dialog destroy-on-close center v-model="addTable.show" width="800" close-icon="null" align-center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">添加BOM</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <div>

        <el-form ref="ruleFormRef" :model="addTable" :rules="addTable.rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="BOM序号:" prop="code">
            <el-input v-model="addTable.name" />
          </el-form-item>
          <el-form-item label="BOM编码:" prop="desc">
            <el-input v-model="addTable.name" />
          </el-form-item>
          <el-form-item label="BOM类型:">
            <el-select class="w-100p" v-model="addTable.name" placeholder="请选择" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="创建人:" prop="desc">
            <el-input v-model="addTable.name" />
          </el-form-item>
          <el-form-item label="版本:" prop="desc">
            <el-input v-model="addTable.name" />
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addTable.show = false">取消</el-button>
          <el-button type="primary" @click="addTable.show = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
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
const addTable = ref({
  show: false,
  rules: [],
  name: '',
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
  data1: [
    {
      code: 'SH853764589548'
    },
    {
      code: 'SH853764589528'
    },
    {
      code: 'SH853764589518'
    },
  ],
  page: 1,
  pageSize: 10,
})
// 返回表格
const back = () => {
  router.push({ name: 'orderManage' })
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