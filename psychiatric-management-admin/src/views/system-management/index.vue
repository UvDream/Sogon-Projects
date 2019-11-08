<!--
 * @Author: xiahongxiu
 * @Date: 2019-11-07 11:04:34
 * @LastEditors: xiahongxiu
 * @LastEditTime: 2019-11-07 11:04:34
 * @Description: 系统管理
 * @Email: UvDream@163.com
 -->
<template>
  <div class="system">
    <!-- 账户管理 -->
    <Account />
    <!-- 人员管理 -->
    <Per />
    <!-- 日志管理 -->
    <Log />
  </div>
</template>

<script>
import Account from './account-management/index'
import Per from './person-management/index'
import Log from './log-management/index'
export default {
  components: {
    Account,
    Per,
    Log
  }
};
</script>

<style scoped lang="less"></style>
