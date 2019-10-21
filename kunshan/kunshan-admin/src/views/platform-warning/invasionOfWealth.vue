<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:09:48
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-21 15:43:42
 * @Description:  侵财关注人员维护、预警处置情况
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom" style="height:360px" v-if="formdata.pcs=='昆山市公安局'">
    <div class="dashboard-bottom-left">
      <Title 
      title="侵财关注人员维护、预警处置情况" 
      v-model="data"/>
      <div class="table">
        <div class="table-row">
          <section style="border-top: solid 1px #cbcbcb;color:#999;">类型\派出所</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">维护任务数</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">完成数</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">侵财预警数</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">处置反馈</section>
        </div>
        <div class="table-row" v-for="(item, index) in tableList" :key="index">
          <section>{{item.pcsname}}</section>
          <section>
            <a-input v-model="item.whrwsnum" :disabled="disabled" />
          </section>
          <section>
            <a-input v-model="item.wcsnum" :disabled="disabled" />
          </section>
          <section>
            <a-input v-model="item.qcyjsnum" :disabled="disabled" />
          </section>
          <section>
            <a-input v-model="item.czfknum" :disabled="disabled" />
          </section>
          
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled" @click="saveFunc">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1509.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";
import { checkData, saveList } from "../../api/platform-warning/invasion-ofwealth";
import axios from "axios";

export default {
  mixins: [data],
  components: {
    TopSelect,
    Title
  },
  data() {
    return {
      radioVal: 1,
      selectVal: "",
      tab: 1,
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
      tableList: []
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
      if (val == 1) {
        // EmptyObjVal(this.tabList, "num");
        // EmptyObjVal(this.tableList, "pcrynum");
        // EmptyObjVal(this.tableList, "pczdrynum");
      } else if (val == 0) {
        this.searchFunc(this.formdata);
      }
    },
    // 警局下拉框变化
    policeStation: function(val) {
      this.formdata.pcs = val;
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
        pcs: this.policeStation,
        qcgzrywhyjczqkList: this.tableList
      };
      saveList(obj).then(res => {
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkData(data).then(res => {
        this.tableList = res.data.qcgzrywhyjczqkListQuery;
      });
    }
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
    height: 250px;
    background-color: #b3b3b3;
  }
}
.table {
  margin: 0 20px;
  &-row {
    display: flex;
    & > section{
      text-align: center;
      width: 20%;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #cbcbcb;
      border-left: solid 1px #cbcbcb;
      & > input{
        width:80%;
      }
    }
    & > section:last-child {
      border-right: solid 1px #cbcbcb;
    }
  }
}
</style>
