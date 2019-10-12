<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-12 11:21:44
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 11:26:01
 * @Description: 执法仪质态
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" style="height:430px">
    <div class="dashboard-bottom-left">
      <Title title="执法仪质态" v-model="data" />
      <div class="mInput">
        <MoreInput name="上传总数" v-model="number" :disabled="disabled" />
        <MoreInput name="关联数" v-model="number" :disabled="disabled" />
        <MoreInput name="问题数" v-model="number" :disabled="disabled" />
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">分布图</span>
      </div>
      <div class="mInput">
        <MoreInput name="4G执法仪" v-model="number" :disabled="disabled" />
        <MoreInput name="4G车辆" v-model="number" :disabled="disabled" />
        <MoreInput name="移动接处警设备" v-model="number" :disabled="disabled" />
        <MoreInput name="摄像机" v-model="number" :disabled="disabled" />
        <MoreInput name="其他设备" v-model="number" :disabled="disabled" />
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled">保存</a-button>
      </div>
    </div>

    <div class="dashboard-bottom-right zf">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1248.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";

export default {
  mixins: [data],
  components: {
    TopSelect,
    Title,
    MoreInput
  },
  data() {
    return {
      number: ""
    };
  }
};
</script>

<style lang="less" scoped>
@import url("../police-quality/policeQuality");
.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 80px;
    width: 1px;
    height: 410px;
    background-color: #b3b3b3;
  }
}
.zf {
  &::before {
    content: "";
    position: absolute;
    top: 80px;
    width: 1px;
    height: 310px;
    background-color: #b3b3b3;
  }
}
.mInput {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}
</style>