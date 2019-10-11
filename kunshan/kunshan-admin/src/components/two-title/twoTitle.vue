<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-10 17:25:49
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-11 16:18:15
 * @Description: 小头部
 * @Email: UvDream@163.com
 -->
<template>
  <div class="dashboard-bottom-left-title">
    <a-icon type="file-text" style="margin:0 10px;font-size:22px;position:relative;top:3px;" />
    <span>{{ title }}</span>
    <a-checkbox style="margin-left:10px" v-if="isCheck">全选</a-checkbox>
    <a-radio-group @change="radioChange" v-model="radioVal" style="margin-left:40px;">
      <a-radio :value="1">真实数据</a-radio>
      <a-radio :value="2">人工数据</a-radio>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    isCheck: {
      type: Boolean,
      default: false
    },
    title: {
      default: "异常报警分析"
    }
  },
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
@import url("../../views/police-quality/policeQuality.less");
</style>
