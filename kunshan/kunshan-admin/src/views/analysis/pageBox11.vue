<!--
 * @Author: xingmiao
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: xingmiao
 * @LastEditTime: 2019-10-11 11:53:54
 * @Description: 最近30天盘查人数与案发数对比折线图
 * @Email: arvin1234567890@foxmail.com
 -->

<template>
  <div class="dashboard-bottom" style="height:auto" v-show="formdata.pcs=='昆山市公安局'">
    <div class="dashboard-bottom-left">
      <Title title="各派出所周处警数" v-model="data"/>
      <div class="dashboard-bottom-left-table">
        <div class="dashboard-bottom-left-table-left">
          <div>单位名称</div>
          <div v-for="(item,index) in tableList"  :key="index">{{item.pcs}}</div>
        </div>
        <div class="dashboard-bottom-left-table-right">
          <div>
            <section>数值</section>
          </div>
          <div v-for="(item, index) in tableList" :key="index">
            <section>
              <a-input v-model="item.num" :disabled="disabled"/>
            </section>          
          </div>
        </div>
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
        <img style="width: 80%" src="../../assets/images/a_ypfx11.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import api from "./api11"
export default {
  mixins: [data],
  components: {
    TopSelect,
    Title
  },
  data() {
    return {
      disabled: true,
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
      },
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
    this.formdata.type = 2;
    this.searchFunc(this.formdata);    
  },
  methods: {
    searchFunc(data) {
      console.log(data)
      api.fetchTablePaiming(data).then(res=>{
        console.log(res.data.everyWeekPloliceNumList[0].type)
        this.tableList = res.data.everyWeekPloliceNumList;  
        if(res.data.everyWeekPloliceNumList.length > 0) {   
          this.data = res.data.everyWeekPloliceNumList[0].type;    
        }    
      })
    },
    saveFunc() {
      let param = {
        type: this.data,
        pcs: this.formdata.pcs,
        everyWeekPloliceNumList: this.tableList,
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
    top: 70px;
    width: 1px;
    height: 250px;
    background-color: #b3b3b3;
  }
}
.invasion-table {
  width: 422px;
}
.dashboard-bottom-left-table-right div section {
  width: 100%!important;
}
</style>
