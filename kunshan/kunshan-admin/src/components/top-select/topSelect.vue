<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 08:47:45
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 08:57:56
 * @Description: 顶部下拉选择框
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-top">
    <a-select style="width: 250px;padding-left:14px" placeholder="请选择大屏" @change="selectChange">
      <a-select-option value="jack">Jack</a-select-option>
      <a-select-option value="lucy">Lucy</a-select-option>
      <a-select-option value="Yiminghe">yiminghe</a-select-option>
    </a-select>
    <div style="padding-right:14px" class="dashboard-top-week">
      <section @click="tabCLick(1)" :class="{ 'dashboard-top-week-click': tabVal === 1 }">日</section>
      <section @click="tabCLick(2)" :class="{ 'dashboard-top-week-click': tabVal === 2 }">周</section>
      <section @click="tabCLick(3)" :class="{ 'dashboard-top-week-click': tabVal === 3 }">月</section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectVal: "",
    tabVal: {
      default: 1
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    tabCLick(id) {
      this.tabVal = id;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../views/police-quality/policeQuality.less");
</style>