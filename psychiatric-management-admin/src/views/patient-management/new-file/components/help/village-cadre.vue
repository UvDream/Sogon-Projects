<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 08:57:18
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:22:22
 * @Description: 村居干部帮扶
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopMessage
      :title="'村居干部帮扶'"
      :message="
        '职责说明:经常到精神病人家庭进行走访，了解有关情况，上报有关信息，遇到异常动向及时与镇办、卫生计生部门和派出所民警联系处理。'
      "
      v-model="closed"
    />
    <transition name="slide">
      <div v-if="!closed">
        <div class="search">
          <cForm />
        </div>
        <cTable />
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
      closed: false
    };
  },
  methods: {}
};
</script>
