<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:27:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 10:24:53
 * @Description: 新建档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="new">
    <TopStep />
    <ForeignPatients />
    <Registration />
  </div>
</template>

<script>
import TopStep from "./components/top-step.vue";
import ForeignPatients from "./components/foreign-patients";
import Registration from "./components/registration";
export default {
  components: {
    TopStep,
    ForeignPatients,
    Registration
  }
};
</script>

<style scoped lang="less">
</style>