<template>
  <div>
    <div class="topName">工序流程管理</div>
    <div class="ma-0240 ">
      <div class="mb-16 bg-f br-4 h-80 df ai-ct pl-18 pr-18">
        <el-form :inline="true" :model="search">
          <el-form-item label="产品搜索:">
            <el-input class="w-224" v-model="search.code" placeholder="关键词" />
          </el-form-item>
          <el-form-item class="w-224" label="订单类型:">
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
          </el-icon>&nbsp;查询
        </el-button>
        <el-button>
          <el-icon color="#1890FF">
            <Refresh />
          </el-icon>&nbsp;重置
        </el-button>
      </div>
      <!-- 表格 -->
      <div class="bg-f h-770 pa-0240 br-4">
        <div class=" pt-24 mb-20">
          <el-button @click="add">
            <el-icon color="#1890FF">
              <Plus />
            </el-icon>&nbsp;
            新增
          </el-button>

          <el-button>
            <el-icon color="#1890FF">
              <Download />
            </el-icon>&nbsp;产品代码维护导入
          </el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Upload />
            </el-icon>&nbsp;
            工序流程导出
          </el-button>

        </div>

        <div>
          <el-table height="630" :data="table.data" style="width: 100%">
            <el-table-column type="selection" width="50" />
            <el-table-column prop="name" width="55" label="序号" />
            <el-table-column prop="name" label="产品代码" />
            <el-table-column prop="name" label="订单类型" />
            <el-table-column prop="name" label="工序名称列表" />
            <el-table-column prop="name" label="工序总数" />
            <el-table-column prop="date" label="工序流程id" />
            <el-table-column prop="name" label="是否绑定" />
            <el-table-column prop="name" label="操作">
              <template #default="scope">
                <el-button link style="margin-left: 0;" type="primary"
                  @click="editinfo(ruleFormRef, scope)">编辑</el-button>
                <el-button link style="margin-left: 0;" type="danger">删除</el-button>
                <!-- <el-button link style="margin-left: 0;" type="primary" @click="lookinfo(scope)">查看详情</el-button> -->
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
    <el-drawer :z-index="99" destroy-on-close :size="860" v-model="edit.show" :with-header="false">
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="edit.rules" :model="edit.form" label-width="100px">
        <div class="title">编辑工序</div>
        <div class="df">
          <div class="w-50p">
            <el-form-item label="订单类型:" prop="name">
              <el-select class="w-100p" v-model="edit.form.name" placeholder="请选择" clearable>
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="流程ID:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
            <el-form-item label="物料规格:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
            <el-form-item label="不锈钢丝规格:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
            <el-form-item label="工序数量:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
          </div>
          <div class="w-50p">
            <el-form-item label="分类:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
            <el-form-item label="产品代码:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
            <el-form-item label="无聊名称:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
            <el-form-item label="长度:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
            <el-form-item label="基准元:" prop="name">
              <el-input v-model="edit.form.name" />
            </el-form-item>
          </div>

        </div>
        <div class="title mt-24">
          新增工序
          <div>
            <el-button @click="addprocess">
              <el-icon color="#1890FF">
                <Plus />
              </el-icon>&nbsp;
              新增
            </el-button>
            <!-- <el-button>
              <el-icon color="#1890FF">
                <Edit />
              </el-icon>&nbsp;
              编辑
            </el-button> -->
          </div>
        </div>
        <el-table :data="edit.table.data" style="width: 100%">
          <el-table-column type="index" width="60" label="序号" />
          <el-table-column prop="name" label="工序名称" />
          <el-table-column prop="name" label="工序编码" />
          <el-table-column prop="name" label="基础价格" />
          <el-table-column prop="name" label="单位" />
          <el-table-column prop="date" label="折算系数">
            <template #default="scope">
              <el-input v-model="scope.row.zhesuanxishu" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="折算价格">
            <template #default="scope">
              <el-input v-model="scope.row.zhesuan" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="操作">
            <template #default="scope">
              <el-button link style="margin-left: 0;" type="danger" @click="editdel(scope)">删除</el-button>
              <!-- <el-button link style="margin-left: 0;" type="primary" @click="lookinfo(scope)">查看详情</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </el-form>
      <template #footer>
        <div class="df ai-ct jc-ct">
          <el-button class="w-224" style="height: 40px;" @click="edit.show = false">取消</el-button>
          <el-button class="w-224" style="height: 40px;" type="primary">确定</el-button>
        </div>
      </template>
    </el-drawer>

    <!-- 新增工序 -->
    <el-dialog :z-index="991" destroy-on-close width="830" v-model="process.show" close-icon="null" align-center center
      draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">新增工序</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>


      <div class="df jc-sb ai-ct">

        <div class="processlist">
          <div class="tit">
            <div class="cl-6 fs-16 df ai-ct">
              <el-checkbox :indeterminate="process.listnotall" v-model="process.listcheckAll"
                @change="handleCheckAlllist"></el-checkbox>
              <div class="ml-12">{{ process.checknum }}/{{ process.listnum }}条</div>

            </div>
            <div>源列表</div>
          </div>
          <div class="content">
            <el-input v-model="process.listsearch" style="width: 180px;margin: 0 6px;" placeholder="请输入搜索内容"
              :suffix-icon="Search" />
            <div class="contentlist">
              <el-checkbox-group @change="checklist" v-model="process.checklist">
                <el-checkbox :label="item.id" v-for="(item) in process.list" :key="item.id" class="w-100p">
                  <div class="df jc-sb w-320">
                    <div>{{ item.name }}</div>
                    <div>{{ item.title }}</div>
                  </div>
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>

        <div>
          <div class="box">
            <el-icon size="26">
              <ArrowRight />
            </el-icon>
          </div>
          <div class="box">
            <el-icon size="26">
              <ArrowLeft />
            </el-icon>
          </div>
        </div>
        <div class="processlist">
          <div class="tit">
            <div class="cl-6 fs-16 df ai-ct">
              <el-checkbox :indeterminate="process.targetnotall" v-model="process.targetcheckAll"
                @change="handleCheckAllChange"></el-checkbox>
              <div class="ml-12">
                {{ process.targetnum }}条
              </div>

            </div>
            <div>目的列表</div>

          </div>
          <div class="content">
            <el-input v-model="process.listsearch" style="width: 180px;margin: 0 6px;" placeholder="请输入搜索内容"
              :suffix-icon="Search" />
            <div class="contentlist">
              <el-checkbox-group @change="targetchecklist" v-model="process.targetchecklist">
                <el-checkbox :label="item.id" v-for="(item) in process.targetlist" :key="item.id" class="w-100p">
                  <div class="df jc-sb w-320">
                    <div>{{ item.name }}</div>
                    <div>{{ item.title }}</div>
                  </div>
                </el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
        </div>

      </div>




      <template #footer>
        <span class="dialog-footer">
          <el-button @click="process.show = false">取消</el-button>
          <el-button type="primary" @click="process.show = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import {
  Download, Upload, Plus, Refresh, Search, CircleCloseFilled, ArrowRight, ArrowLeft
} from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import { useRouter } from "vue-router";
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
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
  rules: [],
  table: {
    data: [
      {
        name: 11,
        date: 2023 - 10.10,
        address: '112233221',
        zhesuan: 10
      },
      {
        name: 11,
        date: 2023 - 10.10,
        address: '112233221',
        zhesuan: ''
      }
    ]
  }
})
const process = ref({
  show: false,
  list: [
    {
      name: '裸管组绕黄',
      title: 'THG01',
      id: 1
    },
    {
      name: '裸管组绕黄1',
      title: 'THG012',
      id: 2
    },
    {
      name: '裸管组绕黄2',
      title: 'THG013',
      id: 3
    },
    {
      name: '裸管组绕黄3',
      title: 'THG014',
      id: 4
    },
    {
      name: '裸管组绕黄4',
      title: 'THG015',
      id: 5
    },
    {
      name: '裸管组绕黄5',
      title: 'THG016',
      id: 6
    },
  ],
  checklist: [],
  listnum: 100,
  listsearch: '',
  checknum: 10,
  checksearch: '',
  listnotall: false,
  listcheckAll: false,
  targetlist: [
    {
      name: '裸管组绕黄',
      title: 'THG01',
      id: 1
    },
    {
      name: '裸管组绕黄1',
      title: 'THG012',
      id: 2
    },
  ],
  targetnum: 6,
  targetchecklist: [
  ],
  targetcheckAll: false,
  targetnotall: false
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
// 删除
const editdel = (e: any) => {
  console.log(e);
}
// 新增工序
const addprocess = () => {
  process.value.show = true
}
// 新增工序-选择工序
const checklist = () => {
  console.log(process.value.checklist);
}
// 新增工序-目标列表
const targetchecklist = () => {
  console.log(process.value.targetchecklist);
}
// 目标列表是否全选
const handleCheckAllChange = (val: boolean) => {

  let arr: any = process.value.targetlist.map(item => item.id)
  val ? process.value.targetchecklist = arr : process.value.targetchecklist = []
}
const handleCheckAlllist = (val: boolean) => {
  let arr: any = process.value.list.map(item => item.id)
  val ? process.value.checklist = arr : process.value.checklist = []
}


watchEffect(() => {
  process.value.targetcheckAll = process.value.targetchecklist.length == process.value.targetlist.length
  process.value.targetnotall = process.value.targetchecklist.length > 0 && process.value.targetchecklist.length !== process.value.targetlist.length
  process.value.listcheckAll = process.value.list.length == process.value.checklist.length
  process.value.listnotall = process.value.checklist.length > 0 && process.value.list.length !== process.value.checklist.length
})
// 新增工序流程
const add = () => {
  router.push({ name: "addProcessflow" })
}
</script>

<style scoped lang="scss">
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

.processlist {
  width: 360px;
  height: 600px;
  border: 1px solid #ddd;

  .tit {
    height: 40px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

    .ins {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1890FF;
      font-weight: 700;
      border: 1px solid #ddd;
      cursor: pointer;
    }
  }

  .content {
    margin-top: 8px;

    .contentlist {
      padding: 0 18px 0 6px;
      height: 518px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }
}

.box {
  width: 36px;
  height: 36px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 6px 12px;
  cursor: pointer;

  &:hover {
    background-color: #1890FF;
    color: #fff;
  }
}
</style>