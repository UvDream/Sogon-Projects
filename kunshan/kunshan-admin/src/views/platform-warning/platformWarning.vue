<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:56:27
* @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-21 17:38:22
 * @Description: 平台预警
 * @Email: UvDream@163.com
 -->
<template>
  <div class="platform" style="padding-bottom:20px">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <!-- 1 -->
    <EarlyWarning />
    <!-- 2 -->
    <PersonWarning />
    <!-- 3 -->
    <ControlSituation />
    <!-- 4 -->
    <InvasionOfWealth />
    <!-- 5 -->
    <KeyPersonnel />
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle.vue";
// 车辆卡口预警
import EarlyWarning from "./earlyWarning";
// 人像卡口预警
import PersonWarning from "./personWarning";
// 布控情况
import ControlSituation from "./controlSituation";
// 侵财关注人员维护、预警处置情况
import InvasionOfWealth from "./invasionOfWealth";
// 重点人员情况
import KeyPersonnel from "./keyPersonnel";
export default {
  components: {
    TopSelect,
    Title,
    EarlyWarning,
    PersonWarning,
    ControlSituation,
    InvasionOfWealth,
    KeyPersonnel
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
