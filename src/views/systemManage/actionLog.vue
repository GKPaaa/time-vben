<template>
  <div>
    <div class="topName">操作日志</div>
    <div class="search h-80 df jc-sb ai-ct">
      <el-form :inline="true" :model="search" class="demo-form-inline">
        <el-form-item label="操作日期:">
          <el-date-picker v-model="search.time" type="daterange" range-separator="~" start-placeholder="开始日期"
            end-placeholder="结束日期" />
        </el-form-item>
        <el-form-item label="搜索:">
          <el-input v-model="search.str" placeholder="输入组织名称搜索" style="width: 220px;" class="input-with-select">
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button><el-icon color="#1890FF">
            <Search />
          </el-icon>&nbsp;查询</el-button><el-button><el-icon color="#1890FF">
            <Refresh />
          </el-icon>&nbsp;重置</el-button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table">
      <div class="mb-20">
        <el-button>
          <el-icon color="#1890FF">
            <Upload />
          </el-icon>&nbsp;
          导出
        </el-button>
      </div>
      <el-table height="630" :data="table.data" style="width: 100%">
        <el-table-column type="index" width="55" label="序号" />
        <el-table-column prop="name" label="用户名" />
        <el-table-column prop="name" label="操作内容" />
        <el-table-column prop="name" label="访问IP" />
        <el-table-column prop="name" label="操作时间" />
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
  Search, Refresh, Upload
} from '@element-plus/icons-vue'
const search = ref({
  str: '',
  time: []
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
</script>

<style lang="scss" scoped></style>