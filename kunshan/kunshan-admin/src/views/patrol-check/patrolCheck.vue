<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:57:43
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 09:49:14
 * @Description: 巡逻盘查
 * @Email: UvDream@163.com
 -->

<template>
  <div class="platform" style="padding-bottom:20px">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <!-- 2 -->
    <Patrol />
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle.vue";

// 布控情况
import Patrol from "./patrol";

export default {
  components: {
    TopSelect,
    Title,
    Patrol
  },
  data() {
    return {
      selectVal: "",
      tab: 1
    };
  }
};
</script>

<style lang="less" scopes>
@import url("../police-quality/policeQuality");
</style>

