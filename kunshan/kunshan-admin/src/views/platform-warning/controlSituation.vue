<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:07:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 15:45:53
 * @Description: 布控
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom" style="height:275px">
    <div class="dashboard-bottom-left">
      <Title title="布控情况" />
      <div class="control" style="margin-left:10px">
        <MoreInput name="布控人数" :is-check="true" />
        <MoreInput name="当天布控人数" :is-check="true" />
        <MoreInput name="布控车辆" :is-check="true" />
        <MoreInput name="当天布控车辆" :is-check="true" />
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1434.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
export default {
  components: {
    TopSelect,
    Title,
    MoreInput
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
    height: 160px;
    background-color: #b3b3b3;
  }
}
.control {
  display: flex;
  flex-wrap: wrap;
}
</style>