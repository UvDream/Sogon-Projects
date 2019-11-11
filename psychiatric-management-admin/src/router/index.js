/*
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:05:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 13:45:44
 * @Description:路由文件
 * @Email: UvDream@163.com
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/login";
import Home from "../views/index";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          label: "首页"
        },
        component: () => import("../views/dashboard/dashboard.vue")
      },
      {
        path: "/fileManagement",
        name: "fileManagement",
        meta: {
          label: "档案管理"
        },
        component: () =>
          import(
            "../views/patient-management/file-management/fileManagement.vue"
          )
      },
      {
        path: "/newFile",
        name: "newFile",
        meta: {
          label: "新建档案"
        },
        component: () =>
          import("../views/patient-management/new-file/newFile.vue")
      },
      {
        path: "/personCenter",
        name: "personalCenter",
        meta: {
          label: "个人中心"
        },
        component: () => import("../views/personal-center/personCenter.vue")
      },
      {
        path: "/personalAccount",
        name: "personalAccount",
        meta: {
          label: "个人账户"
        },
        component: () =>
          import(
            "../views/personal-center/personal-account/personalAccount.vue"
          )
      },
      {
        path: "/fileAlreadyManagement",
        name: "fileAlreadyManagement",
        meta: {
          label: "已办档案"
        },
        component: () =>
          import(
            "../views/personal-center/file-already-filed/fileAlreadyFiled.vue"
          )
      },
      {
        path: "/notificationManagement",
        name: "notificationManagement",
        meta: {
          label: "通知管理"
        },
        component: () =>
          import(
            "../views/personal-center/notification-management/notificationManagement.vue"
          )
      },
      {
        path: "/system",
        name: "system",
        meta: {
          label: "系统管理"
        },
        component: () => import("../views/system-management/index.vue")
      },
      {
        path: "/accountManagement",
        name: "accountManagement",
        meta: {
          label: "账户管理"
        },
        component: () =>
          import(
            "../views/system-management/account-management/index.vue"
          )
      },
      {
        path: "/personManagement",
        name: "personManagement",
        meta: {
          label: "人员管理"
        },
        component: () =>
          import(
            "../views/system-management/person-management/index.vue"
          )
      },
      {
        path: "/logManagement",
        name: "logManagement",
        meta: {
          label: "日志管理"
        },
        component: () =>
          import(
            "../views/system-management/log-management/index.vue"
          )
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    label: "登录",
    component: Login
  },

  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
