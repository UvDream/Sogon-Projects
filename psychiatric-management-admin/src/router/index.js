/*
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:05:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-22 13:48:08
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
      }
    ]
  },
  {
    path: "/login",
    name: "login",
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
