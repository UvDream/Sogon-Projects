<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:03:51
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 11:44:05
 * @Description: 车辆卡扣预警
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" style="height:340px">
    <div class="dashboard-bottom-left">
      <Title title=" 车辆卡口预警情况" />
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1402.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-titlw/twoTitle";
export default {
  components: {
    TopSelect,
    Title
  }
};
</script>

<style lang="less" scoped>
@import url("../police-quality/policeQuality");
.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 70px;
    width: 1px;
    height: 210px;
    background-color: #b3b3b3;
  }
}
</style>