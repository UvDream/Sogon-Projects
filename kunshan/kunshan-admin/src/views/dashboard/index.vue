<template>
  <div class="dashboard">
    <div class="dashboard-top">
      <a-select style="width: 250px;padding-left:14px" @change="selectChange" v-model="selectVal">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <div style="padding-right:14px">呵呵</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectVal: "lucy"
    };
  },
  methods: {
    selectChange() {
      console.log(this.selectVal);
    }
  }
};
</script>

<style lang="less" scoped>
.dashboard {
  &-top {
    width: 100%;
    height: 40px;
    background-color: #fff;
    // line-height: 40px;
    box-shadow: 0px 2px 8px 0px rgba(77, 119, 158, 0.2);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>