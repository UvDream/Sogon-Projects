<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 11:44:26
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-24 14:28:19
 * @Description: 发现界面
 * @Email: UvDream@163.com
 -->
<template>
  <div>
    <ForeignPatients />
    <Registration />
    <Btn />
  </div>
</template>

<script>
import ForeignPatients from "./components/find/foreign-patients";
import Registration from "./components/find/registration";
import Btn from "./components/button";
export default {
  components: {
    ForeignPatients,
    Registration,
    Btn
  }
};
</script>

<style>
</style>