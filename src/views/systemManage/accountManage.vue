<template>
  <div>
    <div class="topName">用户管理</div>
    <div id="accountSearch" class="bg-f df jc-sb pa-0240 ma-0240 br-4 pt-24">
      <div class="w-1100">
        <el-form :inline="true" ref="ruleFormRef" :model="search" class="demo-form-inline">
          <el-form-item label="账号:" prop="username">
            <el-input v-model="search.username" placeholder="请输入账号" />
          </el-form-item>
          <el-form-item label="姓名:" prop="nickname">
            <el-input v-model="search.nickname" placeholder="请输入姓名" />
          </el-form-item>
          <el-form-item label="角色:" prop="user">
            <el-select v-model="search.user" placeholder="请选择角色">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式:" prop="mobile">
            <el-input v-model="search.mobile" placeholder="请输入联系方式" />
          </el-form-item>
          <el-form-item label="管辖门店:" prop="stores">
            <el-select v-model="search.stores" placeholder="请选择门店">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="用户编号:" prop="code">
            <el-input v-model="search.code" placeholder="请输入用户编号" />
          </el-form-item>
          <el-form-item label="用户状态:" prop="status">
            <el-select v-model="search.status" placeholder="请选择状态">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>


      <div>
        <el-button @click="searchData">
          <el-icon color="#1890FF">
            <Search />
          </el-icon>&nbsp;
          查询</el-button>
        <el-button @click="resetForm(ruleFormRef)">
          <el-icon color="#1890FF">
            <Refresh />
          </el-icon>&nbsp;
          重置</el-button>
      </div>
    </div>

    <div class="df jc-sb ma-0240 pt-24">
      <div class="bg-f w-260  ov-h  br-4" :class="[leftInfo.open ? 'leftOpen p-24  mr-16' : 'leftClose']">
        <div class="df jc-sb">
          <div>
            <el-icon class="mr-12 pointer">
              <Plus />
            </el-icon>
            <el-icon class="mr-12 pointer">
              <EditPen />
            </el-icon>
            <el-icon class="mr-12 pointer">
              <Delete />
            </el-icon>

          </div>
          <div>

            <el-tooltip placement="bottom" effect="light">
              <el-icon class=" pointer">
                <QuestionFilled />
              </el-icon>
              <template #content>
                <p class="fs-14 cl-26">1、添加组织</p>
                <p class="fs-12 cl-8c">在页面左侧点击“+”按钮，建立组织结构树</p>
                <p class="fs-14 cl-26">2、添加用户</p>
                <p class="fs-12 cl-8c">选择任意一个组织节点，点击右侧页面中央
                  的“添加用户”按钮，创建用户</p>
                <p class="fs-12 cl-8c">· 若您要绑定设备，请前往【门店管理】创
                  建区域门店树；
                  <br>
                  <br>
                  ·更多说明请见 <a href="#">帮助中心/入门手册/用户管理</a>
                </p>


              </template>
            </el-tooltip>

          </div>
        </div>
        <div class="mt-16 mb-16">
          <el-input v-model="leftInfo.name" placeholder="输入组织名称搜索" :props="{ class: customNodeClass }"
            class="input-with-select">
            <template #append>
              <el-button :icon="Search" />
            </template>
          </el-input>
        </div>
        <div>
          <el-tree ref="treeRef" :check-on-click-node="true" :data="leftInfo.data" :props="leftInfo.defaultProps"
            @node-click="handleNodeClick" />
        </div>
      </div>
      <div class="bg-f p-24  br-4" :class="[leftInfo.open ? 'rightOpen' : 'rightClose']">
        <div class="mb-20">
          <el-button @click="openLeft">
            <el-icon color="#1890FF">
              <Switch />
            </el-icon>&nbsp;
            是否隐藏左侧组织
          </el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Switch />
            </el-icon>&nbsp;
            转移
          </el-button>
          <el-button @click="addAccount(addForm)">
            <el-icon color="#1890FF">
              <Plus />
            </el-icon>&nbsp;
            新增
          </el-button>
          <el-button @click="delAccount('', 'all')">
            <el-icon color="#1890FF">
              <Delete />
            </el-icon>&nbsp;
            删除</el-button>
          <el-button>
            <el-icon color="#1890FF">
              <Download />
            </el-icon>&nbsp;导入
          </el-button>
          <el-button @click="exportExcel">
            <el-icon color="#1890FF">
              <Upload />
            </el-icon>&nbsp;
            导出
          </el-button>

        </div>

        <el-table height="630" border :data="table.data" style="width: 100%;" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="50" />
          <el-table-column type='index' width="55" label="序号" />
          <el-table-column prop="username" label="账号" />
          <el-table-column prop="code" min-width="100" label="用户编号" />
          <el-table-column prop="nickname" label="姓名" />
          <el-table-column prop="status" min-width="100" label="用户状态" />
          <el-table-column prop="deptd" min-width="100" label="所属组织" />
          <el-table-column prop="roles" min-width="180" label="角色">
            <template #default="scope">
              <div class="df fw-w">
                <div class="ml-6 mb-6 nowrap" v-for="item in scope.row.roles" :key="item.id">{{
                  item.name }}</div>
              </div>

            </template>
          </el-table-column>
          <el-table-column prop="mobil" min-width="100" label="联系电话" />
          <el-table-column prop="expireDate" min-width="110" label="失效时间" />
          <el-table-column prop="loginDate" min-width="110" label="最近登录时间" />
          <el-table-column prop="loginIp" min-width="110" label="最近登录IP" />
          <el-table-column prop="createTime" min-width="110" label="创建时间" />
          <el-table-column prop="name" min-width="110" label="最近登录时间" />
          <el-table-column prop="mobil" min-width="110" label="手机号码" />
          <el-table-column prop="address" min-width="110" label="身份证号" />
          <!-- <el-table-column prop="address" label="学历" /> -->
          <el-table-column fixed="right" width="80" prop="address" label="操作">
            <template #default="scope">
              <el-popover placement="bottom" :width="80" trigger="hover">
                <template #reference>
                  <el-button link type="primary" style="font-weight: 700;">.&nbsp;.&nbsp;.</el-button>
                </template>
                <div class="df">
                  <el-button link type="primary" @click="ban(scope)">禁用</el-button>
                  <el-button link type="primary" @click="ban(scope)">编辑</el-button>
                  <el-button link type="danger" @click="delAccount(scope, 'single')">删除</el-button>
                </div>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination @size-change="getData" @current-change="getData" background v-model:current-page="table.page"
            v-model:page-size="table.pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="total, sizes, prev, pager, next, jumper" :total="table.total" />
        </div>
      </div>

    </div>

    <!-- 转移组织弹框 -->
    <el-dialog v-model="transformShow" width='490' close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb pa-0160">
          <div class="h-52">转移组织</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <div class="mt-16 mb-16">
        <el-input v-model="leftInfo.name" placeholder="输入组织名称搜索" style="width: 220px;" class="input-with-select">
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>
      <div class="h-320 ov-ya">
        <el-tree ref="treeRef" :check-on-click-node="true" :data="leftInfo.data" :props="leftInfo.defaultProps"
          @node-click="handleNodeClick" />
      </div>
      <div class="df jc-ct">
        <el-button @click="transformShow = false">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>


    </el-dialog>


    <el-drawer v-model="addInfo.show" :size="900" :with-header="false">
      <el-form ref="addForm" style="width: 100%;" :rules="addInfo.rules" :model="addInfo" label-width="140px">
        <div class="title">基本信息</div>
        <el-form-item label="账号名称:" prop="username">
          <el-input v-model="addInfo.username" />
        </el-form-item>
        <el-form-item label="用户密码:" prop="password">
          <el-input v-model="addInfo.password" />
        </el-form-item>
        <el-form-item label="昵称:" prop="nickname">
          <el-input v-model="addInfo.nickname" />
        </el-form-item>
        <el-form-item label="手机号码:" prop="mobil">
          <el-input v-model="addInfo.mobil" />
        </el-form-item>
        <el-form-item label="用户编号:" prop="code">
          <el-input v-model="addInfo.code" />
        </el-form-item>
        <el-form-item label="所属部门/员工:" prop="deptld">
          <el-select v-model="addInfo.deptld" placeholder="请选择">
            <el-option label="部门一" value="0" />
            <el-option label="部门二" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱:" prop="email">
          <el-input v-model="addInfo.email" />
        </el-form-item>
        <el-form-item label="账户失效日期:" prop="expireDate">
          <el-date-picker style="width: 100%;" v-model="addInfo.expireDate" value-format="YYYY-MM-DD" type="date"
            placeholder="选择失效时间" clearable />
        </el-form-item>
        <el-form-item label="备注:" prop="remark">
          <el-input v-model="addInfo.remark" type="textarea" />
        </el-form-item>
        <el-form-item label="性别:" prop="sex">
          <el-select v-model="addInfo.sex" prop="sex" placeholder="请选择">
            <el-option label="男" value="男" />
            <el-option label="女" value="女" />
          </el-select>
        </el-form-item>
        <!-- <el-form-item label="账号类型:" prop="type">
          <el-select v-model="addInfo.type" placeholder="请选择">
            <el-option label="类型一" value="1" />
            <el-option label="类型二" value="2" />
          </el-select>
        </el-form-item> -->
        <!-- <el-form-item label="权限:">
          <el-input v-model="addInfo.power" placeholder="搜索" class="input-with-select">
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
        </div> -->
      </el-form>
      <template #footer>
        <div class="df ai-ct jc-ct">
          <el-button class="w-224" style="height: 40px;" @click="addInfo.show = false">取消</el-button>
          <el-button class="w-224" style="height: 40px;" type="primary" @click="confirm">确定</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  Switch,
  Search, Refresh, Plus, EditPen, Delete, QuestionFilled, Download, Upload, CircleCloseFilled, ArrowRight
} from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'

