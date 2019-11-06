<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 17:27:24
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 17:01:00
 * @Description: 新建档案
 * @Email: UvDream@163.com
 -->
<template>
  <div class="new">
    <TopStep />
    <!-- 发现 -->
    <Find v-if="status == 0" />
    <!-- 评定 -->
    <Assessment v-if="status == 1" />
    <!-- 治疗 -->
    <Treatment v-if="status == 2" />
    <!-- 帮扶 -->
    <Help v-if="status == 3" />
    <!-- 再次评定 -->
    <AgainAssessment v-if="status == 4" />
    <!-- 康复 -->
    <Guardianship v-if="status == 5" />
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
// 再次评定
import AgainAssessment from "./again-assessment";

export default {
  components: {
    TopStep,
    Find,
    Assessment,
    Treatment,
    Guardianship,
    Help,
    AgainAssessment
  },
  mounted() {
    this.$store.state.step.stepStatus = 5;
  },
  computed: {
    status: function() {
      return this.$store.state.step.stepStatus;
    }
  }
};
</script>

<style scoped lang="less"></style>
