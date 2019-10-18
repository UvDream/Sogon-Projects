<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 15:34:11
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-18 14:24:31
 * @Description: 警情情况
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="警情情况" v-model="data" />
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <div v-for="(item,index) in greatList" :key="index" style="margin-top:10px">
            <section>{{item.name}}:</section>
            <a-input placeholder="数量" v-model="item.num" :disabled="disabled" />
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-center"></div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u362.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkHappen } from "../../api/police-quality/index";
export default {
  mixins: [data],
  components: {
    Title
  },
  data() {
    return {
      radioVal: 1,
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
      greatList: []
    };
  },
  mounted() {
    this.searchFunc(this.formdata);
  },
  methods: {
    searchFunc(data) {
      checkHappen(data).then(res => {
        if (res.code == 0) {
          console.log("警情情况");
          console.log(res);
          this.greatList = res.data.jqqk;
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
