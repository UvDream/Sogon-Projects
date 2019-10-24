<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:11:20
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-21 17:38:22
 * @Description: 重点人员情况
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom" style="height:340px">
    <div class="dashboard-bottom-left">
      <Title
        title="重点人员情况"
        v-model="data"
      />
      <div class="control" style="margin-left:10px">
        <MoreInput
          v-for="(item,index) in numberList"
          :key="index"
          :index="index"
          :disabled="disabled"
          :name="item.name"
          :check-status="item.check"
          v-model="item.num"
        ></MoreInput>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary"  @click="saveFunc">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1511.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import data from "../../mixin/data";
import { checkData, saveList } from "../../api/platform-warning/key-personnel";
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
        pcs: "昆山市公安局",
      },
      numberList: []
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
    saveFunc() {
      let obj = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.policeStation,
        keyPersonDo: {
          rycw:this.numberList[0].num,
          qcgz:this.numberList[1].num,
          qcdk:this.numberList[2].num,
          sh:this.numberList[3].num,
          gahj:this.numberList[4].num,
          gahl:this.numberList[5].num,
          lkrs:this.numberList[6].num,
          lkcl:this.numberList[7].num,
        }
      };
      saveList(obj).then(res => {
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkData(data).then(res => {
        this.numberList = res.data.zdry;
        this.data = res.data.zdry[0].type;
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
    height: 220px;
    background-color: #b3b3b3;
  }
}
.control {
  display: flex;
  flex-wrap: wrap;
}
</style>