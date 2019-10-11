<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="异常报警分析" />
      <PhoneTop :title="'24小时'" />
      <PhoneTop :title="'30天'" />
      <PhoneTop :title="'半年'" />
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
        <img src="../../assets/images/u752.png" />
      </div>
    </div>
  </div>
</template>

<script>
import PhoneTop from "./phoneTop";
import Title from "../../components/two-titlw/twoTitle";
export default {
  components: {
    PhoneTop,
    Title
  },
  data() {
    return {
      radioVal: 1,
      phoneList: []
    };
  },
  methods: {
    radioChange(e) {}
  }
};
</script>

<style lang="less" scoped>
@import url("./policeQuality.less");
.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 80px;
    width: 1px;
    height: 880px;
    background-color: #b3b3b3;
  }
}
</style>
