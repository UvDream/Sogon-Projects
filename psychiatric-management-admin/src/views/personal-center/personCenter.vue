<!--
 * @Author: xiahongxiu
 * @Date: 2019-10-28 09:50:34
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-10-28 09:50:34
 * @Description: 个人中心
 * @Email: UvDream@163.com
 -->
<template>
  <div class="per-center">
    <!-- 账户信息 -->
    <Personaccount />
    <!-- 信息通知 -->
    <Notification />
    <!-- 待办档案 -->
    <Filed />
  </div>
</template>

<script>
import Personaccount from './personal-account/personalAccount'
import Notification from './notification-management/notificationManagement'
import Filed from './file-already-filed/fileAlreadyFiled'
export default {
  components: {
    Personaccount,
    Notification,
    Filed
  }
};
</script>

<style scoped lang="less"></style>
