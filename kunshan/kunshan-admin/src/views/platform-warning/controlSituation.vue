<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:07:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-06 13:42:31
 * @Description: 布控
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom" style="height:275px" v-if="formdata.pcs=='昆山市公安局'">
    <div class="dashboard-bottom-left">
      <Title title="布控情况" v-model="data" @checkStatus="checkStatusFunc" />
      <div class="control" style="margin-left:10px">
        <MoreInput :disabled="disabled" name="布控人数" v-model="bkqkList.bkrsnum" />
        <MoreInput :disabled="disabled" name="当天布控人数" v-model="bkqkList.dtbkrsnum" />
        <MoreInput :disabled="disabled" name="布控车辆" v-model="bkqkList.bkclnum" />
        <MoreInput :disabled="disabled" name="当天布控车辆" v-model="bkqkList.dtbkclnum" />
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" @click="saveFunc">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1434.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import {
  checkData,
  saveList
} from "../../api/platform-warning/control-situation";
import axios from "axios";

export default {
  mixins: [data],
  components: {
    TopSelect,
    Title,
    MoreInput
  },
  data() {
    return {
      radioVal: 1,
      selectVal: "",
      tab: 1,
      formdata: {
        type: 2,
        dateType: "日",
        pcs: "昆山市公安局"
      },
      bkqkList: {
        bkrsnum: "11",
        dtbkclnum: "22",
        dtbkrsnum: "22",
        bkclnum: "22"
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
      if (this.formdata.pcs == "昆山市公安局") {
        this.searchFunc(this.formdata);
      }
    }
    // 日,周,月变化
    // topDate: function(val) {
    //   let obj = {
    //     1: "日",
    //     2: "周",
    //     3: "月"
    //   };
    //   this.formdata.dateType = obj[val];
    //   if(this.formdata.pcs=="昆山市公安局"){
    //     this.searchFunc(this.formdata);
    //   }
    // }
  },
  mounted() {
    this.formdata.type = 2;
    this.searchFunc(this.formdata);
  },
  methods: {
    saveFunc() {
      let obj = {
        type: this.data,
        pcs: this.policeStation,
        bkqkList: this.bkqkList
      };
      saveList(obj).then(res => {
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkData(data).then(res => {
        this.bkqkList = res.data.bkqkListQuery;
        this.data = res.data.bkqkListQuery.type;
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
    height: 160px;
    background-color: #b3b3b3;
  }
}
.control {
  display: flex;
  flex-wrap: wrap;
}
</style>