<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 09:02:22
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 14:02:27
 * @Description: 异常报警分析
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" v-show="formdata.pcs=='昆山市公安局'">
    <div class="dashboard-bottom-left">
      <Title title="异常报警分析" v-model="data" />
      <PhoneTop :title="'24小时'" :phoneList="dailyCall" :disabled="disabled" />
      <PhoneTop :title="'30天'" :phoneList="monthCall" :disabled="disabled" />
      <PhoneTop :title="'半年'" :phoneList="halfYearCall" :disabled="disabled" />
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" @click="saveFunc">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-center"></div>

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
import { checkAbnormal, saveAbnormal } from "../../api/police-quality/index";

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
        dateType: "日",
        type: 2,
        pcs: this.$store.state.topSelect
      }
    };
  },

  computed: {
    // 顶部派出所
    policeStation: function() {
      return this.$store.state.topSelect;
    },
    // 顶部星期
    topDate: function() {
      return this.$store.state.topDate;
    }
  },
  watch: {
    data: function(val) {
      this.formdata.type = val;
      this.searchFunc(this.formdata);
    },
    // 警局下拉框变化
    policeStation: function(val) {
      this.formdata.pcs = val;
      this.formdata.type = 2;

      this.searchFunc(this.formdata);
    },
    // 日,周,月变化
    topDate: function(val) {
      let obj = {
        1: "日",
        2: "周",
        3: "月"
      };
      this.formdata.dateType = obj[val];
      this.searchFunc(this.formdata);
    }
  },
  mounted() {
    this.formdata.type = 2;
    this.searchFunc(this.formdata);
  },
  methods: {
    saveFunc() {
      let obj = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.formdata.pcs,
        dailyCall: this.dailyCall,
        halfYearCall: this.halfYearCall,
        monthCall: this.monthCall
      };
      saveAbnormal(obj).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkAbnormal(data).then(res => {
        if (res.code == 0) {
          console.log("异常报警分析");
          console.log(res);
          // this.data = res.data;
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
</style>
