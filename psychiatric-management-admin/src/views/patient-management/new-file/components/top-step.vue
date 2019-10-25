<template>
  <div class="top-step">
    <Steps :current="status">
      <Step title="发现" icon="ios-person"></Step>
      <Step title="评定" icon="md-brush"></Step>
      <Step title="治疗" icon="ios-heart"></Step>
      <Step title="四帮一" icon="ios-hand"></Step>
      <Step title="康复" icon="ios-happy"></Step>
    </Steps>
  </div>
</template>

<script>
export default {
  computed: {
    status: function() {
      return this.$store.state.step.stepStatus;
    }
  }
};
</script>

<style scoped lang="less">
.top-step {
  height: 134px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
}
</style>
