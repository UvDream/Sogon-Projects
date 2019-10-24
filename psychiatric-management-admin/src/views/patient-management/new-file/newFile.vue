<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:27:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 19:37:10
 * @Description: 新建档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="new">
    <TopStep />
    <!-- 发现 -->
    <!-- <Find /> -->
    <!-- 评定 -->
    <!-- <Assessment /> -->
    <!-- 治疗 -->
    <!-- <Treatment /> -->
    <!-- 帮扶 -->
    <Help />
    <!-- 康复 -->
    <!-- <Guardianship /> -->
  </div>
</template>

<script>
import TopStep from "./components/top-step.vue";
import Find from "./find";
// 评定
import Assessment from "./assessment";
// 治疗
import Treatment from "./treatment";
// 监护
import Guardianship from "./guardianship";
// 帮扶
import Help from "./help";
export default {
  components: {
    TopStep,
    Find,
    Assessment,
    Treatment,
    Guardianship,
    Help
  }
};
</script>

<style scoped lang="less">
</style>