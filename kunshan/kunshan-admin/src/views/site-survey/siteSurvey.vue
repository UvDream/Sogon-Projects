<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:59:03
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-09 13:59:03
 * @Description: 现场勘查
 * @Email: UvDream@163.com
 -->
<template>
  <div class="platform" style="padding-bottom:20px">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <!-- 2 -->
    <Quality />
    <Infomation />
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle.vue";

// 布控情况
import Quality from "./quality";
import Infomation from "./infomation";

export default {
  components: {
    TopSelect,
    Title,
    Quality,
    Infomation
  },
  data() {
    return {
      selectVal: "昆山市公安局",
      tab: 1
    };
  }
};
</script>

<style lang="less" scopes>
@import url("../police-quality/policeQuality");
</style>


