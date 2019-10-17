<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:11:20
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-17 14:14:47
 * @Description: 重点人员情况
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom" style="height:340px">
    <div class="dashboard-bottom-left">
      <Title
        title="重点人员情况"
        :check-status="checkStatus"
        v-model="data"
        @checkStatus="checkStatusFunc"
      />
      <div class="control" style="margin-left:10px">
        <!-- <MoreInput name="治安高危人员触网总人数" :is-check="true" :disabled="disabled" />
        <MoreInput name="侵财关注预警" :is-check="true" :disabled="disabled" />
        <MoreInput name="侵财盯控人数" :is-check="true" :disabled="disabled" />
        <MoreInput name="涉黑人数" :is-check="true" :disabled="disabled" />
        <MoreInput name="关爱回家" :is-check="true" :disabled="disabled" />
        <MoreInput name="临控人数" :is-check="true" :disabled="disabled" />
        <MoreInput name="临控车辆" :is-check="true" :disabled="disabled" />-->
        <MoreInput
          v-for="(item,index) in numberList"
          :key="index"
          :index="index"
          :disabled="disabled"
          :name="item.name"
          :check-status="item.check"
          v-model="item.number"
          @checkChange="checkChangeFunc"
        ></MoreInput>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1511.png" />
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
      // 全选状态 0未选 1部分选 2全选
      checkStatus: 0,
      numberList: [
        { name: "治安高危人员触网总人数", number: "11", check: false },
        { name: "侵财关注预警", number: "22", check: false },
        { name: "侵财盯控人数", number: "22", check: false },
        { name: "涉黑人数", number: "22", check: false },
        { name: "关爱回家", number: "22", check: false },
        { name: "临控人数", number: "22", check: false },
        { name: "临控车辆", number: "22", check: false }
      ]
    };
  },
  methods: {}
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
    height: 220px;
    background-color: #b3b3b3;
  }
}
.control {
  display: flex;
  flex-wrap: wrap;
}
</style>