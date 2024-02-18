<template>
  <div id="equipManage">
    <div class="topName">设备管理</div>
    <div class="m-24 df jc-sb">
      <div class="w-33p pl-24 h-200 br-4 df cl-f ai-ct bg-f linenum">
        <div class="mr-24">
          <el-icon size="60">
            <List />
          </el-icon>
        </div>
        <div>
          <p class="fs-24">设备总数</p>
          <p class="fs-48">92</p>
        </div>
      </div>
      <div class="w-33p pl-24 h-200 br-4 df cl-f ai-ct bg-f offline">
        <div class="mr-24">
          <el-icon size="60">
            <Checked />
          </el-icon>
        </div>
        <div>
          <p class="fs-24">设备在线率</p>
          <p class="fs-48">92%</p>
        </div>
      </div>
      <div class="w-33p pl-24 h-200 br-4 df cl-f ai-ct bg-f online">
        <div class="mr-24">
          <el-icon size="60">
            <Failed />
          </el-icon>
        </div>
        <div>
          <p class="fs-24">设备离线率</p>
          <p class="fs-48">21%</p>
        </div>
      </div>
    </div>


    <div class="ma-0240 df jc-sb mh-500">
      <div class="w-260 bg-f br-4 p-24">
        <div>
          <el-input v-model="leftInfo.name" placeholder="输入关键字搜索" class="input-with-select">
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
        <el-tree class="mt-24" :data="leftInfo.data" show-checkbox />
      </div>
      <div style="width: calc(100% - 284px);">
        <div class="br-4 bg-f mb-16 h-128 df jc-sb p-24">
          <div class="w-850">
            <el-form :inline="true" :model="search" class="demo-form-inline">
              <el-form-item label="关键词：">
                <el-input v-model="search.name" placeholder="Approved by" clearable />
              </el-form-item>
              <el-form-item label="在线状态：">
                <el-select class="w-160" v-model="search.name" placeholder="Activity zone" clearable>
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="门店：">
                <el-select class="w-160" v-model="search.name" placeholder="Activity zone" clearable>
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="设备类型：">
                <el-select class="w-160" v-model="search.name" placeholder="Activity zone" clearable>
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="设备类型：">
                <el-select class="w-160" v-model="search.name" placeholder="Activity zone" clearable>
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





        <div class="br-4 bg-f p-24">
          <div class="mb-20">
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
            <el-button @click="addInfo.show = true">
              <el-icon color="#1890FF">
                <Plus />
              </el-icon>&nbsp;
              新增设备
            </el-button>
          </div>
          <el-table height="630" :data="table.data" style="width: 100%;">
            <el-table-column type="selection" width="50" />
            <el-table-column prop="name" width="55" label="序号" />
            <el-table-column prop="name" label="门店名称" />
            <el-table-column prop="name" label="门店编码" />
            <el-table-column prop="name" label="设备类型" />
            <el-table-column prop="name" label="序列号" />
            <el-table-column prop="date" label="在线状态" />
            <el-table-column prop="name" min-width="110" label="配方更新时间" />
            <el-table-column prop="name" min-width="110" label="设备激活时间" />
            <el-table-column prop="name" min-width="120" label="上线/离线时间" />
            <el-table-column prop="address" label="门店编码" />
            <el-table-column prop="address" label="身份证号" />
            <el-table-column prop="address" label="学历" />
            <el-table-column fixed="right" width="120" prop="address" label="操作">
              <template #default="scope">
                <el-button type="primary" @click="look(scope)" link>
                  查看
                </el-button>
                <el-button type="danger" link>
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
      </div>
    </div>



    <!-- 新增和编辑设备 -->
    <el-drawer :z-index="99" destroy-on-close :size="860" v-model="addInfo.show" :with-header="false">
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="addInfo.rules" :model="addInfo" label-width="120px">
        <div class="title">基本信息</div>
        <el-form-item label="门店名称:" prop="name">
          <el-input v-model="addInfo.name" />
        </el-form-item>
        <el-form-item label="门店编码:" prop="name">
          <el-input v-model="addInfo.name" />
        </el-form-item>
        <el-form-item label="设备类型:" prop="name">
          <el-select class="w-100p" v-model="addInfo.name" placeholder="请选择" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>

        <el-form-item label="序列号:" prop="name">
          <el-input v-model="addInfo.name" />
        </el-form-item>
        <el-form-item label="在线状态:" prop="name">
          <el-select class="w-100p" v-model="addInfo.name" placeholder="请选择" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="配方更新时间:">
          <el-date-picker style="width: 100%;" v-model="addInfo.name" type="date" placeholder="Pick a day" />
        </el-form-item>
        <el-form-item label="设备激活时间:">
          <el-date-picker style="width: 100%;" v-model="addInfo.name" type="date" placeholder="Pick a day" />
        </el-form-item>
        <el-form-item label="上线/离线时间:">
          <el-date-picker style="width: 100%;" v-model="addInfo.name" type="date" placeholder="Pick a day" />
        </el-form-item>

        <el-form-item label="门店编码:" prop="name">
          <el-input v-model="addInfo.name" />
        </el-form-item>

      </el-form>
      <template #footer>
        <div class="df ai-ct jc-ct">
          <el-button class="w-224" style="height: 40px;" @click="addInfo.show = false">取消</el-button>
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
  Search, Refresh, Download, Upload, List, Checked, Failed, Plus
} from '@element-plus/icons-vue'
const router = useRouter()
const leftInfo = ref({
  name: "",
  data: [{
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 3,
        label: 'Level two 2-1',
        children: [
          {
            id: 4,
            label: 'Level three 3-1-1',
          },
          {
            id: 5,
            label: 'Level three 3-1-2',
            disabled: true,
          },
        ],
      },
      {
        id: 2,
        label: 'Level two 2-2',
        disabled: true,
        children: [
          {
            id: 6,
            label: 'Level three 3-2-1',
          },
          {
            id: 7,
            label: 'Level three 3-2-2',
            disabled: true,
          },
        ],
      },
    ],
  },]
})
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

const addInfo = ref({
  show: false,
  name: "",
  time: '',
  type: "",
  rules: []
})

// 查看
const look = (e: any) => {
  console.log(e);
  router.push({
    name: 'changeEquip'
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
  justify-content: space-between;
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

.linenum {
  background-color: #46a4f8;
}

.offline {
  background-color: #87ed68;

}

.online {
  background-color: #fa9e8f;

}
</style>
<style lang="scss">
#equipManage {
  .el-form--inline .el-form-item {
    margin-bottom: 16px;
  }
}
</style>