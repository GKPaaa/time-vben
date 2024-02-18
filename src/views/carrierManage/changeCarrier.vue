<template>
  <div>
    <div class="topName df jc-sb">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        运营商详情
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
      <div class="title">基础信息</div>
      <el-form ref="ruleFormRef" style="width: 100%;" :rules="rules" :model="form" label-width="100px">
        <div class="df  jc-sb">
          <div class="w-30p">
            <el-form-item label="名称:" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="组织代码:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="联系人:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="电话:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="开户行:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="账号:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="地址:" prop="desc">
              <elui-china-area-dht class="w-100p" @change="onChange"></elui-china-area-dht>
              <el-input class="mt-6" v-model="form.name" placeholder="请输入详细地址" />
            </el-form-item>

          </div>


          <div class="w-30p">
            <el-form-item label="运营商状态:">
              <el-select style="width: 100%;" v-model="form.sex" prop="sex" placeholder="请选择">
                <el-option label="正常营业" value="正常营业" />
                <el-option label="歇业" value="歇业" />
              </el-select>
            </el-form-item>

            <el-form-item label="单位编号:">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="添加事件:">
              <el-date-picker style="width: 100%;" v-model="form.time" type="date" placeholder="Pick a date" clearable />
            </el-form-item>
            <el-form-item label="备注:">
              <el-input v-model="form.obj" type="textarea" />
            </el-form-item>
            <el-form-item label="营业执照:" prop="code">
              <el-upload v-model="filelist" :class="{ hide_box: upload_btn }" accept=".jpg,.png" action="'"
                list-type="picture-card" :on-remove="handleRemove" :on-preview="handlePictureCardPreview"
                :on-change="handleChange" :limit="1" :http-request="handleUpload">
                <el-icon>
                  <Plus />
                </el-icon>

                <template #tip>
                  <div class="el-upload__tip">
                    支持扩展名：.JPG，.PNG
                  </div>
                </template>
              </el-upload>
            </el-form-item>
          </div>

          <div class="w-30p">
            <el-form-item label="单位经纬度:" prop="name">
              <el-input v-model="form.name" />
              <div>经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片</div>
            </el-form-item>
          </div>
        </div>
        <div class="title">账户信息</div>
        <div class="w-30p">
          <el-form-item label="账号名称:" prop="name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="用户密码:">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="确认密码:">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="手机号码:">
            <el-input v-model="form.name" />
          </el-form-item>
        </div>
        <div class="title">系统信息</div>
        <div class="w-30p systemInfo">
          <el-form-item label="营业执照:" prop="code">
            <el-upload v-model="filelist" :class="{ hide_box: upload_btn }" accept=".jpg,.png" action="'"
              list-type="picture-card" :on-remove="handleRemove" :on-preview="handlePictureCardPreview"
              :on-change="handleChange" :limit="1" :http-request="handleUpload">

              <div class="df ai-ct fl-dc">
                <el-icon>
                  <Plus />
                </el-icon>
                <p>上传</p>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  要求：图片尺寸为200*52像素，格式为.PNG，背景透明
                </div>
              </template>
            </el-upload>
          </el-form-item>
          <el-form-item label="系统名称:">
            <el-input v-model="form.name" />
          </el-form-item>
        </div>
      </el-form>
    </div>


    <el-dialog width="800" v-model="dialogVisible">
      <img w-full style="width: 750px;" :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Back, Plus, Management
} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import { EluiChinaAreaDht } from 'elui-china-area-dht'
import type { FormInstance } from 'element-plus'
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat
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
  filelist: []

})
// 返回表格
const back = () => {
  router.push({ name: 'carrierManage' })
}
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
// 图片上传
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const upload_btn = ref(false)
const filelist: any = ref([])
const handleChange = async (file: any, fileLists: any) => {
  console.log(fileLists);

  filelist.value = []
  filelist.value = [file]

  upload_btn.value = true
}
const handleRemove = (e: any) => {
  console.log(e);
  upload_btn.value = false
}
const handleUpload = (e: any) => {
  console.log(e);
}

const handlePictureCardPreview = () => {
  console.log(filelist.value);
  dialogImageUrl.value = filelist.value[0].url
  dialogVisible.value = true
}

// 确定保存新增
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
// 城市选择
const onChange = (e: any) => {
  let arr: any = []
  e.forEach((item: any) => {
    arr.push(chinaData[item])
  });
  console.log(arr);
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
<style lang="scss">
.hide_box .el-upload--picture-card {
  display: none;
}

.systemInfo {
  .el-upload--picture-card {
    height: 60px;
  }
}
</style>