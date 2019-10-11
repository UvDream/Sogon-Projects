<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-09 13:55:27
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 11:01:05
 * @Description: 科技技防运行
 * @Email: UvDream@163.com
 -->
<template>
  <div class="technical" style="padding-bottom:20px">
    <TopSelect :select-val="selectVal" :tab-val="tab" />
    <div class="dashboard-bottom" style="height:520px">
      <div class="dashboard-bottom-left">
        <Title title=" 科技技防运行质态" />
        <div class="mInput">
          <MoreInput name="摄像头总数" v-model="number" />
          <MoreInput name="摄像机在线率" v-model="number" />
          <MoreInput name="在线4G巡逻车" v-model="number" />
          <MoreInput name="在线3G摩巡数" v-model="number" />
          <MoreInput name="在线执法仪数" v-model="number" />
          <MoreInput name="在线警务通数" v-model="number" />
          <MoreInput name="一机一档完成数" v-model="number" />
          <MoreInput name="人像卡口运行数" v-model="number" />
        </div>
        <div class="dashboard-bottom-left-title">
          <a-icon
            type="file-text"
            style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
          />
          <span style="font-size:12px">派出所违法警情</span>
        </div>
        <div class="mInput">
          <MoreInput name="4G执法仪" v-model="number" />
          <MoreInput name="4G车辆" v-model="number" />
          <MoreInput name="移动接处警设备" v-model="number" />
          <MoreInput name="摄像机" v-model="number" />
          <MoreInput name="其他设备" v-model="number" />
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
          <img src="../../assets/images/u1043.png" />
        </div>
      </div>
    </div>
    <div class="dashboard-bottom" style="height:430px">
      <div class="dashboard-bottom-left">
        <Title title="执法仪质态" />
        <div class="mInput">
          <MoreInput name="上传总数" v-model="number" />
          <MoreInput name="关联数" v-model="number" />
          <MoreInput name="问题数" v-model="number" />
        </div>
        <div class="dashboard-bottom-left-title">
          <a-icon
            type="file-text"
            style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
          />
          <span style="font-size:12px">分布图</span>
        </div>
        <div class="mInput">
          <MoreInput name="4G执法仪" v-model="number" />
          <MoreInput name="4G车辆" v-model="number" />
          <MoreInput name="移动接处警设备" v-model="number" />
          <MoreInput name="摄像机" v-model="number" />
          <MoreInput name="其他设备" v-model="number" />
        </div>
        <div class="dashboard-bottom-left-content-btn">
          <a-button type="primary">保存</a-button>
        </div>
      </div>

      <div class="dashboard-bottom-right zf">
        <div class="dashboard-bottom-right-title">
          <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
          <span>可视化样例</span>
        </div>
        <div class="dashboard-bottom-right-content">
          <img src="../../assets/images/u1248.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopSelect from "../../components/top-select/topSelect";
import Title from "../../components/two-title/twoTitle";
import MoreInput from "../../components/more-input/index";

export default {
  components: {
    TopSelect,
    Title,
    MoreInput
  },
  data() {
    return {
      number: "11",
      selectVal: "",
      tab: 1
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
    top: 80px;
    width: 1px;
    height: 410px;
    background-color: #b3b3b3;
  }
}
.zf {
  &::before {
    content: "";
    position: absolute;
    top: 80px;
    width: 1px;
    height: 310px;
    background-color: #b3b3b3;
  }
}
.mInput {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
}
</style>
