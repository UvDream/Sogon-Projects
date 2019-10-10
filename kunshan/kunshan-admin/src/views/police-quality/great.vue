<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 11:43:39
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-10 11:53:22
 * @Description: 重大警情
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom great">
    <div class="dashboard-bottom-left">
      <div class="dashboard-bottom-left-title">
        <a-icon type="file-text" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>重大警情</span>
        <a-radio-group @change="radioChange" v-model="radioVal" style="margin-left:40px;">
          <a-radio :value="1">真实数据</a-radio>
          <a-radio :value="2">人工数据</a-radio>
        </a-radio-group>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u325.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    top: 80px;
    width: 1px;
    height: 80%;
    background-color: #b3b3b3;
  }
}
</style>
