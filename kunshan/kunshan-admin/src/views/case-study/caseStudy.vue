<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-09 14:01:58
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-17 11:15:58
 * @Description: 一案一档一研判
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
  
    <div class="dashboard-bottom">
      <div class="dashboard-bottom-left">
        <Title 
        title="一案一档一研判"
        v-model="data"
        ></Title>
        <div class="table" v-if="tableList.length != 0">
          <div class="table-row">
            <section style="border-top: solid 1px #cbcbcb;color:#999;">类型\派出所</section>
            <section style="border-top: solid 1px #cbcbcb;color:#999;">不合格退回数</section>
            <section style="border-top: solid 1px #cbcbcb;color:#999;">一案一档数</section>
            <section style="border-top: solid 1px #cbcbcb;color:#999;">线索上报数</section>
            <section style="border-top: solid 1px #cbcbcb;color:#999;">办结数</section>
            <section style="border-top: solid 1px #cbcbcb;color:#999;">不合格返回数</section>
          </div>
          <div class="table-row" v-for="(item,index) in tableList" :key="index">
            <section>
              <span v-model="item.pcsname">{{item.name}}</span>
            </section>
            <section>
              <a-input
                placeholder="数值"
                :disabled="disabled"
                v-model="item.wfjqnum"
              />
            </section>
            <section>
              <a-input
                placeholder="数值"
                :disabled="disabled"
                v-model="item.yaydnum"
              />
            </section>
            <section>
              <a-input
                placeholder="数值"
                :disabled="disabled"
                v-model="item.xssbnum"
              />
            </section>
            <section>
              <a-input
                placeholder="数值"
                :disabled="disabled"
                v-model="item.bjnum"
              />
            </section>
            <section>
              <a-input
                placeholder="数值"
                :disabled="disabled"
                v-model="item.bhgfhnum"
              />
            </section>
          </div>
        </div>
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
          <img src="../../assets/images/u2072.png" />
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
import { checkData, saveList } from "../../api/case-study/index";
import axios from "axios";
import qs from "qs";
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
      tableList: [],
      numberList: [],
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
        oneCaseOneFileDo: {
          wlznum:this.numberList[0].num, 
          wpgnum:this.numberList[1].num,
          wypnum:this.numberList[2].num,
          wbjnum:this.numberList[3].num,
          yaydyypnumList:this.tableList
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
        this.numberList = res.data.onecaseonefilenum;
        if(res.data.onecaseonefilepicnum){
          this.tableList = res.data.onecaseonefilepicnum;
        }else{
          this.tableList = [];
        }
        
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

