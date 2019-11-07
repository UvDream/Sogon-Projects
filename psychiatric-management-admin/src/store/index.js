/*
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:05:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 15:40:22
 * @Description:vuex
 * @Email: UvDream@163.com
 */
import Vue from "vue";
import Vuex from "vuex";
import step from "./module/step";
import form from "./module/form";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapsed: false,
    role:""
  },
  mutations: {},
  actions: {},
  modules: {
    step,
    form
  }
});
