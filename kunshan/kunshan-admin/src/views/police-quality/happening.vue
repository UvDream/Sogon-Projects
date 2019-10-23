<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 15:34:11
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 13:39:15
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
        <img src="../../assets/images/u362.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkHappen, saveHappen } from "../../api/police-quality/index";
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
    this.searchFunc(this.formdata);
  },
  methods: {
    saveFunc() {
      let obj = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.formdata.pcs,
        jqqk: this.greatList
      };
      saveHappen(obj).then(res => {
        console.log(res);
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkHappen(data).then(res => {
        if (res.code == 0) {
          console.log("警情情况");
          console.log(res);
          res.data.jqqk ? (this.data = res.data.jqqk[0].type) : "";
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
