<template>
  <div>
    <div class="topName">工序列表</div>
    <div class="ma-0240 ">
      <div class="mb-16 bg-f br-4 h-80 df ai-ct pl-18 pr-18">
        <el-form :inline="true" :model="search">

          <el-form-item class="w-224" label="筛选条件:">
            <el-select v-model="search.type" placeholder="请选择" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item class="w-224" label="区域选择:">
            <el-select v-model="search.type" placeholder="请选择" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="搜索:">
            <el-input class="w-224" :suffix-icon="Search" v-model="search.code" placeholder="关键词" />
          </el-form-item>
        </el-form>
        <div class="fl-1"></div>
        <el-button>
          <el-icon color="#1890FF">
            <Search />
          </el-icon>&nbsp;查询
        </el-button>

        <el-button><el-icon color="#1890FF">
            <Refresh />
          </el-icon>&nbsp;重置</el-button>
      </div>
      <!-- 表格 -->
      <div class="bg-f h-770 pa-0240 br-4">
        <div class=" pt-24 mb-20">
          <el-button @click="editinfo(ruleFormRef, 'add')">
            <el-icon color="#1890FF">
              <Plus />
            </el-icon>&nbsp;
            新增
          </el-button>

          <el-button>
            <el-icon color="#1890FF">
              <Delete />
            </el-icon>&nbsp;删除
          </el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Upload />
            </el-icon>&nbsp;
            导出
          </el-button>

        </div>

        <div>
          <el-table height="630" :data="table.data" style="width: 100%">
            <el-table-column type="selection" width="50" />
            <el-table-column prop="name" width="55" label="序号" />
            <el-table-column prop="name" label="工序名称" />
            <el-table-column prop="name" label="工序编码" />
            <el-table-column prop="name" label="工段" />
            <el-table-column prop="name" label="工序类型" />
            <el-table-column prop="date" label="工序描述" />
            <el-table-column prop="name" label="状态" />
            <el-table-column prop="name" label="操作">
              <template #default="scope">
                <el-button link style="margin-left: 0;" type="primary"
                  @click="editinfo(ruleFormRef, scope)">编辑</el-button>
                <el-button link style="margin-left: 0;" type="primary" @click="lookinfo(scope)">查看详情</el-button>
                <el-button link style="margin-left: 0;" type="primary">禁用</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination background v-model:current-page="table.page" v-model:page-size="table.pageSize"
            :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="400" />

        </div>
      </div>
    </div>


    <!-- 编辑部分 -->
    <el-drawer :size="600" v-model="edit.show" :with-header="false">
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="edit.rules" :model="edit.form" label-width="80px">
        <div class="title">编辑工序</div>
        <el-form-item label="工序名称:" prop="name">
          <el-input v-model="edit.form.name" />
        </el-form-item>
        <el-form-item label="工序编码:" prop="name">
          <el-input v-model="edit.form.name" />
        </el-form-item>
        <el-form-item label="工段:" prop="name">
          <el-input v-model="edit.form.name" />
        </el-form-item>
        <el-form-item label="工序类型:" prop="name">
          <el-input v-model="edit.form.name" />
        </el-form-item>
        <el-form-item label="状态:" prop="name">
          <el-select class="w-100p" v-model="edit.form.name" placeholder="请选择" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="工序描述:" prop="name">
          <el-input v-model="edit.form.name" type="textarea" />
        </el-form-item>
        <div class="title">工价设定</div>
        <el-form-item label="基础价格:" prop="name">
          <el-input v-model="edit.form.name" placeholder="请输入基础价格" class="input-with-select">
            <template #append>
              <el-select v-model="edit.form.type" placeholder="Select" style="width: 115px">
                <el-option label="元/件" value="1" />
                <el-option label="件/元" value="2" />
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="折算系数:" prop="name">
          <el-input v-model="edit.form.name" />
        </el-form-item>
        <el-form-item label="折算价格:" prop="name">
          <el-input v-model="edit.form.name" placeholder="请输入折算价格" class="input-with-select">
            <template #append>
              <el-select v-model="edit.form.type" placeholder="Select" style="width: 115px">
                <el-option label="元/件" value="1" />
                <el-option label="件/元" value="2" />
              </el-select>
            </template>
          </el-input>
        </el-form-item>

      </el-form>
      <template #footer>
        <div class="df ai-ct jc-ct">
          <el-button class="w-224" style="height: 40px;" @click="edit.show = false">取消</el-button>
          <el-button class="w-224" style="height: 40px;" type="primary">确定</el-button>
        </div>
      </template>
    </el-drawer>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Search, Upload, Plus, Delete, Refresh
} from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const search = ref({
  code: '',
  type: ''
})
const table = ref({
  data: [{
    name: 11,
    date: 2023 - 10.10,
    address: '112233221'
  }],
  page: 1,
  pageSize: 10,

})
const edit = ref({
  show: false,
  form: {
    name: '',
    type: '1'
  },
  rules: []
})
// 编辑
const editinfo = (formEl: FormInstance | undefined, e: any) => {
  console.log(e);
  if (!formEl) {
    edit.value.show = true
  } else {
    formEl.resetFields()
    edit.value.show = true
  }
}
// 查看详情
const lookinfo = (e: any) => {
  console.log(e);
  router.push({
    name: "lookprocess"
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