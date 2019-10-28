<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-28 17:22:16
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-28 17:56:50
 * @Description: 转发弹窗
 * @Email: UvDream@163.com
 -->

<template>
  <Modal v-model="modal" title="档案转发" @on-ok="ok" @on-cancel="cancel"></Modal>
</template>

<script>
export default {
  data() {
    return {
      modal: true
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  }
};
</script>

<style>
</style>