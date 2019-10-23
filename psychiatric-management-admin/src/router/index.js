/*
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:05:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 17:46:31
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
        label: "首页",
        component: () => import("../views/dashboard/dashboard.vue")
      },
      {
        path: "/fileManagement",
        name: "fileManagement",
        label: "档案管理",
        component: () =>
          import(
            "../views/patient-management/file-management/fileManagement.vue"
          )
      },
      {
        path: "/newFile",
        name: "newFile",
        label: "新建档案",
        component: () =>
          import("../views/patient-management/new-file/newFile.vue")
      },
      {
        path: "/personalAccount",
        name: "personalAccount",
        label: "个人账户",
        component: () =>
          import(
            "../views/personal-center/personal-account/personalAccount.vue"
          )
      },
      {
        path: "/fileAlreadyManagement",
        name: "fileAlreadyManagement",
        label: "已办档案",
        component: () =>
          import(
            "../views/personal-center/file-already-filed/fileAlreadyFiled.vue"
          )
      },
      {
        path: "/notificationManagement",
        name: "notificationManagement",
        label: "通知管理",
        component: () =>
          import(
            "../views/personal-center/notification-management/notificationManagement.vue"
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
