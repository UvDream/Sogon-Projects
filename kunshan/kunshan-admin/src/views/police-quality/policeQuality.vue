<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:54:15
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-10 16:27:58
 * @Description: 警情质态
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <div class="dashboard-top">
      <a-select style="width: 250px;padding-left:14px" placeholder="请选择大屏" @change="selectChange">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <div style="padding-right:14px" class="dashboard-top-week">
        <section @click="tabCLick(1)" :class="{ 'dashboard-top-week-click': tab === 1 }">日</section>
        <section @click="tabCLick(2)" :class="{ 'dashboard-top-week-click': tab === 2 }">周</section>
        <section @click="tabCLick(3)" :class="{ 'dashboard-top-week-click': tab === 3 }">月</section>
      </div>
    </div>
    <Analysis />
    <Great />
    <Happening />
    <Distributed />
    <Abnormal />
  </div>
</template>

<script>
import Analysis from "./analysis";
import Great from "./great";
import Happening from "./happening";
import Distributed from "./distributed";
import Abnormal from "./abnormal";
export default {
  components: {
    Analysis,
    Great,
    Happening,
    Distributed,
    Abnormal
  },
  data() {
    return {
      radioVal: 1,
      selectVal: "",
      tab: 1
    };
  },
  methods: {
    radioChange(e) {},
    selectChange(value) {
      this.selectVal = value;
      console.log(this.selectVal);
      console.log(value);
    },
    tabCLick(id) {
      this.tab = id;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./policeQuality.less");
</style>
