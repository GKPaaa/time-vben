<template>
  <div>
    <div class="topName">订单管理</div>
    <div class=" ma-0240">
      <!-- 数据图 -->
      <div class="bg-f ov-h  br-4" :class="[islook == 'look' ? ' h-look' : 'h-hidden']">
        <div class="h-64 df  df ai-ct jc-sb pr-24 pl-24 ">
          <p class="fw-500">订单统计</p>
          <el-button link v-if="islook == 'hidden'" @click="isOpen('look')" :icon="View" circle>查看</el-button>
          <el-button link v-else @click="isOpen('hidden')" :icon="Hide" circle>隐藏</el-button>
        </div>
        <div class="df jc-sb pl-24 ai-ct pr-24 ">
          <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
          <div id="main" style="width:450px;height:252px;"></div>
          <div id="basicBar" style="width:450px;height:252px;"></div>
          <div class="br-6 cl-f bg-feca df ai-ct jc-ct" style="width:400px;height:168px;">
            <div>
              <img class="w-100 h-100" src="../../assets/light.png" alt="">
            </div>
            <div class="ml-32">
              <p class="fs-24 fw-500">订单预警率</p>
              <p class="fs-48 fw-500">10%</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 搜索栏目 -->
      <div class="bg-f ma-160  br-4 h-80 pa-0240 df ai-ct ">
        <el-form :inline="true" :model="search">
          <el-form-item label="关键词:">
            <el-input class="w-224" v-model="search.str" placeholder="关键词" />
          </el-form-item>
          <el-form-item class="w-224" label="订单状态:">
            <el-select v-model="search.state" placeholder="请选择" clearable>
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item class="w-340" label="订单状态:">
            <el-date-picker v-model="search.time" type="daterange" range-separator="~" start-placeholder="开始时间"
              end-placeholder="结束时间" />
          </el-form-item>
        </el-form>
        <div class="fl-1"></div>
        <el-button>
          <el-icon color="#1890FF">
            <Search />
          </el-icon>&nbsp;查询</el-button><el-button>
          <el-icon color="#1890FF">
            <Refresh />
          </el-icon>&nbsp;
          重置</el-button>
      </div>
      <!-- 表格 -->
      <div class="bg-f h-770 pa-0240 br-4">
        <div class=" pt-24 mb-20">
          <el-button @click="addOrder">
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
          <el-button @click="goDispatch">
            <el-icon color="#1890FF">
              <Tickets />
            </el-icon>&nbsp;
            派单
          </el-button>
        </div>

        <div>
          <el-table height="630" :data="table.data" style="width: 100%">
            <el-table-column type="selection" width="50" />
            <el-table-column prop="name" width="55" label="序号" />
            <el-table-column prop="name" label="订单编号">
              <template #default="scope">
                <div @click="lookDetail" class="pointer cl-18"> {{ scope.row.name }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="订单来源" />
            <el-table-column prop="name" label="订单状态" />
            <el-table-column prop="name" label="订单完成情况" />
            <el-table-column prop="date" label="订单工时信息" />
            <el-table-column prop="name" label="组织/线体" />
            <el-table-column prop="name" label="派单状态" />
            <el-table-column prop="name" width="122" label="操作线体负责人" />
            <el-table-column prop="name" width="122" label="订单工序流程表" />
            <el-table-column prop="address" label="订单物料表" />
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination background v-model:current-page="table.page" v-model:page-size="table.pageSize"
            :page-sizes="[10, 20, 30, 40]" layout="total, sizes, prev, pager, next, jumper" :total="400" />
        </div>
      </div>
    </div>

    <!-- 派单 -->
    <!-- 新增运营商弹窗 -->
    <el-dialog destroy-on-close v-model="dispatch.show" width="800" close-icon="null" align-center center draggable>
      <template #header>
        <div class="df jc-sb ai-ct pa-0160">
          <div class="h-52">派单</div>
          <div class="h-52 df ai-ct">
            <el-icon size="26" color="#1890FF">
              <CircleCloseFilled />
            </el-icon>
          </div>
        </div>
      </template>
      <div class="df jc-ct  ov-ya">
        <div class="w-320 b-1-d mr-24 br-16 ">
          <div class="dispatchTit">订单编号</div>
          <div class="dispatchContent">
            <p v-for="(item) in 18" :key="item">SH853764589548</p>
          </div>
        </div>
        <div class="w-320 b-1-d  br-16 ">
          <div class="dispatchTit">选择线体</div>
          <div class="dispatchContent">
            <el-tree @check-change="handleCheckChange" :data="dispatch.data" show-checkbox node-key="id"
              :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" />
          </div>
        </div>
      </div>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dispatch.show = false">取消</el-button>
          <el-button type="primary" @click="dispatch.show = false">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  View,
  Hide, Delete, Download, Upload, Tickets, Plus, Search, Refresh, CircleCloseFilled
} from '@element-plus/icons-vue'




