<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:55:27
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 11:24:07
 * @Description: 科技技防运行
 * @Email: UvDream@163.com
 -->
<template>
  <div class="technical" style="padding-bottom:20px">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <div class="dashboard-bottom" style="height:520px">
      <div class="dashboard-bottom-left">
        <Title title=" 科技技防运行质态" v-model="data" />
        <div class="mInput">
          <MoreInput
            v-for="(item,index) in numberList1"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.num"
          ></MoreInput>
        </div>
        <div class="dashboard-bottom-left-title">
          <a-icon
            type="file-text"
            style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
          />
          <span style="font-size:12px">警用设备损坏情况分布</span>
        </div>
        <div class="mInput">
          <MoreInput
            v-for="(item,index) in numberList2"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.num"
          ></MoreInput>
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
          <img src="../../assets/images/u1043.png" />
        </div>
      </div>
    </div>
    <BottomStatus />
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import BottomStatus from "./bottom-status";
import api from "./api1"
export default {
  mixins: [data],
  components: {
    Title,
    TopSelect,
    MoreInput,
    BottomStatus
  },
  data() {
    return {
      selectVal: "",
      tab: 1,
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
      obj: {
        1: "日",
        2: "周",
        3: "月"
      },
      numberList1: [],
      numberList2: [],
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
        // EmptyObjVal(this.tableList1, "pcrynum");
        // EmptyObjVal(this.tableList1, "pczdrynum");
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
        console.log(res.data.penrecordnumpm)
        this.numberList1 = res.data.kjjf;
        this.numberList2 = res.data.jysb;
      })
    },
    saveFunc() {
      let param = {
        type: 1,
        dateType: this.formdata.dateType,
        pcs: this.formdata.pcs,
        kjjf: this.numberList1,
        jysb: this.numberList2
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
