<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 15:46:06
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-10 17:39:13
 * @Description: 警情分布
 * @Email: UvDream@163.com
 -->

<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <Title title="警情分布" />
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">派出所违法警情</span>
      </div>
      <div class="dashboard-bottom-left-table" style="width:450zpx">
        <div>
          <div class="dashboard-bottom-left-table-row">
            <section>派出所</section>
            <section>打架斗殴</section>
            <section>盗窃</section>
            <section>损害公共安全</section>
            <section>诈骗</section>
            <section>其他</section>
          </div>
          <div
            class="dashboard-bottom-left-table-row"
            v-for="(item,index) in tableList"
            :key="index"
          >
            <section>{{item.name}}</section>
            <section>{{item.dj}}</section>
            <section>{{item.dq}}</section>
            <section>{{item.sh}}</section>
            <section>{{item.zp}}</section>
            <section>{{item.other}}</section>
          </div>
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">
          本所共受理违法犯罪警情
          <a-input placeholder="数量" style="width:80px" />起
        </span>
      </div>
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>违法警情:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>群众报警:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>举报投诉:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>纠纷:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>交通类警情:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>火灾事故:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>经济类警情:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>其他行政违法:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>其他警情:</section>
            <a-input placeholder="数量" />
          </div>
          <div></div>
        </div>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">非法警情分布</span>
      </div>
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>非法盗窃:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>电话诈骗:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>盗窃电动车电瓶:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>打架斗殴:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>扒窃:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>嫖娼:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>盗窃车内财物:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>网络诈骗:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>盗窃电动车:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>赌博:</section>
            <a-input placeholder="数量" />
          </div>
        </div>
        <div class="dashboard-bottom-left-content-block">
          <div>
            <section>损坏公共财物:</section>
            <a-input placeholder="数量" />
          </div>
          <div>
            <section>其他违法警情:</section>
            <a-input placeholder="数量" />
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
        <img src="../../assets/images/u516.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../../components/two-titlw/twoTitle";

export default {
  components: {
    Title
  },
  data() {
    return {
      radioVal: 1,
      tableList: [
        { name: "派出所1", dj: 10, dq: 20, sh: 13, zp: 90, other: 10 },
        { name: "派出所2", dj: 10, dq: 20, sh: 13, zp: 90, other: 10 },
        { name: "派出所3", dj: 10, dq: 20, sh: 13, zp: 90, other: 10 }
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
.dashboard-bottom-right {
  &::before {
    content: "";
    position: absolute;
    top: 80px;
    width: 1px;
    height: 800px;
    background-color: #b3b3b3;
  }
}
</style>
