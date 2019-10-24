/*
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:05:32
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 19:55:21
 * @Description:vuex
 * @Email: UvDream@163.com
 */
import Vue from "vue";
import Vuex from "vuex";
import step from "./module/step";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapsed: false
  },
  mutations: {},
  actions: {},
  modules: {
    step
  }
});
