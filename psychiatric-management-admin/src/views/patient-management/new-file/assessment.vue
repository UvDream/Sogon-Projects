<!--
 * @Author: wangzhongjie
 * @Date: 2019-10-24 11:52:00
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-10-29 10:45:43
 * @Description: 评定
 * @Email: UvDream@163.com
 -->
<template>
  <div>   
    <!-- 外地病患 -->
    <ForeignPatients v-if="isLocal==0"/>
    <!-- 本地病患 -->
    <LocalPatient v-if="isLocal==1" />
    <Btn />
  </div>
</template>

<script>
import ForeignPatients from "./components/assessment/foreign-patients";
import LocalPatient from "./components/assessment/local-patient";
import Btn from "./components/button";

export default {
  components: {
    ForeignPatients,
    LocalPatient,
    Btn
  },
  computed:{
    isLocal:function(){
      return this.$store.state.step.isLocal
    }
  }
};
</script>

<style></style>
