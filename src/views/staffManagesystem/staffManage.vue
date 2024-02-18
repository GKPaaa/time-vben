<template>
  <div>
    <div class="topName">
      员工管理系统
    </div>
    <div class="ma-0240">
      <div class="mb-16 bg-f br-4 h-80 df ai-ct pl-18 pr-18">
        <el-form :inline="true" :model="search">
          <el-form-item label="关键字搜索:">
            <el-input class="w-224" v-model="search.str" placeholder="关键词" />
          </el-form-item>
          <el-form-item class="w-224" label="筛选条件:">
            <el-select v-model="search.type" placeholder="请选择" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
        <div class="fl-1"></div>
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
      <!-- 表格 -->
      <div class="bg-f h-770 pa-0240 br-4">
        <div class="pt-24 mb-20">
          <el-button>
            <el-icon color="#1890FF">
              <Plus />
            </el-icon>&nbsp;
            添加
          </el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Delete />
            </el-icon>&nbsp;
            删除</el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Download />
            </el-icon>&nbsp;导入
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
            <el-table-column prop="name" label="姓名" />
            <el-table-column prop="name" label="性别" />
            <el-table-column prop="name" label="工号" />
            <el-table-column prop="name" label="归属组织" />
            <el-table-column prop="date" label="部门" />
            <el-table-column prop="name" label="岗位" />
            <el-table-column prop="name" label="在职信息" />
            <el-table-column prop="name" label="入职时间" />
            <el-table-column prop="name" label="工龄" />
            <el-table-column prop="address" label="手机号码" />
            <el-table-column prop="address" label="身份证号" />
            <el-table-column prop="address" label="学历" />
            <el-table-column prop="address" label="操作">
              <template #default="scope">
                <el-button link type="primary" @click="goStaff(scope, 'edit')">编辑</el-button>
                <el-button link style="margin-left: 0;" type="primary" @click="goStaff(scope, 'look')">查看详情</el-button>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
import {
  Search,
  Refresh,
  Delete, Download, Upload, Plus
} from '@element-plus/icons-vue'
const search = ref({
  str: '',
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
// 编辑和查看员工信息
const goStaff = (e: any, a: any) => {
  router.push({ name: 'changeStaff', query: { type: a, id: e } })
}
</script>

<style lang="scss" scoped></style>