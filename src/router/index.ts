import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/", // 首页
    name: "login",
    component: () => import("@/login.vue"),
    meta: {
      needLogin: false, // 需要登录
    },
  },
  {
    path: "/home", // 首页
    name: "home",
    component: () => import("@/home.vue"),
    meta: {
      needLogin: true, // 需要登录
    },
    redirect: "/orderManage",
    children: [
      {
        path: "/device", // 设备管理
        name: "device",
        component: () => import("@/views/deviceManage/index.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
        redirect: { name: "monitor" },
        children: [
          {
            path: "/monitor", // 火灾检测报警系统
            name: "monitor",
            component: () =>
              import("@/views/deviceManage/system/monitorSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", // 上级路由
            },
          },
          {
            path: "/water", // 消防水检测系统
            name: "water",
            component: () => import("@/views/deviceManage/system/waterSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
          {
            path: "/hydrant", // 室外消防栓系统
            name: "hydrant",
            component: () =>
              import("@/views/deviceManage/system/hydrantSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
          {
            path: "/electric", // 智慧安全用电系统
            name: "electric",
            component: () =>
              import("@/views/deviceManage/system/electricSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
          {
            path: "/video", // 视频监控系统
            name: "video",
            component: () => import("@/views/deviceManage/system/videoSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
          {
            path: "/video", // 视频监控系统
            name: "video",
            component: () => import("@/views/deviceManage/system/videoSys.vue"),
            meta: {
              needLogin: true, // 需要登录
              upRoute: "device", //上级路由
            },
          },
        ],
      },
      // 订单管理系统
      {
        path: "/orderManage", // 订单管理
        name: "orderManage",
        component: () => import("@/views/orderManagesystem/orderManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/orderAdd", // 添加订单
        name: "orderAdd",
        component: () => import("@/views/orderManagesystem/orderAdd.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/orderDetail", // 订单详情
        name: "orderDetail",
        component: () => import("@/views/orderManagesystem/orderDetail.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/orderBoard", // 订单看板
        name: "orderBoard",
        component: () => import("@/views/orderManagesystem/orderBoard.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/processManage", // 工序管理
        name: "processManage",
        component: () => import("@/views/orderManagesystem/processManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/processflowManage", // 工序流程管理
        name: "processflowManage",
        component: () =>
          import("@/views/orderManagesystem/processflowManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/addProcessflow", // 新增工序流程管理
        name: "addProcessflow",
        component: () => import("@/views/orderManagesystem/addProcessflow.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/staffManage", // 员工管理
        name: "staffManage",
        component: () => import("@/views/staffManagesystem/staffManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/changeStaff", // 修改及查看员工信息
        name: "changeStaff",
        component: () => import("@/views/staffManagesystem/changeStaff.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      // 系统管理
      {
        path: "/accountManage", // 账号管理
        name: "accountManage",
        component: () => import("@/views/systemManage/accountManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/accountAdd", // 新增账号
        name: "accountAdd",
        component: () => import("@/views/systemManage/accountAdd.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/organizationManage", // 组织管理
        name: "organizationManage",
        component: () => import("@/views/systemManage/organizationManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/labelManage", // 门店标签
        name: "labelManage",
        component: () => import("@/views/systemManage/labelManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/dictManage", // 字典管理
        name: "dictManage",
        component: () => import("@/views/systemManage/dictManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/roleManage", // 角色管理
        name: "roleManage",
        component: () => import("@/views/systemManage/roleManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/accountInfo", // 用户信息
        name: "accountInfo",
        component: () => import("@/views/systemManage/accountInfo.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/actionLog", // 操作日志
        name: "actionLog",
        component: () => import("@/views/systemManage/actionLog.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/equipManage", // 设备管理
        name: "equipManage",
        component: () => import("@/views/equipmentManage/equipManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/changeEquip", // 新增设备
        name: "changeEquip",
        component: () => import("@/views/equipmentManage/changeEquip.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/carrierManage", // 运营商列表
        name: "carrierManage",
        component: () => import("@/views/carrierManage/carrierManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/changeCarrier", // 运营商列表新增或修改
        name: "changeCarrier",
        component: () => import("@/views/carrierManage/changeCarrier.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/lookprocess", // 工序管理查看
        name: "lookprocess",
        component: () => import("@/views/processesManage/lookprocess.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/approvalManage", // 领料管理-列表
        name: "approvalManage",
        component: () => import("@/views/approvalManage/approvalManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/examineManage", // 审批管理-列表
        name: "examineManage",
        component: () => import("@/views/examineManage/examineManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/addExamine", // 审批管理-新增
        name: "addExamine",
        component: () => import("@/views/examineManage/addExamine.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/messageManage", // 信发管理系统-列表
        name: "messageManage",
        component: () =>
          import("@/views/messageManagesystem/messageManage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
      {
        path: "/releaseMessage", // 信发管理系统-发布
        name: "releaseMessage",
        component: () =>
          import("@/views/messageManagesystem/releaseMessage.vue"),
        meta: {
          needLogin: true, // 需要登录
        },
      },
    ],
  },
];
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});
export default router;
