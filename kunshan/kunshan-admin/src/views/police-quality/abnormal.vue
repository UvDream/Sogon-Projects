<template>
  <div class="dashboard-bottom">
    <div class="dashboard-bottom-left">
      <div class="dashboard-bottom-left-title">
        <a-icon type="file-text" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>异常报警分析</span>
        <a-radio-group @change="radioChange" v-model="radioVal" style="margin-left:40px;">
          <a-radio :value="1">真实数据</a-radio>
          <a-radio :value="2">人工数据</a-radio>
        </a-radio-group>
      </div>
      <div class="dashboard-bottom-left-title">
        <a-icon
          type="file-text"
          style="margin:0 10px 0px 20px;font-size:18px;position:relative;top:3px;"
        />
        <span style="font-size:12px">最近24小时重复报警电话TOP10</span>
      </div>
      <div class="dashboard-bottom-left-content">
        <div class="dashboard-bottom-left-content-four">
          <div class="dashboard-bottom-left-content-four-title">
            <section>报警电话</section>
            <section>报警次数</section>
            <section>报警电话</section>
            <section>报警次数</section>
          </div>
        </div>
      </div>
    </div>
    <div class="dashboard-bottom-right">
      <div class="dashboard-bottom-right-title">
        <a-icon type="exception" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
        <span>可视化样例</span>
      </div>
      <div class="dashboard-bottom-right-content">
        <img src="../../assets/images/u752.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radioVal: 1
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
