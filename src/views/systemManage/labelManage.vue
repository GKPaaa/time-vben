<template>
  <div>
    <div class="topName">门店标签管理</div>
    <div class="search h-80 df jc-sb ai-ct">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-form-item label="搜索:">
          <el-input v-model="search.str" placeholder="输入组织名称搜索" style="width: 220px;" class="input-with-select">
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button @click="addLabel(ruleFormRef)">
          <el-icon color="#1890FF">
            <Plus />
          </el-icon>&nbsp;
          新增变迁
        </el-button>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table ">
      <el-table height="630" :data="table.data" style="width: 100%; " row-key="id" default-expand-all>
        <el-table-column prop="date" label="标签名称">
        </el-table-column>
        <el-table-column prop="name" label="标签编码" />
        <el-table-column prop="name" label="创建时间" />
        <el-table-column prop="name" label="修改时间" />
        <el-table-column prop="name" label="操作">
          <template #default="scope">
            <el-button link type="primary" @click="addLabel(scope)">
              编辑
            </el-button>
            <el-button link type="danger" @click="addLabel(scope)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background v-model:current-page="table.page" v-model:page-size="table.pageSize"
          :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="400" />
      </div>
    </div>

    <!-- 新增标签-->
    <el-dialog v-model="label.show" width="600" close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">新增标签</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <el-form ref="ruleFormRef" :model="label.form" :rules="label.rules" label-width="160px" class="demo-ruleForm">
        <el-form-item class="w-400" label="组织名称:" prop="name">
          <el-input v-model="label.form.name" />
        </el-form-item>
        <el-form-item class="w-400" label="组织代码:" prop="code">
          <el-input v-model="label.form.code" />
        </el-form-item>
        <el-form-item class="w-400" label="描述:" prop="desc">
          <el-input v-model="label.form.desc" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="label.show = false">取消</el-button>
          <el-button type="primary" @click="labelChange(ruleFormRef)">
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
  Search, Plus, CircleCloseFilled
} from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'

const search = ref({
  str: ''
})
// 表格数据
const table = ref({
  data: [{
    name: 11,
    date: 2023 - 10.10,
    address: '112233221'
  }],
  page: 1,
  pageSize: 10,
})
// 标签编辑部分
const ruleFormRef = ref<FormInstance>()
const label = ref({
  title: '新增标签',
  show: false,
  form: {
    name: '',
    code: '',
    desc: ''
  },
  rules: {
    name: [{
      required: true,
      message: '请输入标签名称',
    }]
  }

})
// 新增标签
const addLabel = (formEl: any) => {
  if (!formEl) {
    label.value.show = true
  } else {
    formEl.resetFields()
    label.value.show = true
  }
}
// 修改状态
const labelChange = async (formEl: FormInstance | undefined) => {
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

<style lang="scss" scoped></style>