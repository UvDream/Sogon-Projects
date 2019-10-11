<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:03:51
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 14:12:01
 * @Description: 车辆卡扣预警
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom" style="height:340px">
    <div class="dashboard-bottom-left">
      <Title title=" 车辆卡口预警情况" />
      <div class="early-one">
        <div class="early-one-table">
          <section>车辆类型</section>
          <section>车牌号码</section>
          <section>车身颜色</section>
          <section></section>
        </div>
        <div class="early-one-table" v-for="(item,index) in tabList" :key="index">
          <section>
            <a-select defaultValue="lucy" style="width: 110px" v-model="item.type">
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
              <a-select-option value="disabled" disabled>Disabled</a-select-option>
              <a-select-option value="Yiminghe">yiminghe</a-select-option>
            </a-select>
          </section>
          <section>
            <a-input placeholder="车牌号" style="width: 130px" v-model="item.number" />
          </section>
          <section>
            <a-input placeholder="车身颜色" style="width: 130px" v-model="item.color" />
          </section>
          <section>
            <a-icon type="minus-circle" v-if="index+1!=tabList.length " @click="reduce(index,1)" />
            <a-icon type="plus-circle" v-if="index+1==tabList.length" @click="reduce(index,2)" />
          </section>
        </div>
        <div class="dashboard-bottom-left-content-btn">
          <a-button type="primary">保存</a-button>
        </div>
      </div>
    </div>

    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1402.png" />
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
export default {
  components: {
    TopSelect,
    Title
  },
  data() {
    return {
      tabList: [
        { type: "lucy", number: "", color: "" },
        { type: "lucy", number: "", color: "" }
      ]
    };
  },
  methods: {
    reduce(index, id) {
      if (id == 1) {
        this.tabList.splice(index, 1);
      } else {
        let obj = { type: "", number: "", color: "" };
        this.tabList.push(obj);
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
.early-one {
  width: 420px;
  margin: 0 auto;
  color: #666;
  &-table {
    display: flex;
    border-bottom: 1px solid #ccc;
    height: 40px;
    align-items: center;
    & > section:nth-child(1) {
      width: 120px;
    }
    & > section:nth-child(2) {
      width: 140px;
    }
    & > section:nth-child(3) {
      width: 140px;
    }
    & > section:nth-child(4) {
      width: 20px;
    }
  }
}
</style>