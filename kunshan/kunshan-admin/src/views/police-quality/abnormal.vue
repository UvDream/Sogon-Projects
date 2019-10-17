<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 09:02:22
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-17 19:57:23
 * @Description: 异常报警分析
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="异常报警分析" v-model="data" />
      <PhoneTop :title="'24小时'" :phoneList="dailyCall" :disabled="disabled" />
      <PhoneTop :title="'30天'" :phoneList="monthCall" :disabled="disabled" />
      <PhoneTop :title="'半年'" :phoneList="halfYearCall" :disabled="disabled" />
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
        <img src="../../assets/images/u752.png" />
      </div>
    </div>
  </div>
</template>

<script>
import PhoneTop from "./phoneTop";
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkAbnormal } from "../../api/police-quality/index";

export default {
  mixins: [data],
  components: {
    PhoneTop,
    Title
  },
  data() {
    return {
      radioVal: 1,
      phoneList: [],
      dailyCall: [],
      halfYearCall: [],
      monthCall: [],
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      }
    };
  },
  mounted() {
    this.searchFunc(this.formdata);
  },
  methods: {
    searchFunc(data) {
      checkAbnormal(data).then(res => {
        if (res.code == 0) {
          console.log("异常报警分析");
          console.log(res);
          this.dailyCall = res.data.dailyCall;
          this.halfYearCall = res.data.halfYearCall;
          this.monthCall = res.data.monthCall;
        }
      });
    },
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
