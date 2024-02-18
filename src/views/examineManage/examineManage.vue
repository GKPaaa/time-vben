<template>
  <div id="examine">
    <div class="topName">审批列表</div>
    <div class="search df jc-sb topSearch">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-form-item class="w-190" label="表单名称:">
          <el-input v-model="search.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item class="w-190" label="审批类型:">
          <el-select v-model="search.name" placeholder="请选择" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item class="w-190" label="审批人:">
          <el-input v-model="search.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item class="w-190" label="提交人:">
          <el-input v-model="search.name" placeholder="请输入" />
        </el-form-item>
        <el-form-item class="w-300" label="发起时间:">
          <el-date-picker v-model="search.name" type="daterange" range-separator="至" start-placeholder="开始时间"
            end-placeholder="结束时间" />
        </el-form-item>
      </el-form>
      <div class="w-180 df jc-fe">
        <el-button>
          <el-icon color="#1890FF">
            <Search />
          </el-icon>&nbsp;
          查询</el-button>
        <el-button>
          <el-icon color="#1890FF">
            <Refresh />
          </el-icon>&nbsp;
          重置</el-button>
      </div>
    </div>
    <div class="table">

      <div class="mb-20">
        <el-button>
          <el-icon color="#1890FF">
            <Delete />
          </el-icon>&nbsp;
          批量删除
        </el-button>
        <el-button>
          <el-icon color="#1890FF">
            <Upload />
          </el-icon>&nbsp;
          批量导出
        </el-button>
        <el-button @click="addExamine">
          <el-icon color="#1890FF">
            <Plus />
          </el-icon>&nbsp;
          新增审批
        </el-button>

      </div>
      <el-table height="630" :data="table.data" style="width: 100%;">
        <el-table-column type="selection" width="50" />
        <el-table-column prop="name" label="审批单" />
        <el-table-column prop="name" label="审批类型" />
        <el-table-column prop="name" label="发起时间" />
        <el-table-column prop="name" label="完成时间" />
        <el-table-column prop="name" label="提交人" />
        <el-table-column prop="name" label="审批人" />
        <el-table-column prop="name" label="审批状态" />
        <el-table-column prop="name" label="审批描述" />
        <el-table-column prop="name" label="操作">
          <template #default="">
            <el-button @click="goExamine" type="primary" link>审批</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination background v-model:current-page="table.page" v-model:page-size="table.pageSize"
          :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="400" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Search, Refresh, Upload, Plus, Delete
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";

const search = ref({
  name: ''
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
const router = useRouter()
// 新增审批
const addExamine = () => {
  router.push({
    name: "addExamine"
  })
}
// 去审批
const goExamine = () => {
  router.push({
    name: "addExamine",
    query: {
      isExamine: 'true'
    }
  })
}
</script>
<style lang="scss">
#examine {
  .el-form--inline .el-form-item {
    margin-right: 12px !important;
  }
}
</style>
<style lang="scss" scoped>
.topSearch {
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>