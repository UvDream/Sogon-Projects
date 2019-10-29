<template>
  <div class="white-block btn">
    <div>
      <!-- 转发弹窗 -->
      <Forward />
      <!-- 办结弹窗 -->
      <SetUp />
      <!-- 退回弹窗-->
      <Return />
      <Button type="info">取消</Button>
      <Button type="primary" v-if="status==0">保存</Button>
      <Button type="primary" v-if="status==0">保存并推送</Button>
      <Button
        type="primary"
        ghost
        @click="pushFunc"
        v-if="status==0 || status ==1 || status==2 ||status==3"
      >转发</Button>
      <Button type="primary" v-if=" status ==1 || status==2 ||status==4">办结</Button>
      <Button type="primary" ghost v-if=" status ==1||status==2 ||status==3 ||status==4">退回</Button>
    </div>
  </div>
</template>

<script>
import Forward from "./modal/forward";
import SetUp from "./modal/setUp";
import Return from "./modal/return";
export default {
  computed: {
    status: function() {
      console.log(this.$store.state.step.stepStatus);
      return this.$store.state.step.stepStatus;
    }
  },
  components: {
    Forward,
    SetUp,
    Return
  },
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
