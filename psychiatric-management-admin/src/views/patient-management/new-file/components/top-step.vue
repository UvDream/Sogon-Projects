<template>
  <div class="top-step">
    <Steps :current="1">
      <Step title="发现" icon="ios-person"></Step>
      <Step title="评定" icon="ios-camera"></Step>
      <Step title="治疗" icon="ios-mail"></Step>
      <Step title="监护" icon="ios-mail"></Step>
      <Step title="帮扶" icon="ios-mail"></Step>
    </Steps>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.top-step {
  height: 134px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>