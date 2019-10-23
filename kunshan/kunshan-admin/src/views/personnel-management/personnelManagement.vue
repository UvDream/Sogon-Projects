<!--
 * @Author: xingmiao
 * @Date: 2019-10-09 09:24:16
 * @LastEditors: xingmiao
 * @LastEditTime: 2019-10-11 11:53:54
 * @Description: 入所人员管理
 * @Email: arvin1234567890@foxmail.com
 -->
<template>
  <div class="dashboard">
    <TopSelect :select-val="selectVal" :tab-val="tab" />

    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">
        <Title title="入所人员管理质态" :is-check="false" v-model="data"/>
        <div class="control" style="margin-left:10px">
          <MoreInput
            v-for="(item,index) in numberList"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.num"
          ></MoreInput>
        </div>
        <sub-title :is-check="false" title="入所人员类别分布" />
        <div class="dashboard-bottom-left-table">
          <div class="dashboard-bottom-left-table-left">
            <div>类型</div>
            <div v-for="(item,index) in tableList1"  :key="index">{{item.name}}</div>
          </div>
          <div class="dashboard-bottom-left-table-right">
            <div>
              <section>数值</section>
            </div>
            <div v-for="(item, index) in tableList1" :key="index">
              <section>
                <a-input v-model="item.num" :disabled="disabled"/>
              </section>
            </div>
          </div>
        </div>
        <sub-title :is-check="false" title="入所人员派出所排名" />
        <div class="dashboard-bottom-left-table">
          <div class="dashboard-bottom-left-table-left">
            <div>派出所</div>
            <div v-for="(item,index) in tableList2"  :key="index">{{item.name}}</div>
          </div>
          <div class="dashboard-bottom-left-table-right">
            <div>
              <section>数值</section>
            </div>
            <div v-for="(item, index) in tableList2" :key="index">
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
          <img src="../../assets/images/u2279.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle.vue";
import SubTitle from "../../components/sub-title/subTitle";
import TopSelect from "../../components/top-select/topSelect";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import api from "./api"
export default {
  mixins: [data],
  components: {
    Title,
    SubTitle,
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
      subTitleName: '派出所笔录总数排名',
      numberList: [],
      tableList1: [
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
      ],
      tableList2: [
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
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
        this.numberList = res.data.rytj;
        this.tableList1 = res.data.rylb; 
        this.tableList2 = res.data.rank; 
        this.data = res.data.rytj[0].type;
      })
    },
    saveFunc() {
      let param = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.formdata.pcs,
        rytj: this.numberList,
        rylb: this.tableList1,
        rank: this.tableList2,
      };

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
.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 70px;
    width: 1px;
    height: 80%;
    background-color: #b3b3b3;
  }
}
</style>
