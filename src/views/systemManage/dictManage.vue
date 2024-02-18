<template>
  <div>
    <div class="topName">字典管理</div>
    <div class="ma-0240 bg-f h-80 br-4 df jc-sb ai-ct pa-0240">
      <div class="df">
        <el-form :inline="true" :model="search" class="demo-form-inline">
          <el-form-item label="关键字:">
            <el-input v-model="search.str" placeholder="输入组织名称搜索" style="width: 220px;" class="input-with-select">
              <template #append>
                <el-button :icon="Search" />
              </template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-button @click="addNew(ruleFormRef)">
          <el-icon color="#1890FF">
            <Plus />
          </el-icon>&nbsp;
          新增组织
        </el-button>
        <el-button @click="addChild(rulechildFormRef)">
          <el-icon color="#1890FF">
            <Plus />
          </el-icon>&nbsp;
          新增下级组织
        </el-button>
        <el-button @click="edit(editFormRef)">
          <el-icon color="#1890FF">
            <EditPen />
          </el-icon>&nbsp;
          编辑组织
        </el-button>
        <el-button @click="organization.delShow = true">
          <el-icon color="#1890FF">
            <Delete />
          </el-icon>&nbsp;
          删除组织
        </el-button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="table ma-0240 bg-f br-4">
      <el-table :data="table.data" style="width: 100%; " row-key="id" default-expand-all>
        <el-table-column prop="date" label="益禾堂">
          <template #default="scope">
            <el-checkbox v-model="scope.row.ischeck" @click="check(scope.row)" />
            {{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="描述" />
      </el-table>
    </div>

    <!-- 新增组织 -->
    <el-dialog v-model="organization.neworganShow" width="600" close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">新增组织</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <el-form ref="ruleFormRef" :model="newForm" :rules="newrules" label-width="160px" class="demo-ruleForm">
        <el-form-item class="w-400" label="组织名称:" prop="name">
          <el-input v-model="newForm.name" />
        </el-form-item>
        <el-form-item class="w-400" label="组织代码:" prop="code">
          <el-input v-model="newForm.code" />
        </el-form-item>
        <el-form-item class="w-400" label="描述:" prop="desc">
          <el-input v-model="newForm.desc" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="organization.neworganShow = false">取消</el-button>
          <el-button type="primary" @click="addNeworigin(ruleFormRef)">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 新增下级组织 -->
    <el-dialog v-model="organization.childoriganShow" width="600" close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">新增下级组织</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <el-form ref="rulechildFormRef" :model="childForm" :rules="childrules" label-width="160px" class="demo-ruleForm">
        <el-form-item class="w-400" label="父级组织:" prop="fatherName">
          <el-input v-model="childForm.fatherName" disabled />
        </el-form-item>
        <el-form-item class="w-400" label="组织名称:" prop="name">
          <el-input v-model="childForm.name" />
        </el-form-item>
        <el-form-item class="w-400" label="组织代码:" prop="code">
          <el-input v-model="childForm.code" />
        </el-form-item>
        <el-form-item class="w-400" label="描述:" prop="desc">
          <el-input v-model="childForm.desc" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="organization.childoriganShow = false">取消</el-button>
          <el-button type="primary" @click="addchildorigin(rulechildFormRef)">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 编辑组织 -->
    <el-dialog v-model="organization.editoriganShow" width="600" close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">编辑组织</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <el-form ref="editFormRef" :model="editForm" :rules="editrules" label-width="160px" class="demo-ruleForm">
        <el-form-item class="w-400" label="组织名称:" prop="name">
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item class="w-400" label="组织代码:" prop="code">
          <el-input v-model="editForm.code" />
        </el-form-item>
        <el-form-item class="w-400" label="当前父组织:" prop="fatherName">
          <el-input v-model="editForm.fatherName" disabled />
        </el-form-item>
        <el-form-item label="上级组织:" prop="type">
          <el-select v-model="editForm.type" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item class="w-400" label="描述:" prop="desc">
          <el-input v-model="editForm.desc" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="organization.editoriganShow = false">取消</el-button>
          <el-button type="primary" @click="editorigin(editFormRef)">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog v-model="organization.delShow" width="600" close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">删除</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <div>确定删除组织“安全考核”吗？删除后将无法恢复。</div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="organization.delShow = false">取消</el-button>
          <el-button type="primary" @click="del">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Search, Plus, EditPen, Delete, CircleCloseFilled
} from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
const search = ref({
  str: ''
})
const table = ref({  //表格数据
  data: [
    {
      id: 1,
      date: '2016-05-01',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
      ischeck: false,
      children: [
        {
          id: 31,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
          ischeck: false,

        },
        {
          id: 32,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
          ischeck: false,

        },
      ],
    },
    {
      id: 2,
      date: '2016-05-01',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
      ischeck: false,

      children: [
        {
          id: 21,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
          ischeck: false,

          children: [
            {
              id: 21 - 1,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles',
              ischeck: false,


            },
          ]
        },
      ],
    },
  ],
  check: false
})
// 表格获取选中的数据
const check = (val: any) => {
  console.log(val);
}

// 组织相关数据
const ruleFormRef = ref<FormInstance>()
const rulechildFormRef = ref<FormInstance>()
const editFormRef = ref<FormInstance>()
const organization = ref({
  neworganShow: false,
  childoriganShow: false,
  editoriganShow: false,
  delShow: false

})
// 新增组织
const newForm = ref({
  name: '',
  code: '',
  desc: '',
})
const newrules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
  }]
})
const addNew = (formEl: any) => {
  if (!formEl) {
    organization.value.neworganShow = true
  } else {
    formEl.resetFields()
    organization.value.neworganShow = true
  }
}
const addNeworigin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 新增下级组织
const childForm = ref({
  fatherName: '',
  name: '',
  code: '',
  desc: '',
})

const childrules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
  }]
})
const addChild = (formEl: any) => {
  if (!formEl) {
    organization.value.childoriganShow = true
  } else {
    formEl.resetFields()
    organization.value.childoriganShow = true
  }
}
const addchildorigin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
// // 编辑组织
const editForm = ref({
  fatherName: '',
  name: '',
  code: '',
  desc: '',
  type: ''
})

const editrules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
  }]
})
const edit = (formEl: any) => {
  if (!formEl) {
    organization.value.editoriganShow = true
  } else {
    formEl.resetFields()
    organization.value.editoriganShow = true
  }
}
const editorigin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 确定删除
const del = () => {
  console.log(11212123);
}
</script>

<style lang="scss" scoped>
.table {
  margin-top: 16px;
  padding: 32px 64px 50px;
}
</style>