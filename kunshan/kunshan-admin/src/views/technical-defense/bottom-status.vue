<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-12 11:21:44
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 11:26:01
 * @Description: 执法仪质态
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" style="height:auto">
    <div class="dashboard-bottom-left">
      <Title title="执法仪质态" v-model="data" />
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
      <div class="dashboard-bottom-left-title" v-show="this.formdata.pcs=='昆山市公安局'">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">分布图</span>
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
        <a-button type="primary" @click="saveFunc">保存</a-button>
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
import api from "./api2"
export default {
  mixins: [data],
  components: {
    Title,
    TopSelect,
    MoreInput
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
    this.formdata.type = 2;
    this.searchFunc(this.formdata);    
  },
  methods: {
    searchFunc(data) {
      console.log(data)
      api.fetchTablePaiming(data).then(res=>{
        console.log(res.data.penrecordnumpm)
        this.numberList1 = res.data.zfy;
        this.numberList2 = res.data.zfyfb;
        if(res.data.zfy.length > 0) {
          this.data = res.data.zfy[0].type;    
        }
      })
    },
    saveFunc() {
      let param = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.formdata.pcs,
        zfy: this.numberList1,
        zfyfb: this.numberList2
      };

      console.log(FormData)
      api.saveTablePaiming(param).then(res=>{
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
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