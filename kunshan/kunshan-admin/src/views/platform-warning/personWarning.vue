<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:03:51
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-06 13:53:55
 * @Description: 车辆卡扣预警
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" style="height:420px" v-if="formdata.pcs=='昆山市公安局'">
    <div class="dashboard-bottom-left">
      <Title title=" 人像卡口预警情况" v-model="data" />
      <div class="person-one">
        <div style="height:300px;overflow-y:auto">
          <div class="person-one-table">
            <section>姓名</section>
            <section style="width:220px;">预警时间</section>
            <section>预警地点</section>
            <section></section>
          </div>
          <div class="person-one-table" v-for="(item,index) in numberList" :key="index">
            <section>
              <a-input placeholder="姓名" :disabled="disabled" v-model="item.xm" />
            </section>
            <section style="width:220px;">
              <Time v-model="item.yjsj" :disabled="disabled" :format="'YYYY-MM-DD'" />
            </section>
            <section>
              <a-input placeholder="预警地点" :disabled="disabled" v-model="item.yjdd" />
            </section>
            <section>
              <a-icon
                type="minus-circle"
                v-if="index+1!=numberList.length &&disabled==false "
                @click="reduce(index,1)"
              />
              <a-icon
                type="plus-circle"
                v-if="index+1==numberList.length && disabled==false"
                @click="reduce(index,2)"
              />
            </section>
          </div>
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
        <img src="../../assets/images/u1403.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import Time from "../../components/time/time.vue";
import data from "../../mixin/data";
import { checkData, saveList } from "../../api/platform-warning/person-warning";
import axios from "axios";

export default {
  mixins: [data],
  components: {
    Time,
    TopSelect,
    Title
  },
  data() {
    return {
      radioVal: 1,
      selectVal: "昆山市公安局",
      tab: 1,
      formdata: {
        type: 2,
        dateType: "日",
        pcs: "昆山市公安局"
      },
      numberList: [{}, {}, {}, {}, {}, {}, {}, {}]
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
    // if(this.formdata.pcs=="昆山市公安局"){
    //   this.searchFunc(this.formdata);
    // }
    this.formdata.type = 2;
    this.searchFunc(this.formdata);
  },
  methods: {
    saveFunc() {
      let obj = {
        type: this.data,
        dateType: this.formdata.dateType,
        pcs: this.policeStation,
        peopleWarningList: this.numberList
      };
      saveList(obj).then(res => {
        if (res.code == 0) {
          this.$message.success("保存成功!");
        }
      });
    },
    searchFunc(data) {
      checkData(data).then(res => {
        this.numberList = res.data.peopleWarningListQuery;
        if (res.data.peopleWarningListQuery.length > 0) {
          this.data = res.data.peopleWarningListQuery[0].type;
        }
      });
    },
    reduce(index, id) {
      if (id == 1) {
        this.numberList.splice(index, 1);
      } else {
        let obj = { type: "", number: "", color: "" };
        this.numberList.push(obj);
      }
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
    height: 210px;
    background-color: #b3b3b3;
  }
}
.person-one {
  margin-left: 10px;
  color: #666;
  &-table {
    display: flex;
    height: 40px;
    align-items: center;

    & > section {
      text-align: center;

      width: 33%;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #cbcbcb;
      border-left: solid 1px #cbcbcb;
      & > input {
        width: 80%;
      }
    }
    & > section:nth-child(3) {
      border-right: solid 1px #cbcbcb;
    }
    & > section:last-child {
      width: 40px;
      border: none;
    }
  }
  &-table:nth-child(1) {
    & > section {
      border-top: solid 1px #cbcbcb;
    }
    & > section:last-child {
      border-top: none;
    }
  }
}
</style>