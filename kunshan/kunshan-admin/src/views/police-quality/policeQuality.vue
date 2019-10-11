<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:54:15
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 08:50:59
 * @Description: 警情质态
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <TopSelect />
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
import TopSelect from "../../components/top-select/topSelect";

export default {
  components: {
    Analysis,
    Great,
    Happening,
    Distributed,
    Abnormal,
    TopSelect
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
