<!--
 * @Author: xingmiao
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: xingmiao
 * @LastEditTime: 2019-10-11 11:53:54
 * @Description: 最近30天盘查人数与案发数对比折线图
 * @Email: arvin1234567890@foxmail.com
 -->

<template>
  <div class="dashboard-bottom" style="height: auto">
    <div class="dashboard-bottom-left">
      <Title title="最近30天盘查人数与案发数对比折线图" v-model="data"/>
      <div class="person-one">
        <div class="person-one-table">
          <section style="width:250px;">日期</section>
          <section>盘查人数</section>
          <section>案发数</section>
          <section></section>
        </div>
        <div class="person-one-table" v-for="(item,index) in tableList" :key="index">
          <section style="width:250px;">
            <a-input
              placeholder="01-01"
              :disabled="disabled"
              v-model="item.time"
            />
          </section>
          <section>
            <a-input
              placeholder="盘查人数"
              :disabled="disabled"
              v-model="item.pcnum"
            />
          </section>
          <section>
            <a-input
              placeholder="案发数"
              :disabled="disabled"
              v-model="item.afnum"
            />
          </section>
          <section>
            <a-icon
              type="minus-circle"
              v-if="index+1!=tableList.length &&disabled==false "
              @click="reduce(index,1)"
            />
            <a-icon
              type="plus-circle"
              v-if="index+1==tableList.length && disabled==false"
              @click="reduce(index,2)"
            />
          </section>
        </div>
        <div class="dashboard-bottom-left-content-btn">
          <a-button type="primary" @click="saveFunc">保存</a-button>
        </div>
      </div>        
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img style="width: 80%" src="../../assets/images/a_ypfx2.png" />
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
        // EmptyObjVal(this.tableList, "num");
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
    this.formdata.pcs = "昆山市公安局";
    this.searchFunc(this.formdata);    
  },
  methods: {
    searchFunc(data) {
      console.log(data)
      api.fetchTablePaiming(data).then(res=>{
        console.log(res.data.lastThirtyInvestigationNumAndCaseHappenList)
        this.tableList = res.data.lastThirtyInvestigationNumAndCaseHappenList;    
        this.data = res.data.lastThirtyInvestigationNumAndCaseHappenList[0].type;      
      })
    },
    saveFunc() {
      let param = {
        type: this.data,
        pcs: this.formdata.pcs,
        lastThirtyInvestigationNumAndCaseHappenList: this.tableList,
      };

      console.log(FormData)
      api.saveTablePaiming(param).then(res=>{
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      })
    },
    reduce(index, id) {
      if (id == 1) {
        this.tableList.splice(index, 1);
      } else {
        let obj = { type: "", number: "", color: "" };
        this.tableList.push(obj);
      }
    }
  },
  // 顶部派出所
  policeStation: function() {
    return this.$store.state.topSelect;
  },
  // 顶部星期
  topDate: function() {
    return this.$store.state.topDate;
  },
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
.person-one {
  margin: 0 20px;
  color: #666;
  &-table {
    display: flex;
    height: 40px;
    align-items: center;
    & > section{
      text-align: center;
      width: 33%;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #cbcbcb;
      border-left: solid 1px #cbcbcb;
      & > input{
        width:80%;
      }
    }
    & > section:nth-child(3) {
      border-right: solid 1px #cbcbcb;
    }
    & > section:last-child {
      width: 50px;
      border: none;
    }
  }
  &-table:nth-child(1){
    & > section{
      border-top: solid 1px #cbcbcb;
    }
    & > section:last-child {
      border-top: none;
    }
  }
}
</style>
