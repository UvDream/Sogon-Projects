<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:27:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 11:46:30
 * @Description: 新建档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="new">
    <TopStep />
    <!-- 发现 -->
    <Find />
  </div>
</template>

<script>
import TopStep from "./components/top-step.vue";
import Find from "./find";
export default {
  components: {
    TopStep,
    Find
  }
};
</script>

<style scoped lang="less">
</style>