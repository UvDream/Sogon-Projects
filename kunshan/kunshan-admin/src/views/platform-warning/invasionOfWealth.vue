<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-11 11:09:48
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 14:21:26
 * @Description:  侵财关注人员维护、预警处置情况
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom" style="height:360px">
    <div class="dashboard-bottom-left">
      <Title title="侵财关注人员维护、预警处置情况" />
      <div class="dashboard-bottom-left-table">
        <div class="dashboard-bottom-left-table-left">
          <div>类型\派出所</div>
          <div>维护任务数</div>
          <div>完成数</div>
          <div>侵财预警数</div>
          <div>处置反馈</div>
        </div>
        <div class="dashboard-bottom-left-table-right">
          <div>
            <section>青阳</section>
            <section>花桥</section>
            <section>城北</section>
            <section>兵希</section>
            <section>其他</section>
          </div>
          <div v-for="(item, index) in tableList" :key="index">
            <section>
              <a-input v-model="item.qy" />
            </section>
            <section>
              <a-input v-model="item.hq" />
            </section>
            <section>
              <a-input v-model="item.cb" />
            </section>
            <section>
              <a-input v-model="item.bx" />
            </section>
            <section>
              <a-input v-model="item.other" />
            </section>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-content-btn">
        <a-button type="primary">保存</a-button>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u1509.png" />
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
      tableList: [
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { qy: 200, hq: 300, cb: 100, bx: 30, other: 100 }
      ]
    };
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
</style>
