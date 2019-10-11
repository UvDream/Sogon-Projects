<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 15:34:11
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-10 17:38:14
 * @Description: 警情情况
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="警情情况" />
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>呼入量:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>有效报警:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>违法犯罪警情:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>重大警情:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>涉娼警情:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>涉毒警情:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>涉黑警情:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>涉财警情:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon
          type="exception"
          style="margin:0 10px;font-size:22px;position:relative;top:3px;"
        />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u363.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle";

export default {
  components: {
    Title
  },
  data() {
    return {
      radioVal: 1
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
    top: 50px;
    width: 1px;
    height: 200px;
    background-color: #b3b3b3;
  }
}
</style>
