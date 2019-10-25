<template>
  <div class="white-block btn">
    <div>
      <Button type="info">取消</Button>
      <Button type="primary">保存</Button>
      <Button type="primary">保存并推送</Button>
      <Button type="primary" ghost @click="pushFunc">推送</Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    pushFunc() {
      this.$store.state.step.stepStatus < 5
        ? (this.$store.state.step.stepStatus =
            this.$store.state.step.stepStatus + 1)
        : "";
    }
  }
};
</script>

<style scoped lang="less">
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  & > div {
    .ivu-btn {
      margin: 0 10px;
    }
    .ivu-btn-info {
      background: #bec4c4;
      border-radius: 4px;
      border-radius: 4px;
      border: 1px solid #bec4c4;
    }
  }
}
</style>
