<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-09 14:00:17
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-17 16:03:17
 * @Description: 扫黑专项斗争
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
  
    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">
        <Title 
        title="扫黑专项斗争"
        v-model="data"
        ></Title>
        <div class="dashboard-bottom-left-title">
            <a-icon type="file-text" style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;" />
            <span style="font-size:12px">九类刑事案件</span>
        </div>
        <div class="control" style="margin-left:10px">
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
            <a-icon type="file-text" style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;" />
            <span style="font-size:12px">八类行政案件</span>
        </div>
        <div class="control" style="margin-left:10px">
          <MoreInput
            v-for="(item,index) in numberList2"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.num"
          ></MoreInput>
        </div>
        <div class="dashboard-bottom-left-title">
            <a-icon type="file-text" style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;" />
            <span style="font-size:12px">其他</span>
        </div>
        <div class="control" style="margin-left:10px">
          <MoreInput
            v-for="(item,index) in numberList3"
            :key="index"
            :index="index"
            :disabled="disabled"
            :name="item.name"
            v-model="item.num"
          ></MoreInput>
        </div>
        <div class="dashboard-bottom-left-content-btn">
          <a-button type="primary" :disabled="disabled" @click="saveFunc">保存</a-button>
        </div>
      </div>
      <div class="dashboard-bottom-center"></div>
      <div class="dashboard-bottom-right">
        <div class="dashboard-bottom-right-title">
          <a-icon
            type="exception"
            style="margin:0 10px;font-size:22px;position:relative;top:3px;"
          />
          <span>可视化样例</span>
        </div>
        <div class="dashboard-bottom-right-content">
          <img src="../../assets/images/u1875.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import { checkData, saveList } from "../../api/black-sweep/index";
import axios from "axios";
 
import { EmptyObjVal, EmptyArray } from "../../util/util";
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
      numberList1: [],
      numberList2: [],
      numberList3: [],
      formdata: {
        type: 2,
        dateType: "日",
        pcs: this.$store.state.topSelect
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
      if (val == 1) {
        // EmptyObjVal(this.numberList, "num");
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
        pcs: this.policeStation,
        dateType: this.formdata.dateType,
        nineClassDo: {
          las:this.numberList1[0].num, 
          pas:this.numberList1[1].num,
          dcs:this.numberList1[2].num
        },
        eightClassDo: {
          las:this.numberList2[0].num, 
          pas:this.numberList2[1].num,
          dcs:this.numberList2[2].num
        },
        otherClassDo: {
          dhxs:this.numberList3[0].num, 
          zdry:this.numberList3[1].num,
          dwhs:this.numberList3[2].num
        }
      };
      saveList(obj).then(res => {
        // console.log("保存");
        // console.log(res);
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkData(data).then(res => {
        this.numberList1 = res.data.jlxsaj;
        this.numberList2 = res.data.blxzaj;
        this.numberList3 = res.data.qt;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../police-quality/policeQuality");
.control {
  display: flex;
  flex-wrap: wrap;
}
.table {
  margin: 0 20px;
  &-row {
    display: flex;
    & > section{
      text-align: center;
      width: 16%;
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

