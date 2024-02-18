<template>
  <div>
    <div class="topName">信发列表</div>
    <div id="accountSearch" class="  bg-f df jc-sb pa-0240 ma-0240 br-4 pt-24">
      <div class="w-1100">
        <el-form :inline="true" :model="search" class="demo-form-inline">

          <el-form-item label="搜索:">
            <el-input v-model="search.name" placeholder="请输入关键词" :suffix-icon="Search" />
          </el-form-item>
          <el-form-item label="屏幕方向:">
            <el-select v-model="search.region" placeholder="请选择方向">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>

        </el-form>
      </div>


      <div>
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

    <div class="df jc-sb ma-0240 pt-24">
      <div class="bg-f w-260 mr-16 p-24" style="width: 20%;">
        <div class="mb-16">
          <el-input v-model="leftInfo.name" placeholder="输入组织名称搜索" class="input-with-select">
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
        <div>
          <el-tree show-checkbox ref="treeRef" :check-on-click-node="true" :data="leftInfo.data"
            :props="leftInfo.defaultProps" @check-change="handleCheckChange" />
        </div>
      </div>
      <div class="bg-f" style="width: 80%;padding: 24px;">
        <div class="mb-20">
          <el-button>
            <el-icon color="#1890FF">
              <Plus />
            </el-icon>&nbsp;
            新增资源
          </el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Position />
            </el-icon>&nbsp;
            轮播发布
          </el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Delete />
            </el-icon>&nbsp;
            批量删除</el-button>
        </div>

        <el-table height="630" :data="table.data" style="width: 100%;">
          <el-table-column type="selection" width="50" />
          <el-table-column prop="name" width="55" label="序号" />
          <el-table-column prop="name" label="编码" />
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="name" label="大小" />
          <el-table-column prop="name" label="类型" />
          <el-table-column prop="date" label="下发时间" />
          <el-table-column prop="name" label="下发进度" />
          <el-table-column prop="name" label="审核状态" />
          <el-table-column fixed="right" width="200" prop="address" label="操作">
            <template #default="">
              <el-button link type="primary" @click="release">发布</el-button>
              <el-button link type="primary">编辑</el-button>
              <el-button link type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
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
import {
  Search, Refresh, Plus, Delete, Position
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
const router = useRouter()
const treeRef = ref()
const search = ref({
  account: '',
  name: '',
  region: '',
  phone: '',

})
const leftInfo = ref({
  name: '',
  data: [
    {
      label: '衡朗科技',
      children: [
        {
          label: '新时气',
          children: [
            {
              label: '111',
            },
          ],
        },
        {
          label: '两广区域',
          children: [
            {
              label: '111',
            },
          ],
        },
        {
          label: '福建区域',
          children: [
            {
              label: '111',
            },
          ],
        },
        {
          label: '海南直营店',
          children: [
            {
              label: '111',
            },
          ],
        },
        {
          label: '北方市场',
          children: [
            {
              label: '111',
            },
          ],
        },
      ],
    },

  ],
  defaultProps: {
    children: 'children',
    label: 'label',
  }
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

const handleCheckChange = (
  data: any,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate)
}

// 发布
const release = () => {
  router.push({ name: 'releaseMessage' })
}
</script>

<style lang="scss">
#accountSearch {
  .el-form--inline .el-form-item {
    margin-right: 24px;
    margin-bottom: 16px;
  }

  .el-input {
    width: 166px;
  }
}
</style>
<style lang="scss" scoped >
.table {
  padding: 24px;
}
</style>