<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:27:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-23 17:39:13
 * @Description: 新建档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="new">
    <TopStep />
    <ForeignPatients />
  </div>
</template>

<script>
import TopStep from "./components/top-step.vue";
import ForeignPatients from "./components/foreign-patients";
export default {
  components: {
    TopStep,
    ForeignPatients
  }
};
</script>

<style scoped lang="less">
</style>