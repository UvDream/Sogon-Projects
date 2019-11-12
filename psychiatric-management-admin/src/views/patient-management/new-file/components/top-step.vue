<template>
  <div class="top-step">
    <div style="margin:0 auto;display:flex;">
      <div v-for="(item,index) in list" :key="index" class="top-step-block">
        <div class="top-step-block-body" :class="{'isSelect':status>=index}" @click="btnJump(index)">
          <div>
            <Icon :type="item.icon" size="18" />
            <div>{{item.name}}</div>
          </div>
        </div>
        <div
          class="top-step-block-next"
          :class="[{'isDot':status>=index},{'noDot':index+1==list.length}]"
        >
          <div></div>
        </div>
      </div>
    </div>

    <!-- <Steps :current="status">
      <Step title="发现" icon="ios-person"></Step>
      <Step title="评定" icon="md-brush"></Step>
      <Step title="治疗" icon="ios-heart"></Step>
      <Step title="四帮一" icon="ios-hand"></Step>
      <Step title="康复" icon="ios-happy"></Step>
    </Steps>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: "发现", icon: "ios-person" },
        { name: "初步处理", icon: "md-brush" },
        { name: "评定治疗", icon: "ios-heart" },
        { name: "四帮一", icon: "ios-hand" },
        { name: "再次评定", icon: "ios-color-wand" },
        { name: "脱离管控", icon: "ios-happy" }
      ]
    };
  },
  computed: {
    status: function() {
      return this.$store.state.step.stepStatus;
    }
  },
  methods: {
    btnJump(stepData) {
      this.$store.state.step.stepStatus = stepData;
    }
  }
};
</script>

<style scoped lang="less">
.isSelect {
  // background-color: #53a7a9 !important;
  background-image: url("../../../../assets/imgs.png") !important;
}
.isDot {
  border-top: 2px dotted #53a7a9 !important;
  & > div {
    border-left-color: #53a7a9 !important;
  }
}
.noDot {
  border: none !important;
  & > div {
    border: none !important;
  }
}
.top-step {
  height: 134px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 0 15px 0 rgba(14, 37, 38, 0.06);
  &-block {
    position: relative;
    left: 20px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-next {
      width: 75px;
      border-top: 2px dotted #c6cbcb;
      margin: 0 10px;
      position: relative;
      & > div {
        position: absolute;
        top: -7px;
        right: -10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-left-color: #c6cbcb;
        content: "";
      }
    }
    &-body {
      width: 100px;
      height: 100px;
      color: #fff;
      border-radius: 8px;
      background-image: url("../../../../assets/img.png");
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>
