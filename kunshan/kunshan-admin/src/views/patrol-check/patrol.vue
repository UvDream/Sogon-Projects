<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-12 09:47:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-14 16:53:05
 * @Description: 巡逻盘查质态
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" style="height:100%">
    <div class="dashboard-bottom-left">
      <Title
        title="巡逻盘查质态"
        :is-check="true"
        :check-status="checkStatus"
        v-model="data"
        @checkStatus="checkStatusFunc"
      />
      <div class="control" style="margin-left:10px">
        <MoreInput
          v-for="(item,index) in numberList"
          :key="index"
          :index="index"
          :disabled="disabled"
          :name="item.name"
          :is-check="true"
          :check-status="item.check"
          v-model="item.num"
          @checkChange="checkChangeFunc"
        ></MoreInput>
      </div>
      <!-- 盘查人员 -->
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">24小时时段盘查人员数及盘查重点人员数</span>
      </div>
      <div class="table">
        <div class="table-row">
          <section style="border-top: solid 1px #cbcbcb;color:#999;">时间</section>
          <section style="border-top: solid 1px #cbcbcb;color:#999;">数值</section>
          <section></section>
        </div>
        <div class="table-row" v-for="(item,index) in tableList" :key="index">
          <section>
            <Time v-model="item.hour" :disabled="disabled" :format="'YYYY-MM-DD'" />
          </section>
          <section>
            <a-input placeholder="数值" style="width:160px" :disabled="disabled" v-model="item.num" />
          </section>
          <section>
            <a-icon
              type="plus-circle"
              v-if="index+1==tableList.length &&disabled==false"
              @click="reduce(1,index)"
            />
            <a-icon
              type="minus-circle"
              v-if="index+1!=tableList.length &&disabled==false"
              @click="reduce(2,index)"
            />
          </section>
        </div>
      </div>
      <!-- 保存 -->
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-center"></div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1635.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";
import Time from "../../components/time/time.vue";
import data from "../../mixin/data";
import { checkPatrol } from "../../api/patrol-check/index";
import axios from "axios";
import qs from "qs";
import { EmptyObjVal } from "../../util/util";

export default {
  mixins: [data],
  components: {
    TopSelect,
    Title,
    MoreInput,
    Time
  },
  data() {
    return {
      // 全选状态 0未选 1部分选 2全选
      checkStatus: 0,
      numberList: [],
      tableList: [{ time: new Date(), number: "" }],
      pczdrynum: [],
      formdata: {
        type: 2,
        dateType: "日",
        pcs: "昆山"
      }
    };
  },
  watch: {
    data: function(val) {
      if (val == 1) {
        EmptyObjVal(this.numberList, "num");
        EmptyObjVal(this.tableList, "num");
        EmptyObjVal(this.pczdrynum, "num");
      } else if (val == 0) {
        this.formdata.type = val;
        this.searchFunc(this.formdata);
      }
    }
  },
  mounted() {
    // 检测全选状态
    // this.findCheck();
    this.searchFunc(this.formdata);
  },
  methods: {
    // 查询盘查质态
    searchFunc(data) {
      checkPatrol(data).then(res => {
        this.numberList = res.data.pcnum;
        this.numberList.forEach(item => {
          item.check == "true" ? (item.check = true) : (item.check = false);
        });
        this.tableList = res.data.pcrynum;
        this.pczdrynum = res.data.pczdrynum;
      });
    },
    // 单选按钮状态改变
    checkChangeFunc(val, index) {
      this.numberList[index].check = val;
      this.findCheck();
    },
    // 检测全选状态
    findCheck() {
      this.numberList.every(item => {
        return !item.check;
      })
        ? (this.checkStatus = 0)
        : "";
      this.numberList.every(item => {
        return item.check;
      })
        ? (this.checkStatus = 2)
        : "";
    },
    // 全选状态获取
    checkStatusFunc(val) {
      this.numberList.forEach(item => {
        item.check = val;
      });
    },
    // 表格添加删除
    reduce(id, index) {
      if (id == 1) {
        let obj = { time: new Date(), number: "" };
        this.tableList.push(obj);
      } else {
        this.tableList.splice(index, 1);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../police-quality/policeQuality");
// .dashboard-bottom-right {
//   &::before {
//     content: "";
//     position: absolute;
//     top: 70px;
//     width: 1px;
//     height: 80%;
//     background-color: #b3b3b3;
//   }
// }
.control {
  display: flex;
  flex-wrap: wrap;
}
.table {
  width: 380px;
  margin: 0 auto;
  &-row {
    display: flex;
    & > section:nth-child(1) {
      text-align: center;
      width: 190px;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #cbcbcb;
      border-left: solid 1px #cbcbcb;
    }
    & > section:nth-child(2) {
      text-align: center;
      width: 170px;
      height: 40px;
      line-height: 40px;
      border-bottom: solid 1px #cbcbcb;
      border-left: solid 1px #cbcbcb;
      border-right: solid 1px #cbcbcb;
    }
    & > section:nth-child(3) {
      width: 20px;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>