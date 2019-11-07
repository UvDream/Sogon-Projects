<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 11:52:31
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-11-07 08:37:57
 * @Description: 首页
 * @Email: UvDream@163.com
 -->

<template>
  <div>
    首页
    <Columnar />
    <PieChart />
    <!-- 待办事项提醒-->
    <Modal
      title="待办事项"
      v-model="modal"
      :mask-closable="false"
      :closable="false"
      draggable
      scrollable
      width="600"
    >
      <div>您存在未处理的病患档案，请及时查看处理！</div>
      <div slot="footer">
        <Button size="large" @click="cancelModal()">取消</Button>
        <Button type="primary" size="large" @click="okModal">查看</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import api from "@/api/home/index";
import Columnar from "./components/columnar";
import PieChart from "./components/pie-chart";
export default {
  data() {
    return {
      modal: false
    };
  },
  components: {
    Columnar,
    PieChart
  },
  mounted() {
    api.isNeedDo().then(res => {
      if (res.success == true) {
        this.modal = true;
      }
    });
  },
  methods: {
    cancelModal() {
      this.modal = false;
    },
    okModal() {
      this.modal = false;
      this.$router.push("/fileAlreadyManagement");
    }
  }
};
</script>

<style scoped lang="less"></style>