import { HTTP_GET, HTTP_DEL } from '@/utils/get'
import { HTTP_POST } from '@/utils/post'
const ruleFormRef = ref<FormInstance>()
// import { useRouter } from "vue-router";
// const router = useRouter()
const addForm = ref()
onMounted(async () => {
  await getData()
})
const treeRef = ref()
const search = ref({
  username: '',
  nickname: '',
  user: '',
  mobile: '',
  stores: undefined,
  code: '',
  status: undefined,
  name: '',
  region: '',
  phone: '',
})
const addInfo = ref({
  show: false,
  rules: [],
  username: '',
  password: '',
  nickname: '',
  mobil: '',
  code: '',
  remark: '',
  deptld: '',
  email: '',
  expireDate: '',
  sex: '',
  type: '',
  name: "",
  desc: '',
  staff: '',
  time: "",
  power: '',
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
  },
  open: true
})
const table = ref({
  data: [],
  page: 1,
  pageSize: 10,
  total: 0,
  check: [],
})

// 获取用户管理列表
const getData = async () => {
  let url = '/user/page'
  let data = {
    page: table.value.page,
    size: table.value.pageSize,
    username: table.value.username,
    nickname: table.value.nickname,
    mobile: table.value.mobile,
    stores: table.value.stores,
    code: table.value.code,
    status: table.value.status,
    user: table.value.user,
  }
  // await HTTP_GET(data, url).then((res: any) => {
  //   console.log(res);
  //   table.value.data = res.data.data.list
  //   table.value.total = Number(res.data.data.total)
  // })
}

