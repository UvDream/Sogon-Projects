<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:56:27
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 11:13:05
 * @Description: 平台预警
 * @Email: UvDream@163.com
 -->
<template>
  <div class="platform">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <!-- 1 -->
    <PlatformWarning />
    <!-- 2 -->
    <ControlSituation />
    <!-- 3 -->
    <InvasionOfWealth />
    <!-- 4 -->
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-titlw/twoTitle";
// 车辆卡扣预警
import PlatformWarning from "./earlyWarning";
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
    PlatformWarning,
    ControlSituation,
    InvasionOfWealth,
    KeyPersonnel
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
