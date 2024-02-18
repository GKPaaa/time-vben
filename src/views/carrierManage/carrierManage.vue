<template>
  <div>
    <div class="topName">
      运营商列表
    </div>
    <div>
      <div class="ma-0240 mb-16 bg-f br-4 h-80 df ai-ct pl-18 pr-18">
        <el-form :inline="true" :model="search">
          <el-form-item class="w-224" label="筛选条件:">
            <el-select v-model="search.type" placeholder="请选择" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item class="w-224" label="区域选择:">
            <el-select v-model="search.type" placeholder="请选择" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="搜索:">
            <el-input class="w-224" v-model="search.str" placeholder="关键词" :suffix-icon="Search" />
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
      <div class="table">
        <div class="mb-20">
          <el-button @click="addCarrier(ruleFormRef)">
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
            <el-table-column prop="name" label="组织代码" />
            <el-table-column prop="name" label="运营商名称" />
            <el-table-column prop="name" label="单位地址" />
            <el-table-column prop="name" label="联系人" />
            <el-table-column prop="date" label="联系电话" />
            <el-table-column prop="name" label="营业执照" />
            <el-table-column prop="name" label="状态" />
            <el-table-column prop="address" label="操作">
              <template #default="">
                <el-button link style="margin-left: 0;" type="primary" @click="goLook">查看详情</el-button>
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





    <!-- 新增运营商弹窗 -->
    <el-dialog destroy-on-close v-model="carrier.show" width="800" close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">新增运营商</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <div>

        <el-form ref="ruleFormRef" :model="carrier.form" :rules="carrier.rules" label-width="100px" class="demo-ruleForm">
          <div class="df jc-sb ">
            <div class="w-380">
              <el-form-item label="名称:" prop="code">
                <el-input v-model="carrier.form.code" />
              </el-form-item>
              <el-form-item label="组织代码:" prop="desc">
                <el-input v-model="carrier.form.desc" />
              </el-form-item>
              <el-form-item label="联系人:" prop="desc">
                <el-input v-model="carrier.form.desc" />
              </el-form-item>
              <el-form-item label="电话:" prop="desc">
                <el-input v-model="carrier.form.desc" />
              </el-form-item>
              <el-form-item label="开户行:" prop="desc">
                <el-input v-model="carrier.form.desc" />
              </el-form-item>
              <el-form-item label="账号:" prop="desc">
                <el-input v-model="carrier.form.desc" />
              </el-form-item>
              <el-form-item label="地址:" prop="desc">
                <elui-china-area-dht class="w-100p" @change="onChange"></elui-china-area-dht>
                <el-input class="mt-6" v-model="carrier.form.desc" placeholder="请输入详细地址" />
              </el-form-item>
              <el-form-item label="单位经纬度:" prop="name">
                <el-input v-model="carrier.form.name" />
                <div>经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片经纬度图片</div>
              </el-form-item>
            </div>
            <div class="w-380">
              <el-form-item label="运营商状态:">
                <el-select class="w-100p" v-model="carrier.form.name" placeholder="请选择" clearable>
                  <el-option label="Zone one" value="shanghai" />
                  <el-option label="Zone two" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item label="备注:" prop="name">
                <el-input type="textarea" v-model="carrier.form.name" />
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
          </div>
        </el-form>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="carrier.show = false">取消</el-button>
          <el-button type="primary" @click="carrier.show = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog width="800" v-model="dialogVisible">
      <img w-full style="width: 750px;" :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
import {
  Search,
  Refresh,
  Delete, Download, Upload, Plus, CircleCloseFilled
} from '@element-plus/icons-vue'
import { EluiChinaAreaDht } from 'elui-china-area-dht'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()
const chinaData = new EluiChinaAreaDht.ChinaArea().chinaAreaflat
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
const carrier = ref({
  show: false,
  form: {
    name: "",
    code: "",
    desc: '',
  },
  rules: []
})
// 查看员工信息
const goLook = () => {
  router.push({ name: 'changeCarrier' })
}

// 新增运营商
const addCarrier = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    carrier.value.show = true
  } else {
    formEl.resetFields()
    carrier.value.show = true
  }
}
// 城市选择
const onChange = (e: any) => {
  let arr: any = []
  e.forEach((item: any) => {
    arr.push(chinaData[item])
  });
  console.log(arr);
}
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
</script>

<style lang="scss" scoped></style>
<style lang="scss">
.hide_box .el-upload--picture-card {
  display: none;
}
</style>