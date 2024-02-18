<template>
  <div>
    <div class="topName">
      <div class="df ai-ct">
        <el-icon class="pointer" @click="back">
          <Back />&nbsp;
        </el-icon>
        运营商详情
      </div>
    </div>
    <div class="ma-0240">
      <el-form ref="ruleFormRef" style="width: 100%;" :model="info.form" label-width="100px">
        <div class="bg-f br-4 mb-16 p-24">
          <div class="title">基础信息</div>
          <div class="df">
            <div class="w-30p">
              <el-form-item label="工序名称:" prop="name">
                裸管组织切割
              </el-form-item>
              <el-form-item label="工序编码:" prop="name">
                THG02
              </el-form-item>
              <el-form-item label="工段:" prop="name">
                工段名字
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="工序类型:" prop="name">
                工序类型名字
              </el-form-item>
              <el-form-item label="类型:" prop="name">
                正常
              </el-form-item>
            </div>
            <div class="w-30p">
              <el-form-item label="工序描述:" prop="name">
                工序描述文字工序描述文字工序描述文字工序描述文字工序描述文字工序描述文字
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="bg-f br-4 p-24">
          <div class="title">工价设定</div>
          <div class="w-30p">
            <el-form-item label="基础价格:" prop="name">
              <el-input disabled v-model="info.form.name" placeholder="请输入基础价格" class="input-with-select">
                <template #append>
                  <el-select disabled v-model="info.form.type" placeholder="Select" style="width: 115px">
                    <el-option label="元/件" value="1" />
                    <el-option label="件/元" value="2" />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="折算系数:" prop="name">
              <el-input disabled v-model="info.form.name" />
            </el-form-item>
            <el-form-item label="折算价格:" prop="name">
              <el-input disabled v-model="info.form.name" placeholder="请输入折算价格" class="input-with-select">
                <template #append>
                  <el-select disabled v-model="info.form.type" placeholder="Select" style="width: 115px">
                    <el-option label="元/件" value="1" />
                    <el-option label="件/元" value="2" />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
          </div>

        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Back
} from '@element-plus/icons-vue'
const router = useRouter()
const info = ref({
  form: {
    name: '',
    type: '1'
  }
})
const back = () => {
  router.push({
    name: 'processManage'
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