<template>
  <div>
    <div class="topName">订单看板</div>
    <div class="table">
      <el-table height="880" :data="table.data" max-width="100%" style="width: 100%">
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
      <div class="pagination">
        <el-pagination background v-model:current-page="table.page" v-model:page-size="table.pageSize"
          :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="400" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const table = ref({
  data: [
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
</script>

<style lang="scss" scoped></style>