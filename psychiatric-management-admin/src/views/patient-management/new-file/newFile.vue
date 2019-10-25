<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:27:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 11:05:32
 * @Description: 新建档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="new">
    <TopStep />
    <!-- 发现 -->
    <Find v-if="status==0" />
    <!-- 评定 -->
    <Assessment v-if="status==1" />
    <!-- 治疗 -->
    <Treatment v-if="status==2" />
    <!-- 帮扶 -->
    <Help v-if="status==3" />
    <!-- 康复 -->
    <Guardianship v-if="status==4" />
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
  },
  computed: {
    status: function() {
      return this.$store.state.step.stepStatus;
    }
  }
};
</script>

<style scoped lang="less">
</style>