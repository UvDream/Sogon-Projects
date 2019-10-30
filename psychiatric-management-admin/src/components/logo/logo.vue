<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-22 13:52:22
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-30 10:44:29
 * @Description: logo
 * @Email: UvDream@163.com
 -->
<template>
  <div class="logo">
    <img src="../../assets/fonts/login/logo.png" width="50" alt />
    <div>徐州重度精神病患者</div>
    <div>帮扶管控系统</div>
    <div>HELP MANAGEMENT AND CONTROL SYSTEM</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.logo {
  // color: #fff;
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  & > div:nth-child(2) {
    font-size: 16px;
    color: #333;
    letter-spacing: 1px;
  }
  & > div:nth-child(3) {
    font-size: 20px;
    color: #53a7a9;
    letter-spacing: 1px;
    line-height: 22px;
  }
  & > div:nth-child(4) {
    font-size: 12px;
    -webkit-transform: scale(0.5);
    color: #999999;
    letter-spacing: 0;
  }
}
</style>
