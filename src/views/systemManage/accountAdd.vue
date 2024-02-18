<template>
  <div>
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        新增账号
      </div>
      <div class="pr-24">
        <el-button @click="addstaff(ruleFormRef)">
          <el-icon color="#1890FF">
            <Management />
          </el-icon> &nbsp;
          保存
        </el-button>
      </div>
    </div>
    <div class="ma-0240 bg-f br-4 pl-24 pt-32 pb-36  pr-24">
      <div class="title">基本信息</div>
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="130px">
        <div>
          <div class="w-30p">
            <el-form-item label="账号名称:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="用户密码:" prop="password">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="手机号码:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="用户编号:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="所属运营商/员工:" prop="staff">
              <el-select v-model="form.staff" placeholder="请选择">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
              </el-select>
            </el-form-item>
            <el-form-item label="账户失效日期:">
              <el-date-picker style="width: 100%;" v-model="form.time" type="date" placeholder="Pick a date" clearable />
            </el-form-item>
            <el-form-item label="备注:">
              <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item label="职位:">
              <el-select v-model="form.sex" prop="sex" placeholder="请选择">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
              </el-select>
            </el-form-item>
            <el-form-item label="权限:">
              <el-input v-model="form.power" placeholder="搜索" class="input-with-select">
                <template #append>
                  <el-button :icon="Search" />
                </template>
              </el-input>

            </el-form-item>
            <div class="bottomPower">
              <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item>全部</el-breadcrumb-item>
                <el-breadcrumb-item>古茗奶茶</el-breadcrumb-item>
              </el-breadcrumb>
              <div class="powerCheck">
                <div class="df ai-ct jc-sb">
                  <el-checkbox v-model="powerCheck.checkall" :indeterminate="powerCheck.isIndeterminate"
                    @change="checkALL">区域/门店名称</el-checkbox>
                  <p>操作</p>
                </div>
                <div class="check">
                  <el-checkbox-group v-model="powerCheck.checkedCities" @change="handleCheckedCitiesChange">
                    <div v-for="city in powerCheck.cities" :key="city" class="df ai-ct jc-sb">

                      <el-checkbox :label="city">
                        {{ city }}</el-checkbox>
                      <div> <el-button type="primary" link>下载</el-button></div>

                    </div>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </div>



  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Back, Management, Search, ArrowRight
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const form = ref({
  name: '',
  sex: '',
  obj: '',
  student: '',
  time: '',
  worktime: '',
  phone: '',
  id: '',
  img: {},
  filelist: [],
  desc: '',
  power: '',
  staff: ''

})
// 权限选择
const powerCheck = ref({
  checkall: false,
  isIndeterminate: true,
  checkedCities: ['Shanghai', 'Beijing'],
  cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'henan', 'hainan', 'guangzhou', 'jiangsu']
})
// 返回表格
const back = () => {
  router.push({ name: 'accountManage' })
}
// 表单校验
const rules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
  },],
  sex: [
    {
      required: true,
      message: '请选择性别',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
    }
  ],
  staff: [
    {
      required: true,
      message: '请选择所属运营商/员工',
    }
  ]

})

// 新增员工
const addstaff = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 权限选择
const checkALL = (val: boolean) => {
  console.log(val);
  powerCheck.value.checkedCities = val ? powerCheck.value.cities : []
  powerCheck.value.isIndeterminate = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  powerCheck.value.checkall = checkedCount === powerCheck.value.cities.length
  powerCheck.value.isIndeterminate = checkedCount > 0 && checkedCount < powerCheck.value.cities.length
}
</script>

<style lang="scss" scoped>
.bottomPower {
  margin-left: 130px;
  width: 600px;
}

.powerCheck {
  padding: 0 12px 0 16px;
  width: 355px;
  max-height: 194px;
  background: #FFFFFF;
  border-radius: 2px;
  border: 1px solid #D9D9D9;
  margin-top: 10px;

  .check {
    max-height: 160px;
    overflow-y: auto;
  }
}

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