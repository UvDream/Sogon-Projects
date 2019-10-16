<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 10:24:15
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-16 14:33:20
 * @Description: 警情质态分析
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="警情质态分析" v-model="data" />
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>问题总数:</section>
            <a-input placeholder="数量" :disabled="disabled" />
          </div>
          <div>
            <section>接警问题:</section>
            <a-input placeholder="数量" :disabled="disabled" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>处警问题数据:</section>
            <a-input placeholder="数量" :disabled="disabled" />
          </div>
          <div>
            <section>协警问题数:</section>
            <a-input placeholder="数量" :disabled="disabled" />
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">警情数据质量</span>
      </div>
      <div class="dashboard-bottom-left-table">
        <!-- <div class="dashboard-bottom-left-table-left">
          <div>/</div>
          <div>区域评估错误</div>
          <div>与类别不一致</div>
          <div>警情不完整</div>
          <div>物品未输入</div>
          <div>标注退回</div>
          <div>人员未输入</div>
          <div>类别不恰当</div>
        </div>-->
        <div class="dashboard-bottom-left-table-right">
          <div>
            <section>/</section>
            <section>青阳</section>
            <section>花桥</section>
            <section>城北</section>
            <section>兵希</section>
            <section>其他</section>
          </div>
          <div v-for="(item, index) in tableList" :key="index">
            <section>{{item.name}}</section>
            <section>
              <a-input v-model="item.qy" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.hq" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.cb" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.bx" :disabled="disabled" />
            </section>
            <section>
              <a-input v-model="item.other" :disabled="disabled" />
            </section>
          </div>
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
        <img src="../../assets/images/u325.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-title/twoTitle";
import data from "../../mixin/data";

export default {
  mixins: [data],
  components: {
    Title
  },
  data() {
    return {
      radioVal: 1,
      tableList: [
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 },
        { name: "区域不一致", qy: 200, hq: 300, cb: 100, bx: 30, other: 100 }
      ]
    };
  },
  methods: {
    radioChange(e) {}
  }
};
</script>

<style lang="less" scoped>
@import url("./policeQuality.less");
</style>
