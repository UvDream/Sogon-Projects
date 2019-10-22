<!--
 * @Author: xingmiao
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: xingmiao
 * @LastEditTime: 2019-10-11 11:53:54
 * @Description: 高危人员分析与手机采集情况
 * @Email: arvin1234567890@foxmail.com
 -->
<template>
  <div class="dashboard">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">        
        <Title :is-check="false" title="高危人员分析与手机采集情况"  v-model="data"/>
        <div class="dashboard-bottom-left-table">
          <div class="dashboard-bottom-left-table-left" style="width: 30%">
            <div class="h50 lh3">派出所\数值</div>
            <div v-for="(item,index) in tableList"  :key="index">{{item.pcsname}}</div>
          </div>
          <div class="dashboard-bottom-left-table-right" style="width: 70%">
            <div>
              <section class="h50 lh1">本周人员采集情况</section>
              <section class="h50 lh1">上周人员采集情况</section>
              <section class="h50 lh1">本周手机采集数</section>
              <section class="h50 lh1">上周手机采集数</section>
            </div>
            <div v-for="(item, index) in tableList" :key="index">              
              <section>
                <a-input v-model="item.bzrycjsnum" :disabled="disabled"/>
              </section>
              <section>
                <a-input v-model="item.szrycjsnum" :disabled="disabled"/>
              </section>
              <section>
                <a-input v-model="item.bzsjcjsnum" :disabled="disabled"/>
              </section>
              <section>
                <a-input v-model="item.szsjcjsnum" :disabled="disabled"/>
              </section>
            </div>
          </div>
        </div>
        <div class="dashboard-bottom-left-content-btn">
          <a-button type="primary" @click="saveFunc" :disabled="disabled">保存</a-button>
        </div>
      </div>
      <div class="dashboard-bottom-right">
        <div class="dashboard-bottom-right-title">
          <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
          <span>可视化样例</span>
        </div>
        <div class="dashboard-bottom-right-content">
          <img src="../../assets/images/u2998.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle.vue";
import TopSelect from "../../components/top-select/topSelect";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import api from "./api"
export default {
  mixins: [data],
  components: {
    TopSelect,
    Title
  },
  data() {
    return {
      selectVal: "",
      tab: 1,
      tableList: [
        { qy: 200 },
        { qy: 200 },
        { qy: 200 },
        { qy: 200 },
        { qy: 200 }
      ]
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
        // EmptyObjVal(this.numberList, "num");
        // EmptyObjVal(this.tableList, "pcrynum");
        // EmptyObjVal(this.tableList, "pczdrynum");
        this.formdata.type = val;
        this.searchFunc(this.formdata);
      } else if (val == 0) {
        this.formdata.type = val;
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
    this.formdata.type = 0;
    this.searchFunc(this.formdata);    
  },
  methods: {
    searchFunc(data) {
      console.log(data)
      api.fetchTablePaiming(data).then(res=>{
        console.log(res.data.highRiskAnalyseAndPhoneCollectList)
        this.tableList = res.data.highRiskAnalyseAndPhoneCollectList;        
      })
    },
    saveFunc() {
      let param = {
        type: 1,
        pcs: this.formdata.pcs,
        highRiskAnalyseAndPhoneCollectList: this.tableList,
      };

      console.log(FormData)
      api.saveTablePaiming(param).then(res=>{
    
      })
    }
  },
  // 顶部派出所
  policeStation: function() {
    return this.$store.state.topSelect;
  },
  // 顶部星期
  topDate: function() {
    return this.$store.state.topDate;
  }
};
</script>

<style lang="less" scoped>
@import url("../police-quality/policeQuality");
.control {
  display: flex;
  flex-wrap: wrap;
}
.dashboard-bottom-left-table-right div section {
  width: 100%!important;
}
.h50 {
  width: 100%!important;
  height: 50px!important;
}
.lh1 {
  display: flex;
  align-items: center;
  line-height: 1.8!important;
}
.lh3 {
  display: flex;
  align-items: center;
  line-height: 3!important;
}
.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 70px;
    width: 1px;
    height: 400px;
    background-color: #b3b3b3;
  }
}
</style>