const searchData = () => {
  table.value.page = 1
  getData()
}

// 重置搜索表单
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
const transformShow = ref(false)  // 转移组织弹窗
const handleNodeClick = (data: any) => {
  console.log(data)
  console.log(treeRef.value!.getCheckedNodes())
}
// 禁用
const ban = (e: any) => {
  console.log(e);
}
// 新增账号
const addAccount = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    addInfo.value.show = true
    return
  } else {
    formEl.resetFields()
    addInfo.value.show = true
  }

}





// 权限选择
const powerCheck = ref({
  checkall: false,
  isIndeterminate: true,
  checkedCities: ['Shanghai', 'Beijing'],
  cities: ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen', 'henan', 'hainan', 'guangzhou', 'jiangsu']
})
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

// 是否展开左侧组织架构
const openLeft = () => {
  leftInfo.value.open = !leftInfo.value.open

}
// 选中节点样式标注
const customNodeClass = (data: Tree, node: Node) => {
  if (data.isPenultimate) {
    return 'is-penultimate'
  }
  return null
}
// 表格内容选中
const handleSelectionChange = (val: Array) => {
  table.value.check = val
}
// 删除用户
const delAccount = async (e, type) => {
  console.log(e, type);
  let url = '/user/delete'
  let data: any;
  if (type == 'all') {
    let arr = table.value.check.map(item => item.id)
    data = {
      id: arr.join(',')
    }
  } else {
    data = {
      id: e.row.id
    }
  }


  // await HTTP_DEL(data, url).then(res => {
  //   console.log(res)
  // })
  await getData()

}
// 确定新增角色
const confirm = () => {
  console.log(addForm.value);
  let url = '/user/create'
  let data = {
    username: addInfo.value.username,
    password: addInfo.value.password,
    nickname: addInfo.value.nickname,
    mobil: addInfo.value.mobil,
    code: addInfo.value.code,
    deptld: addInfo.value.deptld,
    email: addInfo.value.email,
    expireDate: addInfo.value.expireDate,
    remark: addInfo.value.remark,
    sex: addInfo.value.sex,
    type: addInfo.value.type
  }
  console.log(url, data);
  // HTTP_POST(data, url).then((res: any) => {
  //   console.log(res);
  //   if (res.data.code == 0) {
  //     addInfo.value.show = false
  //   } else {
  //     ElMessage({
  //       message: res.data.msg,
  //       type: 'warning',
  //     })
  //   }

  // })

}
// 导出用户表
const exportExcel = () => {
  let url = 'user/download'
  // HTTP_GET('', url).then(res => {
  //   console.log(res);
  // })
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
.leftOpen {
  width: 20%;
  transition: all 0.2s linear;
}

.leftClose {
  width: 0;
  transition: all 0.2s linear;
}

.rightOpen {
  width: 80%;
  transition: all 0.2s linear;
}

.rightClose {
  width: 100%;
  transition: all 0.2s linear;

}


.bottomPower {
  margin-left: 140px;
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

.table {
  padding: 24px;
}
</style>