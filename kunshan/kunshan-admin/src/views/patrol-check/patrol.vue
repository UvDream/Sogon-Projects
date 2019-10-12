<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-12 09:47:36
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-12 16:56:32
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
        <!-- <MoreInput name="布控人数" :is-check="true" :check-status="checkList.one" :disabled="disabled" />
        <MoreInput
          name="当天布控人数"
          :is-check="true"
          :check-status="checkList.two"
          :disabled="disabled"
        />
        <MoreInput
          name="布控车辆"
          :is-check="true"
          :check-status="checkList.three"
          :disabled="disabled"
        />
        <MoreInput
          name="当天布控车辆"
          :is-check="true"
          :check-status="checkList.four"
          :disabled="disabled"
        />-->
        <MoreInput
          v-for="(item,index) in numberList"
          :key="index"
          :disabled="disabled"
          :name="item.name"
          :is-check="true"
          :check-status="item.check"
          v-model="item.number"
        ></MoreInput>
      </div>
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
            <Time v-model="item.time" :disabled="disabled" />
          </section>
          <section>
            <a-input
              placeholder="数值"
              style="width:160px"
              :disabled="disabled"
              v-model="item.number"
            />
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
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary" :disabled="disabled">保存</a-button>
      </div>
    </div>
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
      checkStatus: 2,
      checkList: { one: true, two: false, three: false, four: false },
      numberList: [
        { name: "布控人数", number: "11", check: true },
        { name: "当天布控车辆", number: "22", check: false },
        { name: "布控车辆", number: "22", check: false },
        { name: "布控车辆", number: "22", check: false }
      ],
      tableList: [{ time: new Date(), number: "" }]
    };
  },
  methods: {
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
.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 70px;
    width: 1px;
    height: 160px;
    background-color: #b3b3b3;
  }
}
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