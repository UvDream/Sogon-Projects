<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:48:08
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-04 16:02:15
 * @Description: 防治医生帮扶
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopMessage
      :title="'防治医生帮扶'"
      :message="
        '职责说明:定期开展健康检查，并纳入社区随访管理，实行分类干预，指导监护人督促患者日常服药。'
      "
      v-model="closed"
    />
    <transition name="slide">
      <div v-if="!closed">
        <div class="search">
          <cForm v-model="formValidate.fzysbf" />
        </div>
        <cTable :code="2" />
      </div>
    </transition>
  </div>
</template>

<script>
import TopMessage from "./components/top-title";
import cTable from "./components/table";
import cForm from "./components/form";
export default {
  components: {
    TopMessage,
    cTable,
    cForm
  },
  data() {
    return {
      closed: false,
      formValidate: {
        fzysbf: {}
      }
    };
  },
  methods: {}
};
</script>
