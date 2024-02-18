<template>
  <div>
    <div class="topName df jc-sb">
      <div>领料列表</div>
      <div class="pr-24">
        <el-button>
          <el-icon color="#1890FF">
            <Management />
          </el-icon> &nbsp;
          保存
        </el-button>
        <el-button>
          <el-icon color="#1890FF">
            <CircleCloseFilled />
          </el-icon> &nbsp;
          取消
        </el-button>
      </div>
    </div>


    <div class="table">
      <div class="mb-20">
        <el-button>
          <el-icon color="#1890FF">
            <Plus />
          </el-icon>&nbsp;
          新增
        </el-button>

        <el-button>
          <el-icon color="#1890FF">
            <Select />
          </el-icon>&nbsp;提交
        </el-button>
        <el-button>
          <el-icon color="#1890FF">
            <Delete />
          </el-icon>&nbsp;
          删除
        </el-button>

      </div>
      <el-table height="630" border :data="table.data" style="width: 100%">
        <el-table-column type="selection" width="50" />
        <el-table-column prop="name" width="55" label="序号" />
        <el-table-column prop="name" label="物料编码" />
        <el-table-column prop="name" label="物料名称" />
        <el-table-column prop="name" label="物料型号" />
        <el-table-column prop="name" label="物料描述" />
        <el-table-column prop="date" label="单位">

        </el-table-column>
        <el-table-column prop="name" label="数量" width="95">
          <template #default="scope">
            <el-input v-model="scope.row.num" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="库存" width="95">
          <template #default="scope">
            <el-input disabled v-model="scope.row.kucun" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="操作">
          <template #default="">
            <el-button link style="margin-left: 0;" type="primary">
              <el-icon>
                <Plus />
              </el-icon>
            </el-button>
            <el-button link style="margin-left: 0;" type="danger">
              <el-icon>
                <Minus />
              </el-icon>
            </el-button>
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
  Management, CircleCloseFilled, Plus, Minus, Select, Delete
} from '@element-plus/icons-vue'
const table = ref({
  data: [{
    name: 11,
    date: '还是就看见哈师大圣诞节哈撒大家按时打卡机',
    address: '112233221',
    kucun: 16,
  },
  {
    name: 6,
    date: '的撒德哈时间',
    address: '666888999',
    kucun: 164,
  }
  ],
  page: 1,
  pageSize: 10,
})
</script>

<style lang="scss" scoped></style>