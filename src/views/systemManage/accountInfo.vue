<template>
  <div>
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        用户信息
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
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="100px">
        <div class="df">
          <div class="w-30p">
            <el-form-item label="用户名:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="联系方式:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="所属组织:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="所属角色:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="备注:">
              <el-input v-model="form.name" type="textarea" />
            </el-form-item>

          </div>




          <div class="w-30p">
            <el-form-item label="系统名称:">
              <el-input v-model="form.student" />
            </el-form-item>
            <el-form-item label="系统LOGO:">
              <el-upload accept=".jpg,.png" :limit="1" :http-request="request" action="#" list-type="picture-card"
                :auto-upload="true">
                <el-icon>
                  <Plus />
                </el-icon>

                <template #tip>
                  <div class="el-upload__tip">
                    支持扩展名：.JPG，.PNG
                  </div>
                </template>
              </el-upload>

              <el-dialog width="900" v-model="dialogVisible">
                <img w-full style="width: 850px;" :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </el-form-item>

          </div>
        </div>

      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Plus, Management
} from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()
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
  filelist: []

})

// 表单校验
const rules = ref({
  name: [{
    required: true,
    message: '请输入姓名',
    trigger: 'change',
  },],
  sex: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'change',
    },
  ],
})
// 上传图片
const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const request = (e: any) => {
  console.log(e.file);

}

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
</script>

<style lang="scss" scoped>
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