import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphicComponent,
  GridComponent,
} from 'echarts/components';
import { PieChart, BarChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import router from "../../router";

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GraphicComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
  GridComponent,
  BarChart,
]);




const islook = ref('look')
const search = ref({ // 搜索表单
  str: '', // 关键词
  state: '',//订单状态
  time: [], // 时间
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
// 派单
const dispatch = ref({
  show: false,
  data: [
    {
      id: 1,
      label: 'Level one 1',
      children: [
        {
          id: 4,
          label: 'Level two 1-1',
          children: [
            {
              id: 9,
              label: 'Level three 1-1-1',
            },
            {
              id: 10,
              label: 'Level three 1-1-2',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: 'Level one 2',
      children: [
        {
          id: 5,
          label: 'Level two 2-1',
        },
        {
          id: 6,
          label: 'Level two 2-2',
        },
      ],
    },
    {
      id: 3,
      label: 'Level one 3',
      children: [
        {
          id: 7,
          label: 'Level two 3-1',
        },
        {
          id: 8,
          label: 'Level two 3-2',
        },
      ],
    },
  ]
})
var drawPiechart: any;  // 饼图
var drawBarchart: any;  // 柱状图
onMounted(() => {
  drawPie()
  drawLine()

})
const drawPie = () => {

  var chartDom = document.getElementById('main');
  drawPiechart = echarts.init(chartDom);

  var option;

  option = {
    graphic: {
      //设置中心图片及文字
      elements: [

        {
          type: "text", //通过不同top值可以设置上下显示
          left: 130,
          top: 110,
          style: {
            text: "  1000",
            textAlign: "center",
            fill: "#000", //文字的颜色
            width: 80,
            height: 10,
            fontSize: 24,
            color: "#262626",
            overflow: "breakAll"
          }
        },
        {
          type: "text", //通过不同top值可以设置上下显示
          left: 150,
          top: 140,
          style: {
            text: "订单总数",
            textAlign: "center",
            fill: "#000", //文字的颜色
            width: 60,
            height: 10,
            fontSize: 14,
            color: "#595959",
            overflow: "breakAll"
          }
        }
      ]
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 60,
      bottom: 20,
    },
    series: [
      {
        name: '姓名',
        type: 'pie',
        // radius: '55%',
        center: ['40%', '50%'],
        radius: ['40%', '70%'],
        label: {
          show: false,
          position: 'center'
        },
        data: [{ value: 1048, name: 'Search Engine11', percentage: '15.86%' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  option && drawPiechart.setOption(option);


}
const drawLine = () => {
  var chartDom = document.getElementById('basicBar');
  drawBarchart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };

  option && drawBarchart.setOption(option);

}
// 查看或者隐藏
const isOpen = (e: any) => {
  islook.value = e
}
// 查看详情
const lookDetail = () => {
  router.push({ name: 'orderDetail' })
}
// 去派单
const goDispatch = () => {
  dispatch.value.show = true
}
// 选择线体
const handleCheckChange = (
  data: any,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate)
}

// 路由销毁销毁echatrs
onUnmounted(() => {
  drawPiechart.dispose()
  drawBarchart.dispose()
})

// 添加订单
const addOrder = () => {
  router.push({
    name: 'orderInfo'
  })
}
</script>

<style lang="scss" scoped>
.dispatchTit {
  height: 60px;
  background-color: #ddd;
  border-radius: 16px;
  padding-left: 16px;
  line-height: 60px;
  margin-bottom: 9px;
}

.dispatchContent {
  height: 400px;
  overflow-y: auto;

  p {
    padding: 4px 16px;
  }
}

.tableTh {
  color: red;
}

.h-look {
  height: 320px;
  transition: all 0.2s;
}

.h-hidden {
  height: 64px;
  transition: all 0.2s;
}
</style>