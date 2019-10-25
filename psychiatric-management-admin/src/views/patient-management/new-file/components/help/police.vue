<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-25 10:37:41
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-25 11:01:40
 * @Description: 监护民警帮扶
 * @Email: UvDream@163.com
 -->
<template>
  <div class="white-block">
    <TopMessage
      :title="'监护民警帮扶'"
      :message="'职责说明:会同卫生计生部门定期了解患者状况，督促村居和监护人做好治疗、监护等工作，配合精神医疗机构或监护人对病情不稳、有现实危害的重性患者送院治疗。'"
    />
    <div class="search">
      <cForm />
    </div>
    <cTable />
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
