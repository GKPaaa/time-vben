<template>
  <div>
    <div class="topName">角色管理</div>
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
        <el-button @click="add(ruleFormRef)">
          <el-icon color="#1890FF">
            <Plus />
          </el-icon>&nbsp;
          新增角色
        </el-button>
        <el-button @click="remove">
          <el-icon color="#1890FF">
            <Delete />
          </el-icon>&nbsp;
          删除角色
        </el-button>
      </div>
    </div>
    <!-- 表格 -->
    <div class="table ">
      <el-table @selection-change="handleSelectionChange" height="630" :data="table.data" style="width: 100%; "
        row-key="id" default-expand-all>
        <el-table-column type="selection" width="55" />
        <el-table-column prop="date" label="角色名称">
        </el-table-column>
        <el-table-column prop="name" label="权限" />
        <el-table-column prop="name" label="角色描述" />
        <el-table-column prop="name" label="操作">
          <!-- <template #default="scope">
            <el-button link type="primary" @click="addLabel(scope)">
              编辑
            </el-button>
            <el-button link type="danger" @click="addLabel(scope)">
              删除
            </el-button>
          </template> -->
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background v-model:current-page="table.page" v-model:page-size="table.pageSize"
          :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="400" />
      </div>
    </div>

    <!-- 新增和编辑角色抽屉 -->
    <el-drawer size="50%" v-model="role.show" :with-header="false">
      <div class="title">新增/编辑角色</div>
      <el-form ref="ruleFormRef" :model="role.form" :rules="role.rules" label-width="120px" class="demo-ruleForm">
        <el-form-item label="角色名称:" prop="name">
          <el-input v-model="role.form.name" />
        </el-form-item>
        <el-form-item label="角色描述:" prop="desc">
          <el-input v-model="role.form.desc" type="textarea" />
        </el-form-item>
        <el-form-item label="系统权限:" prop="quanxian">
          <el-table :data="role.data" style="width: 100%;" row-key="id">
            <el-table-column prop="date" width="180" label="模块" />
            <el-table-column prop="name" label="功能">
              <template #default="scope">
                <el-checkbox v-for="(item, index) in scope.row.name" :key="index" v-model="item.ischeck"
                  :label="item.name" />
              </template>
            </el-table-column>
          </el-table>

        </el-form-item>
      </el-form>

      <template #footer>
        <div class="ta-c">
          <el-button @click="role.show = false">取消</el-button>
          <el-button type="primary" @click="confirm(ruleFormRef)">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Search, Plus, Delete
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
// 新增和编辑角色
const ruleFormRef = ref<FormInstance>()
const role = ref({
  show: false,
  form: {
    name: '',
    desc: ''
  },
  rules: {
    name: [{
      required: true,
      message: "请输入角色名称"
    }],
    desc: [{
      required: true,
      message: "请输入角色描述"
    }]
  },
  data: [
    {
      id: 3,
      date: '首页',
      children: [
        {
          id: 31,
          date: '首页首页首页首页',
          name: [
            { name: 'wangxiaohu', ischeck: false },
            { name: 'a', ischeck: false },
            { name: 'd', ischeck: false },
            { name: 'c', ischeck: false },
            { name: 'd', ischeck: false },
          ],
          address: 'No. 189, Grove St, Los Angeles',
        }
      ],
    },
    {
      id: 4,
      date: '2016-05-03',
    },
  ]

})
//表格中选中的数据
const handleSelectionChange = (val: any) => {
  console.log(val);
}
// 删除角色
const remove = () => {
  console.log('删除角色');
}
// 新增角色
const add = (formEl: any) => {
  if (!formEl) {
    role.value.show = true
  } else {
    formEl.resetFields()
    role.value.show = true
  }
}
// 确定新增或编辑角色
const confirm = async (formEl: FormInstance | undefined) => {
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